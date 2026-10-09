/* Recovered shipped factory. Module 884868.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3921038..3921422
 * Raw property SHA-256: ab404c1fe6b3b4fc0d13e05a966c63470b0f7c6c21ae32320c92b8c76709a971
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t, n) {
    return "object" == typeof e && null != e && e.type === t && e.id === n;
  }
  n.d(t, { YX: () => i, d5: () => a, fq: () => r });
  class r extends Error {
    constructor(e, t) {
      (super(`preview frame did not answer ${e} within ${t}ms`),
        (this.name = "PreviewFrameCallTimeout"));
    }
  }
  function a(e) {
    let t = e.timeoutMs;
    return (
      ("number" == typeof t && isFinite(t) && t > 0 ? Math.min(Math.floor(t), 2e4) : 2e4) + 4e3
    );
  }
}
