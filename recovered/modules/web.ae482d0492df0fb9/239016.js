/* Recovered shipped factory. Module 239016.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6832493..6842057
 * Raw property SHA-256: f22b59472b9ec80ac3cb285c334f3d8ceefd1bd52e082e9a789f09f01cda132c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { P: () => ea, ThirdPartyPromotionsModal: () => er }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(52133),
    l = n(189213),
    o = n(366010),
    d = n(331322),
    c = n(939249),
    u = n(834730),
    _ = n(289873),
    E = n(403581),
    A = n(192308),
    h = n(793574),
    f = n(688810),
    I = n(363195),
    p = n(174459),
    T = n(792656),
    m = n(962644),
    g = n(35587),
    S = n(412260),
    N = n(852218),
    C = n(194261),
    O = n(297264),
    R = n(144165),
    L = n(341973);
  function y(e) {
    let { title: t, body: n, asset: r } = e;
    return (0, i.jsx)("div", {
      className: L.lA,
      children: (0, i.jsxs)("div", {
        className: L.LV,
        children: [
          (0, i.jsxs)("div", {
            className: L.JN,
            children: [
              (0, i.jsx)("div", {
                className: L.MC,
                children: (0, i.jsx)(C.LockIcon, { size: "refresh_sm" }),
              }),
              (0, i.jsxs)("div", {
                className: L.yO,
                children: [
                  (0, i.jsx)(O.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: t,
                  }),
                  (0, i.jsx)(O.D, {
                    variant: "heading-sm/medium",
                    color: "text-subtle",
                    children: n,
                  }),
                ],
              }),
            ],
          }),
          null != r &&
            (0, i.jsx)("div", {
              className: L.R4,
              children: (0, i.jsx)(R._, {
                src: r,
                className: L.Ys,
                width: 100,
                height: 100,
                zoomable: !1,
                imageClassName: L.EM,
              }),
            }),
        ],
      }),
    });
  }
  var D = n(116011);
  function v(e) {
    let { promotion: t, claimButtonPlacement: n = D.u5.INLINE, analyticsLocations: r } = e;
    return (0, i.jsx)(D.wx, {
      recurrence: t,
      titleVariant: "secondary",
      showPartnerImage: null != t.asset,
      roundPromotionImage: null != t.asset,
      claimButtonPlacement: n,
      analyticsLocations: r,
    });
  }
  var b = n(325499),
    M = n(789861),
    P = n(398523),
    U = n(881373),
    w = n(264779),
    G = n(14429),
    x = n(810889),
    k = n(264865),
    F = n(660183);
  let B =
      "https://cdn.discordapp.com/assets/content/c93472f5033e3079579ad496c9a54a95faa23623f5b1d11590d536c861f52e7c.svg",
    V =
      "https://cdn.discordapp.com/assets/content/6bbac5a155872455d86969ce5309725d9aa0317ba3b104b3027716e70040e11f.webp",
    H =
      "https://cdn.discordapp.com/assets/content/9fc3dd18f3074d23a9bf78be5287bf7a727597c962ea220a0ebda311fd7997ea.webp";
  function j(e, t) {
    if (null != e) return "single_promo" === e.type ? e.config : e.configsByOutboundTitle[t];
  }
  function W() {
    return F.intl.formatToPlainString(F.t.p7BkHh, { discountPercentage: P.b });
  }
  function Y() {
    return (0, b.i)("ThirdPartyPromotionPartnerConfigs")
      ? F.intl.string(F.t.nmvvaN)
      : F.intl.string(F.t.igiSKe);
  }
  let K = {
    [N.KS]: {
      getLockedPreview: () => ({ title: W(), body: Y(), asset: V }),
      landingUrl: "https://steelseries.com/",
      recurringCardAsset: V,
      outboundConfigs: {
        type: "single_promo",
        config: { getTitle: W, getBody: Y, getBodyClaimed: () => F.t.w8CXUl },
      },
    },
    [N.XY]: {
      getLockedPreview: () => ({
        title: (0, b.i)("ThirdPartyPromotionPartnerConfigs")
          ? F.intl.formatToPlainString(x.default.PF1aT5, { discountPercentage: U.aW })
          : F.intl.formatToPlainString(x.default.LsJ9hj, { discountPercent: U.aW }),
        body: (0, b.i)("ThirdPartyPromotionPartnerConfigs")
          ? F.intl.formatToPlainString(x.default.KoKwMn, {})
          : F.intl.formatToPlainString(x.default.Yl5ww1, {}),
        asset: B,
      }),
      landingUrl: "https://www.logitech.com/",
      recurringCardAsset: B,
      outboundConfigs: {
        type: "multiple_promo",
        configsByOutboundTitle: {
          "Logitech G": {
            getTitle: () => F.intl.formatToPlainString(x.default.jkdhZq, { discountPercent: U.aW }),
            getBody: () => F.intl.formatToPlainString(x.default.mH30Yx, {}),
          },
          "Logitech 5%": {
            getTitle: () => F.intl.formatToPlainString(x.default.zeBjoX, { discountPercent: U.y$ }),
            getBody: () => F.intl.formatToPlainString(x.default.fC4abC, { months: 6 }),
          },
          "Logitech PRO Series Sim": {
            getTitle: () => F.intl.formatToPlainString(x.default.pSBCjv, { discountPercent: U.K2 }),
            getBody: () => F.intl.formatToPlainString(x.default.lsRjfl, {}),
          },
        },
      },
    },
    [N.Bt]: {
      showSectionHeaders: !1,
      landingUrl: "https://www.callofduty.com/",
      outboundConfigs: {
        type: "single_promo",
        config: {
          getTitle: () => F.intl.string(G.default["6vVfeK"]),
          getBody: (e) =>
            F.intl.formatToPlainString(G.default.nsmhS2, { date: (0, M.mh)(e.endDate) }),
          getAsset: (e, t) => (0, w.WD)(e.id, t),
          getClaimCtaText: () => F.intl.string(G.default["lbyFG+"]),
          getRedeemCtaText: () => F.intl.string(G.default["6rwUm2"]),
          claimButtonPlacement: D.u5.FOOTER,
        },
      },
    },
    [N.NC]: {
      getLockedPreview: () => ({
        title: F.intl.string(k.default.CwMGMb),
        body: F.intl.string(k.default.TgHy6p),
        asset: H,
      }),
      landingUrl: "https://www.youtube.com/redeem",
      oneTimeCardAsset: H,
      outboundConfigs: {
        type: "single_promo",
        config: {
          getTitle: () => F.intl.string(k.default.CwMGMb),
          getBody: () => F.intl.string(k.default.TgHy6p),
          getRedeemCtaText: () => F.intl.string(k.default.KfOPbQ),
          claimButtonPlacement: D.u5.FOOTER,
        },
      },
      showSectionHeaders: !1,
    },
  };
  var $ = n(428685);
  function z() {
    return (0, i.jsx)(y, {
      title: F.intl.string($.default.oDfh3O),
      body: F.intl.string($.default.nDEuO1),
      asset:
        "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
    });
  }
  var X = n(202541),
    Z = n(652215);
  function q(e, t) {
    return (0, s.v)(e[0], t[0]) && (0, s.v)(e[1], t[1]);
  }
  function Q(e, t, n) {
    let i = K[e.partnerId ?? ""],
      r = j(i?.outboundConfigs, e.outboundTitle);
    return {
      id: e.id,
      partnerId: e.partnerId ?? "",
      title: r?.getTitle(e) ?? "",
      outboundTitle: e.outboundTitle,
      body: r?.getBody?.(e) ?? "",
      startDate: e.startDate,
      endDate: e.endDate,
      redemptionURL: e.outboundRedemptionPageLink,
      code: t,
      asset: r?.getAsset?.(e, n) ?? i?.oneTimeCardAsset,
      claimCtaText: r?.getClaimCtaText?.(),
      redeemCtaText: r?.getRedeemCtaText?.(),
    };
  }
  function J(e) {
    var t;
    let n,
      s,
      { records: l, claimedOutboundPromotionCodeMap: _, theme: E } = e,
      [A, f] = r.useState(!1),
      p = [...l].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
      T = A ? p : p.slice(0, 1),
      m = !A && p.length > 1,
      g =
        ((t = l[0]?.partnerId ?? ""),
        (n = (0, a.bG)([I.A], () => (0, o.M)(I.A.theme))),
        null == (s = K[t]?.logos) ? void 0 : n ? s.dark : s.light);
    return (0, i.jsxs)("div", {
      children: [
        (0, i.jsx)(d.B, {
          direction: "vertical",
          gap: 12,
          children: T.map((e) => {
            var t;
            let n, r;
            return (0, i.jsx)(
              D.wx,
              {
                recurrence:
                  ((t = _[e.id] ?? null),
                  (n = K[e.partnerId ?? ""]),
                  (r = j(n?.outboundConfigs, e.outboundTitle)),
                  {
                    ...Q(e, t, E),
                    asset: n?.recurringCardAsset ?? "",
                    bodyClaimed: r?.getBodyClaimed?.(),
                    redemptionURL:
                      "" !== e.outboundRedemptionPageLink
                        ? e.outboundRedemptionPageLink
                        : (n?.landingUrl ?? ""),
                  }),
                partnerLogo: g,
                showPartnerImage: !0,
                claimButtonPlacement: D.u5.FOOTER,
                footerContent: (0, i.jsx)(D.vw, {}),
                analyticsLocations: [h.A.THIRD_PARTY_PROMOTIONS_MODAL],
              },
              e.id,
            );
          }),
        }),
        m &&
          (0, i.jsx)(c.D, {
            className: L.K8,
            onClick: () => {
              f(!0);
            },
            children: (0, i.jsx)(u.E, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: F.intl.string(F.t.rjjZxV),
            }),
          }),
      ],
    });
  }
  function ee(e) {
    let { partnerId: t } = e,
      n = K[t]?.getLockedPreview?.() ?? null;
    return null == n ? null : (0, i.jsx)(y, { title: n.title, body: n.body, asset: n.asset });
  }
  function et(e) {
    let {
        partnerIds: t,
        title: n,
        subtitle: r,
        modalTeaser: a,
        showXboxCard: s = !1,
        transitionState: o,
        onClose: c,
        analyticsLocationsProp: u,
      } = e,
      { promotionsLoaded: E } = (0, g.y7)(),
      { analyticsLocations: A } = (0, f.Ay)(u);
    return E
      ? (0, i.jsx)(f.f5, {
          value: A,
          children: (0, i.jsxs)(l.a, {
            title: n,
            subtitle: r,
            actions: [],
            preview: (0, i.jsx)(T.A, {
              subscriptionTier: X.pe.TIER_2,
              fullWidth: !0,
              onClick: () => {
                c();
              },
              onSubscribeModalClose: (e) => {
                if (e) return m.Ay.fetchActivePromotions();
              },
            }),
            transitionState: o,
            onClose: c,
            children: [
              (0, i.jsxs)(d.B, {
                direction: "vertical",
                gap: 12,
                children: [
                  s && (0, i.jsx)(z, {}),
                  t.map((e) => (0, i.jsx)(ee, { partnerId: e }, e)),
                ],
              }),
              (0, i.jsx)(en, { modalTeaser: a }),
            ],
          }),
        })
      : (0, i.jsx)(_.y, {});
  }
  function en(e) {
    let { modalTeaser: t } = e;
    if (null == t) return null;
    let n = t.icon ?? E.t;
    return (0, i.jsxs)("div", {
      className: L.ar,
      children: [
        (0, i.jsxs)("div", {
          className: L.Uv,
          children: [
            (0, i.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
            (0, i.jsx)(u.E, {
              variant: t.titleVariant ?? "text-sm/semibold",
              color: "text-default",
              children: t.title,
            }),
          ],
        }),
        null != t.body &&
          (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", children: t.body }),
      ],
    });
  }
  function ei(e) {
    let {
        partnerIds: t,
        title: n,
        subtitle: r,
        modalTeaser: s,
        transitionState: o,
        onClose: c,
      } = e,
      E = (0, a.bG)([I.A], () => I.A.theme),
      [A, f] = (0, a.bG)(
        [S.A],
        () => {
          let e = [],
            n = [];
          return (
            t.forEach((t) => {
              let i = K[t]?.outboundConfigs;
              function r(e) {
                return null != j(i, e.outboundTitle);
              }
              let a = S.A.getPromotionsByPartner(t);
              (e.push(...a.recurring.filter(r)), n.push(...a.oneTime.filter(r)));
            }),
            [e, n]
          );
        },
        [t],
        q,
      ),
      { promotionsLoaded: p, claimedOutboundPromotionCodeMap: T } = (0, g.y7)();
    if (!p) return (0, i.jsx)(_.y, {});
    let m = t
        .map((e) => K[e])
        .filter(Boolean)
        .every((e) => !1 !== e.showSectionHeaders),
      N = m
        ? {
            recurring: F.intl.string(x.default["9Y2p6p"]),
            oneTime: F.intl.string(x.default.Wm58LR),
          }
        : void 0,
      C = (0, i.jsx)(d.B, {
        direction: "vertical",
        gap: 12,
        children: f.map((e) => {
          let t = Q(e, T[e.id] ?? null, E),
            n = j(K[e.partnerId ?? ""]?.outboundConfigs, e.outboundTitle);
          return (0, i.jsx)(
            v,
            {
              promotion: t,
              claimButtonPlacement: n?.claimButtonPlacement,
              analyticsLocations: [h.A.THIRD_PARTY_PROMOTIONS_MODAL],
            },
            e.id,
          );
        }),
      });
    return (0, i.jsx)(l.a, {
      title: n,
      subtitle: r,
      actions: [],
      transitionState: o,
      onClose: c,
      children: (0, i.jsxs)("div", {
        className: L.kL,
        children: [
          A.length > 0 &&
            (0, i.jsxs)(d.B, {
              direction: "vertical",
              gap: 12,
              children: [
                null != N &&
                  (0, i.jsx)(u.E, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: N.recurring,
                  }),
                (0, i.jsx)(J, { records: A, claimedOutboundPromotionCodeMap: T, theme: E }),
              ],
            }),
          f.length > 0 &&
            (m
              ? (0, i.jsx)("div", {
                  className: L.E7,
                  children: (0, i.jsxs)(d.B, {
                    direction: "vertical",
                    gap: 12,
                    children: [
                      null != N &&
                        (0, i.jsx)(u.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: N.oneTime,
                        }),
                      C,
                    ],
                  }),
                })
              : C),
          (0, i.jsx)(en, { modalTeaser: s }),
        ],
      }),
    });
  }
  function er(e) {
    let {
      partnerIds: t,
      isLocked: n = !1,
      title: r,
      subtitle: a,
      modalTeaser: s,
      showXboxCard: l,
      transitionState: o,
      onClose: d,
      analyticsLocations: c,
    } = e;
    return n
      ? (0, i.jsx)(et, {
          partnerIds: t,
          title: r,
          subtitle: a,
          modalTeaser: s,
          showXboxCard: l,
          transitionState: o,
          onClose: d,
          analyticsLocationsProp: c,
        })
      : (0, i.jsx)(ei, {
          partnerIds: t,
          title: r,
          subtitle: a,
          modalTeaser: s,
          transitionState: o,
          onClose: d,
        });
  }
  function ea(e) {
    let {
        partnerIds: t,
        isLocked: r = !1,
        title: a,
        subtitle: s,
        modalTeaser: l,
        showXboxCard: o,
        analyticsLocations: d,
        onClose: c,
      } = e,
      u = o ? [...t, "xbox"] : t;
    (p.default.track(Z.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, {
      partner_ids: u,
      partner_id: u[0],
      location_stack: d,
    }),
      m.Ay.fetchActivePromotions(),
      (0, A.openModalLazy)(
        async () => {
          let { ThirdPartyPromotionsModal: e } = await Promise.resolve().then(n.bind(n, 239016));
          return (n) =>
            (0, i.jsx)(e, {
              ...n,
              partnerIds: t,
              isLocked: r,
              title: a,
              subtitle: s,
              modalTeaser: l,
              showXboxCard: o,
              analyticsLocations: d,
            });
        },
        { onCloseCallback: c },
      ));
  }
}
