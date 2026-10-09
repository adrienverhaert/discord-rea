/* Recovered shipped factory. Module 486418.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4130767..4131291
 * Raw property SHA-256: d5f9cffaa99851b4333bd167f6caf340b4a15c2a06e11f94fe0ee3f121bfa4ec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => d });
  var i = n(702841),
    r = n(554146),
    a = n(826673),
    s = n(440293),
    l = n(576705),
    o = n(652215);
  function d(e) {
    let t = (0, a.HX)(r.M.SERVER_SHOP_PHANTOM_PREVIEW),
      n = (0, i.bG)([l.A], () => null != e && l.A.can(o.xBc.ADMINISTRATOR, e)),
      d = e?.features.has(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) ?? !1,
      c = (0, s.w)(e?.id),
      u = [
        o.GuildFeatures.CREATOR_MONETIZABLE,
        o.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
        o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
      ].some((t) => e?.features.has(t));
    return null != e && n && !d && u && c && !t;
  }
}
