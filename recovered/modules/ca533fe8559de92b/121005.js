/* Recovered shipped factory. Module 121005.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 323929..324127
 * Raw property SHA-256: f1d9f5070d2329d7f8fe3b2883eef5d71632ca0635b71b12d2dccd3a30540f31
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => s });
  var l = n(582128),
    i = n(17928),
    r = n(277984),
    a = n(166403);
  function s() {
    let e = (0, i.bG)([a.A], () => a.A.hasFetchedSubscriptions());
    return (
      l.useEffect(() => {
        e || (0, r.hP)();
      }, [e]),
      e
    );
  }
}
