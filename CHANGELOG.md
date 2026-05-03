# Changelog

## Fixes

- **Logo image not resolving** - Turbopack failed to resolve `@/app/assets/logo-design.png`. Moved logo to `/public/` directory and used public path instead.
- **Disabled Turbopack** - Set `bundler: 'webpack'` in next.config.mjs to avoid Turbopack alias resolution bugs.
- **Avoid using spaces in database name** - Changed MongoDB database name from "Tiles Gallery" to "tiles_gallery" to prevent connection issues.