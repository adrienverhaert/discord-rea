/* Recovered shipped factory. Module 601194.
 * Source: recovered/web/assets/08f32d8f37417cc0.js
 * UTF-16 property offsets: 21965..22407
 * Raw property SHA-256: dc7a5b8c418d710ed043589f906697fd6689f44c233bd2882fc9b55d905cfe97
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Gm: () => u, yv: () => o });
  var l = n(477900),
    r = n(582128),
    i = n(786300),
    s = n(195269);
  let [a, u, c] = (0, i.A)();
  function o(e) {
    let { children: t } = e,
      { purchaseErrorBlockRef: n } = (0, s.L)(),
      [i, u] = r.useState(null),
      [c, o] = r.useState(null),
      [d, f] = r.useState(null),
      h = r.useMemo(
        () => ({
          purchaseErrorBlockRef: n,
          bodyNode: i,
          setBodyNode: u,
          footerNode: c,
          setFooterNode: o,
          modalOverlayNode: d,
          setModalOverlayNode: f,
        }),
        [n, i, c, d],
      );
    return (0, l.jsx)(a, { value: h, children: t });
  }
}
