/* Recovered shipped factory. Module 385113.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3005708..3007489
 * Raw property SHA-256: d048db66c4a38be0cc2f7a87d4d00f6027d27396b5f0b8a3ee10bcf414c22e1f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I, e: () => s });
  var i,
    r = n(17928),
    a = n(73153),
    s =
      (((i = {}).NOT_FETCHED = "NOT_FETCHED"),
      (i.FETCHING = "FETCHING"),
      (i.SUCCESS = "SUCCESS"),
      (i.FAILURE = "FAILURE"),
      i);
  let l = [],
    o = {},
    d = {},
    c = "NOT_FETCHED",
    u = [],
    _ = "NOT_FETCHED",
    E = [];
  function A(e) {
    if (0 !== Object.keys(e).length) {
      for (let [t, n] of Object.entries(e)) {
        let e = new Set(n.map((e) => e.config_id)),
          i = o[t]?.filter((t) => !e.has(t.config_id)) ?? [];
        o[t] = [...i, ...n];
      }
      ((o = { ...o }),
        (d = { ...d, ...Object.fromEntries(Object.keys(e).map((e) => [e, "SUCCESS"])) }));
    }
  }
  function h() {
    ((o = {}), (d = {}), (c = "NOT_FETCHED"), (u = []), (_ = "NOT_FETCHED"), (E = []));
  }
  class f extends r.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
      return o[e]?.[0] ?? void 0;
    }
    getConfigs(e) {
      return o[e] ?? l;
    }
    getFetchState(e) {
      return d[e] ?? "NOT_FETCHED";
    }
    getFeaturedFetchState() {
      return c;
    }
    getDeveloperFetchState() {
      return _;
    }
    getAllConfigsByApplication() {
      return o;
    }
    getFeaturedApplicationIds() {
      return u;
    }
    getDeveloperApplicationIds() {
      return E;
    }
  }
  let I = new f(a.h, {
    LOGOUT: h,
    APPLICATION_WIDGET_CONFIG_DEBUG_RESET: h,
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function (e) {
      c = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function (e) {
      ((c = "SUCCESS"), (u = Object.keys(e.configs)), A(e.configs));
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function () {
      c = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function () {
      _ = "FETCHING";
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function (e) {
      ((_ = "SUCCESS"), (E = Object.keys(e.configs)), A(e.configs));
    },
    APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function () {
      _ = "FAILURE";
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function (e) {
      d = { ...d, [e.applicationId]: "FETCHING" };
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
      A({ [e.applicationId]: e.configs });
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function (e) {
      d = { ...d, [e.applicationId]: "FAILURE" };
    },
  });
}
