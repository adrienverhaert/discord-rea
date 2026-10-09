/* Recovered shipped factory. Module 81400.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5041126..5042639
 * Raw property SHA-256: d40161b3d223de96702df55cec0ddf1ac06b2156430a1c4733c4689006402cd5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { EC: () => m, j8: () => g, uZ: () => T }), n(938796));
  var i = n(582128),
    r = n(702841),
    a = n(159001),
    s = n(507553),
    l = n(591179),
    o = n(780964),
    d = n(280450),
    c = n(696451),
    u = n(71393),
    _ = n(576705),
    E = n(967198),
    A = n(229527),
    h = n(652215),
    f = n(340837),
    I = n(355097),
    p = n(660183);
  function T(e) {
    return (0, r.bG)(
      [d.default, c.Ay],
      () => {
        if (null == e) return !1;
        let t = d.default.getId();
        return (0, A.TR)(c.Ay.getMember(e, t));
      },
      [e],
    );
  }
  function m(e) {
    return (0, r.cf)(
      [d.default, c.Ay, E.A, u.A],
      () => {
        let t = { nick: void 0, bio: void 0 },
          n = E.A.getGuildId(),
          i = e ?? n,
          r = u.A.getGuild(i);
        if (null == r || null == i) return t;
        let a = d.default.getId(),
          s = c.Ay.getMember(i, a),
          l = (0, A.wR)(s?.flags);
        return (
          0 === l.size ||
            (l.has(f.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
              (null == e
                ? (t.nick = [p.intl.formatToPlainString(p.t.WBUh3O, { guildName: r.name ?? "" })])
                : (t.nick = [p.intl.string(p.t.EPZCrM)])),
            l.has(f.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [p.intl.string(p.t.dZh1vz)])),
          t
        );
      },
      [e],
    );
  }
  function g(e) {
    let { guildId: t, scrollPosition: c, analyticsLocations: E } = e,
      A = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]),
      f = (0, r.bG)([_.A], () => null != A && _.A.can(h.xBc.CHANGE_NICKNAME, A), [A]),
      p = (0, l.X)("AutomodQuarantineUtils");
    return [
      i.useCallback(() => {
        if (null == A) return;
        h.nc_.PROFILE_CUSTOMIZATION;
        let e = I.Eq.GUILD;
        if ((f ? (0, a.V2)(A.id) : (e = I.Eq.USER_PROFILE), p)) {
          let { openUserProfileModal: e } = n(402860);
          e({ userId: d.default.getId(), guildId: A.id, sourceAnalyticsLocations: E });
        } else {
          let { openUserSettings: t } = n(766075);
          (s.A.setState({ subsection: e, scrollPosition: c }),
            t(o.X.PROFILE_PANEL, { analyticsLocations: E }));
        }
      }, [f, c, E, A, p]),
      f,
    ];
  }
}
