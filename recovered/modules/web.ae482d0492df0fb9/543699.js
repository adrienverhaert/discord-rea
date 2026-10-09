/* Recovered shipped factory. Module 543699.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7940052..7940759
 * Raw property SHA-256: 61bdf100510600119e9c1e90189d599bb87441740e270dad56e719371d117b10
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { tJ: () => c, tM: () => d, v2: () => _, wg: () => u });
  var i = n(310784),
    r = n.n(i),
    a = n(435558),
    s = n(317097),
    l = n(498596);
  n(325335);
  var o = n(652215);
  function d(e) {
    return null == e ? null : (0, s.OK)(e) > 0.5 ? o.NJ8.DARK : o.NJ8.LIGHT;
  }
  function c(e, t, n) {
    let i = n / 100,
      r = 1 - i;
    return [
      Math.round(e[0] * r + t[0] * i),
      Math.round(e[1] * r + t[1] * i),
      Math.round(e[2] * r + t[2] * i),
    ];
  }
  let u = (0, a.memoize)(
      (e) => {
        let t = (0, l.OB)(e, { base: "#ffffff", contrastRatio: l.Tr.HighContrastText });
        return (0, s.LX)(t);
      },
      (e) => e,
    ),
    _ = (0, a.memoize)(
      (e, t, n) => {
        let i = (n ?? d(e)) !== o.NJ8.LIGHT,
          s = r().mix(r()(e), r()(t), 0.5, "lab"),
          l = Math.round(100 * s.get("hsl.l")) / 100,
          c = i ? (0, a.clamp)(l, 0, 0.1) : (0, a.clamp)(l, 0.8, 1);
        return r()(s).set("hsl.l", c).num();
      },
      (e, t, n) => `${e}-${t}-${n}`,
    );
}
