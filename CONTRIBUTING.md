# Contributing

Run the app with `npm ci` and `npm run dev`. Keep changes focused and include a screenshot when changing the interface.

Before opening a PR, run the [verification commands](docs/VERIFICATION.md). Add a model or browser test when changing behavior.

Keep the demo offline and use synthetic data. Do not add account tokens, real messages, profiles, local paths, or generated build files. Preserve ownership notices and keep authored code separate from recovered artifacts. New captures need updated manifests and a passing `npm run verify:sources`.
