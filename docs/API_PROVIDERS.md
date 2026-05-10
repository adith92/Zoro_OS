# API Providers

## Primary Provider: VtechAPI (formerly VYNAA API)
Zoro OS utilizes VtechAPI v4 as its backbone for all tool operations.
- Base URL: `https://api.vtech.biz.id`
- Endpoint Scope: 671 endpoints across Downloader, AI, Islamic, Search, Image Manipulation, and Tools.
- API Key: Required by all endpoints. Users must obtain it directly from VtechAPI auth dashboard.
- Sync Method: Zoro OS includes a `scripts/sync-vynaa-docs.ts` build script to fetch the latest endpoints from `/api/features` and generate strongly-typed metadata.

## Secondary Integrations: SumoPod / Additional Services
- Currently, additional endpoints for other tools would be routed through similar Universal patterns.
- AI Models (OpenAI, Gemini) inside Zoro Chat are either routed directly using official SDKs or via VtechAPI AI proxy endpoints depending on the setting context.
