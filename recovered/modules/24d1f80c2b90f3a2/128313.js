/* Recovered shipped factory. Module 128313.
 * Source: recovered/web/assets/24d1f80c2b90f3a2.js
 * UTF-16 property offsets: 2354..3317
 * Raw property SHA-256: 6d274a740edd2cc2bc0d1797748b73fdd1920c394400a155bd4f1e9d0678a896
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => A });
  var l = n(582128),
    u = n(17928),
    r = n(993408),
    i = n(475669),
    o = n(645619);
  let s = (0, n(240921).Ay)({
    name: "2026-02-expiring-powerup-coachmark",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  function A(e) {
    let t = (0, u.bG)([o.A], () => o.A.getStateForGuild(e)),
      n = (0, u.bG)([i.A], () => i.A.getStateForGuild(e)),
      A = s.useConfig({ location: "useFeaturedExpiringPowerup" }).enabled;
    return l.useMemo(() => {
      if (!A) return;
      let e = [
        ...Object.values(t?.unlockedPowerups ?? {}),
        ...Object.values(n?.entitlements ?? {}),
      ].filter((e) => null != e.ends_at && (e.metadata?.num_expiring_boosts ?? 0) > 0);
      if (0 === e.length) return;
      let l = e.reduce((e, t) => (t.ends_at > e.ends_at ? t : e)),
        u = t?.allPowerups[l.sku_id]?.title ?? null,
        i = l.sku?.tenant_metadata?.guild_monetization?.game_server != null;
      if (null !== u || i)
        return {
          name: u,
          daysUntilExpiry: Math.max(0, (0, r.WU)(new Date(l.ends_at))),
          numExpiringBoosts: l.metadata?.num_expiring_boosts ?? 0,
          isGameServer: i,
          skuId: l.sku_id,
        };
    }, [t, n, A]);
  }
}
