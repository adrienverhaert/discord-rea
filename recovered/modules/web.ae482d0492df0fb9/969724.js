/* Recovered shipped factory. Module 969724.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7468950..7469568
 * Raw property SHA-256: ebf862ac7abab9b6ab5743cc023ec1364e88c7a976371898f9e5402caeb01da7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ri: () => l, mC: () => s, y8: () => a });
  var i = n(652215),
    r = n(818348);
  function a(e, t) {
    let n =
      null != e.prices[t] && e.prices[t].countryPrices.prices.length > 0
        ? e.prices[t].countryPrices
        : null != e.prices[i.lid.DEFAULT] && e.prices[i.lid.DEFAULT].countryPrices.prices.length > 0
          ? e.prices[i.lid.DEFAULT].countryPrices
          : null;
    return null != n ? n.prices[0] : null != e.price ? e.price : null;
  }
  function s(e) {
    return null != e.price || null != e.prices[i.lid.DEFAULT];
  }
  function l(e) {
    let t = a(e, i.lid.DEFAULT) ?? { amount: 0, currency: r.Yr.USD },
      n = a(e, i.lid.GIFT) ?? { amount: 0, currency: r.Yr.USD };
    return t.currency !== n.currency || t.amount !== n.amount;
  }
}
