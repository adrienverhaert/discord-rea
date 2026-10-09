/* Recovered shipped factory. Module 423189.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1177959..1178325
 * Raw property SHA-256: 3efa8d490799bbaae1105331a44292f2f9ecb536a5e67e6d15433490c01f1a8c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { P: () => o, Y: () => i });
  var n = r(644255);
  function i(e) {
    return (
      ("" === e.pointerType && !!e.isTrusted) ||
      ((0, n.m0)() && e.pointerType
        ? "click" === e.type && 1 === e.buttons
        : 0 === e.detail && !e.pointerType)
    );
  }
  function o(e) {
    return (
      (!(0, n.m0)() && 0 === e.width && 0 === e.height) ||
      ((0, n.m0)() &&
        1 === e.width &&
        1 === e.height &&
        0 === e.pressure &&
        0 === e.detail &&
        "mouse" === e.pointerType)
    );
  }
}
