/* Recovered shipped factory. Module 6981.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 556169..556799
 * Raw property SHA-256: c090ffd5ed003c755ab4cafa99392bbb3b8f9a54efbc0441a0dbbeec320abe39
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { J0: () => l, Qh: () => s, ST: () => r, mZ: () => a, uA: () => o });
  var i = n(73153);
  function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
    i.h.dispatch({ type: "BROWSER_HANDOFF_BEGIN", timeout: e });
  }
  function a(e, t) {
    i.h.dispatch({ type: "BROWSER_HANDOFF_END", handoffToken: e, fingerprint: t });
  }
  function s(e) {
    let { handoffKey: t, handoffToken: n, handoffSource: r, timeout: a = 1e4 } = e;
    i.h.dispatch({
      type: "BROWSER_HANDOFF_FROM_APP",
      handoffKey: t,
      handoffToken: n,
      handoffSource: r,
      timeout: a,
    });
  }
  function l() {
    i.h.dispatch({ type: "BROWSER_HANDOFF_UNAVAILABLE" });
  }
  function o(e) {
    i.h.dispatch({ type: "BROWSER_HANDOFF_SET_USER", user: e });
  }
}
