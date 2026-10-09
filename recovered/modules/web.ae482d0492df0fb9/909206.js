/* Recovered shipped factory. Module 909206.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2591614..2592119
 * Raw property SHA-256: f30ecc953d8ec6bd90148fb447dc81e2816297e3c89c6aae8c399795e7babe49
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { MJ: () => s, _9: () => l, c2: () => r, ri: () => a });
  var i = n(73153);
  function r() {
    i.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
  }
  function a(e) {
    i.h.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
      activityUrlOverride: e,
    });
  }
  function s(e) {
    i.h.dispatch({
      type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
      applicationId: e,
      timestamp: new Date().getTime(),
    });
  }
  function l(e) {
    i.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter: e });
  }
}
