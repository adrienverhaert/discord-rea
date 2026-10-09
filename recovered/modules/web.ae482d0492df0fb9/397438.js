/* Recovered shipped factory. Module 397438.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8236037..8237115
 * Raw property SHA-256: 512646d86053d9cb1393f4ee9fc1bd354f27197a739a09fcf19c78c47025af68
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(17928),
    r = n(506774),
    a = n(73153),
    s = n(617617);
  let l = {},
    o = {};
  function d() {
    let e = s.A.settings;
    return {
      gifAutoPlay: e.textAndImages?.gifAutoPlay?.value,
      animateEmoji: e.textAndImages?.animateEmoji?.value,
      animateStickers: e.textAndImages?.animateStickers?.value,
    };
  }
  function c() {
    return ((o = d()), !1);
  }
  class u extends i.Ay.PersistedStore {
    static displayName = "UserSettingsOverridesStore";
    static persistKey = "UserSettingsOverridesStore";
    static migrations = [
      () => {
        let e = r.w.get("UserSettingsStoreOverrides") ?? {};
        return (r.w.remove("UserSettingsStoreOverrides"), e);
      },
    ];
    initialize(e) {
      ((l = e ?? {}), this.syncWith([s.A], c));
    }
    getState() {
      return l;
    }
    getAppliedOverrideReasonKey(e) {
      return l[e]?.reasonKey;
    }
    getOverride(e) {
      return l[e];
    }
  }
  let _ = new u(a.h, {
    USER_SETTINGS_PROTO_UPDATE: function () {
      let e = d(),
        t = !1;
      for (let n in e) e[n] !== o[n] && (delete l[n], (t = !0));
      return t;
    },
    USER_SETTINGS_OVERRIDE_APPLY: function (e) {
      let { settings: t } = e;
      l = { ...l, ...t };
    },
    USER_SETTINGS_OVERRIDE_CLEAR: function (e) {
      let { settings: t } = e;
      for (let e of t) delete l[e];
    },
    LOGOUT: function () {
      l = {};
    },
    LOGIN_SUCCESS: function () {
      l = {};
    },
  });
}
