/* Recovered shipped factory. Module 463930.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 904328..906295
 * Raw property SHA-256: 86303ef8ad4516f65586af1b353d2f13cf702df983c8000c60842329d22b3c08
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { V: () => f, g: () => I });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(28863),
    d = n(17928),
    c = n(473193),
    u = n(775602),
    _ = n(36075),
    E = n(545442),
    A = n(400590);
  function h(e) {
    let {
        roleStyle: t,
        name: n,
        colorString: a,
        roleName: o,
        colorStrings: d,
        dotAlignment: u = "left",
        className: h,
        nameTextClassName: f,
        animateRoleGradient: I,
        variant: p,
        displayNameStylesFont: T = "",
        displayInline: m = !1,
      } = e,
      g = r.useContext(c.C),
      [S, N] = r.useState(!1),
      C = r.useCallback(() => {
        N(!0);
      }, []),
      O = r.useCallback(() => {
        N(!1);
      }, []),
      R = "username" === t,
      L = null != d && null != d.primaryColor && null != d.secondaryColor,
      y = R && L,
      {
        gradientStyle: D,
        gradientClassname: v,
        gradientGlowClassname: b,
      } = (0, _.v5)({
        colorStrings: d,
        roleStyle: "username",
        animateGradient: I || S || g?.animate,
      }),
      M = (0, _.CR)(n),
      P = { className: s()(A.UU, f, T, { [A.Xh]: R, [v]: y }), children: M },
      U = { className: s()(A.lD, b, T), children: n },
      w =
        "dot" === t
          ? (0, i.jsx)(E.W, {
              color: a,
              colors: L ? d : null,
              name: o,
              className: "left" === u ? A.Hf : A.WN,
              hoverOverride: I || S || g?.animate,
            })
          : null;
    return (0, i.jsxs)("span", {
      className: s()(h, A.kL, { [A.mO]: m }),
      onMouseEnter: C,
      onMouseLeave: O,
      children: [
        "left" === u && w,
        (0, i.jsxs)("span", {
          className: s()(A.VW, { [A.mO]: m }),
          style: { color: R && !L && null != a ? a : void 0, ...(y ? D : {}) },
          children: [
            null != p
              ? (0, i.jsx)(l.E, { tag: "span", color: "currentColor", variant: p, ...P })
              : (0, i.jsx)("span", { ...P }),
            y &&
              (null != p
                ? (0, i.jsx)(l.E, {
                    tag: "span",
                    color: "currentColor",
                    "aria-hidden": !0,
                    variant: p,
                    ...U,
                  })
                : (0, i.jsx)("span", { "aria-hidden": !0, ...U })),
          ],
        }),
        "right" === u && w,
      ],
    });
  }
  function f(e) {
    let {
        name: t,
        colorString: n,
        roleName: r,
        dotAlignment: a,
        className: s,
        colorStrings: l,
        animateRoleGradient: c,
        displayInline: _,
        ref: E,
        ...A
      } = e,
      f = (0, d.bG)([u.Ay], () => u.Ay.roleStyle),
      I = "username" === f,
      p = (0, i.jsx)(h, {
        roleStyle: f,
        name: t,
        colorString: n,
        roleName: r,
        dotAlignment: a,
        className: s,
        colorStrings: l,
        animateRoleGradient: c,
        displayInline: _,
      }),
      T = I && null != n ? { color: n } : void 0;
    return (0, i.jsx)(o.Anchor, { ...A, children: p, style: T, ref: E });
  }
  function I(e) {
    let t = (0, d.bG)([u.Ay], () => u.Ay.roleStyle);
    return (0, i.jsx)(h, { ...e, roleStyle: t });
  }
}
