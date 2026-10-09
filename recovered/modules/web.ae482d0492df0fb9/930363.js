/* Recovered shipped factory. Module 930363.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6735250..6735544
 * Raw property SHA-256: 86da839a3e661576e5aea3c91513050e11df8366546cf30f4997589558b1def9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { T: () => a });
  var i = n(158045);
  let r = (0, n(945810).mj)({
    kind: "user",
    name: "2026-09-referral-trial-cta",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
  });
  function a(e, t) {
    return null != t && e?.isReferralTrial === !0 && r.getConfig({ location: "referral_trial_cta" })
      ? (0, i.LE)(e, t)
      : null;
  }
}
