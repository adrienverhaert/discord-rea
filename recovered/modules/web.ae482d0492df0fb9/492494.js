/* Recovered shipped factory. Module 492494.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5268771..5269393
 * Raw property SHA-256: 07c899134c70db6c73d82f2ea98d15ef8def16e33de32b56f379e10444b1ea18
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Eg: () => r, JN: () => s, kT: () => a });
  var i = n(384684);
  function r(e, t) {
    if (e?.roles == null || 0 === e.roles.length || null == t) return !1;
    let n = i.A.getSubscriptionRoles(t);
    return e.roles.some((e) => n.has(e));
  }
  function a(e) {
    if (e?.roles == null || 0 === e.roles.length || null == e.guildId) return !1;
    let t = i.A.getPurchasableSubscriptionRoles(e.guildId);
    return e.roles.some((e) => t.has(e));
  }
  function s(e, t) {
    if (e?.roles == null || 0 === e.roles.length || null == e.guildId) return !1;
    if (a(e)) {
      let n = i.A.getUserSubscriptionRoles(e.guildId),
        r = e.roles.some((e) => n.has(e)),
        a = t === e.guildId && i.A.getUserIsAdmin(e.guildId);
      if (!(r || a)) return !0;
    }
    return !1;
  }
}
