/* Recovered shipped factory. Module 428495.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 497640..497894
 * Raw property SHA-256: e53b1fbc1fb520ed6f0275606d257eb5f514ec3d7c6f30a8c8423c8c85d57222
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(521033),
    i = r(755311),
    o = r(783773);
  e.exports = n
    ? function (e) {
        return n(e);
      }
    : i
      ? function (e) {
          if (!e || ("object" != typeof e && "function" != typeof e))
            throw TypeError("getProto: not an object");
          return i(e);
        }
      : o
        ? function (e) {
            return o(e);
          }
        : null;
}
