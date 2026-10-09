/* Recovered shipped factory. Module 123973.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7529689..7530051
 * Raw property SHA-256: ebaed615ec9955cff00f1cc08bcf0410bd91ed732347269ed0245c79e38e1af2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Ay: () => o, lI: () => l }), n(17928));
  var i = n(734057),
    r = n(576705),
    a = n(309010),
    s = n(652215);
  function l() {
    let e = a.Ay.getVoiceChannelId();
    return o(i.A.getChannel(e));
  }
  function o(e) {
    if (null == e) return !1;
    if (s.kvI.CALLABLE.has(e.type)) return !0;
    let t = r.A.can(s.xBc.USE_SOUNDBOARD, e),
      n = r.A.can(s.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
  }
}
