/* Recovered shipped factory. Module 41200.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4131292..4131769
 * Raw property SHA-256: 12804e4e91acf00007e9f4381eed6f1f9ee1688a24fd2139b4f178a4094206b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => d, r: () => o });
  var i = n(465932),
    r = n(440293),
    a = n(960253),
    s = n(486418),
    l = n(652215);
  function o(e) {
    let t = (0, r.w)(e?.id),
      n = (0, a.Oh)(e?.id),
      o = (0, s.P)(e),
      { shouldHideGuildPurchaseEntryPoints: d } = (0, i.MH)(e?.id);
    return (
      null != e &&
      !d &&
      (e.features.has(l.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || o)
    );
  }
  function d(e, t) {
    let n = (0, r.$)(e?.id),
      i = (0, a.l8)(e?.id, t);
    return (
      null != e && (e.features.has(l.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && i))
    );
  }
}
