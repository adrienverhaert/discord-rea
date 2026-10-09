/* Recovered shipped factory. Module 640847.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 498471..499292
 * Raw property SHA-256: 3cfde64490ae5cb3316e48d62a9084b74151ccf01d47068c6be6d66c55d5abe9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function () {
    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
    if ("symbol" == typeof Symbol.iterator) return !0;
    var e = {},
      t = Symbol("test"),
      r = Object(t);
    if (
      "string" == typeof t ||
      "[object Symbol]" !== Object.prototype.toString.call(t) ||
      "[object Symbol]" !== Object.prototype.toString.call(r)
    )
      return !1;
    for (var n in ((e[t] = 42), e)) return !1;
    if (
      ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
      ("function" == typeof Object.getOwnPropertyNames &&
        0 !== Object.getOwnPropertyNames(e).length)
    )
      return !1;
    var i = Object.getOwnPropertySymbols(e);
    if (1 !== i.length || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
      return !1;
    if ("function" == typeof Object.getOwnPropertyDescriptor) {
      var o = Object.getOwnPropertyDescriptor(e, t);
      if (42 !== o.value || !0 !== o.enumerable) return !1;
    }
    return !0;
  };
}
