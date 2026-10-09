/* Recovered shipped factory. Module 665411.
 * Source: recovered/web/assets/a5c1b4a3f0673cac.js
 * UTF-16 property offsets: 95..1039
 * Raw property SHA-256: 63b049298eeb549cbda799bd3de9d49866756f5b932ca1dda1127a1a0475d7f4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, r, i) {
  i.d(r, { A: () => f });
  var s = i(477900);
  i(582128);
  var a = i(503698),
    t = i.n(a),
    n = i(754474),
    l = i(744808),
    c = i(875741),
    d = i(660183),
    u = i(70040),
    o = i(423393);
  function h(e) {
    let { responsive: r } = e;
    return !0 !== r;
  }
  function m(e) {
    return e.order === n.u.BACK && !0 !== e.responsive;
  }
  function v(e) {
    return e.order === n.u.FRONT && !0 !== e.responsive;
  }
  function f(e) {
    let { frame: r, transparentBackground: i = !1, ...a } = e,
      { profileFrameStyle: n, profileFrameClassName: f } = (0, c.A)(r);
    return (0, s.jsxs)("div", {
      className: t()(u.i1, f),
      style: n,
      role: "img",
      "aria-label": d.intl.formatToPlainString(d.t["DT/PwH"], { a11y_text: r.label }),
      children: [
        i &&
          (0, s.jsx)("div", {
            className: u.tL,
            children: (0, s.jsx)("div", {
              className: u.HX,
              children: (0, s.jsx)(l.A, { frame: r, filterLayer: m, ...a, isPreview: !0 }),
            }),
          }),
        (0, s.jsxs)("div", {
          className: u.HX,
          children: [
            (0, s.jsx)("img", {
              src: o.A,
              alt: "",
              className: t()(u.wt, u.EX, { [u.GA]: i }),
              "aria-hidden": !0,
              draggable: !1,
            }),
            (0, s.jsx)(l.A, { frame: r, filterLayer: i ? v : h, ...a, isPreview: !0 }),
          ],
        }),
      ],
    });
  }
}
