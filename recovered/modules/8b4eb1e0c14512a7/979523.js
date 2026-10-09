/* Recovered shipped factory. Module 979523.
 * Source: recovered/web/assets/8b4eb1e0c14512a7.js
 * UTF-16 property offsets: 6568..7098
 * Raw property SHA-256: e83370d836c5a1b860adede6e673e208416a67045af23c9fc3baeed99c8b76c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { m: () => b, q: () => o });
  var r = n(793943),
    l = n(976860),
    s = n(808728),
    i = n(71393),
    a = n(476931),
    c = n(673642),
    d = n(759532),
    u = n(875317);
  function o(t) {
    return s.Ay.getDefaultChannel(t)?.id;
  }
  function b(t, e) {
    (0, l.uh)(t, o(t));
    let n = i.A.getGuild(t)?.guildTheme,
      s = n?.themeSettings ?? null,
      b = n?.enabled === !0 && (0, u.Om)(s);
    ((0, c.tA)({
      guildId: t,
      draft: b ? s : (0, a.Qy)(),
      original: b ? s : null,
      draftEnabled: !0,
      originalEnabled: b,
      origin: d.v5.PERK_MODAL,
      owner: d.AY.PREVIEW_PANEL,
    }),
      (0, r.nf)(r.HP.GUILD_THEME_PREVIEW, { guildId: t, from: r.dJ.PERK_MODAL }),
      e?.());
  }
}
