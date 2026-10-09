/* Recovered shipped factory. Module 993401.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8121140..8122701
 * Raw property SHA-256: 0dcf2d699708307022e575d5c2eca698c77baf399f8f359a78c24dd7d3ec5576
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { FD: () => A, br: () => f, q3: () => h, rE: () => E });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(939249),
    l = n(821609),
    o = n(866665),
    d = n(408278),
    c = n(289873),
    u = n(183555),
    _ = n(485371);
  function E(e) {
    let { action: t, onClick: n } = e,
      { trackUserProfileAction: i } = (0, u.NJ)();
    return (e) => {
      (null != t && i({ action: t }), n?.(e));
    };
  }
  function A(e) {
    let { action: t, onClick: n, variant: r = "secondary", size: a = "sm", ...s } = e,
      o = E({ action: t, onClick: n });
    return (0, i.jsx)(l.$, { onClick: o, variant: r, size: a, ...s });
  }
  function h(e) {
    let {
        action: t,
        onClick: n,
        variant: r = "secondary",
        size: a = "sm",
        "aria-label": s,
        tooltipText: l,
        __unsupportedReactNodeAsText: c,
        tooltipPosition: u,
        tooltipAlign: _,
        buttonRef: A,
        ...h
      } = e,
      f = E({ action: t, onClick: n }),
      I = s ?? l;
    return (0, i.jsx)(o.m, {
      asContainer: !0,
      targetElementRef: A,
      text: l,
      __unsupportedReactNodeAsText: c,
      position: u,
      align: _,
      ariaHidden: I === l,
      children: (0, i.jsx)(d.K, { onClick: f, variant: r, size: a, "aria-label": I, ...h }),
    });
  }
  function f(e) {
    let {
        icon: t,
        tooltipText: n,
        __unsupportedReactNodeAsText: r,
        tooltipPosition: l,
        tooltipAlign: d,
        "aria-label": u,
        action: A,
        onClick: h,
        buttonRef: f,
        disabled: I = !1,
        onMouseEnter: p,
        onMouseLeave: T,
        loading: m = !1,
        ...g
      } = e,
      S = E({ action: A, onClick: h }),
      N = u ?? n;
    return (0, i.jsx)(o.m, {
      asContainer: !0,
      text: n,
      __unsupportedReactNodeAsText: r,
      position: l,
      align: d,
      ariaHidden: N === n,
      children: (0, i.jsx)(s.D, {
        innerRef: f,
        className: a()(_.Xc, { [_.r9]: I }),
        onClick: S,
        "aria-label": N,
        "aria-disabled": I,
        "aria-busy": m,
        onMouseEnter: p,
        onMouseLeave: T,
        ...g,
        children: m
          ? (0, i.jsx)(c.y, { className: _.u1, itemClassName: _.KL, type: c.t.SPINNING_CIRCLE })
          : (0, i.jsx)(t, { size: "xs", color: "currentColor" }),
      }),
    });
  }
}
