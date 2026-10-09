/* Recovered shipped factory. Module 217613.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 156941..157322
 * Raw property SHA-256: 3f04a227ee834c1626e7e436aead8cc8193282add7ffd953f11a069379f2ee7c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(574151),
    o = Math.floor,
    a = Math.min;
  e.exports = function (e, t, n, i) {
    var u = 0,
      l = null == e ? 0 : e.length;
    if (0 === l) return 0;
    for (var s = (t = n(t)) != t, c = null === t, f = r(t), d = void 0 === t; u < l;) {
      var h = o((u + l) / 2),
        p = n(e[h]),
        y = void 0 !== p,
        m = null === p,
        v = p == p,
        g = r(p);
      if (s) var b = i || v;
      else
        b = d
          ? v && (i || y)
          : c
            ? v && y && (i || !m)
            : f
              ? v && y && !m && (i || !g)
              : !m && !g && (i ? p <= t : p < t);
      b ? (u = h + 1) : (l = h);
    }
    return a(l, 0xfffffffe);
  };
}
