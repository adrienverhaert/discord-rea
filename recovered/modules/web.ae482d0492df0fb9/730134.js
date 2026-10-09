/* Recovered shipped factory. Module 730134.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 735863..736221
 * Raw property SHA-256: e4b2d4b1f40c28f9b8fe60c767a4dd087dfcb148d2173b2a7aab9082e16b2172
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900),
    r = n(582128),
    a = n(778712),
    s = n(97808),
    l = n(386467);
  let o = r.memo(function (e) {
    var t;
    let { user: n, size: o = a._3.SIZE_32, animate: d = !1, "aria-hidden": c = !1, ...u } = e,
      _ = r.useContext(l.A);
    return (0, i.jsx)(s.eu, {
      src: ((t = (0, a.FT)(o)), n.getAvatarURL(_, t, d)),
      size: o,
      "aria-label": c ? void 0 : n.username,
      "aria-hidden": c,
      ...u,
    });
  });
}
