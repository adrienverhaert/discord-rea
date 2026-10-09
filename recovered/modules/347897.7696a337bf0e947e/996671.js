/* Recovered shipped factory. Module 996671.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 475017..476081
 * Raw property SHA-256: 8cb5c4dcd3f90a4592f130e8ff9feafa0be058ec28ebd7d872070d434d434feb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
    i = r(476744),
    o = r(696219),
    a = r(790669),
    s = r(704698),
    l = function (e, t) {
      if (null == e) throw TypeError("Cannot call method on " + e);
      if ("string" != typeof t || ("number" !== t && "string" !== t))
        throw TypeError('hint must be "string" or "number"');
      var r,
        n,
        a,
        s = "string" === t ? ["toString", "valueOf"] : ["valueOf", "toString"];
      for (a = 0; a < s.length; ++a) if (o((r = e[s[a]])) && i((n = r.call(e)))) return n;
      throw TypeError("No default value");
    },
    u = function (e, t) {
      var r = e[t];
      if (null != r) {
        if (!o(r))
          throw TypeError(
            r + " returned for property " + String(t) + " of object " + e + " is not a function",
          );
        return r;
      }
    };
  e.exports = function (e) {
    if (i(e)) return e;
    var t,
      r = "default";
    if (
      (arguments.length > 1 &&
        (arguments[1] === String ? (r = "string") : arguments[1] === Number && (r = "number")),
      n &&
        (Symbol.toPrimitive
          ? (t = u(e, Symbol.toPrimitive))
          : s(e) && (t = Symbol.prototype.valueOf)),
      void 0 !== t)
    ) {
      var o = t.call(e, r);
      if (i(o)) return o;
      throw TypeError("unable to convert exotic object to primitive");
    }
    return (
      "default" === r && (a(e) || s(e)) && (r = "string"),
      l(e, "default" === r ? "number" : r)
    );
  };
}
