/* Recovered shipped factory. Module 140049.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6867601..6869473
 * Raw property SHA-256: c8cf54e9f8dabc46bc112c7e7c5d264f40b1123b7ccaab5d139571b35fd37eec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { BadgeImageWithProgressCircle: () => _, default: () => E }));
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(366010),
    l = n(834730),
    o = n(736653),
    d = n(722058);
  let c = (e) => {
    let {
        innerRingPercent: t,
        outerRingColor: n = "currentColor",
        innerRingColor: r = "currentColor",
        strokeWidth: a = 4,
        children: s,
        backgroundCircleColor: l,
        backgroundCircleBlurAmount: o = 0,
      } = e,
      c = Math.min(Math.max(t, 0), 100),
      u = (100 - a) / 2,
      _ = u * Math.PI * 2,
      E = (100 - a) / 2,
      A = E * Math.PI * 2;
    return (0, i.jsxs)("div", {
      className: d.kL,
      children: [
        (0, i.jsx)("svg", {
          viewBox: "0 0 100 100",
          className: d.DT,
          style: null != o ? { "--custom-backdrop-blur-amount": `${o}px` } : void 0,
          children: (0, i.jsx)("circle", { cx: 50, cy: 50, r: 50, fill: l }),
        }),
        (0, i.jsxs)("svg", {
          viewBox: "0 0 100 100",
          className: d.JW,
          children: [
            (0, i.jsx)("circle", {
              cx: 50,
              cy: 50,
              r: u,
              strokeWidth: a,
              stroke: n,
              fill: "none",
              strokeLinecap: "round",
              transform: "rotate(-90 50 50)",
              style: { strokeDasharray: _ },
            }),
            (0, i.jsx)("circle", {
              cx: 50,
              cy: 50,
              r: E,
              strokeWidth: a,
              stroke: r,
              fill: "none",
              strokeLinecap: "round",
              transform: "rotate(-90 50 50)",
              style: { strokeDasharray: A, strokeDashoffset: (1 - c / 100) * A },
            }),
          ],
        }),
        null != s && (0, i.jsx)("div", { className: d.Lw, children: s }),
      ],
    });
  };
  var u = n(430318);
  function _(e) {
    let {
        src: t,
        alt: n,
        progressCircleText: r,
        progressCirclePercent: d,
        progressCircleUrgency: _,
        compact: E = !1,
      } = e,
      A = (0, o.Ay)();
    return (0, i.jsxs)("div", {
      className: a()(u.mI, { [u.oE]: E }),
      children: [
        (0, i.jsx)("img", { alt: n, src: t, className: u.pq }),
        null != r &&
          null != d &&
          null != _ &&
          (0, i.jsx)("div", {
            className: u.$t,
            children: (0, i.jsx)(c, {
              innerRingPercent: d,
              outerRingColor: "critical" === _ ? "var(--red-new-74)" : "var(--opacity-orange-36)",
              innerRingColor: "critical" === _ ? "var(--red-new-43)" : "var(--opacity-orange-96)",
              strokeWidth: 7,
              backgroundCircleColor: (0, s.M)(A)
                ? "var(--opacity-black-72)"
                : "var(--opacity-white-72)",
              backgroundCircleBlurAmount: 2,
              children: (0, i.jsx)(l.E, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                children: r,
              }),
            }),
          }),
      ],
    });
  }
  let E = _;
}
