/* Recovered shipped factory. Module 31048.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3652755..3652960
 * Raw property SHA-256: 3ee43408963fbf47ead9c3f46f852503c3ac1009d8b951c0fba414e077e9a126
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { l: () => r, p: () => a });
  var i = n(192820);
  function r() {
    return i.Ay.getMediaEngine().getSystemSteadyClockNowMs() ?? Date.now();
  }
  function a(e) {
    return Math.round(Date.now() + (e ?? 0) - r());
  }
}
