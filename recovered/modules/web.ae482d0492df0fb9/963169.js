/* Recovered shipped factory. Module 963169.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4530742..4531286
 * Raw property SHA-256: 7c98ac384ee9d79324c315d95f2d076ba1524e7a207f881e5755e3ad24985083
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { MS: () => o, OE: () => d, Qb: () => c });
  var i = n(73153),
    r = n(976860),
    a = n(114129),
    s = n(174459),
    l = n(652215);
  function o() {
    i.h.dispatch({ type: "ROUTE_CHANGED" });
  }
  function d(e) {
    if (!(0, r.TX)()) return;
    let t = (0, a.a2)();
    t === a.ug.Noop ||
      (s.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: -1, nav_trigger: e }),
      t !== a.ug.Navigated && (0, r.aX)());
  }
  function c(e) {
    if (!(0, r.TX)()) return;
    let t = (0, a.qu)();
    t === a.ug.Noop ||
      (s.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, { nav_direction: 1, nav_trigger: e }),
      t !== a.ug.Navigated && (0, r.sY)());
  }
}
