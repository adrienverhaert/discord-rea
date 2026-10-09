/* Recovered shipped factory. Module 450373.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3906686..3907038
 * Raw property SHA-256: 44345a8dbae73c1e0d7d5b58cf56d60a9b1e39f650751fc05f5d9acd2f97eebb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(582128),
    r = n(440745),
    a = n.n(r),
    s = n(317097),
    l = n(17928),
    o = n(775602);
  let d = function (e) {
    let t = (0, l.bG)([o.Ay], () => (o.Ay.desaturateUserColors ? o.Ay.saturation : 1));
    return (0, i.useMemo)(() => {
      let { h: n, s: i, l: r } = a()((0, s.Hl)(e)).toHsl(),
        l = a()({ h: n, s: i * t, l: r });
      return { hex: l.toHexString(), hsl: l.toHslString() };
    }, [e, t]);
  };
}
