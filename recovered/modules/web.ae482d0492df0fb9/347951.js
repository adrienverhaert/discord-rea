/* Recovered shipped factory. Module 347951.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5379247..5379700
 * Raw property SHA-256: f964e3322cc7ed70e78259cb2b81b338629cf3cdeeb03bc13072b2a95a91c098
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Fi: () => l, Ig: () => d, Wr: () => o });
  var i = n(17928),
    r = n(610136),
    a = n(576705),
    s = n(652215);
  function l(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(s.xBc.MANAGE_GUILD, e), [e]);
  }
  function o(e) {
    let t = (0, i.bG)([r.A], () => (null != e ? r.A.getGuildIncident(e.id) : null));
    return (
      e?.features.has(s.GuildFeatures.INVITES_DISABLED) ||
      (t?.invitesDisabledUntil != null && new Date(t.invitesDisabledUntil) > new Date())
    );
  }
  function d(e) {
    let t = l(e),
      n = o(e);
    return t && n;
  }
}
