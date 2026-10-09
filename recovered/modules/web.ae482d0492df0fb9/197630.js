/* Recovered shipped factory. Module 197630.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6734284..6735035
 * Raw property SHA-256: 447682b2c588a87635b4e3c282066198a46fab1cedd45f125fe3637009fa628d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { xR: () => l, xb: () => a });
  var i,
    r = n(945810),
    a = (((i = {}).ORBS = "orbs"), (i.DISCOUNT = "discount"), i);
  let s = (0, r.mj)({
    name: "2026-07-premium-referral-incentives",
    kind: "user",
    defaultConfig: { referralRewardType: null, useAltReferralCardArt: !1 },
    variations: {
      0: { referralRewardType: null, useAltReferralCardArt: !1 },
      1: { referralRewardType: "orbs", useAltReferralCardArt: !1 },
      2: { referralRewardType: "discount", useAltReferralCardArt: !1 },
      3: { referralRewardType: "orbs", useAltReferralCardArt: !0 },
      4: { referralRewardType: "discount", useAltReferralCardArt: !0 },
    },
  });
  function l(e) {
    let t = s.useConfig({ location: e });
    return {
      referralRewardType: t.referralRewardType,
      useAltReferralCardArt: t.useAltReferralCardArt,
      isInReferralIncentivesTreatment: null != t.referralRewardType,
    };
  }
}
