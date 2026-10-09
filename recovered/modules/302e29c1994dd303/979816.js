/* Recovered shipped factory. Module 979816.
 * Source: recovered/web/assets/302e29c1994dd303.js
 * UTF-16 property offsets: 94..1049
 * Raw property SHA-256: f3251e7e5f43c1d3ad6d3772d494eb1d7e24c9f1f0b4b33f6e036d86ff7c19cd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, u, e) {
  e.d(u, {
    AH: () => G,
    DG: () => h,
    XO: () => f,
    _x: () => o,
    hX: () => c,
    iI: () => d,
    i_: () => a,
  });
  var n = e(17928),
    r = e(71393),
    i = e(576705),
    l = e(243277),
    A = e(652215);
  function s(t) {
    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
      e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
      n = u.getGuild(t);
    return null != n && e.can(A.xBc.MANAGE_GUILD, n);
  }
  function a(t) {
    return null != t && s(t);
  }
  function c(t) {
    return s(t);
  }
  function d(t) {
    return (0, n.bG)([r.A, i.A], () => s(t, r.A, i.A), [t]);
  }
  function G(t) {
    let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return u.getGuild(t)?.features.has(A.GuildFeatures.COMMUNITY) ?? !1;
  }
  function h(t) {
    return (0, n.bG)([r.A], () => G(t, r.A), [t]);
  }
  function o(t, u) {
    return (0, n.bG)(
      [r.A],
      () => {
        if (u !== l.uh.MENTION_SPAM) return !1;
        let e = r.A.getGuild(t);
        return null != e && e.features.has(A.GuildFeatures.COMMUNITY);
      },
      [t, u],
    );
  }
  function f(t) {
    return (0, n.bG)(
      [r.A],
      () => {
        let u = r.A.getGuild(t);
        return u?.features.has(A.GuildFeatures.COMMUNITY) || !1;
      },
      [t],
    );
  }
}
