/* Recovered shipped factory. Module 915968.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8702340..8702939
 * Raw property SHA-256: bde262a653ab665f6a1de9fe6e6970c9112fee16b7557edcbc6b6195a0242f38
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(439372),
    r = n(280450),
    a = n(84948);
  class s extends i.A {
    actions = {
      AUTHENTICATOR_DELETE: this.handleAuthenticatorDelete,
      MFA_WEBAUTHN_CREDENTIALS_LOADED: this.handleWebAuthnCredentialsLoaded,
      CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
    };
    async handleAuthenticatorDelete(e) {
      let { credential: t } = e;
      await a.A.signalUnknownCredential(t);
    }
    async handleWebAuthnCredentialsLoaded(e) {
      let { credentials: t } = e,
        n = r.default.getId();
      await a.A.signalAllAcceptedCredentials(t, n);
    }
    async handleCurrentUserUpdate(e) {
      let { user: t } = e;
      await a.A.signalCurrentUserDetails(t);
    }
  }
  let l = new s();
}
