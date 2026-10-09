/* Recovered shipped factory. Module 361670.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7666691..7667379
 * Raw property SHA-256: 19fa2a51f7e9ce08ccab8219d4ac3399ff3ff0776f8b8db75129244ac3ba4acd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ux: () => c, W$: () => u });
  var i,
    r = n(696451),
    a = n(488926),
    s = n(158045),
    l = n(514983),
    o = n(378058),
    d = n(652215),
    c =
      (((i = {})[(i.SENDABLE = 0)] = "SENDABLE"),
      (i[(i.SENDABLE_WITH_PREMIUM = 1)] = "SENDABLE_WITH_PREMIUM"),
      (i[(i.NONSENDABLE = 2)] = "NONSENDABLE"),
      (i[(i.SENDABLE_WITH_BOOSTED_GUILD = 3)] = "SENDABLE_WITH_BOOSTED_GUILD"),
      i);
  function u(e, t, n) {
    if (null == t) return 2;
    let i = s.Ay.canUseCustomStickersEverywhere(t);
    return (0, o.FD)(e)
      ? 2 * (null == l.A.getStickerPack(e.pack_id))
      : (0, o.Xw)(e) && null != n
        ? null == r.Ay.getSelfMember(e.guild_id)
          ? 2
          : e.available
            ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id
              ? 0
              : null == n.guild_id ||
                  a.$3({ permission: d.xBc.USE_EXTERNAL_STICKERS, user: t, context: n })
                ? +!i
                : 2
            : 3
        : 2;
  }
}
