/* Recovered shipped factory. Module 823901.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4230239..4231296
 * Raw property SHA-256: a87fc287ef11f6b8459d2ce790f45eda5685ff04f953061cb755a294f1cdb793
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { y: () => h });
  var i = n(477900),
    r = n(877624),
    a = n(17928),
    s = n(417098),
    l = n(597770),
    o = n(688810),
    d = n(75678),
    c = n(412260),
    u = n(49999),
    _ = n(652215),
    E = n(660183),
    A = n(971656);
  function h(e) {
    let { markAsDismissed: t, className: n } = e,
      { analyticsLocations: h } = (0, o.Ay)(),
      f = (0, a.bG)([c.A], () => {
        let e = c.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR);
        return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
          ? null
          : e.properties.properties.giftReminderNagbar;
      });
    return null == f
      ? null
      : (0, i.jsxs)(s.$T, {
          color: s.Hv.PREMIUM_TIER_2,
          className: n,
          children: [
            (0, i.jsx)(s.PM, {
              onClick: () => t(u.i.USER_DISMISS),
              noticeType: _.kqX.GIFTING_PROMOTION_REMINDER,
            }),
            (0, i.jsx)(l.GiftIcon, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: A.ez,
            }),
            f.body,
            (0, i.jsx)(s.Z_, {
              onClick: () => {
                (0, d.A)({
                  isGift: !0,
                  initialPlanId: null,
                  analyticsLocations: h,
                  analyticsLocation: _.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
                  analyticsObject: { page: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION },
                });
              },
              noticeType: _.kqX.GIFTING_PROMOTION_REMINDER,
              children: E.intl.string(E.t.RzWDqY),
            }),
          ],
        });
  }
}
