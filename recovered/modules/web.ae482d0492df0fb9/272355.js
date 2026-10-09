/* Recovered shipped factory. Module 272355.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2323279..2323582
 * Raw property SHA-256: ab5a91d9755189f6abdb7abe57052c7890628f006cf2fd76dfdbe53261ba70e1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => i }), n(423034));
  class i {
    isInitialized = !1;
    initialize() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      this.isInitialized || ((this.isInitialized = !0), this._initialize(...t));
    }
    terminate() {
      this.isInitialized && ((this.isInitialized = !1), this._terminate());
    }
  }
}
