/* Recovered shipped factory. Module 879416.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6844020..6844504
 * Raw property SHA-256: 1906ce79690c44a5b1cfed961a79e3e6875127830943262d72d93f6375c28936
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { x: () => l });
  var i = n(17928),
    r = n(166403),
    a = n(197630),
    s = n(103411);
  function l(e) {
    let { location: t, preventFetch: n = !0 } = e,
      l = (0, s.m)(n),
      { referralRewardType: o, useAltReferralCardArt: d } = (0, a.xR)(t),
      c = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
      u = null != c && !c.isPurchasedExternally,
      _ = null != c && c.hasPremiumNitroMonthly,
      E = !0 === l && o === a.xb.ORBS,
      A = !0 === l && o === a.xb.DISCOUNT && u && _;
    return { isEligibleForIncentive: E || A, referralRewardType: o, useAltReferralCardArt: d };
  }
}
