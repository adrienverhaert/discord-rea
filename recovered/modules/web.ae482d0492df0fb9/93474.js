/* Recovered shipped factory. Module 93474.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5063490..5065801
 * Raw property SHA-256: 61b016ac785a34af3b8f870486e33640f8e4e6e73a99b3fbff6b9244218108f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => g });
  var i = n(17928),
    r = n(73153),
    a = n(779185),
    s = n(320095),
    l = n(734057),
    o = n(232835),
    d = n(935208),
    c = n(753738),
    u = n(877133),
    _ = n(652215);
  let E = {},
    A = 0,
    h = {},
    f = {};
  function I(e) {
    (null != E[e] && delete E[e], A++);
  }
  function p(e) {
    let t,
      n,
      { messageData: i, errorResponseBody: r } = e;
    return (
      (n = {
        id: (t = (0, a.cR)(i)),
        isBlockedEdit: (0, a.Qn)(i),
        messageData: i,
        errorMessage: (0, c.PD)(i, r),
      }),
      (E[t] = n),
      A++,
      !0
    );
  }
  function T(e) {
    let { channelId: t, messages: n } = e,
      i = l.A.getChannel(t)?.getGuildId();
    if (null == i) return !1;
    let r = f[i],
      a = n.reduce(
        (e, t) =>
          t.type === _.lAJ.AUTO_MODERATION_ACTION &&
          t.embeds?.some((e) => {
            let { type: t } = e;
            return t === _.Auw.AUTO_MODERATION_NOTIFICATION;
          })
            ? null == e || -1 === d.default.compare(e, t.id)
              ? t.id
              : void 0
            : e,
        r,
      );
    return null != a && f[i] !== a && ((f[i] = a), !0);
  }
  class m extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
      (this.waitFor(l.A, o.A),
        null != e && ((E = e.automodFailedMessages), (h = e.mentionRaidDetectionByGuild)));
    }
    getState() {
      return {
        automodFailedMessages: E,
        mentionRaidDetectionByGuild: h,
        lastIncidentAlertMessage: f,
      };
    }
    getMessage(e) {
      return null == e ? null : (E[e] ?? null);
    }
    getMessagesVersion() {
      return A;
    }
    getMentionRaidDetected(e) {
      return h[e] ?? null;
    }
    getLastIncidentAlertMessage(e) {
      return f[e] ?? null;
    }
  }
  let g = new m(r.h, {
    CONNECTION_OPEN: function (e) {
      return 0 !== Object.keys(E).length && ((E = {}), A++, !0);
    },
    LOAD_MESSAGES_SUCCESS: T,
    LOCAL_MESSAGES_LOADED: T,
    MESSAGE_CREATE: function (e) {
      let { guildId: t, message: n } = e;
      if (null == t || n.type !== _.lAJ.AUTO_MODERATION_ACTION) return !1;
      let i = (0, s.rh)(n);
      return !!(0, u.ER)(i) && !!(0, u.de)(i) && ((f[t] = i.id), !0);
    },
    MESSAGE_SEND_FAILED_AUTOMOD: p,
    MESSAGE_EDIT_FAILED_AUTOMOD: p,
    AUTO_MODERATION_CONTENT_DELETED: function (e) {
      let { message: t, notice: n } = e;
      return (
        null != t &&
        ((E[t.id] = { id: t.id, messageData: void 0, isBlockedEdit: !1, errorMessage: n }), A++, !0)
      );
    },
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function (e) {
      let { messageId: t } = e;
      return (I(t), !0);
    },
    MESSAGE_END_EDIT: function (e) {
      let { response: t } = e;
      if (t?.body == null || t.body.code === _.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
      let n = t.body.id;
      if (null == n) return !1;
      I(n);
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function (e) {
      let { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i } = e;
      return ((h[t] = { guildId: t, decisionId: n, suspiciousMentionActivityUntil: i }), !0);
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function (e) {
      let { guildId: t } = e;
      return (delete h[t], !0);
    },
  });
}
