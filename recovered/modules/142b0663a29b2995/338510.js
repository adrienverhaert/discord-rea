/* Recovered shipped factory. Module 338510.
 * Source: recovered/web/assets/142b0663a29b2995.js
 * UTF-16 property offsets: 95..418
 * Raw property SHA-256: 4f6cc106e3b51c1cd6dc3aa68ecd40ab7fa59f8f2dcbdb801ba2d31c07baea83
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, i, e) {
  e.d(i, { u: () => r });
  var s = e(617641),
    n = e(168447),
    l = e(546140);
  function r(t) {
    let i = (0, s.Lc)({ location: "safety-tools-button" }),
      e = (0, l.L)(),
      r = (0, n.Y)(t);
    if (!i || !e) return;
    let m = r.filter((t) => null != t.dismiss_timestamp);
    if (0 !== m.length)
      return m.sort((t, i) =>
        t.type > i.type || t.dismiss_timestamp < i.dismiss_timestamp ? 1 : -1,
      )[0];
  }
}
