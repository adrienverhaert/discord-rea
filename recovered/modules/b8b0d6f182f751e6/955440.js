/* Recovered shipped factory. Module 955440.
 * Source: recovered/web/assets/b8b0d6f182f751e6.js
 * UTF-16 property offsets: 2573..2842
 * Raw property SHA-256: d594ff1b1e50f97e0f3bc7cee4ef513ca91dd52eb8e3f9e4d09684889240127b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { A: () => a });
  var i = e(17928),
    l = e(73825),
    r = e(97352),
    s = e(652215);
  let a = (0, i.UT)(r.A, {
    getQueryId: s.fic.SUBSCRIPTION_PLAN,
    get: (t) => {
      let n = r.A.getForSKU(t);
      return 0 === n.length ? null : n;
    },
    load: (t) => (0, l.ur)(t).then(() => {}),
    getIsLoading: (t) => r.A.isFetchingForSKU(t),
  });
}
