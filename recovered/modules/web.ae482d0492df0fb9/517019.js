/* Recovered shipped factory. Module 517019.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8941099..8941463
 * Raw property SHA-256: 52eb2f48f130fca46807272fbcfef8508d0ac0dd49cbfd47747c1000bbe42bab
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(506774),
    a = n(73153),
    s = n(597306);
  let l = "GuildNSFWAgreeStore",
    o = {};
  class d extends i.Ay.Store {
    static displayName = "GuildNSFWAgreeStore";
    initialize() {
      o = r.w.get(l) ?? o;
    }
    didAgree(e) {
      return !(null == e || (0, s.r)()) && (o[e] || !1);
    }
  }
  let c = new d(a.h, {
    GUILD_NSFW_AGREE: function (e) {
      let { guildId: t } = e;
      ((o[t] = !0), r.w.set(l, o));
    },
  });
}
