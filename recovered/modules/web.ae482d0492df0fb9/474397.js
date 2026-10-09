/* Recovered shipped factory. Module 474397.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5746830..5747511
 * Raw property SHA-256: f726f838baac8a2fd0d57a1d8b63ded0d3a2c259ed9140dae693e16dca306aca
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900),
    r = n(192308),
    a = n(531685),
    s = n(723702),
    l = n(19575),
    o = n(267102),
    d = n(652215);
  function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.BRT.APP,
      t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      c = e ?? (0, o.zd)();
    if (c !== d.BRT.APP && null != c) {
      if (a.A.isFocused()) return;
      t
        ? s.isPlatformEmbedded
          ? l.Ay.focus()
          : window.focus()
        : (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.BRT.POPOUT;
            e !== d.BRT.APP &&
              (0, r.openModalLazy)(
                async () => {
                  let { default: t } = await n.e("620570").then(n.bind(n, 368033));
                  return (n) => (0, i.jsx)(t, { ...n, contextKey: e });
                },
                { contextKey: (0, r.modalContextFromAppContext)(e) },
              );
          })(e);
    }
  }
}
