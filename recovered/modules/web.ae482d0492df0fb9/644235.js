/* Recovered shipped factory. Module 644235.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3550593..3551037
 * Raw property SHA-256: 4f9158c2d12758c9c1af7e76e94949a0891f0929d0d445cf085304986a1107d7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { FK: () => d, GX: () => o, PC: () => c, Zu: () => l });
  var i = n(374994),
    r = n(462887);
  n(385803);
  var a = n(185928),
    s = n(818348);
  function l(e) {
    return (0, r.M)(e) ? s.NJ.DARK : s.NJ.LIGHT;
  }
  function o(e, t) {
    return null != t && t.colors.length > 0 ? l(e) : e;
  }
  function d(e) {
    let { angle: t, colors: n } = e;
    return `linear-gradient(${t}deg, ${n
      .map((e) => {
        let { token: t, stop: n } = e;
        return `${(0, i.nt)(t, { saturation: 1 })} ${n}%`;
      })
      .join(", ")})`;
  }
  function c(e) {
    return l(a.dP[e]);
  }
}
