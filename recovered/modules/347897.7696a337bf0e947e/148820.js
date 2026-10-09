/* Recovered shipped factory. Module 148820.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1014508..1014719
 * Raw property SHA-256: 0a0a9cdc64ef97cdae89ff23bf17b8ccd967a5d8ecbb26f0b5e8c6f60dcbe010
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(46990),
    i = r(741623);
  e.exports = function (e) {
    if ("number" != typeof e && "bigint" != typeof e)
      throw new i("argument must be a Number or a BigInt");
    var t = e < 0 ? -n(-e) : n(e);
    return 0 === t ? 0 : t;
  };
}
