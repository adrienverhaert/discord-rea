/* Recovered shipped factory. Module 379610.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5593010..5593315
 * Raw property SHA-256: b66aba2167196bb1aa87b78d250ab67c2420c2778df2aae3f2ad84b84c5a48d4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(477900),
    r = n(192308);
  function a(e) {
    (0, r.openModalLazy)(async () => {
      let { default: t } = await Promise.all([
        n.e("638781"),
        n.e("188941"),
        n.e("197804"),
        n.e("807265"),
        n.e("797641"),
        n.e("890496"),
      ]).then(n.bind(n, 401155));
      return (n) => (0, i.jsx)(t, { ...n, inviteCode: e });
    });
  }
}
