/* Recovered shipped factory. Module 77157.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3853108..3853398
 * Raw property SHA-256: cd58c7c4c59f9d33727caa7de67010b39ed1270c37072dbf6cfc47fdfbf92b73
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(590180),
    a = n(4227),
    s = n(892118);
  function l(e) {
    return (0, i.bG)([r.A, a.A], () => {
      if (null == e) return;
      let t = r.A.getProduct(e);
      if ((0, s.s)(t?.items[0])) return t.items[0];
      let n = a.A.getPurchase(e);
      if ((0, s.s)(n?.items[0])) return n.items[0];
    });
  }
}
