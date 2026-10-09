/* Recovered shipped factory. Module 491037.
 * Source: recovered/web/assets/efa86585eee1c8e3.js
 * UTF-16 property offsets: 1105..1419
 * Raw property SHA-256: 2e6c116e5c774e04dbd759eff50b5024b7bc336e5bd1d507ae22dc56f11b96ef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { W: () => a });
  var s = n(477900);
  n(582128);
  var i = n(192308);
  function a(e) {
    let { message: t, initialAnswerId: a } = e;
    (0, i.openModalLazy)(async () => {
      let { default: e } = await Promise.all([n.e("403382"), n.e("678195"), n.e("919794")]).then(
        n.bind(n, 716936),
      );
      return (n) => (0, s.jsx)(e, { ...n, message: t, initialAnswerId: a });
    });
  }
}
