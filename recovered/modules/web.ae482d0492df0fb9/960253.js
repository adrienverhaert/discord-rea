/* Recovered shipped factory. Module 960253.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5278752..5279410
 * Raw property SHA-256: 923f19d96dd53ac9c957a1f6eb13401f7726e3fb96d147a01b2da01014476a4d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Oh: () => E, l8: () => _, vz: () => A });
  var i = n(17928),
    r = n(936555),
    a = n(465932),
    s = n(440293),
    l = n(164956),
    o = n(71393),
    d = n(217976),
    c = n(652215);
  function u(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A, l.A],
      i = t.getGuild(e);
    if (null == i) return !1;
    let a = (0, r.w)(i),
      s = i.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    return !!((a && s) || n.isViewingServerShop(e));
  }
  function _(e, t) {
    return !!u(e) || (0, d.I)(e, t);
  }
  function E(e) {
    let t = (0, d.A)(e),
      n = (0, i.bG)([o.A, l.A], () => u(e, [o.A, l.A]), [e]),
      { shouldHideGuildPurchaseEntryPoints: r } = (0, a.MH)(e);
    return !r && (n || t);
  }
  function A(e) {
    let t = E(e),
      n = (0, s.w)(e);
    return t && !n;
  }
}
