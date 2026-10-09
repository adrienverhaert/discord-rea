/* Recovered shipped factory. Module 985253.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4800822..4801221
 * Raw property SHA-256: 96aa1e02a856e96e63ec6242eca37b38986c2c6547d272c95e1ca3c20d7f3e25
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, T: () => l });
  var i = n(17928),
    r = n(587895),
    a = n(311043);
  function s(e) {
    let t = new Set();
    return (
      null == e ||
        (t.add(e),
        a.A.getGame(e)?.linkedApplications?.forEach((e) => t.add(e.id)),
        r.A.getApplication(e)?.linkedGames?.forEach((e) => {
          (t.add(e.id), a.A.getGame(e.id)?.linkedApplications?.forEach((e) => t.add(e.id)));
        })),
      t
    );
  }
  function l(e) {
    return (0, i.yK)([a.A, r.A], () => Array.from(s(e)), [e]);
  }
}
