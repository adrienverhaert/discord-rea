/* Recovered shipped factory. Module 879408.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5159008..5159665
 * Raw property SHA-256: 35fe124f78bdda6eb963fd340172165278fab4233a18a1fa482109a395b48600
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153),
    a = n(280450);
  let s = new Set(),
    l = new Set();
  class o extends i.Ay.Store {
    static displayName = "BulkBanStore";
    initialize() {
      this.waitFor(a.default);
    }
    hasPendingBulkBan(e) {
      return s.has(e);
    }
    consumeCompletedBeforeStarted(e, t) {
      let n = `${e}:${t}`;
      return l.delete(n);
    }
  }
  let d = new o(r.h, {
    GUILD_BULK_BAN_STARTED: function (e) {
      s.add(e.guildId);
    },
    GUILD_BULK_BAN_FAILED: function (e) {
      if (!s.has(e.guildId)) return !1;
      s.delete(e.guildId);
    },
    GUILD_BULK_BAN_UPDATE: function (e) {
      if (!s.has(e.guildId)) {
        let t = a.default.getId();
        return (l.add(`${e.guildId}:${t}`), !1);
      }
      s.delete(e.guildId);
    },
    CONNECTION_OPEN: function () {
      (s.clear(), l.clear());
    },
  });
}
