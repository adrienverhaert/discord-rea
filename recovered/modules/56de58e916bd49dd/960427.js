/* Recovered shipped factory. Module 960427.
 * Source: recovered/web/assets/56de58e916bd49dd.js
 * UTF-16 property offsets: 3623..3902
 * Raw property SHA-256: 7f5ef288d934bc0619ec868db5b2e028aad56ebfc8cfae761b37da2fbe2dcf95
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, n, e) {
  e.d(n, { A: () => i });
  var r = e(477900);
  e(582128);
  var a = e(192308);
  let i = {
    open: function (t) {
      (0, a.openModalLazy)(async () => {
        let { default: n } = await Promise.all([
          e.e("24774"),
          e.e("835778"),
          e.e("47812"),
          e.e("931233"),
        ]).then(e.bind(e, 524792));
        return (e) => (0, r.jsx)(n, { ...t, ...e });
      });
    },
  };
}
