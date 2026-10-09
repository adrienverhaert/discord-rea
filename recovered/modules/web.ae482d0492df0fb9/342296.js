/* Recovered shipped factory. Module 342296.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8142877..8144462
 * Raw property SHA-256: 82096f4439489a0489ad32a51049f38303b84d89142fc15be92f47a9eaba064b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => p, S: () => A });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(778712),
    l = n(922016),
    o = n(335180),
    d = n(287809),
    c = n(454719),
    u = n(589022),
    _ = n(518477),
    E = n(818348);
  let A = (0, s.FT)(s._3.SIZE_80),
    h = {
      onMouseDown: E.tE,
      onClick: E.tE,
      onKeyDown: E.tE,
      "aria-controls": void 0,
      "aria-expanded": !1,
    },
    f = { isShown: !1, position: void 0 };
  function I(e) {
    let {
        children: t,
        user: n,
        currentUser: a,
        guildId: s,
        channelId: d,
        messageId: E,
        roleId: h,
        disableUserProfileLink: f,
        newAnalyticsLocations: I,
        appContext: p,
        avatarUrl: T,
        preload: m,
        renderPopout: g,
        onRequestOpen: S,
        onRequestClose: N,
        onClosePopout: C,
        shouldShow: O,
        shouldPreload: R = !0,
        ignoreModalClicks: L = !0,
        ...y
      } = e,
      D = r.useRef(void 0),
      v = r.useCallback(
        () =>
          null != m
            ? m()
            : (0, c.A)(n.id, T ?? n.getAvatarURL(s, A), {
                type: "popout",
                withMutualGuilds: n.id !== a.id,
                withMutualFriends: !n.bot && n.id !== a.id,
                guildId: s,
                channelId: d,
              }),
        [m, a, n, T, s, d],
      ),
      b = r.useCallback(
        (e) =>
          ((D.current = Date.now()), null != g)
            ? g(e, D.current)
            : (0, i.jsx)(u.A, {
                ...e,
                user: n,
                currentUser: a,
                guildId: s,
                channelId: d,
                roleId: h,
                messageId: E,
                disableUserProfileLink: f,
                newAnalyticsLocations: I,
                appContext: p,
                openedAt: D.current,
                closePopout: () => {
                  (e.closePopout(), C?.());
                },
              }),
        [n, a, g, s, d, h, E, f, I, p, C],
      );
    return (0, i.jsx)(l.Y, {
      popoutKey: _.KM,
      shouldShow: O,
      preload: R ? v : void 0,
      loadingComponent: (0, o.Zm)(),
      renderPopout: b,
      onRequestOpen: S,
      onRequestClose: N,
      ignoreModalClicks: L,
      ...y,
      children: t,
    });
  }
  let p = r.memo(function (e) {
    let { children: t, userId: n, user: r, ...s } = e,
      l = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
      o = (0, a.bG)([d.default], () => r ?? d.default.getUser(n));
    return null == o || null == l
      ? t(h, f)
      : (0, i.jsx)(I, { ...s, user: o, currentUser: l, children: t });
  });
}
