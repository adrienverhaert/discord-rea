/* Recovered shipped factory. Module 958340.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5020067..5020640
 * Raw property SHA-256: 2d7606907da52709b73a0c1783db795342119aee66f49af3a64c569c7f335fe6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = 0,
    s = {};
  class l extends i.Ay.Store {
    static displayName = "BasicGuildStore";
    getGuild(e) {
      let t = s[e];
      if (null != t && !("type" in t)) return t;
    }
    isGuildFetching(e) {
      let t = s[e];
      return null != t && "type" in t && "loading" === t.type;
    }
    getGuildOrStatus(e) {
      return s[e];
    }
    getVersion() {
      return a;
    }
  }
  let o = new l(r.h, {
    BASIC_GUILD_FETCH: function (e) {
      return ((s[e.guildId] = { type: "loading" }), !1);
    },
    BASIC_GUILD_FETCH_SUCCESS: function (e) {
      ((s[e.guildId] = e.guildInfo), a++);
    },
    BASIC_GUILD_FETCH_FAILURE: function (e) {
      return ((s[e.guildId] = { type: "failed" }), !1);
    },
  });
}
