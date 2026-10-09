/* Recovered shipped factory. Module 95264.
 * Source: recovered/web/assets/9fd7c02852f31d46.js
 * UTF-16 property offsets: 95..331
 * Raw property SHA-256: e1258e652beb052e6e826686a16968a2192305cff1eed7556cb92b43a7544d00
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (a, t, e) {
  e.d(t, { A: () => r });
  var d = e(477900);
  e(582128);
  var n = e(192308);
  function r(a, t) {
    (0, n.openModalLazy)(async () => {
      let { default: n } = await e.e("155793").then(e.bind(e, 500008));
      return (e) => (0, d.jsx)(n, { ...e, project: a, currentGuildId: t });
    });
  }
}
