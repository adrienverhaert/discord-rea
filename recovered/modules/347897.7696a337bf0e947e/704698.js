/* Recovered shipped factory. Module 704698.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 579125..579511
 * Raw property SHA-256: 08f8342cff993761a8655755cd44852636699dbad546b169e4fc11781c8294ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(906046),
    i = n("Object.prototype.toString"),
    o = r(912877)(),
    a = r(429013);
  if (o) {
    var s = n("Symbol.prototype.toString"),
      l = a(/^Symbol\(.*\)$/);
    e.exports = function (e) {
      if ("symbol" == typeof e) return !0;
      if (!e || "object" != typeof e || "[object Symbol]" !== i(e)) return !1;
      try {
        return "symbol" == typeof e.valueOf() && l(s(e));
      } catch (e) {
        return !1;
      }
    };
  } else
    e.exports = function (e) {
      return !1;
    };
}
