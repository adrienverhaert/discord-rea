/* Recovered shipped factory. Module 645577.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11593906..11594048
 * Raw property SHA-256: a22aa66181ed7303d1407ae263e3ff55daf2be9c7bcae45a2da3f26dff4596d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t, n) {
    return e ? (t.timestampSec >= t.duration ? 0 : t.timestampSec) : Math.max(t.timestampSec, n);
  }
  n.d(t, { g: () => i });
}
