/* Recovered shipped factory. Module 778591.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4757854..4758441
 * Raw property SHA-256: 10aca245dec5f0936af1339cbd791939d8353fac343cabeccb92a893b275ccb3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { I: () => c, Z: () => d });
  var i = n(792216),
    r = n(505779),
    a = n(17928),
    s = n(311043),
    l = n(240248),
    o = n(652215);
  function d(e) {
    return `https://store.steampowered.com/app/${encodeURIComponent(e)}`;
  }
  function c(e) {
    return (0, a.bG)(
      [s.A],
      () => {
        if (null == e) return null;
        let t = s.A.getGame(e);
        if (null == t || t.steamReleaseStatus === i.Y.RETIRED_ABANDONED) return null;
        let n = t.websites.find((e) => e.category === r.V.STEAM)?.url,
          a = t.thirdPartySkus.filter((e) => e.distributor === o.d3x.STEAM && !(0, l.uJ)(e.id)),
          c = a[0]?.id,
          u = (0, l.uJ)(c) ? null : d(c);
        return a.length > 1 && null != n ? n : null != u ? u : null != n ? n : null;
      },
      [e],
    );
  }
}
