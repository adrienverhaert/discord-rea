/* Recovered shipped factory. Module 551826.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6650422..6650753
 * Raw property SHA-256: c9c6ce96a69a711ec0d59212a2ae693f69012147033e47e63dd1d89c20efa1fb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(702841),
    a = n(568602),
    s = n(3137),
    l = n(208343);
  function o(e) {
    let { isShaking: t, shakeLocation: n, children: o, className: d } = e,
      c = (0, l.A)(n);
    return (0, r.bG)([s.A], () => s.A.isEnabled({ shakeLocation: n }))
      ? (0, i.jsx)(a.b, { isShaking: t, intensity: c, className: d, children: o })
      : o;
  }
}
