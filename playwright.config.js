import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.mjs",
  fullyParallel: false,
  workers: 1,
  timeout: 30000,
  expect: { timeout: 5000 },
  reporter: [
    ["list"],
    ["json", { outputFile: "evidence/browser-test-results.json" }],
  ],
  use: {
    baseURL: "http://127.0.0.1:5173",
    viewport: { width: 1440, height: 960 },
    ...(process.env.PLAYWRIGHT_CHANNEL
      ? { channel: process.env.PLAYWRIGHT_CHANNEL }
      : {}),
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run dev -- --port 5173 --strictPort",
    url: "http://127.0.0.1:5173",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
