/* Recovered shipped factory. Module 900019.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4456614..4457758
 * Raw property SHA-256: ff2a47944d0b990de9732f1ba963f64a3e30cb8f9d420eacf3e903616e503754
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => A });
  var r = n(17928),
    a = n(73153),
    s = n(927813),
    l = n(935208);
  let o = (0, n(945810).mj)({
      name: "2025-09-sensitive-content-self-harm",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    }),
    d = 14 * s.A.Millis.DAY,
    c = Object.freeze([]),
    u = {},
    _ = {};
  class E extends r.Ay.Store {
    static displayName = "FalsePositiveStore";
    getFpMessageInfo(e) {
      return u[e];
    }
    getChannelFpInfo(e) {
      return _[e] ?? c;
    }
    canSubmitFpReport(e) {
      let t = u[e];
      return null != t && !t.reportSubmit && l.default.age(t.messageId) < d;
    }
    get validContentScanVersion() {
      return o.getConfig({ location: "ExplicitMediaStore.validContentScanVersion" }).enabled
        ? (i ?? 5)
        : Math.min(i ?? 4, 4);
    }
  }
  let A = new E(a.h, {
    LOGOUT: function () {
      ((u = {}), (_ = {}));
    },
    CONNECTION_OPEN: function (e) {
      let { explicitContentScanVersion: t } = e;
      ((i = t), (u = {}), (_ = {}));
    },
    MESSAGE_EXPLICIT_CONTENT_FP_CREATE: function (e) {
      let { messageId: t, channelId: n, attachments: i } = e,
        r = { messageId: t, channelId: n, attachments: i, reportSubmit: !1 },
        a = _[n] ?? c;
      ((_[n] = [...a, r]), (u[t] = r));
    },
    MESSAGE_EXPLICIT_CONTENT_FP_SUBMIT: function (e) {
      let { messageId: t, channelId: n } = e,
        i = _[n];
      null != i &&
        ((_[n] = i.map((e) => (e.messageId === t ? { ...e, reportSubmit: !0 } : e))),
        (u[t] = { ...u[t], reportSubmit: !0 }));
    },
  });
}
