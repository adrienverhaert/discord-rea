/* Recovered shipped factory. Module 749401.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3905875..3906685
 * Raw property SHA-256: b58a3cebf4969e435d1f88d5dd7e0ab974006d2ca8ed3c4c274dc9a8982de269
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z: () => _, a: () => d });
  var i = n(582128),
    r = n(310784),
    a = n.n(r),
    s = n(306327),
    l = n(702841),
    o = n(775602);
  function d(e) {
    let t = (0, l.bG)([o.Ay], () => o.Ay.saturation);
    return i.useMemo(() => {
      if (null == e) return null;
      if ("currentColor" === e || e.startsWith("var(")) return e;
      let n = a()(e);
      return n.set("hsl.s", n.get("hsl.s") * t).hex();
    }, [e, t]);
  }
  function c(e) {
    let [t, n, i] = new s.A(e).oklab;
    return [t, n, i];
  }
  function u(e) {
    let [t, n, i] = c(e);
    return Math.sqrt(n * n + i * i) * Math.max(0, 1 - 2 * Math.abs(t - 0.65));
  }
  function _(e) {
    if (0 === e.length) return ["#000000", "#ffffff"];
    if (1 === e.length) return [e[0], e[0]];
    let t = [...e].sort((e, t) => u(t) - u(e)),
      n = t[0],
      i = -1,
      r = t[1];
    for (let t of e) {
      if (t === n) continue;
      let e =
        (function (e, t) {
          let [n, i, r] = c(e),
            [a, s, l] = c(t);
          return Math.sqrt((a - n) ** 2 + (s - i) ** 2 + (l - r) ** 2);
        })(n, t) *
        (1 + 2 * u(t));
      e > i && ((i = e), (r = t));
    }
    return [n, r];
  }
}
