/* Recovered shipped factory. Module 860511.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 4156..4453
 * Raw property SHA-256: 84dd0c3811430134151255a69c05aed9e9e3208ec1af760a9faf6a3cdbff4229
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = function (r) {
    return r && r.Math === Math && r;
  };
  r.exports =
    n("object" == typeof globalThis && globalThis) ||
    n("object" == typeof window && window) ||
    n("object" == typeof self && self) ||
    n("object" == typeof e.g && e.g) ||
    n("object" == typeof this && this) ||
    (function () {
      return this;
    })() ||
    Function("return this")();
}
