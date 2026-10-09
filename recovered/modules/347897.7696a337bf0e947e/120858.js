/* Recovered shipped factory. Module 120858.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1004244..1004453
 * Raw property SHA-256: cb34eed9059876dea92c6a4d67761ce05735830a72cfcf555391f30f730a605f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(439619),
    i = r(142896),
    o = r(870064),
    a = n("%Promise.resolve%", !0),
    s = a && i(a);
  e.exports = function (e, t) {
    if (!s) throw new o("This environment does not support Promises.");
    return s(e, t);
  };
}
