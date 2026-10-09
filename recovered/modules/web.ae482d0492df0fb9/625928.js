/* Recovered shipped factory. Module 625928.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3382417..3385263
 * Raw property SHA-256: dfa4358c446cb610e6a2790f95f78a0c1781594720e6efbb29bb90f7268fc520
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => P });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(14877),
    o = n(17928),
    d = n(866665),
    c = n(403581),
    u = n(834730),
    _ = n(140735),
    E = n(793574),
    A = n(688810),
    h = n(135621),
    f = n(287809),
    I = n(158045),
    p = n(192308),
    T = n(939249),
    m = n(404374),
    g = n(10392),
    S = n(82498),
    N = n(734057),
    C = n(309010),
    O = n(174459),
    R = n(652215),
    L = n(660183),
    y = n(845210);
  function D() {
    (0, p.openModalLazy)(async () => {
      let { default: e } = await Promise.all([n.e("235257"), n.e("66920")]).then(n.bind(n, 220763));
      return (t) => (0, i.jsx)(e, { ...t });
    });
  }
  function v(e) {
    let { className: t, iconOnly: n } = e,
      a = (0, o.bG)([C.Ay, N.A], () => {
        let e = N.A.getChannel(C.Ay.getChannelId());
        return e?.isPrivate() ? R.liQ.DM_CHANNEL : R.liQ.GUILD_CHANNEL;
      }),
      { analyticsLocations: l } = (0, A.Ay)(E.A.PREMIUM_UPSELL);
    return (
      r.useEffect(() => {
        (O.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, {
          type: "longer messages inline",
          location: { location_page: a, location_section: R.JJy.CHANNEL_TEXT_AREA },
          location_stack: l,
        }),
          (0, g.sq)(R.U7l.PREMIUM_UPSELL_VIEWED, l, () => (0, S.uq)("longer messages inline")));
      }, [a, l]),
      n
        ? (0, i.jsx)(T.D, {
            className: y.e7,
            onClick: () => D(),
            children: (0, i.jsx)(d.m, {
              text: L.intl.string(L.t["+eFIjX"]),
              position: "top",
              children: (0, i.jsx)(c.t, { size: "md", color: "currentColor", className: y.M2 }),
            }),
          })
        : (0, i.jsxs)("div", {
            className: s()(y.zr, t),
            children: [
              (0, i.jsx)(c.t, { size: "md", className: y.M2, color: m.k0.PREMIUM_TIER_2 }),
              (0, i.jsx)(u.E, {
                className: y.Qq,
                variant: "text-sm/normal",
                children: L.intl.format(L.t.BNAIBU, { onLearnMore: D }),
              }),
            ],
          })
    );
  }
  var b = n(263582),
    M = n(412028);
  function P(e) {
    let {
        type: t,
        textValue: n,
        maxCharacterCount: r,
        showRemainingCharsAfterCount: a,
        className: p,
      } = e,
      T = (0, o.bG)([f.default], () =>
        I.Ay.canUseIncreasedMessageLength(f.default.getCurrentUser()),
      ),
      m = (0, h.A)(),
      g = r ?? m,
      S = a ?? r ?? m / 10,
      N = n.length,
      C = null != t.upsellLongMessages && (N ?? 0) > R.uvi && T,
      O = null != t.upsellLongMessages && !T,
      y = g - N,
      D = y > S;
    (0, l.$)({ currentLength: N, maxLength: g, message: L.intl.string(L.t.c2Jqed) });
    let P =
        0 === y
          ? L.intl.string(L.t.tU6YQ7)
          : y > 0
            ? L.intl.formatToPlainString(L.t.qH8uFW, { count: y })
            : L.intl.string(L.t.YSRIqa),
      { analyticsLocations: U } = (0, A.Ay)(E.A.CHARACTER_COUNT),
      { isVisible: w } = (0, b.A)({
        type: t,
        textValue: n,
        maxCharacterCount: r,
        showRemainingCharsAfterCount: a,
      });
    if (!w) return null;
    let G = y >= 0;
    return (0, i.jsx)(A.f5, {
      value: U,
      children: (0, i.jsxs)("div", {
        className: s()(p, M.Dq),
        children: [
          (0, i.jsxs)("div", {
            className: M.SW,
            children: [
              C && G
                ? (0, i.jsx)(d.m, {
                    text: L.intl.formatToPlainString(L.t.vcvHa0, { maxLength: g }),
                    position: "top",
                    children: (0, i.jsx)(c.t, {
                      size: "md",
                      color: "currentColor",
                      className: M.y,
                    }),
                  })
                : null,
              D
                ? null
                : (0, i.jsx)(d.m, {
                    text: P,
                    position: "top",
                    children: (0, i.jsx)(u.E, {
                      variant: "text-sm/semibold",
                      tabularNumbers: !0,
                      "aria-hidden": !0,
                      color: G ? "text-default" : "text-feedback-critical",
                      children: y,
                    }),
                  }),
            ],
          }),
          (0, i.jsx)(_.A, {
            "aria-live": "polite",
            children: L.intl.format(L.t.qH8uFW, { count: y }),
          }),
          O && !D
            ? (0, i.jsx)(v, {
                className: M.UX,
                iconOnly: t.upsellLongMessages?.iconOnly || !1,
                remaining: y,
              })
            : null,
        ],
      }),
    });
  }
}
