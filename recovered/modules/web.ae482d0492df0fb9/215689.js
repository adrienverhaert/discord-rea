/* Recovered shipped factory. Module 215689.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3826462..3827241
 * Raw property SHA-256: 6c65cf3eb17a58aea5adebab88d7c8f00ab1990f8c0a501624be5c02934b0502
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(582128),
    r = n(17928),
    a = n(919395),
    s = n(696451),
    l = n(486020),
    o = n(338932),
    d = n(940622),
    c = n(601255),
    u = n(476324);
  let _ = function (e) {
    let {
        user: t,
        guildId: n,
        size: _,
        avatarDecorationOverride: E,
        onlyAnimateOnHoverOrFocus: A = !1,
      } = e,
      [h, f] = i.useState(!1),
      { canAnimate: I } = (0, o.T)(h, A),
      p = (0, r.bG)([s.Ay], () => (null != n && null != t ? s.Ay.getMember(n, t.id) : null)),
      T = (0, c.A)(
        (0, a.lw)({ userValue: t?.avatarDecoration, guildValue: p?.avatarDecoration, guildId: n }),
      ),
      m = (0, d.VU)(),
      g = i.useMemo(
        () =>
          null != m && "" !== m
            ? m
            : (0, l.F_)({ avatarDecoration: void 0 !== E ? E : T, canAnimate: I, size: _ }),
        [m, E, T, I, _],
      );
    return {
      avatarPlaceholderSrc: u,
      avatarDecorationSrc: g,
      isAvatarDecorationAnimating: I,
      eventHandlers: {
        onMouseEnter: i.useCallback(() => f(!0), []),
        onMouseLeave: i.useCallback(() => f(!1), []),
      },
    };
  };
}
