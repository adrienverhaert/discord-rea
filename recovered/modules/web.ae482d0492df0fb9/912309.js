/* Recovered shipped factory. Module 912309.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6559696..6559926
 * Raw property SHA-256: 4a277a4e22c4c06a79b44325a7eb3bfb3c2d4d2ae56cbe358961dad618dad918
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { dH: () => s, kX: () => l });
  var i = n(17928),
    r = n(800828),
    a = n(994500);
  function s(e) {
    let [t, n] = e;
    return t.getPendingCount() + n.getPendingIncomingCount();
  }
  function l() {
    return (0, i.bG)([a.A, r.A], () => s([a.A, r.A]));
  }
}
