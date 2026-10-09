/* Recovered shipped factory. Module 319135.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 487458..488051
 * Raw property SHA-256: 6ff5805203741dd61f93e050b4b6550746d5e46c033589e31d0887babf87886b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(696219),
    i = Object.prototype.toString,
    o = Object.prototype.hasOwnProperty,
    a = function (e, t, r) {
      for (var n = 0, i = e.length; n < i; n++)
        o.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
    },
    s = function (e, t, r) {
      for (var n = 0, i = e.length; n < i; n++)
        null == r ? t(e.charAt(n), n, e) : t.call(r, e.charAt(n), n, e);
    },
    l = function (e, t, r) {
      for (var n in e) o.call(e, n) && (null == r ? t(e[n], n, e) : t.call(r, e[n], n, e));
    };
  e.exports = function (e, t, r) {
    var o;
    if (!n(t)) throw TypeError("iterator must be a function");
    (arguments.length >= 3 && (o = r), "[object Array]" === i.call(e))
      ? a(e, t, o)
      : "string" == typeof e
        ? s(e, t, o)
        : l(e, t, o);
  };
}
