/* Recovered shipped factory. Module 997187.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8288324..8288836
 * Raw property SHA-256: 6e018ebd8b8207396fb74b97c52c7ee3297c2f5174ab5614ddd791c610105d89
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153);
  let a = {},
    s = null;
  function l() {
    ((a = {}), (s = null));
  }
  class o extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
      return { categories: a, initialized: s };
    }
  }
  let d = new o(r.h, {
    CONNECTION_OPEN: l,
    LOGOUT: l,
    EMAIL_SETTINGS_FETCH_SUCCESS: function (e) {
      let { settings: t } = e;
      ((a = t.categories), (s = t.initialized));
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function (e) {
      let { settings: t } = e;
      a = t.categories;
    },
    EMAIL_SETTINGS_UPDATE: function (e) {
      let { updates: t } = e;
      a = { ...a, ...t };
    },
  });
}
