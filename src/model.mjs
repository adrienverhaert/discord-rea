/** Authored offline behavior filling unavailable Discord services. No original remote bundle executes.
 * Contract: reducer accepts serializable state + action, returns a new state; storage is isolated below.
 */
export const STORAGE_KEY = "discord-rea.offline.v1";
export const CURRENT_USER_ID = "me";
export const members = [
  {
    id: "me",
    name: "Alex",
    handle: "alex.workshop",
    color: "#7289da",
    avatar: "A",
    status: "online",
    role: "Builder",
    bio: "Making something worth sharing.",
  },
  {
    id: "maya",
    name: "Maya",
    handle: "maya.design",
    color: "#d38ba5",
    avatar: "M",
    status: "online",
    role: "Designer",
    bio: "Collecting good ideas and tiny details.",
  },
  {
    id: "leo",
    name: "Leo",
    handle: "leo.dev",
    color: "#77ab9a",
    avatar: "L",
    status: "online",
    role: "Developer",
    bio: "Probably building something.",
  },
  {
    id: "nora",
    name: "Nora",
    handle: "nora.png",
    color: "#bd9cdd",
    avatar: "N",
    status: "idle",
    role: "Artist",
    bio: "A little color goes a long way.",
  },
  {
    id: "eli",
    name: "Eli",
    handle: "eli.wav",
    color: "#d9ad71",
    avatar: "E",
    status: "online",
    role: "Member",
    bio: "One more track.",
  },
  {
    id: "sam",
    name: "Sam",
    handle: "sam.codes",
    color: "#87a5c9",
    avatar: "S",
    status: "offline",
    role: "Member",
    bio: "See you around.",
  },
  {
    id: "jules",
    name: "Jules",
    handle: "jules.jpg",
    color: "#c98379",
    avatar: "J",
    status: "offline",
    role: "Member",
    bio: "Out exploring.",
  },
];
const stamp = (hour, minute = 0) =>
  new Date(2026, 9, 8, hour, minute).toISOString();
const message = (id, authorId, content, hour, minute, extra = {}) => ({
  id,
  authorId,
  content,
  createdAt: stamp(hour, minute),
  reactions: [],
  ...extra,
});
export function createInitialState() {
  return {
    version: 1,
    mode: "guild",
    activeGuildId: "workshop",
    activeChannelId: "general",
    friendsTab: "Online",
    profile: { ...members[0] },
    settings: {
      theme: "dark",
      compact: false,
      membersVisible: true,
      muted: false,
      deafened: false,
    },
    guilds: [
      {
        id: "workshop",
        name: "The Workshop",
        initials: "W",
        color: "#5865f2",
        description: "A little space for big ideas.",
        channels: [
          {
            id: "welcome",
            name: "welcome",
            category: "START HERE",
            topic: "Make yourself at home.",
          },
          {
            id: "announcements",
            name: "announcements",
            category: "START HERE",
            topic: "The latest from the workshop.",
          },
          {
            id: "general",
            name: "general",
            category: "TEXT CHANNELS",
            topic: "Ideas, projects, and the good stuff in between.",
          },
          {
            id: "design",
            name: "design",
            category: "TEXT CHANNELS",
            topic: "Share your work. Sweat the details.",
          },
          {
            id: "development",
            name: "development",
            category: "TEXT CHANNELS",
            topic: "Everything we are building.",
          },
          {
            id: "inspiration",
            name: "inspiration",
            category: "TEXT CHANNELS",
            topic: "Things that caught your eye.",
          },
          {
            id: "off-topic",
            name: "off-topic",
            category: "TEXT CHANNELS",
            topic: "Let the conversation wander.",
          },
          {
            id: "lounge",
            name: "Lounge",
            category: "VOICE CHANNELS",
            type: "voice",
          },
          {
            id: "focus-room",
            name: "Focus Room",
            category: "VOICE CHANNELS",
            type: "voice",
          },
        ],
      },
      {
        id: "garden",
        name: "Pixel Garden",
        initials: "P",
        color: "#6c9c78",
        description: "Good things take a little time.",
        channels: [
          {
            id: "garden-general",
            name: "general",
            category: "TEXT CHANNELS",
            topic: "Welcome to Pixel Garden.",
          },
          {
            id: "garden-showcase",
            name: "showcase",
            category: "TEXT CHANNELS",
            topic: "Show us what you are growing.",
          },
        ],
      },
      {
        id: "night",
        name: "Night Shift",
        initials: "N",
        color: "#8c79bd",
        description: "For the late-night makers.",
        channels: [
          {
            id: "night-general",
            name: "general",
            category: "TEXT CHANNELS",
            topic: "After hours.",
          },
        ],
      },
    ],
    dmUserIds: ["maya", "leo", "nora", "eli"],
    messages: {
      general: [
        message(
          "g1",
          "maya",
          "Morning, everyone! ☀️ What are we working on today?",
          9,
          41,
          { reactions: [{ emoji: "☀️", userIds: ["leo", "me", "nora"] }] },
        ),
        message(
          "g2",
          "leo",
          "Finally getting the little details right on the new project. It’s coming together!",
          9,
          43,
        ),
        message(
          "g3",
          "nora",
          "I’ve been playing with some colors for the next drop. Here’s a little preview 👀",
          9,
          45,
          {
            art: true,
            reactions: [
              { emoji: "🔥", userIds: ["maya", "leo", "me", "eli"] },
              { emoji: "💜", userIds: ["maya", "me"] },
            ],
          },
        ),
        message(
          "g4",
          "me",
          "Love this direction. The softer colors feel so good together.",
          9,
          47,
          { replyTo: "g3" },
        ),
        message(
          "g5",
          "maya",
          "Right? That lilac is doing all the work ✨",
          9,
          48,
        ),
        message(
          "g6",
          "eli",
          "Made a playlist for the afternoon. Good music, open tabs, let’s make something.",
          10,
          2,
          { reactions: [{ emoji: "🎧", userIds: ["me", "nora"] }] },
        ),
        message(
          "g7",
          "leo",
          "Also, quick reminder: drop anything you’re working on in #design. Rough drafts welcome!",
          10,
          4,
        ),
      ],
      welcome: [
        message(
          "w1",
          "maya",
          "Welcome to The Workshop! This is a space to share ideas, build things, and learn together. Introduce yourself in #general.",
          8,
          0,
        ),
      ],
      announcements: [
        message(
          "a1",
          "leo",
          "Our next community showcase is this Friday. Share your latest work in #design!",
          8,
          30,
        ),
      ],
      design: [
        message(
          "d1",
          "nora",
          "The best part of making things is sharing the messy middle. What are you exploring?",
          9,
          0,
        ),
      ],
      development: [
        message(
          "dev1",
          "leo",
          "Small steps, working software. Tell us what you shipped today.",
          9,
          0,
        ),
      ],
      "dm:maya": [
        message(
          "dm1",
          "maya",
          "Hey! Glad you could make it. Have you seen the new color studies in #general?",
          9,
          30,
        ),
      ],
      "dm:leo": [
        message(
          "dm2",
          "leo",
          "Let me know if you want to pair on something today.",
          9,
          10,
        ),
      ],
    },
  };
}
export const initialState = createInitialState();
export function normalizeChannelName(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 48);
}
export function reducer(state, action) {
  switch (action.type) {
    case "SELECT_GUILD": {
      const guild = state.guilds.find((g) => g.id === action.id);
      if (!guild) return state;
      return {
        ...state,
        mode: "guild",
        activeGuildId: guild.id,
        activeChannelId:
          guild.channels.find((c) => c.type !== "voice")?.id || null,
      };
    }
    case "SELECT_CHANNEL":
      if (
        !state.guilds
          .find((g) => g.id === state.activeGuildId)
          ?.channels.some((c) => c.id === action.id && c.type !== "voice")
      )
        return state;
      return { ...state, mode: "guild", activeChannelId: action.id };
    case "HOME":
      return { ...state, mode: "friends" };
    case "FRIENDS_TAB":
      return { ...state, friendsTab: action.tab };
    case "OPEN_DM":
      if (
        !members.some((u) => u.id === action.userId && u.id !== CURRENT_USER_ID)
      )
        return state;
      return {
        ...state,
        mode: "dm",
        activeChannelId: `dm:${action.userId}`,
        dmUserIds: state.dmUserIds.includes(action.userId)
          ? state.dmUserIds
          : [...state.dmUserIds, action.userId],
      };
    case "SEND_MESSAGE": {
      const content = String(action.content || "")
        .trim()
        .slice(0, 4000);
      if (
        (!content && !action.attachment) ||
        !action.channelId ||
        !action.id ||
        Object.values(state.messages).some((list) =>
          list.some((m) => m.id === action.id),
        )
      )
        return state;
      const isChannel = state.guilds.some((g) =>
        g.channels.some((c) => c.id === action.channelId && c.type !== "voice"),
      );
      const isDm =
        action.channelId.startsWith("dm:") &&
        members.some(
          (u) => u.id === action.channelId.slice(3) && u.id !== CURRENT_USER_ID,
        );
      if (!isChannel && !isDm) return state;
      const next = {
        id: action.id,
        authorId: CURRENT_USER_ID,
        content,
        createdAt: action.createdAt || new Date().toISOString(),
        reactions: [],
        ...(action.replyTo ? { replyTo: action.replyTo } : {}),
        ...(action.attachment ? { attachment: action.attachment } : {}),
      };
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.channelId]: [
            ...(state.messages[action.channelId] || []),
            next,
          ],
        },
      };
    }
    case "EDIT_MESSAGE": {
      const content = String(action.content || "")
        .trim()
        .slice(0, 4000);
      if (!content) return state;
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.channelId]: (state.messages[action.channelId] || []).map(
            (m) =>
              m.id === action.id && m.authorId === CURRENT_USER_ID
                ? { ...m, content, edited: true }
                : m,
          ),
        },
      };
    }
    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.channelId]: (state.messages[action.channelId] || []).filter(
            (m) => !(m.id === action.id && m.authorId === CURRENT_USER_ID),
          ),
        },
      };
    case "TOGGLE_REACTION":
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.channelId]: (state.messages[action.channelId] || []).map(
            (m) => {
              if (m.id !== action.id || !action.emoji) return m;
              const reactions = m.reactions.map((r) => ({
                ...r,
                userIds: [...r.userIds],
              }));
              const reaction = reactions.find((r) => r.emoji === action.emoji);
              if (!reaction)
                reactions.push({
                  emoji: action.emoji,
                  userIds: [CURRENT_USER_ID],
                });
              else
                reaction.userIds = reaction.userIds.includes(CURRENT_USER_ID)
                  ? reaction.userIds.filter((id) => id !== CURRENT_USER_ID)
                  : [...reaction.userIds, CURRENT_USER_ID];
              return {
                ...m,
                reactions: reactions.filter((r) => r.userIds.length),
              };
            },
          ),
        },
      };
    case "CREATE_CHANNEL": {
      const name = normalizeChannelName(action.name);
      if (
        !name ||
        !action.id ||
        state.guilds.some(
          (g) =>
            g.id === action.id || g.channels.some((c) => c.id === action.id),
        )
      )
        return state;
      const guild = state.guilds.find((g) => g.id === state.activeGuildId);
      if (!guild || guild.channels.some((c) => c.name === name)) return state;
      const channel = {
        id: action.id,
        name,
        category: "TEXT CHANNELS",
        topic: "A new conversation starts here.",
      };
      return {
        ...state,
        mode: "guild",
        activeChannelId: action.id,
        guilds: state.guilds.map((g) =>
          g.id === guild.id ? { ...g, channels: [...g.channels, channel] } : g,
        ),
      };
    }
    case "CREATE_GUILD": {
      const name = String(action.name || "")
        .trim()
        .slice(0, 60);
      if (
        !name ||
        !action.id ||
        state.guilds.some(
          (g) =>
            g.id === action.id || g.channels.some((c) => c.id === action.id),
        )
      )
        return state;
      const channelId = `${action.id}-general`;
      const guild = {
        id: action.id,
        name,
        initials: name.slice(0, 1).toUpperCase(),
        color: "#5865f2",
        description: "Your new place to hang out.",
        channels: [
          {
            id: channelId,
            name: "general",
            category: "TEXT CHANNELS",
            topic: "Your conversation starts here.",
          },
        ],
      };
      return {
        ...state,
        mode: "guild",
        activeGuildId: guild.id,
        activeChannelId: channelId,
        guilds: [...state.guilds, guild],
      };
    }
    case "PROFILE":
      return {
        ...state,
        profile: {
          ...state.profile,
          name:
            String(action.name || state.profile.name)
              .trim()
              .slice(0, 32) || state.profile.name,
          bio: String(action.bio ?? state.profile.bio).slice(0, 190),
          status: action.status || state.profile.status,
        },
      };
    case "SETTINGS":
      return { ...state, settings: { ...state.settings, ...action.settings } };
    case "RESET":
      return createInitialState();
    default:
      return state;
  }
}
export function loadState(storage = globalThis.localStorage) {
  try {
    const parsed = JSON.parse(storage?.getItem(STORAGE_KEY));
    if (
      parsed?.version === 1 &&
      Array.isArray(parsed.guilds) &&
      parsed.guilds.length &&
      parsed.guilds.every(
        (g) =>
          typeof g.id === "string" &&
          typeof g.name === "string" &&
          Array.isArray(g.channels) &&
          g.channels.length &&
          g.channels.every(
            (c) => c && typeof c.id === "string" && typeof c.name === "string",
          ),
      ) &&
      parsed.messages &&
      typeof parsed.messages === "object" &&
      !Array.isArray(parsed.messages) &&
      Object.values(parsed.messages).every(
        (list) =>
          Array.isArray(list) &&
          list.every(
            (m) =>
              m &&
              typeof m.id === "string" &&
              typeof m.content === "string" &&
              Array.isArray(m.reactions) &&
              m.reactions.every(
                (r) =>
                  r && typeof r.emoji === "string" && Array.isArray(r.userIds),
              ),
          ),
      ) &&
      Array.isArray(parsed.dmUserIds) &&
      parsed.profile &&
      parsed.settings
    )
      return {
        ...createInitialState(),
        ...parsed,
        settings: { ...createInitialState().settings, ...parsed.settings },
      };
  } catch {}
  return createInitialState();
}
export function saveState(state, storage = globalThis.localStorage) {
  try {
    storage?.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
