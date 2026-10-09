/* Recovered shipped factory. Module 832286.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5019557..5020066
 * Raw property SHA-256: c3b9544d26a2ea34ada994a18a4ad142f4cf1aa67fb792aaf43d424af00f9692
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { y: () => d });
  var i = n(636537),
    r = n(73153),
    a = n(71393),
    s = n(958340),
    l = n(652215);
  let o = new Set();
  async function d(e) {
    if (null == a.A.getGuild(e) && null == s.A.getGuildOrStatus(e) && !o.has(e)) {
      (r.h.dispatch({ type: "BASIC_GUILD_FETCH", guildId: e }), o.add(e));
      try {
        let t = (await i.Bo.get({ url: l.Rsh.GUILD_BASIC(e), rejectWithError: !0 })).body;
        r.h.dispatch({ type: "BASIC_GUILD_FETCH_SUCCESS", guildId: e, guildInfo: t });
      } catch (t) {
        r.h.dispatch({ type: "BASIC_GUILD_FETCH_FAILURE", guildId: e });
      } finally {
        o.delete(e);
      }
    }
  }
}
