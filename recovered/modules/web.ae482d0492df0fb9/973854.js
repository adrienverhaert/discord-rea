/* Recovered shipped factory. Module 973854.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2828018..2828543
 * Raw property SHA-256: 88a31f0d98b672554e1f789e09d4cfbd0ec49424e19bd564c7e3cd023cc495c7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(734057),
    r = n(311964),
    a = n(652215),
    s = n(746080);
  function l(e) {
    let { channelId: t } = e;
    switch (t) {
      case s.VV.CONJURE:
      case s.VV.CHANNEL_BROWSER:
      case s.VV.GUILD_HOME:
      case s.VV.GUILD_SHOP:
      case s.VV.GAME_SHOP:
      case s.VV.MEMBER_APPLICATIONS:
      case s.VV.ROLE_SUBSCRIPTIONS:
      case s.VV.CUSTOMIZE_COMMUNITY:
      case s.VV.MEMBER_SAFETY:
      case s.VV.GUILD_ONBOARDING:
      case s.VV.GUILD_BOOSTS:
        return;
    }
    (0, r.k)(a.HAw.CHANNEL_OPENED_CLICKSTREAM, {
      channel_id: t,
      channel_type: i.A.getChannel(t)?.type ?? a.rbe.UNKNOWN,
    });
  }
}
