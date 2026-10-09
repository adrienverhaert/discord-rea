/* Recovered shipped factory. Module 350723.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 722910..723965
 * Raw property SHA-256: 256212186c2d828ddef6d2be1436a2331b70133ed52eba9df11854c760813145
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    GP: () => A,
    R: () => o,
    Ts: () => E,
    XC: () => l,
    _c: () => u,
    t2: () => _,
    tV: () => c,
  });
  var i = n(435558),
    r = n(73153),
    a = n(475815),
    s = n(365971);
  function l(e, t) {
    r.h.dispatch({ type: "WINDOW_FOCUS", windowId: (0, s.Q2)(e), focused: t });
  }
  function o(e) {
    r.h.dispatch({ type: "WINDOW_HIDDEN", windowId: (0, s.Q2)(e) });
  }
  let d = (0, i.memoize)((e) =>
    (0, i.debounce)((t, n) => {
      r.h.dispatch({ type: "WINDOW_RESIZED", windowId: e, width: t, height: n });
    }, 100),
  );
  function c(e) {
    d((0, s.Q2)(e))(e.innerWidth, e.innerHeight);
  }
  function u(e) {
    let t = (0, s.Q2)(e);
    r.h.dispatch({
      type: "WINDOW_FULLSCREEN_CHANGE",
      windowId: t,
      isElementFullscreen: (0, a._U)(null, e.document),
    });
  }
  function _(e) {
    let t = (0, s.Q2)(e);
    r.h.dispatch({
      type: "WINDOW_VISIBILITY_CHANGE",
      windowId: t,
      visible: "visible" === e.document.visibilityState,
    });
  }
  function E(e) {
    let t = (0, s.Q2)(e),
      n = e.document;
    r.h.dispatch({
      type: "WINDOW_INIT",
      windowId: t,
      isElementFullscreen: (0, a._U)(null, n),
      focused: n.hasFocus(),
      width: e.innerWidth,
      height: e.innerHeight,
      visible: "visible" === n.visibilityState,
    });
  }
  function A(e) {
    r.h.dispatch({ type: "WINDOW_UNLOAD", windowId: (0, s.Q2)(e) });
  }
}
