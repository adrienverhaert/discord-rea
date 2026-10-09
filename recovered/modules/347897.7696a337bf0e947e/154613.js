/* Recovered shipped factory. Module 154613.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1007380..1007619
 * Raw property SHA-256: 34d15bc6cd82aa65e323afb71317d305ae54eac8de7b0f324fb010a91b56f063
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(741623),
    i = r(227106),
    o = r(732937);
  e.exports = function (e, t) {
    if (!i(e)) throw new n("Assertion failed: `O` must be an Object");
    if (!o(t)) throw new n("Assertion failed: `P` must be a Property Key");
    return t in e;
  };
}
