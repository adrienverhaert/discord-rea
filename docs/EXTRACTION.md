# Extraction notes

The starting installation was Discord **1.0.9261** for Windows. Its bootstrap and desktop core were extracted from ASAR archives; the core loads `https://discord.com/app`.

The public endpoint returned web build **633029**. This is a live web deployment, not proof of what shipped on the desktop application's release date. The capture includes 1,510 assets; static extraction produced 13,436 readable module factories.

## Verify the snapshot

`npm run verify:sources` checks original file sizes and SHA-256 hashes, module source ranges, and generated JavaScript syntax.

| Evidence | Records |
| --- | --- |
| `evidence/desktop-manifest.json` | Executable identity, ASAR members, and hashes |
| `evidence/web-manifest.json` | Captured URLs, sizes, and hashes |
| `evidence/lazy-feature-manifest.json` | Selected lazy chunk capture |
| `evidence/module-index.json` | Module boundaries and dependencies |
| `evidence/ui-source-map.json` | Visual artifacts reused by the app |
| `evidence/source-map-probes.json` | Checked source-map URLs and responses |

## Repeat the capture

Use a fresh branch because these commands replace the corresponding snapshot. Supply the root of an installation you are authorized to inspect.

```sh
node scripts/extract-desktop.mjs "/path/to/Discord/app-1.0.9261"
npm run capture:web
npm run capture:lazy
npm run recover:modules
npm run verify:sources
```

A new capture may select a different web deployment. Extraction parses bundles as text and syntax trees; it does not execute recovered webpack factories.

## Limits

Readable factories are inspection artifacts, not the original TypeScript repository or standalone React components. The authored app supplies synthetic state and local event handlers. No account profile, token store, or message cache is needed. See [coverage](GAPS.md).
