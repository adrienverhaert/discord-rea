/* Recovered shipped factory. Module 461536.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6869474..6871888
 * Raw property SHA-256: 293692b6db9439906002ed524c32295c71c24ce4c90df3ef1350112193e84011
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => R, A: () => L });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(536001),
    l = n(194981),
    o = n(331322),
    d = n(834730),
    c = n(297264),
    u = n(280336),
    _ = n(747556),
    E = n(255434),
    A = n(710778),
    h = n(140735),
    f = n(260981),
    I = n(540418),
    p = n(907085),
    T = n(179820),
    m = n(660183),
    g = n(381134);
  function S(e) {
    let { rarity: t, className: n } = e,
      r = (function (e) {
        switch (e) {
          case s.x.COMMON:
            return { Icon: f.p, className: g.e8, label: m.intl.string(m.t.L0K5ci) };
          case s.x.RARE:
            return { Icon: I.A, className: g.D3, label: m.intl.string(m.t["sTx/5z"]) };
          case s.x.EPIC:
            return { Icon: p.b, className: g.mk, label: m.intl.string(m.t.RD8RiN) };
          case s.x.MYTHIC:
            return { Icon: T.O, className: g.nM, label: m.intl.string(m.t.vqc1ol) };
          default:
            return null;
        }
      })(t);
    if (null == r) return null;
    let { Icon: l, className: o, label: d } = r;
    return (0, i.jsx)("div", {
      role: "img",
      "aria-label": d,
      className: a()(g.Tc, o, n),
      children: (0, i.jsx)(l, { size: "xxs", color: "currentColor" }),
    });
  }
  var N = n(140049),
    C = n(518477),
    O = n(881518);
  function R(e) {
    let {
        children: t,
        title: n,
        eyebrow: r,
        body: f,
        variant: I = "default",
        badgeImage: p,
        badgeName: T,
        progressCircle: m,
        rarity: g,
        isAnimated: R = !1,
        targetElementRef: L,
        onShow: y,
        position: D = "top",
        shouldShow: v,
      } = e,
      b = R && null == m,
      {
        tooltipId: M,
        isVisible: P,
        targetElementRef: U,
        trigger: w,
      } = (0, l.D)({
        children: t,
        targetElementRef: L,
        delay: C.In,
        onTooltipShow: y,
        shouldShow: v,
      }),
      G = null != g && g !== s.x.COMMON,
      x = (0, i.jsxs)("div", {
        className: O.Qs,
        "data-mana-component": "mini-premium-tooltip",
        children: [
          G && (0, i.jsx)("div", { className: O.xV, children: (0, i.jsx)(S, { rarity: g }) }),
          (0, i.jsx)("div", {
            className: a()(O.fA, { [O.qJ]: b }),
            "aria-hidden": !0,
            children: (0, i.jsx)(N.BadgeImageWithProgressCircle, {
              src: p,
              alt: T,
              progressCircleText: m?.text,
              progressCirclePercent: m?.percent,
              progressCircleUrgency: m?.urgency,
              compact: !0,
            }),
          }),
          (0, i.jsxs)(o.B, {
            gap: 4,
            align: "center",
            className: O.i8,
            children: [
              null != r &&
                (0, i.jsx)(d.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  className: O.UP,
                  children: r,
                }),
              (0, i.jsx)(c.D, {
                variant: "display-sm",
                color: "text-strong",
                className: a()(O.DD, { [O.x$]: "nitro" === I }),
                children: n,
              }),
              null != f &&
                (0, i.jsx)(d.E, {
                  variant: "text-sm/medium",
                  color: "text-subtle",
                  className: O.rf,
                  children: f,
                }),
            ],
          }),
        ],
      }),
      k = null != f ? `${T}. ${f}` : T,
      F = (0, u.j)({ shouldShow: P })((e, t) =>
        t
          ? (0, i.jsx)(_.Bc, {
              isRichTooltip: !0,
              children: (0, i.jsx)(E.R, {
                isVisible: P,
                isRendered: !0,
                targetElementRef: U,
                content: x,
                position: D,
                align: "center",
                animationStyle: e,
                positionKey: (0, A.Xj)(n),
              }),
            })
          : null,
      );
    return (0, i.jsxs)(i.Fragment, { children: [w, (0, i.jsx)(h.A, { id: M, children: k }), F] });
  }
  let L = R;
}
