/* Recovered shipped factory. Module 89366.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6702896..6703392
 * Raw property SHA-256: abdef8b519ea3475b960b2bc61a9e47cb2a85ce3c578600ed1377a6c4d40f8f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { QQ: () => o, Us: () => d, qD: () => c });
  var i = n(17928),
    r = n(287809),
    a = n(166403),
    s = n(354670),
    l = n(202541);
  function o() {
    let e = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription());
    return !!e?.hasActiveTrial;
  }
  function d() {
    let e = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
      t = (0, i.bG)([r.default], () => r.default.getCurrentUser());
    return e?.hasActiveTrial ? t?.premiumType : null;
  }
  function c() {
    return l.MB.map((e) => s.A.getUserTrialOffer(e))
      .filter((e) => null != e && !e.hasExpired)
      .shift();
  }
}
