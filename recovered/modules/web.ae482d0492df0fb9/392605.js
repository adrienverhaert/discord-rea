/* Recovered shipped factory. Module 392605.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5788226..5789018
 * Raw property SHA-256: 721bb7e68154653bef97732598b5862e829bf9a79f3cef853567e4bf87ff054e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { i: () => c });
  var i = n(73153),
    r = n(976860),
    a = n(696451),
    s = n(317525),
    l = n(71393),
    o = n(652215),
    d = n(746080);
  function c(e, t, n) {
    let c = l.A.getGuild(e);
    if (null != e && null != c)
      switch (t) {
        case "home":
        case "guide":
          u(d.VV.GUILD_HOME);
          break;
        case "browse":
          u(d.VV.CHANNEL_BROWSER);
          break;
        case "customize":
          u(d.VV.CUSTOMIZE_COMMUNITY);
          break;
        case "linked-roles":
          if (null != n) {
            let t = a.Ay.getSelfMember(e);
            if (null == t) return;
            let r = s.A.getRole(e, n);
            null == r || t.roles.includes(r.id)
              ? i.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e })
              : i.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e, role: r });
          } else i.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
      }
    function u(t) {
      null != e &&
        null != c &&
        c.features.has(o.GuildFeatures.COMMUNITY) &&
        (0, r.pX)(o.BVt.CHANNEL(e, t));
    }
  }
}
