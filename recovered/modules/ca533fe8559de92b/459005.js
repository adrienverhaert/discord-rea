/* Recovered shipped factory. Module 459005.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 417840..418143
 * Raw property SHA-256: 2eb9ab7fb9f0ed6de34869b66913bc0ff86af2bcbbe85a6805e8f50558ebe6d7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { n: () => a });
  var l = n(17928),
    i = n(561573),
    r = n(379031);
  function a(e) {
    let { surface: t, skuId: n } = e,
      a = (0, r.g)(t);
    return (0, l.bG)(
      [i.A],
      () =>
        (function (e, t) {
          if (null == e) return null;
          for (let n of e) {
            let e = n[t];
            if (e?.amount != null && e.amount > 0) return e;
          }
          return null;
        })(i.A.getRewardsForSkuId(n), a),
      [n, a],
    );
  }
}
