/* Recovered shipped factory. Module 281020.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2906733..2907109
 * Raw property SHA-256: ac0fb77deef0fab98acf47129500fdd0d40ea84d55d003181cf3d28506d196fe
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { M8: () => a, gk: () => r, zi: () => s });
  var i = n(73153);
  function r(e, t) {
    i.h.dispatch({
      type: "ACCOUNT_LINK_AUTHORIZATION_STARTED",
      applicationId: e,
      accountLinkCallbacks: t,
    });
  }
  function a(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId: e });
  }
  function s(e) {
    i.h.dispatch({ type: "ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS", flows: e });
  }
}
