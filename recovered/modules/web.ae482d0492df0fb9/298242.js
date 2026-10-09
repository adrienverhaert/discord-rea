/* Recovered shipped factory. Module 298242.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8263140..8263667
 * Raw property SHA-256: 8884f9c3425061e6056ffee34f6582cae078f7aec7ffe3125131edb614951f03
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(17928),
    a = n(477782),
    s = n(964355),
    l = n(827343),
    o = n(192820),
    d = n(824744),
    c = n(723702),
    u = n(660183);
  function _(e) {
    let t = (0, r.bG)([o.Ay], () => (0, d.M)(o.Ay.getOutputVolume()));
    return (0, i.jsx)(a.aK, {
      id: "output",
      label: u.intl.string(u.t.eATD2B),
      interactive: !1,
      control: (n, r) =>
        (0, i.jsx)(s.i, {
          ...n,
          ref: r,
          value: t,
          maxValue: c.isPlatformEmbedded ? 200 : 100,
          onChange: (t) => l.default.setOutputVolume((0, d.w)(t), { analyticsLocations: e }),
          "aria-label": u.intl.string(u.t.eATD2B),
        }),
    });
  }
}
