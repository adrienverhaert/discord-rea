/* Recovered shipped factory. Module 676608.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6797166..6797645
 * Raw property SHA-256: e6e75eb4e67c9d1e8628f939c88ec5632998cd8a1f08f03f49a942f60e485595
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => s, aF: () => o, jV: () => l });
  var i = n(17928),
    r = n(71393),
    a = n(652215);
  function s(e, t) {
    return (0, i.bG)([r.A], () => {
      let t = r.A.getGuild(e);
      return null != t && t.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
    });
  }
  function l(e, t) {
    return (0, i.bG)([r.A], () => {
      let t = r.A.getGuild(e);
      return null != t && t.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
    });
  }
  function o(e, t) {
    let n = r.A.getGuild(e);
    return null != n && n.features.has(a.GuildFeatures.ENHANCED_ROLE_COLORS);
  }
}
