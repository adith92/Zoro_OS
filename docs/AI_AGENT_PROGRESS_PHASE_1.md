# Zoro Universe — AI Agent Progress Plan Phase 1

Status: planning saved for future AI agents.

This document stores the agreed Phase 1 direction for continuing development of this repository with ChatGPT, Google AI Studio, Cursor, Codex, or another coding agent.

## Final product direction

The user wants this app to become **Zoro Universe**.

Zoro Universe is an AI cockpit/dashboard powered by **VTECH API only**. It should provide chat, AI tools, image tools, downloader tools, search, news, games, utility tools, and other modules through one consistent interface.

The repository name can remain `Zoro_OS`, but the user-facing UI should use **Zoro Universe**.

## Phase 1 objective

Refactor the current mixed-provider implementation into a clean VTECH-only foundation.

Phase 1 should focus on the engine, not cosmetic polish. README updates are intentionally postponed.

## Core decisions already made

1. UI final name: **Zoro Universe**.
2. API/provider direction: **VTECH only**.
3. LLM orchestration concept: **LLM Router**.
4. Default chat model/endpoint: **Claude**.
5. SimSimi may remain, but only as a fun/entertainment endpoint, not the default chat model.
6. Proxy mode may exist as an optional setting if available, but direct browser use is acceptable for Phase 1.
7. README should not be updated in Phase 1.
8. API key should be entered in Settings and stored in browser storage/localStorage through Zustand persist.

## Current problems to fix

The codebase currently contains old naming and mixed provider logic. These should be removed or renamed:

- VYNAA naming in files, functions, types, registry, UI, and store.
- SumoPod provider and API integration.
- Dual provider mode.
- Chat logic hardcoded to SimSimi.
- Store fields for old provider names.
- UI labels that mention old names.

## Phase 1 required work

### 1. Remove SumoPod

Remove all source-code references to:

- `sumopod`
- `SumoPod`
- `SUMOPOD`

Expected cleanup:

- Remove `src/api/sumopod.ts` if present.
- Remove `chatSumoPod` imports.
- Remove SumoPod API key state.
- Remove SumoPod model list.
- Remove SumoPod and dual provider branches in Chat.
- Remove SumoPod labels in Settings/UI.

### 2. Use VTECH-only provider

The app should either have only one provider, `vtech`, or remove provider selection entirely and always use VTECH.

No `sumopod` provider. No `dual` provider.

### 3. Rename VYNAA to VTECH

Global source-code rename target:

- `VYNAA_BASE_URL` -> `VTECH_BASE_URL`
- `vynaaApiKey` -> `vtechApiKey`
- `setVynaaApiKey` -> `setVtechApiKey`
- `callVynaaEndpoint` -> `callVtechEndpoint`
- `buildVynaaUrl` -> `buildVtechUrl`
- `VYNAA_ENDPOINTS` -> `VTECH_ENDPOINTS`
- `FALLBACK_VYNAA_ENDPOINTS` -> `FALLBACK_VTECH_ENDPOINTS`
- `GENERATED_VYNAA_ENDPOINTS` -> `GENERATED_VTECH_ENDPOINTS`
- `VynaaEndpoint` -> `VtechEndpoint`
- `VynaaCallResult` -> `VtechCallResult`
- `VynaaParams` -> `VtechParams`
- `selectedVynaaCategory` -> `selectedVtechCategory`
- `vynaaApiStatus` -> `vtechApiStatus`
- `vynaaUserProfile` -> `vtechUserProfile`
- `vynaaLimit` -> `vtechLimit`
- `useVynaaProxy` -> `useVtechProxy`
- `testVynaaPing` -> `testVtechPing`
- `getVynaaHealth` -> `getVtechHealth`
- `getVynaaStatus` -> `getVtechStatus`
- `getVynaaUserLimit` -> `getVtechUserLimit`
- `getVynaaUserProfile` -> `getVtechUserProfile`

Expected file renames:

- `src/api/universalVynaa.ts` -> `src/api/universalVtech.ts`
- `src/data/vynaaRegistry.ts` -> `src/data/vtechRegistry.ts`
- `src/data/vynaaEndpoints.fallback.ts` -> `src/data/vtechEndpoints.fallback.ts`
- `src/data/vynaaEndpoints.generated.ts` -> `src/data/vtechEndpoints.generated.ts`
- `src/types/vynaa.ts` -> `src/types/vtech.ts`

All imports should be updated.

### 4. VTECH API base

Use this base URL:

`https://api.vtech.biz.id`

API key must not be hardcoded. It should come from the persisted Settings store.

If the key is missing, return a clear user-facing error:

`VTECH API key belum diisi. Buka Settings lalu simpan API key dulu.`

### 5. Zustand store changes

Required state:

- `vtechApiKey`
- `selectedProvider` with only `vtech` if provider state remains
- `selectedVtechCategory`
- `selectedVtechAiEndpointId`
- `vtechApiStatus`
- `vtechUserProfile`
- `vtechLimit`
- `useVtechProxy`

Required setters:

- `setVtechApiKey`
- `setSelectedProvider`
- `setSelectedVtechCategory`
- `setSelectedVtechAiEndpointId`
- `setVtechApiStatus`
- `setVtechUserProfile`
- `setVtechLimit`
- `setUseVtechProxy`

Default values:

- `vtechApiKey`: empty string
- `selectedProvider`: `vtech`
- `selectedVtechCategory`: `ai`
- `selectedVtechAiEndpointId`: `ai_claude`
- `vtechApiStatus`: `idle`
- `vtechUserProfile`: null
- `vtechLimit`: null
- `useVtechProxy`: false

Migration note: if localStorage has an old key named `vynaaApiKey`, migrate its value into `vtechApiKey`, then use VTECH naming going forward.

### 6. Settings page

Settings should include a clear VTECH API Key section.

Required behavior:

- Input API key.
- Save API key to persisted browser storage.
- Show/hide API key toggle.
- Test connection button.
- API status display.
- Explanation that the key is stored in browser storage until browser data is cleared.
- Optional VTECH proxy toggle if implemented.

User-facing labels should use:

- `VTECH API Key`
- `Save VTECH Key`
- `Test VTECH Connection`
- `VTECH API berhasil terhubung`
- `VTECH API gagal dites`

Do not show VYNAA, SumoPod, or Dual Mode labels.

### 7. Universal VTECH caller

Create or update:

`src/api/universalVtech.ts`

Expected responsibilities:

- Build VTECH URLs.
- Read `vtechApiKey` from store.
- Support GET/POST endpoint calls.
- Parse JSON, text, image, audio, and video content types.
- Return a standardized result shape.
- Provide helper functions like `testVtechPing`, `getVtechHealth`, `getVtechStatus`, `getVtechUserLimit`, and `getVtechUserProfile`.
- Never use VYNAA naming.

### 8. VTECH types

Create or update:

`src/types/vtech.ts`

Expected concepts:

- `VtechEndpoint`
- `VtechEndpointParam`
- `VtechCallResult`
- endpoint output type
- endpoint param type

All UI/forms/result viewer components should use VTECH types.

### 9. VTECH registry

Create or update:

`src/data/vtechRegistry.ts`

Expected exports:

- `VTECH_ENDPOINTS`
- `getSafeVtechEndpoints`
- `getEndpointsByCategory`
- `getEndpointById`
- `getVtechCategories`
- `searchVtechEndpoints`

Registry should merge generated endpoints and fallback endpoints, deduplicate, and sort by category/label.

If generated endpoint file is missing, create a safe empty placeholder:

`src/data/vtechEndpoints.generated.ts`

### 10. Fallback endpoints

Create or update:

`src/data/vtechEndpoints.fallback.ts`

Keep useful endpoint categories:

- status
- ai
- image
- downloader
- games
- islamic
- news
- search
- tools

Important AI endpoints to keep:

- Claude: default chat endpoint, id should be `ai_claude`
- ChatGPT 3.5
- ChatGPT 4
- Copilot
- Pollinations Text
- Pollinations Image
- Pollinations Audio
- SimSimi as fun/entertainment only

### 11. LLM Router foundation

Create:

`src/api/llmRouter.ts`

Expected behavior:

- Accept chat messages and an active endpoint id.
- Resolve the endpoint from `VTECH_ENDPOINTS`.
- Ensure endpoint category is `ai`.
- Ensure endpoint is safe and enabled.
- Use Claude as default if endpoint id is missing or invalid.
- Do not fallback to SimSimi by default.
- Convert chat history into a prompt.
- Choose the right parameter name: `prompt`, `text`, or first required param.
- Call `callVtechEndpoint`.
- Normalize API responses into displayable text.

Normalizer should inspect common fields:

- `result`
- `message`
- `response`
- `text`
- `answer`
- `data`
- `output`
- `content`
- `choices[0].message.content`
- `choices[0].text`

Fallback to pretty JSON if needed.

### 12. Chat page changes

Update `src/pages/Chat.tsx` to be VTECH-only.

Required:

- Remove SumoPod import/logic.
- Remove old VYNAA import/logic.
- Remove dual provider branch.
- Remove hardcoded `ai_simsimi` from chat flow.
- Use the LLM Router.
- Read `selectedVtechAiEndpointId` from store.
- Default to Claude.
- Header should use `Zoro Universe Chat`.
- Subheader should show `VTECH AI`, ideally with active endpoint label such as `[Claude]`.
- Keep mascot, voice, markdown, and existing UI when possible.
- Do not redesign heavily in Phase 1.

### 13. AI Hub page changes

Update AI Hub title to:

`VTECH AI Hub`

Keep using the universal tool page for category `ai`.

### 14. UniversalToolPage changes

Update to VTECH naming:

- VTECH endpoint type
- VTECH caller
- VTECH registry
- VTECH labels where relevant

If safe to add now, include a button on AI endpoints:

`Use this model in Chat`

Behavior:

- Only shown when category is `ai`.
- Saves selected endpoint id into `selectedVtechAiEndpointId`.
- Shows a toast that the model is now used for Chat.
- Optional navigation to `/chat`.

### 15. Branding to Zoro Universe

Replace user-facing `ZORO OS` or `Zoro OS` labels with:

`Zoro Universe`

Do not rename the repository or package unless necessary.

Do not update README in Phase 1.

### 16. Package scripts

If script names still include VYNAA, rename them to VTECH equivalents. Example:

- `sync:vynaa` -> `sync:vtech`
- `sync-vynaa-docs.ts` -> `sync-vtech-docs.ts`

Make sure build scripts remain functional.

## Phase 1 validation checklist

After implementation, validate:

1. No SumoPod references in `src`, `scripts`, or `package.json`.
2. No VYNAA references in `src`, `scripts`, or `package.json`.
3. README may still contain old words because README update is postponed.
4. Chat does not hardcode SimSimi.
5. Default chat endpoint is Claude.
6. Settings saves VTECH API key in browser storage.
7. Empty key produces a clear error, not a crash.
8. VTECH AI Hub still lists AI endpoints.
9. Build succeeds.
10. Lint/type check succeeds.

Suggested commands:

- `npm install`
- `npm run lint`
- `npm run build`

Suggested source cleanup check:

- Search `Vynaa`, `VYNAA`, `vynaa`, `SumoPod`, `SUMOPOD`, `sumopod` in `src/`, `scripts/`, and `package.json`.

## Manual test flow

### Empty key test

1. Open Chat.
2. Send a message.
3. App should not crash.
4. Assistant should show a clear VTECH API key missing error.

### Settings key test

1. Open Settings.
2. Enter VTECH API key.
3. Save it.
4. Refresh browser.
5. Key should remain saved.

### Test connection

1. Click Test VTECH Connection.
2. Status should become checking.
3. Then it should become success or failed with a clear message.

### Default model test

1. Open Chat.
2. Active model should be Claude by default.
3. It must not default to SimSimi.

### AI Hub test

1. Open VTECH AI Hub.
2. Claude should appear.
3. SimSimi may appear as an entertainment/fun endpoint.
4. If the model selection button exists, selecting Claude should make Chat use Claude.

## Phase 1 output expected from the coding agent

When done, report:

1. Files changed.
2. Files created.
3. Files deleted.
4. Whether SumoPod is gone from source code.
5. Whether VYNAA is gone from source code.
6. Current default chat model.
7. How to test VTECH API key.
8. Lint/build status.
9. Notes for Phase 2.

## Phase 2 ideas, not for Phase 1

Do not implement these unless requested later:

- README rewrite with full emoji VTECH/Zoro Universe branding.
- More polished Chat model selector.
- Recent missions/activity panel.
- Favorite tools.
- Developer debug panel.
- Export chat.
- Prompt presets.
- Full UI redesign.

End of Phase 1 plan.
