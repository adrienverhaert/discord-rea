/* Recovered shipped factory. Module 486487.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8261956..8262430
 * Raw property SHA-256: 0bfc2b2a3cb06e3645ffad29f3825f251b2cbbc0ea06ec591a1f43dd8e16f62b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(477782),
    s = n(964355),
    l = n(827343),
    o = n(192820),
    d = n(824744),
    c = n(660183);
  function u(e) {
    let t = (0, r.bG)([o.Ay], () => (0, d.M)(o.Ay.getInputVolume()));
    return (0, i.jsx)(a.aK, {
      id: "input",
      label: c.intl.string(c.t.OX2Bnr),
      interactive: !1,
      control: (n, r) =>
        (0, i.jsx)(s.i, {
          ...n,
          ref: r,
          value: t,
          onChange: (t) => l.default.setInputVolume((0, d.w)(t), { analyticsLocations: e }),
          "aria-label": c.intl.string(c.t.OX2Bnr),
        }),
    });
  }
}
