/* Recovered shipped factory. Module 802958.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7808669..7810614
 * Raw property SHA-256: 4b4b32778f662a125ae49e42244634c9e4c19e171d419e57af0f3c0c3d2e8738
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(95701),
    o = n(734057);
  let d = {};
  function c(e) {
    e.threads?.forEach(u);
  }
  function u(e) {
    if (!l.A_.has(e.type)) return !1;
    let t =
      (e.id in d ||
        (d[e.id] = {
          guildId: e.guild_id,
          parentId: e.parent_id,
          memberCount: e.memberCount ?? 0,
          memberIdsPreview: e.memberIdsPreview ?? [],
        }),
      d[e.id]);
    (null != e.memberCount && (t.memberCount = e.memberCount),
      null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview));
  }
  function _(e) {
    let { channel: t } = e;
    return u(t);
  }
  function E(e) {
    let { threads: t } = e;
    t.forEach(h);
  }
  function A(e) {
    let { data: t } = e,
      n = !1;
    return (
      t.forEach((e) => {
        let { threads: t, messages: i } = e;
        (i.forEach((e) => {
          e.forEach((e) => {
            n = h(e.thread) || n;
          });
        }),
          t.forEach((e) => {
            n = h(e) || n;
          }));
      }),
      n
    );
  }
  function h(e) {
    if (null != e && !(e.id in d)) {
      let t = o.A.getChannel(e.id);
      if (null != t) return (u(t), !0);
    }
    return !1;
  }
  class f extends a.Ay.Store {
    static displayName = "ThreadMembersStore";
    initialize() {
      this.waitFor(o.A);
    }
    getMemberCount(e) {
      return d[e]?.memberCount ?? null;
    }
    getMemberIdsPreview(e) {
      return d[e]?.memberIdsPreview ?? null;
    }
    getInitialOverlayState() {
      return d;
    }
  }
  let I = new f(s.h, {
    CONNECTION_OPEN: function (e) {
      ((d = {}), e.guilds.forEach(c));
    },
    OVERLAY_INITIALIZE: function (e) {
      let { threadMembers: t } = e;
      d = { ...t };
    },
    GUILD_CREATE: function (e) {
      let { guild: t } = e;
      c(t);
    },
    GUILD_DELETE: function (e) {
      var t;
      let { guild: n } = e;
      ((t = n.id), (d = r().omitBy(d, (e) => e.guildId === t)));
    },
    CHANNEL_DELETE: function (e) {
      var t;
      let { channel: n } = e;
      ((t = n.id), (d = r().omitBy(d, (e) => e.parentId === t)));
    },
    THREAD_CREATE: _,
    THREAD_UPDATE: _,
    THREAD_LIST_SYNC: function (e) {
      let { threads: t } = e;
      t.forEach(u);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
      let t = d[e.id];
      if (null == t) return !1;
      (null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview),
        (t.memberCount = e.memberCount));
    },
    SEARCH_MESSAGES_SUCCESS: A,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: A,
    LOAD_THREADS_SUCCESS: E,
    LOAD_ARCHIVED_THREADS_SUCCESS: E,
    THREAD_DELETE: function (e) {
      let { channel: t } = e;
      delete d[t.id];
    },
    LOAD_MESSAGES_SUCCESS: function (e) {
      let t = !1;
      for (let n of e.messages) t = h(n.thread) || t;
      return t;
    },
  });
}
