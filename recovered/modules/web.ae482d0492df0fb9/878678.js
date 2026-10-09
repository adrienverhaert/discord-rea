/* Recovered shipped factory. Module 878678.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5078806..5097887
 * Raw property SHA-256: a0c3b26b372c78159f605d83497881a7f334581ecf431191ece208ad7d131a38
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Zt: () => eJ, K4: () => e1 });
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(444927),
    l = n(793574),
    o = n(688810),
    d = n(361158),
    c = n(71393),
    u = n(287809),
    _ = n(174459),
    E = n(625494),
    A = n(269115),
    h = n(559106),
    f = n(939249),
    I = n(789645),
    p = n(689175),
    T = n(498480),
    m = n(831617),
    g = n(475669),
    S = n(645619),
    N = n(877624),
    C = n(406810),
    O = n(834730),
    R = n(28863),
    L = n(549996),
    y = n(807098),
    D = n(637706),
    v = n(788883),
    b = n(7667),
    M = n(990854);
  function P() {
    let e = (0, L.c)(N.C.GUILD_BOOST_MARKETING_PAGE_BANNER),
      t =
        null != e && "guildBoostMarketingPageBanner" === e.properties.properties.oneofKind
          ? e.properties.properties.guildBoostMarketingPageBanner
          : null,
      n = (0, y.T)(t?.asset),
      { countdownText: r, terms: a } = (0, b.A)(e?.promotionId ?? "");
    if (null == e || null == t) return null;
    let s = (0, D.C)(t.helpArticle, ""),
      l = [t.body, a].filter((e) => "" !== e).join(" ");
    return (0, i.jsxs)("div", {
      className: M.kL,
      children: [
        (0, i.jsx)(v.A, {
          componentType: N.C.GUILD_BOOST_MARKETING_PAGE_BANNER,
          componentId: e.id,
          promotionId: e.promotionId,
        }),
        null != n && "" !== n && (0, i.jsx)("img", { src: n, className: M.LY, alt: "" }),
        (0, i.jsxs)("div", {
          className: M.er,
          children: [
            null != r &&
              (0, i.jsxs)("div", {
                className: M.qW,
                children: [
                  (0, i.jsx)(C.ClockIcon, {
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: "currentColor",
                    className: M.y,
                  }),
                  (0, i.jsx)(O.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    children: r,
                  }),
                ],
              }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(O.E, {
                  variant: "text-md/semibold",
                  color: "text-default",
                  children: t.header,
                }),
                (0, i.jsxs)(O.E, {
                  variant: "text-sm/medium",
                  color: "text-default",
                  children: [
                    l,
                    null != s &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          "" !== l && " ",
                          (0, i.jsx)(R.Anchor, {
                            className: M.nf,
                            href: s.url,
                            children: s.linkText,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  var U = n(333722),
    w = n(503698),
    G = n.n(w),
    x = n(297264),
    k = n(104510),
    F = n(661531),
    B = n(821609),
    V = n(597770),
    H = n(548118),
    j = n(75678),
    W = n(864310),
    Y = n(338548),
    K = n(178368),
    $ = n(158045),
    z = n(987144),
    X = n(652215),
    Z = n(202541),
    q = n(660183),
    Q = n(673555);
  let J = function (e) {
    let { className: t, closeLayer: n, guild: s, onCtaVisibilityChange: l } = e,
      d = r.useRef(null),
      c = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
      _ = (0, a.bG)([K.A], () => K.A.boostSlots),
      E = c?.isPremiumGroupMember(),
      { analyticsLocations: h } = (0, o.Ay)(),
      [f, I] = r.useState(!1),
      p = r.useMemo(
        () =>
          Object.keys(_).filter((e) => {
            let t = _[e];
            return (
              null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === s.id
            );
          }).length,
        [_, s.id],
      ),
      T = (0, W.A)(e.guild.id).total;
    async function m() {
      (I(!0),
        await (0, z.g)({
          analyticsLocations: h,
          analyticsLocation: {
            page: X.liQ.PREMIUM_GUILD_USER_MODAL,
            section: X.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
            object: X.ZSU.BUTTON_CTA,
            objectType: X.AnalyticsObjectTypes.BUY,
          },
          guild: s,
          closeLayer: n,
        }),
        I(!1));
    }
    return (0, i.jsxs)("div", {
      className: G()(Q.kL, t),
      children: [
        (0, i.jsxs)("div", {
          className: Q.$R,
          children: [
            (0, i.jsx)(H.Ay, {
              className: Q.$f,
              guild: s,
              size: H.Ay.Sizes.LARGER,
              iconSize: 70,
              active: !0,
            }),
            (0, i.jsxs)("div", {
              className: Q.CR,
              children: [
                (0, i.jsx)(x.D, {
                  className: Q.J5,
                  variant: "heading-lg/semibold",
                  children: s.name,
                }),
                (0, i.jsxs)("div", {
                  className: Q.SJ,
                  children: [
                    (0, i.jsx)(k._, {
                      color:
                        T > 0 ? F.A.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
                      className: G()(Q.Me, { [Q.S3]: T > 0 }),
                    }),
                    (0, i.jsx)(O.E, {
                      className: Q.n,
                      variant: "text-md/semibold",
                      children: q.intl.format(q.t["pob/cL"], { subscriptions: T }),
                    }),
                  ],
                }),
                p > 0
                  ? (0, i.jsx)(O.E, {
                      className: Q.EV,
                      variant: "text-sm/normal",
                      children: q.intl.format(q.t.Jeto2u, { numSubscriptions: p }),
                    })
                  : null,
              ],
            }),
          ],
        }),
        (0, i.jsxs)("div", {
          className: Q.mY,
          children: [
            (0, i.jsx)("h1", { className: Q.R_, children: q.intl.string(q.t.N4sqzL) }),
            E ? (0, i.jsx)(Y.A, { alwaysWhite: !0 }) : null,
            (0, i.jsxs)("div", {
              className: Q.Sq,
              children: [
                (0, i.jsx)(A.L, {
                  innerRef: d,
                  onChange: l,
                  threshold: 0.9,
                  children: (0, i.jsx)("div", {
                    ref: d,
                    className: Q.dp,
                    children: (0, i.jsx)(B.$, {
                      variant: "expressive",
                      size: "md",
                      icon: k._,
                      text: q.intl.string(q.t.gKmQ1G),
                      onClick: m,
                      loading: f,
                      disabled: E,
                    }),
                  }),
                }),
                $.Ay.hasFreeBoosts(c) || $.Ay.isPremium(c, Z.PremiumTypes.TIER_2)
                  ? (0, i.jsx)(B.$, {
                      variant: "secondary",
                      size: "md",
                      icon: V.GiftIcon,
                      text: q.intl.string(q.t["8MYSQw"]),
                      onClick: function () {
                        (0, j.A)({
                          subscriptionTier: Z.pe.TIER_2,
                          isGift: !0,
                          analyticsLocations: h,
                          analyticsObject: {
                            page: X.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: X.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                            object: X.ZSU.BUTTON_ICON,
                            objectType: X.AnalyticsObjectTypes.GIFT,
                          },
                          onClose: (e) => e && n(),
                        });
                      },
                    })
                  : (0, i.jsx)(B.$, {
                      variant: "secondary",
                      size: "md",
                      text: q.intl.string(q.t.Q43TvC),
                      onClick: function () {
                        (0, j.A)({
                          initialPlanId: null,
                          subscriptionTier: Z.pe.TIER_2,
                          analyticsLocations: h,
                          analyticsObject: {
                            page: X.liQ.PREMIUM_GUILD_USER_MODAL,
                            section: X.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                            object: X.ZSU.BUTTON_ICON,
                            objectType: X.AnalyticsObjectTypes.BUY,
                          },
                          onClose: (e) => e && n(),
                        });
                      },
                      disabled: E,
                    }),
              ],
            }),
          ],
        }),
      ],
    });
  };
  var ee = n(232122),
    et = n(366010),
    en = n(736653),
    ei = n(303136),
    er = n(676279),
    ea = n(432528);
  function es(e) {
    let { className: t } = e,
      n = (0, en.Ay)(),
      r = (0, et.q)(n),
      a = (0, er.TM)()
        ? r
          ? "https://cdn.discordapp.com/assets/content/8890fba87ecb3f990dce6db1bacdad17315a2cffe4d7283344081eee03d8cc56.mp4"
          : "https://cdn.discordapp.com/assets/content/6aea381b0f52d09809a9f8d67b0af01fb94b2646164361e321652beed97cf2ec.mp4"
        : r
          ? "https://cdn.discordapp.com/assets/content/efb7e2ce9b9536e7e9fffdc31d66f89a6035f8f6168afa555fa3fccc34b1977d.webm"
          : "https://cdn.discordapp.com/assets/content/aedb1f458fe4c95624bfe88e0486722d0b6ccc8dfcf0e9878f04d8431252be44.webm";
    return (0, i.jsxs)("div", {
      className: t,
      children: [
        (0, i.jsx)("div", { className: ea.YL }),
        (0, i.jsx)(
          ei.A,
          {
            fallbackImage: r
              ? "https://cdn.discordapp.com/assets/content/21a8558f1bce9743f99774ee1247a18908a35222409835448accf90a8b4e2fd8.png"
              : "https://cdn.discordapp.com/assets/content/f91111a24ca4c59e87a462e8a3523938628e03e3723c31e5681991a07b0acf48.png",
            children: (0, i.jsx)("source", { src: a }),
          },
          a,
        ),
      ],
    });
  }
  function el(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, size: s = 64 } = e;
    return (0, i.jsx)("img", {
      style: { width: s, height: s },
      src: "https://cdn.discordapp.com/assets/content/33e98755a49cf85d07b8189a0001926c17d91599d53662a39999329f5253254f.svg",
      alt: t,
      "aria-label": n,
      "aria-hidden": r,
      role: a ?? "img",
    });
  }
  function eo(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, size: s = 64 } = e;
    return (0, i.jsx)("img", {
      style: { width: s, height: s },
      src: "https://cdn.discordapp.com/assets/content/3bc18204c2bf43975ded85a602c7816d032bc07cf9b1d5589e52404f9bc1d687.svg",
      alt: t,
      "aria-label": n,
      "aria-hidden": r,
      role: a ?? "img",
    });
  }
  function ed(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, size: s = 64 } = e;
    return (0, i.jsx)("img", {
      style: { width: s, height: s },
      src: "https://cdn.discordapp.com/assets/content/cb869ee40a8ed5d6210e69a02cebbf03025be47006b310ec2564f74f6ad1dff8.svg",
      alt: t,
      "aria-label": n,
      "aria-hidden": r,
      role: a ?? "img",
    });
  }
  var ec = n(210273),
    eu = n(508155),
    e_ = n(356863),
    eE = n(381881);
  function eA(e) {
    let { tier: t, isActive: n } = e,
      r = t === X.TVA.TIER_1,
      a = t === X.TVA.TIER_3,
      s = t === X.TVA.TIER_1 ? el : t === X.TVA.TIER_2 ? eo : ed;
    return (0, i.jsxs)("div", {
      className: eE.MY,
      children: [
        (0, i.jsx)("div", {
          className: G()(eE.hr, { [eE.ti]: n, [eE.YO]: !n, [eE.JQ]: r, [eE.Uz]: a }),
        }),
        (0, i.jsx)("div", {
          className: G()(eE.Zj, {
            [eE.jv]: n,
            [eE.ip]: t === X.TVA.TIER_1,
            [eE.p3]: t === X.TVA.TIER_2,
            [eE.wF]: t === X.TVA.TIER_3,
          }),
          children: (0, i.jsx)(s, { alt: "", ariaHidden: !0, size: 24 }),
        }),
      ],
    });
  }
  function eh(e) {
    let { guild: t, definition: n } = e,
      { tier: r, perks: a } = n,
      s = t.premiumTier >= r,
      l = X.M2T[r];
    return (0, i.jsxs)("div", {
      className: G()(eE.Nr, { [eE.Bm]: s, [eE.c]: !s }),
      children: [
        (0, i.jsx)(eA, { tier: r, isActive: s }),
        (0, i.jsxs)("div", {
          className: eE.zI,
          children: [
            (0, i.jsxs)("div", {
              className: eE.$h,
              children: [
                (0, i.jsx)(x.D, {
                  className: G()(eE.JJ, { [eE.eX]: !s }),
                  variant: "heading-xl/semibold",
                  color: s ? "text-strong" : void 0,
                  children: q.intl.string(
                    r === X.TVA.TIER_1
                      ? q.t.nzXtaS
                      : r === X.TVA.TIER_2
                        ? q.t["h33/uW"]
                        : q.t.BfF6ED,
                  ),
                }),
                (0, i.jsxs)("div", {
                  className: eE.yC,
                  children: [
                    (0, i.jsx)(k._, { size: "xs", color: "currentColor" }),
                    (0, i.jsx)(O.E, {
                      variant: "text-md/medium",
                      children: q.intl.format(q.t["pob/cL"], { subscriptions: l }),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: eE.PJ,
              children: [
                a.slice(0, 4).map((e, t) => {
                  if (null != e.predicate && !e.predicate()) return null;
                  let n = (0, ec.X)(e.perkIcon);
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: G()(eE.bK, { [eE.o]: !s }),
                      children: [
                        (0, i.jsx)(n, {
                          className: eE.kf,
                          color: s ? "var(--text-default)" : "currentColor",
                          size: "sm",
                        }),
                        (0, i.jsx)(O.E, {
                          variant: "text-md/medium",
                          color: s ? "text-default" : void 0,
                          children: e.getCopy(),
                        }),
                      ],
                    },
                    t,
                  );
                }),
                (0, i.jsx)(O.E, {
                  className: eE.wx,
                  variant: "text-md/medium",
                  children: q.intl.string(e_.default.nIj3LZ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function ef(e) {
    let { guild: t, className: n } = e;
    return (0, i.jsx)("div", {
      className: G()(eE.iE, n),
      children: eu.t.map((e) => (0, i.jsx)(eh, { guild: t, definition: e }, e.tier)),
    });
  }
  var eI = n(202091),
    ep = n(172218),
    eT = n(717421),
    em = n(289704),
    eg = n(628284),
    eS = n(508770),
    eN = n(775602),
    eC = n(868652),
    eO = n(363487);
  n(321073);
  var eR = n(512750),
    eL = n(948134),
    ey = n(628049),
    eD = n(568065),
    ev = n(344045);
  let eb =
    "https://cdn.discordapp.com/assets/content/2b844e74bd90a5e0ccb408b039a4915f295d8b9c192c823a4afc69c1fc3604a2.png";
  var eM = n(383272);
  let eP = new Set([...Array.from(eD.aH), ...Array.from(eD.m_), eR.FB]);
  var eU = n(998418),
    ew = n(828162);
  n(667532);
  var eG = n(975571),
    ex = n(658937);
  function ek(e) {
    let {
        guildId: t,
        activeStatus: n,
        title: s,
        description: d,
        cost: u,
        costDecorator: _,
        staticImageUrl: E,
        animatedImageUrl: A,
        powerup: h,
        badge: f,
        onClose: I,
      } = e,
      { analyticsLocations: p } = (0, o.Ay)(),
      T = n !== eD.b_.INACTIVE,
      m = (0, eO.A)(t),
      g = (0, a.bG)([eN.Ay], () => eN.Ay.useReducedMotion),
      S = r.useRef(null),
      [N, C] = r.useState(!1),
      [R, L] = r.useState(!1),
      [y, D] = r.useState(!1),
      v = R || y,
      b = r.useCallback(() => {
        let e = c.A.getGuild(t);
        null != e &&
          (0, z.g)({
            analyticsLocation: {
              page: X.liQ.GUILD_POWERUPS_MARKETING,
              section: X.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
            },
            numberOfBoostsToAdd: 1,
            analyticsLocations: p,
            guild: e,
          });
      }, [t, p]),
      M = r.useCallback(() => {
        (I(), (0, ew.A)(t, l.A.GUILD_POWERUPS_MARKETING, h.skuId));
      }, [t, h.skuId, I]),
      P = { tension: 400, friction: 30 },
      U = (0, eT.z)({ scale: v ? 0.85 : 1, y: v ? -32 : 0, config: P }),
      w = (0, eT.z)({ scale: v ? 0.7 : 1, y: v ? -35 : 0, config: P }),
      V = (0, eT.z)({ y: v ? -32 : 0, config: P }),
      H = (0, eT.z)({
        opacity: +!!v,
        transform: v ? "translateY(0)" : "translateY(16px)",
        config: P,
      }),
      j = r.useCallback((e) => {
        e && C(!0);
      }, []),
      W = r.useCallback(() => {
        D(!0);
      }, []),
      Y = r.useCallback((e) => {
        let t = e.relatedTarget;
        (null != t && e.currentTarget.contains(t)) || D(!1);
      }, []),
      K = (0, ep.K)(j),
      $ = h.skuId === ey.W5;
    return (0, i.jsxs)("div", {
      className: G()(ex.Nr, { [ex.fM]: N }),
      onFocus: W,
      onBlur: Y,
      onMouseEnter: () => L(!0),
      onMouseLeave: () => L(!1),
      children: [
        (0, i.jsx)("div", { className: ex.sL, ref: K }),
        (0, i.jsx)("div", {
          className: ex.kQ,
          children: $
            ? (0, i.jsx)(eI.animated.div, {
                className: ex.bm,
                style: {
                  transform: (0, eI.to)([w.scale, w.y], (e, t) => `scale(${e}) translateY(${t}px)`),
                },
                children: (0, i.jsx)(em.E, {
                  withReducedMotion: "halt",
                  eventTargetRef: S,
                  fit: "contain",
                  className: ex.Sq,
                  stateMachine: "SM_Main_Int",
                }),
              })
            : (0, i.jsx)(eI.animated.img, {
                className: ex.bm,
                src: v && null != A && "" !== A && !g ? A : E,
                alt: "",
                style: {
                  transform: (0, eI.to)([U.scale, U.y], (e, t) => `scale(${e}) translateY(${t}px)`),
                },
              }),
        }),
        (0, i.jsxs)(eI.animated.div, {
          style: { ...V, transform: V.y.to((e) => `translateY(${e}px)`) },
          className: ex.Qs,
          children: [
            (0, i.jsxs)("div", {
              className: ex.P_,
              children: [
                (0, i.jsx)(x.D, { className: ex.DD, variant: "heading-lg/semibold", children: s }),
                (0, i.jsx)(O.E, { className: ex.h_, variant: "text-md/medium", children: d }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: ex.jp,
              children: [
                (0, i.jsxs)("div", {
                  className: ex.qS,
                  children: [
                    (0, i.jsx)(k._, { size: "xs", color: F.A.unsafe_rawColors.ILLO_PINK_40 }),
                    (0, i.jsx)(O.E, {
                      className: ex.Vv,
                      variant: "text-sm/semibold",
                      children: q.intl.formatToPlainString(
                        null != _ ? ev.default["G/aTXi"] : ev.default.r9pa9K,
                        { boostCount: u },
                      ),
                    }),
                  ],
                }),
                T &&
                  (0, i.jsxs)("div", {
                    className: G()(ex.qS, ex.nt),
                    children: [
                      (0, i.jsx)(eg.y, { size: "xs", color: "currentColor" }),
                      (0, i.jsx)(O.E, {
                        className: ex.nt,
                        variant: "text-sm/semibold",
                        children: q.intl.string(q.t.pCMkDb),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, i.jsxs)(eI.animated.div, {
          style: H,
          className: ex.NC,
          children: [
            (0, i.jsx)("div", {
              className: ex.x6,
              children: (0, i.jsx)(B.$, {
                variant: "primary",
                text: q.intl.string(q.t.oPAx73),
                onClick: b,
                fullWidth: !0,
              }),
            }),
            m &&
              (0, i.jsx)("div", {
                className: ex.x6,
                children: (0, i.jsx)(B.$, {
                  variant: "secondary",
                  text: q.intl.string(q.t.GoCQxU),
                  onClick: M,
                  fullWidth: !0,
                }),
              }),
          ],
        }),
        "new" === f &&
          (0, i.jsx)("div", {
            className: ex.AP,
            children: (0, i.jsx)(eS.E, { type: "new", variant: "brand" }),
          }),
        "beta" === f &&
          (0, i.jsx)("div", {
            className: ex.AP,
            children: (0, i.jsx)(eS.E, { type: "beta", variant: "brand" }),
          }),
      ],
    });
  }
  function eF(e) {
    let { guildId: t, powerup: n, costDecorator: r, badge: a, onClose: s } = e,
      l = (0, eU.Ay)(t, n).type;
    return (0, i.jsx)(ek, {
      guildId: t,
      activeStatus: l,
      title: n.title,
      description: n.description,
      cost: n.cost,
      staticImageUrl: n.staticImageUrl,
      animatedImageUrl: n.animatedImageUrl,
      powerup: n,
      costDecorator: r,
      badge: a,
      onClose: s,
    });
  }
  let eB = new Map([[ey.W5, "+"]]);
  function eV(e) {
    var t;
    let n,
      s,
      l,
      o,
      { guild: d, onClose: c, ref: u } = e;
    r.useEffect(() => {
      (S.A.shouldFetchCatalogForGuild(d.id) && (0, eC.AK)(d.id),
        S.A.shouldFetchPowerupsForGuild(d.id) && (0, eC.Xd)(d.id));
    }, [d.id]);
    let _ = (function (e) {
      let t = [...e].reverse(),
        n = t.findIndex((e) => e.skuId === eR.d0);
      if (n > 0) {
        let [e] = t.splice(n, 1);
        t.unshift(e);
      }
      let i = t.findIndex((e) => e.skuId === ey.W5);
      if (-1 !== i && i !== t.length - 1) {
        let [e] = t.splice(i, 1);
        t.push(e);
      }
      return t;
    })(
      ((t = d.id),
      (n = (0, a.bG)([S.A], () => S.A.getStateForGuild(t)?.powerupCatalog?.[eD.o9.PERK])),
      (s = (function (e) {
        let t = (0, m.C$)(e, "useGameServerPerk"),
          n = (0, a.bG)([g.A], () => g.A.getLowestGameCostForGuild(e)),
          { gameName: i, gameName2: s } = (0, eL.A)();
        return r.useMemo(
          () =>
            t && null != n
              ? {
                  skuId: ey.W5,
                  title: q.intl.string(ev.default["B3OfL/"]),
                  description: q.intl.format(ev.default["+UqyGU"], { gameName: i, gameName2: s }),
                  cost: n,
                  dependencies: [],
                  type: eD.o9.PERK,
                  animatedImageUrl: eb,
                  staticImageUrl: eb,
                }
              : null,
          [t, n, i, s],
        );
      })(t)),
      (l = (0, eM.lY)(t, "useMarketablePowerupPerks")),
      (o = r.useMemo(() => {
        let e = new Set(eP);
        return (l && e.add(eR.d0), e);
      }, [l])),
      r.useMemo(() => {
        let e = [...(n ?? [])];
        return (null != s && e.push(s), e.filter((e) => !o.has(e.skuId)));
      }, [n, s, o]) ?? []),
    ).slice(0, 6);
    return 0 === _.length
      ? null
      : (0, i.jsxs)("div", {
          ref: u,
          className: ex.iE,
          children: [
            (0, i.jsxs)("div", {
              className: ex.ND,
              children: [
                (0, i.jsx)(x.D, {
                  className: ex.R_,
                  variant: "heading-xxl/semibold",
                  children: q.intl.string(e_.default.wjI18Q),
                }),
                (0, i.jsx)(O.E, {
                  className: ex.fV,
                  variant: "text-md/medium",
                  children: q.intl.format(e_.default.S562fn, {
                    helpDeskArticle: eG.A.getArticleURL(X.MVz.GUILD_BOOSTING_FAQ),
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: ex.vY,
              children: _.map((e) =>
                (0, i.jsx)(
                  eF,
                  {
                    guildId: d.id,
                    powerup: e,
                    costDecorator: eB.get(e.skuId),
                    badge: eD.ys[e.skuId],
                    onClose: c,
                  },
                  `perk-card-${e.skuId}`,
                ),
              ),
            }),
          ],
        });
  }
  eV.displayName = "GuildBoostingMarketingPerkCards";
  var eH = n(527113),
    ej = n(862482),
    eW = n(944304),
    eY = n(430815);
  let eK = function (e) {
    let { closeLayer: t, guild: n, isVisible: a } = e,
      s = r.useRef(null),
      l = (0, eT.z)({
        transform: a ? "translateY(-100%)" : "translateY(0%)",
        config: { tension: 120, friction: 12 },
      });
    return (0, i.jsx)(eI.animated.div, {
      className: eY.iE,
      style: l,
      children: (0, i.jsx)("div", {
        ref: s,
        className: eY.iJ,
        children: (0, i.jsxs)(h.xp, {
          containerRef: s,
          children: [
            (0, i.jsxs)("div", {
              className: eY.OA,
              children: [
                (0, i.jsx)(H.Ay, { className: eY.$f, guild: n, size: H.Ay.Sizes.SMALL }),
                (0, i.jsx)(O.E, {
                  className: eY.J5,
                  variant: "text-md/semibold",
                  children: n.name,
                }),
              ],
            }),
            (0, i.jsx)(eW.A, {
              className: eY.lI,
              guild: n,
              analyticsLocation: {
                page: X.liQ.PREMIUM_GUILD_USER_MODAL,
                section: X.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
                object: X.ZSU.BUTTON_CTA,
                objectType: X.AnalyticsObjectTypes.BUY,
              },
              closeLayer: t,
              pauseAnimation: !a,
              size: ej.$n.Sizes.SMALL,
              useExpressiveButton: !0,
            }),
          ],
        }),
      }),
    });
  };
  var e$ = n(192308),
    ez = n(65154),
    eX = n(149881),
    eZ = n(519636);
  function eq(e) {
    let { guild: t, analyticsLocation: a, videoPlacement: s, sourceAnalyticsLocations: l } = e,
      o = r.useCallback(() => {
        (0, e$.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("734818"),
            n.e("216870"),
            n.e("601031"),
            n.e("809915"),
            n.e("621624"),
            n.e("592731"),
            n.e("53374"),
            n.e("482815"),
            n.e("170653"),
            n.e("784103"),
            n.e("198323"),
            n.e("817852"),
            n.e("390098"),
            n.e("334127"),
            n.e("710638"),
            n.e("912773"),
            n.e("585810"),
          ]).then(n.bind(n, 872233));
          return (n) =>
            (0, i.jsx)(e, {
              ...n,
              guildId: t.id,
              analyticsLocation: a,
              videoPlacement: s,
              sourceAnalyticsLocations: l,
            });
        });
      }, [a, t.id, l, s]);
    return (0, i.jsxs)(f.D, {
      className: eX.kL,
      onClick: o,
      "aria-label": q.intl.string(e_.default["103aY+"]),
      children: [
        (0, i.jsx)("img", { alt: "", className: eX.xn, src: eZ.A }),
        (0, i.jsx)("div", { className: eX.Lw }),
        (0, i.jsx)("div", {
          className: eX.Rr,
          children: (0, i.jsx)(ez.S, { size: "custom", width: 76, height: 76, color: "white" }),
        }),
      ],
    });
  }
  function eQ(e) {
    let { analyticsLocation: t, guild: n, onClose: s, scrollToPowerupCards: l } = e,
      [d, c] = r.useState(!0),
      u = r.useRef(!1),
      { analyticsLocations: E } = (0, o.Ay)(),
      N = r.useRef(null),
      C = r.useRef(null),
      O = r.useRef(null),
      R = r.useRef(null),
      L = r.useCallback(() => {
        s?.();
      }, [s]),
      y = r.useCallback(() => {
        null != O.current &&
          null != C.current &&
          C.current.scrollIntoViewNode({ node: O.current, animate: !0, shouldScrollToStart: !0 });
      }, []),
      D = r.useCallback(
        (e) => {
          e &&
            !u.current &&
            (_.default.track(X.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              type: X.liQ.PREMIUM_GUILD_USER_MODAL,
              location_stack: E,
              location_section: t.section,
              location_object: t.object,
              guild_id: n.id,
            }),
            (u.current = !0));
        },
        [t, E, n.id],
      );
    r.useEffect(() => {
      _.default.track(X.HAw.OPEN_MODAL, {
        type: X.liQ.PREMIUM_GUILD_USER_MODAL,
        location_stack: E,
        location_section: t.section,
        location_object: t.object,
        guild_id: n.id,
      });
    }, [n.id, t, E]);
    let v = (0, m.C$)(n.id, "GuildBoostingMarketingRefresh"),
      b = (0, a.bG)([g.A], () => g.A.shouldFetchCatalogForGuild(n.id));
    r.useEffect(() => {
      v && b && (0, T.z9)(n.id);
    }, [n.id, v, b]);
    let M = (0, a.bG)([S.A], () => S.A.hasFetchedPowerupCatalog(n.id));
    return (
      r.useEffect(() => {
        if (l && M) {
          let e = setTimeout(() => {
            y();
          }, 100);
          return () => clearTimeout(e);
        }
      }, [l, y, M]),
      (0, i.jsxs)(i.Fragment, {
        children: [
          null != s &&
            (0, i.jsx)("div", {
              ref: R,
              className: ea.Yk,
              children: (0, i.jsx)(h.xp, {
                containerRef: R,
                children: (0, i.jsx)(f.D, {
                  className: ea.b,
                  onClick: L,
                  "aria-label": q.intl.string(q.t.cpT0Cq),
                  children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                }),
              }),
            }),
          (0, i.jsxs)(p.Gt, {
            ref: C,
            className: ea.XG,
            children: [
              (0, i.jsxs)("div", {
                className: ea.wx,
                children: [
                  (0, i.jsx)(es, { className: ea.y2 }),
                  (0, i.jsxs)("div", {
                    className: ea.AZ,
                    children: [
                      (0, i.jsx)(J, {
                        guild: n,
                        closeLayer: L,
                        onCtaVisibilityChange: c,
                        className: ea.Oh,
                      }),
                      (0, i.jsx)(P, {}),
                      (0, i.jsx)(eq, {
                        guild: n,
                        analyticsLocation: t,
                        videoPlacement: "top",
                        sourceAnalyticsLocations: E,
                      }),
                      (0, i.jsx)(ef, { guild: n }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: ea.uE,
                children: (0, i.jsx)(eV, { ref: O, guild: e.guild, onClose: L }),
              }),
              (0, i.jsx)("div", {
                className: ea.o6,
                children: (0, i.jsxs)("div", {
                  className: ea.y$,
                  children: [
                    (0, i.jsx)(eH.A, { className: ea.Q, guild: n }),
                    (0, i.jsx)(U.A, {}),
                    (0, i.jsx)(ee.A, {}),
                  ],
                }),
              }),
              (0, i.jsx)(A.L, {
                innerRef: N,
                onChange: D,
                children: (0, i.jsx)("div", { ref: N, className: ea.mR }),
              }),
            ],
          }),
          (0, i.jsx)(eK, { guild: n, isVisible: !d, closeLayer: L }),
        ],
      })
    );
  }
  let eJ = "BoostedGuildPerksModalConnected";
  function e0(e) {
    let {
        guildId: t,
        close: n,
        location: d,
        registerDismissModalHandler: E,
        scrollToPowerupCards: A,
      } = e,
      h = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
      f = (0, a.bG)([c.A], () => c.A.getGuild(t), [t]),
      I = (0, s.A)(() => Date.now()),
      { analyticsLocations: p } = (0, o.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
      T = f?.id,
      m = r.useCallback(() => {
        (n(),
          null != T &&
            _.default.track(X.HAw.MODAL_DISMISSED, {
              type: X.liQ.PREMIUM_GUILD_USER_MODAL,
              location_stack: p,
              location_section: d.section,
              location_object: d.object,
              guild_id: T,
              duration_open_ms: Date.now() - I,
            }));
      }, [p, I, d.object, d.section, n, T]);
    return (r.useLayoutEffect(() => {
      E?.(m);
    }, [m, E]),
    null == h || null == f)
      ? null
      : (0, i.jsx)(o.f5, {
          value: p,
          children: (0, i.jsx)(eQ, {
            analyticsLocation: d,
            onClose: m,
            guild: f,
            scrollToPowerupCards: A,
          }),
        });
  }
  function e1(e) {
    let { guildId: t, location: n, scrollToPowerupCards: r } = e,
      a = { current: null };
    (0, d.B8)(
      (e) => {
        let { closeLayer: s } = e;
        return (
          null == a.current && (a.current = s),
          (0, i.jsx)(e0, {
            close: s,
            guildId: t,
            location: n,
            registerDismissModalHandler: (e) => {
              a.current = e;
            },
            scrollToPowerupCards: r,
          })
        );
      },
      {
        layerKey: eJ,
        onEscape: () =>
          E._.hasSubscribers(X.jej.MODAL_CLOSE)
            ? (E._.dispatch(X.jej.MODAL_CLOSE), !0)
            : null != a.current && (a.current(), !0),
      },
    );
  }
}
