/* Recovered shipped factory. Module 218150.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5424341..5428024
 * Raw property SHA-256: bea96a7800996a805222981f6a038dbdb8bcc34b9600a0b45dfe094a80308ad4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => P });
  var i = n(477900),
    r = n(582128),
    a = n(922016),
    s = n(683063),
    l = n(369606),
    o = n(939249),
    d = n(927813),
    c = n(251812),
    u = n(518782),
    _ = n(32090),
    E = n(17928),
    A = n(964486),
    h = n(309010),
    f = n(287809),
    I = n(174459),
    p = n(562153),
    T = n(297264),
    m = n(834730),
    g = n(821609),
    S = n(378570),
    N = n(49303),
    C = n(313627),
    O = n(746080),
    R = n(104129),
    L = n(660183),
    y = n(121051);
  function D(e) {
    let { guildId: t, leaderboardWinnerData: n, title: r, detailText: a, onClose: s } = e,
      o = n.winningStreak,
      d = (0, C.Uq)(t, "LeaderboardWinnerBadgePopout");
    return (0, i.jsxs)("div", {
      className: y.Nr,
      children: [
        (0, i.jsxs)("div", {
          className: y.rb,
          children: [
            (0, i.jsx)("div", {
              className: y.zc,
              children: (0, i.jsx)(l.TrophyIcon, {
                size: "custom",
                color: "var(--text-feedback-warning)",
                width: 40,
                height: 40,
                "aria-hidden": !0,
              }),
            }),
            (0, i.jsxs)("div", {
              className: y.C,
              children: [
                (0, i.jsx)(T.D, { variant: "heading-md/semibold", children: r }),
                null != a
                  ? (0, i.jsx)(m.E, { variant: "text-sm/normal", color: "text-muted", children: a })
                  : null,
                null != o && o > 1
                  ? (0, i.jsx)(m.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: y.AR,
                      children: L.intl.format(L.t.ltaxJz, { streakCount: o }),
                    })
                  : null,
              ],
            }),
          ],
        }),
        d
          ? (0, i.jsx)("div", {
              className: y.qr,
              "data-button-hoisted-classname-wrapper": !0,
              children: (0, i.jsx)(g.$, {
                variant: "secondary",
                size: "sm",
                text: L.intl.string(R.default.npZ6IB),
                fullWidth: !0,
                onClick: function () {
                  (s(),
                    (0, N.jb)(t, N.Rk.WINNER_BADGE),
                    (0, S.vn)(t, O.VV.GUILD_SPACE, { source: "Leaderboard Winner Badge Popout" }));
                },
              }),
            })
          : null,
      ],
    });
  }
  var v = n(652215);
  function b(e) {
    let { guildId: t, userId: n, onClose: r, leaderboardWinnerData: a, detailText: s } = e,
      l = (0, E.bG)([h.Ay], () => h.Ay.getChannelId(t)),
      o = (0, E.bG)([f.default], () => f.default.getUser(n)),
      d = p.Ay.useName(t, l, o);
    (0, A.Ay)(() => {
      I.default.track(v.HAw.OPEN_POPOUT, {
        type: "Leaderboard Winner Badge Popout",
        guild_id: t,
        channel_id: l,
      });
    });
    let u = (0, c.K)(a?.winningStat).name;
    return (0, i.jsx)("div", {
      role: "dialog",
      "aria-label": L.intl.formatToPlainString(L.t["LRh/OJ"], { username: d, statName: u }),
      children: (0, i.jsx)(D, {
        guildId: t,
        leaderboardWinnerData: a,
        title: u,
        detailText: s,
        onClose: r,
      }),
    });
  }
  var M = n(631949);
  function P(e) {
    let { guildId: t, userId: n } = e,
      E = r.useRef(null),
      [A, h] = r.useState(!1),
      f = (0, _.A)(t, n),
      I = r.useCallback(() => h(!1), []),
      p = r.useCallback((e) => {
        (e.preventDefault(), e.stopPropagation(), h((e) => !e));
      }, []);
    if (null == f) return null;
    let T = (0, c.K)(f.winningStat).name,
      m = (function (e) {
        let t = e.winningValue;
        if (null == t || !Number.isFinite(t) || t < 0) return null;
        switch (e.winningStat) {
          case u.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
            let e = Math.floor(t / d.A.Millis.MINUTE),
              n = Math.floor(e / d.A.Minutes.HOUR),
              i = e % d.A.Minutes.HOUR;
            if (0 === n) return L.intl.formatToPlainString(R.default["/272et"], { minutes: i });
            return L.intl.formatToPlainString(R.default.GC7N5H, { hours: n, minutes: i });
          }
          case u.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return L.intl.formatToPlainString(R.default.IXdbVJ, { days: t });
          case u.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return L.intl.formatToPlainString(R.default["/VAMco"], { count: t });
          default:
            return null;
        }
      })(f),
      g = null != m ? `${T}. ${m}` : T;
    return (0, i.jsx)(a.Y, {
      targetElementRef: E,
      animation: a.Y.Animation.TRANSLATE,
      align: "center",
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      position: "top",
      shouldShow: A,
      onRequestClose: I,
      clickTrap: !0,
      renderPopout: (e) => {
        let { closePopout: r } = e;
        return (0, i.jsx)(b, {
          guildId: t,
          userId: n,
          onClose: r,
          leaderboardWinnerData: f,
          detailText: m,
        });
      },
      children: () =>
        (0, i.jsx)(s.u, {
          title: T,
          body: L.intl.string(R.default["BX+8uG"]),
          asset: (0, i.jsx)(l.TrophyIcon, {
            size: "lg",
            color: "var(--text-feedback-warning)",
            "aria-hidden": !0,
          }),
          assetSize: 32,
          position: "top",
          ariaHidden: !0,
          shouldShow: !A,
          children: (0, i.jsx)(o.D, {
            tag: "span",
            innerRef: E,
            className: M.M,
            "aria-label": g,
            "aria-haspopup": "dialog",
            "aria-expanded": A,
            onClick: p,
            children: (0, i.jsx)(l.TrophyIcon, {
              size: "xs",
              color: "currentColor",
              "aria-hidden": !0,
            }),
          }),
        }),
    });
  }
}
