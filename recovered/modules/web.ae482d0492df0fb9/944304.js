/* Recovered shipped factory. Module 944304.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5101094..5103205
 * Raw property SHA-256: 60f8a28d13f5354b3d256c52099cd781c28590e11e359773070635c5b058aa08
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => L });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(862482),
    d = n(194261),
    c = n(866665),
    u = n(821609),
    _ = n(502572),
    E = n(930861),
    A = n(104510),
    h = n(820739),
    f = n(688810),
    I = n(531260),
    p = n(267102),
    T = n(178368),
    m = n(166403),
    g = n(473145),
    S = n(987144),
    N = n(652215),
    C = n(202541),
    O = n(660183),
    R = n(972113);
  let L = function (e) {
    let {
        analyticsLocation: t,
        analyticsSourceLocation: n,
        guild: a,
        buttonText: L,
        targetBoostedGuildTier: y,
        onClose: D = () => {},
        closeLayer: v = () => {},
        pauseAnimation: b = !1,
        applicationId: M,
        handleSubscribeModalClose: P,
        withHighlight: U = !1,
        icon: w,
        intent: G,
        useExpressiveButton: x = !1,
        ...k
      } = e,
      { analyticsLocations: F } = (0, f.Ay)(),
      B = (0, p.Us)() === N.BRT.POPOUT,
      [V, H] = r.useState(!1),
      { fractionalState: j } = (0, I.A)(),
      W = (0, l.bG)([T.A], () => T.A.hasFetched);
    r.useEffect(() => {
      W || (0, h.CD)();
    }, [W]);
    let Y = (0, g.D$)(T.A.boostSlots),
      K = null != y ? Math.max((0, g.Os)(a, y), 1) : 1,
      $ = (0, g.Nc)({ fractionalState: j });
    async function z() {
      (H(!0),
        await (0, S.g)({
          analyticsLocations: F,
          analyticsLocation: t,
          analyticsSourceLocation: n,
          guild: a,
          numberOfBoostsToAdd: K,
          onClose: D,
          closeLayer: v,
          inPopout: B,
          applicationId: M,
          handleSubscribeModalClose: P,
          intent: G,
        }),
        H(!1));
    }
    let X = m.A.getPremiumTypeSubscription(),
      Z = (0, i.jsxs)("div", { className: R.x6, children: [w, L ?? O.intl.string(O.t.gKmQ1G)] }),
      q = !1;
    return ((q = null !== X && !(Y.length > 0) && X?.isPausedOrPausePending && j === C.xc.NONE) &&
      ((Z = (0, i.jsxs)("div", {
        className: R.x6,
        children: [(0, i.jsx)(d.LockIcon, { size: "xs", className: R.iA }), " ", Z],
      })),
      (k.disabled = !0)),
    null != $)
      ? x
        ? (0, i.jsx)(c.m, {
            text: $,
            children: (0, i.jsx)(u.$, {
              variant: "expressive",
              icon: d.LockIcon,
              iconPosition: "start",
              disabled: !0,
              fullWidth: k.fullWidth,
              text: L ?? O.intl.string(O.t.gKmQ1G),
            }),
          })
        : (0, i.jsx)(_.A, {
            text: $,
            "aria-label": !1,
            children: (e) =>
              (0, i.jsx)(E.wL, {
                "data-migration-pending": !0,
                ...e,
                disabled: !0,
                size: o.$n.Sizes.SMALL,
                pauseAnimation: b,
                ...k,
                children: Z,
              }),
          })
      : x
        ? (0, i.jsx)(u.$, {
            variant: "expressive",
            icon: A._,
            disabled: q,
            loading: V,
            fullWidth: k.fullWidth,
            text: L ?? O.intl.string(O.t.gKmQ1G),
            onClick: z,
          })
        : (0, i.jsx)(E.wL, {
            "data-migration-pending": !0,
            size: o.$n.Sizes.SMALL,
            ...k,
            className: s()(k.className, { [R.yj]: U }),
            submitting: V,
            onClick: z,
            pauseAnimation: b,
            children: Z,
          });
  };
}
