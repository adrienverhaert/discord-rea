/* Recovered shipped factory. Module 881520.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4559297..4559748
 * Raw property SHA-256: b1c2a39d3b3a2454d40102c6da692dadd48ff7eb721a04730f42c9d210075080
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153),
    a = n(409181);
  let s = {};
  class l extends i.Ay.Store {
    static displayName = "FeedbackOverrideStore";
    static persistKey = "feedbackOverrides";
    initialize() {}
    getFeedbackConfig(e) {
      return s[e];
    }
  }
  let o = new l(r.h, {
    FEEDBACK_OVERRIDE_SET: function (e) {
      let { feedbackType: t, cooldown: n, chance: i } = e;
      s[t] = { ...a.u[t], cooldown: n, chance: i };
    },
    FEEDBACK_OVERRIDE_CLEAR: function (e) {
      let { feedbackType: t } = e;
      delete s[t];
    },
  });
}
