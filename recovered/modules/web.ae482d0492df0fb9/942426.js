/* Recovered shipped factory. Module 942426.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3845455..3845840
 * Raw property SHA-256: 57f85c4cc26aefaa5e2767d0cf329ec6f09758d0895416b164b28aafb41de753
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(815996),
    s = n(590180),
    l = n(4227),
    o = n(203632);
  function d(e) {
    let t = (0, r.bG)([s.A, l.A], () => {
        if (null == e) return;
        let t = s.A.getProduct(e);
        if ((0, o.C3)(t?.items[0])) return t.items[0];
        let n = l.A.getPurchase(e);
        if ((0, o.C3)(n?.items[0])) return n.items[0];
      }),
      n = null != e && null == t;
    return (
      i.useEffect(() => {
        n && (0, a.RE)(e);
      }, [n, e]),
      t
    );
  }
}
