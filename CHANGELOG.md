# CHANGELOG

## [Unreleased]
### Changed
- Major project refactoring: Removed old hardcoded API provider branding (VYNAA/SumoPod) across the source code.
- General REST architecture established, shifting logic away from specific legacy dependencies into `universalApi`, `apiRegistry`, and generic model adapters.
- Implemented `VITE_ZORO_API_KEY` and `VITE_ZORO_API_BASE_URL` dot-env validation instead of hardcoded configs.
- Overhauled `Settings.tsx` to handle secure UI configurations dynamically.
- Renamed all `sync:vynaa` actions to `sync:api`.

### Added
- `fix-sumo`, `rename` and codebase audit validations.
- New README, DEVELOPMENT_NOTES, and SECURITY markdown files.
