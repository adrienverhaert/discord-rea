/* Recovered shipped factory. Module 105390.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6896606..6898822
 * Raw property SHA-256: 051cc279985a47b70d8ca9b0620e37aad083ef574dfee1296ed5c07c70a4020e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ag: () => N, MA: () => O, fY: () => C });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(85463),
    o = n(406810),
    d = n(834730),
    c = n(866665),
    u = n(508770),
    _ = n(496431),
    E = n(58703),
    A = n(158045),
    h = n(236056),
    f = n(872725),
    I = n(732280),
    p = n(99462),
    T = n(202541),
    m = n(660183),
    g = n(432458);
  function S(e) {
    let {
        isTabSelected: t,
        expiresAt: n,
        badgeCopy: a,
        className: u,
        tooltipTextOverride: A,
        tooltipPosition: h,
        hideTooltip: f = !1,
      } = e,
      I = (0, l.N)(),
      p = r.useMemo(() => Date.parse(n), [n]),
      T = (0, _.A)(p, 6e4);
    if (Object.values(T).every((e) => 0 === e)) return null;
    let S = (0, i.jsxs)("div", {
      className: s()(g.Fg, g.C8, u, { [g.WO]: t }),
      children: [
        (0, i.jsx)(o.ClockIcon, { size: "custom", width: 12, height: 12, color: "currentColor" }),
        (0, i.jsx)(d.E, { variant: I, color: "text-strong", className: g.a7, children: a }),
      ],
    });
    return f
      ? S
      : (0, i.jsx)(c.m, {
          text:
            null != A
              ? A
              : (0, E.uN)(T, { days: m.t.qVGNkU, hours: m.t.wyg9a9, minutes: m.t.IzmIlV }),
          position: null != h ? h : "top",
          children: S,
        });
  }
  function N(e) {
    let { isTabSelected: t, trialOffer: n, badgeStyle: r } = e,
      a = (0, I.V)()?.subscriptionTrial,
      s = (0, A.tS)({ intervalType: a?.interval, intervalCount: a?.intervalCount }),
      l = n.trialId === T.Tt,
      o = (0, p.Fu)(n);
    return (0, i.jsx)(O, {
      isTabSelected: t,
      badgeCopy: s,
      offerExpiresAt: n.expiresAt?.toISOString() ?? null,
      tooltipTextOverride: o,
      tooltipPosition: "right",
      hideTooltip: l,
      badgeStyle: r,
    });
  }
  function C(e) {
    let { isTabSelected: t, userDiscount: n, includesAmountOff: r, badgeStyle: a } = e,
      s = m.intl.formatToPlainString(m.t.iiLbvu, { percent: n.discount.amount }),
      l = r ? s : m.intl.string(m.t["/DTtr6"]),
      o = n.expiresAt?.toISOString() ?? null,
      d = (0, p.__)(n);
    return (0, i.jsx)(O, {
      isTabSelected: t,
      badgeCopy: l,
      offerExpiresAt: o,
      tooltipTextOverride: d,
      tooltipPosition: "right",
      badgeStyle: a,
    });
  }
  function O(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: r,
        tooltipTextOverride: a,
        tooltipPosition: o,
        hideTooltip: c,
        badgeStyle: _,
      } = e,
      E = (0, l.N)();
    return null != r
      ? (0, i.jsx)(S, {
          expiresAt: r,
          isTabSelected: t,
          badgeCopy: n,
          tooltipTextOverride: a,
          tooltipPosition: o,
          hideTooltip: c,
        })
      : _ === h.v.GLOWING
        ? (0, i.jsx)(f.A, {
            glowing: !0,
            fit: "cover",
            glowAmount: 1,
            blurAmount: 4,
            hueRotate: 25,
            cardStyle: { background: "transparent", border: "none" },
            children: (0, i.jsx)(u.E, { type: { text: n }, variant: "expressive" }),
          })
        : (0, i.jsx)("div", {
            className: s()(g.Fg, g.AT),
            children: (0, i.jsx)(d.E, { variant: E, className: g.md, children: n }),
          });
  }
}
