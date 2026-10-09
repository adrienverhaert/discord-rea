/* Recovered shipped factory. Module 545934.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8761604..8762481
 * Raw property SHA-256: 95cf93a3fd459477c55b0bfe113e758b3b62c496d33a0cc59f4e93a1db27e5fa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(315069);
  class r extends i.A {
    id;
    subscriptionId;
    premiumGuildSubscription;
    canceled;
    cooldownEndsAt;
    subscription;
    static createFromServer(e, t) {
      return new r({
        id: e.id,
        subscriptionId: e.subscription_id,
        premiumGuildSubscription:
          null != e.premium_guild_subscription
            ? {
                id: e.premium_guild_subscription.id,
                guildId: e.premium_guild_subscription.guild_id,
              }
            : null,
        canceled: e.canceled,
        cooldownEndsAt: e.cooldown_ends_at,
        subscription: t,
      });
    }
    isOnCooldown() {
      return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now();
    }
    isAvailable() {
      return null == this.premiumGuildSubscription && !this.isOnCooldown();
    }
    constructor(e) {
      (super(),
        (this.id = e.id),
        (this.subscriptionId = e.subscriptionId),
        (this.premiumGuildSubscription = e.premiumGuildSubscription),
        (this.canceled = e.canceled),
        (this.cooldownEndsAt = e.cooldownEndsAt),
        (this.subscription = e.subscription));
    }
  }
  let a = r;
}
