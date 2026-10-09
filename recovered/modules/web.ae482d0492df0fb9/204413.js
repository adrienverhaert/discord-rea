/* Recovered shipped factory. Module 204413.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6862217..6862723
 * Raw property SHA-256: a5bc4b40811095282a27694b95654065f9615f9204bda4cbca64a7d798de796a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => s });
  var i = n(145310),
    r = n(938973),
    a = n(202541);
  function s(e) {
    let {
        subscriptionTier: t = null,
        hasActivePromotion: n = !1,
        useShorterCTA: s = !1,
        isPersistentCTA: l = !1,
        buttonTextOverride: o,
        ...d
      } = e,
      { buttonText: c, marketingSubscriptionTierSkuId: u } = (0, i.s)({
        subscriptionTier: t,
        hasActivePromotion: n,
        useShorterCTA: s,
        isPersistentCTA: l,
      }),
      { subscribeButtonProps: _ } = (0, r.B)({
        ...d,
        subscriptionTier: u,
        buttonTextOverride: o ?? c,
      });
    return { subscribeButtonProps: _, subscriptionTier: u === a.pe.NONE ? null : u };
  }
}
