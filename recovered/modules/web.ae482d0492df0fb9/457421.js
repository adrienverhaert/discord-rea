/* Recovered shipped factory. Module 457421.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3802996..3803442
 * Raw property SHA-256: 1c4c123d091e601cfccd79186f27087b667d2b5da9f7467f7b8409d9bfd4cd55
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = {},
    s = "NOT_FETCHED";
  class l extends i.Ay.Store {
    static displayName = "CollectiblesMarketingsStore";
    getMarketingBySurface(e) {
      return a[e];
    }
    get fetchState() {
      return s;
    }
  }
  let o = new l(r.h, {
    COLLECTIBLES_MARKETING_FETCH: function () {
      s = "FETCHING";
    },
    COLLECTIBLES_MARKETING_FETCH_SUCCESS: function (e) {
      ((a = e.marketings.marketingsBySurfaces), (s = "FETCHED"));
    },
    LOGOUT: function () {
      ((a = {}), (s = "NOT_FETCHED"));
    },
  });
}
