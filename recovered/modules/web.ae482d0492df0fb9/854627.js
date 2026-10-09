/* Recovered shipped factory. Module 854627.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7988853..7989710
 * Raw property SHA-256: 9b2fa3c3fa66304b0c4973b6e2a7726659fbb92c5eb2a785398c7be827a96054
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(582128),
    r = n(17928),
    a = n(778712),
    s = n(562819),
    l = n(215689),
    o = n(287809),
    d = n(62199);
  function c(e) {
    let {
        userId: t,
        guildId: n,
        size: c,
        showPending: u = !1,
        animateOnHover: _ = !1,
        avatarOverride: E,
        avatarDecorationOverride: A,
      } = e,
      h = (0, r.bG)([o.default], () => o.default.getUser(t)),
      {
        avatarSrc: f,
        isAvatarAnimating: I,
        eventHandlers: p,
      } = (0, d.A)({
        user: h,
        guildId: n,
        size: (0, a.FT)(c),
        showPending: u,
        animateOnHover: _,
        avatarOverride: E,
      }),
      {
        avatarPlaceholderSrc: T,
        avatarDecorationSrc: m,
        eventHandlers: g,
      } = (0, l.A)({
        user: h,
        guildId: n,
        avatarDecorationOverride: A,
        size: (0, s.Te)(c),
        onlyAnimateOnHoverOrFocus: _,
      });
    return {
      avatarPlaceholderSrc: T,
      avatarDecorationSrc: m,
      avatarSrc: f,
      isAnimating: I,
      eventHandlers: {
        onMouseEnter: i.useCallback(() => {
          (p.onMouseEnter(), g.onMouseEnter());
        }, [p, g]),
        onMouseLeave: i.useCallback(() => {
          (p.onMouseLeave(), g.onMouseLeave());
        }, [p, g]),
      },
    };
  }
}
