/* Recovered shipped factory. Module 560332.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 608700..608968
 * Raw property SHA-256: ae41b073157557e7da02be5f6e7c18e76557bb7d90a51382ad80b345d0e1fb45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = Object.prototype.toString;
  e.exports = function (e) {
    var r = t.call(e),
      n = "[object Arguments]" === r;
    return (
      n ||
        (n =
          "[object Array]" !== r &&
          null !== e &&
          "object" == typeof e &&
          "number" == typeof e.length &&
          e.length >= 0 &&
          "[object Function]" === t.call(e.callee)),
      n
    );
  };
}
