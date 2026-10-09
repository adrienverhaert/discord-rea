/* Recovered shipped factory. Module 674658.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3829229..3829818
 * Raw property SHA-256: 637cb605cb61cc521f69af4d763887ccf4cd9b14a1b1692bb1514c950493a4bc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => c });
  var i = n(582128),
    r = n(575593),
    a = n(702841),
    s = n(67480),
    l = n(815996),
    o = n(590180),
    d = n(652215);
  function c(e, t) {
    let n = (0, a.bG)([s.A], () => (null != e ? s.A.get(e) : null)),
      c = null != n && n.productLine !== d.EZt.COLLECTIBLES,
      [u, _] = (0, a.yK)([o.A], () => [o.A.getProduct(e), o.A.getProductFetch(e)]),
      E = (0, a.bG)([o.A], () => o.A.isProductFetchBackedOff(e)),
      A = !0 === t && u?.type === r.R.BUNDLE && 0 === u.items.length;
    return (
      (0, i.useEffect)(() => {
        null == e ||
          (null != u && !A) ||
          c ||
          _?.state === "fetching" ||
          E ||
          (0, l.Jp)(e, { includeBundles: t });
      }, [e, u, c, _, t, A, E]),
      { product: u, isFetching: _?.state === "fetching" }
    );
  }
}
