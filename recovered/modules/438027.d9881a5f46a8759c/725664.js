/* Recovered shipped factory. Module 725664.
 * Source: recovered/web/assets/438027.d9881a5f46a8759c.js
 * UTF-16 property offsets: 25164..25351
 * Raw property SHA-256: bc09afb8e0e2d698ea20bf5856a5ef992e501e0fbf994058b4dac3f804d90c84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, e) {
  "use strict";
  function n(t, r) {
    if (null == t) return {};
    var e = {};
    for (var n in t)
      if ({}.hasOwnProperty.call(t, n)) {
        if (-1 !== r.indexOf(n)) continue;
        e[n] = t[n];
      }
    return e;
  }
  e.d(r, { A: () => n });
}
