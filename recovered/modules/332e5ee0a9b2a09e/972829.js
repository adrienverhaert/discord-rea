/* Recovered shipped factory. Module 972829.
 * Source: recovered/web/assets/332e5ee0a9b2a09e.js
 * UTF-16 property offsets: 95..369
 * Raw property SHA-256: 3e08db80c66d74ce1383f47fabd73d0e12cac055ea5d6ead2480c9234f027f13
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (u, e, t) {
  t.d(e, { A: () => l });
  var s = t(512750),
    d = t(17928),
    r = t(71393),
    a = t(645619),
    i = t(652215);
  function l(u) {
    return (0, d.bG)(
      [r.A, a.A],
      () =>
        null != u &&
        (r.A.getGuild(u)?.features.has(i.GuildFeatures.GUILD_THEME) === !0 ||
          a.A.getStateForGuild(u)?.unlockedPowerups?.[s.d0] != null),
      [u],
    );
  }
}
