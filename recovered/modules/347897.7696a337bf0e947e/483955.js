/* Recovered shipped factory. Module 483955.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1010048..1010521
 * Raw property SHA-256: cfd3d02af37683936b2f3c08dde3a5335e1dfcab4983e8f1894f8c6d0983cccb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(439619),
    i = n("%RegExp%"),
    o = r(741623),
    a = n("%parseInt%"),
    s = r(906046),
    l = r(429013),
    u = s("String.prototype.slice"),
    c = l(/^0b[01]+$/i),
    f = l(/^0o[0-7]+$/i),
    p = l(/^[-+]0x[0-9a-f]+$/i),
    d = l(new i("[\x85\u200B\uFFFE]", "g")),
    h = r(886309);
  e.exports = function e(t) {
    if ("string" != typeof t) throw new o("Assertion failed: `argument` is not a String");
    if (c(t)) return +a(u(t, 2), 2);
    if (f(t)) return +a(u(t, 2), 8);
    if (d(t) || p(t)) return NaN;
    var r = h(t);
    return r !== t ? e(r) : +t;
  };
}
