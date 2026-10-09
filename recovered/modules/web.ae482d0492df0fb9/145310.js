/* Recovered shipped factory. Module 145310.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6861029..6862216
 * Raw property SHA-256: f04d3e28f1b988bd3cf2771034baee084ebe35e77b20a7413cc326e723e15e02
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { s: () => c });
  var i = n(158045),
    r = n(930363),
    a = n(724651),
    s = n(732280),
    l = n(511484),
    o = n(202541),
    d = n(660183);
  function c(e) {
    var t;
    let {
        subscriptionTier: n,
        hasActivePromotion: c = !1,
        useShorterCTA: u = !1,
        isPersistentCTA: _ = !1,
      } = e,
      E = (0, s.V)(),
      A = E?.subscriptionTrial,
      h = (0, a.O)(),
      f = (0, l.U9)(h, o.pe.TIER_2) ? o.pe.TIER_2 : void 0,
      I = (0, i.tS)({ intervalType: A?.interval, intervalCount: A?.intervalCount }),
      p = n ?? E?.subscriptionTrial?.skuId ?? f,
      T = null != A && p === A.skuId,
      m = null != h && o.U4.includes(h.discountId);
    return {
      buttonText: c
        ? d.intl.string(d.t.J61px0)
        : null != h
          ? ((t = h.discount.amount),
            u || _
              ? d.intl.string(d.t.fkPGat)
              : p === o.pe.TIER_2
                ? d.intl.formatToPlainString(m ? d.t.ZhPpOu : d.t.bkQ4bH, { percent: t })
                : void 0)
          : (function (e) {
              let {
                  showTrialCTA: t,
                  subscriptionTier: n,
                  trialDurationCopy: a,
                  isPersistentCTA: s,
                  userTrialOffer: l,
                } = e,
                c = l?.subscriptionTrial;
              return t && l?.isReferralTrial === !0
                ? ((0, r.T)(l, n) ?? d.intl.string(d.t.bXTClc))
                : t && (n === o.pe.TIER_2 || s)
                  ? (0, i.FY)({ intervalType: c?.interval, intervalCount: c?.intervalCount })
                  : t
                    ? d.intl.formatToPlainString(d.t.nTmm2v, { freeTrialText: a })
                    : void 0;
            })({
              showTrialCTA: T,
              subscriptionTier: p,
              trialDurationCopy: I,
              isPersistentCTA: _,
              userTrialOffer: E,
            }),
      marketingSubscriptionTierSkuId: p,
    };
  }
}
