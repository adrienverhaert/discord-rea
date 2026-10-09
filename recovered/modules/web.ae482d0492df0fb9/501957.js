/* Recovered shipped factory. Module 501957.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6930437..6930860
 * Raw property SHA-256: 920556e321996a24aff54841d48df1593dd6fc25eac0f43e7b2a276ec3ff9b94
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { U: () => o, j: () => l });
  var i = n(925847),
    r = n(174459),
    a = n(158045),
    s = n(652215);
  function l(e) {
    return {
      subscription_id: e.id,
      subscription_type: e.type,
      subscription_plan_id: (0, a.EL)(e)?.id,
      subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
      subscription_status: e.status,
    };
  }
  function o(e, t, n) {
    let a = n ?? (0, i.A)();
    r.default.track(s.HAw.PREMIUM_RESUBSCRIBE_COMPLETED, {
      location_stack: t,
      load_id: a,
      ...l(e),
    });
  }
}
