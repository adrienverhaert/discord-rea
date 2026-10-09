/* Recovered shipped factory. Module 722884.
 * Source: recovered/web/assets/d6d7214192869745.js
 * UTF-16 property offsets: 128178..128470
 * Raw property SHA-256: a51b82b6a7d9cdb9930253a34c814741f2d15211f55121e7cd208051817ba8e9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => r });
  var i = n(477900),
    l = n(192308),
    s = n(131955);
  function r(e) {
    let { channel: t } = e;
    (0, l.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([n.e("419915"), n.e("199150"), n.e("560394")]).then(
          n.bind(n, 706897),
        );
        return (n) => (0, i.jsx)(e, { channel: t, ...n });
      },
      { modalKey: s.e$ },
    );
  }
}
