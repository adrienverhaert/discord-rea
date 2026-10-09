/* Recovered shipped factory. Module 486335.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 577916..578440
 * Raw property SHA-256: 12215fb38acd92277bea4d9846d93b06325a0a91efbe527a157be3fa816f2387
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n,
    i = r(906046),
    o = r(581070)(),
    a = r(353841),
    s = r(267768);
  if (o) {
    var l = i("RegExp.prototype.exec"),
      u = {},
      c = function () {
        throw u;
      },
      f = { toString: c, valueOf: c };
    ("symbol" == typeof Symbol.toPrimitive && (f[Symbol.toPrimitive] = c),
      (n = function (e) {
        if (!e || "object" != typeof e) return !1;
        var t = s(e, "lastIndex");
        if (!(t && a(t, "value"))) return !1;
        try {
          l(e, f);
        } catch (e) {
          return e === u;
        }
      }));
  } else {
    var p = i("Object.prototype.toString");
    n = function (e) {
      return !!e && ("object" == typeof e || "function" == typeof e) && "[object RegExp]" === p(e);
    };
  }
  e.exports = n;
}
