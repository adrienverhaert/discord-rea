/* Recovered shipped factory. Module 3528.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 608345..608699
 * Raw property SHA-256: 511e6ec572c49131f30359e26cef5cb6da7c8f40df0fe6d87e4eaa28a1e03a6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = Array.prototype.slice,
    i = r(560332),
    o = Object.keys,
    a = o
      ? function (e) {
          return o(e);
        }
      : r(963980),
    s = Object.keys;
  ((a.shim = function () {
    return (
      Object.keys
        ? !(function () {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length;
          })(1, 2) &&
          (Object.keys = function (e) {
            return i(e) ? s(n.call(e)) : s(e);
          })
        : (Object.keys = a),
      Object.keys || a
    );
  }),
    (e.exports = a));
}
