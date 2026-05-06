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

const DOCS_URL = 'https://vynaa.web.id/documentation';

async function syncVynaaDocs() {
  console.log('Fetching Vynaa documentation from:', DOCS_URL);
  
  try {
    const res = await fetch(DOCS_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch docs. Status: ${res.status}`);
    }
    
    const html = await res.text();
    const $ = load(html);
    
    const endpoints: VynaaEndpoint[] = [];
    let currentCategory = 'Unknown';
    let idCounter = 1;

    // A simple parsing strategy.
    // Assuming category is in some heading, and urls are in <a> tags or code blocks.
    // Based on usual bot api docs:
    $('*').each((i, el: any) => {
      const tagName = el.tagName?.toLowerCase() || '';
      
      if (['h1', 'h2', 'h3', 'h4', 'h5'].includes(tagName)) {
        currentCategory = $(el).text().trim();
      }
      
      if (tagName === 'a') {
        const href = $(el).attr('href');
        if (href && href.startsWith('https://vynaa.web.id/')) {
          let endpointPath = href.replace('https://vynaa.web.id', '');
          
          if (!endpointPath.startsWith('/')) {
             endpointPath = '/' + endpointPath;
          }
           
          // Remove query params to extract base url and params
          const urlObj = new URL(href);
          const rawParams = Array.from(urlObj.searchParams.keys());
          
          // Get label from the list item text or the link text
          let label = $(el).text().trim() || $(el).parent().text().trim() || endpointPath;
           // If label contains the URL, try to clean it
          if (label.includes('https://')) {
             label = label.replace(href, '').trim();
             if (label.startsWith('- ')) label = label.substring(2);
          }
          if (!label) label = endpointPath;

          const params: VynaaEndpointParam[] = [];
          
          rawParams.forEach(p => {
             if (p.toLowerCase() === 'apikey') return; // handled globally
             
             let type: VynaaParamType = 'text';
             if (p.toLowerCase().includes('url') || p.toLowerCase().includes('profile')) type = 'url';
             if (p.toLowerCase() === 'color') type = 'color';
             if (['amount', 'no', 'level', 'exp', 'nomor'].includes(p.toLowerCase())) type = 'number';
             
             let paramLabel = p;
             if (p === 'imageUrl') paramLabel = 'Image URL';
             if (p === 'q' || p === 'query') paramLabel = 'Query';
             if (p === 'url') paramLabel = 'URL';
             if (p === 'no') paramLabel = 'Number';
             
             params.push({
                 name: p,
                 label: paramLabel,
                 type,
                 required: true
             });
          });

          // Safety
          const safety = classifyVynaaEndpointSafety({
              label,
              category: currentCategory,
              endpoint: endpointPath,
              rawUrl: href
          });
          
          // Construct partial for output inference
          const partialEndpoint: Partial<VynaaEndpoint> = {
              label,
              category: currentCategory,
              endpoint: endpointPath
          };
          
          const outputType = inferVynaaOutputType(partialEndpoint as VynaaEndpoint);
          
          endpoints.push({
              id: `vynaa_ep_${idCounter++}`,
              label,
              category: currentCategory,
              group: currentCategory,
              endpoint: endpointPath,
              method: 'GET',
              params,
              description: `Endpoint for ${label}`,
              outputType,
              safe: safety.safe,
              enabledByDefault: safety.enabledByDefault,
              sensitiveReason: safety.sensitiveReason,
              tags: safety.tags,
              rawUrl: href
          });
        }
      }
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
