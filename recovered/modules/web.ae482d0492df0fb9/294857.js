/* Recovered shipped factory. Module 294857.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6141079..6141407
 * Raw property SHA-256: bf0d00523023060da74d578f89d88239177fd6f16f2561d8fa5df9ff28a75ed1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(90644),
    r = n(61330),
    a = n(960076),
    s = n(666176),
    l = n(823441),
    o = n(47407),
    d = n(818023);
  function c(e) {
    return (0, i.A)(e) && null != e.party && null != e.party.id
      ? s.HT.id
      : (0, a.A)(e) && null != e.url
        ? l.K + e.url
        : null != e.application_id && e.application_id !== d.$W
          ? e.application_id
          : (0, r.A)(e)
            ? o.W + e.name
            : null;
  }
}
