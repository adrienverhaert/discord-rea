/* Recovered shipped factory. Module 911608.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10376834..10377637
 * Raw property SHA-256: 2a8bb460dc281fe90d190b52cf27973755264b4362ed11248955d72f1797fc8d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { z: () => o });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(639387),
    l = n(476912);
  function o(e) {
    let {
      value: t,
      minValue: n = 0,
      maxValue: r = 100,
      isIndeterminate: o,
      valueLabel: d,
      formatOptions: c,
      size: u = "lg",
      animate: _ = !0,
      className: E,
      "aria-label": A,
      "aria-labelledby": h,
    } = e;
    return (0, i.jsx)(s.z, {
      value: t,
      minValue: n,
      maxValue: r,
      isIndeterminate: o,
      valueLabel: d,
      formatOptions: c,
      "aria-label": A,
      "aria-labelledby": h,
      className: a()(l.track, l[u], E),
      children: (e) => {
        let { percentage: t } = e;
        return o
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { className: a()(l.indeterminateBar1, l[u], _ && l.animating) }),
                (0, i.jsx)("div", { className: a()(l.indeterminateBar2, l[u], _ && l.animating) }),
              ],
            })
          : (0, i.jsx)("div", {
              className: a()(l.fill, l[u], _ && l.animating),
              style: { transform: `translate3d(${(t ?? 0) - 100}%, 0, 0)` },
            });
      },
    });
  }
}
