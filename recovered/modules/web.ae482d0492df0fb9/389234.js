/* Recovered shipped factory. Module 389234.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3227401..3227835
 * Raw property SHA-256: dcdb5bec9c5af9867c7874efa37b8a8f560abf35e6669f4aa4d397956f4bb8de
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => o });
  var i = n(643501),
    r = n(964404),
    a = n(280450),
    s = n(71393),
    l = n(977997);
  function o(e) {
    if (r.Ay.disableVoiceChannelChangeAlert) return !1;
    let t = i.default.getRemoteSessionId();
    if (
      null != l.A.getVoiceStateForSession(a.default.getId(), t) ||
      !l.A.isCurrentClientInVoiceChannel() ||
      l.A.isInChannel(e.id)
    )
      return !1;
    let n = s.A.getGuild(e.getGuildId());
    return !(n?.afkChannelId != null && l.A.isInChannel(n.afkChannelId));
  }
}
