/* Recovered shipped factory. Module 113783.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7640996..7641595
 * Raw property SHA-256: 7d21945d75a3a6efb130090275306167663af1e021345ed314a1cfed546f59d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { E5: () => l, J2: () => d, uy: () => c, zy: () => o });
  var i = n(17928),
    r = n(996439),
    a = n(63995),
    s = n(518769);
  function l(e, t) {
    let [n] = (0, i.bG)(
      [a.A],
      () => [a.A.getMutableParticipants(e, t), a.A.getParticipantsVersion(e)],
      [e, t],
      r.D,
    );
    return n;
  }
  function o(e, t) {
    return (0, i.bG)([a.A], () => a.A.getParticipantCount(e, t), [e, t]);
  }
  function d(e) {
    let [t] = (0, i.bG)(
      [a.A],
      () => [
        a.A.getMutableRequestToSpeakParticipants(e),
        a.A.getRequestToSpeakParticipantsVersion(e),
      ],
      [e],
      r.D,
    );
    return t;
  }
  function c(e) {
    return (0, i.bG)(
      [a.A],
      () => a.A.getMutableParticipants(e, s.ip.SPEAKER).filter((e) => e.type === s.wY.VOICE).length,
      [e],
    );
  }
}
