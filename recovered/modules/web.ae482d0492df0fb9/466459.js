/* Recovered shipped factory. Module 466459.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3832540..3833293
 * Raw property SHA-256: 9ccf3c71f23712a92401c14f25a5c2083fd403f57790461d72e1c544d9fff3bb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { h: () => d, o: () => o });
  var i = n(588234),
    r = n.n(i),
    a = n(575593),
    s = n(17928),
    l = n(4227);
  function o(e, t) {
    let n = null != e.getPurchase(t.skuId),
      i = t.items ?? [],
      s = r()(i.map((t) => e.getPurchase(t.skuId)));
    switch (t?.type) {
      case a.R.BUNDLE:
        return {
          isPurchased: n || (i.length > 0 && s.length === i.length),
          isPartiallyOwnedBundle: s.length > 0 && s.length < i.length,
          isPartiallyOwnedVariantsGroup: !1,
        };
      case a.R.VARIANTS_GROUP:
        let l = t.variants?.every((t) => null != e.getPurchase(t.skuId)),
          o = t.variants?.some((t) => null != e.getPurchase(t.skuId)) && !l;
        return {
          isPurchased: l ?? !1,
          isPartiallyOwnedBundle: !1,
          isPartiallyOwnedVariantsGroup: o ?? !1,
        };
      default:
        return { isPurchased: n, isPartiallyOwnedBundle: !1, isPartiallyOwnedVariantsGroup: !1 };
    }
  }
  function d(e) {
    return (0, s.cf)([l.A], () => o(l.A, e));
  }
}
