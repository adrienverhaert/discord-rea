/* Recovered shipped factory. Module 346542.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5652611..5653236
 * Raw property SHA-256: 4c0485d7d8ec89dd8604dd6cb316288b998b4787dad4a51cfbcc4f9c58916518
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { G4: () => o, On: () => c, Xd: () => a.Xd, d4: () => l, ly: () => s, oK: () => d }),
    n(107123));
  var i = n(698441),
    r = n(95701),
    a = n(172799);
  function s(e) {
    let t = e.guild_scheduled_event;
    return null != t && (0, i.d6)(t);
  }
  function l(e) {
    return e.target_type === a.yV.ROLE_SUBSCRIPTIONS_PURCHASE;
  }
  function o(e) {
    return e.target_type === a.yV.STREAM && null != e.target_user;
  }
  function d(e) {
    return e.target_type === a.yV.EMBEDDED_APPLICATION;
  }
  function c(e) {
    return "number" == typeof e.type
      ? e.type
      : e.type === a.Xd.GROUP_DM || (null != e.channel && (0, r.MK)(e.channel.type))
        ? a.Xd.GROUP_DM
        : e.type === a.Xd.FRIEND || (null == e.guild && null != e.inviter)
          ? a.Xd.FRIEND
          : a.Xd.GUILD;
  }
}
