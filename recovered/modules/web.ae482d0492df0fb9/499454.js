/* Recovered shipped factory. Module 499454.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6885163..6886232
 * Raw property SHA-256: b56511b7b61013001c22090ea0e959508ccd1e08b01927067629895fa9f87f47
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { h: () => _ });
  var i = n(477900);
  n(582128);
  var r = n(192308),
    a = n(287809),
    s = n(166403),
    l = n(625494),
    o = n(158045),
    d = n(598653),
    c = n(202541),
    u = n(652215);
  function _(e) {
    let { processedCode: t, channelContext: _, customGiftMessage: E, giftInfo: A } = e,
      h = !1,
      f = null,
      I = a.default.getCurrentUser(),
      p = (0, o.CC)(I?.premiumType, c.PremiumTypes.TIER_0);
    (0, r.openModalLazy)(
      async () => {
        let { default: e } = await Promise.all([
          n.e("489020"),
          n.e("419121"),
          n.e("162775"),
          n.e("60882"),
          n.e("919789"),
          n.e("183910"),
          n.e("76428"),
          n.e("517888"),
          n.e("811133"),
          n.e("910471"),
          n.e("477175"),
          n.e("198329"),
          n.e("77473"),
          n.e("523276"),
          n.e("25279"),
          n.e("812042"),
          n.e("307200"),
        ]).then(n.bind(n, 361845));
        return (n) =>
          (0, i.jsx)(e, {
            code: t,
            channelContext: _,
            customGiftMessage: E,
            emojiName: A?.emoji?.name,
            soundId: A?.sound?.id,
            onComplete: (e, t) => {
              ((f = e),
                t &&
                  ((h = t),
                  e.isSubscription && null == s.A.getPremiumSubscription(!1) && (0, d.o)(!0)));
            },
            ...n,
          });
      },
      {
        onCloseCallback: () => {
          h &&
            null != f &&
            !p &&
            f.isSubscription &&
            f?.subscriptionPlan?.premiumSubscriptionType === c.PremiumTypes.TIER_2 &&
            l._.dispatch(u.jej.PREMIUM_SUBSCRIPTION_CREATED);
        },
      },
    );
  }
}
