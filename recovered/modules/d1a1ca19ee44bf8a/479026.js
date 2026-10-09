/* Recovered shipped factory. Module 479026.
 * Source: recovered/web/assets/d1a1ca19ee44bf8a.js
 * UTF-16 property offsets: 686..1050
 * Raw property SHA-256: 3f4ecbd0060ae92202c584a3aa23db3e49d6c00f3267dbc405a9baaeb94b0ff8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, i, o) {
  o.d(i, { e: () => r });
  var n = o(582128),
    e = o(793574),
    u = o(722258);
  function r(t) {
    let {
      sku: i,
      analyticsLocations: o,
      analyticsSource: r = e.A.USER_PROFILE_WISHLIST,
      giftRecipient: c,
      giftingOrigin: s,
    } = t;
    return n.useCallback(() => {
      (0, u.B)({
        skuId: i.id,
        analyticsLocations: o ?? [],
        analyticsSource: r,
        returnRef: void 0,
        tab: void 0,
        giftRecipient: c,
        giftingOrigin: s,
      });
    }, [o, r, c, s, i.id]);
  }
}
