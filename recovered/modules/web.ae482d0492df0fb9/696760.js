/* Recovered shipped factory. Module 696760.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2282822..2294726
 * Raw property SHA-256: 950f2b17eb9169d250713645345e218d334e3214745e35102b5b524212b0ecb5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Bx: () => eT, Ay: () => em, Gm: () => eh, Q_: () => eA, zF: () => ef, zR: () => ep });
  var i,
    r = n(192308),
    a = n(793322),
    s = n(174768),
    l = n(186111),
    o = n(309010),
    d = n(967198),
    c = n(114129),
    u = n(442325),
    _ = n(323073),
    E = n(288254),
    A = n(734057),
    h = n(406704),
    f = n(747926),
    I = n(774603),
    p = n(176522),
    T = n(435558),
    m = n.n(T),
    g = n(739187),
    S = n(857250),
    N = n(97483),
    C = n(147036),
    O = n(957565),
    R = n(660183);
  let L = (0, T.throttle)(
    () => (0, g.P)((0, S.o)(R.intl.string(R.t["+5kSoW"]), N.Ck.SUCCESS)),
    3e3,
    { leading: !0, trailing: !1 },
  );
  var y = n(265422),
    D = n(625494),
    v = n(652215),
    b = n(272613),
    M = n(819638),
    P = n(723702),
    U = n(763827),
    w = n(64460),
    G = n(92960),
    x = n(739008),
    k = n(314519),
    F = n(837057),
    B = n(310419),
    V = n(488995),
    H = n(675704),
    j = n(806964),
    W = n(552049),
    Y = n(877991),
    K = n(332779),
    $ = n(274794),
    z = n(928531),
    X = n(251494),
    Z = n(82038),
    q = n(14214),
    Q = n(151199),
    J = n(975571),
    ee = n(28647),
    et = n(851109);
  let en = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: m().debounce(
      () => {
        if (D._.hasSubscribers(v.jej.MARK_TOP_INBOX_CHANNEL_READ))
          return (D._.dispatch(v.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
      },
      100,
      { leading: !0 },
    ),
  };
  var ei = n(478437),
    er = n(367513),
    ea = n(604681),
    es = n(198052),
    el = n(47675),
    eo = n(999291),
    ed = n(761640),
    ec = n(467691),
    eu = n(674272),
    e_ = n(431804),
    eE = n(406975),
    eA =
      (((i = {}).NAVIGATION = "NAVIGATION"),
      (i.CHAT = "CHAT"),
      (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
      (i.MISCELLANEOUS = "MISCELLANEOUS"),
      (i.MESSAGE = "MESSAGE"),
      (i.DND = "DND"),
      i);
  function eh(e) {
    switch (e) {
      case "NAVIGATION":
        return R.intl.string(R.t["yGE+jg"]);
      case "VOICE_AND_VIDEO":
        return R.intl.string(R.t.bI8F5u);
      case "CHAT":
        return R.intl.string(R.t.hDhbb3);
      case "MISCELLANEOUS":
        return R.intl.string(R.t.cBdwqs);
      case "MESSAGE":
        return R.intl.string(R.t["5fpmX9"]);
      case "DND":
        return R.intl.string(R.t["69j6+4"]);
    }
  }
  function ef(e) {
    switch (e) {
      case "MESSAGE":
        return R.intl.string(R.t.iepGDn);
      case "DND":
        return R.intl.string(R.t.LBsB0a);
      default:
        return;
    }
  }
  function eI() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
      let t = ep[e];
      if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
      return t.binds[0];
    });
  }
  let ep = {
    [v.IWg.SERVER_NEXT]: z.yx,
    [v.IWg.SERVER_PREV]: z.yv,
    [v.IWg.CHANNEL_NEXT]: p.kF,
    [v.IWg.CHANNEL_PREV]: p.Oc,
    [v.IWg.NAVIGATE_BACK]: p.GY,
    [v.IWg.NAVIGATE_FORWARD]: p.M$,
    [v.IWg.UNREAD_NEXT]: ec.mH,
    [v.IWg.UNREAD_PREV]: ec.US,
    [v.IWg.MENTION_CHANNEL_NEXT]: ec.BD,
    [v.IWg.MENTION_CHANNEL_PREV]: ec.X8,
    [v.IWg.TOGGLE_PREVIOUS_GUILD]: p.Fv,
    [v.IWg.JUMP_TO_GUILD]: w.J,
    [v.IWg.SUBMIT]: X.X,
    [v.IWg.TEXTAREA_FOCUS]: Z.c,
    [v.IWg.MARK_CHANNEL_READ]: G.Df,
    [v.IWg.MARK_SERVER_READ]: x.P,
    [v.IWg.TOGGLE_CHANNEL_PINS]: {
      binds: ["mod+p"],
      comboKeysBindGlobal: !0,
      action: () => (D._.dispatch(v.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [v.IWg.TOGGLE_INBOX]: {
      binds: ["mod+i"],
      comboKeysBindGlobal: !0,
      action: () =>
        !(l.A.getLayers().length > 0 || (0, r.hasAnyModalOpen)()) &&
        (!(function () {
          let { notificationCenterVariant: e } = (0, et.GE)({ location: "TOGGLE_INBOX" });
          if ("sidebar" !== e) return;
          let t = o.Ay.getChannelId(),
            n = A.A.getChannel(t);
          window.location.pathname.startsWith(v.BVt.CHANNEL(v.gNP)) && null != n
            ? (0, y.i)(n.guild_id, t)
            : (0, y.a)(v.BVt.CHANNEL(v.gNP, t ?? void 0));
        })(),
        D._.dispatch(v.jej.TOGGLE_INBOX),
        !1),
    },
    [v.IWg.MARK_TOP_INBOX_CHANNEL_READ]: en,
    [v.IWg.TOGGLE_USERS]: {
      binds: ["mod+u"],
      comboKeysBindGlobal: !0,
      action() {
        let e = d.A.getGuildId(),
          t = o.Ay.getChannelId(e),
          n = A.A.getChannel(t),
          i = null != t && n?.isVocalThread() === !0 && es.A.getUserParticipantCount(t) > 0;
        if (null != t && null != n && (n.type === ei.r.GUILD_VOICE || i))
          return (er.A.updateChatOpen(t, !es.A.getChatOpen(t)), !1);
        if (null != t && null != n && n.type === ei.r.DM) {
          let e = ed.Ay.getSection(t, n?.isDM()),
            i = (0, eo.AP)(n.getRecipientId()),
            r = e === v.YvQ.PROFILE;
          return (
            (0, el.am)({ displayProfile: i, isProfileOpen: !r }),
            ea.A.toggleUserProfileSidebarSection(),
            !1
          );
        }
        return (ea.A.toggleMembersSection(), !1);
      },
    },
    [v.IWg.TOGGLE_HELP]: {
      binds: ["mod+shift+h", "f1"],
      comboKeysBindGlobal: !0,
      action: () => (window.open(J.C), !1),
    },
    [v.IWg.VIBE_WITH_WUMPUS]: {
      binds: ["mod+alt+shift+w"],
      comboKeysBindGlobal: !0,
      action: () => ((0, eu.A)({ source: e_.y.KEYBIND }), !1),
    },
    [v.IWg.TOGGLE_MUTE]: q.VT,
    [v.IWg.TOGGLE_DEAFEN]: q.rR,
    [v.IWg.TOGGLE_CATEGORY_COLLAPSED]: Q.y,
    [v.IWg.SEARCH_SOUNDBOARD]: {
      binds: ["mod+shift+b"],
      comboKeysBindGlobal: !0,
      action: () => (D._.dispatch(v.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [v.IWg.SCROLL_UP]: W.U5,
    [v.IWg.SCROLL_DOWN]: W.fz,
    [v.IWg.QUICKSWITCHER_SHOW]: H.R,
    [v.IWg.CREATE_DM_GROUP]: {
      binds: ["mod+shift+t"],
      comboKeysBindGlobal: !0,
      action: () => (
        null != d.A.getGuildId() && (0, y.i)(v.ME),
        D._.safeDispatch(v.jej.TOGGLE_DM_CREATE),
        !1
      ),
    },
    [v.IWg.CREATE_THREAD]: {
      binds: ["mod+shift+alt+n"],
      comboKeysBindGlobal: !0,
      action() {
        let e,
          t =
            ((e = A.A.getChannel(o.Ay.getChannelId())),
            e?.isThread() === !0 ? A.A.getChannel(e.parent_id) : e);
        return (
          !(null == t || t.isForumLikeChannel() || (0, _.qR)(t) || (0, E.BV)(t)) &&
          (!!(0, h.D1)(t) || !!(0, h.vy)(t)) &&
          ((0, f.Tv)(t, void 0, "Keyboard Shortcut"), !1)
        );
      },
    },
    [v.IWg.OPEN_CHANNEL_TAB]: {
      binds: ["mod+t"],
      comboKeysBindGlobal: !0,
      action() {
        if (s.A.isOpen()) return !1;
        if (!u.A.isEnabled()) return (l.A.hasLayers() || (0, a.WU)(), !1);
        let e = o.Ay.getCurrentlySelectedChannelId();
        return null != e && ((0, c.D5)(e, d.A.getGuildId() ?? null), !1);
      },
    },
    [v.IWg.CLOSE_CHANNEL_TAB]: {
      binds: ["mod+w"],
      comboKeysBindGlobal: !0,
      action() {
        if (!u.A.isEnabled() || l.A.hasLayers() || (0, r.hasAnyModalOpen)() || s.A.isOpen()) return;
        let e = u.A.getActiveTab();
        if (null != e && !(u.A.getTabs().length <= 1)) return ((0, c.f5)(e.id), !1);
      },
    },
    [v.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
      binds: ["mod+shift+p"],
      comboKeysBindGlobal: !0,
      action() {
        let e = u.A.getActiveTab();
        if (null != e) return ((0, c.RL)(e.id, !e.pinned), !1);
      },
    },
    [v.IWg.SEARCH_EMOJIS]: Y.L,
    [v.IWg.SEARCH_GIFS]: K.T,
    [v.IWg.SEARCH_STICKERS]: $.w,
    [v.IWg.TOGGLE_HOTKEYS]: ee.z,
    [v.IWg.JUMP_TO_FIRST_UNREAD]: k.s,
    [v.IWg.CREATE_GUILD]: {
      binds: ["mod+shift+n"],
      comboKeysBindGlobal: !0,
      action() {
        (0, r.hasModalOpen)(M.fc)
          ? b.A.updateCreateGuildModal({ slide: M.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
          : b.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
      },
    },
    [v.IWg.UPLOAD_FILE]: {
      binds: ["mod+shift+u"],
      comboKeysBindGlobal: !0,
      action() {
        let e = A.A.getChannel(o.Ay.getChannelId());
        return (
          null == e || e.isManaged() || D._.dispatch(v.jej.UPLOAD_FILE, { channelId: e.id }),
          !1
        );
      },
    },
    [v.IWg.RETURN_TO_AUDIO_CHANNEL]: j.u,
    [v.IWg.CALL_ACCEPT]: I.Yo,
    [v.IWg.CALL_START]: I.OX,
    [v.IWg.FOCUS_SEARCH]: {
      binds: ["mod+f", "mod+shift+f"],
      comboKeysBindGlobal: !0,
      action(e, t) {
        if (l.A.hasLayers() || (0, r.hasAnyModalOpen)()) return;
        let n = !t.includes("shift");
        return (D._.dispatch(v.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
      },
    },
    [v.IWg.JUMP_TO_CURRENT_CALL]: {
      binds: ["mod+shift+alt+v"],
      comboKeysBindGlobal: !0,
      action(e) {
        (e.preventDefault(), e.stopPropagation());
        let t = U.A.getGuildId(),
          n = U.A.getChannelId();
        return (null != n && (0, y.i)(t ?? v.ME, n), !1);
      },
    },
    [v.IWg.ZOOM_IN]: eE.Ur,
    [v.IWg.ZOOM_OUT]: eE.hU,
    [v.IWg.ZOOM_RESET]: eE.O$,
    [v.IWg.OPEN_APP_DIRECTORY]: {
      binds: ["mod+ctrl+a"],
      comboKeysBindGlobal: !0,
      action() {
        let e = d.A.getGuildId() ?? void 0;
        (0, F.transitionToGlobalDiscovery)({
          tab: V.GlobalDiscoveryTab.APPS,
          newSessionState: { guildId: e ?? null, entrypoint: { name: B.sW.KEYBOARD_SHORTCUT } },
        });
      },
    },
    [v.IWg.BROWSER_DEVTOOLS]: {
      binds: ["mod+alt+i"],
      comboKeysBindGlobal: !0,
      action(e) {
        if ((0, P.isWeb)() && "discord.com" === location.host)
          return (e.preventDefault(), e.stopPropagation(), !1);
      },
    },
    [v.IWg.OPEN_CONTEXT_MENU]: {
      binds: ["shift+f10"],
      comboKeysBindGlobal: !0,
      action() {
        let e = document.activeElement;
        return (
          null != e &&
          e !== document.body &&
          (e.dispatchEvent(
            new MouseEvent("contextmenu", {
              bubbles: !0,
              cancelable: !0,
              view: window,
              clientX: 0,
              clientY: 0,
            }),
          ),
          !1)
        );
      },
    },
    [v.IWg.COPY_CHANNEL_LINK]: {
      binds: ["mod+shift+l"],
      comboKeysBindGlobal: !0,
      action() {
        let e = o.Ay.getChannelId();
        if (null == e) return !1;
        let t = A.A.getChannel(e);
        if (null == t) return !1;
        let n = A.A.getChannel(t.parent_id),
          i = (0, C.af)(t, n);
        return ((0, O.C)(i, L), !1);
      },
    },
  };
  function eT() {
    return [
      {
        description: R.intl.string(R.t.bx4Uyz),
        binds: eI(v.IWg.SERVER_PREV, v.IWg.SERVER_NEXT),
        group: "NAVIGATION",
      },
      {
        description: R.intl.string(R.t["+Wem6h"]),
        binds: eI(v.IWg.CHANNEL_PREV, v.IWg.CHANNEL_NEXT),
        group: "NAVIGATION",
      },
      {
        description: R.intl.string(R.t["+2fcdz"]),
        binds: eI(v.IWg.NAVIGATE_BACK, v.IWg.NAVIGATE_FORWARD),
        group: "NAVIGATION",
      },
      {
        description: R.intl.string(R.t.eVmj1H),
        binds: eI(v.IWg.UNREAD_PREV, v.IWg.UNREAD_NEXT),
        group: "NAVIGATION",
      },
      {
        description: R.intl.string(R.t.EcqS7Y),
        binds: eI(v.IWg.MENTION_CHANNEL_PREV, v.IWg.MENTION_CHANNEL_NEXT),
        group: "NAVIGATION",
      },
      {
        description: R.intl.string(R.t["4I3pwW"]),
        binds: eI(v.IWg.JUMP_TO_CURRENT_CALL),
        group: "NAVIGATION",
      },
      {
        description: R.intl.string(R.t.Bqss72),
        binds: eI(v.IWg.TOGGLE_PREVIOUS_GUILD),
        group: "NAVIGATION",
      },
      {
        description: R.intl.string(R.t.yYsRlD),
        binds: eI(v.IWg.QUICKSWITCHER_SHOW),
        group: "NAVIGATION",
      },
      {
        description: R.intl.string(R.t.O7ouXO),
        binds: eI(v.IWg.CREATE_GUILD),
        group: "NAVIGATION",
        groupEnd: !0,
      },
      { description: R.intl.string(R.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
      { description: R.intl.string(R.t.dmMqay), binds: ["up", "down"], group: "DND" },
      { description: R.intl.string(R.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
      { description: R.intl.string(R.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
      { description: R.intl.string(R.t.UaXAPx), binds: eI(v.IWg.MARK_SERVER_READ), group: "CHAT" },
      {
        description: R.intl.string(R.t["5X9vFj"]),
        binds: eI(v.IWg.MARK_CHANNEL_READ),
        group: "CHAT",
      },
      { description: R.intl.string(R.t.wxQFsl), binds: eI(v.IWg.CREATE_DM_GROUP), group: "CHAT" },
      { description: R.intl.string(R.t["ZxGD+G"]), binds: eI(v.IWg.CREATE_THREAD), group: "CHAT" },
      {
        description: R.intl.string(R.t["C+XV7f"]),
        binds: eI(v.IWg.TOGGLE_CHANNEL_PINS),
        group: "CHAT",
      },
      { description: R.intl.string(R.t["Q+YV/T"]), binds: eI(v.IWg.TOGGLE_INBOX), group: "CHAT" },
      {
        description: R.intl.string(R.t["YEjV+W"]),
        binds: eI(v.IWg.MARK_TOP_INBOX_CHANNEL_READ),
        group: "CHAT",
      },
      { description: R.intl.string(R.t.AcBI9S), binds: eI(v.IWg.TOGGLE_USERS), group: "CHAT" },
      { description: R.intl.string(R.t.JoxNnl), binds: eI(v.IWg.SEARCH_EMOJIS), group: "CHAT" },
      { description: R.intl.string(R.t["3PHxo8"]), binds: eI(v.IWg.SEARCH_GIFS), group: "CHAT" },
      { description: R.intl.string(R.t.YFl7eb), binds: eI(v.IWg.SEARCH_STICKERS), group: "CHAT" },
      {
        description: R.intl.string(R.t.L3RYYJ),
        binds: eI(v.IWg.SCROLL_UP, v.IWg.SCROLL_DOWN),
        group: "CHAT",
      },
      {
        description: R.intl.string(R.t["3HAurM"]),
        binds: eI(v.IWg.JUMP_TO_FIRST_UNREAD),
        group: "CHAT",
      },
      { description: R.intl.string(R.t.rrYBEu), binds: eI(v.IWg.TEXTAREA_FOCUS), group: "CHAT" },
      { description: R.intl.string(R.t.sUJlPL), binds: eI(v.IWg.UPLOAD_FILE), group: "CHAT" },
      {
        description: R.intl.string(R.t["A+Fv0R"]),
        binds: eI(v.IWg.COPY_CHANNEL_LINK),
        group: "CHAT",
        groupEnd: !0,
      },
      {
        description: R.intl.string(R.t.tL6eVW),
        binds: eI(v.IWg.TOGGLE_MUTE),
        group: "VOICE_AND_VIDEO",
      },
      {
        description: R.intl.string(R.t["QXe/7T"]),
        binds: eI(v.IWg.TOGGLE_DEAFEN),
        group: "VOICE_AND_VIDEO",
      },
      {
        description: R.intl.string(R.t.d6UIii),
        binds: eI(v.IWg.CALL_ACCEPT),
        group: "VOICE_AND_VIDEO",
      },
      {
        description: R.intl.string(R.t.IcEW06),
        binds: eI(v.IWg.MARK_CHANNEL_READ),
        group: "VOICE_AND_VIDEO",
      },
      {
        description: R.intl.string(R.t.WN2dsS),
        binds: eI(v.IWg.CALL_START),
        group: "VOICE_AND_VIDEO",
        groupEnd: !0,
      },
      {
        description: R.intl.string(R.t.rUK0kk),
        binds: eI(v.IWg.SEARCH_SOUNDBOARD),
        group: "VOICE_AND_VIDEO",
      },
      {
        description: R.intl.string(R.t.vkGkSn),
        binds: eI(v.IWg.TOGGLE_HELP),
        group: "MISCELLANEOUS",
      },
      {
        description: R.intl.string(R.t.FJvZ87),
        binds: eI(v.IWg.FOCUS_SEARCH),
        group: "MISCELLANEOUS",
      },
      {
        description: R.intl.string(R.t["FiWl/T"]),
        binds: eI(v.IWg.OPEN_CONTEXT_MENU),
        group: "MISCELLANEOUS",
      },
      {
        description: R.intl.string(R.t.HnNtEI),
        binds: ["h+h+right+n+k"],
        group: "MISCELLANEOUS",
        groupEnd: !0,
      },
      { description: R.intl.string(R.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
      { description: R.intl.string(R.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
      { description: R.intl.string(R.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
      { description: R.intl.string(R.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
      { description: R.intl.string(R.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
      { description: R.intl.string(R.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
      { description: R.intl.string(R.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
      { description: R.intl.string(R.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
      { description: R.intl.string(R.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
      { description: R.intl.string(R.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
      {
        description: R.intl.string(R.t.z9c6mt),
        binds: eI(v.IWg.VIBE_WITH_WUMPUS),
        group: "MISCELLANEOUS",
      },
    ];
  }
  let em = ep;
}
