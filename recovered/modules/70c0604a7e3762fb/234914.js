/* Recovered shipped factory. Module 234914.
 * Source: recovered/web/assets/70c0604a7e3762fb.js
 * UTF-16 property offsets: 420..1087
 * Raw property SHA-256: 4238078c3a5dfb4d4a500f35578916eb4770cf3c6f5f556ef070fd083b587c59
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { A: () => o });
  var n = r(477900),
    a = r(582128),
    s = r(503698),
    c = r.n(s),
    l = r(289873),
    i = r(922278);
  function u(e) {
    let { alt: t, ...r } = e,
      [s, c] = a.useState(!0);
    return (0, n.jsxs)(n.Fragment, {
      children: [
        s && (0, n.jsx)(l.y, { type: l.y.Type.LOW_MOTION, className: i.wG }),
        (0, n.jsx)("img", { ...r, alt: t, onLoad: () => c(!1) }),
      ],
    });
  }
  function o(e) {
    let {
      src: t,
      backgroundSrc: r,
      alt: a,
      aspectRatio: s,
      className: l,
      imageChildClassName: o,
      ...d
    } = e;
    return (0, n.jsxs)("div", {
      className: c()(i.kL, l),
      children: [
        (0, n.jsx)("img", { src: r, alt: a, className: i.iL }),
        (0, n.jsx)("div", { className: i.CC }),
        (0, n.jsx)("div", {
          style: { aspectRatio: s },
          className: i.ZS,
          children: (0, n.jsx)(u, { src: t, alt: a, className: c()(i.Sl, o), ...d }),
        }),
      ],
    });
  }
}
