/* Recovered shipped factory. Module 472229.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2519651..2519842
 * Raw property SHA-256: 00c5beb6d461d282633e3791c37dcf86b5c73cd0ae04499b50c6f6525f6581b0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i() {
    if (null == Intl.DateTimeFormat) return null;
    let e = Intl.DateTimeFormat();
    return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone;
  }
  n.d(t, { A: () => i });
}
