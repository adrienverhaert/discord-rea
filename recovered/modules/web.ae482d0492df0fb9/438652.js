/* Recovered shipped factory. Module 438652.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5731218..5731447
 * Raw property SHA-256: dabe2d4ae4611aad4ca2196f4ab126b5d7f3cb9a03b999bf436c1964c3768735
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => l });
  var i = n(17928),
    r = n(830215),
    a = n(121780),
    s = n(652215);
  let l = (0, i.UT)(a.A, {
    getQueryId: s.fic.USER_COUNTRY_CODE,
    get: () => a.A.getCountryCode(),
    load: async () => {
      await r.A.getLocationMetadata();
    },
  });
}
