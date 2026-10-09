/* Recovered shipped factory. Module 707606.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 785181..785487
 * Raw property SHA-256: 6438410687649e8f177e085f53076ea98e84df9d4c4dfdb6c0cb1450fe175cde
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(477900);
  n(582128);
  var r = n(174459);
  function a(e) {
    let t = (t) => {
      let { ref: n, ...a } = t;
      return (0, i.jsx)(r.AnalyticsContext.Consumer, {
        children: (t) => (0, i.jsx)(e, { ...a, ref: n, analyticsContext: t }),
      });
    };
    return ((t.displayName = `withAnalyticsContext(${e.displayName ?? e.name})`), t);
  }
}
