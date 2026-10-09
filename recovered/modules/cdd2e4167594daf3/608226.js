/* Recovered shipped factory. Module 608226.
 * Source: recovered/web/assets/cdd2e4167594daf3.js
 * UTF-16 property offsets: 95..409
 * Raw property SHA-256: ee8204bad6170e67ffafc767e2fe0b53bba753c780ea7c8e472bf369666de882
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, a) {
  a.d(n, { O: () => t });
  var r = a(477900);
  a(582128);
  var s = a(192308);
  function t(e, n) {
    return (0, s.openModalLazy)(async () => {
      let { default: s } = await Promise.all([
        a.e("460773"),
        a.e("543267"),
        a.e("62433"),
        a.e("286743"),
      ]).then(a.bind(a, 572874));
      return (a) =>
        (0, r.jsx)(s, {
          ...a,
          onConfirm: () => {
            (a.onClose(), n());
          },
          channel: e,
        });
    });
  }
}
