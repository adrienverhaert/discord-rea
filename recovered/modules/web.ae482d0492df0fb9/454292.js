/* Recovered shipped factory. Module 454292.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2654768..2654965
 * Raw property SHA-256: 84c141cb90e9c5c00a0ed9b39e0c0005ac83f65053bb75f622c4068e812f4490
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t, n) {
    return null == n
      ? null
      : (e.getApplicationActivity(n) ??
          t.getApplicationActivity(n, !0) ??
          t.getHiddenActivities().find((e) => e.application_id === n));
  }
  n.d(t, { A: () => i });
}
