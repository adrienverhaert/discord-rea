/* Recovered shipped factory. Module 552143.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5897102..5897515
 * Raw property SHA-256: 1f2980a98264ca1ce0be6dcfb09f115e5186148800bc1e32d70ba900d6374a45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(451988),
    r = n(73153),
    a = n(439372);
  class s extends a.A {
    clearErrorTimeout = new i.Ep();
    actions = { MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError() };
    _terminate() {
      this.clearErrorTimeout.stop();
    }
    handleNoiseCancellationError = () => {
      this.clearErrorTimeout.start(3e3, () =>
        r.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET" }),
      );
    };
  }
  let l = new s();
}
