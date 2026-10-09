/* Recovered shipped factory. Module 982832.
 * Source: recovered/web/assets/b7ac53f87c6f05ec.js
 * UTF-16 property offsets: 33513..34349
 * Raw property SHA-256: bec3346db39511257052dde99a29ebb6121e41f034e0eb44df6fc2e1061561dd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => m });
  var i = n(17928),
    l = n(73153),
    s = n(555337),
    r = n(660496),
    a = n(652215);
  let o = r.C.OVERVIEW,
    d = null;
  function c(e) {
    let { subsection: t } = e;
    switch (t) {
      case a.nd0.SAFETY_AUTOMOD:
        o = r.C.AUTOMOD;
        break;
      case a.nd0.SAFETY_DM_AND_SPAM_PROTECTION:
        o = r.C.DM_AND_SPAM_PROTECTION;
        break;
      case a.nd0.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
        o = r.C.CAPTCHA_AND_RAID_PROTECTION;
        break;
      case a.nd0.SAFETY_PERMISSIONS:
        o = r.C.PERMISSIONS;
        break;
      case a.nd0.SAFETY_OVERVIEW:
      default:
        o = r.C.OVERVIEW;
    }
  }
  class u extends i.Ay.Store {
    initialize() {
      this.waitFor(s.A);
    }
    static displayName = "GuildSettingsSafetyStore";
    getCurrentPage() {
      return o;
    }
  }
  let m = new u(l.h, {
    GUILD_SETTINGS_INIT: function () {
      if (s.A.getGuildId() === d) return !1;
      d = s.A.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: c,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: c,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
      let { page: t } = e;
      o = t;
    },
  });
}
