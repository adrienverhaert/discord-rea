/* Recovered shipped factory. Module 4274.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9592222..9593784
 * Raw property SHA-256: 7b836ac7b9177e9c3d47f4a4e34a7311d63c9790c3b8fcb26d19079713e9cd39
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { g: () => o, s: () => d });
  var i = n(287809),
    r = n(975571),
    a = n(158045),
    s = n(652215),
    l = n(660183);
  function o(e) {
    switch (e) {
      case s.t02.TOO_MANY_USER_GUILDS:
        let t = i.default.getCurrentUser(),
          n = a.Ay.canUseIncreasedGuildCap(t) || t?.isStaff() ? s.cZu : s.qlD;
        return {
          title: l.intl.formatToPlainString(l.t["ttJ/hj"], { quantity: n }),
          description: l.intl.string(l.t.iLyuDO),
        };
      case s.t02.GUILD_AT_CAPACITY:
        return { title: l.intl.string(l.t.ZZlox4), description: l.intl.string(l.t.ZUEGFn) };
      case s.t02.GUILD_JOIN_INVITE_LIMITED_ACCESS:
        return { title: l.intl.string(l.t.kJwpBW), description: l.intl.string(l.t.ZUEGFn) };
      case s.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED:
        return { title: l.intl.string(l.t["u/xsK9"]), description: l.intl.string(l.t.SxY4IW) };
      case s.t02.UNDER_MINIMUM_AGE:
        return { title: l.intl.string(l.t["2yTd7D"]), description: l.intl.string(l.t.vRw5lm) };
      case s.t02.AGE_GROUP_UNVERIFIED:
        return { title: l.intl.string(l.t.TCXgZL), description: l.intl.string(l.t["8Ow7Xi"]) };
      default:
        return null;
    }
  }
  function d(e) {
    switch (e) {
      case s.t02.TOO_MANY_USER_GUILDS:
        return l.intl.string(l.t.iLyuDO);
      case s.t02.GUILD_AT_CAPACITY:
        return l.intl.string(l.t.M6unNJ);
      case s.t02.INVALID_COUNTRY_CODE:
        return l.intl.string(l.t.sRJGR1);
      case s.t02.INVALID_CANNOT_FRIEND_SELF:
        return l.intl.string(l.t["mY2R+F"]);
      case s.t02.INVITES_DISABLED:
        return l.intl.format(l.t.RXSeLl, { articleLink: r.A.getArticleURL(s.MVz.INVITE_DISABLED) });
      case s.t02.UNDER_MINIMUM_AGE:
        return l.intl.string(l.t.vRw5lm);
      case s.t02.AGE_GROUP_UNVERIFIED:
        return l.intl.string(l.t["8Ow7Xi"]);
      default:
        return l.intl.string(l.t.dDZRdy);
    }
  }
}
