/* Recovered shipped factory. Module 444261.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7802754..7803679
 * Raw property SHA-256: 8a509d657702946a6c657e1265efafdd2dfe7879d4b63947dd49d09a8c9dabea
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(17928),
    r = n(73153),
    a = n(439372),
    s = n(919577),
    l = n(280450),
    o = n(734057);
  class d extends a.A {
    actions = {
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate,
      GUILD_DELETE: this.handleGuildDelete,
    };
    handleChannelDelete(e) {
      let { channel: t } = e;
      if (null != t.guild_id) {
        let e = o.A.getAllThreadsForParent(t.id);
        e.length > 0 &&
          i.Ay.Emitter.batched(() => {
            for (let t of e) r.h.dispatch({ type: "THREAD_DELETE", channel: t });
          });
      }
    }
    handleMessageCreate(e) {
      let { channelId: t, message: n } = e,
        i = o.A.getChannel(t);
      if (n.author?.id !== l.default.getId() || !i?.isActiveThread()) return;
      let r = new Date(i.threadMetadata?.archiveTimestamp ?? 0).getTime();
      Date.now() - r < 5e3 && s.A.resort(i.parent_id);
    }
    handleGuildDelete(e) {
      let { guild: t } = e;
      if (t.unavailable) return;
      let n = o.A.getAllThreadsForGuild(t.id);
      0 !== n.length &&
        i.Ay.Emitter.batched(() => {
          for (let e of n) r.h.dispatch({ type: "THREAD_DELETE", channel: e });
        });
    }
  }
  let c = new d();
}
