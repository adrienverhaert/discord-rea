/* Recovered shipped factory. Module 781183.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3760794..3761146
 * Raw property SHA-256: b156dc40201eedf44be8681e6abbc299d8f0fde3ee79abbcd1c7cdddaf56c4c3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ym: () => a, qE: () => i.clamp, ry: () => r });
  var i = n(435558);
  function r(e) {
    return 1 / (1 + Math.exp(-e));
  }
  function a(e, t) {
    if (0 === e.length) return 0;
    if (1 === e.length) return e[0];
    let n = [...e].sort((e, t) => e - t),
      r = ((0, i.clamp)(t, 0, 100) / 100) * (n.length - 1),
      a = Math.floor(r),
      s = Math.ceil(r);
    if (a === s) return n[a];
    let l = r - a;
    return n[a] * (1 - l) + n[s] * l;
  }
}
