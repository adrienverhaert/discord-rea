/* Recovered shipped factory. Module 474343.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5453438..5453904
 * Raw property SHA-256: 05b68069869be424837de3ff3a1734646767f57abf73fbd7814fd41ac9f7c780
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => u }), n(938796));
  var i = n(821418),
    r = n(665260),
    a = n(439372),
    s = n(224536),
    l = n(610101),
    o = n(652215);
  function d(e) {
    let { guild: t } = e.invite,
      n = e.invite.flags ?? 0;
    null != t && t?.features?.includes(o.GuildFeatures.HUB)
      ? s.A.onOpenHubInvite(e.invite)
      : !e.invite.new_member ||
        (!((0, r.Lt)(n, i.Q.IS_GUEST_INVITE) || (0, r.Lt)(n, i.Q.IS_APPLICATION_BYPASS)) &&
          null != t &&
          (0, l.h)(t) &&
          (0, l.W)(t.id));
  }
  class c extends a.A {
    actions = { INVITE_ACCEPT_SUCCESS: d };
  }
  let u = new c();
}
