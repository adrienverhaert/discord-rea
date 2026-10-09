/* Recovered shipped factory. Module 637706.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6812124..6812704
 * Raw property SHA-256: 49a2c758003560c2c2bc8b16e652d70175c4ac18a9c86c15f137605759ff14fa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => u, a: () => c });
  var i = n(17928),
    r = n(97352),
    a = n(975571),
    s = n(158045),
    l = n(580630),
    o = n(202541),
    d = n(660183);
  function c(e) {
    let t = "...",
      n = (0, i.bG)([r.A], () => r.A.isLoadedForSKU(o.pe.TIER_2));
    if (-1 !== e.indexOf("{price}") && n)
      try {
        let e = s.Ay.getDefaultPrice(o.gD.PREMIUM_MONTH_TIER_2);
        t = (0, l.$g)(e.amount, e.currency);
      } catch {}
    return e.replace(/\{price\}/g, t);
  }
  function u(e, t) {
    let n = e?.id != null && "" !== e.id ? e.id : t;
    if ("" === n) return null;
    let i = e?.linkText != null && "" !== e.linkText ? e.linkText : d.intl.string(d.t["sBp+u0"]);
    return { url: a.A.getArticleURL(n), linkText: i };
  }
}
