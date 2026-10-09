/* Recovered shipped factory. Module 384726.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7468656..7468949
 * Raw property SHA-256: 26965fdfbf5c4df73c113a3d8c0971ab875ba49c3a4e733948a7822714de67db
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(832946);
  function r(e) {
    return null == e
      ? {}
      : Object.entries(e).reduce((e, t) => {
          let [n, r] = t;
          return (
            (e[n] = {
              countryPrices: {
                countryCode: r.country_prices.country_code,
                prices: r.country_prices.prices.map((e) => (0, i.n_)(e, !0)),
              },
              paymentSourcePrices: {},
            }),
            e
          );
        }, {});
  }
}
