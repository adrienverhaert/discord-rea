import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { icons } from "./extracted/icons.js";
import {
  members,
  normalizeChannelName,
  reducer,
  loadState,
  saveState,
} from "./model.mjs";
// Icon geometry, fonts and tokens come from recovered Discord modules. Layout and
// local behavior fill unavailable source/service gaps; evidence/ui-source-map.json.
const extraIcons = {
  more: [
    "M5 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
  ],
  arrow: ["m10 5 7 7-7 7-1.4-1.4L13.2 13H3v-2h10.2L8.6 6.4Z"],
  check: ["m9 16.2-4.2-4.3L3.4 13.3 9 19l12-12-1.4-1.4Z"],
  edit: [
    "m16.8 2.8 4.4 4.4-13 13L2 22l1.8-6.2 13-13ZM5.6 17l-.7 2.2 2.2-.7L18.4 7.2 16.8 5.6Z",
  ],
  trash: [
    "M8 2h8l1 3h4v2H3V5h4l1-3ZM5 9h14l-1 13H6L5 9Zm4 2v8h2v-8H9Zm4 0v8h2v-8h-2Z",
  ],
};
function Icon({ name, size = 20, ...props }) {
  const asset = icons[name];
  return (
    <svg
      viewBox={asset?.viewBox || "0 0 24 24"}
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {(asset?.paths || extraIcons[name] || extraIcons.more).map((d, i) => (
        <path
          key={i}
          d={typeof d === "string" ? d : d.d}
          fillRule={asset?.primitives?.[i]?.fillRule}
          clipRule={asset?.primitives?.[i]?.clipRule}
        />
      ))}
    </svg>
  );
}
function IconButton({ icon, label, active, className = "", ...props }) {
  return (
    <button
      className={`icon-button ${active ? "active" : ""} ${className}`}
      aria-label={label}
      title={label}
      {...props}
    >
      <Icon name={icon} />
    </button>
  );
}
function Avatar({ user, size = 40, status = false, onClick }) {
  const Tag = onClick ? "button" : "span";
  return (
    <Tag
      className="avatar"
      style={{
        "--avatar-color": user.color,
        width: size,
        height: size,
        fontSize: size * 0.43,
      }}
      {...(onClick
        ? { onClick, "aria-label": `View ${user.name}'s profile` }
        : {})}
    >
      {user.avatar}
      {status && <span className={`status-dot ${user.status}`} />}
    </Tag>
  );
}
const emojis = [
  "😊",
  "😂",
  "💜",
  "🔥",
  "✨",
  "👀",
  "🙌",
  "👍",
  "🎉",
  "☀️",
  "🎧",
  "💯",
  "🚀",
  "❤️",
  "😎",
  "🤔",
  "✅",
  "👋",
  "🌱",
  "🫶",
  "💻",
  "🎨",
  "☕",
  "⭐",
];
const uid = () => crypto.randomUUID();
const time = (value) =>
  new Date(value).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
function ColorStudy() {
  return (
    <div
      className="color-study"
      role="img"
      aria-label="Local demo artwork: pastel spheres, an arch, and color swatches"
    >
      <div className="art-label">a study in soft</div>
      <div className="art-orbit" />
      <div className="art-arch" />
      <div className="art-sphere" />
      <div className="art-cylinder" />
      <div className="art-footer">
        <span>EXPLORATION 024</span>
        <div>
          {["#d4c4ed", "#e7d9c7", "#a9bbab", "#efbac6"].map((color) => (
            <i key={color} style={{ background: color }} />
          ))}
        </div>
      </div>
    </div>
  );
}
function RichText({ children, onChannel }) {
  return String(children)
    .split(/(#[a-z][\w-]*)/g)
    .map((part, index) =>
      part.startsWith("#") ? (
        <button
          className="channel-mention"
          key={index}
          onClick={() => onChannel(part.slice(1))}
        >
          {part}
        </button>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      ),
    );
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);
  const [modal, setModal] = useState(null),
    [toast, setToast] = useState(""),
    [draft, setDraft] = useState(""),
    [replyTo, setReplyTo] = useState(null),
    [editing, setEditing] = useState(null),
    [editText, setEditText] = useState("");
  const [emojiTarget, setEmojiTarget] = useState(null),
    [attachment, setAttachment] = useState(null),
    [search, setSearch] = useState(""),
    [searchOpen, setSearchOpen] = useState(false),
    [mobileNav, setMobileNav] = useState(false),
    [collapsed, setCollapsed] = useState({}),
    [pinned, setPinned] = useState([]),
    [settingsTab, setSettingsTab] = useState("My Account");
  const composer = useRef(null),
    fileInput = useRef(null),
    feedEnd = useRef(null),
    modalRef = useRef(null);
  const guild =
      state.guilds.find((g) => g.id === state.activeGuildId) || state.guilds[0],
    channel = guild.channels.find((c) => c.id === state.activeChannelId);
  const people = useMemo(
    () => members.map((user) => (user.id === "me" ? state.profile : user)),
    [state.profile],
  );
  const getUser = (id) =>
    people.find((user) => user.id === id) || state.profile;
  const dmUser = getUser(state.activeChannelId?.replace("dm:", "")),
    channelName =
      state.mode === "dm" ? dmUser.name : channel?.name || "general",
    messages = state.messages[state.activeChannelId] || [];
  const localOnly = (feature) =>
    setToast(
      `${feature} is unavailable in this offline reconstruction. No Discord service is connected.`,
    );
  useEffect(() => {
    if (!saveState(state))
      setToast(
        "Storage is full. Changes remain available until you close this page.",
      );
  }, [state]);
  useEffect(() => {
    if (!toast) return;
    const timeout = setTimeout(() => setToast(""), 5000);
    return () => clearTimeout(timeout);
  }, [toast]);
  useEffect(() => {
    setDraft("");
    setAttachment(null);
    setReplyTo(null);
    setEditing(null);
    setEmojiTarget(null);
    setMobileNav(false);
  }, [state.activeChannelId, state.mode]);
  useEffect(() => {
    feedEnd.current?.scrollIntoView({ block: "end" });
  }, [state.activeChannelId, messages.length, state.mode]);
  useEffect(() => {
    const handler = (event) => {
      if (event.key === "Escape") {
        setModal(null);
        setEmojiTarget(null);
        setSearchOpen(false);
        setMobileNav(false);
      }
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    if (!modal) return;
    const previous = document.activeElement;
    const focusable = () =>
      [
        ...(modalRef.current?.querySelectorAll(
          'button,input,textarea,select,a[href],[tabindex="0"]',
        ) || []),
      ].filter((el) => !el.disabled && el.offsetParent !== null);
    focusable()[0]?.focus();
    const trap = (event) => {
      if (event.key !== "Tab") return;
      const items = focusable();
      if (event.shiftKey && document.activeElement === items[0]) {
        event.preventDefault();
        items.at(-1)?.focus();
      } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
        event.preventDefault();
        items[0]?.focus();
      }
    };
    window.addEventListener("keydown", trap);
    return () => {
      window.removeEventListener("keydown", trap);
      previous?.focus?.();
    };
  }, [modal?.type]);
  function selectChannel(id) {
    dispatch({ type: "SELECT_CHANNEL", id });
    setSearchOpen(false);
  }
  function goToChannel(name) {
    const found = guild.channels.find((c) => c.name === name);
    if (found) selectChannel(found.id);
    else setToast(`No #${name} channel exists here.`);
  }
  function sendMessage(event) {
    event?.preventDefault();
    if (!draft.trim() && !attachment) return;
    dispatch({
      type: "SEND_MESSAGE",
      id: uid(),
      channelId: state.activeChannelId,
      content: draft,
      replyTo,
      attachment,
    });
    setDraft("");
    setReplyTo(null);
    setAttachment(null);
    setEmojiTarget(null);
    composer.current?.focus();
  }
  function addEmoji(emoji) {
    if (emojiTarget === "composer") {
      setDraft((value) => value + emoji);
      composer.current?.focus();
    } else
      dispatch({
        type: "TOGGLE_REACTION",
        channelId: state.activeChannelId,
        id: emojiTarget,
        emoji,
      });
    setEmojiTarget(null);
  }
  function readAttachment(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      setToast("Choose a file under 2 MB for this local demo.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () =>
      setAttachment({
        name: file.name,
        type: file.type,
        size: file.size,
        data: reader.result,
      });
    reader.readAsDataURL(file);
  }
  function commitEdit(event) {
    event.preventDefault();
    if (!editText.trim()) return;
    dispatch({
      type: "EDIT_MESSAGE",
      channelId: state.activeChannelId,
      id: editing,
      content: editText,
    });
    setEditing(null);
  }
  const results = Object.entries(state.messages)
    .flatMap(([channelId, list]) =>
      list.map((message) => ({ ...message, channelId })),
    )
    .filter(
      (message) =>
        search.trim() &&
        `${message.content} ${getUser(message.authorId).name}`
          .toLowerCase()
          .includes(search.toLowerCase()),
    );
  const friendList = people.filter(
    (user) =>
      user.id !== "me" &&
      (state.friendsTab === "All" ||
        (state.friendsTab === "Online" && user.status !== "offline")),
  );
  return (
    <div
      className={`discord-app theme-${state.settings.theme} ${state.settings.compact ? "compact" : ""} ${mobileNav ? "mobile-nav-open" : ""}`}
    >
      <header className="titlebar">
        <div className="window-brand">
          <Icon name="discord" size={17} />
          <span>Discord</span>
        </div>
        <div className="window-title">
          <span className="tiny-server">
            {state.mode === "guild" ? (
              guild.initials
            ) : (
              <Icon name="discord" size={12} />
            )}
          </span>
          {state.mode === "guild" ? guild.name : "Direct Messages"}
        </div>
        <button
          className="offline-badge"
          onClick={() => setModal({ type: "about" })}
        >
          <span />
          Local reconstruction
        </button>
      </header>
      <nav className="server-rail" aria-label="Servers">
        <button
          className={`server-icon home-server ${state.mode !== "guild" ? "selected" : ""}`}
          aria-label="Direct Messages"
          title="Direct Messages"
          onClick={() => dispatch({ type: "HOME" })}
        >
          <Icon name="discord" size={28} />
        </button>
        <div className="rail-separator" />
        {state.guilds.map((server) => (
          <button
            key={server.id}
            className={`server-icon ${state.mode === "guild" && guild.id === server.id ? "selected" : ""}`}
            style={{ "--server-color": server.color }}
            aria-label={`Open ${server.name}`}
            title={server.name}
            onClick={() => dispatch({ type: "SELECT_GUILD", id: server.id })}
          >
            <span>{server.initials}</span>
            {server.id === "garden" && <i className="unread-pip" />}
          </button>
        ))}
        <button
          className="server-icon rail-action"
          aria-label="Add a Server"
          title="Add a Server"
          onClick={() => setModal({ type: "server" })}
        >
          <Icon name="plus" size={26} />
        </button>
        <button
          className="server-icon rail-action compass"
          aria-label="Discover servers"
          title="Discover servers"
          onClick={() => setModal({ type: "discover" })}
        >
          ✦
        </button>
        <div className="rail-spacer" />
        <button
          className="rail-help"
          aria-label="About this reconstruction"
          onClick={() => setModal({ type: "about" })}
        >
          <Icon name="help" />
        </button>
      </nav>
      <aside
        className="channel-sidebar"
        aria-label={state.mode === "guild" ? "Channels" : "Direct messages"}
      >
        {state.mode === "guild" ? (
          <>
            <button
              className="server-heading"
              onClick={() => setModal({ type: "server-menu" })}
            >
              <strong>{guild.name}</strong>
              <Icon name="chevronDown" size={18} />
            </button>
            <div className="channel-scroll">
              <div className="server-banner">
                <div className="banner-orb a" />
                <div className="banner-orb b" />
                <div className="banner-lines" />
                <span>
                  MAKE ROOM
                  <br />
                  FOR GOOD IDEAS.
                </span>
                <small>{guild.name.toUpperCase()}</small>
              </div>
              <button
                className="server-event"
                onClick={() => setModal({ type: "event" })}
              >
                <span className="event-symbol">✦</span>
                <div>
                  <strong>Community showcase</strong>
                  <small>Friday · Bring what you're building</small>
                </div>
                <Icon name="arrow" size={16} />
              </button>
              <div className="channel-divider" />
              {[...new Set(guild.channels.map((c) => c.category))].map(
                (category) => (
                  <section className="channel-category" key={category}>
                    <div className="category-heading">
                      <button
                        aria-expanded={!collapsed[category]}
                        onClick={() =>
                          setCollapsed((value) => ({
                            ...value,
                            [category]: !value[category],
                          }))
                        }
                      >
                        <Icon
                          name="chevronDown"
                          size={12}
                          className={collapsed[category] ? "rotated" : ""}
                        />
                        {category}
                      </button>
                      <button
                        aria-label={`Create channel in ${category}`}
                        title="Create Channel"
                        onClick={() => setModal({ type: "channel" })}
                      >
                        <Icon name="plus" size={15} />
                      </button>
                    </div>
                    {!collapsed[category] &&
                      guild.channels
                        .filter((c) => c.category === category)
                        .map((item) => (
                          <button
                            className={`channel-row ${state.activeChannelId === item.id ? "selected" : ""} ${item.id === "design" ? "unread" : ""}`}
                            key={item.id}
                            aria-label={`${item.type === "voice" ? "Voice" : "Text"} channel ${item.name}`}
                            aria-current={
                              state.activeChannelId === item.id
                                ? "page"
                                : undefined
                            }
                            onClick={() =>
                              item.type === "voice"
                                ? localOnly("Voice chat")
                                : selectChannel(item.id)
                            }
                          >
                            <Icon
                              name={
                                item.type === "voice"
                                  ? "headphones"
                                  : item.id === "announcements"
                                    ? "bell"
                                    : "hash"
                              }
                              size={21}
                            />
                            <span>{item.name}</span>
                            {item.id === "design" && (
                              <span className="channel-count">3</span>
                            )}
                          </button>
                        ))}
                  </section>
                ),
              )}
              <div className="sidebar-bottom-note">
                <span>✿</span>
                <strong>A good place to make things.</strong>
                <small>This is your corner of the internet.</small>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="dm-search">
              <button onClick={() => setSearchOpen(true)}>
                Find or start a conversation
              </button>
            </div>
            <div className="channel-scroll dm-list">
              <button
                className={`dm-nav ${state.mode === "friends" ? "selected" : ""}`}
                onClick={() => dispatch({ type: "HOME" })}
              >
                <Icon name="friends" size={24} />
                Friends
              </button>
              <button className="dm-nav" onClick={() => localOnly("Nitro")}>
                <span>✦</span>Nitro<small>NEW</small>
              </button>
              <button
                className="dm-nav"
                onClick={() => setModal({ type: "about" })}
              >
                <Icon name="screen" size={24} />
                Offline workspace
              </button>
              <div className="category-heading dm-heading">
                <span>DIRECT MESSAGES</span>
                <button
                  aria-label="New direct message"
                  onClick={() => setModal({ type: "new-dm" })}
                >
                  <Icon name="plus" size={16} />
                </button>
              </div>
              {state.dmUserIds.map((id) => {
                const user = getUser(id);
                return (
                  <button
                    key={id}
                    className={`dm-row ${state.mode === "dm" && state.activeChannelId === `dm:${id}` ? "selected" : ""}`}
                    onClick={() => dispatch({ type: "OPEN_DM", userId: id })}
                  >
                    <Avatar user={user} size={32} status />
                    <div>
                      <span>{user.name}</span>
                      <small>
                        {user.status === "offline" ? "Offline" : user.role}
                      </small>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
        <div className="user-panel">
          <button
            className="current-user"
            aria-label="Edit profile"
            onClick={() => {
              setSettingsTab("My Account");
              setModal({ type: "settings" });
            }}
          >
            <Avatar user={state.profile} size={32} status />
            <span>
              <strong>{state.profile.name}</strong>
              <small>{state.profile.status}</small>
            </span>
          </button>
          <IconButton
            icon="mic"
            label={
              state.settings.muted ? "Unmute microphone" : "Mute microphone"
            }
            active={state.settings.muted}
            className={state.settings.muted ? "slashed" : ""}
            onClick={() => {
              dispatch({
                type: "SETTINGS",
                settings: { muted: !state.settings.muted },
              });
              setToast(
                "Microphone state changed locally. No call is connected.",
              );
            }}
          />
          <IconButton
            icon="headphones"
            label={state.settings.deafened ? "Undeafen" : "Deafen"}
            active={state.settings.deafened}
            className={state.settings.deafened ? "slashed" : ""}
            onClick={() =>
              dispatch({
                type: "SETTINGS",
                settings: { deafened: !state.settings.deafened },
              })
            }
          />
          <IconButton
            icon="settings"
            label="User Settings"
            onClick={() => {
              setSettingsTab("My Account");
              setModal({ type: "settings" });
            }}
          />
        </div>
      </aside>
      <main className="main-panel">
        <header className="channel-header">
          <IconButton
            className="mobile-menu"
            icon="more"
            label="Toggle navigation"
            onClick={() => setMobileNav(!mobileNav)}
          />
          {state.mode === "friends" ? (
            <>
              <div className="header-name">
                <Icon name="friends" size={24} />
                <strong>Friends</strong>
              </div>
              <div className="header-divider" />
              <nav className="friends-tabs" aria-label="Friend filters">
                {["Online", "All", "Pending", "Blocked"].map((tab) => (
                  <button
                    className={state.friendsTab === tab ? "selected" : ""}
                    key={tab}
                    onClick={() => dispatch({ type: "FRIENDS_TAB", tab })}
                  >
                    {tab}
                  </button>
                ))}
                <button
                  className="add-friend-button"
                  onClick={() => setModal({ type: "new-dm" })}
                >
                  Add Friend
                </button>
              </nav>
            </>
          ) : (
            <>
              <div className="header-name">
                {state.mode === "dm" ? (
                  <Avatar user={dmUser} size={24} status />
                ) : (
                  <Icon name="hash" size={25} />
                )}
                <strong>{channelName}</strong>
              </div>
              <div className="header-divider" />
              <span className="channel-topic">
                {state.mode === "dm" ? dmUser.bio : channel?.topic}
              </span>
            </>
          )}
          <div className="header-tools">
            {state.mode !== "friends" && (
              <>
                <IconButton
                  icon={state.mode === "dm" ? "headphones" : "bell"}
                  label={
                    state.mode === "dm"
                      ? "Start Voice Call"
                      : "Notification settings"
                  }
                  onClick={() =>
                    localOnly(
                      state.mode === "dm"
                        ? "Voice calling"
                        : "Push notifications",
                    )
                  }
                />
                <IconButton
                  icon="pin"
                  label="Pinned Messages"
                  onClick={() => setModal({ type: "pins" })}
                />
                <IconButton
                  icon="member"
                  label="Toggle Member List"
                  active={state.settings.membersVisible}
                  onClick={() =>
                    dispatch({
                      type: "SETTINGS",
                      settings: {
                        membersVisible: !state.settings.membersVisible,
                      },
                    })
                  }
                />
              </>
            )}
            <button
              className="search-trigger"
              aria-label="Search messages"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <span>Search</span>
              <Icon name="search" size={15} />
            </button>
            <IconButton
              icon="inbox"
              label="Inbox"
              onClick={() => setModal({ type: "inbox" })}
            />
            <IconButton
              icon="help"
              label="Help"
              onClick={() => setModal({ type: "about" })}
            />
          </div>
        </header>
        <div className="workspace-body">
          {state.mode === "friends" ? (
            <section className="friends-page">
              <div className="friends-main">
                <div className="friend-search">
                  <input
                    aria-label="Search friends"
                    placeholder="Search"
                    onChange={(event) => setSearch(event.target.value)}
                    value={search}
                  />
                  <Icon name="search" size={20} />
                </div>
                <h2>
                  {state.friendsTab.toUpperCase()} —{" "}
                  {
                    friendList.filter((user) =>
                      user.name.toLowerCase().includes(search.toLowerCase()),
                    ).length
                  }
                </h2>
                {friendList
                  .filter((user) =>
                    user.name.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((user) => (
                    <div className="friend-item" key={user.id}>
                      <button
                        className="friend-user"
                        onClick={() => setModal({ type: "profile", user })}
                      >
                        <Avatar user={user} status />
                        <span>
                          <strong>{user.name}</strong>
                          <small>
                            {user.status === "offline"
                              ? "Offline"
                              : user.status === "idle"
                                ? "Idle"
                                : "Online"}
                          </small>
                        </span>
                      </button>
                      <IconButton
                        icon="chat"
                        label={`Message ${user.name}`}
                        onClick={() =>
                          dispatch({ type: "OPEN_DM", userId: user.id })
                        }
                      />
                      <IconButton
                        icon="more"
                        label={`Options for ${user.name}`}
                        onClick={() => setModal({ type: "profile", user })}
                      />
                    </div>
                  ))}
                {!friendList.length && (
                  <div className="empty-friends">
                    <span>☁</span>
                    <h3>
                      {state.friendsTab === "Pending"
                        ? "All caught up."
                        : "It’s quiet here."}
                    </h3>
                    <p>
                      {state.friendsTab === "Pending"
                        ? "You don’t have any pending friend requests."
                        : "Nobody is on this list."}
                    </p>
                  </div>
                )}
              </div>
              <aside className="activity-panel">
                <h2>Active Now</h2>
                <div className="activity-empty">
                  <strong>It’s quiet for now...</strong>
                  <p>When friends start an activity, you’ll see it here.</p>
                  <span>Offline demo · activity is not connected</span>
                </div>
                <div className="activity-card">
                  <div className="activity-avatar-stack">
                    <Avatar user={getUser("maya")} size={28} />
                    <Avatar user={getUser("nora")} size={28} />
                  </div>
                  <strong>Your people, one click away.</strong>
                  <p>
                    Start a conversation and make a little room for connection.
                  </p>
                </div>
              </aside>
            </section>
          ) : (
            <>
              <section
                className="chat-panel"
                aria-label={`${channelName} chat`}
              >
                <div className="message-feed" role="log" aria-label="Messages">
                  <div className="channel-welcome">
                    {state.mode === "dm" ? (
                      <Avatar user={dmUser} size={72} />
                    ) : (
                      <span className="welcome-hash">
                        <Icon name="hash" size={42} />
                      </span>
                    )}
                    <h1>
                      {state.mode === "dm"
                        ? dmUser.name
                        : `Welcome to #${channelName}!`}
                    </h1>
                    <p>
                      {state.mode === "dm" ? (
                        <>
                          This is the beginning of your direct message history
                          with <strong>{dmUser.name}</strong>.
                        </>
                      ) : (
                        <>
                          This is the beginning of the{" "}
                          <strong>#{channelName}</strong> channel.
                        </>
                      )}
                    </p>
                    <button
                      onClick={() =>
                        setModal(
                          state.mode === "dm"
                            ? { type: "profile", user: dmUser }
                            : { type: "channel-info" },
                        )
                      }
                    >
                      <Icon
                        name={state.mode === "dm" ? "member" : "edit"}
                        size={15}
                      />
                      {state.mode === "dm"
                        ? "View Profile"
                        : "View channel details"}
                    </button>
                  </div>
                  <div className="date-divider">
                    <span>October 8, 2026</span>
                  </div>
                  {messages.map((message, index) => {
                    const author = getUser(message.authorId),
                      grouped =
                        messages[index - 1]?.authorId === message.authorId &&
                        !message.replyTo &&
                        !message.art,
                      reply = messages.find(
                        (item) => item.id === message.replyTo,
                      );
                    return (
                      <article
                        className={`message ${grouped ? "grouped" : ""} ${message.authorId === "me" ? "own" : ""}`}
                        key={message.id}
                        id={`message-${message.id}`}
                        data-message-id={message.id}
                      >
                        {reply && (
                          <div className="reply-preview">
                            <span className="reply-line" />
                            <Avatar user={getUser(reply.authorId)} size={16} />
                            <strong>{getUser(reply.authorId).name}</strong>
                            <span>{reply.content}</span>
                          </div>
                        )}
                        {!grouped ? (
                          <div className="message-avatar">
                            <Avatar
                              user={author}
                              onClick={() =>
                                setModal({ type: "profile", user: author })
                              }
                            />
                          </div>
                        ) : (
                          <span className="grouped-time">
                            {time(message.createdAt)}
                          </span>
                        )}
                        <div className="message-body">
                          {!grouped && (
                            <div className="message-meta">
                              <button
                                style={{
                                  color:
                                    author.id === "me"
                                      ? "var(--text-strong)"
                                      : author.color,
                                }}
                                onClick={() =>
                                  setModal({ type: "profile", user: author })
                                }
                              >
                                {author.name}
                              </button>
                              {author.id === "leo" && (
                                <span className="role-tag">DEV</span>
                              )}
                              <time dateTime={message.createdAt}>
                                {time(message.createdAt)}
                              </time>
                            </div>
                          )}
                          {editing === message.id ? (
                            <form className="edit-form" onSubmit={commitEdit}>
                              <textarea
                                aria-label="Edit message"
                                value={editText}
                                onChange={(event) =>
                                  setEditText(event.target.value)
                                }
                                autoFocus
                                onKeyDown={(event) => {
                                  if (
                                    event.key === "Enter" &&
                                    !event.shiftKey
                                  ) {
                                    event.preventDefault();
                                    commitEdit(event);
                                  }
                                  if (event.key === "Escape") setEditing(null);
                                }}
                              />
                              <small>
                                escape to{" "}
                                <button
                                  type="button"
                                  onClick={() => setEditing(null)}
                                >
                                  cancel
                                </button>{" "}
                                · enter to <button type="submit">save</button>
                              </small>
                            </form>
                          ) : (
                            <div className="message-text">
                              <RichText onChannel={goToChannel}>
                                {message.content}
                              </RichText>
                              {message.edited && (
                                <span className="edited"> (edited)</span>
                              )}
                            </div>
                          )}
                          {message.art && <ColorStudy />}
                          {message.attachment && (
                            <div className="message-attachment">
                              {message.attachment.type?.startsWith("image/") &&
                              /^data:image\//.test(message.attachment.data) ? (
                                <button
                                  onClick={() =>
                                    setModal({
                                      type: "image",
                                      attachment: message.attachment,
                                    })
                                  }
                                >
                                  <img
                                    src={message.attachment.data}
                                    alt={message.attachment.name}
                                  />
                                </button>
                              ) : (
                                <div className="file-attachment">
                                  <Icon name="attachment" size={30} />
                                  <span>
                                    <strong>{message.attachment.name}</strong>
                                    <small>
                                      {Math.ceil(
                                        message.attachment.size / 1024,
                                      )}{" "}
                                      KB · local attachment
                                    </small>
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                          {!!message.reactions?.length && (
                            <div className="reactions">
                              {message.reactions.map((reaction) => (
                                <button
                                  key={reaction.emoji}
                                  className={
                                    reaction.userIds.includes("me")
                                      ? "reacted"
                                      : ""
                                  }
                                  aria-label={`React ${reaction.emoji}, ${reaction.userIds.length} reactions`}
                                  onClick={() =>
                                    dispatch({
                                      type: "TOGGLE_REACTION",
                                      channelId: state.activeChannelId,
                                      id: message.id,
                                      emoji: reaction.emoji,
                                    })
                                  }
                                >
                                  <span>{reaction.emoji}</span>
                                  {reaction.userIds.length}
                                </button>
                              ))}
                              <button
                                className="add-reaction"
                                aria-label={`Add reaction to message by ${author.name}`}
                                onClick={() => setEmojiTarget(message.id)}
                              >
                                <Icon name="emoji" size={16} />
                              </button>
                            </div>
                          )}
                        </div>
                        <div className="message-actions">
                          <IconButton
                            icon="emoji"
                            label={`React to message by ${author.name}`}
                            onClick={() =>
                              setEmojiTarget(
                                emojiTarget === message.id ? null : message.id,
                              )
                            }
                          />
                          <IconButton
                            icon="arrow"
                            label={`Reply to message by ${author.name}`}
                            onClick={() => {
                              setReplyTo(message.id);
                              composer.current?.focus();
                            }}
                          />
                          <IconButton
                            icon="pin"
                            label={
                              pinned.includes(message.id)
                                ? "Unpin message"
                                : "Pin message"
                            }
                            onClick={() => {
                              setPinned((value) =>
                                value.includes(message.id)
                                  ? value.filter((id) => id !== message.id)
                                  : [...value, message.id],
                              );
                              setToast(
                                pinned.includes(message.id)
                                  ? "Message unpinned."
                                  : "Message pinned for this session.",
                              );
                            }}
                          />
                          {message.authorId === "me" && (
                            <>
                              <IconButton
                                icon="edit"
                                label="Edit your message"
                                onClick={() => {
                                  setEditing(message.id);
                                  setEditText(message.content);
                                }}
                              />
                              <IconButton
                                icon="trash"
                                label="Delete your message"
                                onClick={() =>
                                  setModal({ type: "delete", message })
                                }
                              />
                            </>
                          )}
                        </div>
                      </article>
                    );
                  })}
                  <div ref={feedEnd} />
                </div>
                <div className="composer-area">
                  {replyTo && (
                    <div className="reply-bar">
                      Replying to{" "}
                      <strong>
                        {
                          getUser(
                            messages.find((m) => m.id === replyTo)?.authorId,
                          ).name
                        }
                      </strong>
                      <button
                        aria-label="Cancel reply"
                        onClick={() => setReplyTo(null)}
                      >
                        <Icon name="close" size={16} />
                      </button>
                    </div>
                  )}
                  {attachment && (
                    <div className="attachment-preview">
                      {attachment.type?.startsWith("image/") && (
                        <img src={attachment.data} alt="Attachment preview" />
                      )}
                      <span>{attachment.name}</span>
                      <IconButton
                        icon="close"
                        label="Remove attachment"
                        onClick={() => setAttachment(null)}
                      />
                    </div>
                  )}
                  <form className="composer" onSubmit={sendMessage}>
                    <button
                      type="button"
                      className="attach-button"
                      aria-label="Attach a file"
                      onClick={() => fileInput.current?.click()}
                    >
                      <Icon name="plus" size={18} />
                    </button>
                    <textarea
                      ref={composer}
                      aria-label={`Message ${state.mode === "dm" ? "@" : "#"}${channelName}`}
                      placeholder={`Message ${state.mode === "dm" ? "@" : "#"}${channelName}`}
                      value={draft}
                      maxLength={4000}
                      rows={1}
                      onChange={(event) => setDraft(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" && !event.shiftKey) {
                          event.preventDefault();
                          sendMessage(event);
                        }
                        if (event.key === "ArrowUp" && !draft) {
                          const own = [...messages]
                            .reverse()
                            .find((m) => m.authorId === "me");
                          if (own) {
                            setEditing(own.id);
                            setEditText(own.content);
                          }
                        }
                      }}
                    />
                    <div className="composer-tools">
                      <IconButton
                        type="button"
                        icon="gift"
                        label="Send a gift"
                        onClick={() => localOnly("Gifts")}
                      />
                      <button
                        type="button"
                        className="gif-button"
                        aria-label="Open GIF picker"
                        onClick={() => localOnly("GIF search")}
                      >
                        GIF
                      </button>
                      <IconButton
                        type="button"
                        icon="emoji"
                        label="Choose an emoji"
                        active={emojiTarget === "composer"}
                        onClick={() =>
                          setEmojiTarget(
                            emojiTarget === "composer" ? null : "composer",
                          )
                        }
                      />
                      {(draft.trim() || attachment) && (
                        <IconButton
                          type="submit"
                          icon="send"
                          label="Send message"
                          className="send-button"
                        />
                      )}
                    </div>
                    <input
                      ref={fileInput}
                      type="file"
                      aria-label="File attachment"
                      hidden
                      onChange={readAttachment}
                    />
                  </form>
                  <div className="composer-footnote">
                    <span>
                      <strong>Shift + Enter</strong> for a new line
                    </span>
                    <span>
                      Messages stay on this device <i />
                    </span>
                  </div>
                </div>
              </section>
              {state.settings.membersVisible && (
                <aside className="member-sidebar" aria-label="Members">
                  <h2>
                    ONLINE —{" "}
                    {people.filter((u) => u.status !== "offline").length}
                  </h2>
                  {people
                    .filter((u) => u.status !== "offline")
                    .map((user) => (
                      <button
                        className="member-row"
                        key={user.id}
                        onClick={() => setModal({ type: "profile", user })}
                      >
                        <Avatar user={user} size={32} status />
                        <span>
                          <strong style={{ color: user.color }}>
                            {user.name}
                          </strong>
                          <small>
                            {user.id === "nora"
                              ? "Exploring a little color"
                              : user.id === "leo"
                                ? "Building something good"
                                : user.role}
                          </small>
                        </span>
                        {user.id === "maya" && (
                          <span className="owner-crown">♛</span>
                        )}
                      </button>
                    ))}
                  <h2 className="offline-heading">
                    OFFLINE —{" "}
                    {people.filter((u) => u.status === "offline").length}
                  </h2>
                  {people
                    .filter((u) => u.status === "offline")
                    .map((user) => (
                      <button
                        className="member-row offline"
                        key={user.id}
                        onClick={() => setModal({ type: "profile", user })}
                      >
                        <Avatar user={user} size={32} status />
                        <span>
                          <strong>{user.name}</strong>
                          <small>{user.role}</small>
                        </span>
                      </button>
                    ))}
                </aside>
              )}
            </>
          )}
          {searchOpen && (
            <aside className="search-panel" aria-label="Message search">
              <div className="search-panel-header">
                <strong>Search messages</strong>
                <IconButton
                  icon="close"
                  label="Close search"
                  onClick={() => setSearchOpen(false)}
                />
              </div>
              <label className="search-field">
                <Icon name="search" size={18} />
                <input
                  autoFocus
                  placeholder="Search all conversations"
                  aria-label="Search all conversations"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </label>
              <p className="search-count">
                {search
                  ? `${results.length} results`
                  : "Find a message by its text or author."}
              </p>
              {results.map((result) => (
                <button
                  key={result.id}
                  className="search-result"
                  onClick={() => {
                    if (result.channelId.startsWith("dm:"))
                      dispatch({
                        type: "OPEN_DM",
                        userId: result.channelId.slice(3),
                      });
                    else {
                      const foundGuild = state.guilds.find((g) =>
                        g.channels.some((c) => c.id === result.channelId),
                      );
                      if (foundGuild)
                        dispatch({ type: "SELECT_GUILD", id: foundGuild.id });
                      dispatch({
                        type: "SELECT_CHANNEL",
                        id: result.channelId,
                      });
                    }
                    setSearchOpen(false);
                    setTimeout(() => {
                      const node = document.getElementById(
                        `message-${result.id}`,
                      );
                      node?.scrollIntoView({ block: "center" });
                      node?.animate(
                        [
                          { backgroundColor: "#5865f255" },
                          { backgroundColor: "transparent" },
                        ],
                        { duration: 1800 },
                      );
                    }, 80);
                  }}
                >
                  <small>
                    {result.channelId.startsWith("dm:")
                      ? "Direct message"
                      : `# ${state.guilds.flatMap((g) => g.channels).find((c) => c.id === result.channelId)?.name || result.channelId}`}
                  </small>
                  <div>
                    <Avatar user={getUser(result.authorId)} size={24} />
                    <strong>{getUser(result.authorId).name}</strong>
                    <time>{time(result.createdAt)}</time>
                  </div>
                  <p>{result.content}</p>
                </button>
              ))}
            </aside>
          )}
        </div>
      </main>
      {emojiTarget && (
        <div className="emoji-picker" role="dialog" aria-label="Emoji picker">
          <div>
            <strong>Pick your expression</strong>
            <IconButton
              icon="close"
              label="Close emoji picker"
              onClick={() => setEmojiTarget(null)}
            />
          </div>
          <span>FREQUENTLY USED</span>
          <section>
            {emojis.map((emoji) => (
              <button
                key={emoji}
                aria-label={`Choose ${emoji}`}
                onClick={() => addEmoji(emoji)}
              >
                {emoji}
              </button>
            ))}
          </section>
          <small>A little more you, in every message.</small>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <Icon name="check" size={18} />
          <span>{toast}</span>
          <button
            aria-label="Dismiss notification"
            onClick={() => setToast("")}
          >
            <Icon name="close" size={16} />
          </button>
        </div>
      )}
      {modal && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModal(null);
          }}
        >
          <section
            ref={modalRef}
            className={`modal ${modal.type === "settings" ? "settings-modal" : ""} ${modal.type === "profile" ? "profile-modal" : ""} ${modal.type === "image" ? "image-modal" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={
              modal.type === "settings"
                ? "User Settings"
                : `${modal.type} dialog`
            }
          >
            <IconButton
              className="modal-close"
              icon="close"
              label="Close dialog"
              onClick={() => setModal(null)}
            />
            {modal.type === "server" && (
              <CreateForm
                title="Create your server"
                subtitle="Your server is where you and your friends hang out. Make yours and start talking."
                label="SERVER NAME"
                placeholder="Your new community"
                button="Create Server"
                onSubmit={(name) => {
                  dispatch({ type: "CREATE_GUILD", id: uid(), name });
                  setModal(null);
                  setToast("Your local server is ready.");
                }}
              />
            )}
            {modal.type === "channel" && (
              <CreateForm
                title="Create Channel"
                subtitle={`In ${guild.name}`}
                label="CHANNEL NAME"
                placeholder="new-channel"
                button="Create Channel"
                validate={(name) =>
                  !normalizeChannelName(name)
                    ? "Use letters, numbers, or hyphens."
                    : guild.channels.some(
                          (c) => c.name === normalizeChannelName(name),
                        )
                      ? "A channel with this name already exists."
                      : ""
                }
                onSubmit={(name) => {
                  dispatch({ type: "CREATE_CHANNEL", id: uid(), name });
                  setModal(null);
                }}
              />
            )}
            {modal.type === "settings" && (
              <>
                <nav className="settings-nav">
                  <span>USER SETTINGS</span>
                  {[
                    "My Account",
                    "Profiles",
                    "Appearance",
                    "Voice & Video",
                    "Privacy",
                  ].map((tab) => (
                    <button
                      key={tab}
                      className={settingsTab === tab ? "selected" : ""}
                      onClick={() => setSettingsTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                  <hr />
                  <button onClick={() => setModal({ type: "about" })}>
                    About Discord REA
                  </button>
                  <small>
                    Offline reconstruction
                    <br />
                    Recovery build 0.1.0
                  </small>
                </nav>
                <div className="settings-content">
                  <h2>{settingsTab}</h2>
                  {["My Account", "Profiles"].includes(settingsTab) ? (
                    <ProfileForm
                      profile={state.profile}
                      onSave={(data) => {
                        dispatch({ type: "PROFILE", ...data });
                        setToast("Profile saved on this device.");
                      }}
                    />
                  ) : settingsTab === "Appearance" ? (
                    <>
                      <h3>Theme</h3>
                      <p>Make this space feel like you.</p>
                      <div className="theme-options">
                        {["dark", "light", "midnight"].map((theme) => (
                          <button
                            key={theme}
                            className={`theme-swatch ${theme} ${state.settings.theme === theme ? "chosen" : ""}`}
                            aria-label={`${theme} theme`}
                            aria-pressed={state.settings.theme === theme}
                            onClick={() =>
                              dispatch({
                                type: "SETTINGS",
                                settings: { theme },
                              })
                            }
                          >
                            <span />
                            {theme}
                            {state.settings.theme === theme && (
                              <Icon name="check" size={18} />
                            )}
                          </button>
                        ))}
                      </div>
                      <h3>Message display</h3>
                      <label className="toggle-setting">
                        <span>
                          <strong>Compact mode</strong>
                          <small>Fit more of the conversation on screen.</small>
                        </span>
                        <input
                          type="checkbox"
                          checked={state.settings.compact}
                          onChange={(event) =>
                            dispatch({
                              type: "SETTINGS",
                              settings: { compact: event.target.checked },
                            })
                          }
                        />
                      </label>
                      <label className="toggle-setting">
                        <span>
                          <strong>Show member list</strong>
                          <small>Keep your community in view.</small>
                        </span>
                        <input
                          type="checkbox"
                          checked={state.settings.membersVisible}
                          onChange={(event) =>
                            dispatch({
                              type: "SETTINGS",
                              settings: {
                                membersVisible: event.target.checked,
                              },
                            })
                          }
                        />
                      </label>
                    </>
                  ) : settingsTab === "Voice & Video" ? (
                    <div className="settings-explanation">
                      <Icon name="headphones" size={44} />
                      <h3>Voice needs a connected service</h3>
                      <p>
                        This reconstruction runs locally. Calling, screen
                        sharing, and voice channels are not connected to a voice
                        server.
                      </p>
                      <p>
                        The microphone and deafen buttons update local UI state
                        only.
                      </p>
                    </div>
                  ) : (
                    <div className="settings-explanation">
                      <Icon name="screen" size={44} />
                      <h3>Your workspace stays here</h3>
                      <p>
                        Messages, profile preferences, and uploaded attachments
                        are stored in your browser on this device. No Discord
                        login or account connection is used.
                      </p>
                      <button
                        className="danger-button"
                        onClick={() => setModal({ type: "reset" })}
                      >
                        Reset local demo data
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
            {modal.type === "profile" && (
              <>
                <div
                  className="profile-cover"
                  style={{ background: modal.user.color }}
                />
                <div className="profile-top">
                  <Avatar user={getUser(modal.user.id)} size={80} status />
                </div>
                <div className="profile-details">
                  <h2>{getUser(modal.user.id).name}</h2>
                  <p className="profile-handle">{modal.user.handle}</p>
                  <div className="profile-section">
                    <h4>ABOUT ME</h4>
                    <p>{getUser(modal.user.id).bio}</p>
                    <h4>ROLES</h4>
                    <span className="profile-role">
                      <i style={{ background: modal.user.color }} />
                      {modal.user.role}
                    </span>
                    <h4>WORKSPACE</h4>
                    <p>Synthetic local demo member</p>
                  </div>
                  {modal.user.id !== "me" && (
                    <button
                      className="primary-button full-width"
                      onClick={() => {
                        dispatch({ type: "OPEN_DM", userId: modal.user.id });
                        setModal(null);
                      }}
                    >
                      Send Message
                    </button>
                  )}
                </div>
              </>
            )}
            {modal.type === "new-dm" && (
              <>
                <h2>Find your people</h2>
                <p>Start a local conversation with someone in this demo.</p>
                <div className="new-dm-list">
                  {people
                    .filter((user) => user.id !== "me")
                    .map((user) => (
                      <button
                        key={user.id}
                        onClick={() => {
                          dispatch({ type: "OPEN_DM", userId: user.id });
                          setModal(null);
                        }}
                      >
                        <Avatar user={user} size={36} status />
                        <span>
                          <strong>{user.name}</strong>
                          <small>{user.handle}</small>
                        </span>
                        <Icon name="chat" />
                      </button>
                    ))}
                </div>
              </>
            )}
            {modal.type === "delete" && (
              <>
                <h2>Delete Message</h2>
                <p>
                  Are you sure you want to delete this message? This cannot be
                  undone.
                </p>
                <blockquote>
                  {modal.message.content || modal.message.attachment?.name}
                </blockquote>
                <div className="modal-actions">
                  <button onClick={() => setModal(null)}>Cancel</button>
                  <button
                    className="danger-button"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_MESSAGE",
                        channelId: state.activeChannelId,
                        id: modal.message.id,
                      });
                      setModal(null);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
            {modal.type === "reset" && (
              <>
                <h2>Reset this workspace?</h2>
                <p>
                  This removes your local messages, attachments, new servers,
                  channels, and preferences and restores the original demo.
                </p>
                <div className="modal-actions">
                  <button onClick={() => setModal(null)}>Cancel</button>
                  <button
                    className="danger-button"
                    onClick={() => {
                      dispatch({ type: "RESET" });
                      setModal(null);
                      setPinned([]);
                      setToast("Local demo reset.");
                    }}
                  >
                    Reset demo
                  </button>
                </div>
              </>
            )}
            {modal.type === "server-menu" && (
              <>
                <h2>{guild.name}</h2>
                <p>{guild.description}</p>
                <div className="server-menu-options">
                  <button onClick={() => setModal({ type: "channel" })}>
                    <Icon name="plus" />
                    Create Channel
                  </button>
                  <button
                    onClick={() => {
                      setModal(null);
                      localOnly("Invites");
                    }}
                  >
                    <Icon name="member" />
                    Invite People
                  </button>
                  <button onClick={() => setModal({ type: "channel-info" })}>
                    <Icon name="hash" />
                    Channel Details
                  </button>
                  <button onClick={() => setModal({ type: "settings" })}>
                    <Icon name="settings" />
                    Settings
                  </button>
                </div>
              </>
            )}
            {modal.type === "channel-info" && (
              <>
                <span className="modal-symbol">
                  <Icon name="hash" size={38} />
                </span>
                <h2>#{channelName}</h2>
                <p>{channel?.topic || "A place for your next conversation."}</p>
                <div className="info-box">
                  <strong>{guild.name}</strong>
                  <span>
                    {messages.length} local messages · {people.length} demo
                    members
                  </span>
                </div>
                <button
                  className="primary-button full-width"
                  onClick={() => setModal(null)}
                >
                  Back to the conversation
                </button>
              </>
            )}
            {modal.type === "pins" && (
              <>
                <h2>Pinned Messages</h2>
                <p>Keep the good stuff close.</p>
                {messages.filter((m) => pinned.includes(m.id)).length ? (
                  messages
                    .filter((m) => pinned.includes(m.id))
                    .map((m) => (
                      <blockquote key={m.id}>
                        <strong>{getUser(m.authorId).name}</strong>
                        <p>{m.content}</p>
                      </blockquote>
                    ))
                ) : (
                  <div className="empty-state">
                    <Icon name="pin" size={42} />
                    <strong>No pinned messages yet</strong>
                    <p>Hover over a message and select the pin icon.</p>
                  </div>
                )}
              </>
            )}
            {modal.type === "inbox" && (
              <>
                <h2>Inbox</h2>
                <div className="empty-state">
                  <Icon name="inbox" size={48} />
                  <strong>You’re all caught up!</strong>
                  <p>There are no new notifications in this local workspace.</p>
                </div>
              </>
            )}
            {modal.type === "event" && (
              <>
                <div className="event-cover">
                  MAKE SOMETHING.
                  <br />
                  <em>SHARE SOMETHING.</em>
                </div>
                <h2>Community showcase</h2>
                <p className="event-time">Friday, October 9 · 4:00 PM</p>
                <p>
                  A little space to share what you’ve been making. Bring a rough
                  draft, a finished project, or just your curiosity.
                </p>
                <div className="info-box">
                  <strong>Demo event</strong>
                  <span>
                    This fixture is not a scheduled or connected event.
                  </span>
                </div>
                <button
                  className="primary-button full-width"
                  onClick={() => {
                    setModal(null);
                    setToast(
                      "Interest noted for this session. This is a demo event.",
                    );
                  }}
                >
                  Interested
                </button>
              </>
            )}
            {modal.type === "discover" && (
              <>
                <h2>Find your next little corner</h2>
                <p>Explore the local demo communities.</p>
                <div className="discover-grid">
                  {state.guilds.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => {
                        dispatch({ type: "SELECT_GUILD", id: g.id });
                        setModal(null);
                      }}
                    >
                      <span style={{ background: g.color }}>{g.initials}</span>
                      <strong>{g.name}</strong>
                      <small>{g.description}</small>
                    </button>
                  ))}
                </div>
              </>
            )}
            {modal.type === "about" && (
              <>
                <div className="about-logo">
                  <Icon name="discord" size={42} />
                </div>
                <h2>Familiar by extraction.</h2>
                <p>
                  A working, offline reconstruction of Discord’s frontend,
                  grounded in the installed desktop app and the frontend assets
                  it loads.
                </p>
                <div className="about-facts">
                  <div>
                    <span>Recovered</span>
                    <strong>
                      gg sans fonts · SVG icon paths · theme tokens
                    </strong>
                  </div>
                  <div>
                    <span>Reconstructed</span>
                    <strong>
                      React layout · local interactions · sample conversations
                    </strong>
                  </div>
                  <div>
                    <span>Runs here</span>
                    <strong>Browser storage · no account · no backend</strong>
                  </div>
                </div>
                <p className="small-note">
                  This is an independent recovery project. The complete original
                  frontend source tree is not available from the packaged
                  executable. Provenance and extracted artifacts are included in
                  the repository.
                </p>
                <button
                  className="primary-button full-width"
                  onClick={() => setModal(null)}
                >
                  Let’s look around
                </button>
              </>
            )}
            {modal.type === "image" && (
              <>
                <img src={modal.attachment.data} alt={modal.attachment.name} />
                <p>{modal.attachment.name}</p>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
function CreateForm({
  title,
  subtitle,
  label,
  placeholder,
  button,
  validate,
  onSubmit,
}) {
  const [name, setName] = useState(""),
    [error, setError] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const issue = validate?.(name);
        if (!name.trim() || issue) {
          setError(issue || "Please enter a name.");
          return;
        }
        onSubmit(name);
      }}
    >
      <span className="modal-symbol">
        <Icon name="plus" size={36} />
      </span>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <label className="form-label">
        {label}
        <input
          autoFocus
          placeholder={placeholder}
          maxLength={60}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setError("");
          }}
          required
        />
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <p className="small-note">
        Created locally in your browser. You can start using it right away.
      </p>
      <button className="primary-button full-width" type="submit">
        {button}
      </button>
    </form>
  );
}
function ProfileForm({ profile, onSave }) {
  const [name, setName] = useState(profile.name),
    [bio, setBio] = useState(profile.bio),
    [status, setStatus] = useState(profile.status);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSave({ name, bio, status });
      }}
    >
      <div className="account-card">
        <div style={{ background: profile.color }} />
        <section>
          <Avatar user={profile} size={66} status />
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.handle}</small>
          </span>
        </section>
      </div>
      <label className="form-label">
        DISPLAY NAME
        <input
          value={name}
          maxLength={32}
          required
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className="form-label">
        ABOUT ME
        <textarea
          value={bio}
          maxLength={190}
          rows={3}
          onChange={(event) => setBio(event.target.value)}
        />
      </label>
      <label className="form-label">
        STATUS
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="online">Online</option>
          <option value="idle">Idle</option>
          <option value="dnd">Do Not Disturb</option>
          <option value="offline">Invisible</option>
        </select>
      </label>
      <button className="primary-button" type="submit">
        Save Changes
      </button>
    </form>
  );
}
