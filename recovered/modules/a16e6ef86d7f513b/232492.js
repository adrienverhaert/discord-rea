/* Recovered shipped factory. Module 232492.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 19054..19593
 * Raw property SHA-256: 1fea3b3e62380f271d4cf52010932d84e0f898d559ef3cc356f25efa8592a429
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => d });
  var l = n(17928),
    r = n(963027),
    o = n(262763),
    i = n(976860),
    a = n(734057),
    u = n(977997),
    s = n(499211),
    c = n(652215);
  function d(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getChannel(t)),
      { needSubscriptionToAccess: d } = (0, s.A)(n?.id);
    if (null == n || d || n.isObfuscated()) return null;
    let C = n.isGuildVocal();
    return {
      navigateToChannel: function () {
        null != n &&
          (C
            ? o.A.handleVoiceConnect({
                channel: n,
                connected: u.A.isInChannel(n.id),
                needSubscriptionToAccess: !1,
                routeDirectlyToChannel: !0,
              })
            : (0, i.pX)(c.BVt.CHANNEL(e, n.id)));
      },
      ariaLabel: (0, r.Ay)({ channel: n }),
    };
  }
}
