/* Recovered shipped factory. Module 976910.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8702940..8703921
 * Raw property SHA-256: 9ae0049963164edd1e1561c80d71eedeea950a89856d9644f07a0d93d4313e04
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(73153),
    a = n(155718);
  let s = !1,
    l = [],
    o = !1;
  class d extends i.Ay.Store {
    static displayName = "WebAuthnStore";
    hasFetchedCredentials() {
      return s;
    }
    get hasCredentials() {
      return l.length > 0;
    }
    getCredentials() {
      return l;
    }
    hasPendingRegisterTrigger() {
      return o;
    }
  }
  let c = new d(r.h, {
    LOGOUT: function () {
      ((l = []), (s = !1), (o = !1));
    },
    MFA_WEBAUTHN_CREDENTIALS_LOADED: function (e) {
      let { credentials: t } = e,
        n = !1;
      return (l !== t && ((l = t), (n = !0)), s || ((s = !0), (n = !0)), n);
    },
    AUTHENTICATOR_CREATE: function (e) {
      let { credential: t } = e;
      return t.type !== a.Wq.WEBAUTHN
        ? (t.type, !1)
        : void 0 === l.find((e) => e.id === t.id) && void (l = [...l, t]);
    },
    AUTHENTICATOR_UPDATE: function (e) {
      let { credential: t } = e;
      if (t.type !== a.Wq.WEBAUTHN) return (t.type, !1);
      l = l.map((e) => (e.id === t.id ? t : e));
    },
    AUTHENTICATOR_DELETE: function (e) {
      let { credential: t } = e;
      if (t.type !== a.Wq.WEBAUTHN) return (t.type, !1);
      l = l.filter((e) => e.id !== t.id);
    },
    WEBAUTHN_TRIGGER_REGISTER: function () {
      if (o) return !1;
      o = !0;
    },
    WEBAUTHN_CLEAR_REGISTER_TRIGGER: function () {
      if (!o) return !1;
      o = !1;
    },
  });
}
