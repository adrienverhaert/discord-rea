/* Recovered shipped factory. Module 400696.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 578841..579124
 * Raw property SHA-256: 2b51fcb282565cbe93f0631e19e494c743230c8a9705aa93373a527914e16680
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(906046),
    i = n("String.prototype.valueOf"),
    o = function (e) {
      try {
        return (i(e), !0);
      } catch (e) {
        return !1;
      }
    },
    a = n("Object.prototype.toString"),
    s = r(581070)();
  e.exports = function (e) {
    return (
      "string" == typeof e ||
      (!!e && "object" == typeof e && (s ? o(e) : "[object String]" === a(e)))
    );
  };
}
