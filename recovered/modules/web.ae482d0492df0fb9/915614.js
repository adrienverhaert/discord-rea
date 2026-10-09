/* Recovered shipped factory. Module 915614.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8048338..8049826
 * Raw property SHA-256: cc717f44f5fab553a842a5a95b6ddd6663358b544e5c24f8d90f15f1b700dfc1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => C, o: () => N });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(317097),
    o = n(17928),
    d = n(661531),
    c = n(602853),
    u = n(778712),
    _ = n(654107),
    E = n(450373),
    A = n(885386),
    h = n(531685),
    f = n(486020),
    I = n(837529),
    p = n(686189),
    T = n(714719),
    m = n(859161),
    g = n(207634),
    S = n(565890);
  function N(e) {
    let {
        user: t,
        displayProfile: n,
        guildId: a,
        pendingBanner: g,
        overlay: N,
        className: C,
        avatarSize: O,
        avatarOffsetX: R,
        avatarOffsetY: L,
        bannerWidth: y,
        bannerHeight: D,
        themePadding: v,
        pendingAccentColor: b,
        animateOnHoverOrFocusOnly: M = !1,
      } = e,
      [P, U] = r.useState(!1),
      w = (0, o.bG)([h.A], () => h.A.isFocused()),
      G = A.kt.getSetting(),
      x = (0, I.Nx)(),
      { bannerSrc: k, status: F } = (0, p.A)({
        displayProfile: n,
        pendingBanner: g,
        size: y,
        canAnimate: M || !G ? P : w,
      }),
      B = x ? null : (k ?? null),
      V = (0, c.r)(d.A.unsafe_rawColors.PRIMARY_800).hex(),
      H = t.getAvatarURL(a, (0, u.FT)(O)),
      j = (0, l.LX)((0, _.Ay)(H, V, !1)),
      W = (0, E.A)(b ?? n?.primaryColor ?? j).hex,
      Y = { align: "start", insetStart: R - v, insetBottom: L + v, radius: (0, m.A)(O) };
    return (0, i.jsx)(T.A, {
      fillClassName: s()(S.v, C),
      bannerSrc: B,
      backgroundColor: "COMPLETE" === F || x ? W : d.A.unsafe_rawColors.PRIMARY_800.css,
      showGifTag: !G && (0, f.o4)(B),
      height: D,
      cutout: Y,
      overlay: N,
      onInteractionStart: () => U(!0),
      onInteractionEnd: () => U(!1),
    });
  }
  function C(e) {
    let {
        themeType: t,
        user: n,
        displayProfile: r,
        canUsePremiumProfileCustomization: a = !1,
        specOverrides: s,
        ...l
      } = e,
      o = g.T[t],
      d = null != s ? { ...o, ...s } : o,
      c = !(0, I.Qq)() && (a || r?.canUsePremiumProfileCustomization || !1);
    return (0, i.jsx)(N, {
      ...l,
      ...d,
      user: n,
      displayProfile: r,
      themePadding: c ? d.themePadding : 0,
    });
  }
}
