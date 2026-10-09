/* Recovered shipped factory. Module 551851.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5415418..5415928
 * Raw property SHA-256: 4bf795af859f6a3ce725b88b2a0d27ef45cfb4433da33e2c446fcd8d8170b05e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = {};
  function s(e) {
    let { guildId: t, expand: n } = e;
    n ? (a[t] = !0) : delete a[t];
  }
  class l extends i.Ay.PersistedStore {
    static displayName = "ChannelListVoiceCategoryStore";
    static persistKey = "ChannelListVoiceCategoryStore";
    initialize(e) {
      a = e ?? {};
    }
    isVoiceCategoryExpanded(e) {
      return (null != e && a[e]) ?? !1;
    }
    isVoiceCategoryCollapsed(e) {
      return !this.isVoiceCategoryExpanded(e);
    }
    getState() {
      return a;
    }
  }
  let o = new l(r.h, { VOICE_CATEGORY_COLLAPSE: s, VOICE_CATEGORY_EXPAND: s });
}
