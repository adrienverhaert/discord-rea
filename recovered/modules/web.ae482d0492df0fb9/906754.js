/* Recovered shipped factory. Module 906754.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5917870..5918275
 * Raw property SHA-256: f5c48c1a094ab4d7b108aeb5c25abb651ff4d68aa4bcc67849ba1e3ec1996b59
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(548118),
    l = n(936755),
    o = n(978110);
  let d = function (e) {
    let { guild: t, children: n } = e,
      r =
        null != t
          ? (0, i.jsx)(s.Ay, {
              guild: t,
              size: s.Ay.Sizes.MEDIUM,
              className: a()(o.Kk, null == t.icon ? o.HO : o.FP),
              active: !0,
            })
          : null;
    return (0, i.jsxs)("span", {
      children: [
        (0, i.jsx)(l.A, { children: r }),
        (0, i.jsx)("span", { className: o.UU, children: n }),
      ],
    });
  };
}
