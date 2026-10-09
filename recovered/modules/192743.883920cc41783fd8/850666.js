/* Recovered shipped factory. Module 850666.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 163851..164386
 * Raw property SHA-256: 2619e9304a8dec769b50041763bcd8bd60e215e63abbd94c10411ab8ba85de12
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(20624),
    o = n(419965),
    a = n(9556);
  e.exports = function (e, t, n, i, u, l) {
    var s = 1 & n,
      c = e.length,
      f = t.length;
    if (c != f && !(s && f > c)) return !1;
    var d = l.get(e),
      h = l.get(t);
    if (d && h) return d == t && h == e;
    var p = -1,
      y = !0,
      m = 2 & n ? new r() : void 0;
    for (l.set(e, t), l.set(t, e); ++p < c;) {
      var v = e[p],
        g = t[p];
      if (i) var b = s ? i(g, v, p, t, e, l) : i(v, g, p, e, t, l);
      if (void 0 !== b) {
        if (b) continue;
        y = !1;
        break;
      }
      if (m) {
        if (
          !o(t, function (e, t) {
            if (!a(m, t) && (v === e || u(v, e, n, i, l))) return m.push(t);
          })
        ) {
          y = !1;
          break;
        }
      } else if (!(v === g || u(v, g, n, i, l))) {
        y = !1;
        break;
      }
    }
    return (l.delete(e), l.delete(t), y);
  };
}
