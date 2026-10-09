/* Recovered shipped factory. Module 998418.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6798325..6799887
 * Raw property SHA-256: 8368a65b7bb82d8e9168adf3411d0845ff664af14a9f7c795836ecda44324673
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => u, dy: () => d, jJ: () => c });
  var i = n(17928),
    r = n(71393),
    a = n(645619),
    s = n(568065),
    l = n(652215),
    o = n(628049);
  function d(e) {
    return e.type !== s.b_.INACTIVE;
  }
  function c(e, t) {
    let n = (0, i.bG)([r.A], () => r.A.getGuild(e)),
      d = (0, i.bG)([a.A], () => a.A.getStateForGuild(e)),
      c = n?.features?.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE) ?? !1;
    return t.map((e) =>
      (function (e) {
        var t, i;
        if (e.skuId === o.W5)
          return {
            type: n?.features?.has(l.GuildFeatures.GAME_SERVERS)
              ? s.b_.POWERUP_ACTIVATED
              : s.b_.INACTIVE,
            powerup: e,
            sourceEntitlement: void 0,
            sourcePowerup: void 0,
          };
        let {
            isActiveFromLevel: r,
            levelEntitlement: a,
            levelPowerup: u,
          } = (function (e) {
            if (null == e || null == n || null == d)
              return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
            let t = s.wr[e.skuId];
            if (null == t)
              return { isActiveFromLevel: !1, levelEntitlement: void 0, levelPowerup: void 0 };
            let i = n.premiumTier >= t,
              r = s.a8[t];
            return {
              isActiveFromLevel: i,
              levelEntitlement: null != r ? d.unlockedPowerups?.[r] : void 0,
              levelPowerup: null != r ? d.allPowerups?.[r] : void 0,
            };
          })(e),
          _ = ((t = e), c && s.o2.has(t.skuId)),
          E = ((i = e), d?.unlockedPowerups?.[i.skuId] ?? null),
          A = { type: s.b_.INACTIVE, powerup: e, sourceEntitlement: void 0, sourcePowerup: void 0 };
        return (
          r
            ? (A = {
                type: s.b_.LEVEL_ACTIVATED,
                powerup: e,
                sourceEntitlement: a,
                sourcePowerup: u,
              })
            : _
              ? (A = {
                  type: s.b_.TIER_OVERRIDE_ACTIVATED,
                  powerup: e,
                  sourceEntitlement: void 0,
                  sourcePowerup: e,
                })
              : null != E &&
                (A = {
                  type: s.b_.POWERUP_ACTIVATED,
                  powerup: e,
                  sourceEntitlement: E,
                  sourcePowerup: e,
                }),
          A
        );
      })(e),
    );
  }
  function u(e, t) {
    let n = c(e, null == t ? [] : [t]);
    return n.length <= 0
      ? { type: s.b_.INACTIVE, sourceEntitlement: void 0, sourcePowerup: void 0 }
      : n[0];
  }
}
