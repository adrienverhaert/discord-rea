/* Recovered shipped factory. Module 489719.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4620907..4621667
 * Raw property SHA-256: 580a7c66f3b720f8497eaccb06a2dec14afc6945c6805af4376e586fce242c60
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(873727),
    r = n(284009),
    a = n.n(r),
    s = n(991690);
  function l(e, t) {
    var n;
    let r;
    return {
      instance_id: "example-cl-instance",
      platform: t,
      discord_proxy_ticket: e.data.proxyTicket,
      ...((n = e.data),
      (r = {}),
      n.launch?.customId != null && (r.custom_id = n.launch.customId),
      n.launch?.referrerId != null && (r.referrer_id = n.launch.referrerId),
      r),
      ...(0, i._n)(),
      ...(function (e) {
        let t = String(e.type);
        switch (e.type) {
          case s.U.MAIN:
          case s.U.OVERLAY:
            return { surface: t };
          case s.U.APP_CHANNEL:
          case s.U.VOICE_CHANNEL:
            let n = { surface: t, channel_id: e.channelId };
            return (null != e.guildId && (n.guild_id = e.guildId), n);
          case s.U.INTERACTION_MODAL:
            return (
              a()(!1, "A Frame cannot be launched at an INTERACTION_MODAL surface"),
              { surface: t }
            );
          default:
            return { surface: t };
        }
      })(e.surface),
    };
  }
}
