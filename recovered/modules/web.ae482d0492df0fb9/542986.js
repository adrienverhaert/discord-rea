/* Recovered shipped factory. Module 542986.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7213696..7214378
 * Raw property SHA-256: f4bdd64f9102f77fdd0ea215a6f75fa2793fc980398031d94a5e772470767887
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(73153),
    a = n(66834);
  let s = {},
    l = 0;
  function o(e) {
    return s[e]?.fetchState ?? 0;
  }
  function d() {
    s = {};
  }
  class c extends i.Ay.Store {
    isFetchingFriendsForGuild(e) {
      return 1 === o(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
      0 === o(e) &&
        ((s[e] = { fetchState: 1, foundMembers: 0, notFoundMembers: 0 }),
        (l = t.length),
        a.A.requestMembersById(e, t, !1));
    }
  }
  let u = new c(r.h, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    RELATIONSHIP_ADD: d,
    RELATIONSHIP_REMOVE: d,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
      let t = e.chunks[0],
        { guildId: n } = t;
      1 === o(n) &&
        ((s[n].foundMembers += t.members.length),
        (s[n].notFoundMembers += t.notFound?.length ?? 0),
        s[n].foundMembers + s[n].notFoundMembers >= l && (s[n].fetchState = 2));
    },
  });
}
