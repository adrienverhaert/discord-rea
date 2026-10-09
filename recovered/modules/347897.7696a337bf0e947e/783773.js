/* Recovered shipped factory. Module 783773.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 473265..473629
 * Raw property SHA-256: d33f8b4bd30cde8447100b1046bf77770fadb027f30f96c2267eb4f353c9b2d5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n,
    i = r(326948),
    o = r(267768);
  try {
    n = [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || "object" != typeof e || !("code" in e) || "ERR_PROTO_ACCESS" !== e.code) throw e;
  }
  var a = !!n && o && o(Object.prototype, "__proto__"),
    s = Object,
    l = s.getPrototypeOf;
  e.exports =
    a && "function" == typeof a.get
      ? i([a.get])
      : "function" == typeof l &&
        function (e) {
          return l(null == e ? e : s(e));
        };
}
