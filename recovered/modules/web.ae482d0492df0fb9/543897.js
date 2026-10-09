/* Recovered shipped factory. Module 543897.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8906654..8907189
 * Raw property SHA-256: 735074bfc7d98db22232ee3490f14c5993be5452641c8dc9350afd17870b6fc4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => l }), n(321073));
  var i = n(17928),
    r = n(73153);
  let a = [];
  class s extends i.Ay.Store {
    static displayName = "GeoRestrictedGuildStore";
    getGeoRestrictedGuilds() {
      return a;
    }
  }
  let l = new s(r.h, {
    CONNECTION_OPEN: function (e) {
      a = e.geoRestrictedGuilds;
    },
    GUILD_DELETE: function (e) {
      let { guild: t } = e;
      if (-1 === a.findIndex((e) => e.id === t.id)) return !1;
      a = a.filter((e) => e.id !== t.id);
    },
    GUILD_GEO_RESTRICTED: function (e) {
      let t = a.filter((t) => t.id !== e.guildId);
      (t.push({ id: e.guildId, name: e.name, icon: e.icon, unavailable: !0, geo_restricted: !0 }),
        (a = t));
    },
  });
}
