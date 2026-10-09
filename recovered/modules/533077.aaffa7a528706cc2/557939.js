/* Recovered shipped factory. Module 557939.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 2789..3206
 * Raw property SHA-256: 9ec4cf0b20670f7446c43300fba003a7e71b8fea9ecfe996e1781bd979f2fc3b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(860511),
    o = e(873078).f,
    i = e(706938),
    u = e(693655),
    a = e(88388),
    c = e(517771),
    f = e(521351);
  r.exports = function (r, t) {
    var e,
      s,
      p,
      l,
      v,
      y = r.target,
      b = r.global,
      g = r.stat;
    if ((e = b ? n : g ? n[y] || a(y, {}) : n[y] && n[y].prototype))
      for (s in t) {
        if (
          ((l = t[s]),
          (p = r.dontCallGetSet ? (v = o(e, s)) && v.value : e[s]),
          !f(b ? s : y + (g ? "." : "#") + s, r.forced) && void 0 !== p)
        ) {
          if (typeof l == typeof p) continue;
          c(l, p);
        }
        ((r.sham || (p && p.sham)) && i(l, "sham", !0), u(e, s, l, r));
      }
  };
}
