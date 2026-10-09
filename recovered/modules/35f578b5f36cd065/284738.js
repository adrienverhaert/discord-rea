/* Recovered shipped factory. Module 284738.
 * Source: recovered/web/assets/35f578b5f36cd065.js
 * UTF-16 property offsets: 95..373
 * Raw property SHA-256: 6934e4bdd3ae20facae44adbcf757408cd12822242596cedbf72de990766fcae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, u) {
  u.d(e, { R: () => a, Y: () => n });
  var i = u(17928),
    r = u(71393),
    s = u(652215);
  function n(t) {
    let [e] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A];
    return !!e.getGuild(t)?.features.has(s.GuildFeatures.COMMUNITY);
  }
  function a(t) {
    return (0, i.bG)([r.A], () => n(t, [r.A]), [t]);
  }
}
