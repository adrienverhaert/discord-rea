/* Recovered shipped factory. Module 25639.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3216715..3218419
 * Raw property SHA-256: 74f4069a79e8b9b775079f515f14e7ba26fc5581b1c3ed5dee1c4c4265faa016
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => p, s: () => o });
  var i,
    r = n(17928),
    a = n(73153),
    s = n(967198),
    l = n(977997),
    o =
      (((i = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
      (i.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
      (i.HIGH_CONTRAST = "HIGH_CONTRAST"),
      i);
  let d = {},
    c = {},
    u = null;
  function _(e) {
    null != c[e] && (clearTimeout(c[e]), delete c[e]);
  }
  function E(e) {
    (_(e),
      (c[e] = setTimeout(() => {
        let t = d[e];
        (null != t && ((d[e] = { ...t, style: "GENTLE_AMBIENT" }), I.emitChange()), delete c[e]);
      }, 2e3)));
  }
  function A() {
    for (let e of Object.keys(c)) clearTimeout(c[e]);
    ((c = {}), (d = {}));
  }
  function h() {
    return (A(), !0);
  }
  class f extends r.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
      this.waitFor(l.A, s.A);
    }
    getAnimationStyle(e) {
      return d[e]?.style ?? "GENTLE_AMBIENT";
    }
    getUserCount(e) {
      return d[e]?.userCount ?? 0;
    }
  }
  let I = new f(a.h, {
      VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
          n = s.A.getGuildId();
        n !== u && null != n && (u = n);
        let i = {};
        for (let e of t)
          e.guildId === n &&
            (null != e.oldChannelId && (i[e.oldChannelId] = (i[e.oldChannelId] ?? 0) - 1),
            null != e.channelId && (i[e.channelId] = (i[e.channelId] ?? 0) + 1));
        let r = !1;
        for (let [e, t] of Object.entries(i))
          (function (e, t) {
            let n = d[e],
              i = n?.userCount ?? 0,
              r = Math.max(0, i + t);
            return 0 === i && r > 0
              ? ((d[e] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: r }), E(e), !0)
              : i > 0 && r > i
                ? ((d[e] = { style: "HIGH_CONTRAST", userCount: r }), E(e), !0)
                : 0 === r
                  ? (_(e), delete d[e], !0)
                  : null != n && r !== i && ((d[e] = { ...n, userCount: r }), !0);
          })(e, t) && (r = !0);
        return r;
      },
      CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (t === u || null == t) return !1;
        ((u = t), A());
        let n = l.A.getVoiceStates(t),
          i = {};
        for (let e of Object.values(n))
          null != e.channelId && (i[e.channelId] = (i[e.channelId] ?? 0) + 1);
        for (let [e, t] of Object.entries(i))
          t > 0 && (d[e] = { style: "GENTLE_AMBIENT", userCount: t });
        return !0;
      },
      CONNECTION_OPEN: h,
      LOGOUT: h,
    }),
    p = I;
}
