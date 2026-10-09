/* Recovered shipped factory. Module 272859.
 * Source: recovered/web/assets/ccfd4c871a221968.js
 * UTF-16 property offsets: 3354..3627
 * Raw property SHA-256: 2def962b93bf583750f6e6aa32f7f136c7c0c1fb7799302930701ad41f8e3b66
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (s, t, l) {
  l.d(t, { d: () => a });
  var e = l(17928),
    i = l(800342),
    n = l(328968),
    r = l(652215);
  let a = (0, e.UT)(n.A, {
    getQueryId: r.fic.STORE_LISTING,
    get: (s) => (null != s ? (n.A.getForSKU(s) ?? null) : null),
    load: (s) => (null != s ? (0, i.QB)(s) : Promise.resolve()),
    getIsLoading: (s) => null != s && n.A.isFetchingForSKU(s),
  });
}
