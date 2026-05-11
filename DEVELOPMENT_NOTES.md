# DEVELOPMENT_NOTES

## Code Structure & Migration Rules
- We transitioned away from hardcoded names pointing towards specific previous API developers (e.g. Vynaa, Sumopod) out of cleanliness. 
- You will now find all logic relating to tool actions situated in `src/api/universalApi.ts` and UI in `src/components/modules/UniversalToolPage.tsx`.

## Adding new Endpoints
1. Make sure your provider follows the `ApiEndpoint` metadata schema in `src/types/api.ts`.
2. Generate metadata via `npm run sync:api` utilizing `scripts/sync-api-docs.ts`.
3. Check `src/data/apiSyncMeta.generated.ts` for safety constraints.
4. Ensure you don't leak your `.env.local` or environment keys.
