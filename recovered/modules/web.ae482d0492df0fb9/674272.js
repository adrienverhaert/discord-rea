/* Recovered shipped factory. Module 674272.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7432886..7433278
 * Raw property SHA-256: fe4203c7b90e84f8b7096acf754fcc09647fc6fd37409ace41294886e842572b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(892491);
  function s(e) {
    let { source: t, onClose: s } = e;
    (0, r.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([
          n.e("450530"),
          n.e("298199"),
          n.e("392223"),
          n.e("61376"),
        ]).then(n.bind(n, 999235));
        return (n) => (0, i.jsx)(e, { ...n, source: t });
      },
      { onCloseCallback: s, backdropStyle: a.F.BLUR, stackingBehavior: "stack" },
    );
  }
}
