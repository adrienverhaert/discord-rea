# discord-rea

A runnable, offline reconstruction of Discord's desktop frontend, with the distributed JavaScript recovered alongside it.

The starting artifact was the installed **Discord 1.0.9261 Windows application**. Its extracted desktop core explicitly loads the live `https://discord.com/app` frontend. This repository therefore preserves both the installed ASAR contents and the public web assets referenced by that endpoint. The web capture identifies build **633029**; it is a live deployment, not a claim that the entire UI was embedded in that EXE or matches its original release date.

## Run locally

Requires Node.js 22.19+ or 24.11+ and npm.

```sh
npm ci
npm run dev
```

Open the localhost address printed by Vite. All accounts, servers and messages shown by the reconstruction are synthetic. Changes are saved to this browser's local storage. It does not need a Discord account, token or backend.

```sh
npm run build
npm run preview
npm test
npm run test:e2e
npm run verify:sources
```

## What is recovered and what is reconstructed

| Directory | Origin |
| --- | --- |
| `recovered/desktop/` | Exact bytes extracted from the supplied installation's bootstrap/core ASAR archives, including preload bridges, package metadata, splash styles, fonts and media. |
| `recovered/web/` | Original public HTML, JavaScript and CSS bytes captured from the endpoint selected by the extracted core. |
| `recovered/modules/` | Statically separated and formatted module factories from the captured bundles. These retain distributed identifiers; they are not the original TypeScript repository. |
| `src/extracted/`, `public/extracted/` | Reusable source-derived visual artifacts and local fonts, with provenance in `evidence/ui-source-map.json`. |
| `src/App.jsx`, `src/model.mjs`, `src/styles.css` | Authored reconstruction and local behavior filling the unavailable backend/runtime gaps. |
| `evidence/` | Source hashes, module offsets, REA analysis, capture boundaries and test evidence. |

The running app covers server/channel navigation, local messages and direct messages, replies, reactions, editing/deleting your own messages, message search, creation dialogs, profile/settings and themes. Voice/video and real multiuser synchronization require services outside this frontend; controls explain their local demonstration status.

The original downloaded entry point is preserved for inspection, but is not executed by the offline app. Its production startup expects Discord services, account state, feature gates and a gateway connection. The reconstruction supplies its own local state while reusing recovered visual material. No original backend is claimed.

## Evidence and recovery

- `evidence/desktop-manifest.json`: EXE and ASAR SHA-256 identities, plus every extracted member hash.
- `evidence/web-manifest.json`: captured URLs, byte lengths and SHA-256 identities; the initial HTML-linked assets and selected lazy feature chunks are recorded explicitly.
- `evidence/module-index.json`: module source file, byte/character boundaries, dependencies and recovery coverage.
- `evidence/ui-source-map.json`: which recovered modules/styles/assets feed the runnable reconstruction.
- `evidence/rea-summary.json`: the REA desktop-core analysis summary and limitations.
- `evidence/rea-desktop-core.json.gz`: complete original REA Evidence, losslessly compressed.
- `evidence/source-map-probes.json`: the main bundle and a second bundle declare source-map URLs; those checked URLs returned HTTP 404.

Verified: **13,436 recovered modules, 26 original icons, 12 model tests and 7 browser scenarios passing**. See [verification](docs/VERIFICATION.md).

Read [the extraction report](docs/EXTRACTION.md) and [remaining gaps](docs/GAPS.md) before interpreting the recovery as original source or full behavioral equivalence.

### Repeat the capture

These commands overwrite the corresponding recovered snapshot. Use a fresh branch/worktree to retain the previous evidence.

```powershell
node scripts/extract-desktop.mjs "C:\Users\PC\AppData\Local\Discord\app-1.0.9261"
node scripts/capture-web.mjs
node scripts/capture-lazy.mjs
node scripts/recover-modules.mjs
```

Recovery parses the distributed code as text/AST; it does not evaluate the recovered webpack modules. A later capture may reflect a different Discord web deployment.

## Ownership

Recovered Discord code and assets retain their original ownership and notices. This private research repository does not relicense those materials, represent official Discord source, or claim affiliation. Authored gap-filling code is identified separately above.


## Complete local backup and preserved build

[The private backup release](https://github.com/antonio-in-stem/discord-rea/releases/tag/backup-2026-10-13)
preserves the entire original local folder, including `dist/`, `node_modules/`,
all Git history, and `.worktrees/frontend/` with its additional recovery evidence.
Both original local branches already existed on GitHub before this backup.
The existing Vite build is retained; no new build or test execution is claimed.
Use `npm ci` and `npm run build` to create a fresh build after a normal Git clone.

See [restoration instructions](docs/BACKUP.md) for recovering every local file,
checking hashes, and repairing worktree links after relocation.
