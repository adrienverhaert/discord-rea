/* Recovered shipped factory. Module 471505.
 * Source: recovered/web/assets/426036f97fc68fc4.js
 * UTF-16 property offsets: 95..417
 * Raw property SHA-256: 1ae7dcfffefd33139de3d617ba48a3be39c93ccbc175f8108ae7378376469c2e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (a, c, s) {
  s.d(c, { G: () => e });
  var i = s(582128),
    u = s(152472),
    d = s(486318);
  function e(a) {
    let { userId: c, sku: s, location: e, trackButtonClick: n, onError: p } = a,
      { handleToggle: t, ...h } = (0, u.c)({
        userId: c,
        skuId: s.id,
        nuxGraphic: (0, d.N)(s),
        location: e,
        onError: p,
      }),
      r = i.useCallback(async () => {
        (n?.(), await t());
      }, [n, t]);
    return { ...h, handleToggle: r };
  }
}
