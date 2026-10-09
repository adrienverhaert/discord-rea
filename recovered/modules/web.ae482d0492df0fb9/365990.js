/* Recovered shipped factory. Module 365990.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3310802..3317944
 * Raw property SHA-256: 10cd6f0210ec72b2f62a10db1666edda240b84a67f23092b41d9f987200e2794
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => X });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(877624),
    o = n(17928),
    d = n(554146),
    c = n(744682);
  let u = { all: { name: "all", start: 0, duration: 66 } };
  function _() {
    let e = r.useRef(null),
      t = r.useCallback(() => {
        null != e.current && e.current.play("all");
      }, []),
      a = r.useCallback(() => {
        null != e.current && e.current.play("all");
      }, []),
      s = r.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all");
      }, []),
      l = r.useCallback(
        (t) =>
          (0, i.jsx)(c.P, {
            ...t,
            src: () => n.e("556591").then(n.t.bind(n, 640114, 19)),
            ref: e,
            markers: u,
          }),
        [],
      );
    return {
      events: { onMouseEnter: a, onMouseLeave: s },
      play: t,
      getDuration: r.useCallback(() => e.current?.getDuration(), []),
      getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
      Component: l,
    };
  }
  var E = n(604121),
    A = n(597770),
    h = n(866665),
    f = n(942857),
    I = n(775602),
    p = n(793574),
    T = n(688810),
    m = n(131607),
    g = n(810498),
    S = n(859492),
    N = n(5755),
    C = n(40493),
    O = n(70283),
    R = n(43105),
    L = n(982240),
    y = n(402860),
    D = n(287809),
    v = n(427262),
    b = n(652215),
    M = n(49999),
    P = n(95769),
    U = n(660183);
  function w(e) {
    let {
        currentTier: t,
        giftCount: n,
        variant: a,
        onComplete: s,
        markAsDismissed: l,
        children: d,
      } = e,
      c = r.useRef(null),
      u = (0, o.bG)([D.default], () => D.default.getCurrentUser()),
      _ = (0, S.b9)("GiftingBadgesCoachmarkPopout"),
      E = (0, S.Se)(t, _);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("div", { ref: c, children: d }),
        (0, i.jsx)(R.A, {
          targetElementRef: c,
          shouldShow: !0,
          position: "top",
          title: U.intl.format(P.default["a+jfuy"], { tierName: t.name ?? "" }),
          body:
            "noCount" === a
              ? U.intl.string(P.default["0N8fCf"])
              : U.intl.formatToPlainString(P.default.QxRA6w, { giftCount: n ?? 0 }),
          graphic: null != E ? { type: "image", src: E } : void 0,
          actions: [
            {
              text: U.intl.string(U.t.RzWDqY),
              onClick: () => {
                (null != u && (0, y.openUserProfileModal)({ userId: u.id }),
                  s?.(),
                  l(M.i.TAKE_ACTION));
              },
            },
          ],
          caretConfig: { align: "center" },
          onRequestClose: function () {
            (s?.(), l(M.i.USER_DISMISS));
          },
        }),
      ],
    });
  }
  function G(e) {
    let { channel: t, onComplete: n, markAsDismissed: a, children: s } = e,
      l = r.useRef(null),
      { analyticsLocations: o } = (0, T.Ay)(p.A.GIFTING_BADGE_COACHMARK),
      d = (0, v.R1)(t),
      { openGiftModal: c } = (0, N.$)({
        giftRecipient: d,
        analyticsLocations: o,
        analyticsObject: { object: b.ZSU.BUTTON_CTA, objectType: b.AnalyticsObjectTypes.GIFT },
        location: "NewBadgeCoachmark",
      });
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("div", { ref: l, children: s }),
        (0, i.jsx)(R.A, {
          targetElementRef: l,
          shouldShow: !0,
          position: "top",
          title: U.intl.string(P.default.Q2RQka),
          body: U.intl.string(P.default["3EQnkg"]),
          graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
          },
          actions: [
            {
              text: U.intl.string(P.default.DZnomS),
              icon: A.GiftIcon,
              onClick: () => {
                (c(), n?.(), a(M.i.TAKE_ACTION));
              },
            },
          ],
          caretConfig: { align: "center" },
          onRequestClose: function () {
            (n?.(), a(M.i.USER_DISMISS));
          },
        }),
      ],
    });
  }
  function x(e) {
    let { channel: t, variant: n, onComplete: r, markAsDismissed: a, children: s } = e,
      { currentTier: l, giftCount: d } = (0, o.cf)([L.Ay], () => ({
        currentTier: L.Ay.getCurrentTier(O.$.GIFTING),
        giftCount: L.Ay.getSingleRequirementProgress(O.$.GIFTING)?.current,
      }));
    return null != l
      ? (0, i.jsx)(w, {
          currentTier: l,
          giftCount: d,
          variant: n,
          onComplete: r,
          markAsDismissed: a,
          children: s,
        })
      : (0, i.jsx)(G, { channel: t, onComplete: r, markAsDismissed: a, children: s });
  }
  var k = n(412260),
    F = n(927813),
    B = n(935208),
    V = n(240248),
    H = n(767089),
    j = n(621255),
    W = n(495088);
  let Y = F.A.Millis.DAYS_30;
  function K(e) {
    let { boxAnimationUrl: t, hovered: n, onClick: a } = e,
      s = r.useCallback(() => Promise.resolve({ default: t }), [t]);
    return (0, i.jsx)(H.A, {
      className: W.x6,
      "aria-label": U.intl.string(U.t.Z1RnTk),
      isActive: !1,
      noHover: !0,
      onClick: a,
      children: (0, i.jsx)("div", {
        className: j.zc,
        children: n
          ? (0, i.jsx)(E.a, { className: j.Hl, importData: s })
          : (0, i.jsx)(A.GiftIcon, {}),
      }),
    });
  }
  function $(e) {
    let { trinketAnimationUrl: t, hovered: n, onClick: r } = e,
      { Component: a, events: s, play: l } = _(),
      d = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion);
    return (0, i.jsxs)(H.A, {
      className: W.x6,
      "aria-label": U.intl.string(U.t.Z1RnTk),
      isActive: !1,
      noHover: !0,
      onClick: function () {
        (l(), r());
      },
      ...s,
      children: [
        (0, i.jsx)("div", {
          className: j.zc,
          children: (0, i.jsx)(a, { className: j.is, color: "currentColor" }),
        }),
        n && !d && (0, i.jsx)("img", { className: j.rY, src: t, alt: "" }),
      ],
    });
  }
  function z(e) {
    let { giftIcon: t, hovered: n, isGenericGift: r, onClick: a } = e,
      { Component: s, events: l, play: o } = _(),
      d = t?.boxAnimationUrl;
    if (!(0, V.uJ)(d)) return (0, i.jsx)(K, { boxAnimationUrl: d, hovered: n, onClick: a });
    let c = t?.trinketAnimationUrl;
    return (0, V.uJ)(c)
      ? (0, i.jsx)(h.m, {
          ariaHidden: r,
          text: U.intl.string(r ? U.t.TW4JV0 : U.t.sWtWDX),
          children: (0, i.jsx)(H.A, {
            className: W.x6,
            isActive: !1,
            "aria-label": U.intl.string(r ? U.t.TW4JV0 : U.t.Z1RnTk),
            "aria-haspopup": "dialog",
            onClick: () => {
              (a(), o());
            },
            ...l,
            children: (0, i.jsx)(s, { size: "refresh_sm", color: "currentColor" }),
          }),
        })
      : (0, i.jsx)($, { trinketAnimationUrl: c, hovered: n, onClick: a });
  }
  let X = r.memo(function (e) {
    let { disabled: t, channel: n } = e,
      { analyticsLocations: a } = (0, T.Ay)(p.A.GIFT_BUTTON),
      [c, u] = r.useState(!1),
      _ = (0, f.A)(),
      E = (0, o.bG)([D.default], () => D.default.getCurrentUser()),
      A = null != E ? B.default.age(E.id) : 0,
      h = (0, v.R1)(n),
      I = (0, o.bG)([k.A], () => {
        let e = k.A.getMarketingComponentByType(l.C.GIFT_ICON);
        return null == e || "giftIcon" !== e.properties.properties.oneofKind
          ? null
          : e.properties.properties.giftIcon;
      }),
      O = (0, o.bG)([k.A], () => {
        let e = k.A.getMarketingComponentByType(l.C.GIFT_ICON_COACHMARK);
        return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
          ? null
          : e.properties.properties.giftIconCoachmark;
      }),
      R = I?.gradient,
      L =
        null != R && null != R.colors && R.colors.length >= 2
          ? (0, g.K5)({ gradient: R.colors, angle: R.angle ?? void 0 }, { defaultAngle: 180 })
          : void 0,
      y = r.useMemo(() => {
        if (L?.background != null) return { "--custom-promotion-gradient": L.background };
      }, [L]),
      P = !(0, V.uJ)(I?.boxAnimationUrl) || !(0, V.uJ)(I?.trinketAnimationUrl),
      U = (0, o.bG)([k.A], () => k.A.getGiftPromotion()?.id),
      w = null != O && !t && !_ && A >= Y && null != U,
      [G, F] = (0, m.Cc)(w ? d.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, U ?? ""),
      H = null != G,
      { giftingBadgeCoachmarkVariant: W, markGiftingBadgeCoachmarkAsDismissed: K } = (function (e) {
        let { location: t, enabled: n } = e,
          i = (0, f.A)(),
          r = (0, S.Hv)({ platform: "web", location: t, enabled: n }),
          [a, s] = (0, m.kn)(null == r || i ? [] : [d.M.NEW_GIFTING_BADGES_COACHMARK]);
        return {
          giftingBadgeCoachmarkVariant: null != a ? r : null,
          markGiftingBadgeCoachmarkAsDismissed: s,
        };
      })({ location: "ChannelPremiumGiftButton", enabled: !t && !H }),
      $ = c || H || null != W,
      {
        openGiftModal: X,
        shouldShowWishlistModal: Z,
        shouldShowGiftSelectionModal: q,
      } = (0, N.$)({
        giftRecipient: h,
        analyticsLocations: a,
        analyticsObject: {
          page: n.isPrivate() ? b.liQ.DM_CHANNEL : b.liQ.GUILD_CHANNEL,
          section: b.JJy.CHANNEL_TEXT_AREA,
          object: P ? b.ZSU.GIFTING_PROMOTION_BUTTON : b.ZSU.BUTTON_ICON,
          objectType: b.AnalyticsObjectTypes.GIFT,
        },
        wishlistAnalyticsObject: P
          ? {
              page: n.isPrivate() ? b.liQ.DM_CHANNEL : b.liQ.GUILD_CHANNEL,
              section: b.JJy.CHANNEL_TEXT_AREA,
              object: b.ZSU.BUTTON_ICON,
              objectType: b.AnalyticsObjectTypes.GIFT,
            }
          : void 0,
        location: P ? "gift-promotion-button" : "gift-button",
      });
    if (t) return null;
    let Q = (0, i.jsx)(z, {
      giftIcon: I,
      hovered: $,
      isGenericGift: Z || q,
      onClick: function () {
        (u(!1), F(M.i.TAKE_ACTION), K(M.i.TAKE_ACTION), X());
      },
    });
    return (0, i.jsx)("div", {
      className: s()(j.kL, { [j.DM]: $ }),
      style: y,
      onMouseEnter: () => {
        c || u(!0);
      },
      onMouseLeave: () => {
        u(!1);
      },
      children: H
        ? (0, i.jsx)(C.A, {
            onComplete: () => u(!1),
            onCheckItOutClick: X,
            markAsDismissed: F,
            coachmarkConfig: O,
            children: Q,
          })
        : null != W
          ? (0, i.jsx)(x, {
              channel: n,
              variant: W,
              onComplete: () => u(!1),
              markAsDismissed: K,
              children: Q,
            })
          : Q,
    });
  });
}
