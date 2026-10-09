# Extraction and evidence ledger

## Artifact chain

1. Supplied executable: `Discord.exe`, Windows desktop version 1.0.9261.
2. Sidecar `resources/app.asar`: bootstrap package, 11 regular members.
3. Sidecar `modules/discord_desktop_core-1/discord_desktop_core/core.asar`: desktop core package, 5 regular members.
4. Core JavaScript sets `WEBAPP_PATHS.APP = "/app"`, chooses `https://discord.com` for stable migration, constructs `URL_TO_LOAD`, and calls `mainWindow.loadURL(URL_TO_LOAD)`.
5. A public, unauthenticated fetch of that actual endpoint returned HTML for web build 633029. The first capture downloaded all 660 distinct `/assets/` links present in that HTML, totaling 19,915,308 bytes: 346 JavaScript files, 313 stylesheets and one additional asset.
6. Static interpretation of the runtime filename map followed the named GuildSidebar, Channel, ChannelSettings and GuildSettings loaders, adding 850 JavaScript chunks and bringing the capture to 1,510 assets / 26,098,093 bytes. Twelve referenced IDs have no standalone JavaScript filename in that map; they are recorded as unmapped rather than guessed.
7. Statically parsed module tables and CSS declarations provide the source material for reconstruction. The executable itself is Electron's native host, not a container holding the entire chat application.

The literal source and per-file hashes are preserved so this chain can be independently checked. No private Discord profile, token store, cache of messages, or account data was imported.

## REA analysis

REA 6.0.0 analyzed the extracted desktop core as inert JavaScript.

Evidence: `ev_cf63383e3c8d0cfeb0b09d6df508b98a058ab4a40d26cb03b1dc5c5feb27b1f2`.

The report parsed 2 JavaScript files and package metadata, visited 258,628 AST nodes, and recorded 1,813 findings. It observed one BrowserWindow, one context bridge and 73 IPC operations; most IPC channels are dynamic. These are syntax observations, not proof that every branch executes. See the complete compressed Evidence for all limitations.

The first MCP attempt on the larger bootstrap graph exceeded the tool transport's response limit. The successful core analysis was run through the same installed REA CLI and written directly to disk. The complete JSON is compressed to remain below GitHub's per-file size limit; its uncompressed local working file is excluded from Git.

## Verification boundary

The offline app uses synthetic local state and authored event handlers. Browser tests verify concrete local workflows and external-network isolation. They do not establish pixel-identical parity with every Discord route, experiment cohort, platform or authenticated account.

All web resources are a capture of the live public deployment. Only referenced resources are claimed complete; additional lazy chunks, authenticated-only data and dynamically selected routes can remain unavailable.
