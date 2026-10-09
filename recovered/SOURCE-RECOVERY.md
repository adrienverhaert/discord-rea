# Recovery boundaries

The installed Discord Electron core loads the web frontend remotely from its observed WEBAPP_ENDPOINT and /app. The captured JavaScript and CSS represent the live deployment requested during extraction, not a guaranteed historical match for the installed bootstrap version.

## Shipped code

- Raw byte-preserving JavaScript/CSS: web/assets/.
- Pretty-printed module factories: modules/. Each file records its source asset, module ID, original UTF-16 property offsets and SHA-256. An export wrapper was added for inspection; webpack references retain their shipped numeric IDs.
- evidence/module-index.json records the dependency edges statically visible as direct webpack require calls and async chunk references. Dynamic dependencies are not inferred.
- src/extracted/icons.js contains recovered SVG path geometry reached by statically resolving exported icon symbols. It is not hand-drawn.
- src/extracted/theme-tokens.css copies upstream custom-property declarations. The two gg sans files came from the desktop splash ASAR.

## Limits

Factory formatting cannot restore erased comments, original TypeScript types, original variable names, source file layout or missing chunks. Exported factories are inspection artifacts and are not runnable independently. The local app supplies its own state and UI orchestration; it does not execute the captured Discord service application. Component search candidates in evidence/ui-source-map.json are navigation aids and do not certify independent recovery of each complete component. Native modules and Discord service implementations are outside this frontend recovery. No personal profile, token, message cache or account data was read.
