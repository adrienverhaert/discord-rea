/* Recovered shipped factory. Module 610101.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5453905..5454294
 * Raw property SHA-256: 136c77f5bbd1bf0b87b07413e51c26b67e65877bd02b493b50b608235df28325
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { W: () => d, h: () => o });
  var i = n(202384),
    r = n(513461),
    a = n(212455),
    s = n(357566),
    l = n(652215);
  function o(e) {
    return (
      e.features?.includes(l.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
      e.features?.includes(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)
    );
  }
  function d(e) {
    let t = a.A.getRequest(e);
    null != t && t.applicationStatus !== r.B5.STARTED ? (0, s.q)(e) : (0, i.Ze)(e);
  }
}
