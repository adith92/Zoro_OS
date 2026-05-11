# Security Documentation

## API Key Hygiene
- API keys are NEVER hardcoded in the repository.
- `VITE_` public variables are used only for non-sensitive public URL endpoints or harmless keys.
- User API Keys for ZORO / VtechAPI are retrieved via user settings, stored strictly in LocalStorage (client-side only).
- We proxy VtechAPI endpoints via proxy endpoints if `useProxy` is enabled in settings to avoid CORS, but keys remain strictly on the client or environment where applicable.

## ZOROSafety Module
- Zoro Endpoint Engine classifies the 671 endpoints from VtechAPI into Safe vs Unsafe categories.
- Endpoints flagged as bypassing mechanisms, generating fake identities, handling gore, or possessing NSFW capabilities are automatically assigned `safe: false` and `enabledByDefault: false`.
- If a user wishes to expose a dangerous tool in the UI, they must explicitly agree and override the gating manually in their settings.

## Dependency Security
- The project is monitored using basic Git security tools.
- Do not add unknown third-party NPM scripts without auditing them.
