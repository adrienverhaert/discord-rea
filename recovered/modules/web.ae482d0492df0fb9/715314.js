/* Recovered shipped factory. Module 715314.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3032067..3032953
 * Raw property SHA-256: 38505b38b227525855a06050b34f8e7b6192dca0e0e68c06e050a59ece9c2faa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(73153);
  let a = {},
    s = null,
    l = null;
  function o(e, t) {
    null == t ? e in a && delete a[e] : null != e && (a[e] = t);
  }
  function d(e) {
    let { user: t } = e;
    l = t.id;
  }
  class c extends i.Ay.PersistedStore {
    static displayName = "LoginRequiredActionStore";
    static persistKey = "LoginRequiredActionStore";
    initialize(e) {
      null != e && (a = e);
    }
    requiredActions(e) {
      return a[e] ?? null;
    }
    requiredActionsIncludes(e, t) {
      let n = this.requiredActions(e);
      return null != n && t.reduce((e, t) => e || n.includes(t), !1);
    }
    wasLoginAttemptedInSession(e) {
      return s === e;
    }
    getState() {
      return a;
    }
  }
  let u = new c(r.h, {
    LOGIN_ATTEMPTED: function (e) {
      let { required_actions: t, user_id: n } = e;
      o((s = n), t);
    },
    CONNECTION_OPEN: d,
    CURRENT_USER_UPDATE: d,
    LOGOUT: function (e) {
      let { isSwitchingAccount: t } = e;
      t || null == l || o(l, null);
    },
    PASSWORD_UPDATED: function (e) {
      let { userId: t } = e;
      o(t, null);
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
      let { userId: t } = e;
      o(t, null);
    },
  });
}
