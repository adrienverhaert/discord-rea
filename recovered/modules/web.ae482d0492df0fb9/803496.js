/* Recovered shipped factory. Module 803496.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6537714..6538799
 * Raw property SHA-256: 1fceb0dc44611b3b284c91df439d68e1cb5b5705681e03332d5ec866589c7686
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(582128),
    r = n(655857),
    a = n(83617),
    s = n(202541),
    l = n(818348);
  function o(e) {
    let { activeSubscription: t, skuIDs: n, paymentSourceId: o, isGift: d } = e,
      c = n.filter((e) => e !== s.pe.NONE),
      {
        currenciesFromSubscriptionPlan: u,
        subscriptionPlanIdForCurrency: _,
        hasFetchedRelatedSubscriptionPlans: E,
      } = (0, r.ow)({ skuIDs: c, paymentSourceId: o, isGift: d }),
      { priceOptions: A } = (function (e) {
        let {
            initialCurrency: t,
            subscriptionPlanId: n,
            paymentSourceId: r,
            isGift: s,
            skuIDs: l,
            hasFetchedRelatedSubscriptionPlans: o,
          } = e,
          [d, c] = i.useReducer(
            (e, t) => ({ ...e, ...t }),
            null != r
              ? { paymentSourceId: r, currency: t, loaded: !1 }
              : { currency: t, loaded: !1 },
          ),
          u = JSON.stringify(l),
          _ = i.useRef(l);
        return (
          i.useEffect(() => {
            _.current = l;
          }),
          i.useEffect(() => {
            !(async function () {
              let { current: e } = _;
              try {
                e.length > 0 && (await (0, a.c_)(r, e));
              } catch (e) {
                if (e.code !== a.oy) throw e;
              }
              c({ paymentSourceId: r, currency: void 0, loaded: !0 });
            })();
          }, [r, u, n, s, o]),
          { priceOptions: d }
        );
      })({
        initialCurrency: u.find((e) => e === t?.currency) ?? u[0] ?? l.Yr.USD,
        subscriptionPlanId: _,
        hasFetchedRelatedSubscriptionPlans: E,
        paymentSourceId: o,
        isGift: d,
        skuIDs: c,
      });
    return { priceOptions: A };
  }
}
