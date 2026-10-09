/* Recovered shipped factory. Module 325909.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3170680..3171200
 * Raw property SHA-256: 3f79ab42c2d2300c2f6ec05daa786ec8b53d99d66f7e10d06134482745639408
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { o: () => d, p: () => c });
  var i = n(17928),
    r = n(280450),
    a = n(470710),
    s = n(734057),
    l = n(994500),
    o = n(652215);
  function d(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getChannel(t)),
      a = (0, i.bG)([r.default], () => r.default.getId() === e.id),
      d = (0, i.bG)([l.A], () => l.A.isFriend(e.id)),
      c = n?.type,
      u = null != c && o.kvI.CALLABLE.has(c);
    return d && !a && !e.bot && !e.system && !e.isProvisional && u;
  }
  function c(e) {
    if (!o.kvI.CALLABLE.has(e.type)) return !1;
    let t = a.A.getCall(e.id);
    return null != t && null != t.messageId && !a.A.isCallUnavailable(e.id);
  }
}
