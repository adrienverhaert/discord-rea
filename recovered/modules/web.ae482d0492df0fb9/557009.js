/* Recovered shipped factory. Module 557009.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8756771..8759182
 * Raw property SHA-256: a31f83f95ac671e6ebf63b1122a85d67fa8a485d8c43ee6dab8562ac7e4ccf68
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(913290),
    r = n(315069),
    a = n(32731),
    s = n(158045),
    l = n(889227),
    o = n(652215);
  class d extends r.A {
    id;
    skuId;
    applicationId;
    user;
    userId;
    gifterId;
    type;
    branches;
    startsAt;
    endsAt;
    subscriptionId;
    subscriptionPlanId;
    parentId;
    consumed;
    giftCodeBatchId;
    giftStyle;
    guildId;
    deleted;
    sourceType;
    fulfillmentStatus;
    orbsReward;
    static createFromServer(e) {
      return new d({
        id: e.id,
        skuId: e.sku_id,
        applicationId: e.application_id,
        user: null != e.user ? new l.A(e.user) : null,
        userId: e.user_id,
        gifterId: e.gifter_user_id,
        type: e.type,
        branches: e.branches ?? [],
        startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
        endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
        subscriptionId: e.subscription_id,
        subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : null,
        parentId: null != e.parent_id ? e.parent_id : null,
        consumed: null != e.consumed ? e.consumed : null,
        giftCodeBatchId: e.gift_code_batch_id ?? null,
        giftStyle: e.gift_style,
        guildId: e.guild_id,
        deleted: e.deleted,
        sku: null != e.sku ? a.A.createFromServer(e.sku) : null,
        sourceType: e.source_type ?? null,
        fulfillmentStatus: e.fulfillment_status ?? null,
        orbsReward: e.metadata?.orbs_reward ?? null,
      });
    }
    get isGiftable() {
      return this.type === o.zF_.USER_GIFT && null == this.gifterId;
    }
    constructor(e) {
      (super(),
        (this.id = e.id),
        (this.skuId = e.skuId),
        (this.applicationId = e.applicationId),
        (this.user = e.user),
        (this.userId = e.userId),
        (this.gifterId = e.gifterId),
        (this.type = e.type),
        (this.branches = e.branches),
        (this.startsAt = e.startsAt),
        (this.endsAt = e.endsAt),
        (this.subscriptionId = e.subscriptionId),
        (this.subscriptionPlanId = e.subscriptionPlanId),
        (this.parentId = e.parentId),
        (this.consumed = e.consumed),
        (this.giftCodeBatchId = e.giftCodeBatchId),
        (this.giftStyle = e.giftStyle),
        (this.guildId = e.guildId),
        (this.deleted = e.deleted),
        (this.sourceType = e.sourceType),
        (this.fulfillmentStatus = e.fulfillmentStatus),
        (this.orbsReward = e.orbsReward));
    }
    isValid(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if (this.isGiftable || this.deleted) return !1;
      if (this.type === o.zF_.PREMIUM_SUBSCRIPTION) {
        let n = t.get(this.skuId);
        if ((null != n && !n.premium) || !s.Ay.canInstallPremiumApplications(e)) return !1;
      }
      let i = new Date();
      if ((null != this.startsAt && i < this.startsAt) || (null != this.endsAt && i >= this.endsAt))
        return !1;
      if (null != n) {
        if (0 === this.branches.length) {
          if (this.applicationId !== n) return !1;
        } else if (!this.branches.includes(n)) return !1;
      }
      return !0;
    }
    isFulfilled() {
      return this.fulfillmentStatus === i.w.FULFILLED;
    }
    isFulfillmentFailed() {
      return this.fulfillmentStatus === i.w.FULFILLMENT_FAILED;
    }
  }
}
