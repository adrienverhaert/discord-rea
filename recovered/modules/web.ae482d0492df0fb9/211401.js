/* Recovered shipped factory. Module 211401.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2868646..2868910
 * Raw property SHA-256: 5c69ad8354ce97067fb52e75526725a4aafdfddea1d9277aeef4a7da321da466
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { R: () => r, k: () => a });
  var i = n(73153);
  function r(e, t, n, r) {
    i.h.dispatch({
      type: "APP_LAUNCHER_SHOW",
      entrypoint: e,
      activeViewType: t,
      initialState: n,
      activeChannelId: r,
    });
  }
  function a(e) {
    i.h.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
  }
}
