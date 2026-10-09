/* Recovered shipped factory. Module 647106.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8703922..8704581
 * Raw property SHA-256: 3d4a6315331a79163884fe06fb0b61e86a39f9d27668616255a9d80e60a01d45
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(439372),
    r = n(280450),
    a = n(287809),
    s = n(917136),
    l = n(976910),
    o = n(652215);
  let d = !1;
  class c extends i.A {
    actions = {
      POST_CONNECTION_OPEN: this.handlePossibleCredentialFetch,
      LOGIN_RESET: this.handleLogout,
      LOGOUT: this.handleLogout,
    };
    stores = new Map()
      .set(r.default, this.handlePossibleCredentialFetch)
      .set(a.default, this.handlePossibleCredentialFetch)
      .set(l.A, this.handlePossibleCredentialFetch);
    handlePossibleCredentialFetch() {
      if (!(d || __OVERLAY__) && r.default.getLoginStatus() === o.aUe.NONE) {
        if (l.A.hasFetchedCredentials()) {
          d = !0;
          return;
        }
        void 0 !== a.default.getCurrentUser() && ((d = !0), (0, s.JQ)());
      }
    }
    handleLogout() {
      d = !1;
    }
  }
  let u = new c();
}
