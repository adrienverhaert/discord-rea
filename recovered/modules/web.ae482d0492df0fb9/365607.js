/* Recovered shipped factory. Module 365607.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8027310..8048337
 * Raw property SHA-256: 30f83e008a88e1eec655e65230b94e39d9f7c6dce329ab5d66ff7c4718369066
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => ti });
  var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n(17928),
    l = n(982240),
    o = n(643056),
    d = n(988341),
    c = n(234e3),
    u = n(555149),
    _ = n(287809),
    E = n(262),
    A = n(503698),
    h = n.n(A),
    f = n(612324),
    I = n(70283),
    p = n(834730),
    T = n(559106),
    m = n(307301),
    g = n(192308),
    S = n(28863),
    N = n(866665),
    C = n(140735),
    O = n(22231),
    R = n(922016),
    L = n(983555),
    y = n(274670),
    D = n(144779),
    v = n(793574),
    b = n(688810),
    M = n(682618),
    P = n(992526),
    U = n(609782);
  let w = (0, n(945810).mj)({
    name: "2026-06-use-new-badge-image-source",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  var G = n(248284),
    x = n(675816),
    k = n(425763),
    F = n(952270),
    B = n(365199),
    V = n(315710),
    H = n(297264),
    j = n(821609),
    W = n(442433),
    Y = n(450232),
    K = n(183555),
    $ = n(451395),
    z = n(327791),
    X = n(315629),
    Z = n(403581),
    q = n(87719),
    Q = n(660183),
    J = n(207711);
  function ee(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)(X.h, {
      color: "nitro-pink",
      className: J.U,
      children: [
        (0, i.jsx)(p.E, {
          variant: "text-xs/medium",
          color: "text-default",
          className: J.t,
          children: Q.intl.string(Q.t.cKIIzk),
        }),
        (0, i.jsx)(j.$, {
          variant: "expressive",
          size: "sm",
          icon: Z.t,
          text: Q.intl.string(Q.t.pj0XBN),
          onClick: function () {
            (t(), (0, q.e)());
          },
        }),
      ],
    });
  }
  var et = n(470739),
    en = n(577931),
    ei = n(494881);
  let er = "PROFILE_BADGES",
    ea = "BADGE";
  function es(e) {
    let { reorderableIndex: t, onReorder: n, ...a } = e,
      { badge: s, index: l } = a,
      o = (0, k.VU)(),
      d = r.useRef(null);
    return (0, i.jsxs)($.mG, {
      index: t,
      itemId: String(s.badge_id),
      itemPreviewProps: { badge: s },
      listType: er,
      itemType: ea,
      "aria-label": Q.intl.formatToPlainString(Q.t.n5kHOr, { position: l + 1, badgeName: s.name }),
      onReorder: n,
      onEnd: function () {
        o && requestAnimationFrame(() => d.current?.focus());
      },
      className: ei.oE,
      draggingClassName: ei.Id,
      dropBeforeClassName: ei.A,
      dropAfterClassName: ei.Ze,
      children: [
        (0, i.jsx)(el, { ...a }),
        (0, i.jsx)($.jV, {
          buttonRef: d,
          className: ei.BU,
          "aria-label": Q.intl.formatToPlainString(Q.t["9xRVLy"], {
            badgeName: s.name,
            position: l + 1,
          }),
        }),
      ],
    });
  }
  function el(e) {
    let { badge: t, index: a, onClose: s, onAction: l, controlRef: o } = e,
      [d, c] = r.useState(!1);
    function u(e) {
      (c(!0),
        (0, W.L3)(
          e,
          async () => {
            let { default: e } = await Promise.all([
              n.e("434691"),
              n.e("918024"),
              n.e("787847"),
            ]).then(n.bind(n, 842810));
            return (n) => (0, i.jsx)(e, { ...n, badge: t, onClosePopout: s, onAction: l });
          },
          { onClose: () => c(!1) },
        ));
    }
    let _ = t.hidden ?? !1;
    return (0, i.jsxs)("div", {
      className: h()(ei.fw, d && ei.HV),
      onContextMenu: u,
      children: [
        (0, i.jsx)("div", {
          className: ei.yk,
          children:
            null != t.simple_icon_url &&
            (0, i.jsx)("img", {
              src: t.simple_icon_url,
              alt: "",
              "aria-hidden": !0,
              draggable: !1,
              className: h()(ei.pC, _ && ei.jx),
            }),
        }),
        _ &&
          (0, i.jsx)("div", {
            className: ei.Gf,
            "aria-hidden": !0,
            children: (0, i.jsx)(F.EyeSlashIcon, { size: "refresh_sm", color: "currentColor" }),
          }),
        (0, i.jsx)(T.vN, {
          children: (0, i.jsx)("button", {
            ref: o,
            type: "button",
            className: ei.lv,
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-label": Q.intl.formatToPlainString(_ ? Q.t["3Uwmdt"] : Q.t.Ci7gvp, {
              badgeName: t.name,
              position: a + 1,
            }),
            onClick: u,
            children: (0, i.jsx)(B.MoreHorizontalIcon, { size: "xs", color: "currentColor" }),
          }),
        }),
      ],
    });
  }
  function eo() {
    let e = (0, k.VU)(),
      { badge: t, sourceClientOffset: n } = (0, x.V)((e) => {
        let t = e.getItem();
        return {
          badge: t?.itemType === ea ? t.itemPreviewProps?.badge : void 0,
          sourceClientOffset: e.getSourceClientOffset(),
        };
      });
    if (null == t || null == n) return null;
    let r = n.y - 32 * !!e;
    return (0, i.jsx)("div", {
      className: ei.dk,
      style: { transform: `translate3d(${n.x}px, ${r}px, 0)` },
      children: (0, i.jsx)("div", {
        className: ei.yk,
        children:
          null != t.simple_icon_url &&
          (0, i.jsx)("img", {
            src: t.simple_icon_url,
            alt: "",
            "aria-hidden": !0,
            draggable: !1,
            className: ei.pC,
          }),
      }),
    });
  }
  function ed(e) {
    let { onClose: t, returnFocusRef: n, skipReturnFocusRef: a } = e,
      o = r.useRef(null),
      d = r.useId();
    (r.useLayoutEffect(() => {
      o.current?.focus();
    }, []),
      (0, V.tj)(o, { returnRef: n }));
    let { analyticsLocations: u } = (0, b.Ay)(v.A.BADGE_CUSTOMIZATION_POPOUT),
      { trackUserProfileAction: E } = (0, K.NJ)();
    r.useEffect(() => {
      E({ action: "VIEW_BADGE_CUSTOMIZATION", analyticsLocations: u });
    }, []);
    let { fixedBadges: A, reorderableBadges: f, hiddenBadges: I } = (0, en.A)(),
      T = (0, z.A)(),
      m = (0, k.VU)(),
      g =
        (0, x.V)((e) => {
          let t = e.getItem();
          return e.isDragging() && t?.itemType === ea;
        }) && !m,
      S = r.useMemo(() => f.map((e) => e.badge_id), [f]),
      N = r.useRef(new Map());
    function C(e) {
      return (t) => {
        null == t ? N.current.delete(e) : N.current.set(e, t);
      };
    }
    function O(e) {
      requestAnimationFrame(() => N.current.get(e)?.focus());
    }
    let R = A.length + f.length + I.length,
      L = (0, s.bG)([l.Ay, _.default], () => {
        let e = _.default.getCurrentUser()?.id;
        return null != e && l.Ay.hasCatalogFor(e);
      });
    function y(e, t) {
      (0, c.hB)((0, c.i1)(S, e, t));
    }
    let D = (0, $.w9)({
        listType: er,
        itemType: ea,
        onFallbackDrop: (e) => y(e.index, S.length - 1),
      }),
      M = (0, $.w9)({ listType: er, itemType: ea });
    r.useLayoutEffect(() => {
      if (g)
        return (
          M(document.body),
          () => {
            M(null);
          }
        );
    }, [M, g]);
    let P = R > 0,
      U = L && !P,
      w = !T && !U,
      G = T ? Q.t.VHaYM7 : Q.t["7Qs/YX"];
    function F() {
      (null != a && (a.current = !0), t());
    }
    return (0, i.jsxs)("div", {
      ref: o,
      className: h()(ei.SW, U && ei.B2),
      role: "dialog",
      tabIndex: -1,
      "aria-labelledby": d,
      children: [
        (0, i.jsxs)("div", {
          className: h()(ei.Qs, w && ei.bY),
          children: [
            (0, i.jsxs)("div", {
              className: ei.wx,
              children: [
                (0, i.jsxs)("div", {
                  className: ei.$,
                  children: [
                    T && (0, i.jsx)(Y.A, { size: "xs", className: ei.oU }),
                    (0, i.jsx)(H.D, {
                      id: d,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: Q.intl.string(Q.t.PXIyjF),
                    }),
                  ],
                }),
                !U &&
                  (0, i.jsx)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: Q.intl.string(G),
                  }),
              ],
            }),
            w && (0, i.jsx)(ee, { onClose: t }),
            U &&
              (0, i.jsx)(p.E, {
                className: ei.p$,
                variant: "text-xs/normal",
                color: "text-subtle",
                children: Q.intl.string(Q.t.VT02mI),
              }),
            P &&
              (0, i.jsxs)("div", {
                className: h()(ei.yq, g && ei.T0),
                role: "group",
                "aria-label": Q.intl.string(Q.t.VWV0y5),
                children: [
                  T &&
                    (0, i.jsx)("div", {
                      ref: (e) => {
                        D(e);
                      },
                      className: ei.u$,
                      "aria-hidden": !0,
                    }),
                  A.map((e, t) =>
                    (0, i.jsx)(
                      el,
                      { badge: e, index: t, onClose: F, onAction: O, controlRef: C(e.badge_id) },
                      e.badge_id,
                    ),
                  ),
                  f.map((e, t) =>
                    T
                      ? (0, i.jsx)(
                          es,
                          {
                            badge: e,
                            index: A.length + t,
                            onClose: F,
                            onAction: O,
                            controlRef: C(e.badge_id),
                            reorderableIndex: t,
                            onReorder: y,
                          },
                          e.badge_id,
                        )
                      : (0, i.jsx)(
                          el,
                          {
                            badge: e,
                            index: A.length + t,
                            onClose: F,
                            onAction: O,
                            controlRef: C(e.badge_id),
                          },
                          e.badge_id,
                        ),
                  ),
                  I.map((e, t) =>
                    (0, i.jsx)(
                      el,
                      {
                        badge: e,
                        index: A.length + f.length + t,
                        onClose: F,
                        onAction: O,
                        controlRef: C(e.badge_id),
                      },
                      e.badge_id,
                    ),
                  ),
                ],
              }),
          ],
        }),
        (0, i.jsx)(eo, {}),
        (0, i.jsx)(j.$, {
          variant: "secondary",
          size: "sm",
          fullWidth: !0,
          text: Q.intl.string(Q.t.fN2how),
          onClick: function () {
            (E({ action: "PRESS_VIEW_BADGES", analyticsLocations: u }),
              F(),
              (0, et.openBadgeDirectoryModal)({ viewingCurrentUserBadges: !0 }));
          },
        }),
      ],
    });
  }
  var ec = n(775602),
    eu = n(461536),
    e_ = n(321191),
    eE = n(351906);
  function eA(e) {
    let t,
      n,
      a,
      {
        children: o,
        legacyBadgeId: d,
        userId: c,
        fallbackTitle: u,
        fallbackIconSrc: _,
        shouldShow: E,
      } = e,
      A = (0, U.w0)(d),
      {
        badgeData: h,
        currentTier: f,
        obtainedAt: p,
      } = (0, s.cf)(
        [l.Ay],
        () =>
          null == A || null == c
            ? { badgeData: void 0, currentTier: void 0, obtainedAt: void 0 }
            : {
                badgeData: l.Ay.getBadgeById(A, c),
                currentTier: l.Ay.getCurrentTier(A, c),
                obtainedAt: l.Ay.getObtainedAt(A, c),
              },
        [A, c],
      ),
      T = (0, s.bG)([ec.Ay], () => ec.Ay.useReducedMotion),
      m = r.useCallback(() => {
        null != c && l.Ay.isCatalogStaleFor(c) && (0, M.RS)(c);
      }, [c]),
      g = h?.badge_id === I.$.PREMIUM_TENURE,
      S = A === I.$.LEGACY_USERNAME,
      N = f?.name,
      C = g ? Q.intl.string(Q.t.Ipxkog) : (h?.name ?? u);
    g
      ? (a = n = null != N ? `${C} ${N}` : C)
      : null != N
        ? ((t = C), (n = N), (a = `${C} ${N}`))
        : ((n = C), (a = C));
    let O = T ? void 0 : h?.complex_icon_animated_url,
      R = O ?? h?.complex_icon_static_url ?? h?.simple_icon_url ?? _,
      L = null != O && R === O;
    if (S)
      return (0, i.jsx)(eh, { userId: c, title: n, badgeImage: R, shouldShow: E, children: o });
    let y =
      h?.info_label ??
      (null != p ? Q.intl.formatToPlainString(Q.t["0aEh2a"], { date: new Date(p) }) : void 0);
    return (0, i.jsx)(eu.A, {
      title: n,
      eyebrow: t,
      body: y,
      badgeImage: R,
      badgeName: a,
      variant: g ? "nitro" : "default",
      isAnimated: L,
      shouldShow: E,
      onShow: m,
      children: o,
    });
  }
  function eh(e) {
    let { children: t, userId: n, title: r, badgeImage: a, shouldShow: l } = e,
      o = (0, s.bG)(
        [e_.A, eE.A],
        () =>
          eE.A.hidePersonalInformation
            ? Q.intl.string(Q.t.Br1ls3)
            : null != n
              ? (e_.A.getUserProfile(n)?.legacyUsername ?? void 0)
              : void 0,
        [n],
      );
    return (0, i.jsx)(eu.A, {
      title: r,
      body: o,
      badgeImage: a,
      badgeName: r,
      shouldShow: l,
      children: t,
    });
  }
  var ef = n(815996),
    eI = n(683063);
  function ep(e) {
    let { targetElementRef: t, delay: n, forceOpen: r, badgeDescription: a, children: s } = e;
    return (0, i.jsx)(eI.u, {
      targetElementRef: t,
      delay: n,
      forceOpen: r,
      asset: {
        type: "image",
        src: "https://cdn.discordapp.com/assets/content/c41152a51207aef6b145fd309053f9fa5d5bd5fab7208289710c70d61a47d2f4.svg",
      },
      title: "Last Meadow Online",
      body: a,
      children: s,
    });
  }
  var eT = n(859492),
    em = n(998370),
    eg = n(158390),
    eS = n(927813);
  let eN = 5 * eS.A.Millis.MINUTE,
    eC = new Map(),
    eO = { badgeName: void 0, tierBySimpleIconUrl: new Map() };
  var eR = n(116833),
    eL = n(704640),
    ey = n(425713),
    eD = n(642481),
    ev = n(720879),
    eb = n(202541),
    eM = n(49999),
    eP = n(518477);
  let eU = function (e) {
    let {
        badgeId: t = eb.Ac.PREMIUM_TENURE_1_MONTH,
        markAsDismissed: n,
        children: a,
        targetElementRef: s,
        progressCircleText: l,
        progressCirclePercent: o,
        progressCircleUrgency: d,
        onShow: c,
      } = e,
      u = eb.VD[t].nameUnformattedNitro,
      _ = Q.intl.string(u).toLocaleUpperCase(),
      E = eb.VD[t].rarity,
      A = (0, eL.A)(t),
      h = (0, ey.I)(t).standard;
    (0, r.useEffect)(() => {
      (eR.m[eR.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), (new Image().src = h));
    }, [h]);
    let f = (0, r.useCallback)(() => {
      n?.(eM.i.USER_DISMISS);
    }, [n]);
    if ("mini-tooltip" === e.mode) {
      let t = (function (e, t, n) {
        if (null != e && null != t && null != n) return { text: e, percent: t, urgency: n };
      })(l, o, d);
      return (0, i.jsx)(eu.A, {
        targetElementRef: s,
        onShow: c,
        title: _,
        body: e.body,
        variant: "nitro",
        rarity: E,
        badgeImage: h,
        badgeName: _,
        progressCircle: t,
        children: a,
      });
    }
    let I = {
      gradientColor: A,
      size: "lg",
      graphic: {
        type: "dynamic",
        component: eR.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
        aspectRatio: "6/4",
        props: {
          src: h,
          alt: _,
          progressCircleText: l,
          progressCirclePercent: o,
          progressCircleUrgency: d,
        },
      },
      title: _,
      body: e.body,
      actions: e.actions,
    };
    return "tooltip" === e.mode
      ? (0, i.jsx)(ev.A, {
          targetElementRef: s,
          estimatedTooltipHeight: e.estimatedTooltipHeight ?? 300,
          delay: eP.In,
          onShow: c,
          ...I,
          children: a,
        })
      : (0, i.jsxs)(i.Fragment, {
          children: [
            a,
            (0, i.jsx)(eD.A, {
              targetElementRef: s,
              shouldShow: !0,
              onRequestClose: f,
              align: "right",
              position: "top",
              caretConfig: { align: "center" },
              ...I,
            }),
          ],
        });
  };
  var ew = n(592265);
  let eG = function (e) {
    let { assetComponent: t, tooltipWordmarkComponent: n, children: r } = e;
    return (0, i.jsxs)("div", {
      className: ew.R,
      children: [t, (0, i.jsx)("div", { className: ew.A, children: n }), r],
    });
  };
  var ex = n(224016),
    ek = n(747278);
  let eF = function (e) {
    let { profileBadge: t, tenureBadge: n } = e,
      r = (0, ey.I)(n.id).standard;
    return (0, i.jsxs)(eG, {
      assetComponent: (0, i.jsx)("img", { src: r, alt: "" }),
      tooltipWordmarkComponent: (0, i.jsx)(ex.A, { width: 56, className: ek.R }),
      children: [
        (0, i.jsx)(H.D, {
          variant: "heading-xl/extrabold",
          children: Q.intl.string(n.nameUnformatted),
        }),
        (0, i.jsx)(p.E, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: ek.K,
          children: t.description,
        }),
      ],
    });
  };
  var eB = n(30084),
    eV = n(738822),
    eH = n(104886),
    ej = n(590202),
    eW = n(976860),
    eY = n(780964),
    eK = n(766075),
    e$ = n(305003),
    ez = n(273875),
    eX = n(798618),
    eZ = n(752079),
    eq = n(370277);
  function eQ(e) {
    let { children: t, targetElementRef: n, delay: a, showSubtext: s, forceOpen: l } = e,
      [o, d] = r.useState(!1),
      c = r.useRef(null),
      u = r.useCallback(() => {
        null != c.current && (clearTimeout(c.current), (c.current = null));
      }, []);
    r.useEffect(() => u, [u]);
    let _ = r.useCallback(() => {
      (u(),
        (c.current = window.setTimeout(() => {
          ((c.current = null), d(!0));
        }, a)));
    }, [a, u]);
    r.useEffect(() => {
      l && !o && _();
    }, [l, o, _]);
    let E = r.useCallback(() => {
        _();
      }, [_]),
      A = r.useCallback(() => {
        (u(), d(!1));
      }, [u]);
    return (0, i.jsxs)("div", {
      onMouseEnter: E,
      onMouseLeave: A,
      children: [
        t,
        (0, i.jsxs)(ez.x, {
          targetElementRef: n,
          shouldShow: !!(o || l),
          position: "top",
          caretConfig: { align: "center" },
          children: [(0, i.jsx)(eJ, { showSubtext: s }), (0, i.jsx)(eX.F, {})],
        }),
      ],
    });
  }
  function eJ(e) {
    let { showSubtext: t = !1 } = e;
    return (0, i.jsxs)(eG, {
      assetComponent: (0, i.jsx)(eZ.A, { className: eq.jc }),
      tooltipWordmarkComponent: (0, i.jsx)(H.D, {
        variant: "heading-md/extrabold",
        className: eq.RK,
        children: Q.intl.string(Q.t.ElYQFS),
      }),
      children: [
        (0, i.jsx)(H.D, {
          variant: "heading-xl/extrabold",
          className: t ? void 0 : eq.Qn,
          children: Q.intl.string(Q.t.lTHkqd),
        }),
        t
          ? (0, i.jsx)(p.E, {
              variant: "text-xs/normal",
              className: eq.lV,
              children: Q.intl.string(Q.t.MEV0GI),
            })
          : void 0,
      ],
    });
  }
  var e0 = n(174459),
    e1 = n(474090),
    e2 = n(439174),
    e3 = n(47675),
    e6 = n(999291),
    e5 = n(874402),
    e4 = n(652215),
    e7 = n(758836),
    e8 = n(854232),
    e9 = n(816645);
  function te(e) {
    var t;
    let n,
      a,
      d,
      {
        badges: c,
        overflowCount: u,
        className: A,
        badgeClassName: x,
        displayProfile: k,
        onClose: F,
        shouldOpenBadgeTooltip: B,
        shouldGlowTenureBadge: V,
        popoutAnchorRef: H,
        containerRef: j,
        isTargetUserBot: W,
      } = e,
      Y = (0, G.A)((e) => e.isOpen),
      $ = r.useRef(null),
      z = (0, f.A)($, j),
      X = r.useRef(null),
      Z = r.useRef(null),
      q = r.useRef(null),
      J = r.useRef(null),
      ee = r.useRef(!1),
      { analyticsLocations: en } = (0, b.Ay)(v.A.BADGE),
      { context: ei, trackUserProfileAction: er } = (0, K.NJ)(),
      ea = _.default.getCurrentUser(),
      es = (0, e1.CC)(ea?.premiumType, eb.PremiumTypes.TIER_2),
      el = (0, P.J)({ location: "UserProfileBadgeList" }),
      eo = (0, o.d)({ location: "UserProfileBadgeList" }),
      ec = (function (e) {
        let { location: t } = e;
        return w.useConfig({ location: t }).enabled;
      })({ location: "UserProfileBadgeList" }),
      { enabled: e_ } = em.J.useConfig({ location: "UserProfileBadgeList" }),
      eE = e_ && !el && c.some((e) => (0, U.w0)(e.id) === I.$.GIFTING),
      eh =
        ((t = (0, eT.b9)(`UserProfileBadgeList${eE ? "" : "-DISABLED"}`) && eE),
        (n = (0, s.bG)([_.default], () => _.default.getCurrentUser()?.id)),
        (a = (0, s.bG)([l.Ay], () => (null != n ? l.Ay.getBadgeById(I.$.GIFTING, n) : void 0), [
          n,
        ])),
        r.useEffect(() => {
          if (!t || null == n) return;
          if (null != a) return void eC.delete(n);
          let e = eC.get(n) ?? { backoff: new eg.A(eS.A.Millis.MINUTE, eN, !0), gateUntil: 0 };
          Date.now() < e.gateUntil ||
            ((e.gateUntil = Date.now() + e.backoff.fail()), eC.set(n, e), (0, M.o0)(I.$.GIFTING));
        }, [t, n, a]),
        r.useMemo(() => {
          if (!t || null == a) return eO;
          let e = new Map();
          for (let t of a.tiers) null != t.simple_icon_url && e.set(t.simple_icon_url, t);
          return { badgeName: a.name, tierBySimpleIconUrl: e };
        }, [t, a]));
    r.useEffect(() => {
      (el || ec) && k?.userId != null && !l.Ay.hasCatalogFor(k.userId) && (0, M.RS)(k.userId);
    }, [el, ec, k?.userId]);
    let eI = k?.userId,
      eR = (0, s.bG)(
        [l.Ay],
        () => {
          if (!ec || null == eI) return null;
          let e = {};
          for (let t of c) {
            let n = (0, U.w0)(t.id);
            if (null == n) continue;
            let i = l.Ay.getBadgeById(n, eI)?.simple_icon_url;
            null != i && (e[t.id] = i);
          }
          return e;
        },
        [ec, eI, c],
      ),
      eL = k?.userId === ea?.id,
      ey = eL && el && eo && null != H,
      eD = !ey && el,
      ev = ey && 0 === c.length,
      eM = ea?.id,
      ew = (0, s.bG)(
        [l.Ay],
        () => null != eM && (!l.Ay.hasCatalogFor(eM) || l.Ay.getBadges(eM).some((e) => e.owned)),
        [eM],
      ),
      eG = ey && Y;
    function ex(e) {
      if ((G.A.setState({ isOpen: e }), !e)) {
        if (ee.current) {
          ee.current = !1;
          return;
        }
        requestAnimationFrame(() => J.current?.focus());
      }
    }
    let ek = (0, e6.AP)(ea?.id ?? null),
      ez = (0, E.A)(ek).some((e) => e.id === e$.A.ORB_PROFILE_BADGE),
      eX = ey && !ev && 0 === u,
      eZ = null;
    u > 0 &&
      ((eZ = (0, i.jsx)(p.E, {
        tag: "span",
        variant: "text-sm/normal",
        color: "text-default",
        className: e9.AX,
        "aria-hidden": !0,
        children: Q.intl.format(Q.t.n7CiSK, { count: u }),
      })),
      (d = Q.intl.formatToPlainString(Q.t.eIHfGZ, { overflow_count: u })));
    let eq = (0, i.jsxs)("div", {
      ref: z,
      className: h()(e9.kL, eo && !0 !== W && e9.Yq, ey && e9.Tx, eX && e9.gK, A),
      ...(ev ? null : { "aria-label": Q.intl.string(Q.t.VWV0y5), role: "group" }),
      ...(ey && !ev ? { onClick: () => ex(!eG) } : null),
      children: [
        ev &&
          (0, i.jsx)(T.vN, {
            children: (0, i.jsxs)("button", {
              ref: J,
              type: "button",
              className: e9.p$,
              "aria-haspopup": "dialog",
              "aria-expanded": eG,
              onClick: (e) => {
                (e.stopPropagation(), ex(!eG));
              },
              children: [
                (0, i.jsx)(m.j, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                (0, i.jsx)(p.E, {
                  tag: "span",
                  variant: "text-sm/normal",
                  color: "text-default",
                  children: Q.intl.string(Q.t.l6w3Vj),
                }),
              ],
            }),
          }),
        c.map((e, t) => {
          let n = e.id === e$.A.ORB_PROFILE_BADGE,
            r = (0, e2.e0)(e.id),
            a = null != r || e.id === e8.K,
            s = "april_fools_2026" === e.id,
            l = void 0 !== r && e.id !== e8.K,
            o = eR?.[e.id],
            d = (0, i.jsx)("img", {
              alt: " ",
              "aria-hidden": !0,
              src: e.iconSrc ?? o ?? (0, eP.L7)(e.icon),
              className: h()(e9.qS, null != o && e9.Do, x),
            }),
            c = null != B && B(e.id),
            u = {
              onClick: (i) => {
                if (
                  (er({ action: "PRESS_BADGE" }),
                  (0, e3.vP)({
                    badgeId: (0, U.w0)(e.id),
                    badgeAction: "PRESS_BADGE",
                    position: t,
                    analyticsLocations: en,
                    ...ei,
                  }),
                  ey)
                )
                  return void i.preventDefault();
                let r = k?.userId != null ? _.default.getUser(k.userId) : null;
                if (el && r?.bot !== !0) {
                  (i.preventDefault(),
                    (0, et.openBadgeDirectoryModal)({
                      initialBadgeId: (0, U.w0)(e.id),
                      targetUserId: k?.userId,
                      targetUsername: r?.globalName ?? r?.username,
                    }));
                  return;
                }
                if ((0, U.w0)(e.id) === I.$.GIFTING) {
                  (i.preventDefault(),
                    F?.(),
                    (0, eK.openUserSettings)(eY.X.GIFT_PANEL, { analyticsLocations: en }));
                  return;
                }
                if (n) {
                  ((0, ef.Cz)({
                    tab: e7.G2.ORBS,
                    analyticsLocations: en,
                    analyticsSource: v.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE,
                  }),
                    F?.(),
                    (0, g.closeAllModals)());
                  return;
                }
                if (a) {
                  if (
                    (i.preventDefault(),
                    e0.default.track(e4.HAw.TIERED_TENURE_BADGE_CLICKED, {
                      badge: e.id,
                      premium_type: es,
                      viewed_user_id: k?.userId,
                    }),
                    es)
                  ) {
                    (eL
                      ? ((0, eW.pX)(e4.BVt.NITRO_HOME), (0, g.closeAllModals)())
                      : (0, eB.D)({ analyticsLocations: en, displayProfile: k }),
                      F?.());
                    return;
                  }
                  if (eL) {
                    let t =
                      null != e.link ? (0, L.default)(e.link, { analyticsLocations: en }) : null;
                    if (null == t) return;
                    return (F?.(), (0, g.closeAllModals)(), t(i));
                  }
                  return ((0, eB.D)({ analyticsLocations: en, displayProfile: k }), void F?.());
                }
                let s = null != e.link ? (0, L.default)(e.link, { analyticsLocations: en }) : null;
                if (null != s) return (F?.(), (0, g.closeAllModals)(), s(i));
              },
              onMouseEnter: () => {
                (e.id === E.h &&
                  ((0, eH.E5)(eH.kI.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_hover")
                    ? (0, y.r)({
                        type: D.F.VIEW_INTERNAL_SURFACE_IMPRESSION,
                        surfaceId: eV.uF.QUEST_BADGE,
                        isTargeted: !1,
                      })
                    : e0.default.track(e4.HAw.QUEST_CONTENT_VIEWED, {
                        ...(0, ej.fF)(eV.uF.QUEST_BADGE),
                        is_targeted: !1,
                      })),
                  er({ action: "HOVER_BADGE" }),
                  (0, e3.vP)({
                    badgeId: (0, U.w0)(e.id),
                    badgeAction: "HOVER_BADGE",
                    position: t,
                    analyticsLocations: en,
                    ...ei,
                  }));
              },
              href: e.link,
              "aria-label": e.description,
              ...(ey ? { "aria-haspopup": "dialog", "aria-expanded": eG } : null),
              style: { filter: V && null != r ? `drop-shadow(0 0 5px ${r.glowColor})` : void 0 },
            };
          if (el)
            return (0, i.jsx)(
              eA,
              {
                shouldShow: !eG,
                legacyBadgeId: e.id,
                userId: k?.userId,
                fallbackTitle: e.description,
                fallbackIconSrc: e.iconSrc ?? e.simple_icon_url ?? (0, eP.L7)(e.icon),
                children: (0, i.jsx)(S.Anchor, { ...u, children: d }),
              },
              `${e.id}-${t}`,
            );
          let A =
            null != e.simple_icon_url ? eh.tierBySimpleIconUrl.get(e.simple_icon_url) : void 0;
          if (A?.complex_icon_static_url != null && null != eh.badgeName)
            return (0, i.jsx)(
              eu.K,
              {
                eyebrow: eh.badgeName,
                title: A.name ?? e.description,
                badgeImage: A.complex_icon_static_url,
                badgeName: e.description,
                shouldShow: !eG,
                children: (0, i.jsx)(S.Anchor, { ...u, children: d }),
              },
              `${e.id}-${t}`,
            );
          if (l) {
            let n = (0, i.jsx)(S.Anchor, { ...u, ref: X, children: d });
            return (0, i.jsx)(
              "div",
              {
                children: (0, i.jsx)(eU, {
                  badgeId: e.id,
                  targetElementRef: X,
                  mode: "tooltip",
                  body: e.description,
                  onShow: () => {
                    e0.default.track(e4.HAw.TOOLTIP_VIEWED, {
                      type: "tiered_tenure_badge_profile_" + (eL ? "self" : "other"),
                    });
                  },
                  estimatedTooltipHeight: 220,
                  children: n,
                }),
              },
              `${e.id}-${t}`,
            );
          }
          if (n) {
            let n = (0, i.jsx)(S.Anchor, { ...u, ref: Z, children: d });
            return (0, i.jsx)(
              eQ,
              {
                targetElementRef: Z,
                delay: eP.In,
                showSubtext: !ez && !e.isPreviewMode,
                forceOpen: c,
                children: n,
              },
              `${e.id}-${t}`,
            );
          }
          if (s) {
            let n = (0, i.jsx)(S.Anchor, { ...u, ref: q, children: d });
            return (0, i.jsx)(
              ep,
              {
                targetElementRef: q,
                delay: eP.In,
                forceOpen: c,
                badgeDescription: e.description,
                children: n,
              },
              `${e.id}-${t}`,
            );
          }
          let f = (0, i.jsx)(S.Anchor, { ...u, children: d }),
            p = (function (e) {
              let { badge: t, tieredTenureBadge: n } = e;
              return void 0 !== n && t.id !== e8.K
                ? (0, i.jsx)(eF, { profileBadge: t, tenureBadge: n })
                : t.description;
            })({ badge: e, tieredTenureBadge: a && e.id !== e8.K ? r : void 0 });
          return (0, i.jsx)(
            N.m,
            {
              __unsupportedReactNodeAsText: p,
              forceOpen: c,
              delay: eP.In,
              ariaHidden: !0,
              children: f,
            },
            `${e.id}-${t}`,
          );
        }),
        u > 0 &&
          (eD
            ? (0, i.jsx)(T.vN, {
                children: (0, i.jsx)("button", {
                  type: "button",
                  className: h()(e9.$O, e9.lv),
                  "aria-label": d,
                  onClick: function () {
                    let e = null != eI ? _.default.getUser(eI) : null;
                    (0, et.openBadgeDirectoryModal)({
                      targetUserId: eI,
                      targetUsername: e?.globalName ?? e?.username,
                    });
                  },
                  children: eZ,
                }),
              })
            : (0, i.jsxs)("span", {
                className: e9.$O,
                children: [(0, i.jsx)(C.A, { children: d }), eZ],
              })),
        ey &&
          !ev &&
          (0, i.jsx)(N.m, {
            text: Q.intl.string(Q.t.PXIyjF),
            asContainer: !0,
            ariaHidden: !0,
            anchorRef: J,
            children: (0, i.jsx)(T.vN, {
              children: (0, i.jsx)("button", {
                ref: J,
                type: "button",
                className: h()(e9.r9, u > 0 ? e9.v_ : e9.Y5),
                "aria-label": Q.intl.string(Q.t.PXIyjF),
                "aria-haspopup": "dialog",
                "aria-expanded": eG,
                onClick: (e) => {
                  (e.stopPropagation(), ex(!eG));
                },
                children: (0, i.jsx)(O.PencilIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: e9.IZ,
                  "aria-hidden": !0,
                }),
              }),
            }),
          }),
      ],
    });
    return ey
      ? (0, i.jsx)(R.Y, {
          targetElementRef: ev && !ew ? $ : H,
          position: "bottom",
          align: "left",
          spacing: 4,
          positionKey: `${c.length}`,
          scrollBehavior: "close",
          shouldShow: eG,
          onRequestClose: (e) => {
            let t = e?.target;
            $.current?.contains(t) === !0 || (t?.closest(`[${e5.m}]`) == null && ex(!1));
          },
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ed, { onClose: t, returnFocusRef: J, skipReturnFocusRef: ee });
          },
          children: () => eq,
        })
      : eq;
  }
  var tt = n(996988);
  let tn = {
    [tt.d.POPOUT]: 12,
    [tt.d.MODAL]: 26,
    [tt.d.SIDEBAR]: 13,
    [tt.d.VIDEO_TILE_BACKGROUND]: 12,
    [tt.d.EMBED]: 12,
  };
  function ti(e) {
    let t,
      {
        displayProfile: n,
        themeType: A,
        isRedesignEnabled: h,
        pendingLegacyUsernameDisabled: f,
        pendingBadges: I,
        showPendingBadgeEdits: p = !1,
        onClose: T,
        shouldOpenBadgeTooltip: m,
        shouldGlowTenureBadge: g,
        popoutAnchorRef: S,
        containerRef: N,
      } = e,
      C = (0, o.d)({ location: "UserProfileBadgeListRows" }),
      O = n?.userId,
      R = (0, s.bG)([_.default], () => null != O && _.default.getUser(O)?.bot === !0, [O]),
      L = (0, E.A)(n, f),
      { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: D } = (0, u.A)(),
      v = (0, s.yK)(
        [l.Ay],
        () => (p && null != O && l.Ay.hasCatalogFor(O) ? l.Ay.getBadges(O) : []),
        [p, O],
      ),
      b = r.useMemo(() => {
        let e = L;
        if (null != I) {
          let t = new Set(L.map((e) => e.id));
          e = [...L, ...I.filter((e) => !t.has(e.id))];
        }
        return p
          ? (0, c.Rr)(e, v, { pendingBadgeDisplayOrder: y, pendingBadgeHiddenBadges: D })
          : e;
      }, [L, I, p, v, y, D]);
    if (0 === b.length && !p) return null;
    let M = C && !R,
      P = M ? Math.max(b.length - d.k9, 0) : 0;
    return (
      (t = M
        ? [b.slice(0, d.k9)]
        : A === tt.d.MODAL_V2
          ? [b]
          : (0, a.chunk)(b, !0 === h && A === tt.d.SIDEBAR ? tn[tt.d.POPOUT] : tn[A])),
      (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
          (0, i.jsx)(
            te,
            {
              badges: e,
              overflowCount: P,
              displayProfile: n,
              onClose: T,
              shouldOpenBadgeTooltip: m,
              shouldGlowTenureBadge: g,
              isTargetUserBot: R,
              popoutAnchorRef: S,
              containerRef: 0 === t ? N : void 0,
            },
            t,
          ),
        ),
      })
    );
  }
}
