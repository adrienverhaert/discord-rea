/* Recovered shipped factory. Module 271683.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3197562..3197881
 * Raw property SHA-256: ad69c87feeb4545e8f1076efddc0339187d74c78f77a18ccf94e252f2062eb65
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(477900),
    r = n(192308),
    a = n(136523);
  function s(e) {
    let { channel: t, sourceAnalyticsLocations: s } = e;
    (0, r.openModalLazy)(
      async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
        return (n) => (0, i.jsx)(e, { channel: t, sourceAnalyticsLocations: s, ...n });
      },
      { modalKey: a.m },
    );
  }
}
