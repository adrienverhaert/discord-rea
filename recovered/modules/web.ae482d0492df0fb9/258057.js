/* Recovered shipped factory. Module 258057.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 585336..585740
 * Raw property SHA-256: 94eb3e84b0feda0bae055e0d4957205ea374a9b69d44004cafe4b3d862031d1b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { z: () => l });
  var i = n(192308),
    r = n(587895),
    a = n(626584),
    s = n(92077);
  function l(e, t, l) {
    var o;
    let d;
    ((o = () => (0, s.NQ)(e, t, l)),
      null == (d = r.A.getApplication(e))
        ? new a.A("DispatchUninstallActionCreators").log(`Application not found for game ${e}`)
        : (0, i.openModalLazy)(async () => {
            let { default: e } = await n.e("760745").then(n.bind(n, 831120));
            return (t) => e({ game: d, onConfirmUninstall: o, ...t });
          }));
  }
}
