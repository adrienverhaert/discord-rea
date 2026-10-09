/* Recovered shipped factory. Module 912851.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 672184..672413
 * Raw property SHA-256: 58eb3881c5a5a7454f552f74986931f5e6d41e860ceefe401d9f46c58f553fdc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(73153);
  let r = {
    show(e, t, n, r, a) {
      i.h.dispatch({
        type: "NOTICE_SHOW",
        notice: { id: a, type: e, message: t, buttonText: n, callback: r },
      });
    },
    dismiss(e) {
      i.h.dispatch({ type: "NOTICE_DISMISS", ...e });
    },
  };
}
