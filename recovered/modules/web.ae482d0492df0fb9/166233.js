/* Recovered shipped factory. Module 166233.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5197277..5197987
 * Raw property SHA-256: 760cb59a252b5c898abe89d097798d24727429a6a79eebb4f50859a98d1858ba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ob: () => s, Oe: () => a });
  var i = n(11541);
  let r = {};
  function a(e) {
    return (null == r[e] && (r[e] = {}), r[e]);
  }
  function s(e, t) {
    if (0 === t.length) return !1;
    let n = a(e);
    return (
      t.forEach((e) => {
        let t = n[e.userId],
          r = e.joinSourceType ?? t?.joinSourceType ?? null;
        ((null == r || r === i.UP.UNSPECIFIED) && null != e.sourceInviteCode && (r = i.UP.INVITE),
          (n[e.userId] = {
            userId: e.userId,
            sourceInviteCode: e.sourceInviteCode ?? t?.sourceInviteCode ?? null,
            joinSourceType: r,
            inviterId: e.inviterId ?? t?.inviterId ?? null,
            integrationType: e.integrationType ?? t?.integrationType ?? null,
            joinSourceApplicationId:
              e.joinSourceApplicationId ?? t?.joinSourceApplicationId ?? null,
            joinSourceChannelId: e.joinSourceChannelId ?? t?.joinSourceChannelId ?? null,
          }));
      }),
      !0
    );
  }
}
