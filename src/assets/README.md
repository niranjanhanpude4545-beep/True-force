# src/assets — Component-Scoped Assets

Place assets here that are **imported directly into React components** as modules.

## Examples:
- SVG files imported as React components: `import Logo from '@/assets/logo.svg'`
- Small images that benefit from Vite's base64 inlining (< 4KB)
- Font files (if not using Google Fonts CDN)

## Difference from /public:
| `/public` | `/src/assets` |
|---|---|
| Served as-is at root URL | Processed and bundled by Vite |
| Reference by URL: `/logo.png` | Import as module: `import img from '@/assets/img.png'` |
| No hash in filename | Gets content-hash for cache busting |
| Use for large images, favicons | Use for small icons, SVGs as components |
