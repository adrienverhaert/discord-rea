/* Recovered shipped factory. Module 555325.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5271976..5272700
 * Raw property SHA-256: 71ceb700dfb5b2b6cb965ab8354fd92f5add4774a7ab08090bc134da6bbf0f6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { EI: () => l, V9: () => s, X9: () => o });
  var i = n(17928);
  (n(469993), n(465932), n(260509));
  var r = n(576705);
  n(287809);
  var a = n(652215);
  function s(e) {
    return (
      0 !=
      (e.guild.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
        ? 0
        : +!!(function (e) {
            let {
              guild: t,
              isOwner: n,
              canManageGuildRoleSubscriptions: i,
              isUserInCreatorMonetizationEligibleCountry: r,
              shouldRestrictUpdatingRoleSubscriptionSettings: s,
            } = e;
            return (
              !!i &&
              (!s || !!n) &&
              (!!(
                t.features.has(a.GuildFeatures.CREATOR_MONETIZABLE) ||
                t.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
              ) ||
                (!!t.features.has(a.GuildFeatures.COMMUNITY) && n && r))
            );
          })(e))
    );
  }
  function l(e) {
    return (0, i.bG)([r.A], () => o(e), [e]);
  }
  function o(e) {
    return null != e && r.A.can(a.xBc.ADMINISTRATOR, e);
  }
}
