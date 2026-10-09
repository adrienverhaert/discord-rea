/* Recovered shipped factory. Module 997649.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3652961..3653151
 * Raw property SHA-256: 0c8eb704bd90aac167e9431152517ca27b1de6165f9d791054c2ab13b8a1effc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i() {
    return { audioModelDataPerUser: {}, gameEventData: [] };
  }
  function r(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
  }
  n.d(t, { A: () => i, p: () => r });
}
