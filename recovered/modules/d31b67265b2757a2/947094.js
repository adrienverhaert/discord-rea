/* Recovered shipped factory. Module 947094.
 * Source: recovered/web/assets/d31b67265b2757a2.js
 * UTF-16 property offsets: 177902..178323
 * Raw property SHA-256: d97a363c4cc2e6846b3ea85caecf58bd1c822c28eef46f187ce971a816983d60
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { A: () => a });
  var i = t(17928),
    l = t(73153);
  let s = new Set();
  class r extends i.Ay.PersistedStore {
    static displayName = "ForumChannelAdminOnboardingGuideStore";
    static persistKey = "ForumChannelAdminOnboardingGuideStore";
    initialize(e) {
      null != e && (s = new Set(e));
    }
    hasHidden(e) {
      return s.has(e);
    }
    getState() {
      return s;
    }
  }
  let a = new r(l.h, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
      let { channelId: n, hide: t } = e;
      t ? s.add(n) : s.delete(n);
    },
  });
}
