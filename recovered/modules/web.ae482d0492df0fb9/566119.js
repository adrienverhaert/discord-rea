/* Recovered shipped factory. Module 566119.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6864660..6864987
 * Raw property SHA-256: fc42ea795df41d3a9075973a301fd4eda5255fdf11be1187450e9f00306bf6e6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { RQ: () => l, b: () => o, gP: () => s });
  var i = n(174459),
    r = n(652215);
  function a(e, t) {
    i.default.track(r.HAw.PREMIUM_TENURE_REWARDS_ORBS_CTA_CLICKED, {
      cta_type: e,
      program_state: t,
    });
  }
  function s() {
    a("balance_popover_upsell");
  }
  function l() {
    a("balance_popover_next_drop");
  }
  function o() {
    a("balance_popover_helpdesk");
  }
}
