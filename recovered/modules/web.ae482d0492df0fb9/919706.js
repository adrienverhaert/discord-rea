/* Recovered shipped factory. Module 919706.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8401598..8401992
 * Raw property SHA-256: fe2971330973317f517d3eaec8eef33ab1e0e1a8a907ec590f6c0d989e62a1f7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(235986),
    a = n(200749),
    s = n(846830);
  function l(e) {
    let { mainText: t, supportingText: n, errorCodeText: l, children: o, size: d } = e;
    return (0, i.jsxs)(r.A, {
      className: s.z,
      justify: r.A.Justify.CENTER,
      align: r.A.Align.CENTER,
      direction: r.A.Direction.VERTICAL,
      children: [(0, i.jsx)(a.A, { header: t, description: n, errorCodeMessage: l, size: d }), o],
    });
  }
}
