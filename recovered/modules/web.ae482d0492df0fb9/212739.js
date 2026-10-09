/* Recovered shipped factory. Module 212739.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7236943..7237339
 * Raw property SHA-256: 0e02b1870830f16195346fb583f6c53d75974d4e42d1e67fce90bdf252ef0f04
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => d, O: () => c });
  var i = n(17928),
    r = n(441574),
    a = n(349871),
    s = n(287809),
    l = n(158045),
    o = n(202541);
  function d(e) {
    if (!l.Ay.canUseMonthlyOrbs(e) || (0, l.YE)(e, o.PremiumTypes.TIER_2)) return !1;
    let t = (0, a.kQ)(e?.perks, r.bb.MONTHLY_ORBS);
    return null != t && t.includes(r.g$.SOURCE_THIRDPARTY_CROISSANT);
  }
  function c() {
    return d((0, i.bG)([s.default], () => s.default.getCurrentUser()));
  }
}
