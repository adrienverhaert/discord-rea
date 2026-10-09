/* Recovered shipped factory. Module 541689.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4199448..4200037
 * Raw property SHA-256: 0be9b2190e607e974557068f7e30e05ac1273066a976e00fd9922b531f0c5943
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ab: () => s, IR: () => d, SE: () => l, U$: () => o, Xw: () => a, rF: () => r });
  var i = n(73153);
  function r(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_SHOWN", dismissibleContent: e, guildId: t });
  }
  function a(e, t) {
    i.h.dispatch({ type: "DCF_HANDLE_DC_DISMISSED", dismissibleContent: e, guildId: t });
  }
  function s() {
    i.h.dispatch({ type: "DCF_RESET" });
  }
  function l(e) {
    i.h.dispatch({ type: "DCF_DAILY_CAP_OVERRIDE", value: e });
  }
  function o(e) {
    i.h.dispatch({ type: "DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE", value: e });
  }
  function d(e, t) {
    i.h.dispatch({ type: "DCF_OVERRIDE_LAST_DC_DISMISSED", dismissibleContent: e, guildId: t });
  }
}
