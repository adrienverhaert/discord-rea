/* Recovered shipped factory. Module 350701.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4660470..4660831
 * Raw property SHA-256: c44de004267404943825fd15b5e9fa832a22a01c98f74b419a00c0e251576932
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(734057),
    r = n(763827),
    a = n(528767),
    s = n(174459),
    l = n(652215);
  function o(e, t, n) {
    s.default.track(l.HAw.VOICE_CALL_TRANSFER, {
      source_platform: null != n ? a.A.getSessionById(n)?.clientInfo.os : "discord_client",
      guild_id: i.A.getChannel(e)?.guild_id,
      channel_id: e,
      rtc_connection_id: r.A.getRTCConnectionId(),
      target_platform: t,
    });
  }
}
