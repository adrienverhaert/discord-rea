import { test as base, expect } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import { STORAGE_KEY } from "../src/model.mjs";

const test = base.extend({
  runtimeAudit: [
    async ({ context, page }, use) => {
      const external = [],
        errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      page.on("websocket", (socket) => {
        const url = new URL(socket.url());
        if (url.host !== "127.0.0.1:5173")
          external.push(url.origin + url.pathname);
      });
      await context.route("**/*", async (route) => {
        const url = new URL(route.request().url());
        if (url.protocol === "http:" || url.protocol === "https:") {
          if (url.origin !== "http://127.0.0.1:5173") {
            external.push(url.origin + url.pathname);
            await route.abort();
            return;
          }
        }
        await route.continue();
      });
      await use();
      expect(errors, "No uncaught browser errors").toEqual([]);
      expect(
        external,
        "The local app must not request external services or assets",
      ).toEqual([]);
    },
    { auto: true },
  ],
});

async function screenshot(page, name) {
  await mkdir("evidence/screenshots", { recursive: true });
  await page.screenshot({
    path: "evidence/screenshots/" + name + ".png",
    fullPage: true,
  });
}
async function expectNoOverflow(page) {
  const dimensions = await page.evaluate(() => ({
    page: document.documentElement.scrollWidth,
    viewport: innerWidth,
    body: document.body.scrollWidth,
  }));
  expect(dimensions.page).toBeLessThanOrEqual(dimensions.viewport);
  expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport);
}
async function send(page, content, channel = "#general") {
  const composer = page.getByRole("textbox", {
    name: "Message " + channel,
    exact: true,
  });
  await composer.fill(content);
  await composer.press("Enter");
  const message = page.locator("article").filter({ hasText: content }).last();
  await expect(message).toBeVisible();
  return page.locator(
    'article[data-message-id="' +
      (await message.getAttribute("data-message-id")) +
      '"]',
  );
}

test("desktop shell loads recovered assets, works offline, and fits the viewport", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Servers" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Text channel general", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await expect(
    page.getByRole("textbox", { name: "Message #general", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("complementary", { name: "Members", exact: true }),
  ).toBeVisible();
  await expectNoOverflow(page);
  await page.evaluate(() => document.fonts.ready);
  const loadedFonts = await page.evaluate(() =>
    [...document.fonts]
      .filter((font) => font.status === "loaded")
      .map((font) => font.family),
  );
  expect(
    loadedFonts.some((family) => family.includes("gg sans")),
    "Recovered gg sans font is actually loaded",
  ).toBe(true);
  await screenshot(page, "desktop-chat");
  await page
    .getByRole("button", { name: "Toggle Member List", exact: true })
    .click();
  await expect(
    page.getByRole("complementary", { name: "Members", exact: true }),
  ).toHaveCount(0);
  await page
    .getByRole("button", { name: "Voice channel Lounge", exact: true })
    .click();
  await expect(page.getByRole("status")).toContainText(
    "unavailable in this offline reconstruction",
  );
});

test("send, edit, reply, react, pin, persist, and delete messages", async ({
  page,
}) => {
  await page.goto("/");
  let message = await send(page, "Verification message from local frontend");
  await message.hover();
  await expect(
    message.getByRole("button", { name: "Edit your message" }),
  ).toHaveCount(1);
  await expect(
    page
      .locator('article[data-message-id="g1"]')
      .getByRole("button", { name: "Edit your message" }),
  ).toHaveCount(0);
  await message.hover();
  await message.getByRole("button", { name: "Edit your message" }).click();
  await message
    .getByRole("textbox", { name: "Edit message", exact: true })
    .fill("Edited verification message");
  await message
    .getByRole("textbox", { name: "Edit message", exact: true })
    .press("Enter");
  if (
    await page
      .getByRole("textbox", { name: "Edit message", exact: true })
      .count()
  ) {
    await page
      .locator(".edit-form")
      .getByRole("button", { name: "save", exact: true })
      .click();
  }
  message = page
    .locator("article")
    .filter({ hasText: "Edited verification message" })
    .last();
  await expect(message).toContainText("(edited)");
  await message.hover();
  await message
    .getByRole("button", { name: "React to message by Alex", exact: true })
    .click();
  await page.getByRole("button", { name: "Choose ✅", exact: true }).click();
  await expect(
    message.getByRole("button", { name: "React ✅, 1 reactions", exact: true }),
  ).toBeVisible();
  await message.hover();
  await message
    .getByRole("button", { name: "Pin message", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Pinned Messages", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toContainText(
    "Edited verification message",
  );
  await page.getByRole("button", { name: "Close dialog", exact: true }).click();
  await message.hover();
  await message
    .getByRole("button", { name: "Reply to message by Alex", exact: true })
    .click();
  await send(page, "A reply linked to the edited message");
  await expect(
    page
      .locator("article")
      .filter({ hasText: "A reply linked to the edited message" }),
  ).toContainText("Edited verification message");
  await page.reload();
  message = page
    .locator("article")
    .filter({
      has: page.locator(".message-text", {
        hasText: "Edited verification message",
      }),
    })
    .first();
  if (!(await message.count()))
    message = page
      .locator("article")
      .filter({ hasText: "Edited verification message" })
      .first();
  await expect(message).toContainText("Edited verification message");
  await expect(
    message.getByRole("button", { name: "React ✅, 1 reactions", exact: true }),
  ).toBeVisible();
  await message.hover();
  await message.getByRole("button", { name: "Delete your message" }).click();
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Delete", exact: true })
    .click();
  await expect(page.getByRole("log", { name: "Messages" })).not.toContainText(
    "Edited verification message",
  );
  await expect(page.getByRole("log", { name: "Messages" })).toContainText(
    "A reply linked to the edited message",
  );
});

test("create server and channel, reject duplicate names, search, and revisit after reload", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Add a Server", exact: true }).click();
  await page
    .getByLabel("SERVER NAME", { exact: true })
    .fill("Verification Guild");
  await page
    .getByRole("button", { name: "Create Server", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Open Verification Guild", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("button", {
      name: "Create channel in TEXT CHANNELS",
      exact: true,
    })
    .click();
  await page
    .getByLabel("CHANNEL NAME", { exact: true })
    .fill("Verification Room");
  await page
    .getByRole("button", { name: "Create Channel", exact: true })
    .click();
  await expect(
    page.getByRole("textbox", {
      name: "Message #verification-room",
      exact: true,
    }),
  ).toBeVisible();
  await send(page, "A uniquely searchable local message", "#verification-room");
  await page
    .getByRole("button", {
      name: "Create channel in TEXT CHANNELS",
      exact: true,
    })
    .click();
  await page
    .getByLabel("CHANNEL NAME", { exact: true })
    .fill("Verification Room");
  await page
    .getByRole("button", { name: "Create Channel", exact: true })
    .click();
  await expect(page.getByRole("alert")).toContainText("already");
  await page.getByRole("button", { name: "Close dialog", exact: true }).click();
  await page
    .getByRole("button", { name: "Text channel general", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Search messages", exact: true })
    .click();
  await page
    .getByRole("textbox", { name: "Search all conversations", exact: true })
    .fill("uniquely searchable");
  await page
    .getByRole("complementary", { name: "Message search", exact: true })
    .getByRole("button")
    .filter({ hasText: "A uniquely searchable local message" })
    .click();
  await expect(
    page.getByRole("textbox", {
      name: "Message #verification-room",
      exact: true,
    }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("textbox", {
      name: "Message #verification-room",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.getByRole("log")).toContainText(
    "A uniquely searchable local message",
  );
});

test("friends and direct messages work, and profile/theme preferences persist", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Direct Messages", exact: true })
    .click();
  await page
    .getByRole("navigation", { name: "Friend filters" })
    .getByRole("button", { name: "All", exact: true })
    .click();
  await page.getByRole("button", { name: "Message Sam", exact: true }).click();
  await send(page, "A private local hello", "@Sam");
  await page
    .getByRole("button", { name: "User Settings", exact: true })
    .click();
  await page.getByLabel("DISPLAY NAME", { exact: true }).fill("QA Builder");
  await page
    .getByRole("textbox", { name: "ABOUT ME", exact: true })
    .fill("My profile is stored only in this browser.");
  await page
    .getByRole("combobox", { name: "STATUS", exact: true })
    .selectOption("idle");
  await page.getByRole("button", { name: "Save Changes", exact: true }).click();
  await page.getByRole("button", { name: "Appearance", exact: true }).click();
  await page.getByRole("button", { name: "light theme", exact: true }).click();
  await page.getByRole("checkbox", { name: /^Compact mode/ }).check();
  await screenshot(page, "settings-light");
  await page.getByRole("button", { name: "Close dialog", exact: true }).click();
  await page.reload();
  await expect(page.locator(".discord-app")).toHaveClass(/theme-light/);
  await expect(page.locator(".discord-app")).toHaveClass(/compact/);
  await expect(
    page.getByRole("button", { name: "Edit profile", exact: true }),
  ).toContainText("QA Builder");
  await expect(
    page.getByRole("textbox", { name: "Message @Sam", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("log")).toContainText("A private local hello");
  await expectNoOverflow(page);
});

test("local attachments survive reload without uploading, and oversize files are rejected", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByLabel("File attachment", { exact: true }).setInputFiles({
    name: "local-notes.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("Local attachment fixture"),
  });
  await page
    .getByRole("textbox", { name: "Message #general", exact: true })
    .fill("A message with a local file");
  await page.getByRole("button", { name: "Send message", exact: true }).click();
  const message = page
    .locator("article")
    .filter({ hasText: "A message with a local file" });
  await expect(message).toContainText("local-notes.txt");
  await page.reload();
  await expect(
    page.locator("article").filter({ hasText: "A message with a local file" }),
  ).toContainText("local-notes.txt");
  await page.getByLabel("File attachment", { exact: true }).setInputFiles({
    name: "too-large.txt",
    mimeType: "text/plain",
    buffer: Buffer.alloc(2 * 1024 * 1024 + 1),
  });
  await expect(page.getByRole("status")).toContainText("under 2 MB");
});

test("mobile navigation, chat and settings fit a narrow viewport", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expectNoOverflow(page);
  await send(page, "Hello from the mobile viewport");
  await screenshot(page, "mobile-chat");
  await page
    .getByRole("button", { name: "Toggle navigation", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Text channel design", exact: true })
    .click();
  await expect(
    page.getByRole("textbox", { name: "Message #design", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Toggle navigation", exact: true })
    .click();
  await page
    .getByRole("button", { name: "User Settings", exact: true })
    .click();
  await expect(page.getByLabel("DISPLAY NAME", { exact: true })).toBeVisible();
  await expectNoOverflow(page);
  await screenshot(page, "mobile-settings");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("corrupt local storage recovers to a working chat instead of a blank screen", async ({
  page,
}) => {
  await page.addInitScript(
    (key) => localStorage.setItem(key, '{"version":1,"guilds":[null]}'),
    STORAGE_KEY,
  );
  await page.goto("/");
  await expect(
    page.getByRole("textbox", { name: "Message #general", exact: true }),
  ).toBeVisible();
  await send(page, "Recovered from damaged browser storage");
});
