/* Recovered shipped factory. Module 558620.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 246549..247395
 * Raw property SHA-256: e0f1011b814556f96eb095c5ebdbba591f2760479ffb7475922e44a47290b59a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => o, D: () => u });
  var l = n(17928),
    i = n(160946),
    r = n(97352),
    a = n(71804),
    s = n(642639);
  function o() {
    let e = (0, s.t4)((e) => e.selectedPlanId);
    return (0, l.bG)([r.A], () => (null != e ? r.A.get(e) : null), [e]);
  }
  function u() {
    let {
        selectedPlanId: e,
        skuIds: t,
        selectedSkuId: n,
        unifiedCheckoutFlow: o,
      } = (0, s.t4)((e) => ({
        selectedPlanId: e.selectedPlanId,
        skuIds: e.skuIds,
        selectedSkuId: e.selectedSkuId,
        unifiedCheckoutFlow: e.unifiedCheckoutFlow,
      })),
      u = (0, i.Y)(t),
      c = (0, l.bG)([r.A], () => (null != e ? r.A.get(e) : null), [e]);
    if (null == c || null == e)
      throw new a.v({
        message:
          "useCheckoutRequiredSelectedPlan: expected plan to be selected, but selected plan from Flux Store is null",
        extraSentryInformation: {
          unifiedCheckoutFlow: o,
          selectedPlanId: e,
          selectedPlanFromFluxStore: c,
          selectedSkuId: n,
          hasFetchedSubscriptionPlans: u,
          checkoutSkuIds: t,
        },
      });
    return { selectedPlanId: e, selectedPlanFromFluxStore: c };
  }
}
