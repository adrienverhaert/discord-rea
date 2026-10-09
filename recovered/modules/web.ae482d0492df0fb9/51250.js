/* Recovered shipped factory. Module 51250.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2699905..2700322
 * Raw property SHA-256: 333922aa1e252a27f7bc89b36a756f9b77a47fe5e1f6c3b96c60fa61e4c52edb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(873727);
  function r(e, t) {
    let n = {
      instance_id: e.compositeInstanceId ?? e.launchId ?? "",
      location_id: e.location?.id,
      launch_id: e.launchId,
      referrer_id: e.referrerId,
      custom_id: e.customId,
      ...(0, i._n)(),
    };
    return (
      null != e.proxyTicket && (n.discord_proxy_ticket = e.proxyTicket),
      t?.guild_id != null && t?.guild_id !== "" && (n.guild_id = t.guild_id),
      t?.id != null && t?.id !== "" && (n.channel_id = t.id),
      n
    );
  }
}
