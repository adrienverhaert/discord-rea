/* Recovered shipped factory. Module 172272.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4153373..4154082
 * Raw property SHA-256: 780dfe76ba9551626e1f50c655dfc89a8ca465bca1817d7efc4d6ed180171a68
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C1: () => c, Or: () => d, YR: () => o });
  var i = n(477900),
    r = n(196765),
    a = n(17928),
    s = n(111162),
    l = n(779016);
  let o = 64,
    d = (0, r.v)((e) => ({
      horizontalSpacing: 4,
      verticalSpacing: 4,
      setHorizontalSpacing: (t) => {
        e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), o)) });
      },
      setVerticalSpacing: (t) => {
        e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), o)) });
      },
    }));
  function c() {
    let e = (0, a.bG)([s.default], () => s.default.layoutDebuggingEnabled),
      { horizontalSpacing: t, verticalSpacing: n } = d();
    return e
      ? (0, i.jsx)("div", {
          className: l.k,
          children: (0, i.jsx)("div", {
            className: l.Z,
            "data-horizontal": t > 0,
            "data-vertical": n > 0,
            style: {
              "--custom-grid-horizontal-spacing": `${t}px`,
              "--custom-grid-vertical-spacing": `${n}px`,
            },
          }),
        })
      : null;
  }
}
