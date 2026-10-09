/* Recovered shipped factory. Module 86882.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 461118..461356
 * Raw property SHA-256: 29a62a5c9d0191e89992fd3d5055192febd0b35d673c531909a596028783ad72
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  e.exports = function (e) {
    "number" != typeof e.which && (e.which = e.keyCode);
    var t,
      n = r(780594)(e);
    if (n) {
      if ("keyup" === e.type && this.ignoreNextKeyup === n) {
        this.ignoreNextKeyup = !1;
        return;
      }
      ((t = r(767721)), this.handleKey(n, t(e), e));
    }
  };
}
