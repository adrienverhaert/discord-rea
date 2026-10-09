/* Recovered shipped factory. Module 801228.
 * Source: recovered/web/assets/81266dc9c2d9aadf.js
 * UTF-16 property offsets: 95..292
 * Raw property SHA-256: 60c9402144d9c1b8753757662ec6bd8541175cdfbc0b8cac5793c49aca3c72a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, s, t) {
  t.d(s, { A: () => r });
  var p = t(582128),
    u = t(17928),
    c = t(67480),
    i = t(435658);
  function r(e) {
    let { skuId: s } = e,
      t = (0, u.bG)([c.A], () => c.A.get(s)),
      r = p.useMemo(() => [s], [s]);
    return ((0, i.j)({ skuIds: r }), t);
  }
}
