/* Recovered shipped factory. Module 47537.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5432608..5432971
 * Raw property SHA-256: c928ff9743dff8f5a3379b05e8a0e4d55637e10041a6f49d052b3b648c2219af
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    return null == e || null == t
      ? e === t
      : e.identityGuildId === t.identityGuildId &&
          e.identityEnabled === t.identityEnabled &&
          e.tag === t.tag &&
          e.badge === t.badge;
  }
  function r(e) {
    return null == e
      ? null
      : "identityGuildId" in e
        ? e
        : {
            identityGuildId: e.identity_guild_id,
            identityEnabled: e.identity_enabled,
            tag: e.tag,
            badge: e.badge,
          };
  }
  n.d(t, { D: () => i, j: () => r });
}
