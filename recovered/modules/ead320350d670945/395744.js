/* Recovered shipped factory. Module 395744.
 * Source: recovered/web/assets/ead320350d670945.js
 * UTF-16 property offsets: 95..646
 * Raw property SHA-256: ac5dd9c859ea72df5e2cc56af92027009b039423e545e37040bff76fd51c598b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (a, i, s) {
  s.d(i, { A: () => m });
  var e = s(477900);
  s(582128);
  var r = s(503698),
    l = s.n(r),
    t = s(744808),
    c = s(875741),
    d = s(660183),
    n = s(70040),
    h = s(778765);
  function m(a) {
    let { frame: i, ...s } = a,
      { profileFrameStyle: r, profileFrameClassName: m } = (0, c.A)(i);
    return (0, e.jsx)("div", {
      className: l()(n.i1, m),
      style: r,
      role: "img",
      "aria-label": d.intl.formatToPlainString(d.t["DT/PwH"], { a11y_text: i.label }),
      children: (0, e.jsxs)("div", {
        className: n.HX,
        children: [
          (0, e.jsx)("img", {
            src: h.A,
            alt: "",
            className: n.wt,
            "aria-hidden": !0,
            draggable: !1,
          }),
          (0, e.jsx)(t.A, { frame: i, ...s, isPreview: !0 }),
        ],
      }),
    });
  }
}
