/* Recovered shipped factory. Module 642133.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5341593..5342668
 * Raw property SHA-256: f5821a9952d0afc5597502ca5305c3f695dde24e9d1eb6b31a93c60469647ac5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = {},
    s = {};
  class l extends i.Ay.Store {
    static displayName = "GuildRoleMemberCountStore";
    getRoleMemberCount(e) {
      return null != e ? a[e] : null;
    }
    shouldFetch(e) {
      if (null == e) return !1;
      let t = s[e];
      return null == t || Date.now() - t > 12e4;
    }
  }
  let o = new l(r.h, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function (e) {
      let { guildId: t, roleMemberCount: n } = e;
      ((a[t] = n), (s[t] = Date.now()));
    },
    GUILD_ROLE_MEMBER_COUNT_UPDATE: function (e) {
      let { guildId: t, roleId: n, count: i } = e,
        r = a[t];
      if (null == r) return !1;
      r[n] = i;
    },
    GUILD_ROLE_MEMBER_BULK_ADD: function (e) {
      let { guildId: t, roleId: n, added: i } = e,
        r = a[t];
      if (null == r || null == r[n]) return !1;
      let s = Object.keys(i).length;
      r[n] += s;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
      let { guildId: t, roleId: n } = e,
        i = a[t];
      if (null == i || null == i[n]) return !1;
      i[n] = i[n] + 1;
    },
    GUILD_ROLE_MEMBER_REMOVE: function (e) {
      let { guildId: t, roleId: n } = e,
        i = a[t];
      if (null == i || null == i[n]) return !1;
      i[n] = Math.max(i[n] - 1, 0);
    },
    GUILD_ROLE_CREATE: function (e) {
      let { guildId: t, role: n } = e;
      (null == a[t] && (a[t] = {}), (a[t][n.id] = 0));
    },
    GUILD_DELETE: function (e) {
      let { guild: t } = e;
      (delete a[t.id], delete s[t.id]);
    },
  });
}
