/* Recovered shipped factory. Module 7667.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5125848..5126425
 * Raw property SHA-256: 61147d1b4dfe128532a028307f5c540e7e6682706b384d167e83286271c3a919
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => d }), n(321073));
  var i = n(17928),
    r = n(412260),
    a = n(852218),
    s = n(421108),
    l = n(773669),
    o = n(660183);
  function d(e) {
    let t = (0, i.bG)([r.A], () => r.A.getPromotionByTypeAndId(a.pt.MARKETING_MOMENT, e) ?? null),
      n = (0, i.bG)([l.default], () => l.default.locale),
      d = t?.boostBogoMaxCredits ?? null,
      c = t?.endDate ?? null,
      u = (0, s.dA)(c),
      _ = [];
    return (
      null != d && _.push(o.intl.formatToPlainString(o.t["JR+Zws"], { maxCredits: d })),
      null != c &&
        _.push(
          o.intl.formatToPlainString(o.t.PdIODz, {
            date: c.toLocaleDateString(n, { month: "numeric", day: "numeric" }),
          }),
        ),
      { countdownText: u, terms: _.join(" ") }
    );
  }
}
