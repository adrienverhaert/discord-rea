/* Recovered shipped factory. Module 249686.
 * Source: recovered/web/assets/586783.86d820c06fe82926.js
 * UTF-16 property offsets: 5100..5530
 * Raw property SHA-256: a2cf9d24ae85bf39d3a8b646f2b9c152f9dcf3461469e438a4af64888129b421
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  var n = r(269791),
    a = r(109850),
    i = r(114727),
    l = r(377482),
    s = r(667349),
    o = r(208009),
    h = r(424478),
    u = r(678270),
    c = Object.prototype.hasOwnProperty;
  e.exports = function (e) {
    if (null == e) return !0;
    if (
      s(e) &&
      (l(e) || "string" == typeof e || "function" == typeof e.splice || o(e) || u(e) || i(e))
    )
      return !e.length;
    var t = a(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (h(e)) return !n(e).length;
    for (var r in e) if (c.call(e, r)) return !1;
    return !0;
  };
}
