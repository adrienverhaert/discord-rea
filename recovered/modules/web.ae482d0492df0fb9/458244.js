/* Recovered shipped factory. Module 458244.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4928703..4929474
 * Raw property SHA-256: d7e6282ef31aa2cb02cec17bf3e7abe7883c8042cf184c65f3d797efdd55fd26
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153),
    a = n(280450);
  let s = {};
  class l extends i.Ay.PersistedStore {
    static displayName = "DerivedQosDataStore";
    static persistKey = "DerivedQosDataStore";
    initialize(e) {
      (this.waitFor(a.default), (s = e ?? {}));
    }
    getState() {
      return s;
    }
    getForCurrentUser() {
      return s[a.default.getId()]?.data;
    }
    getForUser(e) {
      return s[e]?.data;
    }
  }
  let o = new l(r.h, {
    CONNECTION_OPEN: function (e) {
      return null == e.qosToken
        ? (e.user.id, null != s[e.user.id] && (delete s[e.user.id], !0))
        : (e.user.id,
          e.qosToken,
          s[e.user.id]?.data !== e.qosToken &&
            void (s[e.user.id] = { data: e.qosToken, updatedAt: Date.now() }));
    },
    LOGOUT: function (e) {
      if (e.isSwitchingAccount || null == e.userId) return !1;
      (delete s[e.userId], e.userId);
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
      (delete s[e.userId], e.userId);
    },
  });
}
