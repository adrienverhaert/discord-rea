/* Recovered shipped factory. Module 491001.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6100116..6100414
 * Raw property SHA-256: 0b0fd849312d953377475af54744d6f36179e504fe752b7b820ff7fe5e22cfcc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { K: () => a });
  let i = (0, n(945810).mj)({
      name: "2026-01-ios-push-notif-json-fix",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    }),
    r = null;
  function a() {
    return (
      null == r &&
        (r = i.getConfig({ location: "isIOSPushNotificationRawPayloadFixExperiment" }).enabled),
      r
    );
  }
}
