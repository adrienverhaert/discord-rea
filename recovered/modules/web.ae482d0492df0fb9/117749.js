/* Recovered shipped factory. Module 117749.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7698165..7698979
 * Raw property SHA-256: 213d66212b2f759a3d3f6f9a8a397a647177b8e60a5ad5baabf78366b6f94b32
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(439372),
    r = n(30793),
    a = n(67480),
    s = n(828596),
    l = n(918467),
    o = n(652215),
    d = n(202541);
  class c extends i.A {
    actions = {
      SKU_PURCHASE_SUCCESS: this.onPurchaseSuccess.bind(this),
      GIFT_CODE_REDEEM_SUCCESS: this.onGiftCodeRedeemSuccess.bind(this),
      PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: this.onSubscriptionChange.bind(this),
      BILLING_SUBSCRIPTION_UPDATE_SUCCESS: this.onSubscriptionChange.bind(this),
    };
    onPurchaseSuccess(e) {
      let { skuId: t } = e;
      this.onCollectiblesAcquired(t);
    }
    onGiftCodeRedeemSuccess(e) {
      let { code: t } = e;
      this.onCollectiblesAcquired(r.A.get(t)?.skuId);
    }
    onCollectiblesAcquired(e) {
      if (null == e || a.A.get(e)?.productLine !== o.EZt.COLLECTIBLES) return;
      let t = l.A.getPromotionsForApplication(o.FYj);
      null != t && 0 !== t.length && (0, s.rd)([o.FYj]);
    }
    onSubscriptionChange() {
      (0, s.rd)([o.FYj, d.tv]);
    }
  }
  let u = new c();
}
