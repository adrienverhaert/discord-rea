/* Recovered shipped factory. Module 392634.
 * Source: recovered/web/assets/1073fe2106aa3204.js
 * UTF-16 property offsets: 95..509
 * Raw property SHA-256: b199aab52282652f1e7b80d8284f90140e17bb961f9f880b30117ad879a506af
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (c, e, s) {
  s.d(e, { A: () => d });
  var i = s(477900);
  s(582128);
  var r = s(503698),
    a = s.n(r),
    t = s(834730),
    n = s(742078);
  function d(c) {
    let { icon: e, iconClassName: s, description: r, color: d } = c;
    return (0, i.jsxs)("div", {
      className: n.bK,
      children: [
        (0, i.jsx)("div", {
          className: n.f8,
          children: (0, i.jsx)(e, { color: d ?? "currentColor", className: a()(n.kf, s) }),
        }),
        (0, i.jsx)(t.E, {
          variant: "text-md/medium",
          color: "interactive-text-active",
          children: r,
        }),
      ],
    });
  }
}
