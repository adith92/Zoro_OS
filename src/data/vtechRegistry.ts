import { VtechEndpoint } from '@/types/vtech';
import { FALLBACK_VTECH_ENDPOINTS } from './vtechEndpoints.fallback';

// We generated it in the prebuild script, it SHOULD exist. We did generate it even if empty!
import { GENERATED_VTECH_ENDPOINTS as Generated } from './vtechEndpoints.generated';

// Merge and fix up
const allEndpoints = [...(Generated || []), ...FALLBACK_VTECH_ENDPOINTS];

const uniqueEndpointsMap = new Map<string, VtechEndpoint>();

allEndpoints.forEach(ep => {
   // Normalize categories
   let category = ep.category || 'unknown';
   const lowerCat = category.toLowerCase();
   
   if (['ai', 'image', 'tools', 'search', 'downloader', 'news', 'games', 'islamic'].includes(lowerCat)) {
       category = lowerCat;
   } else if (category === 'AI') {
       category = 'ai';
   } else if (category === 'Tools') {
       category = 'tools';
   }

   // Fix missing fields
   const safeEp: VtechEndpoint = {
       ...ep,
       category: category,
       group: ep.group || category,
       tags: ep.tags || []
   };

   // Auto-enable safe VTECH AI endpoints
   if (safeEp.endpoint.startsWith('/api/ai/')) {
       safeEp.category = 'ai';
       if (safeEp.sensitiveReason === 'Unrecognized category: AI') {
           safeEp.safe = true;
           safeEp.enabledByDefault = true;
           safeEp.sensitiveReason = undefined;
           safeEp.tags = safeEp.tags.filter(t => t !== 'unsafe' && t !== 'sensitive');
       } else if (!safeEp.sensitiveReason) {
           safeEp.safe = true;
           safeEp.enabledByDefault = true;
       }
   }
   
   // Deduplicate by endpoint + label
   const key = `${safeEp.endpoint}_${safeEp.label}`;
   if (!uniqueEndpointsMap.has(key)) {
       uniqueEndpointsMap.set(key, safeEp);
   }
});

// Sort by category then label
export const VTECH_ENDPOINTS = Array.from(uniqueEndpointsMap.values()).sort((a, b) => {
    if (a.category === b.category) {
        return a.label.localeCompare(b.label);
    }
    return a.category.localeCompare(b.category);
});

export function getSafeVtechEndpoints() {
    return VTECH_ENDPOINTS.filter(e => e.safe && e.enabledByDefault);
}

export function getEndpointsByCategory(category: string) {
    return VTECH_ENDPOINTS.filter(e => e.category === category);
}

export function getDefaultVtechChatEndpoint(): string {
    const aiEndpoints = getSafeVtechEndpoints().filter(e => e.category === 'ai');
    
    // Priority: Groq Compound > AI4Chat > first /api/ai/ > fallback non-simsimi
    const groq = aiEndpoints.find(e => e.label.toLowerCase().includes('groq compound') || e.endpoint.includes('/groq-compound'));
    if (groq) return groq.id;

    const ai4chat = aiEndpoints.find(e => e.label.toLowerCase().includes('ai4chat') || e.endpoint.includes('/ai4chat'));
    if (ai4chat) return ai4chat.id;
    
    const anyNew = aiEndpoints.find(e => e.endpoint.startsWith('/api/ai/'));
    if (anyNew) return anyNew.id;
    
    const fallback = aiEndpoints.find(e => !e.id.includes('simsimi') && e.endpoint !== '/ai/ai/claude');
    if (fallback) return fallback.id;
    
    return aiEndpoints[0]?.id || 'ai_claude'; // the last resort
}

export function getEndpointById(id: string) {
    return VTECH_ENDPOINTS.find(e => e.id === id);
}

export function getZOROCategories() {
    const cats = new Set<string>();
    VTECH_ENDPOINTS.forEach(e => cats.add(e.category));
    return Array.from(cats);
}

export function searchVtechEndpoints(query: string) {
    const lower = query.toLowerCase();
    return VTECH_ENDPOINTS.filter(e => 
        e.label.toLowerCase().includes(lower) || 
        e.endpoint.toLowerCase().includes(lower) ||
        e.description.toLowerCase().includes(lower)
    );
}
