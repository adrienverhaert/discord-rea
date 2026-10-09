/* Recovered shipped factory. Module 134861.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8878097..8879021
 * Raw property SHA-256: 680ea2488b29fbaa14f09e20c8d0be7ebd4f0c8e6f71bdc557fb0e2c3ffc5d22
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153);
  let l = {};
  class o extends a.Ay.Store {
    static displayName = "ConnectedAppsStore";
    isConnected(e) {
      return null != l[e];
    }
    isChildConnected(e) {
      return null != e && Object.values(l).some((t) => t.parentId === e);
    }
    get connections() {
      return r().values(l);
    }
    getApplication(e) {
      return l[e];
    }
    getAllConnections() {
      return l;
    }
  }
  let d = new o(s.h, {
    OVERLAY_INITIALIZE: function (e) {
      let { connectedApps: t } = e;
      l = { ...t };
    },
    RPC_APP_CONNECTED: function (e) {
      let { application: t } = e;
      if (null == t.id) return !1;
      let n = t.id;
      (null == l[n] &&
        (l[n] = {
          count: 0,
          id: t.id,
          parentId: t.parentId,
          name: t.name,
          icon: t.icon,
          coverImage: t.coverImage,
          authenticated: !1,
        }),
        l[n].count++);
    },
    RPC_APP_AUTHENTICATED: function (e) {
      let { application: t } = e;
      null != t.id && null != l[t.id] && (l[t.id].authenticated = !0);
    },
    RPC_APP_DISCONNECTED: function (e) {
      let { application: t } = e;
      null != t.id && null != l[t.id] && (l[t.id].count--, 0 === l[t.id].count && delete l[t.id]);
    },
  });
}
