/* Recovered shipped factory. Module 296045.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 21723..21955
 * Raw property SHA-256: 509fd23e9cb2f014669eeb9b8a362f51d82191e907f6f06759d62a447e8de5d0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { x: () => a });
  var l = n(17928),
    r = n(561573),
    o = n(379031);
  let i = [];
  function a(e) {
    let { surface: t, skuId: n } = e,
      a = (0, o.g)(t);
    return (0, l.yK)(
      [r.A],
      () => r.A.getOffersForSkuId(n)?.filter((e) => e.purchaseTypes.includes(a)) ?? i,
      [n, a],
    );
  }
}
