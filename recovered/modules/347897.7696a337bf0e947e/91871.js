/* Recovered shipped factory. Module 91871.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 489053..489276
 * Raw property SHA-256: 3d49472c81e23d22239afc98d12a17880293ff0e13157bd04fe2925bf1579240
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e, t) {
    var r = t.length,
      n = e.length;
    if (n > r) return !1;
    if (n === r) return e === t;
    r: for (var i = 0, o = 0; i < n; i++) {
      for (var a = e.charCodeAt(i); o < r;) if (t.charCodeAt(o++) === a) continue r;
      return !1;
    }
    return !0;
  };
}
