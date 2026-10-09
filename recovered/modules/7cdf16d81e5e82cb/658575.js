/* Recovered shipped factory. Module 658575.
 * Source: recovered/web/assets/7cdf16d81e5e82cb.js
 * UTF-16 property offsets: 5981..6267
 * Raw property SHA-256: beab999553e24abb3a3cb5db6c53b530203ccefe641cc1f11959c87f7474135d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { G: () => c });
  var i = n(17928),
    a = n(587895),
    l = n(212534),
    o = n(321191);
  function c(e) {
    return (0, i.bG)(
      [a.A, o.A, l.A],
      () =>
        a.A.getApplication(e)?.storefront_available ??
        o.A.getUserProfile(e)?.application?.storefront_available ??
        l.A.getApplication(e)?.storefront_available ??
        !1,
      [e],
    );
  }
}
