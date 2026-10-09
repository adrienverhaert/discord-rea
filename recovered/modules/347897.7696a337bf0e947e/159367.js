/* Recovered shipped factory. Module 159367.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1008300..1008539
 * Raw property SHA-256: 80833b0eb5a69c79aa854668e2a134ace92cfdc1373219ba290b89c13ae6b6c8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(741623),
    i = r(353841),
    o = r(14665);
  e.exports = function (e) {
    if (void 0 === e) return !1;
    if (!o(e)) throw new n("Assertion failed: `Desc` must be a Property Descriptor");
    return !!i(e, "[[Value]]") || !!i(e, "[[Writable]]");
  };
}
