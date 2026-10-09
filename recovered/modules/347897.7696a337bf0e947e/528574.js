/* Recovered shipped factory. Module 528574.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 813282..813517
 * Raw property SHA-256: 2884b41ff7484b1245f3cb763078d976d06fe55600a4bdbf6b5bdd3bad421e34
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(655310),
    i = r(594230),
    o = r(868089),
    a = r(741623);
  e.exports = n
    ? function (e, t) {
        if (n(e, t)) return e;
        throw new a("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      }
    : i ||
      (o
        ? function (e, t) {
            return (o(e, t), e);
          }
        : null);
}
