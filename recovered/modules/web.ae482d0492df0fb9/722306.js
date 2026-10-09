/* Recovered shipped factory. Module 722306.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7277085..7277371
 * Raw property SHA-256: f6e3fe8b9f1587f64a80160356d530b5d0d6bf264adc93f63867b4df93084104
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(613057);
  function r(e, t) {
    if (null == t) return !0;
    if ("string" == typeof t) return e.has(t);
    if ("object" != typeof t) return !1;
    let n = t[i.sm.ANY],
      r = t[i.sm.ALL];
    return !!(
      (Array.isArray(n) && n.some((t) => e.has(t))) ||
      (Array.isArray(r) && r.every((t) => e.has(t)))
    );
  }
}
