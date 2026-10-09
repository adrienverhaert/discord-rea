/* Recovered shipped factory. Module 717558.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2248516..2249425
 * Raw property SHA-256: 858565714ea3ed20be8666a85b01c921f8cca7be0fd273ebb374cb2b132661a5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, R: () => d });
  var i = n(17928),
    r = n(209932),
    a = n(309010),
    s = n(485296),
    l = n(977997);
  function o(e) {
    let {
        userId: t,
        checkSoundSharing: n = !1,
        checkSoundboardSounds: o = !0,
        checkIsMuted: d = !1,
        context: c,
      } = e,
      u = (0, i.bG)([l.A, a.Ay], () => {
        let e = a.Ay.getVoiceChannelId();
        return null != e ? l.A.getVoiceStateForChannel(e, t) : null;
      }),
      _ = d && (u?.mute || u?.selfMute),
      E = (0, i.bG)([s.A], () => s.A.isSpeaking(t, c) && !_),
      A = (0, i.bG)([s.A], () => s.A.isSoundSharing(t) && n),
      h = (0, i.bG)([r.A], () => r.A.isUserPlayingSounds(t) && o);
    return E || h || A;
  }
  function d(e) {
    let {
        userId: t,
        checkSoundSharing: n = !1,
        checkSoundboardSounds: i = !0,
        checkIsMuted: o = !1,
        context: d,
      } = e,
      [c, u, _, E] =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A, a.Ay, s.A, r.A],
      A = u.getVoiceChannelId(),
      h = null != A ? c.getVoiceStateForChannel(A, t) : null,
      f = o && (h?.mute || h?.selfMute),
      I = _.isSpeaking(t, d) && !f,
      p = _.isSoundSharing(t) && n,
      T = E.isUserPlayingSounds(t) && i;
    return I || T || p;
  }
}
