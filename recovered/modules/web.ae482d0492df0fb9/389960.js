/* Recovered shipped factory. Module 389960.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8311921..8312422
 * Raw property SHA-256: 1864815e6eb79c43d2e30f0502797a66ed59947df152222471a62196be28b36b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, N: () => l });
  var i = n(17928),
    r = n(280450),
    a = n(192820),
    s = n(977997);
  function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Ay,
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
      l = null != e ? t.getVoiceState(e.getGuildId(), i.getId()) : null;
    return { selfDeaf: n.isSelfDeaf(), deaf: l?.deaf ?? !1 };
  }
  function o(e) {
    return (0, i.cf)([s.A, a.Ay, r.default], () => l(e, s.A, a.Ay, r.default), [e]);
  }
}
