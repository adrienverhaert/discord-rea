/* Recovered shipped factory. Module 330001.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3227836..3228110
 * Raw property SHA-256: 633627a4ad64a20f39b88f8640d6cd9d03941e92361bf994a53eefcbaed4073b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { W: () => s });
  var i = n(734057),
    r = n(174459),
    a = n(652215);
  function s(e) {
    var t;
    let n;
    r.default.track(a.HAw.WAVE_CTA_CLICKED, {
      channel_id: e.channelId,
      source: e.source,
      dm_has_message_history:
        ((t = e.channelId), (n = i.A.getChannel(t)), n?.lastMessageId != null),
    });
  }
}
