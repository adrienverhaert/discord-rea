/* Recovered shipped factory. Module 313627.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5419492..5420076
 * Raw property SHA-256: 9058d426d29f0e968aa5a8e4181ffeebe7d10b84c2e056470c8f4353d32e53ef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Uq: () => _, mN: () => d, tT: () => u });
  var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(256497),
    l = n(593673),
    o = n(652215);
  function d(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(o.xBc.MANAGE_GUILD, e), [e]);
  }
  function c(e, t) {
    let n;
    return (
      e.guildSpaceSettings?.enabled !== !1 &&
      (t || (null != (n = e.guildSpaceSettings) && n.enabled && n.publish_status === l.B.PUBLISHED))
    );
  }
  function u(e, t) {
    return null != e && !!(0, s.aA)(e.id, t) && c(e, null != e && a.A.can(o.xBc.MANAGE_GUILD, e));
  }
  function _(e, t) {
    let n = (0, s.fX)(e ?? void 0, t),
      a = (0, i.bG)([r.A], () => r.A.getGuild(e), [e]),
      l = d(a);
    return null != a && !!n && c(a, l);
  }
}
