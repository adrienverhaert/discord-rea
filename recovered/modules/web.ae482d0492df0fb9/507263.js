/* Recovered shipped factory. Module 507263.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4927083..4927482
 * Raw property SHA-256: 1cf1e755cb88e325ed05ce1e4f7c9052629e682fcd9e70581a4c5c0fbb1bef48
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { B: () => c }), n(142703), n(321073));
  var i = n(73153),
    r = n(426620),
    a = n(595528);
  let s = [];
  function l() {
    return null != r.A.getType();
  }
  function o() {
    l() || (s.forEach((e) => d(e)), (s = []));
  }
  function d(e) {
    setImmediate(() => e());
  }
  function c(e) {
    a.A.isConnectedOrOverlay() && !l() ? d(e) : s.push(e);
  }
  (i.h.subscribe("CONNECTION_OPEN", o),
    i.h.subscribe("CONNECTION_RESUMED", o),
    i.h.subscribe("NUF_COMPLETE", o));
}
