/* Recovered shipped factory. Module 381265.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 469435..469981
 * Raw property SHA-256: 5c320db1eb941a1fa6894ba8a8b59cd8655dd0fef65ac28fdab5ba50e2714668
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(3528),
    i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
    o = Object.prototype.toString,
    a = Array.prototype.concat,
    s = r(207001),
    l = r(473560)(),
    u = function (e, t, r, n) {
      if (t in e) {
        if (!0 === n) {
          if (e[t] === r) return;
        } else if ("function" != typeof n || "[object Function]" !== o.call(n) || !n()) return;
      }
      l ? s(e, t, r, !0) : s(e, t, r);
    },
    c = function (e, t) {
      var r = arguments.length > 2 ? arguments[2] : {},
        o = n(t);
      i && (o = a.call(o, Object.getOwnPropertySymbols(t)));
      for (var s = 0; s < o.length; s += 1) u(e, o[s], t[o[s]], r[o[s]]);
    };
  ((c.supportsDescriptors = !!l), (e.exports = c));
}
