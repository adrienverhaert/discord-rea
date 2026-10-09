/* Recovered shipped factory. Module 538064.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4175750..4176101
 * Raw property SHA-256: 9ee2d18e8fd72a05314f6656ad756cbe88c8dd774245cb54963861e44d1cf3f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ft: () => l, Jt: () => a, eY: () => o, pf: () => s });
  var i = n(73153),
    r = n(265059);
  function a(e) {
    i.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: e });
  }
  function s() {
    a({ displayTools: !r.A.displayTools });
  }
  function l(e, t) {
    a({ displayTools: !0, lastOpenTabId: e, lastOpenSubTabId: t });
  }
  function o() {
    i.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
  }
}
