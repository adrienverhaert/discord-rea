/* Recovered shipped factory. Module 878118.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2906035..2906732
 * Raw property SHA-256: 34f5c8f7fa818d4fe98be8a7fc286ba1cffebf8e6cc1c22cd638418482f63a78
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153),
    a = n(733110);
  let s = new Map(),
    l = new Set();
  class o extends i.Ay.Store {
    initialize() {
      this.waitFor(a.default);
    }
    static displayName = "AccountLinkStore";
    getPendingAuthorizations() {
      return s;
    }
    deletePendingAuthorization(e) {
      s.delete(e);
    }
    getGloballyDisabledAuthorizationFlows() {
      return l;
    }
  }
  let d = new o(r.h, {
    ACCOUNT_LINK_AUTHORIZATION_STARTED: function (e) {
      null != a.default.getNewestTokenForApplication(e.applicationId) ||
        (null != e.accountLinkCallbacks &&
          s.set(e.applicationId, {
            applicationId: e.applicationId,
            startedAt: Date.now(),
            accountLinkCallbacks: e.accountLinkCallbacks,
          }));
    },
    ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS: function (e) {
      l = new Set(e.flows);
    },
  });
}
