/* Recovered shipped factory. Module 772366.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6927711..6928170
 * Raw property SHA-256: 519708b6df64f0e964840972156f06b12fe096309a152dd2f1f4c508819db112
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(71393);
  function s(e) {
    let { onCloseCallback: t, analyticsLocations: s, ...l } = e;
    (0, r.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([
          n.e("935205"),
          n.e("677668"),
          n.e("766901"),
          n.e("256430"),
        ]).then(n.bind(n, 39613));
        return (t) =>
          (0, i.jsx)(e, {
            ...t,
            ...l,
            analyticsLocations: s,
            guildCount: a.A.getGuildCount(),
            "aria-labelledby": "nitro-guild-cap-upsell",
          });
      },
      { onCloseCallback: t },
    );
  }
}
