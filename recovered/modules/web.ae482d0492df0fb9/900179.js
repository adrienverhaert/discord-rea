/* Recovered shipped factory. Module 900179.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8055792..8057081
 * Raw property SHA-256: d9771daef75e9ffae54e8ec03b6ecaadbe0fbd5ab411405517bf81954c729736
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => g });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(282802),
    o = n.n(l),
    d = n(661531),
    c = n(866665),
    u = n(140735),
    _ = n(707554),
    E = n(297264),
    A = n(834730),
    h = n(915089),
    f = n(94343),
    I = n(716804),
    p = n(161185);
  let T = Object.fromEntries(Object.keys(d.A.colors).map((e) => [o()(e), e]));
  function m(e) {
    let { icon: t, size: n = "xxs", tooltip: r } = e,
      a = (0, i.jsx)(t, { size: n, color: "currentColor", className: p.yK, "aria-hidden": !0 });
    return null == r ? a : (0, i.jsx)(c.m, { text: r, asContainer: !0, children: a });
  }
  function g(e) {
    let {
        children: t,
        heading: n,
        headingClassName: a,
        headingVariant: l = "text-xs/semibold",
        headingColor: o = "text-default",
        headingIcon: c,
        hideHeading: g = !1,
        introText: S,
        className: N,
        scrollTargetId: C,
      } = e,
      O = (0, h.GV)(),
      R = r.useRef(null),
      L = (0, I.g)(),
      y = null != C && L === C;
    (0, f.A)(R, y);
    let D = "function" == typeof c ? { icon: c } : c;
    return (0, i.jsxs)("section", {
      ref: y ? R : void 0,
      className: s()(p.uW, N),
      "aria-labelledby": O,
      children: [
        g
          ? (0, i.jsx)(u.A, { children: (0, i.jsx)(_.H, { id: O, children: n }) })
          : (0, i.jsxs)("div", {
              className: p.so,
              children: [
                (0, i.jsxs)("div", {
                  className: p.wx,
                  style: { color: d.A.colors[T[o]]?.css },
                  children: [
                    (0, i.jsx)(E.D, {
                      variant: l,
                      color: "currentColor",
                      className: a,
                      id: O,
                      children: n,
                    }),
                    null != D && (0, i.jsx)(m, { ...D }),
                  ],
                }),
                null != S && (0, i.jsx)(A.E, { variant: "text-xs/normal", children: S }),
              ],
            }),
        (0, i.jsx)(_.F, { children: t }),
      ],
    });
  }
}
