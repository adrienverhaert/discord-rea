/* Recovered shipped factory. Module 468581.
 * Source: recovered/web/assets/94bc038bcf3acda7.js
 * UTF-16 property offsets: 95..791
 * Raw property SHA-256: c490c583675c4b67646ccd8c95dad05c8bb15aa514c935b62711fe17bf42c88d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, i, t) {
  t.d(i, { $: () => o, A: () => x });
  var n = t(477900),
    l = t(582128),
    r = t(774926),
    s = t(263577),
    a = t(506326),
    c = t(868065),
    d = t(804779);
  let o = [a.iq, a.Zc, a.Xy, a.$X, a.fg, a.MK],
    x =
      221552 == t.j
        ? l.memo(function (e) {
            let { entry: i, channel: t, selected: l, hovered: x } = e,
              { largeImage: m } = (0, r.nO)({
                entry: i,
                showCoverImage: !1,
                trackingSource: "memberlist_activity_content_row",
              });
            return (0, n.jsxs)(c.Zp, {
              selected: l,
              children: [
                (0, n.jsxs)(c.UA, {
                  children: [
                    (0, n.jsx)(c.Hp, { entry: i, channelId: t.id, guildId: t.guild_id }),
                    (0, n.jsx)(c.ZB, { children: i.extra.activity_name }),
                    (0, n.jsx)(a.mG, {
                      location: a.N5.CARD,
                      children: o.map((e, t) => (0, n.jsx)(e, { entry: i, hovered: x }, t)),
                    }),
                  ],
                }),
                (0, n.jsx)(s.V, { alt: m?.alt, src: m?.src, size: 48, className: d.xn }),
              ],
            });
          })
        : null;
}
