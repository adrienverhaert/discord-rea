/* Recovered shipped factory. Module 134627.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 156146..156514
 * Raw property SHA-256: 9204c3b41a1cf47782109f7b21d210df14ad139b35f53cbcec08ad25e1460fc2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(998178),
    o = n(161858),
    a = n(486412),
    i = n(980320),
    u = n(849044);
  e.exports = function (e, t, n, l) {
    if (!i(e)) return e;
    t = o(t, e);
    for (var s = -1, c = t.length, f = c - 1, d = e; null != d && ++s < c;) {
      var h = u(t[s]),
        p = n;
      if ("__proto__" === h || "constructor" === h || "prototype" === h) break;
      if (s != f) {
        var y = d[h];
        void 0 === (p = l ? l(y, h, d) : void 0) && (p = i(y) ? y : a(t[s + 1]) ? [] : {});
      }
      (r(d, h, p), (d = d[h]));
    }
    return e;
  };
}
