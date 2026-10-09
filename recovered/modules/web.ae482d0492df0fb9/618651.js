/* Recovered shipped factory. Module 618651.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2769767..2770121
 * Raw property SHA-256: 77656e5393d6d9c8bf6dc4191a92a2798d41fce4ebd8852ce817a34a32b6fc57
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => s });
  var i = n(562708),
    r = n(390595),
    a = n(183636);
  function s() {
    let e = (0, r.Vc)(),
      t = (0, i.getSuperProperties)(),
      n = {},
      s = e?.uuid;
    s !== t?.client_heartbeat_session_id && (n.client_heartbeat_session_id = s);
    let l = a.A.getState();
    (l !== t?.client_app_state && (n.client_app_state = l),
      Object.keys(n).length > 0 && (0, i.extendSuperProperties)(n));
  }
}
