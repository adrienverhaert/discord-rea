/* Recovered shipped factory. Module 820431.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4577798..4578113
 * Raw property SHA-256: d04e57bcab7f59b265bcddd6edde642a158388666b1b96fe5d9c114399207ba1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(439372),
    r = n(734057),
    a = n(473503),
    s = n(746080);
  class l extends i.A {
    actions = { CHANNEL_PRELOAD: this.handleChannelPreload };
    handleChannelPreload(e) {
      let { channelId: t } = e;
      if ((0, s.jq)(t)) return;
      let n = r.A.getChannel(t);
      null != n && n.isForumLikeChannel() && (0, a.kB)(n);
    }
  }
  let o = new l();
}
