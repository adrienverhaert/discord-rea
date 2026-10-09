/* Recovered shipped factory. Module 299871.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4048108..4048614
 * Raw property SHA-256: 64107e41d5d04ae46938cc374b5d1339df71eb31b8b08e066012d614b5cf54b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { r: () => d });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(765671),
    l = n(835517),
    o = n(100853);
  function d(e) {
    let { durationMs: t, isPaused: n = !1, className: r } = e,
      { ref: d, width: c } = (0, s.Ay)(),
      u = null != c ? Math.ceil(c * (0, l.A)()) : null,
      _ = {
        animationDuration: `${t}ms`,
        animationTimingFunction: null != u ? `steps(${u})` : void 0,
        animationPlayState: n ? "paused" : "running",
      };
    return (0, i.jsx)("div", {
      ref: d,
      className: a()(o.p4, r),
      "aria-hidden": "true",
      children: (0, i.jsx)("div", { className: o.q3, style: _ }),
    });
  }
}
