/* Recovered shipped factory. Module 221950.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5194661..5195788
 * Raw property SHA-256: 18e3c5954032fc74684356b99501182b289f4a64aa7a9735597d2ae72cf0509f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Cw: () => E, Ld: () => A, UD: () => _, aZ: () => h, jo: () => f, uO: () => u });
  var i = n(73153),
    r = n(468689),
    a = n(976860),
    s = n(71393),
    l = n(134413),
    o = n(11541),
    d = n(652215),
    c = n(746080);
  async function u(e) {
    await i.h.dispatch({ type: "INITIALIZE_MEMBER_SAFETY_STORE", guildId: e });
  }
  function _(e) {
    i.h.dispatch({ type: "MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH", guildId: e });
  }
  function E(e, t) {
    let { continuationToken: n, ...r } = t;
    i.h.dispatch({ type: "MEMBER_SAFETY_PAGINATION_UPDATE", guildId: e, pagination: r });
  }
  async function A(e, t) {
    await i.h.dispatch({ type: "MEMBER_SAFETY_SEARCH_STATE_UPDATE", guildId: e, searchState: t });
  }
  function h(e) {
    let t = (0, l.Ml)(e),
      n = s.A.getGuild(e);
    return (
      !!t &&
      null != n &&
      (n.features.has(d.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) ||
      n.features.has(d.GuildFeatures.COMMUNITY) ||
      n.features.has(d.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
        ? (0, a.pX)(d.BVt.CHANNEL(e, c.VV.MEMBER_SAFETY))
        : r.default.open(n.id, d.BEX.MEMBERS),
      !0)
    );
  }
  async function f(e, t) {
    let n = await (0, o.vk)(e, t);
    return 0 === n.length
      ? []
      : (await i.h.dispatch({
          type: "FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS",
          guildId: e,
          memberSupplementals: n,
        }),
        n);
  }
}
