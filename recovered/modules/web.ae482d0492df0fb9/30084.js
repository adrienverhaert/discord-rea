/* Recovered shipped factory. Module 30084.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6880498..6881062
 * Raw property SHA-256: cc6400f506cf0138085efec1a52e9c3da56dd4c495f870d090382c9b6ced6f5f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { D: () => l });
  var i = n(477900),
    r = n(192308),
    a = n(174459),
    s = n(652215);
  function l(e) {
    let { analyticsLocations: t, displayProfile: l, location: o } = e;
    (null == o && (o = t[t.length - 1]),
      a.default.track(s.HAw.OPEN_MODAL, {
        type: "Tiered Tenure Badge Details",
        location_stack: t,
        location: o,
        source: o,
      }),
      (0, r.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
          n.e("463143"),
          n.e("101801"),
          n.e("77333"),
          n.e("486792"),
          n.e("662355"),
          n.e("881379"),
          n.e("313052"),
          n.e("165836"),
          n.e("277641"),
        ]).then(n.bind(n, 384048));
        return (t) => (0, i.jsx)(e, { ...t, displayProfile: l });
      }));
  }
}
