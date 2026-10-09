/* Recovered shipped factory. Module 150591.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10373497..10373913
 * Raw property SHA-256: 0140415650c410f069fda85cd2bca77339b61f57748d8d14898bc1adb90ede78
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { hP: () => d, kS: () => c });
  var i = n(582128),
    r = n(717421),
    a = n(844222),
    s = n(815390);
  let l = { mass: 1, tension: 1e3, friction: 48 },
    o = { mass: 1, tension: 1200, friction: 80 },
    d = l;
  function c(e, t) {
    let n = e === s.i.ENTERING || e === s.i.ENTERED,
      { reducedMotion: d } = i.useContext(a.C),
      c = n || d.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
    return (0, r.z)(
      { opacity: +!!n, transform: c, config: n ? l : o, delay: 64 * !!n },
      "animate-always",
    );
  }
}
