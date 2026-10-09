/* Recovered shipped factory. Module 557679.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 364210..364512
 * Raw property SHA-256: ebb85daf89306cf1a91b3beee2082cf0f33873449c96980a3c3e4d93e70e2c25
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { M: () => s, b: () => a });
  var l = n(45938),
    i = n(202541);
  let r = new Set([
    i.gD.PREMIUM_MONTH_TIER_2,
    i.gD.PREMIUM_3_MONTH_TIER_2,
    i.gD.PREMIUM_YEAR_TIER_2,
  ]);
  function a(e) {
    return r.has(e);
  }
  function s(e) {
    let { isGift: t, giftRecipient: n, selectedPlanId: i } = e;
    return t && null == n && (0, l.Ik)(n) && null != i && a(i);
  }
}
