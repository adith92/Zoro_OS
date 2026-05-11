import fs from 'fs';
import path from 'path';
import { load } from 'cheerio';
import { fileURLToPath } from 'url';
import { 
  VtechEndpoint, 
  VtechEndpointParam, 
  VtechParamType,
  VtechOutputType 
} from '../src/types/vtech.js';
import { classifyVtechEndpointSafety } from '../src/api/apiSafety.js';
import { inferApiOutputType } from '../src/api/apiOutput.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_URL = 'https://api.vtech.biz.id/api/features';

async function syncZORODocs() {
  console.log('Fetching VTECH documentation from:', DOCS_URL);
  
  try {
    const res = await fetch(DOCS_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch docs. Status: ${res.status}`);
    }
    
    const json = await res.json();
    const rawFeatures = json.features || [];
    
    const endpoints: VtechEndpoint[] = [];
    let idCounter = 1;

    rawFeatures.forEach((feat: any) => {
      // Create endpoint details
      const label = feat.name || feat.path;
      const category = feat.category || 'Unknown';
      
      const params: VtechEndpointParam[] = [];
      const rawParams = feat.params || [];
      const paramsMeta = feat.paramsMeta || {};
      
      const method = (feat.method || 'GET').toUpperCase() as 'GET' | 'POST';

      rawParams.forEach((p: string) => {
        if (p.toLowerCase() === 'apikey') return;
        
        // Infer param type
        let type: VtechParamType = 'text';
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
      const safety = classifyVtechEndpointSafety({
        label,
        category,
        endpoint: feat.path,
        rawUrl: 'https://api.vtech.biz.id' + feat.path
      });
      
      // Infer Output Type
      let outputType: VtechOutputType = 'json';
      if (feat.responseType) {
         const rs = feat.responseType.toLowerCase();
         if (rs.includes('image')) outputType = 'image';
         else if (rs.includes('video') || rs.includes('mp4')) outputType = 'video';
         else if (rs.includes('audio') || rs.includes('mp3')) outputType = 'audio';
         else if (rs.includes('download')) outputType = 'download';
         else if (rs.includes('json')) outputType = 'json';
         else if (rs.includes('text')) outputType = 'text';
      } else {
         outputType = inferApiOutputType({
          label,
          category,
          endpoint: feat.path
         } as VtechEndpoint);
      }

      endpoints.push({
        id: `ep_${idCounter++}`,
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
      path.join(targetDir, 'vtechEndpoints.generated.ts'),
      `import { VtechEndpoint } from '../types/vtech';\n\nexport const GENERATED_VTECH_ENDPOINTS: VtechEndpoint[] = ${JSON.stringify(endpoints, null, 2)};`
    );
    
    const meta = { lastSynced: new Date().toISOString(), count: endpoints.length };
    fs.writeFileSync(
      path.join(targetDir, 'vtechSyncMeta.generated.ts'),
      `export const VTECH_SYNC_META = ${JSON.stringify(meta, null, 2)};`
    );
    
    console.log('Successfully generated endpoints.');
    
  } catch (err: any) {
    console.error('Failed to sync VTECH docs:', err);
    process.exit(1);
  }
}

syncZORODocs();
