/* Recovered shipped factory. Module 440976.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7314159..7314783
 * Raw property SHA-256: b18cfc3b8ae39516a97f01b571cde8ccf9f6c2c57d57564c2390d07c7123070d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => l }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162));
  var i = n(17928),
    r = n(73153);
  let a = new Map();
  class s extends i.Ay.Store {
    static displayName = "TransientKeyStore";
    getUsers() {
      return a;
    }
    isKeyVerified(e, t) {
      let n = a.get(e);
      if (null == t || null == n || n.length !== t.length) return !1;
      for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
      return !0;
    }
  }
  let l = new s(r.h, {
    CONNECTION_OPEN: function () {
      a.clear();
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
      let { userId: t, key: n } = e,
        i = new Uint8Array(n);
      a.set(t, i);
    },
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
      let { userId: t } = e;
      return a.delete(t);
    },
  });
}
