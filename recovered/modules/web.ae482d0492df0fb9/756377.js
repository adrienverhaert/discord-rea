/* Recovered shipped factory. Module 756377.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7378391..7379052
 * Raw property SHA-256: cd4975ab4c25e61fc3b089f970299c1c61d566ebcd8a72b8d5ff0cf34db3d5ea
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Dd: () => s, Yf: () => a, iz: () => l, x6: () => o });
  var i,
    r = n(320095),
    a = (((i = {}).ALL = "ALL"), (i.REMINDER = "REMINDER"), (i.BOOKMARK = "BOOKMARK"), i);
  function s(e) {
    return {
      channelId: e.channel_id,
      messageId: e.message_id,
      savedAt: new Date(e.saved_at),
      authorSummary: e.author_summary,
      channelSummary: e.channel_summary,
      messageSummary: e.message_summary,
      guildId: 0 === e.guild_id ? void 0 : e.guild_id,
      authorId: 0 === e.author_id ? void 0 : e.author_id,
      notes: e.notes,
      dueAt: null != e.due_at ? new Date(e.due_at) : void 0,
    };
  }
  function l(e) {
    return { message: null != e.message ? (0, r.rh)(e.message) : null, saveData: s(e.save_data) };
  }
  function o(e) {
    return { channelId: e.channel_id, messageId: e.message_id };
  }
}
