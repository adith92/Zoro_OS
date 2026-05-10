import fs from 'fs';
import path from 'path';
import { load } from 'cheerio';
import { fileURLToPath } from 'url';
import { 
  VynaaEndpoint, 
  VynaaEndpointParam, 
  VynaaParamType,
  VynaaOutputType 
} from '../src/types/vynaa.js';
import { classifyVynaaEndpointSafety } from '../src/api/vynaaSafety.js';
import { inferVynaaOutputType } from '../src/api/vynaaOutput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_URL = 'https://api.vtech.biz.id/api/features';

async function syncVynaaDocs() {
  console.log('Fetching Vynaa documentation from:', DOCS_URL);
  
  try {
    const res = await fetch(DOCS_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch docs. Status: ${res.status}`);
    }
    
    const json = await res.json();
    const rawFeatures = json.features || [];
    
    const endpoints: VynaaEndpoint[] = [];
    let idCounter = 1;

    rawFeatures.forEach((feat: any) => {
      // Create endpoint details
      const label = feat.name || feat.path;
      const category = feat.category || 'Unknown';
      
      const params: VynaaEndpointParam[] = [];
      const rawParams = feat.params || [];
      const paramsMeta = feat.paramsMeta || {};
      
      const method = (feat.method || 'GET').toUpperCase() as 'GET' | 'POST';

      rawParams.forEach((p: string) => {
        if (p.toLowerCase() === 'apikey') return;
        
        // Infer param type
        let type: VynaaParamType = 'text';
        if (p.toLowerCase().includes('url') || p.toLowerCase().includes('image') || p.toLowerCase().includes('avatar') || p.toLowerCase().includes('background')) type = 'url';
        else if (p.toLowerCase().includes('color')) type = 'color';
        else if (['amount', 'no', 'level', 'exp', 'nomor', 'tanggal', 'bulan', 'tahun', 'jumlah', 'likes', 'dislikes', 'resolusi'].includes(p.toLowerCase())) type = 'number';
        
        let paramLabel = p;
        if (p === 'imageUrl') paramLabel = 'Image URL';
        if (p === 'url') paramLabel = 'URL';
        
        let isRequired = true;
        if (paramsMeta[p] && paramsMeta[p].required === false) {
           isRequired = false;
        }

        params.push({
          name: p,
          label: paramLabel,
          type,
          required: isRequired
        });
      });

      // Safety check
      const safety = classifyVynaaEndpointSafety({
        label,
        category,
        endpoint: feat.path,
        rawUrl: 'https://api.vtech.biz.id' + feat.path
      });
      
      // Infer Output Type
      let outputType: VynaaOutputType = 'json';
      if (feat.responseType) {
         const rs = feat.responseType.toLowerCase();
         if (rs.includes('image')) outputType = 'image';
         else if (rs.includes('video') || rs.includes('mp4')) outputType = 'video';
         else if (rs.includes('audio') || rs.includes('mp3')) outputType = 'audio';
         else if (rs.includes('download')) outputType = 'download';
         else if (rs.includes('json')) outputType = 'json';
         else if (rs.includes('text')) outputType = 'text';
      } else {
         outputType = inferVynaaOutputType({
          label,
          category,
          endpoint: feat.path
         } as VynaaEndpoint);
      }

      endpoints.push({
        id: `vynaa_ep_${idCounter++}`,
        label,
        category,
        group: category,
        endpoint: feat.path,
        method,
        params,
        description: feat.description || `Endpoint for ${label}`,
        outputType,
        plan: feat.plan || 'free',
        safe: safety.safe,
        enabledByDefault: safety.enabledByDefault,
        sensitiveReason: safety.sensitiveReason,
        tags: safety.tags,
        rawUrl: 'https://api.vtech.biz.id' + feat.path
      });
    });

    console.log(`Found ${endpoints.length} endpoints`);
    
    // Write out
    const targetDir = path.join(__dirname, '../src/data');
    if (!fs.existsSync(targetDir)) {
       fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(targetDir, 'vynaaEndpoints.generated.ts'),
      `import { VynaaEndpoint } from '../types/vynaa';\n\nexport const GENERATED_VYNAA_ENDPOINTS: VynaaEndpoint[] = ${JSON.stringify(endpoints, null, 2)};`
    );
    
    const meta = { lastSynced: new Date().toISOString(), count: endpoints.length };
    fs.writeFileSync(
      path.join(targetDir, 'vynaaSyncMeta.generated.ts'),
      `export const VYNAA_SYNC_META = ${JSON.stringify(meta, null, 2)};`
    );
    
    console.log('Successfully generated endpoints.');
    
  } catch (err: any) {
    console.error('Failed to sync Vynaa docs:', err);
    process.exit(1);
  }
}

syncVynaaDocs();
