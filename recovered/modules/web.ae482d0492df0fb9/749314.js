/* Recovered shipped factory. Module 749314.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5987896..5988850
 * Raw property SHA-256: 5289c4078a2d7cac69c84bcfe326648431585484156f0fb7987fc3d5f48dd988
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(953727);
  function l(e) {
    let { width: t = 8, height: n = 13, color: r = "currentColor", foreground: a, ...l } = e;
    return (0, i.jsx)("svg", {
      ...(0, s.A)(l),
      width: t,
      height: n,
      viewBox: "0 0 8 13",
      children: (0, i.jsx)("path", {
        className: a ?? void 0,
        stroke: r,
        fill: "transparent",
        d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z",
      }),
    });
  }
  var o = n(660183),
    d = n(682172);
  function c(e) {
    let { className: t, contentClassName: n, isUnread: r, children: s, ref: c, ...u } = e;
    return (0, i.jsxs)("div", {
      ...u,
      className: a()(t, { [d.yF]: !0, [d.KJ]: r, [d.ov]: null != s }),
      ref: c,
      children: [
        null != s ? (0, i.jsx)("span", { className: a()(d.Qs, n), children: s }) : null,
        r
          ? (0, i.jsxs)("span", {
              className: d.dM,
              children: [
                (0, i.jsx)(l, { foreground: d.BH, className: d.fE }),
                o.intl.string(o.t.y2b7CA),
              ],
            })
          : null,
      ],
    });
  }
}
