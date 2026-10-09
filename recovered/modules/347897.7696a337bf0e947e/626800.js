/* Recovered shipped factory. Module 626800.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 575009..575462
 * Raw property SHA-256: 75ed8d501117f4d16de8d56e4d764f1f357e389b0b6ec93039cfeeb378f0098d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(581070)(),
    i = r(906046)("Object.prototype.toString"),
    o = function (e) {
      return (
        (!n || !e || "object" != typeof e || !(Symbol.toStringTag in e)) &&
        "[object Arguments]" === i(e)
      );
    },
    a = function (e) {
      return (
        !!o(e) ||
        (null !== e &&
          "object" == typeof e &&
          "length" in e &&
          "number" == typeof e.length &&
          e.length >= 0 &&
          "[object Array]" !== i(e) &&
          "callee" in e &&
          "[object Function]" === i(e.callee))
      );
    },
    s = (function () {
      return o(arguments);
    })();
  ((o.isLegacyArguments = a), (e.exports = s ? o : a));
}
