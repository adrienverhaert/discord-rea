/* Recovered shipped factory. Module 654265.
 * Source: recovered/web/assets/a7facbf97c681538.js
 * UTF-16 property offsets: 767..1500
 * Raw property SHA-256: 71fe80e25ee438834eb28a42328ec51d0eb5608745584f72fb0de763e61226da
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => m });
  var i = n(582128),
    l = n(17928),
    s = n(71393),
    a = n(576705),
    r = n(935208),
    o = n(624458),
    c = n(844944),
    d = n(212455),
    u = n(652215);
  function m(e) {
    let [t, n] = i.useState(!1),
      [m, x] = i.useState(!1),
      h = r.default.cast(e),
      { joinRequest: g, guild: f } = (0, l.cf)([c.A, d.A, s.A, a.A], () => {
        let e = c.A.getRequest(h);
        if (null == e) return { joinRequest: null, isModmin: !1, guild: null };
        let t = s.A.getGuild(e.guildId) ?? d.A.getJoinRequestGuild(e.guildId);
        return { joinRequest: e, isModmin: null != t && a.A.can(u.xBc.KICK_MEMBERS, t), guild: t };
      });
    return (
      i.useEffect(() => {
        null != f || m || (x(!0), o.A.fetchRequestToJoinGuilds());
      }, [f, m]),
      i.useEffect(() => {
        null == g &&
          (n(!0),
          o.A.fetchJoinRequestForInterview(h).finally(() => {
            n(!1);
          }));
      }, [g, h]),
      { loading: t, joinRequest: g, joinRequestGuild: f }
    );
  }
}
