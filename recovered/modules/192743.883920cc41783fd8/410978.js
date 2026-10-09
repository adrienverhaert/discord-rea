/* Recovered shipped factory. Module 410978.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 157580..158014
 * Raw property SHA-256: 3fe5247740a3c684eb0f7fec7dc19d94b36b293f1643925e58fcb0ccd29860ae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(20624),
    o = n(232520),
    a = n(186320),
    i = n(9556),
    u = n(899996),
    l = n(18352);
  e.exports = function (e, t, n) {
    var s = -1,
      c = o,
      f = e.length,
      d = !0,
      h = [],
      p = h;
    if (n) ((d = !1), (c = a));
    else if (f >= 200) {
      var y = t ? null : u(e);
      if (y) return l(y);
      ((d = !1), (c = i), (p = new r()));
    } else p = t ? [] : h;
    e: for (; ++s < f;) {
      var m = e[s],
        v = t ? t(m) : m;
      if (((m = n || 0 !== m ? m : 0), d && v == v)) {
        for (var g = p.length; g--;) if (p[g] === v) continue e;
        (t && p.push(v), h.push(m));
      } else c(p, v, n) || (p !== h && p.push(v), h.push(m));
    }
    return h;
  };
}
