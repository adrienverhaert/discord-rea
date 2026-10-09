/* Recovered shipped factory. Module 48106.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 165228..165901
 * Raw property SHA-256: fb094a341c85d4c53fecb1343ab3ea7305ff003958ce215c0fffe5504b97647b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(323845),
    o = Object.prototype.hasOwnProperty;
  e.exports = function (e, t, n, a, i, u) {
    var l = 1 & n,
      s = r(e),
      c = s.length;
    if (c != r(t).length && !l) return !1;
    for (var f = c; f--;) {
      var d = s[f];
      if (!(l ? d in t : o.call(t, d))) return !1;
    }
    var h = u.get(e),
      p = u.get(t);
    if (h && p) return h == t && p == e;
    var y = !0;
    (u.set(e, t), u.set(t, e));
    for (var m = l; ++f < c;) {
      var v = e[(d = s[f])],
        g = t[d];
      if (a) var b = l ? a(g, v, d, t, e, u) : a(v, g, d, e, t, u);
      if (!(void 0 === b ? v === g || i(v, g, n, a, u) : b)) {
        y = !1;
        break;
      }
      m || (m = "constructor" == d);
    }
    if (y && !m) {
      var w = e.constructor,
        _ = t.constructor;
      w != _ &&
        "constructor" in e &&
        "constructor" in t &&
        !("function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _) &&
        (y = !1);
    }
    return (u.delete(e), u.delete(t), y);
  };
}
