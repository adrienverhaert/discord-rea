/* Recovered shipped factory. Module 719336.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 251837..252271
 * Raw property SHA-256: 63e1b15d9410bf8d5717e86ffdca7a0435207ec533f0d19bbe1bffec5a52480d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(515304),
    o = n(614795),
    a = n(212785),
    i = parseFloat,
    u = Math.min,
    l = Math.random;
  e.exports = function (e, t, n) {
    if (
      (n && "boolean" != typeof n && o(e, t, n) && (t = n = void 0),
      void 0 === n &&
        ("boolean" == typeof t
          ? ((n = t), (t = void 0))
          : "boolean" == typeof e && ((n = e), (e = void 0))),
      void 0 === e && void 0 === t
        ? ((e = 0), (t = 1))
        : ((e = a(e)), void 0 === t ? ((t = e), (e = 0)) : (t = a(t))),
      e > t)
    ) {
      var s = e;
      ((e = t), (t = s));
    }
    if (n || e % 1 || t % 1) {
      var c = l();
      return u(e + c * (t - e + i("1e-" + ((c + "").length - 1))), t);
    }
    return r(e, t);
  };
}
