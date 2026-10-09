/* Recovered shipped factory. Module 567305.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5260624..5261163
 * Raw property SHA-256: 5efd13ae8303f42fb44266886d98c2f9e2f5a09bf61587d3c3c17f8207db1882
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { TG: () => o, _Y: () => d, hA: () => l });
  var i = n(702841),
    r = n(71393),
    a = n(652215);
  let s = [
    a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
    a.GuildFeatures.CREATOR_MONETIZABLE,
    a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
  ];
  function l(e) {
    return null != e && s.some((t) => e.features.has(t));
  }
  function o(e) {
    let t = r.A.getGuild(e);
    return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
  }
  function d(e) {
    return (0, i.bG)([r.A], () => {
      let t = r.A.getGuild(e);
      return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
    });
  }
}
