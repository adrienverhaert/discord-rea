import assert from "node:assert/strict";
import test from "node:test";
import {
  CURRENT_USER_ID,
  STORAGE_KEY,
  createInitialState,
  reducer,
  loadState,
  saveState,
  normalizeChannelName,
} from "../src/model.mjs";

const dispatch = (state, type, data = {}) => reducer(state, { type, ...data });
const memoryStorage = (initial = null) => {
  const values = new Map(initial === null ? [] : [[STORAGE_KEY, initial]]);
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
};

test("message lifecycle changes only own messages and preserves the previous state", () => {
  const initial = createInitialState();
  const snapshot = structuredClone(initial);
  const sent = dispatch(initial, "SEND_MESSAGE", {
    channelId: "general",
    id: "test-own",
    content: "  A test message  ",
    createdAt: "2026-10-08T18:00:00.000Z",
  });
  const own = sent.messages.general.find(
    (message) => message.id === "test-own",
  );
  assert.equal(own.authorId, CURRENT_USER_ID);
  assert.equal(own.content, "A test message");
  assert.equal(own.createdAt, "2026-10-08T18:00:00.000Z");
  assert.deepEqual(initial, snapshot);
  const edited = dispatch(sent, "EDIT_MESSAGE", {
    channelId: "general",
    id: own.id,
    content: "Updated message",
  });
  assert.equal(
    edited.messages.general.find((message) => message.id === own.id).content,
    "Updated message",
  );
  assert.equal(
    edited.messages.general.find((message) => message.id === own.id).edited,
    true,
  );
  assert.equal(
    sent.messages.general.find((message) => message.id === own.id).content,
    "A test message",
  );
  const removed = dispatch(edited, "DELETE_MESSAGE", {
    channelId: "general",
    id: own.id,
  });
  assert.ok(!removed.messages.general.some((message) => message.id === own.id));
  assert.deepEqual(removed.messages.general, initial.messages.general);
});

test("editing and deleting somebody else’s message have no effect", () => {
  const initial = createInitialState();
  assert.deepEqual(
    dispatch(initial, "EDIT_MESSAGE", {
      channelId: "general",
      id: "g1",
      content: "Unauthorized edit",
    }),
    initial,
  );
  assert.deepEqual(
    dispatch(initial, "DELETE_MESSAGE", { channelId: "general", id: "g1" }),
    initial,
  );
});

test("empty messages are rejected, long messages bounded, attachments and replies survive", () => {
  const initial = createInitialState();
  assert.deepEqual(
    dispatch(initial, "SEND_MESSAGE", {
      channelId: "general",
      id: "empty",
      content: " \n ",
    }),
    initial,
  );
  assert.deepEqual(
    dispatch(initial, "EDIT_MESSAGE", {
      channelId: "general",
      id: "g4",
      content: " ",
    }),
    initial,
  );
  const long = dispatch(initial, "SEND_MESSAGE", {
    channelId: "general",
    id: "long",
    content: "x".repeat(5000),
  });
  assert.equal(long.messages.general.at(-1).content.length, 4000);
  const attachment = { name: "notes.txt", size: 24, type: "text/plain" };
  const reply = dispatch(initial, "SEND_MESSAGE", {
    channelId: "general",
    id: "reply",
    content: "",
    attachment,
    replyTo: "g1",
  });
  assert.equal(reply.messages.general.at(-1).replyTo, "g1");
  assert.deepEqual(reply.messages.general.at(-1).attachment, attachment);
});

test("reaction toggles preserve other users and remove an empty reaction", () => {
  const initial = createInitialState();
  const originalReaction = structuredClone(
    initial.messages.general[0].reactions,
  );
  const removed = dispatch(initial, "TOGGLE_REACTION", {
    channelId: "general",
    id: "g1",
    emoji: "☀️",
  });
  assert.deepEqual(removed.messages.general[0].reactions[0].userIds, [
    "leo",
    "nora",
  ]);
  assert.deepEqual(initial.messages.general[0].reactions, originalReaction);
  const restored = dispatch(removed, "TOGGLE_REACTION", {
    channelId: "general",
    id: "g1",
    emoji: "☀️",
  });
  assert.equal(
    restored.messages.general[0].reactions[0].userIds.filter(
      (id) => id === CURRENT_USER_ID,
    ).length,
    1,
  );
  const added = dispatch(initial, "TOGGLE_REACTION", {
    channelId: "general",
    id: "g2",
    emoji: "✅",
  });
  assert.deepEqual(added.messages.general[1].reactions, [
    { emoji: "✅", userIds: [CURRENT_USER_ID] },
  ]);
  const toggledOff = dispatch(added, "TOGGLE_REACTION", {
    channelId: "general",
    id: "g2",
    emoji: "✅",
  });
  assert.deepEqual(toggledOff.messages.general[1].reactions, []);
});

test("created channels normalize names, select correctly, and reject duplicate names", () => {
  const initial = createInitialState();
  const next = dispatch(initial, "CREATE_CHANNEL", {
    id: "project-room",
    name: "  Project Room! ",
  });
  assert.equal(next.activeChannelId, "project-room");
  assert.equal(next.guilds[0].channels.at(-1).name, "project-room");
  assert.equal(
    initial.guilds[0].channels.length + 1,
    next.guilds[0].channels.length,
  );
  assert.deepEqual(
    dispatch(next, "CREATE_CHANNEL", {
      id: "duplicate-name",
      name: "Project Room",
    }),
    next,
  );
  assert.deepEqual(
    dispatch(initial, "CREATE_CHANNEL", { id: "empty", name: "!@#$" }),
    initial,
  );
  assert.equal(normalizeChannelName("  Daily Stand Up!  "), "daily-stand-up");
  assert.ok(normalizeChannelName("x".repeat(100)).length <= 48);
});

test("created guilds contain an active channel ready to receive messages", () => {
  const initial = createInitialState();
  const next = dispatch(initial, "CREATE_GUILD", {
    id: "test-guild",
    name: "  Testing Space  ",
  });
  assert.equal(next.activeGuildId, "test-guild");
  assert.equal(next.activeChannelId, "test-guild-general");
  assert.equal(next.guilds.at(-1).name, "Testing Space");
  assert.ok(
    next.guilds
      .at(-1)
      .channels.some((channel) => channel.id === next.activeChannelId),
  );
  const sent = dispatch(next, "SEND_MESSAGE", {
    id: "new-guild-message",
    channelId: next.activeChannelId,
    content: "First post",
  });
  assert.equal(sent.messages["test-guild-general"][0].content, "First post");
  assert.deepEqual(
    dispatch(initial, "CREATE_GUILD", { id: "empty", name: " " }),
    initial,
  );
});

test("DM navigation adds a valid person once and keeps its messages separate", () => {
  const initial = createInitialState();
  const next = dispatch(initial, "OPEN_DM", { userId: "sam" });
  assert.equal(next.mode, "dm");
  assert.equal(next.activeChannelId, "dm:sam");
  const repeat = dispatch(next, "OPEN_DM", { userId: "sam" });
  assert.equal(repeat.dmUserIds.filter((id) => id === "sam").length, 1);
  const sent = dispatch(repeat, "SEND_MESSAGE", {
    id: "dm-test",
    channelId: "dm:sam",
    content: "Hello Sam",
  });
  assert.equal(sent.messages["dm:sam"][0].content, "Hello Sam");
  assert.deepEqual(sent.messages.general, initial.messages.general);
});

test("unknown targets and duplicate identifiers cannot corrupt navigation or history", () => {
  const initial = createInitialState();
  const cases = [
    ["SELECT_GUILD", { id: "missing" }],
    ["SELECT_CHANNEL", { id: "missing" }],
    ["OPEN_DM", { userId: "missing" }],
    [
      "SEND_MESSAGE",
      { channelId: "missing", id: "orphan", content: "Orphan message" },
    ],
    [
      "SEND_MESSAGE",
      { channelId: "general", id: "g1", content: "Duplicate message" },
    ],
    ["CREATE_CHANNEL", { id: "general", name: "Another channel" }],
    ["CREATE_GUILD", { id: "workshop", name: "Another server" }],
  ];
  for (const [type, action] of cases)
    assert.deepEqual(
      dispatch(initial, type, action),
      initial,
      type + " must reject " + JSON.stringify(action),
    );
});

test("storage round trip preserves messages, profile, preferences, and navigation", () => {
  const storage = memoryStorage();
  let state = dispatch(createInitialState(), "PROFILE", {
    name: "Local Builder",
    bio: "Test biography",
    status: "idle",
  });
  state = dispatch(state, "SETTINGS", {
    settings: { theme: "light", compact: true },
  });
  state = dispatch(state, "CREATE_CHANNEL", {
    id: "persistent-channel",
    name: "Persistent Channel",
  });
  state = dispatch(state, "SEND_MESSAGE", {
    id: "persistent-message",
    channelId: "persistent-channel",
    content: "Still here after reload",
  });
  assert.equal(saveState(state, storage), true);
  assert.deepEqual(loadState(storage), state);
  assert.equal(
    loadState(storage).messages["persistent-channel"][0].content,
    "Still here after reload",
  );
});

test("unavailable storage and corrupt persisted state recover without throwing", () => {
  const initial = createInitialState();
  const inaccessible = {
    getItem() {
      throw new Error("Denied");
    },
    setItem() {
      throw new Error("Quota exceeded");
    },
  };
  assert.deepEqual(loadState(inaccessible), initial);
  assert.equal(saveState(initial, inaccessible), false);
  for (const text of [
    "not json",
    "null",
    "{}",
    JSON.stringify({ ...initial, version: 999 }),
    JSON.stringify({ ...initial, messages: { general: [{ id: "bad" }] } }),
  ]) {
    assert.deepEqual(loadState(memoryStorage(text)), initial);
  }
});

test("persisted malformed channels and reaction records recover before rendering", () => {
  const initial = createInitialState();
  const badChannel = structuredClone(initial);
  badChannel.guilds[0].channels = [null];
  assert.deepEqual(
    loadState(memoryStorage(JSON.stringify(badChannel))),
    initial,
  );
  const badReaction = structuredClone(initial);
  badReaction.messages.general[0].reactions = [null];
  assert.deepEqual(
    loadState(memoryStorage(JSON.stringify(badReaction))),
    initial,
  );
});

test("reset returns an independent clean state", () => {
  const initial = createInitialState();
  const changed = dispatch(initial, "CREATE_GUILD", {
    id: "temporary",
    name: "Temporary",
  });
  const reset = dispatch(changed, "RESET");
  assert.deepEqual(reset, initial);
  reset.guilds[0].channels[0].name = "mutated";
  assert.equal(createInitialState().guilds[0].channels[0].name, "welcome");
});
