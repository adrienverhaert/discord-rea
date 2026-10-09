/* Recovered shipped factory. Module 609178.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6923884..6926525
 * Raw property SHA-256: 14e3cb580d65c8178cd0c02641b3b5e84e288e2d59c878a57b6bf35b8fd02e32
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => x });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(935462),
    o = n(462824),
    d = n(315629),
    c = n(305866),
    u = n(353795),
    _ = n(508770),
    E = n(297264),
    A = n(834730),
    h = n(821609),
    f = n(398590),
    I = n(523527),
    p = n(976860),
    T = n(174459),
    m = n(676279),
    g = n(158045),
    S = n(10392),
    N = n(82498),
    C = n(732280),
    O = n(369805),
    R = n(989790),
    L = n(632150),
    y = n(792656),
    D = n(202541),
    v = n(652215),
    b = n(259589),
    M = n(660183),
    P = n(237790),
    U = n(592551),
    w = n(644242),
    G = n(309427);
  function x(e) {
    let t,
      {
        title: n,
        description: a,
        analyticsLocationSection: x,
        upsellViewedTrackingData: k,
        onClose: F,
        onDisplay: B,
        onUpsellClicked: V,
        isEmojiPickerOverlay: H = !1,
        graphic: j,
        useNitroGradient: W = !1,
      } = e;
    r.useEffect(() => {
      (T.default.track(v.HAw.PREMIUM_UPSELL_VIEWED, k),
        (0, S.sq)(v.U7l.PREMIUM_UPSELL_VIEWED, k.location_stack, () =>
          (0, N.uq)(k.type, k.has_premium_stream_fps, k.has_premium_stream_resolution),
        ),
        B?.());
    }, [B, k]);
    let Y = (0, C.V)(),
      K = r.useCallback(() => (0, g.LE)(Y, D.pe.TIER_2) ?? M.intl.string(M.t.pj0XBN), [Y]),
      $ = (0, O.A)(D.pe.TIER_2),
      z = (0, R.O9)();
    t = H
      ? (0, m.TM)()
        ? "https://cdn.discordapp.com/assets/content/c0f100da7d39f5e84ae361150c05077f9ca94ea62d0f7dd086ba1aa8fe17ae68.mov"
        : "https://cdn.discordapp.com/assets/content/75e94ffcd07b3b84cdd4305c93b43b3c94bf3ae56ace551f59b8dba7f3616c1c.webm"
      : (0, m.TM)()
        ? w.A
        : G.A;
    let X = H || W ? "nitro-pink" : "green";
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(o.p, { onClick: F, isVisible: !0 }),
        (0, i.jsx)(d.h, {
          color: X,
          className: P.kL,
          children: (0, i.jsxs)(c.l, {
            "aria-label": n,
            className: P.r3,
            children: [
              (0, i.jsxs)("div", {
                className: P.Qs,
                children: [
                  (0, i.jsx)(l.s_, { "data-migration-pending": !0, onClick: F, className: P.b }),
                  (0, i.jsxs)("div", {
                    className: P.hQ,
                    children: [
                      (0, i.jsx)("div", {
                        className: U.headerGraphic,
                        children:
                          j ?? (0, i.jsx)(u.v, { type: "video", src: t, loop: !0, loopAt: 5 }),
                      }),
                      null != $ && (0, i.jsx)(_.E, { type: { text: $ }, variant: "brand" }),
                      (0, i.jsx)(E.D, {
                        className: s()(P.DD, { [P.GU]: null != $ }),
                        variant: "heading-xl/bold",
                        color: "text-strong",
                        children: n,
                      }),
                      (0, i.jsx)(A.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        className: P.rf,
                        children: a,
                      }),
                    ],
                  }),
                  H &&
                    z &&
                    (0, i.jsx)("div", {
                      className: P.Zr,
                      children: (0, i.jsx)(L.A, { subtitle: M.intl.string(b.default.BkJYQ5) }),
                    }),
                ],
              }),
              (0, i.jsx)("div", {
                className: P.qr,
                children: (0, i.jsxs)("div", {
                  className: P.UD,
                  children: [
                    (0, i.jsx)(h.$, {
                      variant: "secondary",
                      onClick: function () {
                        (T.default.track(v.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: x,
                          location_object: v.ZSU.NAVIGATION_LINK,
                        }),
                          V?.(),
                          (0, I.A)(),
                          F(),
                          (0, f.jH)(),
                          (0, p.pX)(v.BVt.APPLICATION_STORE));
                      },
                      text: M.intl.string(M.t.ZnqyZ2),
                      fullWidth: !0,
                    }),
                    (0, i.jsx)(y.A, {
                      premiumModalAnalyticsLocation: { section: x, object: v.ZSU.BUTTON_CTA },
                      subscriptionTier: D.pe.TIER_2,
                      onClick: () => {
                        (F(), V?.());
                      },
                      defaultTextOverride: K(),
                      fullWidth: !0,
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  }
}
