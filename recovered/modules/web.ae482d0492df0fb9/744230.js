/* Recovered shipped factory. Module 744230.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4368687..4369042
 * Raw property SHA-256: c4e07ae79a65166631df47d9cba3f43bba4f0388567631bc1d80c3e90f69fbe8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i,
    r =
      (((i = r || {})[(i.PRIMARY_APP_COMMAND_NOT_FOUND = 0)] = "PRIMARY_APP_COMMAND_NOT_FOUND"),
      (i[(i.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED = 1)] =
        "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED"),
      (i[(i.INVALID_CHANNEL = 2)] = "INVALID_CHANNEL"),
      i);
  class a {
    reason;
    detailCode;
    static Reasons = r;
    constructor(e, t) {
      ((this.reason = e), (this.detailCode = t));
    }
  }
}
