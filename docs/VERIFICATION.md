# Verification

Run the checks from the repository root:

```sh
npm ci
npm test
npm run build
npm run verify:sources
npx playwright install chromium
npm run test:e2e
```

The source verifier checks 1,527 original files and 13,436 module factories. Model tests cover message ownership, local persistence, malformed storage, reactions, and navigation. Browser tests cover desktop/mobile layouts, message workflows, settings, and external-network isolation.

Generated browser reports and screenshots go to `test-results/`. The curated README screenshots live in `docs/images/`; they show synthetic data.

These checks validate the offline reconstruction and the retained artifact hashes. They do not establish full Discord feature parity.
