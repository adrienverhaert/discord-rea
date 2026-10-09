/* Recovered shipped factory. Module 161518.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4395427..4396169
 * Raw property SHA-256: 4bb6eed90511f43e51d4031857df12601a71b99389406da9ff0bc24cfc612bd4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => d }), n(321073));
  var i = n(357758),
    r = n(17928),
    a = n(73153);
  let s = new Map(),
    l = new Map();
  class o extends r.Ay.Store {
    static displayName = "AVErrorStore";
    hasActiveErrorOfType(e) {
      return (l.get(e) ?? []).length > 0;
    }
    getActiveErrors() {
      return (s instanceof Map || (s = new Map()), s);
    }
    getActiveErrorsOfType(e) {
      let t = [],
        n = l.get(e);
      if (null == n) return t;
      for (let i of n) {
        let n = s.get(i);
        null != n && n.type === e && t.push(n);
      }
      return t;
    }
  }
  let d = new o(a.h, {
    ACTIVE_AV_ERRORS_CHANGED: function (e) {
      let { activeErrors: t } = e;
      if (__OVERLAY__ || !(t instanceof Map)) return !1;
      s instanceof Map || (s = new Map());
      let n = new Set(t.keys()),
        r = new Set(s.keys());
      if ((0, i._)(n, r)) return !1;
      for (let [e, n] of ((s = t), (l = new Map()), s.entries())) {
        let t = l.get(n.type) ?? [];
        (t.push(e), l.set(n.type, t));
      }
    },
  });
}
