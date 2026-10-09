/* Recovered shipped factory. Module 573853.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4473112..4516250
 * Raw property SHA-256: 25b1c4b7dfced4281a5c343fe4328df9a7629988cb1f33c446f91f85a0e6fb99
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => nf });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(607399),
    c = n(621466),
    u = n(17928),
    _ = n(554146),
    E = n(192308),
    A = n(939249),
    h = n(315710),
    f = n(508770),
    I = n(817281),
    p = n(820284),
    T = n(761929),
    m = n(666860),
    g = n(131607),
    S = n(879064),
    N = n(945810);
  let C = (0, N.mj)({
    name: "2026-09-default-emojis",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  var O = n(813703),
    R = n(750506),
    L = n(267102),
    y = n(926972),
    D = n(511558),
    v = n(256449),
    b = n(750385),
    M = n(649852),
    P = n.n(M),
    U = n(462180),
    w = n(319060),
    G = n(289873),
    x = n(212245),
    k = n(793574),
    F = n(688810),
    B = n(850992),
    V = n(151271),
    H = n(887695),
    j = n(87719);
  let W = (0, N.mj)({
    name: "2026-09-web-sticker-picker-upsell-restyle",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
  });
  function Y(e) {
    return W.useConfig({ location: e });
  }
  var K = n(732280),
    $ = n(885386),
    z = n(287809),
    X = n(174459),
    Z = n(240248),
    q = n(196765),
    Q = n(121894);
  let J = Object.freeze({ showPremiumUpsell: !1 }),
    ee = (0, q.v)((e) => J);
  function et(e) {
    (0, Q.r)(() => ee.setState({ showPremiumUpsell: e }));
  }
  var en = n(891090),
    ei = n(194004),
    er = n(788413),
    ea = n(60587),
    es = n(27232),
    el = n(406810),
    eo = n(866665),
    ed = n(797285),
    ec = n(713517),
    eu = n(724511),
    e_ = n(88218),
    eE = n(941971),
    eA = n(71393),
    eh = n(378058),
    ef = n(148355),
    eI = n(361670);
  function ep(e, t, n) {
    return e.stickers.filter((e) => (0, eI.W$)(e, t, n) !== eI.Ux.SENDABLE_WITH_BOOSTED_GUILD);
  }
  function eT(e, t, n, i) {
    return r.useMemo(
      () =>
        i
          ? e.flatMap((e) => {
              let i = (function (e, t, n) {
                switch (e.type) {
                  case ei.Z2.FAVORITE:
                  case ei.Z2.RECENT: {
                    let i = ep(e, t, n);
                    return 0 === i.length ? null : { ...e, stickers: i, isNitroLocked: !1 };
                  }
                  case ei.Z2.GUILD: {
                    var i;
                    let r = ep(e, t, n);
                    if (
                      r.length > 0 &&
                      ((i = { ...e, stickers: r }),
                      i.type === ei.Z2.GUILD &&
                        0 !== i.stickers.length &&
                        i.stickers.every(
                          (e) => (0, eI.W$)(e, t, n) === eI.Ux.SENDABLE_WITH_PREMIUM,
                        ))
                    )
                      return { ...e, stickers: r, isNitroLocked: !0 };
                    return { ...e, isNitroLocked: !1 };
                  }
                  default:
                    return { ...e, isNitroLocked: !1 };
                }
              })(e, t, n);
              return null != i ? [i] : [];
            })
          : e,
      [e, n, t, i],
    );
  }
  var em = n(652215),
    eg = n(698279),
    eS = n(660183),
    eN = n(161975);
  let eC = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
    eO = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
    eR = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
    eL = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
    ey = (0, Z.xI)(w.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    eD = (0, Z.xI)(w.A.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    ev = [eC, eC, eC, eC],
    eb = (eO + eR) * 2 + eC,
    eM = ey + 2 * eD;
  function eP(e) {
    let { ariaLabel: t, children: n, className: a, isSelected: s, onClick: l } = e,
      o = r.useRef(null),
      { isHoveringOrFocusing: d } = (0, ec.A)(o);
    return (0, i.jsxs)(A.D, {
      innerRef: o,
      "aria-label": t,
      className: a,
      onClick: l,
      children: [
        (0, i.jsx)("div", {
          className: eN.a$,
          children: (0, i.jsx)(eE.A, { hovered: d, selected: s, size: "small" }),
        }),
        n,
      ],
    });
  }
  let eU = (e) => {
    let { stickersListRef: t, channel: n } = e,
      a = r.useRef(null),
      [l, o] = r.useState(!0),
      d = B.bM.useStore((e) => e.activeCategoryIndex),
      c = eT(
        (0, v.pD)(n),
        (0, u.bG)([z.default], () => z.default.getCurrentUser()),
        n,
        Y("web.StickerPickerCategoryList"),
      ),
      {
        firstStandardStickerCategoryIndex: _,
        firstStandardStickerCategoryOffsetTop: E,
        guildCategoryCount: h,
        hasFirstPartyStickerPacks: f,
      } = r.useMemo(() => {
        let e = c.filter((e) => e.type === ei.Z2.GUILD).length,
          t = e + +(c[0]?.type === ei.Z2.RECENT) + +(c[0]?.type === ei.Z2.FAVORITE),
          n = t * (eO + eR) - eR + eM;
        return {
          firstStandardStickerCategoryIndex: t + 1,
          firstStandardStickerCategoryOffsetTop: n,
          guildCategoryCount: e,
          hasFirstPartyStickerPacks: null != c.find((e) => e.type === ei.Z2.PACK),
        };
      }, [c]);
    r.useLayoutEffect(() => {
      o(h >= 7);
    }, [h]);
    let {
        renderCategoryListItem: I,
        rowHeight: p,
        onScroll: T,
      } = (function (e) {
        let {
            activeIndex: t,
            stickerPickerCategories: n,
            categoryListRef: a,
            firstStandardStickerCategoryOffsetTop: l,
            setShouldRenderShortcut: o,
          } = e,
          d = (0, x.p)(),
          c = (0, V.RQ)((e) => "" !== e.searchQuery),
          u = r.useCallback(
            (e, a, l) => {
              let o,
                u = n[0]?.type === ei.Z2.FAVORITE,
                _ = +!!u,
                E = n[_]?.type === ei.Z2.RECENT,
                A = n.length;
              if (0 === a && u) {
                let e = !c && 0 === t;
                return (0, i.jsx)(
                  "div",
                  {
                    role: "listitem",
                    "aria-setsize": A,
                    "aria-posinset": a,
                    children: (0, i.jsx)(eP, {
                      ariaLabel: eS.intl.string(eS.t.y3LQCG),
                      className: s()(eN._0, eN.dC, { [eN.k1]: e, [eN.ls]: !E }),
                      isSelected: e,
                      onClick: l,
                      children: (0, i.jsx)(es.StarIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: eN.AB,
                        height: eL,
                        width: eL,
                      }),
                    }),
                  },
                  "favorites",
                );
              }
              if (a === _ && E) {
                let e = !c && t === _;
                return (0, i.jsx)(
                  "div",
                  {
                    role: "listitem",
                    "aria-setsize": A,
                    "aria-posinset": a,
                    children: (0, i.jsx)(eP, {
                      ariaLabel: eS.intl.string(eS.t.RxAmVC),
                      className: s()(eN._0, eN.dC, eN.ls, { [eN.k1]: e }),
                      isSelected: e,
                      onClick: l,
                      children: (0, i.jsx)(el.ClockIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: eN.AB,
                        height: eL,
                        width: eL,
                      }),
                    }),
                  },
                  "recent",
                );
              }
              let h = t === a,
                f = !c && h,
                I = n[a],
                p = n[a + 1],
                T = null != p && I.type === ei.Z2.GUILD && p.type !== ei.Z2.GUILD,
                m = I.type === ei.Z2.PACK,
                g = "",
                S = null;
              if (I.type === ei.Z2.GUILD || I.type === ei.Z2.EMPTY_GUILD_UPSELL) {
                let e = eA.A.getGuild(I.id);
                null != e &&
                  ((o = e.id),
                  (g = e.name),
                  (S = (0, i.jsx)(eu.A, {
                    guild: e,
                    isSelected: h,
                    isLocked: !0 === I.isNitroLocked,
                  })));
              } else if (m) {
                let e = b.A.getStickerPack(I.id);
                null != e &&
                  ((g = e.name),
                  (S = (0, i.jsx)(ef.A, {
                    disableAnimation: !h || c,
                    size: eO,
                    sticker: (0, eh.Id)(e),
                  })));
              }
              return (0, i.jsxs)(
                r.Fragment,
                {
                  children: [
                    (0, i.jsx)(eo.m, {
                      position: "right",
                      text: g,
                      children: (0, i.jsx)("div", {
                        role: "listitem",
                        "aria-setsize": A,
                        "aria-posinset": a,
                        children: (0, i.jsx)(eP, {
                          ariaLabel: g,
                          className: s()(eN._0, { [eN.ND]: m, [eN.Ms]: f && m }),
                          isSelected: f,
                          onClick: () => {
                            (I.type === ei.Z2.PACK &&
                              X.default.track(em.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                location: d?.location,
                                tab: eg.kx.STICKER,
                                sticker_pack_id: I.id,
                                guild_id: o,
                              }),
                              l());
                          },
                          children: S,
                        }),
                      }),
                    }),
                    T ? (0, i.jsx)("hr", { className: eN.ny }, "separator") : null,
                  ],
                },
                I.id,
              );
            },
            [t, d, c, n],
          ),
          _ = r.useCallback((e, t) => (t ? eb : 0), []);
        return {
          getScrollOffsetForIndex: _,
          renderCategoryListItem: u,
          rowHeight: r.useCallback(
            (e, t) => {
              let i = n[t],
                r = n[t + 1];
              return eO + (null != r && i.type === ei.Z2.GUILD && r.type !== ei.Z2.GUILD ? eM : eR);
            },
            [n],
          ),
          onScroll: r.useCallback(
            (e) => {
              let t = a.current?.getListDimensions();
              null == t || o(e + t.height - ey < l);
            },
            [l, a, o],
          ),
        };
      })({
        activeIndex: d,
        stickerPickerCategories: c,
        categoryListRef: a,
        firstStandardStickerCategoryOffsetTop: E,
        setShouldRenderShortcut: o,
      }),
      m = r.useCallback(
        (e) => {
          (e(_), a.current?.scrollTo(E));
        },
        [_, E],
      );
    return (0, i.jsx)(e_.A, {
      className: eN.jv,
      categoryListRef: a,
      expressionsListRef: t,
      store: B.bM,
      listPadding: ev,
      onScroll: T,
      renderCategoryListItem: I,
      rowCount: c.length,
      categories: c,
      categoryHeight: p,
      children: (e) =>
        f &&
        l &&
        (0, i.jsx)(A.D, {
          className: s()(eN.Fe, { [eN.Q6]: !l }),
          onClick: () => m(e),
          children: (0, i.jsx)(ed.t, { size: "md", color: "currentColor" }),
        }),
    });
  };
  var ew = n(297264),
    eG = n(834730),
    ex = n(10392),
    ek = n(82498),
    eF = n(724651),
    eB = n(811611),
    eV = n(821609),
    eH = n(403581);
  function ej(e) {
    let { analyticsSection: t, buttonText: r } = e;
    return (0, i.jsx)(eV.$, {
      variant: "expressive",
      icon: eH.t,
      text: r ?? eS.intl.string(eS.t["8Sh5fg"]),
      onClick: () => {
        var e;
        return (
          (e = { section: t }),
          void (X.default.track(em.HAw.OPEN_MODAL, {
            type: em.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
            location: e,
          }),
          (0, E.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
              n.e("71169"),
              n.e("331584"),
              n.e("532039"),
              n.e("353274"),
            ]).then(n.bind(n, 397313));
            return (t) => (0, i.jsx)(e, { ...t });
          }))
        );
      },
    });
  }
  var eW = n(823894),
    eY = n(202541),
    eK = n(768857);
  function e$(e) {
    let { className: t, onClose: n } = e;
    (0, v.XQ)();
    let { analyticsLocations: a } = (0, F.Ay)(k.A.EMPTY_STATE),
      l = (0, u.yK)([b.A], () => eW.vX.map((e) => b.A.getStickerById(e)));
    r.useEffect(() => {
      (X.default.track(em.HAw.PREMIUM_UPSELL_VIEWED, {
        type: eY.e.EMPTY_STICKER_PICKER_UPSELL,
        source: { section: em.JJy.EMPTY_STICKER_PICKER_UPSELL },
        location_stack: a,
      }),
        (0, ex.sq)(em.U7l.PREMIUM_UPSELL_VIEWED, a, () =>
          (0, ek.uq)(eY.e.EMPTY_STICKER_PICKER_UPSELL),
        ));
    }, [a]);
    let o = (0, K.V)(),
      d = (0, eF.O)(),
      c = null != o || null != d;
    return (0, i.jsxs)("div", {
      className: s()(eK.p$, t, { [eK.Hz]: c }),
      children: [
        c
          ? (0, i.jsx)(eB.Ay, {
              discountOffer: d,
              trialOffer: o,
              onClose: n,
              type: eY.e.EMPTY_STICKER_PICKER_UPSELL,
              subscriptionTier: o?.subscriptionTrial?.skuId ?? eY.pe.TIER_2,
              children: eS.intl.string(eS.t.FnNud4),
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(ew.D, {
                  className: eK.wx,
                  variant: "heading-xl/semibold",
                  children: eS.intl.string(eS.t.HEm04J),
                }),
                (0, i.jsx)(eG.E, {
                  className: eK.VA,
                  color: "text-default",
                  variant: "text-md/normal",
                  children: eS.intl.string(eS.t.FnNud4),
                }),
                (0, i.jsx)("div", {
                  className: eK.l1,
                  children: l
                    .filter((e) => null != e)
                    .map((e) =>
                      (0, i.jsx)(ef.A, { sticker: e, className: eK.yI, size: 80 }, e?.id),
                    ),
                }),
              ],
            }),
        !c && (0, i.jsx)(ej, { analyticsSection: em.JJy.EXPRESSION_PICKER }),
      ],
    });
  }
  n(30146);
  var ez = n(404778),
    eX = n(537652),
    eZ = n(962125),
    eq = n(286509),
    eQ = n(414872),
    eJ = n(158045),
    e0 = n(631576),
    e1 = n(369163),
    e2 = n(123292),
    e3 = n(631305),
    e6 = n(468689),
    e5 = n(931991),
    e4 = n(473145),
    e7 = n(625633),
    e8 = n(136123);
  let e9 = function (e) {
    let {
        className: t,
        guildId: n,
        channel: a,
        shouldTrackUpsellViewed: l,
        setTrackedUpsellViewed: o,
      } = e,
      { location: d } = (0, x.p)(),
      { analyticsLocations: c } = (0, F.Ay)(),
      _ = (0, u.bG)([eA.A], () => eA.A.getGuild(n)),
      { canManageAllExpressions: E } = (0, e5.nr)(_),
      A =
        null != _ &&
        0 === (0, e4.aG)(_.premiumTier) &&
        !_.features.has(em.GuildFeatures.MORE_STICKERS);
    return (r.useEffect(() => {
      E &&
        A &&
        l &&
        ((0, m.zV)(em.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
          location: d,
          guild_id: _?.id,
          channel_id: a?.id,
          type: "Expression Picker Inline Sticker Upsell",
          location_stack: c,
        }),
        o(!0));
    }, [A, _, a, d, l, o, c, E]),
    null != _ && E)
      ? A
        ? (0, i.jsxs)("div", {
            className: s()(e8.UX, t),
            onKeyDown: (e) => e.stopPropagation(),
            children: [
              (0, i.jsx)(e1.v, { size: "md", color: "currentColor", className: e8.Kk }),
              (0, i.jsx)(eG.E, {
                color: "interactive-text-default",
                className: e8.rf,
                variant: "text-sm/normal",
                children: eS.intl.format(eS.t.AXWla1, { count: (0, e4.aG)(em.TVA.TIER_1) }),
              }),
              (0, i.jsx)(e2.Q, {
                variant: "primary",
                text: eS.intl.string(eS.t["Gb+BJD"]),
                onClick: function () {
                  null != _ &&
                    (0, e3.A)({
                      analyticsLocations: c,
                      analyticsSourceLocation: d,
                      guild: _,
                      perks: (0, e7.q5)(),
                    });
                },
              }),
            ],
          })
        : (0, i.jsxs)("div", {
            className: s()(e8.UX, t),
            onKeyDown: (e) => e.stopPropagation(),
            children: [
              (0, i.jsx)(ed.t, {
                size: "custom",
                color: "currentColor",
                className: e8.Kk,
                width: 20,
                height: 20,
              }),
              (0, i.jsx)(eG.E, {
                color: "interactive-text-default",
                className: e8.rf,
                variant: "text-sm/normal",
                children: eS.intl.string(eS.t.S83wgh),
              }),
              (0, i.jsx)(e2.Q, {
                variant: "primary",
                text: eS.intl.string(eS.t.bwNjug),
                onClick: function () {
                  ((0, V.v8)(), e6.default.open(n, em.BEX.STICKERS, d));
                },
              }),
            ],
          })
      : null;
  };
  var te = n(240864),
    tt = n(89366),
    tn = n(202639);
  let ti = (0, l.throttle)(
    function (e) {
      let {
          listRef: t,
          searchQuery: n,
          nitroLockedSectionStates: i,
          scrollTop: r,
          sectionHeaderHeight: a,
          sectionFooterHeight: s,
          setShowUpsell: l,
        } = e,
        { areOnlyNitroLockedSectionsVisible: o } = (0, te.s)({
          listRef: t,
          searchQuery: n,
          nitroLockedSectionStates: i,
          scrollTop: r,
          sectionHeaderHeight: a,
          sectionFooterHeight: s,
        });
      l(o);
    },
    300,
    { leading: !1, trailing: !0 },
  );
  var tr = n(307301),
    ta = n(182922),
    ts = n(683522);
  let tl = (0, Z.xI)(
      w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS,
    ),
    to = (0, Z.xI)(
      w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS,
    ),
    td = r.memo(function (e) {
      let { stickersGrid: t } = e,
        n = B.bM.useStore((e) => e.inspectedExpressionPosition),
        a = r.useMemo(() => {
          let { rowIndex: e, columnIndex: i } = n,
            r = t[e]?.[i];
          if (null == r) return null;
          switch (r.type) {
            case ei.op.CREATE_STICKER:
              return { guild_id: r.guild_id, name: r.name };
            case ei.op.STICKER:
              return r.sticker;
            default:
              return null;
          }
        }, [t, n]);
      if (null == a) return null;
      let { graphic: s, title: l } = (function (e) {
          let t = null,
            n = null;
          if ((!(0, eh.FD)(e) && !(0, eh.Xw)(e)) || (0, eh.Xw)(e)) {
            let r = eA.A.getGuild(e.guild_id);
            null != r &&
              ((t = eS.intl.format(eS.t.cZOkbs, { source: r.name })),
              (n = (0, i.jsx)(eu.A, { guild: r })));
          } else if ((0, eh.FD)(e)) {
            let r = b.A.getStickerPack(e.pack_id);
            null != r &&
              ((t = eS.intl.format(eS.t.cZOkbs, { source: r.name })),
              (n = (0, i.jsx)(ef.A, { size: to, sticker: (0, eh.Id)(r), disableAnimation: !0 })));
          }
          return { title: t, graphic: n };
        })(a),
        o =
          (0, eh.FD)(a) || (0, eh.Xw)(a)
            ? (0, i.jsx)(ef.A, { isInteracting: !0, size: tl, sticker: a, disableAnimation: !0 })
            : (0, i.jsx)("div", {
                className: ts.P,
                children: (0, i.jsx)(tr.j, { size: "md", color: "currentColor", className: ts.K }),
              });
      return (0, i.jsx)(ta.A, {
        graphicPrimary: o,
        graphicSecondary: s,
        titlePrimary: a.name,
        titleSecondary: (0, eh.FD)(a) || (0, eh.Xw)(a) ? l : null,
      });
    });
  var tc = n(140735),
    tu = n(194261),
    t_ = n(442433),
    tE = n(304072),
    tA = n(513902);
  let th = function (e) {
    let { size: t } = e;
    return (0, i.jsx)("div", {
      className: tA.G,
      style: { width: t, height: t },
      children: (0, i.jsx)(tu.LockIcon, { size: "xxs", color: "currentColor", className: tA.I }),
    });
  };
  var tf = n(777371);
  let tI = r.memo(function (e) {
    let {
        isDisplayingIndividualStickers: t = !1,
        preferAnimation: a = !0,
        getStickerItemProps: o,
        getStickerRowProps: d,
        gutterWidth: c,
        inspectedStickerPosition: u,
        isScrolling: _,
        isUsingKeyboardNavigation: h,
        onInspect: f,
        onSelect: I,
        rowIndex: p,
        stickerClassName: T,
        stickerDescriptors: m,
        stickerPadding: g,
        stickerSize: S,
        ownedStickerPacks: N,
        enlargeOnInteraction: C = !1,
        channel: O,
        currentUser: R,
        checkSendability: L = !0,
        upsellRestyleEnabled: y = !1,
        isSectionNitroLocked: D = !1,
      } = e,
      { location: v } = (0, x.p)(),
      b = S + 2 * g,
      M = r.useMemo(
        () => ({
          gridColumnGap: c,
          gridTemplateColumns: `repeat(auto-fill, ${b}px)`,
          height: b,
          paddingRight: t ? void 0 : b,
        }),
        [t, c, b],
      ),
      P = r.useMemo(() => ({ width: S, height: S, padding: g }), [g, S]),
      [U, w] = (0, tE.A)(null, 300);
    return (0, i.jsx)("div", {
      className: tf.nM,
      style: M,
      ...d?.(p),
      children: m.map((e) => {
        let d = e.visibleRowIndex === u?.rowIndex && e.columnIndex === u?.columnIndex,
          c = e.type === ei.op.STICKER && C && d,
          m = (0, l.throttle)(() => {
            _?.current === !0 || h?.current === !0 || d || f?.(e);
          }, 250),
          { ref: g, tabIndex: b, onFocus: M, ...G } = o?.(e.columnIndex, p) ?? {};
        switch (e.type) {
          case ei.op.CREATE_STICKER:
            return (0, i.jsx)(
              "div",
              {
                ...G,
                children: (0, i.jsxs)(A.D, {
                  "aria-label": e.name,
                  className: s()(tf.wP, T, { [tf.Kj]: d }),
                  innerRef: g,
                  tabIndex: b,
                  onFocus: M ?? m,
                  onMouseMove: m,
                  onClick: function () {
                    e.type === ei.op.CREATE_STICKER &&
                      (X.default.track(em.HAw.OPEN_MODAL, {
                        type: em.JJy.CREATE_STICKER_MODAL,
                        location: v,
                      }),
                      (0, E.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([
                          n.e("860350"),
                          n.e("142753"),
                          n.e("207998"),
                          n.e("179652"),
                          n.e("689827"),
                          n.e("268582"),
                          n.e("883952"),
                          n.e("66580"),
                          n.e("480436"),
                          n.e("50342"),
                          n.e("420643"),
                          n.e("98913"),
                          n.e("429143"),
                        ]).then(n.bind(n, 445002));
                        return (n) => (0, i.jsx)(t, { guildId: e.guild_id, ...n });
                      }));
                  },
                  style: P,
                  children: [
                    !C && (0, i.jsx)("div", { className: tf.fw }),
                    (0, i.jsx)("div", {
                      className: tf.P0,
                      children: (0, i.jsx)(tr.j, {
                        size: "md",
                        color: "currentColor",
                        className: tf.Kk,
                      }),
                    }),
                    (0, i.jsx)(eG.E, {
                      color: "interactive-text-active",
                      variant: "text-xs/normal",
                      children: eS.intl.string(eS.t["+nEuqr"]),
                    }),
                  ],
                }),
              },
              e.guild_id,
            );
          case ei.op.STICKER: {
            let l = (L ? (0, eI.W$)(e.sticker, R, O) : eI.Ux.SENDABLE) !== eI.Ux.SENDABLE,
              o = y && l && !D,
              E = !y && l,
              f = t && null != N && (0, eh.FD)(e.sticker) && !N.has(e.sticker.pack_id);
            return (0, r.createElement)(
              "div",
              { ...G, key: e.sticker.id },
              (0, i.jsxs)(A.D, {
                className: s()(tf.yI, T, { [tf.PV]: d, [tf.TV]: U === e.sticker.id }),
                innerRef: g,
                tabIndex: b,
                onFocus: M ?? m,
                onMouseMove: m,
                onClick: function (t) {
                  if (_?.current === !0 || h?.current === !0) return;
                  let n = t.altKey;
                  (n && e.type === ei.op.STICKER && !(0, eh.o1)(e.sticker.id) && w(e.sticker.id),
                    I?.(e, n));
                },
                onContextMenu: function (e) {
                  (0, t_.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                      n.e("638221"),
                      n.e("904774"),
                      n.e("446132"),
                    ]).then(n.bind(n, 233503));
                    return (t) => (0, i.jsx)(e, { ...t });
                  });
                },
                style: P,
                "data-type": ea.g.STICKER,
                "data-id": e.sticker.id,
                "data-name": e.sticker.name,
                "data-format-type": e.sticker.format_type,
                children: [
                  (0, i.jsx)(tc.A, { children: (0, ef.h)(e.sticker) }),
                  (0, i.jsxs)("div", {
                    "aria-hidden": !0,
                    children: [
                      !C && (0, i.jsx)("div", { className: tf.fw }),
                      (0, i.jsx)(ef.A, {
                        className: s()(tf.SI, {
                          [tf.ot]:
                            C && !d && null != u && -1 !== u.rowIndex && -1 !== u.columnIndex,
                          [tf.Q$]: c,
                          [tf.No]: E,
                          [tf.UK]: o,
                        }),
                        disableAnimation: !d && !a,
                        enlargeOnInteraction: C,
                        isInteracting: d,
                        maskAsset: d,
                        sticker: e.sticker,
                        size: S,
                      }),
                      f ? (0, i.jsx)(th, { size: 20 }) : null,
                      o
                        ? (0, i.jsx)("div", {
                            className: tf.MC,
                            children: (0, i.jsx)(tu.LockIcon, {
                              size: "xs",
                              color: "currentColor",
                              className: tf.hz,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            );
          }
        }
      }),
    });
  });
  function tp(e) {
    let { descriptor: t, currentUser: n, channel: i, onSelect: r } = e;
    switch ((0, eI.W$)(t.sticker, n, i)) {
      case eI.Ux.SENDABLE:
        r(t);
        break;
      case eI.Ux.SENDABLE_WITH_PREMIUM:
        (X.default.track(em.HAw.PREMIUM_PROMOTION_OPENED, {
          location_section: em.JJy.STICKER_PICKER_UPSELL,
          location_object: em.ZSU.STICKER,
        }),
          et(!0));
      case eI.Ux.SENDABLE_WITH_BOOSTED_GUILD:
      case eI.Ux.NONSENDABLE:
    }
  }
  var tT = n(457231);
  let tm = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    tg = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
    tS = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
    tN = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
    tC = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    tO = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
    tR = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    tL = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
    ty = (0, Z.xI)(w.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    tD = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    tv = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    tb = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    tM = tD + 2 + tb,
    tP = tv + 2 + tb,
    tU = [tS, tC, tO, tR],
    tw = [tN, tC, tO, tR],
    tG = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
    tx = "sticker-search-nitro",
    tk = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"];
  function tF(e) {
    let { onSuggestionClick: t } = e;
    return (0, i.jsx)("div", {
      className: tT.yB,
      children: tk.map((e) =>
        (0, i.jsx)(
          A.D,
          {
            className: tT.x_,
            onClick: () => t(e),
            children: (0, i.jsx)(eG.E, {
              variant: "text-sm/normal",
              color: "text-default",
              children: e,
            }),
          },
          e,
        ),
      ),
    });
  }
  function tB(e, t) {
    return null != t && 0 !== t.sendableWithPremium.length && e === +(t.sendable.length > 0);
  }
  function tV(e, t) {
    return null != t && 0 === e && t.sendable.length > 0 && t.sendableWithPremium.length > 0;
  }
  let tH = function (e) {
    let {
        collapsedStickersCategories: t,
        gridWidth: n,
        filteredStickers: a,
        getStickerItemProps: l,
        getStickerRowProps: o,
        gutterWidth: c,
        isUsingKeyboardNavigation: _,
        onSelectSticker: E,
        rowCount: A,
        rowCountBySection: h,
        stickersCategories: f,
        stickersGrid: I,
        channel: p,
        ref: T,
      } = e,
      m = r.useRef(!1),
      g = r.useRef(null),
      [S, N] = B.bM.useStore((e) => [e.activeCategoryIndex, e.inspectedExpressionPosition], U.x),
      { analyticsLocations: C } = (0, F.Ay)(k.A.STICKER_PICKER),
      O = (0, V.RQ)((e) => e.searchQuery),
      R = (0, u.bG)([b.A], () => b.A.getPremiumPacks()),
      L = (0, u.bG)([z.default], () => z.default.getCurrentUser()),
      y = eJ.Ay.canUseCustomStickersEverywhere(L),
      [D, v] = r.useState(0),
      M = Y("web.StickerPickerList"),
      P = r.useMemo(() => new Set(R.map((e) => e.id)), [R]),
      w = eT(f, L, p, M),
      {
        renderRow: G,
        renderSection: j,
        renderSectionFooter: W,
        sectionFooterHeight: K,
        renderSectionHeader: Z,
        sectionHeaderHeight: q,
      } = (function (e) {
        let {
            collapsedStickersCategories: t,
            gridWidth: n,
            onSelectSticker: a,
            getStickerItemProps: l,
            getStickerRowProps: o,
            gutterWidth: d,
            inspectedStickerPosition: c,
            isScrolling: u,
            isUsingKeyboardNavigation: _,
            stickersGrid: E,
            stickersCategories: A,
            filteredStickers: h,
            ownedStickerPacks: f,
            channel: I,
            currentUser: p,
            activeSectionIndex: T,
            upsellRestyleEnabled: m,
          } = e,
          g = (0, x.p)(),
          { handleStickerInspect: S, handleSelect: N } = (function (e) {
            let { onSelectSticker: t, channel: n, currentUser: i } = e,
              a = (0, x.p)(),
              s = (0, V.RQ)((e) => e.searchQuery);
            return {
              handleStickerInspect: r.useCallback((e) => {
                let { visibleRowIndex: t, columnIndex: n, gridSectionIndex: i } = e;
                (B.bM.setActiveCategoryIndex(i),
                  B.bM.setInspectedExpressionPosition(n, t, ea.t.MOUSE_EVENT),
                  e.type === ei.op.STICKER && B.bM.setSearchPlaceholder(e.sticker.name));
              }, []),
              handleSelect: r.useCallback(
                (e, r) => {
                  if (e.type !== ei.op.STICKER) return;
                  let { sticker: l } = e;
                  if (null == l) return;
                  let o = {
                    ...a.location,
                    object:
                      "" === s ? em.ZSU.STICKER_PICKER_VIEW_ALL : em.ZSU.STICKER_SEARCH_VIEW_ALL,
                  };
                  (0, eI.W$)(l, i, n) !== eI.Ux.SENDABLE
                    ? tp({ descriptor: e, currentUser: i, channel: n, onSelect: t })
                    : r
                      ? (0, eh.o1)(l.id)
                        ? (0, e0.vr)(l.id)
                        : ((0, en.Dt)({ sticker: l, location: { ...o, object: em.ZSU.STICKER } }),
                          (0, e0.uK)(l.id))
                      : t(e);
                },
                [a.location, s, i, n, t],
              ),
            };
          })({ onSelectSticker: a, channel: I, currentUser: p }),
          [C, O] = r.useState(!1),
          R = r.useCallback((e) => {
            $.tP.updateSetting(Array.from(e));
          }, []),
          L = r.useCallback(
            (e) => {
              let t = E[e],
                r = t?.[0]?.gridSectionIndex,
                a = null != r && ((m && tB(r, h)) || (null == h && A[r]?.isNitroLocked === !0));
              return null != t
                ? (0, i.jsx)(
                    tI,
                    {
                      getStickerItemProps: l,
                      getStickerRowProps: o,
                      gutterWidth: d,
                      inspectedStickerPosition: c,
                      isScrolling: u,
                      isUsingKeyboardNavigation: _,
                      onInspect: S,
                      onSelect: N,
                      rowIndex: e,
                      stickerClassName: tT.yI,
                      stickerDescriptors: t,
                      stickerSize: n > tm ? tD : tv,
                      stickerPadding: 1,
                      preferAnimation: n <= tg,
                      ownedStickerPacks: f,
                      isDisplayingIndividualStickers: !0,
                      channel: I,
                      currentUser: p,
                      upsellRestyleEnabled: m,
                      isSectionNitroLocked: a,
                    },
                    e,
                  )
                : null;
            },
            [E, l, o, d, c, u, _, S, N, n, f, I, p, h, A, m],
          ),
          y = r.useCallback(
            (e) => {
              let t = A[e],
                n = A[e + 1];
              return t?.isNitroLocked === !0 && (null == n || !0 !== n.isNitroLocked);
            },
            [A],
          ),
          D = r.useCallback(
            (e) => {
              let t = A[e],
                n = A[e + 1];
              return t?.isNitroLocked !== !0 && n?.isNitroLocked === !0;
            },
            [A],
          ),
          v = r.useCallback(
            (e, t) => {
              let n = A[e],
                r = m && tB(e, h),
                a = r || (null == h && n?.isNitroLocked === !0),
                l = r || (null == h && y(e));
              return null == h || a
                ? (0, i.jsx)(
                    "div",
                    { role: "rowgroup", className: s()({ [tT.cW]: a, [tT.fV]: l }), children: t },
                    e,
                  )
                : t;
            },
            [h, A, m, y],
          ),
          M = r.useCallback(
            function (e) {
              let { isStickerPack: n = !0 } =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = new Set(t),
                r = t.has(e);
              (r ? i.delete(e) : i.add(e),
                X.default.track(em.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                  location: g?.location,
                  tab: eg.kx.STICKER,
                  collapsed: !r,
                  sticker_pack_id: n ? e : null,
                }),
                R(i));
            },
            [g, t, R],
          ),
          P = r.useCallback(
            (e) => {
              let n = A[e];
              if (null != h) {
                let { sendable: n, sendableWithPremium: r } = h;
                if (0 === e && n.length > 0) return null;
                if (m && tB(e, h)) {
                  let n = T === e;
                  return (0, i.jsx)(
                    eq.A,
                    {
                      className: s()(tT.jH, tT.M0, { [tT.RA]: !n, [tT.sp]: n }),
                      "aria-label": eS.intl.string(eS.t.pAF6xE),
                      icon: (0, i.jsx)(eH.t, { size: "xs", color: "currentColor" }),
                      isCollapsed: t.has(tx),
                      onClick: () => M(tx, { isStickerPack: !1 }),
                      children: eS.intl.string(eS.t.pAF6xE),
                    },
                    "stickers-available-with-nitro-header",
                  );
                }
                let a = n.length > 0 && r.length > 0;
                return (0, i.jsxs)(i.Fragment, {
                  children: [
                    a
                      ? (0, i.jsx)("div", { className: tT.yF, children: (0, i.jsx)(ez.c, {}) })
                      : null,
                    (0, i.jsx)(
                      eq.A,
                      {
                        className: tT.jH,
                        "aria-label": eS.intl.string(eS.t.wbfJFh),
                        children: eS.intl.string(eS.t["05Z/0l"]),
                      },
                      "stickers-you-might-like-header",
                    ),
                  ],
                });
              }
              let r = A[e]?.isNitroLocked === !0,
                a = s()(tT.jH, { [tT.M0]: m, [tT.RA]: r && T !== e, [tT.sp]: r && T === e });
              switch (n.type) {
                case ei.Z2.FAVORITE:
                  return (0, i.jsx)(
                    eq.A,
                    {
                      className: a,
                      "aria-label": eS.intl.formatToPlainString(eS.t["7lLCjZ"], {
                        categoryName: n.name,
                      }),
                      icon: (0, i.jsx)(es.StarIcon, { size: "xs", color: "currentColor" }),
                      isCollapsed: t.has(n.id),
                      onClick: () => M(n.id, { isStickerPack: !1 }),
                      children: n.name,
                    },
                    `header-${n.id}`,
                  );
                case ei.Z2.RECENT:
                  return (0, i.jsx)(
                    eq.A,
                    {
                      className: a,
                      "aria-label": eS.intl.formatToPlainString(eS.t["7lLCjZ"], {
                        categoryName: n.name,
                      }),
                      icon: (0, i.jsx)(el.ClockIcon, { size: "xs", color: "currentColor" }),
                      isCollapsed: t.has(n.id),
                      onClick: () => M(n.id, { isStickerPack: !1 }),
                      children: n.name,
                    },
                    `header-${n.id}`,
                  );
                case ei.Z2.GUILD:
                case ei.Z2.EMPTY_GUILD_UPSELL: {
                  let e = eA.A.getGuild(n.id);
                  if (null == e) return null;
                  return (0, i.jsx)(
                    eq.A,
                    {
                      className: a,
                      "aria-label": eS.intl.formatToPlainString(eS.t["7lLCjZ"], {
                        categoryName: e.name,
                      }),
                      icon: (0, i.jsx)(eu.A, { guild: e, height: 16, width: 16 }),
                      isCollapsed: t.has(e.id),
                      onClick: () => M(e.id),
                      children: e.name,
                    },
                    `h${e.id}`,
                  );
                }
                case ei.Z2.PACK: {
                  let e = b.A.getStickerPack(n.id);
                  if (null == e) return null;
                  return (0, i.jsx)(
                    eq.A,
                    {
                      className: a,
                      "aria-label": eS.intl.formatToPlainString(eS.t["7lLCjZ"], {
                        categoryName: e.name,
                      }),
                      icon: (0, i.jsx)(ef.A, {
                        disableAnimation: !0,
                        size: 12,
                        sticker: (0, eh.Id)(e),
                      }),
                      isCollapsed: t.has(e.id),
                      onClick: () => M(e.id),
                      children: e.name,
                    },
                    `h${e.id}`,
                  );
                }
              }
            },
            [T, t, h, A, M, m],
          ),
          U = r.useCallback(
            (e) => {
              if (null != h) {
                let { sendable: t, sendableWithPremium: n } = h;
                return 0 === e && t.length > 0
                  ? 0
                  : m && tB(e, h)
                    ? ty + 16
                    : ty + (t.length > 0 && n.length > 0 ? tL : 0);
              }
              return ty + 16 * (A[e]?.isNitroLocked === !0);
            },
            [h, A, m],
          );
        return {
          renderRow: L,
          renderSection: v,
          renderSectionHeader: P,
          sectionHeaderHeight: U,
          renderSectionFooter: r.useCallback(
            (e) => {
              if (null != h)
                return m
                  ? tB(e, h)
                    ? (0, i.jsx)("div", { className: tT.pQ })
                    : tV(e, h)
                      ? (0, i.jsx)(eQ.Ay, { className: tT.$2 })
                      : null
                  : null;
              let n = A[e],
                r = t.has(n.id),
                a =
                  n.type !== ei.Z2.EMPTY_GUILD_UPSELL || r
                    ? null
                    : (0, i.jsx)(
                        e9,
                        {
                          className: tT.Ij,
                          guildId: n.id,
                          channel: I,
                          shouldTrackUpsellViewed: !C,
                          setTrackedUpsellViewed: O,
                        },
                        `sticker-picker-empty-guild-inline-upsell-${n.id}`,
                      ),
                s = null;
              return (
                D(e)
                  ? (s = (0, i.jsx)(eQ.Ay, { className: tT.$2 }))
                  : y(e) && (s = (0, i.jsx)("div", { className: tT.pQ })),
                null == a && null == s ? null : (0, i.jsxs)(i.Fragment, { children: [a, s] })
              );
            },
            [A, t, h, I, C, m, D, y],
          ),
          sectionFooterHeight: r.useCallback(
            (e) => {
              if (null != h) return m ? (tB(e, h) ? 33 : tV(e, h) ? eQ.kg : 0) : 0;
              let n = A[e],
                i = t.has(n.id),
                r = 0;
              return (
                n.type !== ei.Z2.EMPTY_GUILD_UPSELL || i || (r += tG),
                D(e) ? (r += eQ.kg) : y(e) && (r += 33),
                r
              );
            },
            [h, m, A, t, D, y],
          ),
        };
      })({
        collapsedStickersCategories: t,
        gridWidth: n,
        stickersCategories: w,
        stickersGrid: I,
        isScrolling: m,
        isUsingKeyboardNavigation: _,
        onSelectSticker: E,
        getStickerItemProps: l,
        getStickerRowProps: o,
        gutterWidth: c,
        inspectedStickerPosition: N,
        filteredStickers: a,
        ownedStickerPacks: P,
        channel: p,
        currentUser: L,
        activeSectionIndex: D,
        upsellRestyleEnabled: M,
      }),
      { onScroll: Q, upsell: J } = (function (e) {
        let {
            upsellRestyleEnabled: t,
            canUseStickersEverywhere: n,
            listRef: a,
            searchQuery: s,
            categories: l,
            sectionHeaderHeight: o,
            sectionFooterHeight: c,
          } = e,
          { location: u } = (0, x.p)(),
          { analyticsLocations: _ } = (0, F.Ay)(k.A.STICKER_PICKER),
          [E, A] = r.useState(!1),
          h = r.useMemo(() => l.map((e) => ({ isNitroLocked: !0 === e.isNitroLocked })), [l]),
          f = r.useCallback(
            (e) => {
              t &&
                ti({
                  listRef: a,
                  searchQuery: s,
                  nitroLockedSectionStates: h,
                  scrollTop: e,
                  sectionHeaderHeight: o,
                  sectionFooterHeight: c,
                  setShowUpsell: A,
                });
            },
            [t, a, h, s, c, o],
          ),
          I = E && "" === s && t;
        if (
          (r.useEffect(() => {
            !I ||
              n ||
              d.Fr ||
              (X.default.track(em.HAw.PREMIUM_UPSELL_VIEWED, {
                type: eY.e.STICKER_PICKER_FLOATING_UPSELL,
                location: u,
                location_stack: _,
              }),
              (0, ex.sq)(em.U7l.PREMIUM_UPSELL_VIEWED, _, () =>
                (0, ek.uq)(eY.e.STICKER_PICKER_FLOATING_UPSELL),
              ));
          }, [u, _, n, I]),
          !t || n || d.Fr)
        )
          return { onScroll: f, upsell: null };
        let p = eS.intl.format(eS.t.eontIh, {
            nitroTierName: (0, eJ.Dd)(eY.PremiumTypes.TIER_2),
            onClick: () => {
              (X.default.track(em.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: em.JJy.STICKER_PICKER_FLOATING_UPSELL,
              }),
                et(!0));
            },
          }),
          T = (0, eJ.LE)((0, tt.qD)(), eY.pe.TIER_2) ?? eS.intl.string(eS.t.BmJkbd);
        return {
          onScroll: f,
          upsell: (0, i.jsx)(tn.d, {
            showUpsell: I,
            text: p,
            button: T,
            buttonAnalyticsObject: { section: em.JJy.STICKER_PICKER_FLOATING_UPSELL },
          }),
        };
      })({
        upsellRestyleEnabled: M,
        canUseStickersEverywhere: y,
        listRef: g,
        searchQuery: O,
        categories: w,
        sectionHeaderHeight: q,
        sectionFooterHeight: K,
      });
    r.useEffect(() => {
      M && Q(g.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [M, Q, h]);
    let ee = (0, H.Fk)({
        activeCategoryIndex: S,
        isScrolling: m,
        listRef: g,
        onActiveCategoryIndexChange: B.bM.setActiveCategoryIndex,
        scrollOffset: 20,
        searchQuery: O,
      }),
      er = r.useCallback((e) => {
        let t = g.current?.getSectionDescriptors();
        null == t ||
          v(
            Math.max(
              t.findLastIndex((t) => t.offset.top <= e),
              0,
            ),
          );
      }, []);
    r.useLayoutEffect(() => {
      M && er(g.current?.getScrollerNode()?.scrollTop ?? 0);
    }, [M, er, a, h]);
    let eo = r.useCallback(
      (e) => {
        (ee(e), M && er(e), Q(e));
      },
      [ee, Q, er, M],
    );
    return (
      (0, H.FV)({ searchQuery: O, activeCategoryIndex: S, listRef: g }),
      r.useImperativeHandle(
        T,
        () => ({
          scrollTo: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.current?.scrollTo(...t);
          },
          getRowDescriptors: () => g.current?.getRowDescriptors() ?? [],
          getSectionDescriptors: () => g.current?.getSectionDescriptors() ?? [],
          scrollToSectionTop: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.current?.scrollToSectionTop(...t);
          },
          scrollRowIntoView: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.current?.scrollRowIntoView(...t);
          },
          getScrollerNode: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.current?.getScrollerNode(...t);
          },
          scrollIntoViewNode: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.current?.scrollIntoViewNode(...t);
          },
          getListDimensions: function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return g.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
          },
        }),
        [],
      ),
      (0, i.jsx)(F.f5, {
        value: C,
        children: (0, i.jsxs)("div", {
          className: tT.iE,
          children: [
            (0, i.jsxs)("div", {
              className: tT.AD,
              children: [
                null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length
                  ? (0, i.jsx)(eX.A, {
                      message: eS.intl.string(eS.t["zc+LQd"]),
                      className: tT.__invalid_noSearchResultsContainer,
                      suggestions: (0, i.jsx)(tF, { onSuggestionClick: (e) => (0, V.Ri)(e, !0) }),
                    })
                  : (0, i.jsx)(eZ.A, {
                      role: "none presentation",
                      listPadding: null != a ? tw : tU,
                      onScroll: eo,
                      renderRow: G,
                      renderSection: j,
                      renderSectionHeader: Z,
                      renderSectionFooter: W,
                      rowCount: A,
                      rowCountBySection: h,
                      rowHeight: n > tm ? tM : tP,
                      sectionHeaderHeight: q,
                      sectionFooterHeight: K,
                      stickyHeaders: !0,
                      ref: g,
                    }),
                J,
              ],
            }),
            (0, i.jsx)(td, { stickersGrid: I }),
          ],
        }),
      })
    );
  };
  var tj = n(602034),
    tW = n(683438),
    tY = n(909802);
  let tK = function (e) {
    let { onKeyDown: t, stickersListRef: n, channel: a, ref: s } = e,
      l = (0, v.ZO)(a),
      o = r.useRef(null),
      { searchQuery: d, isSearchSuggestion: c } = (0, V.RQ)(
        (e) => ({ searchQuery: e.searchQuery, isSearchSuggestion: e.isSearchSuggestion }),
        U.x,
      ),
      u = B.bM.useStore((e) => e.searchPlaceholder),
      [_, E] = B.bM.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], U.x),
      A = r.useCallback(
        (e) => {
          (B.bM.setActiveCategoryIndex("" === e ? 0 : -1),
            B.bM.setInspectedExpressionPosition(0, 0),
            B.bM.setSearchPlaceholder(null),
            (0, V.Ri)(e),
            n.current?.scrollTo(0));
        },
        [n],
      ),
      h = r.useCallback(() => {
        A("");
      }, [A]);
    return (
      r.useImperativeHandle(s, () => ({ focus: () => o.current?.focus() })),
      r.useLayoutEffect(() => {
        c && o.current?.focus();
      }, [c]),
      (0, i.jsx)("div", {
        className: tY.i,
        children: (0, i.jsx)(tW.I, {
          autoFocus: l,
          disabled: !l,
          query: d,
          ref: o,
          placeholder: u ?? (l ? eS.intl.string(eS.t.dt5h1C) : eS.intl.string(eS.t["Pck/4U"])),
          onClear: h,
          onKeyDown: t,
          onChange: A,
          inputProps: {
            "aria-haspopup": "grid",
            "aria-controls": eW.lq,
            "aria-expanded": !0,
            ...(E
              ? { "aria-activedescendant": (0, tj.Aq)(eW.lq, _.columnIndex, _.rowIndex) }
              : void 0),
          },
        }),
      })
    );
  };
  n(321073);
  var t$ = n(802842),
    tz = n(330422),
    tX = n(609178);
  function tZ(e) {
    let { onUpsellClicked: t } = e,
      { location: n } = (0, x.p)(),
      { analyticsLocations: r } = (0, F.Ay)(k.A.STICKER_PICKER),
      a = (0, V.RQ)((e) => e.searchQuery);
    return (0, i.jsx)(tX.A, {
      title: eS.intl.string(eS.t.Eukdgl),
      description: eS.intl.string(eS.t.sMmd7s),
      analyticsLocationSection: em.JJy.STICKER_PICKER_UPSELL,
      onClose: () => et(!1),
      onUpsellClicked: t,
      upsellViewedTrackingData: {
        type: eY.e.STICKER_PICKER_UPSELL,
        location: { ...n, object: em.ZSU.STICKER },
        location_stack: r,
        sku_id: (0, eJ.mH)(eJ.Ay.getSkuIdForPremiumType(eY.PremiumTypes.TIER_2)),
        has_search_query: "" !== a,
      },
      graphic: (0, i.jsx)(tz.n, { alt: "", ariaHidden: !0 }),
      useNitroGradient: !0,
    });
  }
  var tq = n(789645),
    tQ = n(964486),
    tJ = n(420136),
    t0 = n(939383);
  function t1() {
    return et(!1);
  }
  function t2(e) {
    let { onLearnMore: t } = e,
      { analyticsLocations: n } = (0, F.Ay)(k.A.PREMIUM_UPSELL);
    (0, r.useEffect)(() => {
      (X.default.track(em.HAw.PREMIUM_UPSELL_VIEWED, {
        location_section: em.JJy.STICKER_PICKER_UPSELL,
        type: eY.e.STICKER_PICKER_UPSELL,
        location_stack: n,
      }),
        (0, ex.sq)(em.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, ek.uq)(eY.e.STICKER_PICKER_UPSELL)));
    }, [n]);
    let a = (0, r.useRef)(null);
    (0, tQ.Ay)(() => {
      a.current?.focus();
    });
    let l = (0, K.V)(),
      o = (0, eF.O)(),
      d = l?.subscriptionTrial?.skuId === eY.pe.TIER_0,
      c = null != l || null != o;
    return (0, i.jsxs)("div", {
      ref: a,
      tabIndex: -1,
      "aria-label": eS.intl.string(eS.t.jJG1pl),
      className: s()(tJ.VL, { [tJ.Hz]: c }),
      children: [
        c
          ? (0, i.jsx)(eB.Ay, {
              trialOffer: l,
              discountOffer: o,
              onClose: t1,
              type: eY.e.STICKER_PICKER_UPSELL,
              subscriptionTier: l?.subscriptionTrial?.skuId ?? eY.pe.TIER_2,
              children: d
                ? eS.intl.format(eS.t.MAGagw, {
                    planName: (0, eJ.RH)(eY.gD.PREMIUM_MONTH_TIER_0),
                    onClick: t,
                  })
                : eS.intl.format(eS.t.jt7JX6, { onClick: t }),
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("img", { className: tJ.Tn, src: t0, alt: eS.intl.string(eS.t.do7AoM) }),
                (0, i.jsx)(eG.E, {
                  className: tJ.ex,
                  color: "text-strong",
                  variant: "text-lg/semibold",
                  children: eS.intl.string(eS.t.jJG1pl),
                }),
                (0, i.jsx)(eG.E, {
                  className: tJ.GR,
                  variant: "text-md/normal",
                  children: eS.intl.format(eS.t.jt7JX6, { onClick: t }),
                }),
              ],
            }),
        !c && (0, i.jsx)(ej, { analyticsSection: em.JJy.EXPRESSION_PICKER }),
        (0, i.jsx)(A.D, {
          className: tJ.kz,
          onClick: t1,
          "aria-label": eS.intl.string(eS.t.cpT0Cq),
          children: (0, i.jsx)(tq.P, { size: "md", color: "currentColor" }),
        }),
      ],
    });
  }
  var t3 = n(970099);
  let t6 = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    t5 = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    t4 = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    t7 = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    t8 = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    t9 = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    ne = (0, Z.xI)(w.A.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    nt = t9 + 2,
    nn = ne + 2,
    ni = P()(en.Qz, 200),
    nr = P()(en.HA, 200);
  function na(e) {
    let { containerWidth: t, channel: a, onSelectSticker: s, closePopout: l, ref: o } = e,
      d = Y("web.StickerPicker"),
      { location: c } = (0, x.p)(),
      { analyticsLocations: _ } = (0, F.Ay)(k.A.STICKER_PICKER),
      A = (0, K.V)()?.subscriptionTrial != null,
      h = r.useRef(null),
      f = r.useRef(null),
      I = r.useRef(null),
      p = ee((e) => e.showPremiumUpsell),
      [T, m] = (0, V.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], U.x),
      g = r.useRef("");
    r.useImperativeHandle(o, () => ({ onPickerOpen: eh }));
    let S = (0, v.pD)(a),
      N = (0, u.bG)([z.default], () => z.default.getCurrentUser()),
      C = eT(S, N, a, d),
      O = 0 === C.filter((e) => e.type !== ei.Z2.EMPTY_GUILD_UPSELL).length,
      R = (0, H.oV)({
        gridWrapperRef: h,
        containerWidth: t,
        showingEmptyState: O,
        listPaddingLeft: t5,
        listScrollbarWidth: 8,
      }),
      L = $.tP.useSetting(),
      y = r.useMemo(() => new Set(L), [L]),
      D = r.useMemo(
        () =>
          (function (e, t, n) {
            if ("" === e) return null;
            let i = [],
              r = [];
            return (
              t$.Ay.queryStickers([e], !0)
                .map((e) => {
                  let { sticker: t } = e;
                  return t;
                })
                .forEach((e) => {
                  let a = (0, eI.W$)(e, t, n);
                  a === eI.Ux.SENDABLE ? i.push(e) : a === eI.Ux.SENDABLE_WITH_PREMIUM && r.push(e);
                }),
              { sendable: i, sendableWithPremium: r }
            );
          })(T, N, a),
        [T, N, a],
      ),
      M = (0, v.Gc)(),
      P = (0, v.UT)(),
      w = (0, u.cf)([b.A], () => b.A.getAllGuildStickers()),
      { sendable: G = [], sendableWithPremium: W = [] } = D ?? {},
      Z = G.length + W.length,
      q = r.useCallback(
        (e) => {
          ("" === T ? (0, en.ry)(e) : (0, en.nQ)(e, T, Z), s(e.sticker, ei.D6.STICKER_PICKER));
        },
        [s, T, Z],
      ),
      Q = null != R && R > t6,
      {
        rowCount: J,
        rowCountBySection: es,
        stickersGrid: el,
        gutterWidth: eo,
        columnCounts: ed,
      } = (0, v._c)({
        filteredStickers: D,
        stickersCategories: C,
        collapsedStickersCategories: y,
        collapsePremiumSearchSection: d && y.has(tx),
        listWidth: R,
        listPaddingRight: t4,
        stickerNodeMargin: Q ? t7 : t8,
        stickerNodeWidth: Q ? nt : nn,
      }),
      {
        getItemProps: ec,
        getRowProps: eu,
        gridContainerProps: e_,
        handleGridContainerKeyDown: eE,
        isUsingKeyboardNavigation: eA,
      } = (function (e) {
        let {
            columnCounts: t,
            stickersGrid: n,
            stickersListRef: i,
            store: a,
            gridNavigatorId: s,
            setInspectedStickerPosition: l,
            onGridItemSelect: o,
          } = e,
          d = (0, x.p)(),
          c = r.useCallback(
            (e) => {
              o(e, d);
            },
            [o, d],
          ),
          u = r.useCallback(
            (e, t) => {
              l(e, t, ea.t.GRID_NAVIGATOR_EVENT);
            },
            [l],
          ),
          {
            gridDispatch: _,
            getItemProps: E,
            getRowProps: A,
            gridContainerProps: h,
            handleGridContainerKeyDown: f,
            isUsingKeyboardNavigation: I,
          } = (0, H.Ff)({
            columnCounts: t,
            gridNavigatorId: s,
            itemGrid: n,
            itemList: i,
            onGridNavigatorItemSelect: c,
            onGridNavigatorPositionChange: u,
          });
        return (
          r.useEffect(
            () =>
              a.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => {
                  if (null == e) return;
                  let { columnIndex: t, rowIndex: n, source: i } = e;
                  i !== ea.t.GRID_NAVIGATOR_EVENT &&
                    _({ type: er.n.SET_FOCUSED_POSITION, x: t, y: n });
                },
              ),
            [_, a],
          ),
          {
            getItemProps: E,
            getRowProps: A,
            gridContainerProps: h,
            handleGridContainerKeyDown: f,
            isUsingKeyboardNavigation: I,
          }
        );
      })({
        columnCounts: ed,
        stickersListRef: f,
        stickersGrid: el,
        onGridItemSelect: r.useCallback(
          (e, t) => {
            let { location: r } = t;
            switch (e.type) {
              case ei.op.CREATE_STICKER:
                (X.default.track(em.HAw.OPEN_MODAL, {
                  type: em.JJy.CREATE_STICKER_MODAL,
                  location: c,
                }),
                  (0, E.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                      n.e("860350"),
                      n.e("142753"),
                      n.e("207998"),
                      n.e("179652"),
                      n.e("689827"),
                      n.e("268582"),
                      n.e("883952"),
                      n.e("66580"),
                      n.e("480436"),
                      n.e("50342"),
                      n.e("420643"),
                      n.e("98913"),
                      n.e("429143"),
                    ]).then(n.bind(n, 445002));
                    return (n) => (0, i.jsx)(t, { guildId: e.guild_id, ...n });
                  }));
                break;
              case ei.op.STICKER:
                if (null == e.sticker) break;
                tp({ descriptor: e, currentUser: N, channel: a, onSelect: q });
            }
          },
          [c, N, a, q],
        ),
        store: B.bM,
        setInspectedStickerPosition: B.bM.setInspectedExpressionPosition,
        gridNavigatorId: eW.lq,
      });
    function eh() {
      let e = a.getGuildId(),
        n = [];
      null !== e && (n = b.A.getStickersByGuildId(e) ?? []);
      let i = 0;
      (null != w &&
        [...w.values()].forEach((e) => {
          i += e.length;
        }),
        (0, en.p4)({
          containerWidth: t,
          favoriteStickers: M,
          frequentlyUsedStickers: P,
          guildStickers: n,
          stickersTotal: i,
        }));
    }
    (r.useEffect(
      () => () => {
        (B.bM.resetStoreState(), et(!1));
      },
      [],
    ),
      r.useEffect(() => {
        ("" === g.current && "" !== T && (0, en.Fg)(), (g.current = T));
      }, [T]),
      r.useEffect(() => {
        0 === Z ? ni(T) : nr(T, Z, m);
      }, [T, Z, m]),
      r.useLayoutEffect(() => {
        I.current?.focus();
      }, []));
    let ef = r.useCallback(() => {
      (l(),
        X.default.track(em.HAw.PREMIUM_PROMOTION_OPENED, {
          location_section: em.JJy.STICKER_PICKER_UPSELL,
        }),
        (0, j.e)());
    }, [l]);
    return (0, i.jsxs)(F.f5, {
      value: _,
      children: [
        !(A && O) &&
          (0, i.jsx)("div", {
            className: t3.wx,
            children: (0, i.jsx)(tK, { ref: I, onKeyDown: eE, stickersListRef: f, channel: a }),
          }),
        O
          ? (0, i.jsx)(e$, { className: t3.p$, onClose: l })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  ref: h,
                  className: t3.AD,
                  id: eW.lq,
                  ...e_,
                  children:
                    null != R
                      ? (0, i.jsx)(tH, {
                          ref: f,
                          collapsedStickersCategories: y,
                          filteredStickers: D,
                          getStickerItemProps: ec,
                          getStickerRowProps: eu,
                          gridWidth: R,
                          gutterWidth: eo,
                          isUsingKeyboardNavigation: eA,
                          onSelectSticker: q,
                          rowCount: J,
                          rowCountBySection: es,
                          stickersCategories: C,
                          stickersGrid: el,
                          channel: a,
                        })
                      : null,
                }),
                (0, i.jsx)(eU, { stickersListRef: f, channel: a }),
              ],
            }),
        p && (d ? (0, i.jsx)(tZ, { onUpsellClicked: l }) : (0, i.jsx)(t2, { onLearnMore: ef })),
      ],
    });
  }
  let ns = function (e) {
    let { ref: t, ...n } = e;
    return (
      (0, v.XQ)(),
      (0, i.jsx)("div", {
        className: t3.iE,
        id: eW.GX,
        "aria-labelledby": eW.LD,
        role: "tabpanel",
        children: n.isLoading
          ? (0, i.jsx)(G.y, { className: t3.Mz })
          : (0, i.jsx)(na, { ...n, ref: t }),
      })
    );
  };
  var nl = n(964404),
    no = n(712687),
    nd = n(625494),
    nc = n(49999),
    nu = n(732139),
    n_ = n(307731),
    nE = n(818625);
  let nA = 498 + nu.as.MEDIUM,
    nh = r.memo(function (e) {
      let {
        isActive: t,
        className: n,
        viewType: r,
        autoFocus: a = !1,
        "aria-controls": l,
        ...o
      } = e;
      return (0, i.jsx)(A.D, {
        role: "tab",
        autoFocus: a,
        "aria-controls": t ? l : void 0,
        ...o,
        onClick: () => {
          (m.Ay.trackWithMetadata(em.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: r, badged: !1 }),
            (0, V.U)(r));
        },
        "aria-current": t ? "page" : void 0,
        className: s()(n, nE.oi, nE.pc, { [nE.Mv]: t }),
      });
    }),
    nf = r.memo(function (e) {
      let {
          positionTargetRef: t,
          hideGifFavorites: n,
          onSelectGIF: a,
          onSelectEmoji: l,
          onSelectSticker: A,
          onSelectSound: N,
          channel: M,
          type: P,
          position: U,
          align: w,
          positionLayerClassName: G,
          closeOnModalOuterClick: x = !1,
          parentModalKey: k,
        } = e,
        F = r.useRef(null),
        B = r.useRef(!1),
        H = r.useRef(null),
        j = r.useRef(null),
        { drawerWidth: W, handleDrawerResizeHandleMouseDown: Y } = (function (e) {
          let { positionContainerRef: t, drawerRef: n, orientation: i } = e,
            a = (0, u.bG)([nl.Ay], () => nl.Ay.expressionPickerWidth),
            [s, l] = r.useState(window.innerWidth),
            [d, c] = r.useState(a ?? eg.wp.MIN),
            _ = r.useMemo(() => {
              switch (d) {
                case eg.wp.MIN:
                  return 498;
                case eg.wp.MAX:
                  return null;
                default:
                  return d;
              }
            }, [d]),
            E = r.useCallback(
              (e) => {
                let t = e >= s ? eg.wp.MAX : e <= 498 ? eg.wp.MIN : e;
                (null == t && null != n.current && (n.current.style.width = ""),
                  I.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                  c(t));
              },
              [n, s],
            ),
            A = (0, T.A)({
              initialElementDimension: _,
              maxDimension: s,
              minDimension: 498,
              resizableDomNodeRef: n,
              onElementResize: E,
              orientation: i,
            });
          return (
            r.useEffect(() => {
              let e = o().debounce(() => {
                null != t.current && l(t.current.offsetWidth);
              }, 500);
              return (
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, [t]),
            r.useLayoutEffect(() => {
              null != t.current && l(t.current.offsetWidth);
            }, [t]),
            {
              drawerWidth: _,
              handleDrawerResizeHandleMouseDown: r.useCallback(
                (e) => {
                  (e.stopPropagation(), null != t.current && l(t.current.offsetWidth), A(e));
                },
                [t, A],
              ),
            }
          );
        })({
          positionContainerRef: F,
          drawerRef: j,
          orientation: "left" === w ? T.R.HORIZONTAL_RIGHT : T.R.HORIZONTAL_LEFT,
        }),
        K = (0, V.RQ)((e) => e.activeView),
        $ = (0, v.ZO)(M),
        { renderWindow: z, windowDispatch: X } = r.useContext(L.Ay),
        Z = (0, u.bG)([b.A], () => !b.A.hasLoadedStickerPacks),
        q = (0, y.tj)({ location: "expression_picker" }),
        Q = C.useConfig({ location: "expression_picker" }).enabled,
        J = (0, u.bG)([no.A], () => no.A.isOpen()),
        ee = null != k,
        et = (0, E.useIsModalAtTop)(k ?? ""),
        en = P.gifs?.allowSending && !d.Fr && null != a,
        ei = P.stickers?.allowSending && null != A,
        er = !P.expressionPicker?.onlyEmojis && (en || ei),
        ea = r.useCallback(
          (e) => {
            if ((!ee && (0, E.hasAnyModalOpen)()) || (ee && !(et && x)) || J || e.defaultPrevented)
              return;
            let { target: t } = e;
            if ((0, c.vq)(t) && null != t.closest("." + eg.VQ)) return;
            for (; (0, c.vq)(t);) {
              if (
                t === j.current ||
                "true" === t.getAttribute("data-menu-item") ||
                "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
              )
                return;
              t = t.parentNode;
            }
            (0, V.v8)();
            let n = (0, c.BF)(e)?.activeElement;
            (null == n || "BODY" === n.tagName) &&
              nd._.dispatchToLastSubscribed(em.jej.TEXTAREA_FOCUS);
          },
          [x, et, ee, J],
        ),
        es = r.useCallback(() => {
          (0, V.v8)();
        }, []);
      (r.useLayoutEffect(() => {
        function e() {
          K === eg.kx.GIF && (0, V.v8)();
        }
        return (
          z.addEventListener("mousedown", ea),
          z.addEventListener("contextmenu", ea),
          X.subscribe(em.jej.POPOUT_CLOSE, es),
          nd._.subscribe(em.jej.CLOSE_GIF_PICKER, e),
          () => {
            (z.removeEventListener("mousedown", ea),
              z.removeEventListener("contextmenu", ea),
              X.unsubscribe(em.jej.POPOUT_CLOSE, es),
              nd._.unsubscribe(em.jej.CLOSE_GIF_PICKER, e));
          }
        );
      }, [K, es, ea, z, X]),
        (0, h.tj)(F));
      let [el, eo] = (0, g.kn)(q ? [_.M.SOUNDMOJI_BADGE] : [], void 0, !1),
        [ed, ec] = r.useState(!1);
      (r.useEffect(() => {
        K === eg.kx.SOUNDBOARD && ec(!0);
      }, [K]),
        r.useEffect(
          () => () => {
            ed && eo(nc.i.TAKE_ACTION);
          },
          [ed, eo],
        ),
        r.useEffect(() => {
          (0, V.Ri)("");
        }, []),
        r.useEffect(() => {
          ((!ee && (0, E.hasAnyModalOpen)()) || (ee && !et)) && (0, V.v8)();
        }, [et, ee]),
        r.useEffect(() => {
          null != j.current &&
            !B.current &&
            (K === eg.kx.EMOJI
              ? H?.current?.onPickerOpen != null && (H?.current?.onPickerOpen(), (B.current = !0))
              : K === eg.kx.STICKER
                ? H?.current?.onPickerOpen == null ||
                  Z ||
                  (H?.current?.onPickerOpen(), (B.current = !0))
                : (m.Ay.trackWithMetadata(em.HAw.EXPRESSION_PICKER_OPENED, {
                    width: j.current.offsetWidth,
                    tab: K,
                    badged: !1,
                  }),
                  (B.current = !0)));
        }));
      let eu = r.useCallback((e, t) => N?.(e, "emoji_picker", t), [N]),
        e_ = r.useCallback((e, t) => N?.(e, "soundboard_picker", t), [N]),
        eE = P.soundmoji?.allowSending === !0 && null != N,
        eA = "left" === w ? "right" : "left",
        eh = null != G ? G : "left" === w ? nE.sj : nE.Jg,
        ef = en
          ? (0, i.jsx)(nh, {
              id: nu.g9,
              "aria-controls": nu.ni,
              "aria-selected": K === eg.kx.GIF,
              isActive: K === eg.kx.GIF,
              viewType: eg.kx.GIF,
              children: eS.intl.string(eS.t["6gUTsS"]),
            })
          : null,
        eI = ei
          ? (0, i.jsx)(nh, {
              id: eW.LD,
              "aria-controls": eW.GX,
              "aria-selected": K === eg.kx.STICKER,
              isActive: K === eg.kx.STICKER,
              autoFocus: !$,
              viewType: eg.kx.STICKER,
              children: (0, i.jsx)("div", {
                className: nE.dG,
                children: eS.intl.string(eS.t.nf1s3u),
              }),
            })
          : null,
        ep = (0, i.jsx)(nh, {
          id: nu.k1,
          "aria-controls": nu.Do,
          "aria-selected": K === eg.kx.EMOJI,
          isActive: K === eg.kx.EMOJI,
          viewType: eg.kx.EMOJI,
          children: eS.intl.string(eS.t.Xu3wE3),
        });
      return (0, i.jsx)(p.A, {
        section: em.JJy.EXPRESSION_PICKER,
        children: (0, i.jsx)(R.nE, {
          className: s()(nE.T8, eh),
          targetRef: t,
          position: U,
          align: w,
          spacing: 8,
          autoInvert: !0,
          clickTrap: !0,
          children: (e) => {
            let { isPositioned: t } = e;
            return (0, i.jsx)("section", {
              className: s()(nE.V6, { [nE.D0]: !er }),
              ref: F,
              role: "dialog",
              "aria-label": eS.intl.string(eS.t.Utlwvi),
              children: t
                ? (0, i.jsxs)("div", {
                    className: nE.jP,
                    style: { width: null == W ? void 0 : W, [w]: 0 },
                    ref: j,
                    children: [
                      (0, i.jsx)("div", { className: nE.Di, onMouseDown: Y, style: { [eA]: -2 } }),
                      (0, i.jsxs)("div", {
                        className: nE.FG,
                        children: [
                          er
                            ? (0, i.jsx)("nav", {
                                className: nE.C$,
                                children: (0, i.jsxs)("div", {
                                  className: nE.CT,
                                  role: "tablist",
                                  "aria-label": eS.intl.string(eS.t["2j4Vgd"]),
                                  children: [
                                    ef,
                                    eI,
                                    ep,
                                    q &&
                                      eE &&
                                      (0, i.jsx)(nh, {
                                        id: nu.N6,
                                        "aria-controls": nu.AA,
                                        "aria-selected": K === eg.kx.SOUNDBOARD,
                                        isActive: K === eg.kx.SOUNDBOARD,
                                        viewType: eg.kx.SOUNDBOARD,
                                        children: (0, i.jsxs)("div", {
                                          className: nE.sd,
                                          children: [
                                            eS.intl.string(eS.t.EHlAMc),
                                            null != el &&
                                              (0, i.jsx)(f.E, { type: "new", variant: "brand" }),
                                          ],
                                        }),
                                      }),
                                  ],
                                }),
                              })
                            : null,
                          K === eg.kx.STICKER && ei
                            ? (0, i.jsx)(ns, {
                                isLoading: Z,
                                channel: M,
                                containerWidth: W,
                                onSelectSticker: A,
                                closePopout: es,
                                ref: (e) => {
                                  H.current = e;
                                },
                              })
                            : null,
                          K === eg.kx.GIF && en
                            ? (0, i.jsx)(O.A, {
                                onSelectGIF: a,
                                hideFavorites: n,
                                persistSearch: !0,
                              })
                            : null,
                          K === eg.kx.EMOJI || P.expressionPicker?.onlyEmojis === !0
                            ? (0, i.jsx)(S.A, {
                                hasTabWrapper: !0,
                                persistSearch: !0,
                                channel: M,
                                containerWidth: W,
                                emojiSize: null != W && W < nA ? nu.as.MEDIUM : nu.as.LARGE,
                                pickerIntention:
                                  P.expressionPicker?.emojiIntention ?? n_.EmojiIntention.CHAT,
                                showAddEmojiButton: null == M || null != M.guild_id,
                                closePopout: es,
                                onSelectEmoji: l,
                                onSelectSoundmoji: eu,
                                ref: (e) => {
                                  H.current = e;
                                },
                                shouldShowSoundmojiInEmojiPicker: P.soundmoji?.allowSending === !0,
                                canViewEmojiPacks: Q,
                              })
                            : null,
                          K === eg.kx.SOUNDBOARD
                            ? (0, i.jsx)("div", {
                                className: nE.z,
                                children: (0, i.jsx)(D.A, {
                                  guildId: M.guild_id,
                                  channel: M,
                                  containerWidth: W,
                                  onClose: es,
                                  onSelect: e_,
                                  analyticsSource: "expression-picker",
                                  renderHeader: (e) =>
                                    (0, i.jsx)("div", { className: nE.BG, children: e }),
                                  inExpressionPicker: !0,
                                  shouldValidateSelectedSound: !0,
                                }),
                              })
                            : null,
                        ],
                      }),
                    ],
                  })
                : null,
            });
          },
        }),
      });
    });
}
