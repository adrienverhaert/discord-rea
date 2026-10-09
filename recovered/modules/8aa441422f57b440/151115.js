/* Recovered shipped factory. Module 151115.
 * Source: recovered/web/assets/8aa441422f57b440.js
 * UTF-16 property offsets: 750..1133
 * Raw property SHA-256: 13cca20c692bce2bbe107576b0bcb9c3855386f2128b3d30b23cc9f1fc26b22f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { L: () => i, s: () => c });
  var r = e(278416),
    u = e(403581),
    l = e(604913),
    a = e(306396),
    o = e(518865);
  function i(t, n) {
    switch (n?.tenantMetadata?.collectibles?.type) {
      case l.hE.COLLECT_AND_CLAIM:
        return (0, a.av)(t, n);
      case l.hE.TARGETED_OFFER:
        return (0, o.PY)(t, n);
      default:
        return null;
    }
  }
  function c(t) {
    switch (t) {
      case l.cR.TAG:
        return r.TagIcon;
      case l.cR.NITRO:
        return u.t;
      default:
        return null;
    }
  }
}
