/* Recovered shipped factory. Module 357758.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11753233..11753460
 * Raw property SHA-256: 135b70f55f39463f2e811820be2f46453bfe79502ed55bdf44d5623083cb88d9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    if (e === t) return !0;
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
  }
  function r(e) {
    return null == e ? new Set() : e instanceof Set ? e : new Set(e);
  }
  n.d(t, { _: () => i, y: () => r });
}
