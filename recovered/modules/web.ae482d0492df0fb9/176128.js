/* Recovered shipped factory. Module 176128.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5066242..5067217
 * Raw property SHA-256: 5d3e02a2108d6219db449db6a6dba8c155fd35f7b214171d76bedabd9efb36b0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Jp: () => l, qo: () => s });
  var i,
    r = n(149790),
    a = n(652215),
    s =
      (((i = {}).PUBLIC = "PUBLIC"),
      (i.INVITE_ONLY = "INVITE_ONLY"),
      (i.APPLY_TO_JOIN = "APPLY_TO_JOIN"),
      i);
  function l(e) {
    var t;
    let n = new Set(e.features),
      i = "INVITE_ONLY";
    n.has(a.GuildFeatures.COMMUNITY) && n.has(a.GuildFeatures.DISCOVERABLE)
      ? (i = "PUBLIC")
      : n.has(a.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        n.has(a.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
        (i = "APPLY_TO_JOIN");
    let s =
        null != (t = e) &&
        ((0, r.fh)(t)
          ? t.premiumSubscriberCount > 0 || t.premiumTier > a.TVA.NONE
          : null != t.premiumSubscriptionCount && t.premiumSubscriptionCount > 0),
      l = 0;
    s && (l = ((0, r.fh)(e) ? e.premiumSubscriberCount : e.premiumSubscriptionCount) ?? 0);
    let o = (0, r.fh)(e) ? e.premiumTier : a.TVA.NONE;
    return {
      verified: n.has(a.GuildFeatures.VERIFIED),
      partnered: n.has(a.GuildFeatures.PARTNERED),
      community: n.has(a.GuildFeatures.COMMUNITY),
      staff: n.has(a.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
      visibility: i,
      premium: s,
      premiumSubscriberCount: l,
      premiumTier: o,
    };
  }
}
