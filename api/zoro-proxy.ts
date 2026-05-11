import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // 1. Hanya boleh call host backend Zoro
    const targetHost = process.env.VITE_ZORO_API_BASE_URL || 'https://api.vtech.biz.id';
    
    // 2. Endpoint harus dimulai dengan "/"
    const endpointPath = req.url?.replace('/api/zoroApi-proxy', '') || '/';
    
    // 3. Endpoint tidak boleh mengandung "http://", "https://", "..", atau encoded path traversal
    if (
      endpointPath.includes('http://') || 
      endpointPath.includes('https://') || 
      endpointPath.includes('..') ||
      endpointPath.includes('%2e%2e')
    ) {
      return res.status(400).json({ error: 'Invalid path' });
    }

    // 4. Ambil apikey dari request body/query
    // 5. Forward params ke ZORO
    const searchParams = new URLSearchParams();
    
    if (req.query) {
      for (const key in req.query) {
        searchParams.append(key, String(req.query[key]));
      }
    }
    
    if (req.body && typeof req.body === 'object') {
      for (const key in req.body) {
         if (!searchParams.has(key)) {
             searchParams.append(key, String(req.body[key]));
         }
      }
    }

    const targetUrl = new URL(targetHost + endpointPath);
    targetUrl.search = searchParams.toString();

    // Do not log API key
    // console.log('Forwarding to', targetUrl.pathname);

    const response = await fetch(targetUrl.toString(), {
      method: req.method || 'GET',
      headers: {
        Accept: 'application/json, text/plain, image/*, audio/*, video/*, */*',
      }
    });

    // 6. Return JSON/blob/text sesuai content-type
    const contentType = response.headers.get('content-type') || '';
    
    res.setHeader('Content-Type', contentType);
    
    // CORS headers just in case
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (!response.ok) {
       res.status(response.status);
    }
    
    if (contentType.includes('application/json')) {
        const json = await response.json();
        return res.json(json);
    } else if (contentType.includes('text/')) {
        const text = await response.text();
        return res.send(text);
    } else {
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        return res.send(buffer);
    }

  } catch (error: any) {
    console.error('Proxy Error:', error.message);
    return res.status(500).json({ error: 'Proxy Error', details: error.message });
  }
}
