/* Recovered shipped factory. Module 790669.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 576798..577061
 * Raw property SHA-256: ee87b17d2832ab56e758ca11a6be4c7e3954e01f8998f14115528a16a1f985eb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(906046),
    i = n("Date.prototype.getDay"),
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
    return "object" == typeof e && null !== e && (s ? o(e) : "[object Date]" === a(e));
  };
}
