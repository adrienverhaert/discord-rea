/* Recovered shipped factory. Module 646731.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8438779..8456436
 * Raw property SHA-256: 0e824017a41805575b2d4c7c42868d8286c42dc4f35d25095c1b57ef852077c8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Yc: () => ej, vG: () => e$, FT: () => eH, EA: () => ez });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(892227),
    o = n(806163),
    d = n(17928),
    c = n(939249),
    u = n(192308),
    _ = n(922016),
    E = n(793574),
    A = n(688810),
    h = n(757036),
    f = n(369189),
    I = n(366505),
    p = n(287809),
    T = n(166403),
    m = n(174459),
    g = n(124861),
    S = n(318346),
    N = n(362862),
    C = n(478996),
    O = n(923138),
    R = n(12510),
    L = n(673125),
    y = n(821609),
    D = n(661531),
    v = n(403581),
    b = n(834730),
    M = n(140735),
    P = n(683071),
    U = n(577473),
    w = n(34188),
    G = n(369606),
    x = n(28863),
    k = n(305866),
    F = n(475743),
    B = n(303136),
    V = n(975571),
    H = n(626031),
    j = n(320448),
    W = n(404778),
    Y = n(318254),
    K = n(742967),
    $ = n(419259),
    z = n(660183),
    X = n(137484),
    Z = n(427483);
  function q(e) {
    let { achievementStatus: t, animationState: n = "off" } = e,
      r = t === g.x.COMPLETED || t === g.x.CLAIMED,
      a = (0, i.jsx)("div", {
        className: s()(X.TK, { [X.AM]: r }),
        children: (0, i.jsx)(K.x, {
          className: X.t9,
          webmAsset: Z.A,
          animationState: n,
          assetAltText: "",
        }),
      });
    return r
      ? (0, i.jsxs)("div", {
          className: X.Zs,
          children: [(0, i.jsx)(M.A, { children: z.intl.string($.default.k6h2J3) }), a],
        })
      : a;
  }
  function Q(e) {
    let { className: t } = e;
    return (0, i.jsx)(W.c, { className: s()(X.Fu, t) });
  }
  function J(e) {
    let {
        achievementIdentifier: t,
        title: n,
        orbRewardAmount: a,
        achievementStatus: l,
        onClaim: o,
        onDiscoveryClick: d,
        isLastItem: u,
        isFirstItem: _,
      } = e,
      [E, A] = r.useState(!1),
      [h, f] = r.useState(!1);
    async function I() {
      null != o && (f(!0), await o(t).finally(() => f(!1)));
    }
    let p = null != d && l !== g.x.COMPLETED,
      T = s()(X.of, { [X.o4]: _, [X.D8]: E, [X.or]: p }),
      m = (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsxs)("div", {
            className: X.Ub,
            children: [
              (0, i.jsx)(q, { achievementStatus: l, animationState: E ? "on" : "off" }),
              (0, i.jsxs)("div", {
                className: X.Du,
                children: [
                  (0, i.jsx)(b.E, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: n,
                  }),
                  (0, i.jsx)(b.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: z.intl.format(
                      l === g.x.COMPLETED ? $.default.h2qWpS : $.default.B8Fxns,
                      {
                        orbAmount: a,
                        orbIconHook: () =>
                          (0, i.jsx)(Y.C, {
                            className: X.fN,
                            size: "xxs",
                            color: D.A.colors.ICON_SUBTLE,
                          }),
                      },
                    ),
                  }),
                ],
              }),
            ],
          }),
          (function (e, t) {
            let { isClaiming: n, handleClaim: r, hasDiscoveryClick: a } = t,
              s = (0, i.jsx)(y.$, {
                variant: "expressive",
                size: "sm",
                text: z.intl.string($.default.WmfVjs),
                loading: n,
                onClick: r,
              });
            return e === g.x.COMPLETED || n
              ? s
              : a
                ? (0, i.jsx)(j._, { size: "sm", "aria-hidden": !0 })
                : null;
          })(l, { isHovered: E, isClaiming: h, handleClaim: I, hasDiscoveryClick: p }),
        ],
      }),
      S = r.useMemo(() => ({ onMouseEnter: () => A(!0), onMouseLeave: () => A(!1) }), []);
    return p
      ? (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(c.D, { className: T, ...S, onClick: d, children: m }),
            !u && (0, i.jsx)(Q, {}),
          ],
        })
      : (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", { className: T, ...S, children: m }),
            !u && (0, i.jsx)(Q, {}),
          ],
        });
  }
  var ee = n(652215),
    et = n(653877),
    en = n(268920),
    ei = n(633217);
  function er() {
    return (0, i.jsx)("div", {
      className: et.s,
      children: (0, i.jsx)(B.A, { src: ei.A, fallbackImage: en.A, className: et.Cb }),
    });
  }
  function ea(e) {
    let { nitroIconColor: t = D.A.colors.ICON_SUBTLE, text: n } = e;
    return (0, i.jsxs)("div", {
      className: et.SY,
      children: [
        (0, i.jsx)(v.t, { size: "xs", color: t }),
        (0, i.jsx)(b.E, { variant: "text-xs/medium", color: "text-subtle", children: n }),
      ],
    });
  }
  function es(e) {
    let { orbBalance: t, headerTagsContent: n } = e,
      a = (0, F.Ay)(t),
      s = r.useMemo(
        () =>
          (null != t && !!(t.toString().length > 10)) ||
          (null != a && !!(a.toString().length > 10)),
        [t, a],
      );
    return (0, i.jsxs)("div", {
      className: et.SZ,
      children: [
        (0, i.jsx)(er, {}),
        (0, i.jsxs)("div", {
          className: et.ZX,
          children: [
            (0, i.jsx)(M.A, {
              children:
                null == t
                  ? z.intl.string(z.t.cKwv4k)
                  : z.intl.formatToPlainString(z.t.zPaLL9, { balance: t }),
            }),
            (0, i.jsx)(H.t, {
              ariaHidden: !0,
              counterInnerClassName: s ? et.F4 : void 0,
              value: t,
              onValueChange: ee.tEg,
              onValueReached: ee.tEg,
              targetTotalCounterTime: 1500,
              textVariant: "display-md",
              textColor: "text-strong",
              horizontalAlignment: "left",
              isRenderedWithoutLottieAnimation: !0,
            }),
            n,
          ],
        }),
      ],
    });
  }
  function el(e) {
    let { text: t, accessibilityLabel: n, onClick: r } = e,
      a = null != n,
      l = (0, i.jsxs)(i.Fragment, {
        children: [
          a && (0, i.jsx)(M.A, { children: n }),
          (0, i.jsx)(v.t, { size: "xxs", color: "white", "aria-hidden": !0 }),
          (0, i.jsx)(b.E, {
            variant: "text-xs/semibold",
            color: "text-overlay-light",
            "aria-hidden": a,
            children: t,
          }),
        ],
      });
    return null == r
      ? (0, i.jsx)("div", { className: et.lh, children: l })
      : (0, i.jsx)(c.D, { className: s()(et.lh, et.w9), onClick: r, children: l });
  }
  function eo(e) {
    let { numRows: t = 3 } = e,
      n = r.useMemo(() => Array.from({ length: t }), [t]);
    return (0, i.jsx)("div", {
      className: et.gW,
      "aria-hidden": !0,
      children: n.map((e, t) =>
        (0, i.jsxs)(
          "div",
          {
            className: et.US,
            children: [
              (0, i.jsx)("div", { className: s()(et.DO, et.VR) }),
              (0, i.jsxs)("div", {
                className: et.A3,
                children: [
                  (0, i.jsx)("div", { className: s()(et.DO, et.Iz) }),
                  (0, i.jsx)("div", { className: s()(et.DO, et.D_) }),
                ],
              }),
            ],
          },
          t,
        ),
      ),
    });
  }
  function ed(e) {
    let {
        title: t,
        challenges: n,
        isLoading: a,
        onClaim: s,
        badgeText: l,
        badgeAccessibilityLabel: o,
        onClickBadge: d,
        inlineNoticeProps: c,
      } = e,
      u = n.length > 0,
      _ = r.useMemo(
        () =>
          a && null == c
            ? (0, i.jsx)(eo, { numRows: 3 })
            : u
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("div", {
                      className: et.$b,
                      children: [
                        (0, i.jsx)(b.E, {
                          variant: "text-xs/medium",
                          color: "text-subtle",
                          children: t,
                        }),
                        null != l && (0, i.jsx)(el, { text: l, accessibilityLabel: o, onClick: d }),
                      ],
                    }),
                    (0, i.jsx)("ul", {
                      className: et.Up,
                      children: n.map((e, t) =>
                        (0, i.jsx)(
                          "li",
                          {
                            className: et.tJ,
                            children: (0, i.jsx)(J, {
                              ...e,
                              onClaim: s,
                              isLastItem: t === n.length - 1,
                            }),
                          },
                          e.achievementIdentifier,
                        ),
                      ),
                    }),
                  ],
                })
              : null != c
                ? null
                : (0, i.jsxs)("div", {
                    className: et.GN,
                    children: [
                      (0, i.jsx)(b.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: z.intl.string($.default.xOP5OP),
                      }),
                      (0, i.jsx)(b.E, {
                        variant: "experimental/body-xs/normal",
                        color: "text-subtle",
                        children: z.intl.string($.default.XW2CuY),
                      }),
                    ],
                  }),
        [a, u, t, l, o, d, n, c, s],
      ),
      E = r.useMemo(
        () =>
          null == c
            ? null
            : (0, i.jsx)("div", { className: et.re, children: (0, i.jsx)(P.w, { ...c }) }),
        [c],
      );
    return (0, i.jsxs)("div", { className: et.E6, "aria-busy": a, children: [E, _] });
  }
  function ec(e) {
    let { onQuestsClick: t, onShopClick: n, totalOrbsRedeemed: r } = e;
    return (0, i.jsxs)("div", {
      className: et.VX,
      children: [
        (0, i.jsxs)("div", {
          className: et.W,
          children: [
            null != t &&
              (0, i.jsx)(y.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: U.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
              }),
            null != n &&
              (0, i.jsx)(y.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: w.U, type: "icon" },
                fullWidth: !0,
                onClick: n,
              }),
          ],
        }),
        (0, i.jsxs)("div", {
          className: et.RA,
          children: [
            null != r &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(G.TrophyIcon, {
                    size: "xs",
                    color: D.A.colors.ICON_MUTED,
                    "aria-hidden": !0,
                  }),
                  (0, i.jsx)(b.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: z.intl.format($.default.B5tZXw, { orbAmount: r }),
                  }),
                  (0, i.jsx)(b.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    "aria-hidden": !0,
                    children: "\u2022",
                  }),
                ],
              }),
            (0, i.jsx)(b.E, {
              variant: "text-xs/normal",
              children: (0, i.jsx)(x.Anchor, {
                target: "_blank",
                rel: "author",
                href: V.A.getArticleURL(ee.MVz.ORBS_WALLET),
                children: z.intl.string(z.t["5qZv9E"]),
              }),
            }),
          ],
        }),
      ],
    });
  }
  function eu(e) {
    let {
        orbBalance: t,
        headerTagsContent: n,
        renderPrimaryCard: a,
        orbChallengesCard: l,
        orbWalletFooter: o,
        cardRef: d,
        returnRef: c,
      } = e,
      [u, _] = r.useState(!1);
    return (0, i.jsxs)(k.l, {
      className: s()(et.ql, et.Ut),
      ref: d,
      returnRef: c,
      "aria-label": z.intl.string($.default.XKj5L9),
      children: [
        (0, i.jsxs)("div", {
          className: et.hG,
          children: [
            (0, i.jsx)(es, { orbBalance: t, headerTagsContent: n }),
            u ? null : a({ onClose: () => _(!0) }),
          ],
        }),
        (0, i.jsx)("div", { className: et.BA, children: l }),
        o,
      ],
    });
  }
  var e_ = n(554146),
    eE = n(408278),
    eA = n(789645),
    eh = n(131607),
    ef = n(696292),
    eI = n(815996),
    ep = n(75678),
    eT = n(87719),
    em = n(576761),
    eg = n(617986),
    eS = n(758836),
    eN = n(202541);
  function eC(e) {
    let { analyticsLocations: t = [], shopTab: n = eS.G2.ORBS } = e;
    (0, eI.Cz)({ tab: n, analyticsLocations: t, analyticsSource: E.A.ORBS_BALANCE_MENU });
  }
  function eO() {
    (0, eg.mA)({ fromContent: ef.u.ORBS_BALANCE_MENU });
  }
  function eR(e) {
    let { analyticsLocations: t = [] } = e;
    (0, ep.A)({ subscriptionTier: eN.pe.TIER_2, analyticsLocations: t });
  }
  let eL = {
    "1531422538125676707": (e) => {
      let { analyticsLocations: t } = e;
      eC({ analyticsLocations: t, shopTab: eS.G2.HOME });
    },
    "1531422538125676708": (e) => {
      let { analyticsLocations: t } = e;
      eC({ analyticsLocations: t, shopTab: eS.G2.HOME });
    },
    "1531422538125676709": (e) => {
      let { analyticsLocations: t } = e;
      eR({ analyticsLocations: t });
    },
  };
  var ey = n(49999),
    eD = n(600676);
  function ev(e) {
    let {
      title: t,
      imageUrl: n,
      imageAlt: r,
      subTextDescription: a,
      buttonText: l,
      buttonIcon: o,
      buttonVariant: d,
      onCtaClick: c,
      onClose: u,
      className: _,
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(eD.Vm, _),
      children: [
        null != u
          ? (0, i.jsx)("div", {
              className: eD.Fx,
              children: (0, i.jsx)(eE.K, {
                icon: eA.P,
                "aria-label": z.intl.string(z.t.cpT0Cq),
                variant: "icon-only",
                size: "sm",
                onClick: u,
              }),
            })
          : null,
        (0, i.jsxs)("div", {
          className: eD.iH,
          children: [
            null != n && (0, i.jsx)("img", { alt: r, src: n, className: eD.db }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(b.E, {
                  variant: "text-md/bold",
                  color: "text-default",
                  className: eD.L8,
                  children: t,
                }),
                null != a &&
                  (0, i.jsx)(b.E, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: a,
                  }),
              ],
            }),
          ],
        }),
        (0, i.jsx)(y.$, { text: l, size: "sm", icon: o, onClick: c, variant: d, fullWidth: !0 }),
      ],
    });
  }
  function eb(e, t) {
    let { ctaClickHandler: n, dismissibleContent: i, ctaObject: a } = t,
      { analyticsPage: s = E.A.ORB_WALLET, forceVisible: l, onClose: o, onCloseWallet: d } = e,
      [c, u] = (0, eh.kn)([i], ey.m.ORB_WALLET, !0),
      _ = r.useCallback(() => {
        ((0, S.Y)({ pageType: s, sectionType: E.A.ORB_WALLET_PRIMARY_CARD, ctaObject: a }),
          n(),
          l || u(ey.i.TAKE_ACTION),
          d("navigation"));
      }, [s, u, l, d, n, a]),
      A = r.useCallback(() => {
        (l || u(ey.i.DISMISS), o());
      }, [l, u, o]);
    return { onCtaClick: _, shouldHideCard: null == c && !l, onClose: A };
  }
  function eM(e) {
    let {
        onClose: t,
        onCloseWallet: a,
        analyticsPage: s = E.A.ORB_WALLET,
        forceVisible: l = !1,
      } = e,
      { analyticsLocations: o } = (0, A.Ay)(E.A.ORB_WALLET_PRIMARY_CARD),
      {
        shouldHideCard: d,
        onCtaClick: c,
        onClose: u,
      } = eb(
        { analyticsPage: s, forceVisible: l, onClose: t, onCloseWallet: a },
        {
          ctaClickHandler: r.useCallback(() => {
            eC({ analyticsLocations: o });
          }, [o]),
          dismissibleContent: e_.M.ORB_WALLET_SHOP_CTA_CARD,
          ctaObject: E.A.ORB_WALLET_SHOP_CTA,
        },
      );
    return d
      ? null
      : (0, i.jsx)(ev, {
          title: z.intl.string($.default.v8QrJf),
          imageUrl: n(105644),
          imageAlt: z.intl.string($.default.qa1xyr),
          subTextDescription: z.intl.string($.default.HACucK),
          buttonText: z.intl.string($.default["7raRgL"]),
          buttonIcon: { asset: w.U, type: "icon" },
          onCtaClick: c,
          onClose: u,
        });
  }
  let eP = { asset: v.t, type: "icon" };
  function eU(e) {
    let {
        onClose: t,
        onCloseWallet: a,
        analyticsPage: s = E.A.ORB_WALLET,
        forceVisible: l = !1,
      } = e,
      { analyticsLocations: o } = (0, A.Ay)(E.A.ORB_WALLET_PRIMARY_CARD),
      {
        shouldHideCard: c,
        onCtaClick: u,
        onClose: _,
      } = eb(
        { analyticsPage: s, forceVisible: l, onClose: t, onCloseWallet: a },
        {
          ctaClickHandler: r.useCallback(() => {
            eR({ analyticsLocations: o });
          }, [o]),
          dismissibleContent: e_.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
          ctaObject: E.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
        },
      ),
      { nitroGatedOrbMultiplier: h } = (0, d.cf)([L.Ay], () => ({
        nitroGatedOrbMultiplier: L.Ay.nitroGatedOrbMultiplier,
      })),
      f = r.useMemo(() => z.intl.format($.default["Ba/7wO"], { multiplier: h }), [h]);
    return null == h || c
      ? null
      : (0, i.jsx)(ev, {
          title: z.intl.string($.default.ZqCAos),
          imageUrl: n(780361),
          imageAlt: z.intl.string($.default.FkfrRH),
          subTextDescription: f,
          buttonText: z.intl.string($.default.U9UQJE),
          buttonIcon: eP,
          buttonVariant: "expressive",
          onCtaClick: u,
          onClose: _,
          className: eD.ml,
        });
  }
  var ew = n(123576);
  let eG = [
    {
      achievementIdentifier: "challenge_1",
      title: "Challenge Task",
      description: "Challenge description",
      achievementStatus: g.x.COMPLETED,
      orbRewardAmount: 100,
      onDiscoveryClick: () => {
        console.log("Challenge 1 discovery clicked");
      },
    },
    {
      achievementIdentifier: "challenge_2",
      title: "Challenge Task",
      description: "Challenge description",
      achievementStatus: g.x.NONE,
      orbRewardAmount: 100,
      onDiscoveryClick: () => {
        console.log("Challenge 2 discovery clicked");
      },
    },
    {
      achievementIdentifier: "challenge_3",
      title: "Challenge Task",
      description: "Challenge description",
      achievementStatus: g.x.NONE,
      orbRewardAmount: 100,
    },
  ];
  async function ex(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
  }
  function ek(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
  }
  function eF(e) {
    let {
        userHasPremium: t,
        onClose: n,
        orbBalance: r,
        analyticsPage: a,
        forceVisible: s = !1,
        onCloseWallet: l = ee.tEg,
      } = e,
      o = ek(t, r);
    return "shop_orbs" === o
      ? (0, i.jsx)(eM, { onClose: n, analyticsPage: a, forceVisible: s, onCloseWallet: l })
      : "nitro_upsell" === o
        ? (0, i.jsx)(eU, { onClose: n, analyticsPage: a, forceVisible: s, onCloseWallet: l })
        : null;
  }
  function eB(e) {
    let { text: t, onClick: n } = e;
    return null == n
      ? (0, i.jsx)("span", { className: ew.dW, children: t })
      : (0, i.jsx)(c.D, { className: s()(ew.dW, ew.or), onClick: n, children: t });
  }
  function eV(e, t) {
    return z.intl.formatToPlainString(e ? $.default.p9PPYD : $.default["1JZfaU"], {
      multiplier: t,
    });
  }
  function eH(e) {
    let {
      userHasPremium: t,
      orbBalance: n,
      hasErrorMessage: r,
      isLoading: a,
      hasNoChallenges: s,
      totalOrbsRedeemed: l = 15600,
    } = e;
    return (0, i.jsx)(eu, {
      orbBalance: n,
      headerTagsContent: t
        ? (0, i.jsx)(ea, { text: z.intl.format($.default["04j3XV"], { orbAmount: 250, days: 16 }) })
        : null,
      renderPrimaryCard: (e) => {
        let { onClose: i } = e;
        return eF({ userHasPremium: t, onClose: i, orbBalance: n, forceVisible: !0 });
      },
      orbChallengesCard: (0, i.jsx)(ed, {
        isLoading: a,
        inlineNoticeProps: r
          ? {
              type: "warning",
              message: z.intl.format($.default.ggLzeg, {
                underlineHook: (e) => (0, i.jsx)(eB, { text: e }),
              }),
              role: "status",
            }
          : null,
        title: z.intl.string($.default.H6Ny8N),
        badgeText: z.intl.format(t ? $.default.OHLdjq : $.default.WOMrJf, { multiplier: 1.2 }),
        badgeAccessibilityLabel: eV(t, 1.2),
        challenges: s ? [] : eG,
        onClaim: ex,
      }),
      orbWalletFooter: (0, i.jsx)(ec, {
        onQuestsClick: () => eO(),
        onShopClick: () => eC({ analyticsLocations: [] }),
        totalOrbsRedeemed: l,
      }),
    });
  }
  function ej(e) {
    return (0, i.jsx)(eH, { ...e, hasNoChallenges: !0 });
  }
  function eW() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, I.F)();
    if (!e || null == t) return null;
    let n = Math.max(1, (0, l.default)(new Date(t.next_reward_date), new Date()));
    return (0, i.jsx)(ea, {
      text: z.intl.format($.default["04j3XV"], { orbAmount: t.reward_amount, days: n }),
    });
  }
  function eY() {
    return null != (0, d.bG)([T.A], () => T.A.getPremiumTypeSubscription())
      ? (0, i.jsx)(eW, {})
      : null;
  }
  function eK(e) {
    let {
        analyticsPage: t = E.A.ORB_WALLET,
        analyticsLocations: a = [],
        onCloseWallet: s = ee.tEg,
      } = e,
      {
        challengesForOrbWallet: l,
        hasFetchedChallenges: o,
        refetch: c,
      } = (0, O.z)({ shouldFetch: !0 }),
      _ = (0, h.L)(eN.PremiumTypes.TIER_2),
      A = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
      { nitroGatedOrbMultiplier: f, orbChallengesDisplayError: I } = (0, d.cf)([L.Ay], () => ({
        nitroGatedOrbMultiplier: L.Ay.nitroGatedOrbMultiplier,
        orbChallengesDisplayError: L.Ay.orbChallengesDisplayError,
      })),
      T = null != A && !A.isClaimed(),
      m = r.useMemo(
        () =>
          null != I
            ? {
                type: "warning",
                message:
                  I.errorType === L.EB.CLAIM_CHALLENGE
                    ? z.intl.string($.default.FYb5rH)
                    : z.intl.format($.default.ggLzeg, {
                        underlineHook: (e) => (0, i.jsx)(eB, { text: e, onClick: c }),
                      }),
                role: "status",
              }
            : T
              ? { type: "info", message: z.intl.string(z.t.qxk9zo), role: "status" }
              : null,
        [I, c, T],
      ),
      g = r.useCallback(
        () => (
          (0, S.Y)({
            pageType: t,
            sectionType: E.A.ORB_WALLET,
            ctaObject: E.A.ORB_WALLET_NITRO_BADGE_CLICK,
          }),
          s("navigation"),
          (function (e) {
            let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: n } = e;
            if (null == t) return void (0, eT.x)();
            let i = n ? em.MA.NITRO : em.MA.UPSELL,
              r = n
                ? { customSubtitle: z.intl.format($.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                : void 0;
            (0, eg.gC)(t, i, r);
          })({ nitroGatedOrbMultiplier: f, userIsPremiumTier2: _ })
        ),
        [f, _, t, s],
      ),
      N = r.useMemo(
        () =>
          l.map((e) => {
            let n = null != e.achievementDefinitionId ? eL[e.achievementDefinitionId] : null,
              i = { analyticsLocations: a },
              r =
                null != n
                  ? () => {
                      ((0, S.Y)({
                        pageType: t,
                        sectionType: E.A.ORB_WALLET,
                        ctaObject: E.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                      }),
                        n(i),
                        s("navigation"));
                    }
                  : void 0;
            return { ...e, onDiscoveryClick: r };
          }),
        [l, a, t, s],
      ),
      C = r.useCallback(() => {
        (0, u.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("671464"),
            n.e("112206"),
            n.e("709998"),
            n.e("480388"),
          ]).then(n.bind(n, 195759));
          return (t) => {
            let { onClose: n, ...r } = t;
            return (0, i.jsx)(e, { ...r, onClose: n, body: z.intl.string(z.t["gP/vPe"]) });
          };
        });
      }, []),
      y = r.useCallback((e) => (T ? (C(), Promise.resolve()) : (0, R.Xz)(e)), [T, C]);
    return (0, i.jsx)(ed, {
      title: z.intl.string($.default.H6Ny8N),
      isLoading: !o,
      inlineNoticeProps: m,
      challenges: N,
      onClaim: y,
      onClickBadge: g,
      badgeText: z.intl.format(_ ? $.default.OHLdjq : $.default.WOMrJf, { multiplier: f }),
      badgeAccessibilityLabel: eV(_, f),
    });
  }
  function e$(e) {
    let {
        cardRef: t,
        returnRef: n,
        analyticsPage: a = E.A.ORB_WALLET,
        onCloseWallet: s = ee.tEg,
        isProfilePopout: l,
      } = e,
      { balance: c } = (0, C.W0)(),
      u = (0, N.H)({ location: "StatefulOrbWallet" }),
      { totalRedeemed: _ } = (0, C.rQ)({ disableFetch: !u }),
      I = (0, h.L)(eN.PremiumTypes.TIER_2),
      { analyticsLocations: p } = (0, A.Ay)(E.A.ORB_WALLET);
    r.useEffect(() => {
      u && (0, R.eX)();
    }, [u]);
    let T = r.useCallback(() => {
        ((0, S.Y)({
          pageType: a,
          sectionType: E.A.ORB_WALLET_FOOTER,
          ctaObject: E.A.ORB_WALLET_SHOP_CTA,
        }),
          eC({ analyticsLocations: p }),
          s("navigation"));
      }, [p, a, s]),
      O = r.useCallback(() => {
        ((0, S.Y)({
          pageType: a,
          sectionType: E.A.ORB_WALLET_FOOTER,
          ctaObject: E.A.ORB_WALLET_QUEST_HOME_CTA,
        }),
          eO(),
          s("navigation"));
      }, [a, s]),
      y = r.useMemo(() => ek(I, c), [I, c]),
      { challengesForOrbWallet: D, hasFetchedChallenges: v } = (0, d.cf)([L.Ay], () => ({
        challengesForOrbWallet: L.Ay.challengesForOrbWallet,
        hasFetchedChallenges: L.Ay.hasFetchedChallenges,
      })),
      b = r.useRef(!1);
    r.useEffect(() => {
      if (!v || b.current) return;
      let e = D.map((e) => e.achievementIdentifier),
        t = D.filter((e) => e.achievementStatus === g.x.COMPLETED).map(
          (e) => e.achievementIdentifier,
        );
      (m.default.track(ee.HAw.ORB_WALLET_VIEWED, {
        location_stack: p,
        location_page: a,
        location_section: E.A.ORB_WALLET,
        location_object: E.A.ORB_WALLET,
        wallet_primary_card_type: y,
        wallet_visible_achievements: e,
        wallet_visible_completed_achievements: t,
      }),
        (b.current = !0));
    }, [v, D, y, p, a]);
    let { pathname: M } = (0, o.zy)(),
      P = M.startsWith(ee.BVt.COLLECTIBLES_SHOP),
      U = (0, f.p)(),
      w = r.useMemo(
        () =>
          l
            ? { onQuestsClick: O, onShopClick: T }
            : { onQuestsClick: U ? null : O, onShopClick: P ? null : T },
        [U, P, O, T, l],
      );
    return u
      ? (0, i.jsx)(eu, {
          cardRef: t,
          returnRef: n,
          orbBalance: c,
          headerTagsContent: (0, i.jsx)(eY, {}),
          renderPrimaryCard: (e) => {
            let { onClose: t } = e;
            return eF({
              userHasPremium: I,
              onClose: t,
              orbBalance: c,
              analyticsPage: a,
              onCloseWallet: s,
            });
          },
          orbChallengesCard: (0, i.jsx)(eK, {
            analyticsPage: a,
            analyticsLocations: p,
            onCloseWallet: s,
          }),
          orbWalletFooter: (0, i.jsx)(ec, { ...w, totalOrbsRedeemed: _ }),
        })
      : null;
  }
  function ez(e) {
    let {
        cardRef: t,
        returnRef: n,
        targetElementRef: a,
        shouldShow: s,
        analyticsPage: l,
        onCloseWallet: o,
      } = e,
      d = r.useCallback(
        () => (0, i.jsx)(e$, { cardRef: t, returnRef: n, analyticsPage: l, onCloseWallet: o }),
        [t, n, l, o],
      ),
      c = r.useCallback(
        (e, t) => {
          "user:escape" === t && null != o && o("direct_close");
        },
        [o],
      );
    return (0, i.jsx)(_.Y, {
      fixed: !0,
      autoInvert: !1,
      renderPopout: d,
      position: "bottom",
      align: "right",
      shouldShow: s,
      onRequestClose: c,
      animation: _.Y.Animation.NONE,
      targetElementRef: a,
      children: () => null,
    });
  }
}
