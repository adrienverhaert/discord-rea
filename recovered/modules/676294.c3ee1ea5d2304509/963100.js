/* Recovered shipped factory. Module 963100.
 * Source: recovered/web/assets/676294.c3ee1ea5d2304509.js
 * UTF-16 property offsets: 326..721
 * Raw property SHA-256: ff8eff148a92bfb04ebbf5a3873fa37bf67b2d7a968450894e4f990edc8d3863
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var i = n(20624),
    r = n(232520),
    o = n(186320),
    s = n(24011),
    a = n(26352),
    u = n(9556);
  e.exports = function (e, t, n, c) {
    var l = -1,
      d = r,
      f = !0,
      p = e.length,
      h = [],
      m = t.length;
    if (!p) return h;
    (n && (t = s(t, a(n))),
      c ? ((d = o), (f = !1)) : t.length >= 200 && ((d = u), (f = !1), (t = new i(t))));
    e: for (; ++l < p;) {
      var g = e[l],
        v = null == n ? g : n(g);
      if (((g = c || 0 !== g ? g : 0), f && v == v)) {
        for (var _ = m; _--;) if (t[_] === v) continue e;
        h.push(g);
      } else d(t, v, c) || h.push(g);
    }
    return h;
  };
}
