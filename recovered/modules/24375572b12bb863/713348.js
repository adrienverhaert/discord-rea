/* Recovered shipped factory. Module 713348.
 * Source: recovered/web/assets/24375572b12bb863.js
 * UTF-16 property offsets: 760..1054
 * Raw property SHA-256: c5d5db933853821c17a73fcef62f62f3ce93d1cfccbf228ae02f1d6826056249
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { A: () => d });
  var s = t(582128),
    n = t(17928),
    i = t(287809),
    a = t(639935),
    r = t(249203),
    u = t(695904);
  function d(e) {
    let l = (0, u.bq)(),
      t = (0, n.bG)(
        [r.A, i.default],
        () => null != l && e.id !== i.default.getCurrentUser()?.id && null == r.A.getEntry(e.id),
        [e, l],
      );
    s.useEffect(() => {
      t && (0, a.b)(e.id);
    }, [t, e.id]);
  }
}
