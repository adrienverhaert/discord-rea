/* Recovered shipped factory. Module 578623.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5879953..5880915
 * Raw property SHA-256: 0c13f517c8dbe283968c44e0e7d77d8fcf17a64f172c87c633ab33b11a4029a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(17928),
    r = n(73153),
    a = n(717125),
    s = n(280450),
    l = n(734057),
    o = n(935208);
  n(702841);
  let d = new Set();
  class c extends i.Ay.Store {
    initialize() {
      this.waitFor(s.default, l.A, a.A);
    }
    static displayName = "MediaPostSharePromptStore";
    shouldDisplayPrompt(e) {
      return d.has(e);
    }
  }
  let u = new c(r.h, {
    CONNECTION_OPEN: function () {
      d = new Set();
    },
    MESSAGE_CREATE: function (e) {
      if (e.isPushNotification) return;
      let t = e.message;
      if (
        s.default.getId() !== t.author?.id ||
        !(function (e, t) {
          if (e !== o.default.castChannelIdAsMessageId(t)) return !1;
          let n = l.A.getChannel(t);
          if (null == n || !n.isForumPost()) return !1;
          let i = l.A.getChannel(n.parent_id);
          return i?.isMediaChannel() === !0;
        })(t.id, t.channel_id)
      )
        return;
      let n = l.A.getChannel(t.channel_id);
      null == n ||
        null == n.parent_id ||
        (a.A.isChannelGated(n.guild_id, n.parent_id) &&
          d.add(o.default.castMessageIdAsChannelId(e.message.id)));
    },
    DISMISS_MEDIA_POST_SHARE_PROMPT: function (e) {
      let { threadId: t } = e;
      d.delete(t);
    },
    LOGOUT: function (e) {
      d.clear();
    },
  });
}
