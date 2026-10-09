/* Recovered shipped factory. Module 930839.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8813581..8814501
 * Raw property SHA-256: 0a659921f05995a9076ef9eda711cd80ffc5ede30d592225bd4a03fb7caf528d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(562708),
    r = n(167789),
    a = n(73153),
    s = n(434797),
    l = n(390595),
    o = n(174459),
    d = n(280450),
    c = n(652215);
  let u = (0, i.analyticsTrackingStoreMaker)({
    dispatcher: a.h,
    actionHandler: {
      CONNECTION_OPEN: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
      OVERLAY_INITIALIZE: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
      CURRENT_USER_UPDATE: (e) => i.AnalyticsActionHandlers.handleConnectionOpen(e),
      CONNECTION_CLOSED: () => i.AnalyticsActionHandlers.handleConnectionClosed(),
      FINGERPRINT: () => i.AnalyticsActionHandlers.handleFingerprint(),
      TRACK: (e) => i.AnalyticsActionHandlers.handleTrack(e),
      SET_ANALYTICS_TOKEN: (e) => i.AnalyticsActionHandlers.handleSetAnalyticsToken(e),
    },
    TRACKING_URL: c.Rsh.TRACK,
    waitFor: [d.default],
    getFingerprint: d.default.getFingerprint,
    getSessionId: () => (0, l.Ht)().then((e) => ({ sessionId: e?.uuid })),
    getLaunchSignature: () => o.launchSignature,
    scheduleWhenIdle: r.O,
    sendUnloadRequest: s.L,
  });
}
