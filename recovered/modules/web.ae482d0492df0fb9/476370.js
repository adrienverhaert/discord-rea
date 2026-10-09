/* Recovered shipped factory. Module 476370.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2871516..2871781
 * Raw property SHA-256: 32c2418148b20c2ba08a037a8a6b067ffad67350b7964316eaa2afea444ce7fc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    let { storeState: t, surface: n } = e,
      i = Date.now(),
      r = t.dateRangesForSurfaces?.[n];
    return null != r && new Date(r.fromDate).getTime() < i && new Date(r.untilDate).getTime() > i
      ? Math.floor(new Date(r.fromDate).getTime() / 1e3)
      : 0;
  }
  n.d(t, { C: () => i });
}
