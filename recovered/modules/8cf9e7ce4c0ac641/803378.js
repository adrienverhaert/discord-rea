/* Recovered shipped factory. Module 803378.
 * Source: recovered/web/assets/8cf9e7ce4c0ac641.js
 * UTF-16 property offsets: 4736..6418
 * Raw property SHA-256: 08e610d030c1f20f322d1997628e00074d8fe260df7c8e83fa833b0353427d36
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  let i, l, s;
  n.d(t, { A: () => x });
  var a = n(17928),
    r = n(73153),
    o = n(168186),
    c = n(200662);
  let d = {},
    u = {},
    m = !1;
  function g() {
    ((i = void 0), (d = {}), (u = {}), (l = void 0), (s = void 0), (m = !1));
  }
  class h extends a.Ay.Store {
    static displayName = "IntegrationPermissionStore";
    getApplicationPermissions() {
      return d;
    }
    getCommands() {
      return u;
    }
    getCommand(e) {
      return u?.[e];
    }
    getEditedApplication() {
      return l;
    }
    getEditedCommand() {
      return s;
    }
    isUnavailable() {
      return m;
    }
    getApplicationId() {
      return i;
    }
  }
  let x = new h(r.h, {
    LOGOUT: g,
    INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
      let { applicationId: t } = e;
      if (t !== i) return !1;
      m = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_CLEAR: g,
    INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
      let { applicationId: t } = e;
      (g(), (i = t));
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
      let { applicationId: t, commandId: n, permissions: l } = e;
      if (t !== i) return !1;
      if (n === i) {
        d = (0, c.UZ)(l);
        return;
      }
      let s = u[n];
      if (null == s) return !1;
      u[n] = { ...s, permissions: (0, c.UZ)(l) };
    },
    INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
      let { applicationId: t, commandId: n, permissions: a } = e;
      if (t !== i) return !1;
      n === i ? (l = a) : (s = { commandId: n, permissions: a });
    },
    INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
      let { commandId: t } = e;
      null == t ? (l = void 0) : (s = void 0);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
      let { applicationId: t } = e;
      if (t !== i) return !1;
      m = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
      let { applicationId: t, commands: n, permissions: l } = e;
      if (t !== i) return !1;
      let s = Object.fromEntries(l.map((e) => [e.id, e.permissions])),
        a = {};
      for (let e of n)
        if (e.application_id === i) {
          let t = (0, o.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }),
            n = s[e.id];
          (null != n && (t.permissions = (0, c.UZ)(n)), (a[e.id] = t));
        }
      u = a;
    },
  });
}
