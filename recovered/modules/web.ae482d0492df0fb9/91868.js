/* Recovered shipped factory. Module 91868.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6317958..6321777
 * Raw property SHA-256: bb28c3ee4ce72c83fd441527b841e4302cbbd25530400d325547d99daef14c44
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => v, Y: () => T }), n(321073));
  var i,
    r = n(17928),
    a = n(713402),
    s = n(73153),
    l = n(174768),
    o = n(95701),
    d = n(734057),
    c = n(573163),
    u = n(994500),
    _ = n(645959),
    E = n(935208),
    A = n(914853),
    h = n(956753),
    f = n(648427),
    I = n(315240),
    p = n(652215),
    T = (((i = {}).ACTIVE_NOW = "ACTIVE_NOW"), (i.DMS = "DMS"), (i.RECENT_TEXT = "RECENT_TEXT"), i);
  let m = new a.J(
      function (e) {
        let t = [];
        return (
          e.isInActiveNow && t.push("ACTIVE_NOW"),
          e.isInDmsList && t.push("DMS"),
          e.isInRecentTextList && t.push("RECENT_TEXT"),
          t
        );
      },
      function (e) {
        return e.sortKey;
      },
    ),
    g = null,
    S = new Set();
  function N(e) {
    return String(Math.max(0, Math.min(0x9184e729fff, 0x9184e729fff - Math.floor(e)))).padStart(
      13,
      "0",
    );
  }
  function C(e) {
    let t = (function (e) {
      let t = d.A.getChannel(e);
      if (null == t) return null;
      let n = t.isPrivate(),
        i = !n && (0, o.ke)(t.type);
      if (!n && !i) return null;
      if (t.isDM()) {
        let e = t.getRecipientId?.();
        if (
          null != e &&
          u.A.getRelationshipType(e) === p.eA$.PENDING_INCOMING &&
          (u.A.isIgnored(e) || u.A.isSpam(e))
        )
          return null;
      }
      let r = I.A.hasActiveNowChannelId({ kind: I.u.Text, channelId: e }),
        a = i && (l.A.getChannelHistory().includes(e) || f.A.getTextChannelHistory().includes(e)),
        s = c.Ay.hasUnread(e) || c.Ay.getMentionCount(e) > 0,
        _ = null != t.lastMessageId ? E.default.extractTimestamp(t.lastMessageId) : 0,
        A = (() => {
          var t;
          if (n) return `DM\0${N(_)}\0${e}`;
          if (r) {
            let n;
            return (
              (t = I.A.getScoreForChannelId(e) ?? 0),
              (n = Math.floor(Math.max(0, Math.min(0x2540be3ff, 1e6 * t)))),
              `AN\0${String(0x2540be3ff - n).padStart(10, "0")}\0${e}`
            );
          }
          return `GT\0${s ? "0" : "1"}\0${N(_)}\0${e}`;
        })();
      return {
        id: e,
        channelId: e,
        isInActiveNow: r,
        isInDmsList: n,
        isInRecentTextList: a,
        hasUnread: s,
        lastActivityAtMs: _,
        sortKey: A,
      };
    })(e);
    return null == t ? m.delete(e) : m.set(e, t);
  }
  function O() {
    let e = I.A.getActiveNowChannelIds({ kind: I.u.Text }),
      t = new Set(e),
      n = !1;
    for (let t of e) n = C(t) || n;
    for (let e of [...m.values("ACTIVE_NOW")]) t.has(e.channelId) || (n = C(e.channelId) || n);
    return ((S = t), n);
  }
  function R() {
    (m.clear(), (S = new Set()));
    let e = !1;
    for (let t of _.A.getPrivateChannelIds()) e = C(t) || e;
    for (let t of l.A.getChannelHistory()) e = C(t) || e;
    for (let t of f.A.getTextChannelHistory()) e = C(t) || e;
    let t = I.A.getActiveNowChannelIds({ kind: I.u.Text });
    for (let n of ((S = new Set(t)), t)) e = C(n) || e;
    return e;
  }
  function L(e) {
    let t = d.A.getDMFromUserId(e);
    return null != t && C(t);
  }
  class y extends r.Ay.Store {
    static displayName = "FriendsWidgetMessagesStore";
    initialize() {
      (this.waitFor(d.A, I.A, l.A, c.Ay, u.A, _.A, f.A), R());
    }
    getRows(e) {
      return [m.values(e), m.version];
    }
    getChannel(e) {
      return m.get(e);
    }
  }
  function D(e) {
    return (0, h.v$)(e, "FriendsWidgetMessagesStore");
  }
  let v = new y(
    s.h,
    __OVERLAY__
      ? {}
      : {
          OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: D(function (e) {
            return e.tab === A.x.MESSAGES && C(e.targetId);
          }),
          CHANNEL_SELECT: D(function (e) {
            let t = e.channelId ?? null,
              n = g;
            g = t;
            let i = !1;
            (null != n && (i = C(n) || i), null != t && (i = C(t) || i));
            let r = O();
            return i || r;
          }),
          MESSAGE_CREATE: D(function (e) {
            if (e.optimistic) return !1;
            let t = C(e.channelId),
              n = O();
            return t || n;
          }),
          MESSAGE_ACK: D(function (e) {
            return C(e.channelId);
          }),
          TYPING_START: D(function (e) {
            var t = e.channelId;
            let n = new Set(I.A.getActiveNowChannelIds({ kind: I.u.Text })),
              i = !1;
            for (let e of ((i = C(t) || i), n)) S.has(e) || (i = C(e) || i);
            for (let e of S) n.has(e) || (i = C(e) || i);
            return ((S = n), i);
          }),
          RTC_CONNECTION_STATE: D(function () {
            return O();
          }),
          VOICE_CHANNEL_SELECT: D(function () {
            return O();
          }),
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: D(O),
          USER_GUILD_SETTINGS_GUILD_UPDATE: D(O),
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: D(O),
          RELATIONSHIP_ADD: D(function (e) {
            return L(e.relationship.id);
          }),
          RELATIONSHIP_REMOVE: D(function (e) {
            return L(e.relationship.id);
          }),
          RELATIONSHIP_UPDATE: D(function (e) {
            return L(e.relationship.id);
          }),
          RELATIONSHIP_PENDING_INCOMING_REMOVED: D(function (e) {
            let t = !1;
            for (let e of _.A.getPrivateChannelIds()) {
              let n = d.A.getChannel(e);
              null != n && n.isDM() && (t = C(e) || t);
            }
            return t;
          }),
          OVERLAY_INITIALIZE: D(R),
          POST_CONNECTION_OPEN: D(R),
          CACHE_LOADED: D(R),
          CACHE_LOADED_LAZY: D(R),
          FRIENDS_LIST_POPOUT_MOUNTED: D(R),
          LOGOUT: D(function () {
            let e = m.size() > 0;
            return (m.clear(), (g = null), (S = new Set()), e);
          }),
        },
  );
}
