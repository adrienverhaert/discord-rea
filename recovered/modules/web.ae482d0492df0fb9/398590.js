/* Recovered shipped factory. Module 398590.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 632886..633121
 * Raw property SHA-256: 30b459cf29af95cbe6e1c55f5146df89e544b5f2b9a137df6c513a245645c393
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { bz: () => s, id: () => r, jH: () => a });
  var i = n(73153);
  function r(e) {
    i.h.dispatch({ type: "LAYER_PUSH", component: e });
  }
  function a() {
    i.h.dispatch({ type: "LAYER_POP" });
  }
  function s() {
    i.h.dispatch({ type: "LAYER_POP_ALL" });
  }
}
