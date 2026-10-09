/* Recovered shipped factory. Module 522305.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2871782..2872251
 * Raw property SHA-256: 78c7f8ad1f7e6bcb483663e5a5cb77c2b6f0710e23d9562b20d72e27f8300191
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => s });
  var i = n(308528),
    r = n(956549),
    a = n(859007);
  async function s(e) {
    let {
      appId: t,
      botId: n,
      analyticsLocations: s,
      customId: l,
      referrerId: o,
      commandOrigin: d,
    } = e;
    if ((0, a.y)({ applicationId: t, analyticsContext: { isStart: !0, analyticsLocations: s } }))
      return Promise.resolve(!0);
    let c = await i.A.openPrivateChannel({ recipientIds: n });
    return await (0, r.A)({
      targetApplicationId: t,
      channelId: c,
      analyticsLocations: s,
      customId: l,
      referrerId: o,
      commandOrigin: d,
    });
  }
}
