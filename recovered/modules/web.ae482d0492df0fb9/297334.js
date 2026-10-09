/* Recovered shipped factory. Module 297334.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3135771..3136289
 * Raw property SHA-256: c40c9eeac76fa3f1fe76d6d4079a6e127f54e05918b566ff80b75cf697d788a9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F7: () => d, Mt: () => c, PH: () => u, aw: () => o, hs: () => _ });
  var i = n(435558),
    r = n.n(i),
    a = n(994500),
    s = n(403362);
  function l(e, t) {
    return null != t ? t.has(e) : a.A.isBlockedOrIgnored(e);
  }
  function o(e, t) {
    return e.filter((e) => (0, s.Vq)(e)).filter((e) => !l(e.id, t));
  }
  function d(e, t) {
    return e.filter((e) => !l(e, t));
  }
  function c(e) {
    return e.filter((e) => !a.A.isBlockedOrIgnored(e.ownerId));
  }
  function u(e, t) {
    return e.some((e) => l(e, t));
  }
  function _(e) {
    return r()(e)
      .filter((e) => !a.A.isBlockedOrIgnored(e.userId))
      .keyBy("userId")
      .value();
  }
}
