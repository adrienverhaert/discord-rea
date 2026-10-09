/* Recovered shipped factory. Module 657538.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8058034..8068180
 * Raw property SHA-256: 1b048db48011c0c08f2f34d6c294c0d5517010e4892ae57ad1b0559590a698ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => e_ }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(176999),
    s = n(598748),
    l = n(540185),
    o = n(17928),
    d = n(688810),
    c = n(549699),
    u = n(29496),
    _ = n(352003),
    E = n(429913),
    A = n(201718),
    h = n(773669),
    f = n(403362),
    I = n(183555),
    p = n(633075),
    T = n(646976),
    m = n(289173),
    g = n(210598);
  let S = (0, n(945810).mj)({
    name: "2026-07-clips-on-profile-viewer",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  var N = n(80330),
    C = n(139730),
    O = n(503698),
    R = n.n(O),
    L = n(3026),
    y = n(297264),
    D = n(939249),
    v = n(834730),
    b = n(123292),
    M = n(946356),
    P = n(782134),
    U = n(682176),
    w = n(314531),
    G = n(798108),
    x = n(558285),
    k = n(608857),
    F = n(660183),
    B = n(599672);
  function V(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
      className: R()(B.Rr, t),
      "aria-hidden": !0,
      children: (0, i.jsx)(P.PlayIcon, { size: "xxs", color: "currentColor" }),
    });
  }
  function H(e) {
    let { title: t } = e;
    return null == t || "" === t.trim()
      ? (0, i.jsx)(V, { className: B.Or })
      : (0, i.jsx)(G.A, {
          contentClassName: B.W_,
          children: (0, i.jsxs)("div", {
            className: B.E4,
            children: [
              (0, i.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-overlay-light",
                className: B.rd,
                children: (0, i.jsx)(L.A, { children: t }),
              }),
              (0, i.jsx)(V, { className: B.l9 }),
            ],
          }),
        });
  }
  function j(e) {
    let {
      item: t,
      isPlaying: n,
      onPlay: r,
      onHoverStart: a,
      onHoverEnd: s,
      className: l,
      children: o,
    } = e;
    return (0, i.jsxs)(D.D, {
      className: R()(B.Vs, l),
      "aria-label": F.intl.string(F.t.CscLHM),
      onClick: r,
      onMouseEnter: () => a(t.key),
      onMouseLeave: s,
      children: [(0, i.jsx)(w.A, { item: t, ringSize: "sm", isPlaying: n, className: B.nC }), o],
    });
  }
  function W(e) {
    let { items: t, onPlay: n, onHoverPlay: a } = e,
      [s, l] = r.useState(null),
      o = r.useRef(void 0);
    r.useEffect(() => {
      (0, U.v)();
    }, []);
    let d = r.useCallback(
        (e) => {
          (n?.(), (0, x.A)({ clips: t, startingIndex: e }));
        },
        [t, n],
      ),
      c = r.useCallback(
        (e) => {
          (window.clearTimeout(o.current),
            (o.current = window.setTimeout(() => {
              (l(e), a?.());
            }, 150)));
        },
        [a],
      ),
      u = r.useCallback(() => {
        (window.clearTimeout(o.current), l(null));
      }, []);
    r.useEffect(() => () => window.clearTimeout(o.current), []);
    let [_, ...E] = t;
    if (null == _) return null;
    let A = E.slice(0, 2),
      h = 0 === A.length,
      f = 1 === A.length,
      I = h ? void 0 : _.title;
    return (0, i.jsxs)("div", {
      className: R()(B.z7, { [B.J0]: h, [B.V2]: f }),
      children: [
        (0, i.jsx)(j, {
          item: _,
          isPlaying: s === _.key,
          onPlay: () => d(0),
          onHoverStart: c,
          onHoverEnd: u,
          className: B.N4,
          children: (0, i.jsx)(H, { title: I }),
        }),
        A.length > 0 &&
          (0, i.jsx)("div", {
            className: B.t$,
            children: A.map((e, t) =>
              (0, i.jsx)(
                j,
                {
                  item: e,
                  isPlaying: s === e.key,
                  onPlay: () => d(t + 1),
                  onHoverStart: c,
                  onHoverEnd: u,
                  className: B.ZL,
                  children: (0, i.jsx)(H, { title: f ? e.title : void 0 }),
                },
                e.key,
              ),
            ),
          }),
      ],
    });
  }
  var Y = n(4431);
  function K(e) {
    let { items: t, onViewAll: n, className: a } = e,
      s = r.useId(),
      { trackUserProfileAction: o } = (0, I.NJ)(),
      d = r.useRef(!1);
    function c() {
      (o({ action: "PRESS_CLIPS_WIDGET_PREVIEW", widgetType: l.x.CLIPS_GALLERY }), n());
    }
    r.useEffect(() => {
      d.current ||
        (o({ action: "VIEW_CLIPS_WIDGET_PREVIEW", widgetType: l.x.CLIPS_GALLERY }),
        (d.current = !0));
    }, [o]);
    let u = r.useCallback(() => {
        o({ action: "PRESS_PLAY_CLIP", widgetType: l.x.CLIPS_GALLERY });
      }, [o]),
      _ = r.useCallback(() => {
        o({ action: "HOVER_PLAY_CLIP", widgetType: l.x.CLIPS_GALLERY });
      }, [o]),
      E = (0, i.jsx)(y.D, {
        variant: "text-xs/medium",
        id: s,
        children: F.intl.string(F.t.zY8Ghg),
      }),
      A = (0, i.jsx)(W, { items: t, onPlay: u, onHoverPlay: _ }),
      h = 1 === t.length,
      f = h ? t[0].title?.trim() : void 0;
    return (0, i.jsx)("section", {
      "aria-labelledby": s,
      children: (0, i.jsxs)(M.A.Overlay, {
        className: R()(Y.kL, h && Y.oE, a),
        children: [
          h
            ? (0, i.jsxs)(D.D, {
                className: Y.XL,
                "aria-label": F.intl.string(F.t.rUEjBe),
                onClick: c,
                children: [
                  E,
                  null != f &&
                    "" !== f &&
                    (0, i.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: Y.ID,
                      children: (0, i.jsx)(L.A, { children: f }),
                    }),
                ],
              })
            : (0, i.jsxs)("div", {
                className: Y.wx,
                children: [
                  E,
                  (0, i.jsx)(b.Q, {
                    variant: "secondary",
                    textVariant: "text-xs/medium",
                    onClick: c,
                    text: F.intl.string(F.t.rUEjBe),
                  }),
                ],
              }),
          A,
        ],
      }),
    });
  }
  var $ = n(403581),
    z = n(661531),
    X = n(448766),
    Z = n(326009),
    q = n(892572),
    Q = n(564118);
  function J(e) {
    let { header: t } = e;
    return (0, i.jsxs)("div", {
      className: Q.wx,
      children: [
        (0, i.jsx)($.t, { className: Q.nr, size: "xxs", color: z.A.colors.ICON_DEFAULT }),
        (0, i.jsx)(v.E, { className: Q.TK, variant: "text-xs/medium", lineClamp: 1, children: t }),
      ],
    });
  }
  function ee(e) {
    let { header: t, section: n, userId: r } = e,
      a = "" !== n.title;
    return (0, i.jsxs)("div", {
      className: Q.PY,
      children: [
        (0, i.jsxs)("div", {
          className: Q.rD,
          children: [
            (0, i.jsx)(J, { header: t }),
            (0, i.jsxs)("div", {
              className: Q.I_,
              children: [
                a
                  ? (0, i.jsx)(y.D, {
                      className: R()(Q.CH, q.YD),
                      variant: "heading-sm/semibold",
                      color: "text-default",
                      lineClamp: 1,
                      children: (0, X.j)(n.title),
                    })
                  : null,
                (0, i.jsx)(v.E, {
                  className: Q.G6,
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  lineClamp: 1,
                  children: F.intl.string(F.t.KOUwKV),
                }),
              ],
            }),
          ],
        }),
        null != n.image
          ? (0, i.jsx)(Z.N, { className: R()(Q.N4, { [Q.kF]: !a }), userId: r, image: n.image })
          : null,
      ],
    });
  }
  function et(e) {
    let { header: t, section: n, userId: r } = e,
      a = n.fields.map((e) => e.image).filter(f.Vq);
    return 0 === a.length
      ? (0, i.jsx)(en, { header: t })
      : (0, i.jsxs)("div", {
          className: Q.Zz,
          children: [
            (0, i.jsx)(J, { header: t }),
            (0, i.jsx)("div", {
              className: Q.SS,
              children: a.map((e, t) =>
                (0, i.jsx)(Z.N, { className: Q.Bi, userId: r, image: e, canAnimate: !1 }, t),
              ),
            }),
          ],
        });
  }
  function en(e) {
    let { header: t } = e;
    return (0, i.jsxs)("div", {
      className: Q.$R,
      children: [
        (0, i.jsx)(J, { header: t }),
        (0, i.jsx)(v.E, {
          className: Q.VC,
          variant: "text-xs/medium",
          color: "text-subtle",
          children: F.intl.string(F.t.KOUwKV),
        }),
      ],
    });
  }
  function ei(e) {
    let { userId: t, widget: n } = e,
      r = n.sections[0];
    return null == r
      ? (0, i.jsx)(en, { header: n.header })
      : "cover" === r.type && ("" !== r.title || null != r.image)
        ? (0, i.jsx)(ee, { header: n.header, section: r, userId: t })
        : "fields" === r.type
          ? (0, i.jsx)(et, { header: n.header, section: r, userId: t })
          : (0, i.jsx)(en, { header: n.header });
  }
  function er(e) {
    let { className: t, onClick: n, userId: a, widget: s } = e,
      { trackUserProfileAction: l } = (0, I.NJ)(),
      o = r.useRef(!1);
    return (
      r.useEffect(() => {
        o.current || (l({ action: "VIEW_PERSONAL_WIDGET_PREVIEW" }), (o.current = !0));
      }, [l, s.id]),
      (0, i.jsx)(D.D, {
        onClick: function () {
          (l({ action: "PRESS_PERSONAL_WIDGET_PREVIEW" }), n?.());
        },
        "aria-label": F.intl.string(F.t["2sdfeb"]),
        children: (0, i.jsx)(M.A.Overlay, {
          className: R()(Q.kL, t),
          children: (0, i.jsx)(ei, { userId: a, widget: s }),
        }),
      })
    );
  }
  var ea = n(321108),
    es = n(939496),
    el = n(996988),
    eo = n(580065);
  function ed(e) {
    var t;
    let n,
      { widgets: a = [], onClick: s, className: l } = e,
      { trackUserProfileAction: o } = (0, I.NJ)(),
      d =
        ((t = a.filter((e) => e instanceof p.R)),
        (n = (0, E.A)(t.map((e) => e.applicationId))),
        (0, r.useMemo)(
          () =>
            Object.fromEntries(
              n
                .filter(f.Vq)
                .map((e) => [e.id, e.getCanonicalGameId()])
                .filter((e) => {
                  let [t, n] = e;
                  return null != n;
                }),
            ),
          [n],
        )),
      c = (0, r.useMemo)(
        () => [
          ...new Set(
            a
              .map((e) =>
                e instanceof m.Yy
                  ? e.games.map((e) => e.gameId)
                  : e instanceof p.R
                    ? d[e.applicationId]
                    : void 0,
              )
              .filter(f.Vq)
              .flat(),
          ),
        ],
        [a, d],
      ),
      { themeType: u } = (0, es.E)(),
      _ = u === el.d.SIDEBAR,
      A = (0, r.useRef)(!1),
      h = (0, ea.A)(c),
      T = (0, r.useMemo)(
        () =>
          h
            .map((e) => ({ image: e.getIconURL(48) ?? "", name: e.name }))
            .filter((e) => "" !== e.image)
            .slice(0, 4),
        [h],
      );
    return (
      (0, r.useEffect)(() => {
        0 === T.length ||
          A.current ||
          (o({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (A.current = !0));
      }, [o, T.length]),
      (0, i.jsx)(D.D, {
        "aria-label": F.intl.string(F.t.JjiwFx),
        onClick: () => {
          (o({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s());
        },
        className: eo.QF,
        children: (0, i.jsxs)(M.A.Overlay, {
          className: R()(eo.WH, l),
          children: [
            (0, i.jsx)(v.E, {
              variant: _ ? "text-sm/medium" : "text-xs/medium",
              children: F.intl.string(F.t.JjiwFx),
            }),
            (0, i.jsx)("div", {
              className: eo.Pt,
              children: T.map((e, t) =>
                (0, i.jsx)(
                  ec,
                  {
                    iconUrl: e.image,
                    name: e.name,
                    displayCount: t === T.length - 1 && c.length > 4,
                    gameCount: c.length - T.length,
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      })
    );
  }
  function ec(e) {
    let { iconUrl: t, name: n, displayCount: r, gameCount: a } = e;
    return (0, i.jsxs)("div", {
      className: eo.Kk,
      children: [
        (0, i.jsx)("img", { className: R()({ [eo.um]: r }), src: t, alt: n }),
        r &&
          (0, i.jsx)("div", {
            className: eo.pp,
            children: (0, i.jsxs)(v.E, {
              variant: "text-xs/medium",
              className: eo.gq,
              children: ["+", a],
            }),
          }),
      ],
    });
  }
  var eu = n(518477);
  function e_(e) {
    let { user: t, widgets: n = [], ...O } = e,
      {
        openModal: R,
        onExpand: L,
        openClipsGallery: y,
      } = (function (e) {
        let { onOpenUserProfileModal: t } = e,
          { analyticsLocations: n } = (0, d.Ay)(),
          { trackUserProfileAction: i } = (0, I.NJ)(),
          a = r.useCallback(() => {
            t?.({ tabSection: eu.RP.WIDGETS });
          }, [t]),
          s = r.useCallback(() => {
            (i({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: n }), a());
          }, [i, n, a]);
        return {
          openModal: a,
          onExpand: s,
          openClipsGallery: r.useCallback(() => {
            t?.({ tabSection: eu.RP.WIDGETS, scrollTarget: l.x.CLIPS_GALLERY });
          }, [t]),
        };
      })({ user: t, widgets: n, ...O }),
      D = S.useConfig({ location: "UserProfileStackedWidgetPreviews" }).enabled,
      v = r.useMemo(() => n.filter((e) => e instanceof p.R), [n]),
      b = r.useMemo(() => v.map((e) => e.applicationId), [v]),
      M = (0, E.A)(b),
      P = r.useMemo(() => new Map(M.filter(f.Vq).map((e) => [e.id, e])), [M]),
      U = (0, _.A)(b),
      w = r.useMemo(() => new Map(U.map((e) => [e.application_id, e])), [U]),
      { data: G } = (0, A.P)(t.id),
      x = r.useMemo(() => new Map(G?.map((e) => [e.application_id, e])), [G]),
      B = (0, o.bG)([h.default], () => h.default.locale),
      V = (0, o.cf)([u.A], () =>
        Object.fromEntries(v.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)])),
      ),
      H = r.useMemo(
        () =>
          0 === P.size || 0 === w.size || 0 === x.size
            ? null
            : new Map(
                v
                  .map((e) => {
                    let t = P.get(e.applicationId),
                      n = w.get(e.applicationId),
                      i = x.get(e.applicationId);
                    if (null == t || null == n || null == i) return null;
                    let r = n.surfaces;
                    if (null == r || null == r[s.m.MINI_PROFILE]) return null;
                    let l = (0, a.VG)(i.profile),
                      o = Object.values(V[e.applicationId] ?? {}).filter(f.Vq);
                    return [e, { surfaceConfigs: n.surfaces, data: l, application: t, assets: o }];
                  })
                  .filter(f.Vq),
              ),
        [v, P, w, x, V],
      ),
      j = r.useCallback(
        (e) => {
          let r = [],
            a = !1;
          for (let s of n)
            if (s instanceof p.R) {
              let t = H?.get(s);
              if (null == t) continue;
              r.push(
                (0, i.jsx)(
                  C.A,
                  {
                    application: t.application,
                    rendererProps: {
                      locale: B,
                      surfaceConfigs: t.surfaceConfigs,
                      isLoading: !1,
                      hasIdentity: !0,
                      resolutionContext: {
                        data: t.data,
                        applicationAssets: t.assets,
                        getApplicationAssetUrl: (e) =>
                          (0, c.Q)(s.applicationId, e, e.metadata.width),
                        localizedStrings: [],
                      },
                    },
                    onClick: R,
                    ...e,
                  },
                  `application-widget-${s.applicationId}`,
                ),
              );
            } else if (s instanceof m.Yy && !a)
              (r.push((0, i.jsx)(ed, { widgets: n, onClick: R, ...e }, "collection-breadcrumb")),
                (a = !0));
            else if (s instanceof g.Tu)
              r.push(
                (0, i.jsx)(
                  er,
                  { userId: t.id, widget: s, onClick: R, ...e },
                  s.id ?? "personal-widget",
                ),
              );
            else if (s instanceof T.kM) {
              if (!D) continue;
              let t = s.clips
                .flatMap((e) =>
                  "saved" === e.status
                    ? [
                        {
                          status: "saved",
                          key: e.id,
                          gameId: e.gameId,
                          videoURL: e.videoURL,
                          thumbnailURL: e.thumbnailURL,
                          spritesheetImageURL: e.spritesheetImageURL,
                          spritesheetVttURL: e.spritesheetVttURL,
                          title: e.title,
                          tags: e.tags,
                        },
                      ]
                    : [],
                )
                .filter(k.K);
              if (0 === t.length) continue;
              r.push(
                (0, i.jsx)(K, { items: t, onViewAll: y, ...e }, s.id ?? "clips-gallery-widget"),
              );
            }
          return r;
        },
        [n, R, H, B, t.id, D, y],
      );
    return 0 === n.length
      ? null
      : (0, i.jsx)(N.A, { renderCards: j, heading: F.intl.string(F.t.Y55Tua), onExpand: L });
  }
}
