/* Recovered shipped factory. Module 707167.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5234476..5234768
 * Raw property SHA-256: 64af6d99c7c2aaade705275de6076e6997fb8e81a635f31aa0442786c062d8d5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(5180),
    r = n(652215);
  function a(e) {
    return !(
      __OVERLAY__ ||
      null == e ||
      e.id === r.ME ||
      (0, i.ai)(e.id) ||
      !e.features.has(r.GuildFeatures.COMMUNITY) ||
      !e.features.has(r.GuildFeatures.GUILD_SERVER_GUIDE) ||
      !e.features.has(r.GuildFeatures.GUILD_ONBOARDING)
    );
  }
}
