/* Recovered shipped factory. Module 885437.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2827812..2828017
 * Raw property SHA-256: 41b2c8f58b9092cb691fde348d6f741cfd6e4b6363acb941092fb3a36f7eb69f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => s });
  var i = n(976860),
    r = n(734057),
    a = n(332456);
  function s(e) {
    let t = (0, a.C)(r.A.getChannel(e), !0),
      n = t?.location ?? (0, i.PR)();
    return { ...(t ?? {}), ...(null != n ? { location: n } : {}) };
  }
}
