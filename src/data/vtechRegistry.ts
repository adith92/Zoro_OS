import { VtechEndpoint } from '@/types/vtech';
import { FALLBACK_VTECH_ENDPOINTS } from './vtechEndpoints.fallback';

// We generated it in the prebuild script, it SHOULD exist. We did generate it even if empty!
import { GENERATED_VTECH_ENDPOINTS as Generated } from './vtechEndpoints.generated';

// Merge and fix up
const allEndpoints = [...(Generated || []), ...FALLBACK_VTECH_ENDPOINTS];

const uniqueEndpointsMap = new Map<string, VtechEndpoint>();

allEndpoints.forEach(ep => {
   // Fix missing fields
   const safeEp: VtechEndpoint = {
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
