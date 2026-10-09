/* Recovered shipped factory. Module 683071.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10325666..10326317
 * Raw property SHA-256: c28baf72745a36b84b1be523038690deb847ade84b8b9aa5315e54f69b840bb8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { w: () => l });
  var i = n(477900);
  n(582128);
  var r = n(512950),
    a = n(460890),
    s = n(292825);
  function l(e) {
    let {
      type: t,
      hidden: n,
      iconAlign: l,
      children: o,
      message: d,
      role: c,
      title: u,
      action: _,
      onDismiss: E,
    } = e;
    if ((0, a.G9)().experiments?.enabledExperiments?.includes("mana-notification-components"))
      return (0, i.jsx)(s.a, {
        type: "success" === t ? "positive" : t,
        hidden: n,
        message: d ?? o,
        role: c ?? "static",
        title: u,
        action: _,
        onDismiss: E,
      });
    return (0, i.jsx)(r.p, {
      messageType: (function (e) {
        switch (e) {
          case "critical":
            return r.Y.ERROR;
          case "warning":
            return r.Y.WARNING;
          case "info":
            return r.Y.INFO;
          case "success":
            return r.Y.POSITIVE;
        }
      })(t),
      hidden: n,
      iconAlign: l,
      children: o ?? d,
    });
  }
}
