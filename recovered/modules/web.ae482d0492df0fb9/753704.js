/* Recovered shipped factory. Module 753704.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3878511..3881921
 * Raw property SHA-256: ca9e4a69bb795b9549dcf952e9bfb87a06a0ab709aaa216d0f413b4f68546e72
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { R: () => O, _: () => R });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(844222),
    d = n(926268),
    c = n(559758),
    u = n(939249),
    _ = n(683063),
    E = n(866665),
    A = n(661492);
  let h = (0, n(945810).mj)({
    name: "2026-09-halloween-wishlisting-animation",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  var f = n(280450),
    I = n(536572),
    p = n(113265),
    T = n(758836),
    m = n(660183),
    g = n(715838);
  let S =
      "https://cdn.discordapp.com/assets/content/7f66bcf14a6000b54874d74ee5a72fbbaec3d5944edfd7d6e9b3d597d3dbbaf2.png",
    N = !1,
    C = { xs: "xxs", sm: "xs", md: "refresh_sm" };
  function O(e) {
    let {
        product: t,
        selectedVariantIndex: n,
        location: a,
        onError: s,
        isCardHovered: o = !0,
        onTrackClick: d,
        ...c
      } = e,
      u = (0, l.bG)([f.default], () => f.default.getId()),
      {
        isWishlisted: _,
        isBusy: E,
        isFirstTimeWishlister: h,
        handleToggle: m,
        specificProductOrVariant: g,
        isPurchased: S,
      } = (0, p.z)({ userId: u, product: t, selectedVariantIndex: n, location: a, onError: s }),
      N = (0, I.s7)(g),
      C = r.useCallback(() => {
        (d?.(_ ? T.sH.REMOVE_FROM_WISHLIST : T.sH.ADD_TO_WISHLIST), m());
      }, [_, m, d]);
    return S
      ? null
      : (0, i.jsx)(R, {
          skuId: g.skuId,
          productName: N,
          disabled: !(0, A.q)(g),
          isWishlisted: _,
          isBusy: E,
          isFirstTimeWishlister: h,
          isVisuallyHidden: !o && !_,
          onClick: C,
          ...c,
        });
  }
  function R(e) {
    let {
        skuId: t,
        productName: n,
        className: a,
        disabled: l,
        variant: A = "default",
        size: f = "md",
        isWishlisted: I,
        isBusy: p,
        isFirstTimeWishlister: T,
        isVisuallyHidden: O,
        onClick: R,
        shouldShowTooltip: L,
        tooltipConfig: y = {},
        tabIndex: D = 0,
      } = e,
      v = C[f],
      { reducedMotion: b } = r.useContext(o.C),
      M = h.useConfig({ location: "WishlistButton" }).enabled,
      P = r.useRef(null),
      [U, w] = r.useState(!1),
      G = M ? I || U : I && !U,
      x = G ? d.HeartIcon : c.y,
      k = s()(g.normalIconColor, G && g.wishlistedOrAnimating);
    (r.useEffect(() => {
      M && !b.enabled && (N || ((N = !0), (new Image().src = S)));
    }, [M, b.enabled]),
      r.useEffect(() => {
        w(!1);
      }, [t]),
      r.useEffect(() => {
        U && b.enabled && w(!1);
      }, [U, b.enabled]),
      r.useEffect(() => {
        if (!M || !U || b.enabled) return;
        let e = window.setTimeout(() => {
          w(!1);
        }, 2042);
        return () => window.clearTimeout(e);
      }, [U, M, b.enabled]));
    let F = r.useCallback(
        (e) => {
          (e.stopPropagation(), l || (I || b.enabled ? I && U && w(!1) : w(!0), R()));
        },
        [l, I, b.enabled, U, R],
      ),
      B = !l && !I && !U,
      V = r.useCallback(
        (e) => {
          e.target === e.currentTarget && U && requestAnimationFrame(() => w(!1));
        },
        [U],
      );
    function H() {
      let e = m.intl.formatToPlainString(m.t["7kFjeK"], { productName: n });
      return (0, i.jsx)(u.D, {
        className: s()(
          g.wishlistButton,
          g[f],
          {
            [g.variantDefault]: "default" === A,
            [g.variantSecondary]: "secondary" === A,
            [g.variantSecondaryOverlay]: "overlay-secondary" === A,
            [g.disabled]: l,
            [g.visuallyHidden]: O,
          },
          a,
        ),
        innerRef: P,
        onClick: F,
        tabIndex: D,
        "aria-label": e,
        "aria-pressed": I,
        "aria-busy": p,
        "aria-disabled": l,
        children: b.enabled
          ? (0, i.jsx)(x, { colorClass: void 0 ?? k, size: v })
          : (0, i.jsxs)("div", {
              className: s()(g.iconContainer, B && g.canAnimate),
              children: [
                (0, i.jsx)("span", {
                  className: s()(g.iconWrapper, B && g.canHover),
                  children: (0, i.jsx)(x, { colorClass: void 0 ?? k, size: v }),
                }),
                M
                  ? U
                    ? (0, i.jsx)("img", {
                        className: g.halloweenAnimationOverlay,
                        src: S,
                        alt: "",
                        "aria-hidden": !0,
                        draggable: !1,
                      })
                    : null
                  : (0, i.jsx)("span", {
                      className: s()(g.animationOverlay, U && g.clickAnimation),
                      onAnimationEnd: V,
                      children: (0, i.jsx)(d.HeartIcon, { size: v }),
                    }),
              ],
            }),
      });
    }
    if (T && !l) {
      let e = y.firstTimeTitle ?? m.intl.string(m.t["47Rhc3"]),
        t = y.firstTimeBody ?? m.intl.string(m.t.PXjA0b);
      return (0, i.jsx)(_.u, { title: e, body: t, shouldShow: L, children: H() });
    }
    let j = l
      ? (y.disabled ?? m.intl.string(m.t["50TX9k"]))
      : I
        ? (y.remove ?? m.intl.string(m.t.yr9TTf))
        : (y.add ?? m.intl.string(m.t["8DkMEQ"]));
    return (0, i.jsx)(E.m, { text: j, ariaHidden: !l, shouldShow: L, children: H() });
  }
}
