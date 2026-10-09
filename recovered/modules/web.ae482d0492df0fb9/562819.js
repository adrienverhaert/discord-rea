/* Recovered shipped factory. Module 562819.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3825502..3826461
 * Raw property SHA-256: fd09098e26c3ba4d6c64b03a9574af0d326cdd63ddb18d0875289abbaa1f45b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => o, Te: () => l });
  var i = n(477900);
  n(582128);
  var r = n(778712),
    a = n(192308);
  n(515718);
  var s = n(190460);
  function l(e) {
    return "number" != typeof e ? (0, r.FT)(e) * s.Xq : e * s.Xq;
  }
  function o(e) {
    let {
      analyticsLocations: t,
      initialSelectedDecoration: r,
      guild: s,
      onClose: l,
      stackingBehavior: o,
      returnRef: d,
    } = e;
    (0, a.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([
          n.e("27682"),
          n.e("669130"),
          n.e("629972"),
          n.e("582012"),
          n.e("162775"),
          n.e("959311"),
          n.e("454048"),
          n.e("300699"),
          n.e("349619"),
          n.e("599666"),
          n.e("244560"),
          n.e("398125"),
          n.e("221825"),
          n.e("930758"),
          n.e("707826"),
          n.e("183776"),
          n.e("776195"),
          n.e("87306"),
          n.e("27773"),
          n.e("894747"),
          n.e("718573"),
          n.e("631825"),
          n.e("851243"),
          n.e("77473"),
          n.e("820683"),
          n.e("527462"),
          n.e("598421"),
          n.e("550019"),
          n.e("6721"),
        ]).then(n.bind(n, 40344));
        return (n) =>
          (0, i.jsx)(e, {
            ...n,
            onCloseModal: n.onClose,
            onClose: l,
            analyticsLocations: t,
            initialSelectedDecoration: r,
            guild: s,
            returnRef: d,
          });
      },
      { stackingBehavior: o },
    );
  }
}
