/* Recovered shipped factory. Module 116011.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6827844..6832492
 * Raw property SHA-256: a868f5bdd1bc856cf07b537464cbf5fbd661f16431b433c9348cebcb16c0eee2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { u5: () => P, vw: () => D, wx: () => U });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(834730),
    l = n(947641),
    o = n(661531),
    d = n(408278),
    c = n(624479),
    u = n(821609),
    _ = n(695366),
    E = n(194261),
    A = n(297264),
    h = n(331322),
    f = n(144165),
    I = n(914410),
    p = n(174459),
    T = n(58703),
    m = n(975571),
    g = n(38405),
    S = n(264779),
    N = n(962644),
    C = n(852218),
    O = n(652215),
    R = n(810889),
    L = n(660183),
    y = n(341973);
  function D() {
    let e = (0, T.N5)(),
      t = (0, T.P6)();
    return (0, r.jsxs)("div", {
      className: `${y.G9} ${y.sQ}`,
      children: [
        (0, r.jsx)(s.E, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: y.kT,
          children: L.intl.format(R.default["65EEvD"], { days: t }),
        }),
        (0, r.jsx)(I.Ay, {
          progress: e,
          variant: I.qP.UNSET,
          override: {
            default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" },
          },
        }),
      ],
    });
  }
  function v(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
      className: y.oP,
      children: (0, r.jsx)("div", { className: y.t0, children: t }),
    });
  }
  let b = (e) => {
    let { recurrence: t, analyticsLocations: n = [] } = e,
      i = (0, r.jsx)(l.r, { color: o.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
      _ = (0, r.jsx)("span", {
        className: y.nP,
        children: (0, r.jsx)(d.K, {
          icon: c.CopyIcon,
          size: "sm",
          variant: "icon-only",
          "aria-label": "",
          onClick: () => {
            (navigator.clipboard.writeText(t.code),
              A(i),
              p.default.track(O.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                partner: t.partnerId,
                cta_type: "copy code",
                promotion: t.outboundTitle,
                promotion_id: t.id,
                location_stack: n,
              }));
          },
        }),
      }),
      [E, A] = a.useState(() => _);
    if (null != t.code)
      return (0, r.jsx)("div", {
        className: y.oP,
        children: (0, r.jsxs)("div", {
          className: y.t0,
          children: [
            (0, r.jsx)("div", {
              className: y.cD,
              children: (0, r.jsx)(s.E, {
                variant: "text-md/medium",
                color: "text-strong",
                children: t.code,
              }),
            }),
            E,
            (0, r.jsx)(u.$, {
              variant: "secondary",
              size: "sm",
              text:
                t.redeemCtaText ??
                L.intl.formatToPlainString(L.t.DF68t7, { redemptionURL: t.redemptionURL }),
              onClick: () => {
                (window.open(t.redemptionURL, "_blank"),
                  p.default.track(O.HAw.RECURRING_PROMOTION_CLAIMED),
                  p.default.track(O.HAw.THIRD_PARTY_PARTNER_CTA_CLICKED, {
                    partner: t.partnerId,
                    cta_type: "visit store",
                    promotion: t.outboundTitle,
                    promotion_id: t.id,
                    url: t.redemptionURL,
                    location_stack: n,
                  }));
              },
            }),
          ],
        }),
      });
  };
  function M(e) {
    let {
      recurrence: t,
      canBeClaimed: n,
      hasClaimError: i,
      setCode: a,
      setHasClaimError: s,
      className: l,
      analyticsLocations: o = [],
      onClaim: d,
      onClaimError: c,
      isClaiming: A,
    } = e;
    return n
      ? i
        ? (0, r.jsx)("div", {
            className: l,
            children: (0, r.jsx)(u.$, {
              icon: _.E,
              variant: "critical-secondary",
              size: "sm",
              disabled: !0,
              text: L.intl.string(L.t["8LKchl"]),
            }),
          })
        : (0, r.jsx)("div", {
            className: l,
            children: (0, r.jsx)(u.$, {
              icon: E.LockIcon,
              variant: "secondary",
              size: "sm",
              text: t.claimCtaText ?? L.intl.string(L.t.vwASIl),
              loading: A,
              onClick: () => {
                (null != d
                  ? d()
                  : (0, S.kd)({
                      promotionId: t.id,
                      promotionTitle: t.outboundTitle,
                      partnerId: t.partnerId,
                      analyticsLocations: o,
                    }).then((e) => ((0, N.LI)(e), e.code))
                )
                  .then((e) => {
                    null != e && a(e);
                  })
                  .catch((e) => {
                    !1 === (null != c && c(e)) && (s(!0), g.A.captureException(e));
                  });
              },
            }),
          })
      : null;
  }
  var P = (((i = {}).INLINE = "inline"), (i.FOOTER = "footer"), i);
  function U(e) {
    let {
        recurrence: t,
        titleClassName: n,
        partnerLogo: i,
        showPartnerImage: s = !1,
        roundPromotionImage: l = !1,
        titleVariant: o = "primary",
        claimButtonPlacement: d = "inline",
        footerContent: c,
        analyticsLocations: u = [],
        onClaim: _,
        onClaimError: E,
        isClaiming: I,
        hideClaimButton: p = !1,
      } = e,
      [T, g] = a.useState(t.code),
      [S, N] = a.useState(!1),
      R = null == T;
    return (0, r.jsxs)("div", {
      className: y.lA,
      children: [
        (0, r.jsxs)("div", {
          className: y.LV,
          children: [
            (0, r.jsxs)("div", {
              className: y.JN,
              children: [
                i,
                (0, r.jsxs)("div", {
                  className: null != n ? `${y.yO} ${n}` : y.yO,
                  children: [
                    (0, r.jsx)(A.D, {
                      variant: "secondary" === o ? "heading-md/semibold" : "heading-lg/semibold",
                      color: "text-strong",
                      children: t.title,
                    }),
                    (0, r.jsxs)(h.B, {
                      direction: "vertical",
                      gap: 8,
                      children: [
                        (0, r.jsx)(A.D, {
                          variant: "heading-sm/medium",
                          color: "text-subtle",
                          children: S
                            ? L.intl.format(L.t.i2EuFO, {
                                helpdeskArticle: m.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
                              })
                            : R
                              ? t.body
                              : null != t.bodyClaimed
                                ? L.intl.format(t.bodyClaimed, { date: t.endDate })
                                : t.body,
                        }),
                        null != t.bodyNote &&
                          (0, r.jsx)(A.D, {
                            variant: "heading-sm/medium",
                            color: "text-subtle",
                            children: L.intl.format(t.bodyNote, {
                              partnerName: C.CD[t.partnerId].label,
                              helpdeskArticle: m.A.getArticleURL(O.MVz.RECURRING_PROMOTION),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                "inline" === d &&
                  !1 === p &&
                  (0, r.jsx)(M, {
                    recurrence: t,
                    canBeClaimed: R,
                    hasClaimError: S,
                    setCode: g,
                    setHasClaimError: N,
                    analyticsLocations: u,
                    onClaim: _,
                    onClaimError: E,
                    isClaiming: I,
                  }),
              ],
            }),
            s &&
              (0, r.jsx)("div", {
                className: y.R4,
                children: (0, r.jsx)(f._, {
                  src: t.asset ?? "",
                  className: y.Ys,
                  imageClassName: l || t.partnerId === C.XY ? y.Cy : void 0,
                  width: 100,
                  height: 100,
                  zoomable: !1,
                }),
              }),
          ],
        }),
        "footer" === d && c,
        null != T && (0, r.jsx)(b, { recurrence: { ...t, code: T }, analyticsLocations: u }),
        "footer" === d &&
          null == T &&
          !1 === p &&
          (0, r.jsx)(v, {
            children: (0, r.jsx)(M, {
              recurrence: t,
              canBeClaimed: R,
              hasClaimError: S,
              setCode: g,
              setHasClaimError: N,
              className: y.qx,
              analyticsLocations: u,
              onClaim: _,
              onClaimError: E,
              isClaiming: I,
            }),
          }),
      ],
    });
  }
}
