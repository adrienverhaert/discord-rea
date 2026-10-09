/* Recovered shipped factory. Module 888363.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3968923..3969250
 * Raw property SHA-256: 1ff52ecb94a5c7c76665d4022d85dfc4bd2725b0d1a52b9dd85eb8c289794802
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => s });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  function s() {
    return i.Bo.get({ url: a.Rsh.CONNECTIONS, oldFormErrors: !0, rejectWithError: !0 }).then(
      (e) => r.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: e.body }),
      () => r.h.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: !0, accounts: [] }),
    );
  }
}
