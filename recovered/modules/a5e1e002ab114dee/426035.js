/* Recovered shipped factory. Module 426035.
 * Source: recovered/web/assets/a5e1e002ab114dee.js
 * UTF-16 property offsets: 5806..6545
 * Raw property SHA-256: 6a093e8c984c027a47571db257f278d09431169675cd46b5a9fa6b9debd55b8a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { AS: () => c, Du: () => a, kF: () => s, xI: () => E });
  var i = n(587895),
    r = n(321191),
    l = n(808728),
    _ = n(71393),
    u = n(164892),
    o = n(246338);
  function a(t) {
    return i.A.getApplication(t.application_id)?.bot?.id ?? t.application_id;
  }
  function c(t, e) {
    if (null == e) return null;
    let n = r.A.getMutualGuilds(a(t));
    return null == n
      ? null
      : n.some((t) => {
          let { guild: n } = t;
          return n.id === e;
        });
  }
  function E(t, e) {
    return l.Ay.getChannels(t)
      [l.I6].map((t) => {
        let { channel: e } = t;
        return e;
      })
      .filter((t) => (0, o.us)(t) === e);
  }
  function s(t) {
    if ("user" === t.install_scope || null == t.guild_id || null == _.A.getGuild(t.guild_id))
      return null;
    let e = c(t, t.guild_id);
    return !0 === e || E(t.guild_id, t.application_id).length > 0
      ? "in_server"
      : (t.supported_surfaces?.length ?? 0) > 0 && ((0, u.KQ)(t) || !1 === e)
        ? "not_in_server"
        : null;
  }
}
