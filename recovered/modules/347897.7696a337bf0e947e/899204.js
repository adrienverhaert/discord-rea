/* Recovered shipped factory. Module 899204.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1007620..1007852
 * Raw property SHA-256: a527cbd30b694752bf33df3117c11304c06d7fa2505633d2a384ae007cba7c44
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
    return !!i(e, "[[Get]]") || !!i(e, "[[Set]]");
  };
}
