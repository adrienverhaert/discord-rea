# Verified delivery

- Original artifact files checked: **1,527**, all expected lengths and SHA-256 hashes match.
- Readable module factories checked: **13,436**, source-range digests match and generated outputs parse successfully.
- Source capture: **1,510 assets**, including 850 additional lazy JavaScript chunks for the observed GuildSidebar/Channel/settings loaders.
- Reused visual material: **26 extracted icons**, **140 original custom-property rules**, **2 original gg sans fonts**, original favicon.
- Local model tests: **12 passed**.
- Browser scenarios: **7 passed**, zero skipped, zero flaky, zero failures.
- Production build: **passed** (Vite).

Browser assertions cover desktop rendering, loaded recovered fonts, no page/console errors, no external HTTP or WebSocket requests, message lifecycle and persistence, navigation/creation, local attachments, settings/profile and mobile overflow. The exact assertions live in `tests/frontend.spec.mjs`. The recorded run used installed Chrome; use `PLAYWRIGHT_CHANNEL=chrome` if you want that browser, otherwise install the Playwright browser with `npx playwright install chromium`.

Machine-readable evidence: `evidence/recovery-verification.json` and `evidence/browser-test-results.json`.

Screenshots: `evidence/screenshots/desktop-chat.png`, `settings-light.png`, `mobile-chat.png`, `mobile-settings.png`.

These tests establish the listed offline behaviors; they do not establish full Discord feature parity. The source recovery and the runnable authored reconstruction have different coverage, described in `GAPS.md`.
