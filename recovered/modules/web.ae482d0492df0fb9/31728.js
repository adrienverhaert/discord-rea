/* Recovered shipped factory. Module 31728.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 683764..684566
 * Raw property SHA-256: d57394b49dc22c9bd90e88a1b834383000412742b578ee3f3242b9e91f0fe9d6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    EB: () => d,
    I_: () => c,
    VN: () => a,
    WU: () => l,
    ho: () => r,
    jD: () => s,
    mf: () => u,
    tw: () => o,
  });
  var i = n(73153);
  function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_OPEN", id: e, component: t, props: n });
  }
  function a(e) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_CLOSE", id: e });
  }
  function s(e) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_HIDE", id: e });
  }
  function l(e) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_SHOW", id: e });
  }
  function o(e, t) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_MOVE", id: e, position: t });
  }
  function d(e, t) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_RESIZE", width: e, pipType: t });
  }
  function c(e, t) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_UPDATE_RECT", id: e, rect: t });
  }
  function u(e) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW", id: e });
  }
}
