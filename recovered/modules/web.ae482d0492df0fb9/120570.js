/* Recovered shipped factory. Module 120570.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4040637..4041573
 * Raw property SHA-256: 0771fb8f53e90ef48d88077d5e755405cea45a198fd57daad6185eb425814978
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(73153),
    a = n(181041),
    s = n(987741);
  let l = null;
  class o extends i.Ay.Store {
    static displayName = "SelectedConversationStore";
    initialize() {
      this.syncWith([a.A, s.A], () => null != l);
    }
    getSelectedConversationId(e) {
      return l?.channelId === e ? l.conversationId : null;
    }
    getSelectedConversation(e) {
      let t = this.getSelectedConversationId(e);
      return null == t
        ? null
        : (a.A.getConversationMetadata(e, t)?.conversation ?? s.A.getConversation(t));
    }
  }
  let d = new o(r.h, {
    SET_SELECTED_CONVERSATION: function (e) {
      let { channelId: t, conversationId: n } = e;
      l = { channelId: t, conversationId: n };
    },
    CLEAR_CONVERSATION_SELECTION: function (e) {
      let { channelId: t, conversationId: n } = e;
      if (l?.channelId !== t || (null != n && l.conversationId !== n)) return !1;
      l = null;
    },
    CHANNEL_SELECT: function (e) {
      let { channelId: t } = e;
      if (null == l || l.channelId === t) return !1;
      l = null;
    },
    CHANNEL_DELETE: function (e) {
      let { channel: t } = e;
      if (l?.channelId !== t.id) return !1;
      l = null;
    },
    LOGOUT: function () {
      l = null;
    },
  });
}
