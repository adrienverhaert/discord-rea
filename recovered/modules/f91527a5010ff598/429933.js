/* Recovered shipped factory. Module 429933.
 * Source: recovered/web/assets/f91527a5010ff598.js
 * UTF-16 property offsets: 78561..79161
 * Raw property SHA-256: fb534c7f6480b801fd4957a2d87fc2de0c15fefeb45031a17f1f33e3f8c16866
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  (n.d(t, { A: () => u }), n(938796));
  var l = n(665260),
    i = n(702841),
    s = n(761640),
    a = n(734057),
    r = n(309010),
    o = n(473529),
    c = n(746080),
    d = n(652215);
  function u(e) {
    let t = (0, i.bG)([a.A, r.Ay, s.Ay], () => {
        let t = a.A.getChannel(e);
        if (
          null != t &&
          (0, l.Lt)(t.flags, c.lx.IS_GUILD_RESOURCE_CHANNEL) &&
          (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Ay,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.Ay,
              l = e.guild_id;
            return (
              t.getChannelId(l) === c.VV.GUILD_HOME &&
              n.getCurrentSidebarChannelId(c.VV.GUILD_HOME) === e.id
            );
          })(t, r.Ay, s.Ay)
        )
          return t.guild_id;
      }),
      n = (0, o.d)(t ?? d.dJq);
    return null != t && n;
  }
}
