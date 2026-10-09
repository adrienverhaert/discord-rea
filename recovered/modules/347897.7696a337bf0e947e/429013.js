/* Recovered shipped factory. Module 429013.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 779304..779513
 * Raw property SHA-256: 8c2eddad3239b6734edfe4c2cc86bc62d1f14ae4834db644cab543d1bbfa726f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(906046),
    i = r(486335),
    o = n("RegExp.prototype.exec"),
    a = r(741623);
  e.exports = function (e) {
    if (!i(e)) throw new a("`regex` must be a RegExp");
    return function (t) {
      return null !== o(e, t);
    };
  };
}
