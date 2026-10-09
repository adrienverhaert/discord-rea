/* Recovered shipped factory. Module 427675.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 247396..247918
 * Raw property SHA-256: 22b1281557b3b33f12339b05587a6e66cb9b77c096fa280ac5cefa67b9d15424
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Hu: () => d, S3: () => c, gU: () => u });
  var l = n(582128),
    i = n(702841),
    r = n(67480),
    a = n(642639),
    s = n(202541);
  let o = () => {
    let e = (0, a.t4)((e) => e.skuIds);
    return l.useMemo(() => e.filter((e) => !s.oz.includes(e)), [JSON.stringify(e)]);
  };
  function u() {
    let e = o();
    return (0, i.cf)(
      [r.A],
      () => {
        let t = {};
        for (let n of e) t[n] = r.A.get(n) ?? void 0;
        return t;
      },
      [e],
    );
  }
  function c() {
    let e = (0, a.t4)((e) => e.selectedSkuId),
      t = u();
    return null != e ? t[e] : void 0;
  }
  function d() {
    let e = o();
    return (0, i.bG)([r.A], () => e.every((e) => !r.A.isFetching(e) && null != r.A.get(e)), [e]);
  }
}
