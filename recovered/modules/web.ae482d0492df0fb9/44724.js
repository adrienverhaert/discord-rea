/* Recovered shipped factory. Module 44724.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7497063..7498248
 * Raw property SHA-256: 4d7af0218260bf0932dc7a91fa70bd75c3f4199f89b04df5a64e5bbfcd026a40
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    G: () => _,
    X: () => u,
    default: () => E,
    navigateToSocialLayerStorefrontWithGuildPreview: () => A,
  });
  var i = n(376728),
    r = n(976860),
    a = n(71393),
    s = n(449054),
    l = n(871123),
    o = n(733391),
    d = n(832163),
    c = n(652215);
  function u(e) {
    let { guildId: t, invite: n, forceFetch: i } = e;
    (null != n && (t = n.guild?.id), null != t && (0, o.Rw)(t, { eager: !0, forceFetch: i }));
  }
  function _(e) {
    let { applicationId: t, forceFetch: n } = e;
    (0, o.ap)(t, { eager: !0, forceFetch: n });
  }
  function E(e) {
    let { applicationId: t, guildId: n, pageIndex: i, invite: a, skuId: s, slug: o } = e,
      u = t ?? d.A.getApplicationIdFromGuildId(n),
      _ = n ?? (0, l.n5)(t);
    return null == u && null == _ && null == a
      ? Promise.resolve()
      : null != u
        ? Promise.resolve((0, r.pX)(c.BVt.COLLECTIBLES_SHOP_GAME_SHOP(u, i, s, o)))
        : A({ guildId: _, pageIndex: i, invite: a, skuId: s, slug: o });
  }
  async function A(e) {
    let { guildId: t, invite: n, pageIndex: l, skuId: o, slug: d } = e,
      u = null;
    if ((null != n && ((t = n.guild?.id), (u = new Set(n.guild?.features))), null == t)) return;
    let _ = a.A.getGuild(t);
    return (
      _?.joinedAt == null &&
        (null == u || u.has(c.GuildFeatures.PREVIEW_ENABLED)
          ? await (0, s.Z2)(t, {}, { shouldNavigate: !1 })
          : null != n &&
            (await i.Ay.acceptInvite({
              inviteKey: n.code,
              context: { location: "game_shop" },
              skipOnboarding: !0,
            }))),
      (0, r.pX)(c.BVt.CHANNELS_GAME_SHOP(t, l, o, d))
    );
  }
}
