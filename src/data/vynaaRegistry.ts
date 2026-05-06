import { VynaaEndpoint } from '@/types/vynaa';
import { FALLBACK_VYNAA_ENDPOINTS } from './vynaaEndpoints.fallback';

// We generated it in the prebuild script, it SHOULD exist. We did generate it even if empty!
import { GENERATED_VYNAA_ENDPOINTS as Generated } from './vynaaEndpoints.generated';

// Merge and fix up
const allEndpoints = [...(Generated || []), ...FALLBACK_VYNAA_ENDPOINTS];

const uniqueEndpointsMap = new Map<string, VynaaEndpoint>();

allEndpoints.forEach(ep => {
   // Fix missing fields
   const safeEp: VynaaEndpoint = {
       ...ep,
       group: ep.group || ep.category,
       tags: ep.tags || []
   };
   
   // Deduplicate by endpoint + label
   const key = `${safeEp.endpoint}_${safeEp.label}`;
   if (!uniqueEndpointsMap.has(key)) {
       uniqueEndpointsMap.set(key, safeEp);
   }
});

// Sort by category then label
export const VYNAA_ENDPOINTS = Array.from(uniqueEndpointsMap.values()).sort((a, b) => {
    if (a.category === b.category) {
        return a.label.localeCompare(b.label);
    }
    return a.category.localeCompare(b.category);
});

export function getSafeVynaaEndpoints() {
    return VYNAA_ENDPOINTS.filter(e => e.safe && e.enabledByDefault);
}

export function getEndpointsByCategory(category: string) {
    return VYNAA_ENDPOINTS.filter(e => e.category === category);
}

export function getEndpointById(id: string) {
    return VYNAA_ENDPOINTS.find(e => e.id === id);
}

export function getVynaaCategories() {
    const cats = new Set<string>();
    VYNAA_ENDPOINTS.forEach(e => cats.add(e.category));
    return Array.from(cats);
}

export function searchVynaaEndpoints(query: string) {
    const lower = query.toLowerCase();
    return VYNAA_ENDPOINTS.filter(e => 
        e.label.toLowerCase().includes(lower) || 
        e.endpoint.toLowerCase().includes(lower) ||
        e.description.toLowerCase().includes(lower)
    );
}
