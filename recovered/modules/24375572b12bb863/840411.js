/* Recovered shipped factory. Module 840411.
 * Source: recovered/web/assets/24375572b12bb863.js
 * UTF-16 property offsets: 14772..15399
 * Raw property SHA-256: fa90d01d346e5ce0e3526e269aec8b7a4d019ba9440f2a09106f532f668af31b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { Ap: () => u, rI: () => r });
  var s = t(32731);
  (t(993046), t(872472), t(394300), t(721932));
  var n = t(652215),
    i = t(202541),
    a = t(660183);
  function r() {
    return new s.A({
      id: i.pe.TIER_2,
      productLine: n.EZt.PREMIUM,
      name: a.intl.string(a.t.lG6a5x),
      features: new Set(),
      genres: new Set(),
      manifests: [],
      availableRegions: [],
      locales: [],
      bundledSkuIds: [],
      selectedOptions: [],
      eligibleOffers: [],
      prices: {},
    });
  }
  function u(e, l, t, s) {
    let n = null,
      i = null;
    t < s
      ? ((n = l[s]?.skuId ?? null), (i = l[s + 1]?.skuId ?? null))
      : ((n = l[s - 1]?.skuId ?? null), (i = l[s]?.skuId ?? null));
    let a = [...l],
      [r] = a.splice(t, 1);
    return (
      a.splice(s, 0, r),
      { newWishlistData: e.set("items", a), previousSkuId: n, nextSkuId: i }
    );
  }
}
