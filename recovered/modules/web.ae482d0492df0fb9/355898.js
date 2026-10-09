/* Recovered shipped factory. Module 355898.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4782254..4782544
 * Raw property SHA-256: 9ae08b72585467573ec0b4fb7bb907d0e7db95cdc7eba0badbbf97e980707c2e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { M: () => a, e: () => r });
  var i = n(73153);
  function r(e, t) {
    i.h.dispatch({ type: "GAME_UPSELL_DISMISS_CLEAR", applicationId: e, dismissibleContent: t });
  }
  function a(e, t) {
    i.h.dispatch({
      type: "GAME_UPSELL_DISMISS",
      applicationIds: e,
      dismissedAt: Date.now(),
      dismissibleContent: t,
    });
  }
}
