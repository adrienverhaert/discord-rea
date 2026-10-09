/* Recovered shipped factory. Module 685073.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5431542..5432607
 * Raw property SHA-256: 5d60f6e6cc716831f0b6c01caf1d4efcf74aaedd9c0824c38f1c381dd451ee98
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Rg: () => u, Wb: () => h, Zo: () => E, gC: () => _, gS: () => A, q0: () => c });
  var i = n(17928),
    r = n(229527),
    a = n(696451),
    s = n(71393),
    l = n(287809),
    o = n(743981),
    d = n(652215);
  function c(e) {
    return e?.profile?.tag != null;
  }
  function u(e) {
    return e.features.has(d.GuildFeatures.GUILD_TAGS);
  }
  function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Sl.SIZE_12;
    if (null == t) return;
    let { CDN_HOST: i } = window.GLOBAL_ENV;
    if (null == i) return;
    let r = o.lv[n];
    return `https://${i}/clan-badges/${e}/${t}.png?size=${r}`;
  }
  function E(e) {
    return null != e && e.identityEnabled
      ? { guildId: e.identityGuildId, tag: e.tag, badge: e.badge }
      : {};
  }
  function A(e) {
    let t = (0, i.bG)([s.A], () => s.A.getGuild(e), [e]);
    return null == e
      ? e
      : null == t
        ? t
        : {
            identityGuildId: t.id,
            identityEnabled: !0,
            tag: t.profile?.tag ?? void 0,
            badge: t.profile?.badge ?? void 0,
          };
  }
  function h(e, t, n) {
    let s = (0, i.bG)([l.default], () => l.default.getUser(e), [e]),
      o = (0, i.bG)(
        [a.Ay],
        () => {
          if (null == t || null == e) return null;
          let n = a.Ay.getMember(t, e);
          return (0, r.TR)(n);
        },
        [t, e],
      ),
      { tag: d, guildId: c } = E(void 0 !== n ? n : s?.primaryGuild);
    return null != c && null != d && !o;
  }
}
