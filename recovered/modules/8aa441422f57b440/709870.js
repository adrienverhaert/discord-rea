/* Recovered shipped factory. Module 709870.
 * Source: recovered/web/assets/8aa441422f57b440.js
 * UTF-16 property offsets: 2069..2503
 * Raw property SHA-256: dc55347b810a0c51e6ec03865988ceab22adf425c518bf5638bafe793ebc6c97
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { $: () => l });
  var r = e(477900);
  e(582128);
  var u = e(192308);
  function l(t) {
    let { orbsAmount: n, openGiftingBadgePostPurchaseModal: l } = t;
    (0, u.openModalLazy)(async () => {
      let { NitroOrbsBonusDefaultModal: t, NitroOrbsBonusGiftingModal: u } = await Promise.all([
        e.e("393137"),
        e.e("720094"),
      ]).then(e.bind(e, 743597));
      return null != l
        ? (t) => (0, r.jsx)(u, { orbsAmount: n, openGiftingBadgePostPurchaseModal: l, ...t })
        : (e) => (0, r.jsx)(t, { orbsAmount: n, ...e });
    });
  }
}
