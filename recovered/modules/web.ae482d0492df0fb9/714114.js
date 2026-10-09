/* Recovered shipped factory. Module 714114.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2707415..2708741
 * Raw property SHA-256: 0a0bfe7b12d516d96189f6d16b98fba7255a7d67dffb5187eb1378e8a930d7d6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => u, t$: () => c });
  var i = n(17928),
    r = n(734057),
    a = n(576705),
    s = n(977997),
    l = n(818348);
  let o = { ChannelStore: r.A, PermissionStore: a.A, VoiceStateStore: s.A },
    d = Object.freeze({ voiceState: void 0, voiceChannel: void 0 });
  function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
      n = (function (e) {
        let { userId: t, guildId: n, includeNonDiscoverable: i = !1 } = e,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
        return null != n && null != t
          ? i
            ? r.VoiceStateStore.getVoiceState(n, t)
            : r.VoiceStateStore.getDiscoverableVoiceState(n, t)
          : null != t
            ? i
              ? r.VoiceStateStore.getVoiceStateForUser(t)
              : r.VoiceStateStore.getDiscoverableVoiceStateForUser(t)
            : void 0;
      })(e, t),
      i = (function (e) {
        let { voiceState: t } = e,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
        if (t?.channelId != null) return n.ChannelStore.getChannel(t.channelId);
      })({ voiceState: n }, t);
    return !(function (e) {
      let { voiceState: t, voiceChannel: n } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
      return null != t && (n?.isPrivate() || i.PermissionStore.can(l.xB.VIEW_CHANNEL, n));
    })({ voiceState: n, voiceChannel: i }, t)
      ? d
      : { voiceState: n, voiceChannel: i };
  }
  function u(e) {
    let { userId: t, guildId: n, includeNonDiscoverable: l } = e;
    return (0, i.cf)(
      [r.A, a.A, s.A],
      () =>
        c(
          { userId: t, guildId: n, includeNonDiscoverable: l },
          { ChannelStore: r.A, PermissionStore: a.A, VoiceStateStore: s.A },
        ),
      [n, t, l],
    );
  }
}
