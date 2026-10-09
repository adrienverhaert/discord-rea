/* Recovered shipped factory. Module 324050.
 * Source: recovered/web/assets/cca67dc72c2397fa.js
 * UTF-16 property offsets: 95..674
 * Raw property SHA-256: 92085a94ae8eb302e9991507be2ab5e15eeca519ed08d47d5b0772879fda03ac
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (i, e, t) {
  let s;
  t.d(e, { A: () => d });
  var a = t(17928),
    n = t(73153);
  let l = { lastGuildDismissedTime: {} };
  class c extends a.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
      let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
      s = i;
    }
    getUserAgnosticState() {
      return s;
    }
    getLastGuildDismissedTime(i) {
      return s.lastGuildDismissedTime[i];
    }
  }
  let d = new c(n.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (i) {
      let { guildId: e } = i;
      s.lastGuildDismissedTime[e] = Date.now();
    },
  });
}
