/* Recovered shipped factory. Module 467135.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3539424..3539959
 * Raw property SHA-256: 1532fa1f63b996231058b0806d1e88e6593f372b930751ef572c1914b2f9c793
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { OT: () => a, kJ: () => s, ko: () => l });
  var i = n(196765),
    r = n(121894);
  let a = "#5865F2",
    s = 74,
    l = (0, i.v)((e, t) => ({
      colors: [],
      chassisMixAmount: s,
      gradientAngle: 0,
      setColors: (t) => {
        (0, r.r)(() => {
          e({ colors: t });
        });
      },
      setChassisMixAmount: (t) => {
        (0, r.r)(() => {
          e({ chassisMixAmount: Math.round(t) });
        });
      },
      setGradientAngle: (t) => {
        (0, r.r)(() => {
          e({ gradientAngle: Math.round(t) });
        });
      },
      setAll: (t) => {
        let { colors: n, chassisMixAmount: i, gradientAngle: a } = t;
        (0, r.r)(() => {
          e({ colors: n, chassisMixAmount: i, gradientAngle: a });
        });
      },
      isEditorActive: () => t().colors.length > 0,
    }));
}
