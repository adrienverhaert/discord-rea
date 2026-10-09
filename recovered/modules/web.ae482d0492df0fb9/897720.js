/* Recovered shipped factory. Module 897720.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6304681..6305270
 * Raw property SHA-256: 1adba541a08c1d47da32fc3a2c9b85ba00fb0746bc53a8fd00113b2147362370
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Du: () => _,
    IV: () => E,
    In: () => o,
    ZO: () => u,
    cv: () => c,
    dO: () => d,
    zb: () => l,
  });
  var i,
    r,
    a,
    s = n(652215),
    l =
      (((i = {})[(i.GENERIC = 0)] = "GENERIC"),
      (i[(i.TEXT = 1)] = "TEXT"),
      (i[(i.INCOMING_CALL = 2)] = "INCOMING_CALL"),
      (i[(i.NUDGE = 3)] = "NUDGE"),
      i),
    o =
      (((r = {})[(r.NORMAL = 0)] = "NORMAL"),
      (r[(r.HIGH = 1)] = "HIGH"),
      (r[(r.URGENT = 2)] = "URGENT"),
      r);
  function d(e) {
    return e?.type === s.uss.GO_LIVE;
  }
  function c(e) {
    return e.type === s.uss.VIDEO;
  }
  function u(e) {
    return e.type === s.uss.VOICE_V3;
  }
  function _(e) {
    return e?.type === s.uss.CONJURE && "string" == typeof e.meta.applicationId;
  }
  var E = (((a = {}).HORIZONTAL = "horizontal"), (a.VERTICAL = "vertical"), a);
}
