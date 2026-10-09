/* Recovered shipped factory. Module 395504.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6200890..6201644
 * Raw property SHA-256: 9715329a86b361ac5017605332335b1789b9cce56e151efcdbcb923a32a09b54
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { WW: () => c, Xn: () => u, jN: () => d });
  var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(543465),
    l = n(287809),
    o = n(652215);
  function d(e) {
    return (0, i.bG)([s.Ay, r.A, l.default], () => {
      let t = s.Ay.isOptInEnabled(e),
        n = r.A.getGuild(e)?.features.has(o.GuildFeatures.COMMUNITY) ?? !1,
        i = l.default.getCurrentUser()?.isStaff() ?? !1;
      return t && (n || i);
    });
  }
  function c(e) {
    let t = r.A.getGuild(e),
      n = l.default.getCurrentUser();
    return (
      null != e &&
      null != t &&
      null != n &&
      (t.features.has(o.GuildFeatures.COMMUNITY) || n.isStaff()) &&
      s.Ay.isOptInEnabled(e)
    );
  }
  function u(e) {
    return (0, i.bG)([r.A, a.A], () => {
      let t = r.A.getGuild(e),
        n = a.A.can(o.xBc.MANAGE_GUILD, t),
        i = a.A.can(o.xBc.MANAGE_ROLES, t),
        s = t?.features.has(o.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) ?? !1;
      return null != t && n && i && !s;
    });
  }
}
