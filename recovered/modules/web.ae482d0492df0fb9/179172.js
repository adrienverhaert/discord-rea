/* Recovered shipped factory. Module 179172.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3950235..3950669
 * Raw property SHA-256: 7120d8d6c93ac5d9a139e77723daa92000398de7226ed74b462bd55949e05358
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { BG: () => s, Bv: () => l, TO: () => r, mk: () => a });
  var i = n(73153);
  function r(e, t, n) {
    i.h.dispatch({
      type: "CONNECTED_DEVICE_SWITCH",
      displayName: e,
      connectedDevicePreference: t,
      location: n,
    });
  }
  function a() {
    i.h.dispatch({ type: "CONNECTED_DEVICE_DONT_SWITCH" });
  }
  function s(e) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
  }
  function l(e) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL", neverShowModal: e });
  }
}
