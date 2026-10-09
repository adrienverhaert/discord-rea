/* Recovered shipped factory. Module 823459.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3539960..3540268
 * Raw property SHA-256: daf675fb84a60f4a872f62873715337236b0f1d7ff5ac8258e52ad6f73156be5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Py: () => a, S8: () => s, bc: () => r });
  var i = n(73153);
  function r(e) {
    i.h.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: e });
  }
  function a() {
    i.h.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
  }
  function s() {
    i.h.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
  }
}
