/* Recovered shipped factory. Module 131168.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6772763..6773150
 * Raw property SHA-256: ef1cc3e91a5dc31e3b9a21b079fcfd847d4a08627bb8b32390106ac7645f45bf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => d });
  var i = n(17928),
    r = n(166403),
    a = n(354670),
    s = n(10392),
    l = n(432779),
    o = n(202541);
  function d() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
      t = a.A.isFetchingOffer(),
      n = a.A.hasFetchedOffer(),
      d = (0, l.A)(o.q),
      c = (0, l.A)(o.W7),
      u = (0, l.A)(o.Qo),
      _ = (0, l.A)(o.EG),
      E = d ?? c ?? u ?? _ ?? null;
    return e?.canceledAt == null ? null : null != E ? E : (t || n || (0, s.Vn)(), null);
  }
}
