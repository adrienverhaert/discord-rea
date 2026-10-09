/* Recovered shipped factory. Module 993077.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9898437..9898851
 * Raw property SHA-256: a11424108739b7f9912b53e69e6f0bb2b5dd19c6b904327b44c1cf1f7adc62b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z: () => d, s: () => l });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(717815);
  let l = { PRIMARY: s.Xc, DANGER: s.Wg, WARNING: s.vH, SUCCESS: s.CN, BRAND: s.cX, CUSTOM: s.Nr };
  function o(e) {
    let {
      children: t,
      outline: n = !1,
      editable: r,
      type: o = l.PRIMARY,
      className: d,
      ref: c,
      ...u
    } = e;
    return (0, i.jsx)("div", {
      ref: c,
      className: a()(d, s.Nr, o, { [s.VR]: n }),
      ...u,
      children: t,
    });
  }
  ((o.displayName = "Card"), (o.Types = l));
  let d = o;
}
