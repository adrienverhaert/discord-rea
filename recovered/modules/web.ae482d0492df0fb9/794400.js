/* Recovered shipped factory. Module 794400.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7228425..7228807
 * Raw property SHA-256: 01b72af7daf57846f2e7465bf1130219895da50b6ce0f60d87c23238a78ce361
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { v: () => i });
  class i extends Error {
    extraSentryInformation;
    errorHandlingBehavior;
    skipReportingToSentry;
    constructor({
      message: e,
      extraSentryInformation: t = null,
      errorHandlingBehavior: n = "close-and-alert",
      skipReportingToSentry: i = !1,
    }) {
      (super(e),
        (this.name = new.target.name),
        (this.extraSentryInformation = t),
        (this.errorHandlingBehavior = n),
        (this.skipReportingToSentry = i));
    }
  }
}
