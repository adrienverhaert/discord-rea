/* Recovered shipped factory. Module 942614.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6143018..6143227
 * Raw property SHA-256: 55c63d134211c793326ebb41a0f2104fc459303dcca63d16b7d668bc880d9d63
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C: () => r, D: () => a });
  var i = n(73153);
  function r(e) {
    i.h.wait(() => i.h.dispatch({ type: "NUF_NEW_USER", newUserType: e }));
  }
  function a() {
    i.h.wait(() => i.h.dispatch({ type: "NUF_COMPLETE" }));
  }
}
