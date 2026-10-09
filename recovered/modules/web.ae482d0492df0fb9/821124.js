/* Recovered shipped factory. Module 821124.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5142988..5143312
 * Raw property SHA-256: aa7c73846dd5a4695ad0c565d9d80f0e1cfcb9d4be0a39066c26e65abe63eb31
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { NK: () => s, Oe: () => l, ar: () => a, mf: () => r });
  var i = n(513461);
  function r(e) {
    return e === i.B5.APPROVED || e === i.B5.REJECTED;
  }
  function a(e) {
    return e === i.B5.SUBMITTED;
  }
  function s(e) {
    return e.applicationStatus === i.B5.APPROVED && null != e.lastSeen;
  }
  function l(e) {
    return r(e.applicationStatus) && null == e.lastSeen;
  }
}
