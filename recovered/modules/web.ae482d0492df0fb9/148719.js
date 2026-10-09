/* Recovered shipped factory. Module 148719.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3226721..3227048
 * Raw property SHA-256: 944bd9dfb33cbb1cd808abdd692d1752e4e5a697a37513721f0a6782c6797031
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(136722),
    r = n(95701),
    a = n(488926),
    s = n(818348);
  function l(e) {
    if (null == e) return !1;
    let { type: t } = e;
    if (null == e.guild_id || !r.JT.has(t)) return !1;
    if (e.isGuildVocal() && !a.MJ(s.xB.CONNECT, e)) return !0;
    let n = e.permissionOverwrites[e.guild_id];
    return null != n && i.zy(n.deny, s.xB.VIEW_CHANNEL);
  }
}
