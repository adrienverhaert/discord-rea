/* Recovered shipped factory. Module 655752.
 * Source: recovered/web/assets/b3a654d591fe9173.js
 * UTF-16 property offsets: 94..316
 * Raw property SHA-256: a6129b8d4aec238376053d19f400478e22a7315d05f540153076cc76942e23e3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, u) {
  u.d(t, { P: () => d });
  var r = u(19886),
    e = u(202541);
  function d() {
    let n = (0, r.$F)();
    if (null == n) return null;
    if (n.status === r.Wo.UPCOMING) return n;
    let t = e.sp.indexOf(n.id),
      u = e.sp[t + 1];
    return null == u || -1 === t ? null : e.VD[u];
  }
}
