/* Recovered shipped factory. Module 581453.
 * Source: recovered/web/assets/a42c6422012e2e93.js
 * UTF-16 property offsets: 736..1030
 * Raw property SHA-256: cdbbe082705deff6c25a760754e49303d3ea7a90d0326ae3352408cb8db9c46c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { A: () => l });
  var r = t(477900),
    u = t(192308);
  function l(e, n) {
    return (0, u.openModalLazy)(async () => {
      let { default: u } = await Promise.all([
        t.e("622936"),
        t.e("811566"),
        t.e("571210"),
        t.e("866008"),
        t.e("373060"),
      ]).then(t.bind(t, 201583));
      return (t) => (0, r.jsx)(u, { ...t, guildId: e, instance: n });
    });
  }
}
