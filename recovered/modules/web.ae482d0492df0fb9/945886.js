/* Recovered shipped factory. Module 945886.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8875294..8875861
 * Raw property SHA-256: c6707e8fa9202204db2a8b50e51fc5ef89c47cbf225b3a1d1e6fbfd53f99d40e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(73153),
    a = n(935208),
    s = n(734057);
  let l = {},
    o = l;
  function d() {
    a.default.keys(o).forEach((e) => {
      null == s.A.getChannel(e) && delete o[e];
    });
  }
  class c extends i.Ay.PersistedStore {
    static displayName = "CollapsedVoiceChannelStore";
    static persistKey = "collapsedChannels";
    initialize(e) {
      (this.waitFor(s.A), (o = e ?? l));
    }
    getState() {
      return o;
    }
    getCollapsed() {
      return o;
    }
    isCollapsed(e) {
      return o[e] || !1;
    }
  }
  let u = new c(r.h, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    CHANNEL_COLLAPSE: function (e) {
      let { channelId: t } = e;
      (o[t] ? delete o[t] : (o[t] = !0), (o = { ...o }));
    },
  });
}
