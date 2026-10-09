/* Recovered shipped factory. Module 24641.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4779158..4779619
 * Raw property SHA-256: 494dce6e086abcfe9726f0a5d4f77f774e9d7226842307c8eb56d778effae41e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    return {
      id: e.id,
      name: e.name,
      regionId: e.region_id,
      regionName: e.region_name,
      planId: e.sku_id,
      planName: e.plan_name,
      onlineConnectionsCount: e.players_count ?? 0,
      maxConnectionsCount: e.max_players_count,
      serverIP: e.ip,
      port: e.port,
      entitlementId: e.entitlement_id,
      subscriptionId: e.subscription_id,
      providerType: e.provider_type,
      gameServerPanelUrl: e.provider_url,
      status: e.status,
      gameId: e.game_id,
      gameConfig: e.game_config,
    };
  }
  n.d(t, { A: () => i });
}
