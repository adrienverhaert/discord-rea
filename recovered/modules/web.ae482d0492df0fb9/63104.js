/* Recovered shipped factory. Module 63104.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3969549..3970381
 * Raw property SHA-256: 588d88d8699834e731e038d2b13c0451761b95f21f641e25d6315abe7244fb10
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(317097),
    l = n(17928),
    o = n(661531),
    d = n(602853),
    c = n(173936),
    u = n(775602),
    _ = n(7250),
    E = n(125752);
  let A = o.A.unsafe_rawColors.PRIMARY_300,
    h = o.A.unsafe_rawColors.WHITE,
    f = o.A.unsafe_rawColors.PRIMARY_630;
  function I(e) {
    let { color: t, size: n, forcedIconColor: r, className: o, iconClassName: I } = e,
      [p, T] = (0, l.yK)([u.Ay], () => [u.Ay.desaturateUserColors, u.Ay.saturation]),
      m = (0, d.r)(A).hex(),
      g = t ?? m,
      S = (0, s.$k)((0, s.LX)(g), !1, p ? T : null),
      N = (0, d.r)(h).hex(),
      C = (0, d.r)(f).hex(),
      O = null != r ? r : (0, _.j)({ backgroundColor: g, colors: [N, C] }),
      R = n / 8;
    return (0, i.jsx)("div", {
      style: { background: S, width: n, height: n, borderRadius: n, lineHeight: `${n}px` },
      className: o,
      children: (0, i.jsx)(c.LinkIcon, {
        size: "custom",
        color: O,
        className: a()(E.w, I),
        width: n - 2 * R,
        height: n - 2 * R,
        style: { margin: R },
      }),
    });
  }
}
