/* Recovered shipped factory. Module 10716.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2592120..2593990
 * Raw property SHA-256: 2de51fca069d583d5ac5ec0604b9c9c68e329acefdf56b6a870c613c7555eb47
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { $: () => c, A: () => A });
  var i,
    r = n(991690),
    a = n(17928),
    s = n(73153),
    l = n(885386);
  function o() {
    return {
      lastUsedObject: {},
      useActivityUrlOverride: !1,
      activityUrlOverride: null,
      filter: "",
    };
  }
  let d = o();
  var c =
    (((i = {}).INITIALIZED = "INITIALIZED"),
    (i.LOADING = "LOADING"),
    (i.LOADED = "LOADED"),
    (i.ERROR = "ERROR"),
    i);
  let u = "INITIALIZED",
    _ = [];
  class E extends a.Ay.PersistedStore {
    static displayName = "DeveloperActivityShelfStore";
    static persistKey = "DeveloperActivityShelfStore";
    initialize(e) {
      d = { ...o(), ...(e ?? {}) };
    }
    static migrations = [(e) => (delete e.isEnabled, { ...e })];
    getState() {
      return d;
    }
    getIsEnabled() {
      return l.Q_.getSetting() && _.length > 0;
    }
    getLastUsedObject() {
      return d.lastUsedObject;
    }
    getUseActivityUrlOverride() {
      return this.getIsEnabled() && d.useActivityUrlOverride;
    }
    getActivityUrlOverride() {
      return this.getIsEnabled() ? d.activityUrlOverride : null;
    }
    getFetchState() {
      return u;
    }
    getFilter() {
      return this.getIsEnabled() ? d.filter : "";
    }
    getDeveloperShelfItems() {
      return this.getIsEnabled() ? _ : [];
    }
    inDevModeForApplication(e) {
      return this.getIsEnabled() && null != _.find((t) => t.id === e);
    }
  }
  let A = new E(s.h, {
    LOGOUT: function () {
      ((d = o()), (u = "INITIALIZED"), (_ = []));
    },
    DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function () {
      d.useActivityUrlOverride = !d.useActivityUrlOverride;
    },
    DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function (e) {
      let { activityUrlOverride: t } = e;
      d.activityUrlOverride = t;
    },
    DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function (e) {
      let { applicationId: t, timestamp: n } = e;
      if (null == _.find((e) => e.id === t)) return !1;
      d.lastUsedObject[t] = n;
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
      u = "LOADING";
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function (e) {
      let { applications: t } = e;
      ((u = "LOADED"), (_ = t.filter((e) => e.supportsEmbeddedSurface(r.U.MAIN))));
    },
    DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function (e) {
      let { type: t } = e;
      u = "ERROR";
    },
    DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function (e) {
      let { filter: t } = e;
      d.filter = t;
    },
    USER_SETTINGS_PROTO_UPDATE() {},
  });
}
