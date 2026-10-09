/* Recovered shipped factory. Module 793480.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3917250..3917876
 * Raw property SHA-256: eb8628303058353f335606fdf443cb0e891a1266a4e3d05fd358a90afa498fdb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L0: () => d, OC: () => c, TW: () => u, m0: () => o });
  var i = n(17928),
    r = n(945810),
    a = n(71393),
    s = n(652215);
  let l = (0, r.mj)({
    name: "2026-07-vibegrations-guild",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  function o(e) {
    let { guildId: t, location: n } = e;
    return l.useConfig({ guildId: t ?? s.dJq, location: n }).enabled;
  }
  function d(e) {
    let { guildId: t, location: n } = e;
    return null != t && l.getConfig({ guildId: t, location: n }).enabled;
  }
  function c(e, t) {
    for (let n of e) if (d({ guildId: n.id, location: t })) return !0;
    return !1;
  }
  function u(e) {
    return (0, i.bG)([a.A, r.Bt], () => c(Object.values(a.A.getGuilds()), e), [e]);
  }
}
