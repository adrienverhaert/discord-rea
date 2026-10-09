/* Recovered shipped factory. Module 708676.
 * Source: recovered/web/assets/059cee9f7c848bff.js
 * UTF-16 property offsets: 95..509
 * Raw property SHA-256: ae7ebf17d9be44f414166d1d593b1f89df7b82fa5987a0c3db6c549cd51dd071
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, i, n) {
  n.d(i, { A: () => a, J: () => u });
  var r = n(536637),
    f = n.n(r),
    e = n(660183);
  function u(t) {
    let i = f()();
    if (t <= i) return;
    let n = t.diff(i, "days");
    if (n > 1) return e.intl.formatToPlainString(e.t.dex68a, { days: n });
    let r = t.diff(i, "hours");
    if (r > 1) return e.intl.formatToPlainString(e.t.BWqf0c, { hours: r });
    let u = t.diff(i, "minutes");
    return e.intl.formatToPlainString(e.t["3SLXAz"], { minutes: u });
  }
  function a(t) {
    if (null != t) return u(t);
  }
}
