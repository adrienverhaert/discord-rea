/* Recovered shipped factory. Module 824492.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7602717..7603525
 * Raw property SHA-256: 52db20f395336e3bdc5ea66f0f3740899fe600086847f52c02f850590686635b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153),
    a = n(280450);
  let s = { users: {} };
  class l extends i.Ay.DeviceSettingsStore {
    static displayName = "ChannelSpoilerAgreeStore";
    static persistKey = "ChannelSpoilerAgreeStore";
    initialize(e) {
      (this.waitFor(a.default),
        (s = null != e && null != e.users ? { users: e.users } : { users: {} }));
    }
    didAgree(e) {
      if (null == e) return !1;
      let t = a.default.getId();
      return null != t && (s.users[t]?.channels[e] || !1);
    }
    getState() {
      return s;
    }
    getUserAgnosticState() {
      return s;
    }
  }
  let o = new l(r.h, {
    CHANNEL_SPOILER_AGREE: function (e) {
      let { channelId: t } = e,
        n = a.default.getId();
      if (null == n) return !1;
      (null == s.users[n] && (s.users[n] = { channels: {} }), (s.users[n].channels[t] = !0));
    },
    CHANNEL_SPOILER_AGREE_CLEAR: function (e) {
      let { channelId: t } = e,
        n = a.default.getId();
      if (null == n || null == s.users[n]) return !1;
      delete s.users[n].channels[t];
    },
  });
}
