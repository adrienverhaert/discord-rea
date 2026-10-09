/* Recovered shipped factory. Module 332173.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5918276..5919140
 * Raw property SHA-256: c0839dda3ea3bea99f4e678d3d5d29164f38bc00fde4048a7f23e2aeb5d1e495
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(317097),
    o = n(36075),
    d = n(939249),
    c = n(232042),
    u = n(209599);
  let _ = function (e) {
    let {
        ref: t,
        children: n,
        className: a,
        color: _,
        roleColors: E,
        iconType: A,
        onMouseEnter: h,
        onMouseLeave: f,
        ...I
      } = e,
      [p, T] = r.useState(!1),
      { gradientStyle: m, gradientClassname: g } = (0, o.v5)({
        colorStrings: E ?? null,
        roleStyle: "username",
        animateGradient: p,
      }),
      S = r.useCallback(
        (e) => {
          (T(!0), h?.(e));
        },
        [T, h],
      ),
      N = r.useCallback(
        (e) => {
          (T(!1), f?.(e));
        },
        [T, f],
      ),
      C = {};
    return (
      null != _ &&
        (C = { color: (0, l.Hl)(_), backgroundColor: p ? (0, l.gq)(_, 0.3) : (0, l.gq)(_, 0.1) }),
      (0, i.jsx)(d.D, {
        ...I,
        innerRef: t,
        tag: "span",
        className: s()(a, { [u.i]: !0, interactive: I.onClick }),
        onMouseEnter: S,
        onMouseLeave: N,
        style: C,
        tabIndex: null != I.onClick ? 0 : -1,
        children:
          null != A
            ? (0, i.jsx)(c.A, { iconType: A, children: n })
            : null != E
              ? (0, i.jsx)("span", { style: { ...m }, className: g, children: n })
              : n,
      })
    );
  };
}
