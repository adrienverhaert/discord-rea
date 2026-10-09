/* Recovered shipped factory. Module 448564.
 * Source: recovered/web/assets/a161e58d43193ccf.js
 * UTF-16 property offsets: 95..818
 * Raw property SHA-256: 40295c6cc9e466b6e133cc4475868b862c56185a25338a956efeb0e32387ccce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { A: () => r });
  var n = i(17928),
    a = i(73153);
  let o = { canSeeEnableMonetizationForGuilds: new Set() };
  class s extends n.Ay.PersistedStore {
    static displayName = "CreatorMonetizationPersistedStore";
    static persistKey = "CreatorMonetizationPersistedStore";
    static migrations = [];
    initialize(e) {
      null != e &&
        (o.canSeeEnableMonetizationForGuilds = new Set(e.canSeeEnableMonetizationForGuilds));
    }
    getState() {
      return o;
    }
    hasSeenCreatorOnboardingForGuild(e) {
      return o.canSeeEnableMonetizationForGuilds.has(e);
    }
  }
  let r = new s(a.h, {
    CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD: function (e) {
      o.canSeeEnableMonetizationForGuilds.has(e.guildId) ||
        (o.canSeeEnableMonetizationForGuilds = new Set(o.canSeeEnableMonetizationForGuilds).add(
          e.guildId,
        ));
    },
  });
}
