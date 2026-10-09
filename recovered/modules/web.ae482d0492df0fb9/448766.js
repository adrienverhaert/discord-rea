/* Recovered shipped factory. Module 448766.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5787256..5787757
 * Raw property SHA-256: a6a2de71b8faa69a17e9ce08aae5dada2c99ec52c6174a80f2420f634834367c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d: () => E, j: () => h });
  var i = n(477900);
  n(582128);
  var r = n(435558),
    a = n.n(r),
    s = n(807081),
    l = n(247186),
    o = n(999915),
    d = n(551965),
    c = n(268246);
  let u = ["escape", "text", "strong", "em", "u", "url", "autolink"],
    _ = (0, d.A)([
      a().pick(o.Ay.RULES, u),
      (0, l.Ay)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }),
    ]),
    E = s.aV(_),
    A = (0, d.A)([
      a().pick(o.Ay.RULES, u),
      (0, l.Ay)({ enableBuildOverrides: !1 }),
      {
        link: {
          react: (e, t, n) =>
            (0, i.jsx)("span", { className: c.p, children: t(e.content, n) }, n.key),
        },
      },
    ]),
    h = s.aV(A);
}
