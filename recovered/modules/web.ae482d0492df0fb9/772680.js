/* Recovered shipped factory. Module 772680.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2904619..2906034
 * Raw property SHA-256: 2590fd93b7494a61cd82856b9f0a3de14483bcf1a374c461f5016599e1917fa3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => _, RI: () => c });
  var i = n(636537),
    r = n(439372),
    a = n(733110),
    s = n(927813),
    l = n(878118),
    o = n(652215);
  let d = 20 * s.A.Millis.MINUTE;
  async function c(e) {
    let { applicationId: t, onSuccess: n, onError: r } = e;
    try {
      (await i.Bo.post({
        url: o.Rsh.OAUTH2_ACCOUNT_LINKING_ACHIEVEMENT,
        body: { application_id: t },
        rejectWithError: !0,
      }),
        n?.());
    } catch (e) {
      r?.(e);
    }
  }
  class u extends r.A {
    static displayName = "AccountLinkManager";
    actions = {
      OAUTH2_TOKEN_CREATE: (e) => this.handleOAuth2TokenCreate(e),
      USER_AUTHORIZED_APPS_UPDATE: () => this.handleAuthorizedAppsUpdate(),
      APP_STATE_UPDATE: (e) => this.handleAppStateUpdate(e),
      ACCOUNT_LINK_AUTHORIZATION_COMPLETED: (e) => this.handleAccountLinkAuthorizationCompleted(e),
    };
    evaluatePending() {
      let e = l.A.getPendingAuthorizations();
      if (0 === e.size) return;
      let t = Date.now();
      for (let [n, i] of e) {
        if (t - i.startedAt > d) {
          (l.A.deletePendingAuthorization(n),
            i.accountLinkCallbacks?.onError?.("Account link authorization timed out"));
          continue;
        }
        null != a.default.getNewestTokenForApplication(n) &&
          (i.accountLinkCallbacks?.onSuccess?.(), l.A.deletePendingAuthorization(n));
      }
    }
    handleOAuth2TokenCreate(e) {
      l.A.getPendingAuthorizations().has(e.application.id) && this.evaluatePending();
    }
    handleAuthorizedAppsUpdate() {
      this.evaluatePending();
    }
    handleAccountLinkAuthorizationCompleted(e) {
      l.A.getPendingAuthorizations().has(e.applicationId) && this.evaluatePending();
    }
    handleAppStateUpdate(e) {
      e.state === o.g6G.ACTIVE && this.evaluatePending();
    }
  }
  let _ = new u();
}
