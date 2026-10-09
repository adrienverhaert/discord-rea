/* Recovered shipped factory. Module 823598.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10689993..10690419
 * Raw property SHA-256: 8e1940e721ebd540669e4bb1d4cc54f351d9da09d7c6f83bd07b95cc2b4f7998
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i, r;
  function a() {
    if (null == i) throw Error("Native dependencies have not been injected.");
  }
  function s(e) {
    i = e;
  }
  function l() {
    return (a(), i.supported());
  }
  function o(e) {
    return (a(), i.supportsFeature(e));
  }
  function d(e) {
    (a(), i.setProcessPriority(e));
  }
  function c() {
    return (a(), r ?? (r = i.getVoiceEngine()));
  }
  function u() {
    return (a(), i.getOpenH264LibraryPath());
  }
  n.d(t, { $b: () => o, $j: () => l, WQ: () => s, XH: () => u, i0: () => d, lE: () => c });
}
