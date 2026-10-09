/* Recovered shipped factory. Module 855104.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 423342..423584
 * Raw property SHA-256: e5d501a410cfe373de590f42d573aae176f1c7b805bb32eb19e3a82693fa2707
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { gN: () => r, kj: () => a, r_: () => s });
  var l = n(17928),
    i = n(505274);
  function r() {
    return (0, l.bG)([i.A], () => i.A.balance);
  }
  function a(e) {
    return (0, l.bG)([i.A], () => null != e && (i.A.balance ?? 0) >= e);
  }
  function s() {
    return i.A.getCurrentBalance();
  }
}
