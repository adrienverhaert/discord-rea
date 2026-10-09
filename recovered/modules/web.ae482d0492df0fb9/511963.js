/* Recovered shipped factory. Module 511963.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3134032..3135115
 * Raw property SHA-256: bb0a0adc4645f589237637ec087871792289ea860ab39234b0c77337c4947499
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(315069),
    r = n(202541);
  let a = {
    [r.Ff.DAY]: r.WT.DAY,
    [r.Ff.WEEK]: r.WT.DAY,
    [r.Ff.MONTH]: r.WT.MONTH,
    [r.Ff.YEAR]: r.WT.YEAR,
  };
  class s extends i.A {
    id;
    planIds;
    userUsageLimitInterval;
    userUsageLimitIntervalCount;
    userUsageLimit;
    amount;
    static createFromServer(e) {
      return new s({
        id: e.id,
        planIds: e.plan_ids,
        userUsageLimitInterval: e.user_usage_limit_interval,
        userUsageLimitIntervalCount: e.user_usage_limit_interval_count,
        userUsageLimit: e.user_usage_limit,
        amount: e.amount,
      });
    }
    constructor(e) {
      (super(),
        (this.id = e.id),
        (this.planIds = e.planIds),
        (this.userUsageLimitInterval = e.userUsageLimitInterval),
        (this.userUsageLimitIntervalCount = e.userUsageLimitIntervalCount),
        (this.userUsageLimit = e.userUsageLimit),
        (this.amount = e.amount));
    }
    get intervalType() {
      return this.userUsageLimitInterval;
    }
    get intervalCount() {
      return this.userUsageLimit;
    }
    get isMultiInterval() {
      return this.userUsageLimit > 1;
    }
    get applicableSubscriptionInterval() {
      return a[this.userUsageLimitInterval];
    }
    getApproximateDiscountAmountOff(e) {
      let t = parseFloat(this.amount);
      return Number.isNaN(t) ? null : Math.round(e * (1 - t / 100));
    }
  }
}
