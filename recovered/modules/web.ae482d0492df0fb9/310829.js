/* Recovered shipped factory. Module 310829.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8417985..8418664
 * Raw property SHA-256: 0023a2ecd6eec14f572f151756c5d6aed943a0ec846443c530a641a0cb3fa1f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => d, u: () => c });
  var i = n(554146),
    r = n(826673),
    a = n(652215),
    s = n(758836),
    l = n(49999),
    o = n(202541);
  function d(e) {
    return e === s.Dp.FRACTIONAL_PREMIUM ? o.tv : a.FYj;
  }
  function c() {
    (0, r.k8)(i.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL) ||
      ((0, r.Dr)(i.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL, {
        dismissAction: l.i.INDIRECT_ACTION,
        groupName: l.m.VIRTUAL_CURRENCY_ONBOARDING,
      }),
      (0, r.Dr)(i.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK, {
        dismissAction: l.i.INDIRECT_ACTION,
        groupName: l.m.VIRTUAL_CURRENCY_ONBOARDING,
      }),
      (0, r.Dr)(i.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK, {
        dismissAction: l.i.INDIRECT_ACTION,
        groupName: l.m.VIRTUAL_CURRENCY_ONBOARDING,
      }));
  }
}
