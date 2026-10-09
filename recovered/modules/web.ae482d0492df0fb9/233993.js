/* Recovered shipped factory. Module 233993.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7646295..7646745
 * Raw property SHA-256: 3ee6bb430ba208feb72eaeda36cbd1ef420dc3fc5bc3214c7d42afb57f0c3cef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Gk: () => o, Kn: () => l, QY: () => a, Uu: () => d, Zq: () => s });
  var i = n(136722),
    r = n(652215);
  let a = i.kg(r.xBc.MANAGE_CHANNELS, r.xBc.MUTE_MEMBERS, r.xBc.MOVE_MEMBERS);
  i.kg(r.xBc.MANAGE_CHANNELS, r.xBc.MANAGE_ROLES);
  let s = new Set([r.xBc.SPEAK, r.xBc.REQUEST_TO_SPEAK, r.xBc.USE_VAD]),
    l = i.kg(a, r.xBc.MANAGE_ROLES),
    o = i.kg(r.xBc.CONNECT, r.xBc.VIEW_CHANNEL),
    d = i.kg(o, r.xBc.READ_MESSAGE_HISTORY, r.xBc.REQUEST_TO_SPEAK, r.xBc.SPEAK, r.xBc.USE_VAD);
}
