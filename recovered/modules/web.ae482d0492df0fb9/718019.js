/* Recovered shipped factory. Module 718019.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8025071..8027309
 * Raw property SHA-256: 0d63ab5fc7a80b2ce55d661835b5532d657893ecce9cdb6b8a44aa46a4a55649
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => v, V: () => D });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(97808),
    d = n(935154),
    c = n(890856),
    u = n(960076),
    _ = n(793574),
    E = n(688810),
    A = n(178418),
    h = n(290863),
    f = n(158045),
    I = n(19575),
    p = n(183555),
    T = n(146655),
    m = n(854627),
    g = n(939496),
    S = n(305385),
    N = n(518477),
    C = n(652215),
    O = n(202541),
    R = n(660183),
    L = n(329801);
  let y = I.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
  function D(e) {
    let {
        user: t,
        displayProfile: n,
        guildId: i,
        channelId: a,
        avatarSize: s,
        animateOnHover: o,
        previewStatus: c,
        avatarDecorationOverride: _,
        avatarOverride: E,
      } = e,
      { theme: I } = (0, g.E)(),
      p = f.Ay.isPremiumAtLeast(n?.premiumType, O.PremiumTypes.TIER_2),
      S = r.useMemo(() => t.isNonUserBot() || (0, A.c)(t, a), [t, a]),
      { live: R } = (0, T.A)(t.id),
      [L] = R,
      {
        status: y,
        isMobileOnline: D,
        isVROnline: v,
      } = (0, l.cf)([h.A], () => ({
        status: (0, u.A)(L) ? C.clD.STREAMING : h.A.getStatus(t.id),
        isMobileOnline: h.A.isMobileOnline(t.id),
        isVROnline: h.A.isVROnline(t.id),
      })),
      {
        avatarDecorationSrc: b,
        avatarSrc: M,
        eventHandlers: P,
        isAnimating: U,
      } = (0, m.A)({
        userId: t.id,
        guildId: null != n ? n.guildId : i,
        size: s,
        animateOnHover: o,
        avatarDecorationOverride: _,
        avatarOverride: E,
      });
    return {
      avatarProps: {
        src: M,
        avatarDecoration: b,
        size: s,
        "aria-label": t.username,
        status: S ? C.clD.UNKNOWN : void 0 !== c ? c : y,
        statusBackdropColor: p && !S ? (0, d.C$)(I) : void 0,
        isMobile: D,
        isVR: v,
        statusTooltip: !0,
        statusTooltipDelay: N.In,
      },
      eventHandlers: P,
      isAnimating: U,
    };
  }
  function v(e) {
    let { onOpenProfile: t, onOpenAvatar: n, className: r, imageAnimatingClassName: a, ...l } = e,
      { analyticsLocations: o } = (0, E.Ay)(_.A.AVATAR),
      { trackUserProfileAction: d } = (0, p.NJ)(),
      { avatarProps: u, eventHandlers: A, isAnimating: h } = D(l),
      f = s()(L.my, r),
      I = l.displayProfile?.guildId ?? l.guildId,
      T = null != l.user.avatar || l.user.hasAvatarForGuild(I) ? n : void 0;
    return null == t && null == T
      ? (0, i.jsx)("div", {
          ...A,
          className: f,
          children: (0, i.jsx)(y, { ...u, imageClassName: h ? a : void 0 }),
        })
      : (0, i.jsx)(c.s, {
          "aria-label": R.intl.string(null != T ? R.t.xB7MI3 : R.t["+Xp3hq"]),
          ...A,
          onMouseEnter: function () {
            (A.onMouseEnter(), null != T && (0, S.V)({ user: l.user, guildId: I }));
          },
          className: s()(f, L.vk),
          focusProps: { ringClassName: L.Rg },
          onClick: () => {
            if (null != T) {
              (d({ action: N.pt.VIEW_AVATAR, analyticsLocations: o }), T());
              return;
            }
            (d({ action: N.pt.PRESS_VIEW_PROFILE, analyticsLocations: o }), t?.());
          },
          children: (0, i.jsx)(y, { ...u, imageClassName: s()(L.Lw, h && a) }),
        });
  }
}
