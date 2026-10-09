/* Recovered shipped factory. Module 421838.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5591264..5591655
 * Raw property SHA-256: 544245966947cf6eab068e7aeed000d6d8038dffecb53f763a7842c9e4336d86
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Kl: () => l, LF: () => o, sF: () => s });
  var i = n(73153),
    r = n(174459),
    a = n(652215);
  function s(e) {
    (r.default.track(a.HAw.HOTSPOT_HIDDEN, { hotspot_location: e }),
      i.h.wait(() => {
        i.h.dispatch({ type: "HOTSPOT_HIDE", location: e });
      }));
  }
  function l(e, t) {
    i.h.dispatch({ type: "HOTSPOT_OVERRIDE_SET", location: e, enabled: t });
  }
  function o(e) {
    i.h.dispatch({ type: "HOTSPOT_OVERRIDE_CLEAR", location: e });
  }
}
