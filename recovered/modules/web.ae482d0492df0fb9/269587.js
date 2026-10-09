/* Recovered shipped factory. Module 269587.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8112822..8116678
 * Raw property SHA-256: 52c105a7370b83a9ca176df4e767d8d7cddae660821de549f2eef92a9c894291
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => V });
  var i = n(477900),
    r = n(582128),
    a = n(866665),
    s = n(939249),
    l = n(365199),
    o = n(661531),
    d = n(922016),
    c = n(980707),
    u = n(477782),
    _ = n(793574),
    E = n(688810),
    A = n(315246),
    h = n(92240),
    f = n(679492),
    I = n(243949),
    p = n(939496),
    T = n(17928),
    m = n(573648),
    g = n(541806),
    S = n(261020),
    N = n(83971),
    C = n(780964),
    O = n(766075),
    R = n(30370),
    L = n(652215),
    y = n(660183),
    D = n(754495),
    v = n(534465),
    b = n(939075),
    M = n(20805),
    P = n(655116),
    U = n(287809),
    w = n(272984),
    G = n(695311),
    x = n(518477),
    k = n(996988);
  function F(e) {
    let {
        children: t,
        user: n,
        activity: a,
        entry: s,
        display: l,
        onSelect: o,
        onClose: F,
        appContext: B,
        targetElementRef: V,
      } = e,
      [H, j] = r.useState(!1),
      { analyticsLocations: W } = (0, E.Ay)(_.A.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
      Y = (0, h.A)({ display: l, user: n, activity: a, entry: s, analyticsLocations: W }),
      K = (0, f.NR)(),
      $ = r.useRef(null),
      z = K?.interactionPopoutTargetRef ?? $,
      X = (function (e) {
        let { onAction: t } = e,
          { themeType: n } = (0, p.E)(),
          r = (0, I.A)({
            userId: e.user.id,
            tabSection: x.RP.ACTIVITY,
            label: y.intl.string(y.t.pD1L1u),
            onAction: () => t?.({ action: "PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM" }),
          });
        return [
          n === k.d.POPOUT ? r : null,
          (function (e) {
            let { user: t, entry: n, display: r, onAction: a, onClose: s } = e,
              l = (0, T.bG)([U.default], () => U.default.getCurrentUser()?.id === t.id),
              o = (0, T.bG)([P.A], () => P.A.hasConnectedAccount());
            if ("recent" !== r || !(0, N.F3)(n)) return null;
            if (!o)
              return (0, i.jsx)(u.Dr, {
                id: "connect-spotify",
                label: y.intl.formatToPlainString(y.t.XWSHTb, { platform: w.HD }),
                action: () => {
                  (a?.({ action: "PRESS_CONNECT_SPOTIFY_MENU_ITEM" }),
                    (0, O.openUserSettings)(C.X.CONNECTIONS_CATEGORY),
                    s?.());
                },
              });
            if (l) return null;
            let d = (0, M.Tq)(n) ? n.extra.entries[0]?.media : n.extra.media;
            return null == d
              ? null
              : (0, i.jsx)(u.Dr, {
                  id: "play-on-spotify",
                  label: y.intl.string(y.t.rRffNz),
                  action: () => {
                    (a?.({ action: "PRESS_PLAY_ON_SPOTIFY_MENU_ITEM" }),
                      (0, S.n)(w.M0.TRACK, d.external_id));
                  },
                });
          })(e),
          (0, v.Ay)(e),
          (0, v.gA)(e),
          (function (e) {
            let { display: t, entry: n, onAction: r, onClose: a } = e,
              s = (0, M.yl)(n),
              l = (0, G.A)({ applicationId: s ? n.extra.application_id : void 0, onClose: a });
            return "recent" === t && s
              ? (0, i.jsx)(u.Dr, {
                  id: "view-activity",
                  label: y.intl.string(y.t.GDWYR8),
                  action: () => {
                    (r?.({ action: "PRESS_VIEW_ACTIVITY_MENU_ITEM" }), l());
                  },
                })
              : null;
          })(e),
          (0, b.A)(e),
          (function (e) {
            let { activity: t, entry: n, display: r, onAction: a, onClose: s } = e,
              l = (0, T.bG)([R.A], () => null != R.A.getAccount(null, L.fg2.CRUNCHYROLL));
            if (!(0, g.A)(t) && !(0, N.CU)(n)) return null;
            if (!l)
              return (0, i.jsx)(u.Dr, {
                id: "connect-crunchyroll",
                label: y.intl.formatToPlainString(y.t.XWSHTb, {
                  platform: m.A.get(L.fg2.CRUNCHYROLL).name,
                }),
                action: () => {
                  (a?.({ action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM" }),
                    (0, O.openUserSettings)(C.X.CONNECTIONS_CATEGORY),
                    s?.());
                },
              });
            if ("recent" !== r || !(0, N.CU)(n)) return null;
            let o = n.extra.url;
            return null == o || "" === o
              ? null
              : (0, i.jsx)(u.Dr, {
                  id: "watch-on-crunchyroll",
                  label: y.intl.string(y.t.OpxQVH),
                  action: () => {
                    (a?.({ action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM" }), (0, S.C)(o));
                  },
                });
          })(e),
          (0, D.s)(e),
        ].filter((e) => null != e);
      })({
        entry: s,
        activity: a,
        user: n,
        display: l,
        onClose: F,
        onAction: Y,
        isMenuOpen: H,
        appContext: B,
      });
    return 0 === X.length || n.bot
      ? null
      : (0, i.jsx)(d.Y, {
          targetElementRef: V ?? z,
          align: "top",
          position: "right",
          disablePointerEvents: !1,
          onRequestOpen: () => {
            (Y({ action: "OPEN_MENU" }), j(!0));
          },
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)("div", {
              onClick: (e) => e.stopPropagation(),
              children: (0, i.jsx)(c.W, {
                "data-menu-migrated-auto": !0,
                navId: A.n,
                onClose: () => {
                  (t(), j(!1));
                },
                "aria-label": y.intl.string(y.t.PlAQz1),
                onSelect: o,
                children: (0, i.jsx)(u.rX, { children: X }),
              }),
            });
          },
          children: t,
        });
  }
  var B = n(260155);
  function V(e) {
    let t = r.useRef(null);
    return (0, i.jsx)(F, {
      ...e,
      targetElementRef: t,
      children: (e) =>
        (0, i.jsx)(a.m, {
          targetElementRef: t,
          text: y.intl.string(y.t["UKOtz+"]),
          ariaHidden: !0,
          children: (0, i.jsx)(s.D, {
            ...e,
            innerRef: t,
            "aria-label": y.intl.string(y.t["UKOtz+"]),
            onClick: (t) => {
              (t.stopPropagation(), e.onClick(t));
            },
            onContextMenu: (t) => {
              (t.preventDefault(), e.onClick(t));
            },
            className: B.He,
            children: (0, i.jsx)(l.MoreHorizontalIcon, {
              color: o.A.colors.INTERACTIVE_TEXT_DEFAULT,
              size: "xs",
            }),
          }),
        }),
    });
  }
}
