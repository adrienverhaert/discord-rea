/* Recovered shipped factory. Module 928424.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4553146..4553479
 * Raw property SHA-256: adbe079ebfec56d6a4900692b7677e23c1302adff07b4e59adefdaf5da3bb080
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(477900);
  n(582128);
  var r = n(192308);
  function a(e) {
    (0, r.openModalLazy)(async () => {
      let { default: t } = await Promise.all([
        n.e("454048"),
        n.e("400744"),
        n.e("390797"),
        n.e("307476"),
      ]).then(n.bind(n, 777023));
      return (n) =>
        (0, i.jsx)(t, { ...n, variant: "limit_reached", limit: e, source: "limit_reached" });
    });
  }
}
