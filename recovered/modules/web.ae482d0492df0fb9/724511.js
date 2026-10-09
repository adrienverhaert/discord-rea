/* Recovered shipped factory. Module 724511.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4328845..4329559
 * Raw property SHA-256: f247550bdd6942da412dd6b3514423825dbfdb9e31362690b7ddd2a7eed47def
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(194261),
    l = n(573435),
    o = n(260509),
    d = n(82477);
  let c = function (e) {
    let {
        className: t,
        guild: n,
        isSelected: r = !0,
        width: c = 32,
        height: u = 32,
        shouldAnimate: _ = !0,
        isLocked: E = !1,
      } = e,
      A = (0, o.Iv)(n, 32, _ && r);
    return (0, i.jsxs)("div", {
      children: [
        (0, i.jsx)(l.Ay, {
          className: a()(d.dK, t),
          mask: l.hW.SQUIRCLE,
          width: c,
          height: u,
          children:
            null == A
              ? (0, i.jsx)("div", {
                  className: a()(d.$f, d.Gc),
                  children: (0, i.jsx)("div", { className: d.Hj, children: (0, o.Rb)(n) }),
                })
              : (0, i.jsx)("img", { alt: n.name, src: A, className: d.$f }),
        }),
        E
          ? (0, i.jsx)("div", {
              className: d.bg,
              children: (0, i.jsx)(s.LockIcon, {
                size: "custom",
                color: "currentColor",
                width: 10,
                height: 10,
                className: d.YL,
              }),
            })
          : null,
      ],
    });
  };
}
