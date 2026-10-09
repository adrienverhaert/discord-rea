/* Recovered shipped factory. Module 966833.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8845450..8848377
 * Raw property SHA-256: d4d2ac7a34d4053c9bd33751d20b25d8519ac1743ebdaab5bb8a2ee69df7b6bb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => S, e: () => I }), n(667532));
  var i,
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(73153),
    o = n(519460),
    d = n(320095),
    c = n(773669),
    u = n(734057),
    _ = n(696451),
    E = n(71393),
    A = n(232835),
    h = n(994500),
    f = n(287809),
    I =
      (((i = {}).LOADING = "LOADING"),
      (i.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
      (i.LOADED_FINISHED = "LOADING_FINISHED"),
      (i.FAILED = "FAILED"),
      i);
  let p = {};
  function T(e) {
    let { channel: t } = e;
    delete p[t.id];
  }
  function m() {
    a().forEach(p, (e) => {
      (e.items.forEach((e) => {
        let { message: t } = e;
        (t.set("blocked", h.A.isBlockedForMessage(t)),
          t.set("ignored", h.A.isIgnoredForMessage(t)));
      }),
        (e.items = e.items.slice()));
    });
  }
  class g extends s.Ay.Store {
    static displayName = "ChannelPinsStore";
    initialize() {
      this.waitFor(u.A, _.Ay, E.A, c.default, A.A, h.A, f.default);
    }
    getPins(e) {
      return p[e];
    }
  }
  let S = new g(l.h, {
    CONNECTION_OPEN: function () {
      p = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
      let { channelId: t, reset: n } = e;
      if (!n && null != p[t]) {
        p[t].state = "LOADING";
        return;
      }
      let i = u.A.getChannel(t)?.getGuildId() ?? void 0;
      p[t] = { id: t, items: [], state: "LOADING", guildId: i };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
      let { channelId: t, pins: n, hasMore: i } = e,
        r = p[t];
      if (null == r) return !1;
      let a = n.map((e) => {
        let { pinned_at: t, message: n } = e;
        return { pinnedAt: new Date(Date.parse(t)), message: (0, d.rh)(n) };
      });
      ((r.items = [...r.items, ...a]), (r.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED"));
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
      let { channelId: t } = e,
        n = p[t];
      if (null == n) return !1;
      n.state = "FAILED";
    },
    CHANNEL_DELETE: T,
    THREAD_DELETE: T,
    GUILD_DELETE: function (e) {
      let { guild: t } = e;
      p = a()(p)
        .filter((e) => e.guildId !== t.id)
        .keyBy("id")
        .value();
    },
    MESSAGE_DELETE: function (e) {
      let { id: t, channelId: n } = e,
        i = p[n];
      if (
        null == i ||
        0 ===
          a().remove(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
          }).length
      )
        return !1;
      ((i.items = i.items.slice()), (p[n] = i));
    },
    MESSAGE_DELETE_BULK: function (e) {
      let { ids: t, channelId: n } = e,
        i = p[n];
      if (null == i) return !1;
      i.items = i.items.filter((e) => {
        let { message: n } = e;
        return !t.includes(n.id);
      });
    },
    MESSAGE_UPDATE: function (e) {
      let t = e.message.id,
        n = e.message.channel_id;
      if (null == n) return !1;
      let i = p[n];
      if (null == i) return !1;
      if (null == e.message.author) {
        let r = a().findIndex(i.items, (e) => {
          let { message: n } = e;
          return n.id === t;
        });
        if (-1 === r) return;
        let { pinnedAt: s, message: l } = i.items[r],
          o = (0, d.IU)(l, e.message);
        if (o !== l) {
          let e = i.items.slice();
          ((e[r] = { pinnedAt: s, message: o }), (p[n].items = e));
        }
        return;
      }
      if (e.message.pinned) {
        i.items = i.items.slice();
        let n = a().findIndex(i.items, (e) => {
          let { message: n } = e;
          return n.id === t;
        });
        -1 === n
          ? i.items.unshift({ message: (0, d.rh)(e.message), pinnedAt: new Date() })
          : (i.items[n].message = (0, d.IU)(i.items[n].message, e.message));
        return;
      }
      let r = a().findIndex(i.items, (e) => {
        let { message: n } = e;
        return n.id === t;
      });
      if (-1 === r) return !1;
      ((i.items = i.items.slice()), i.items.splice(r, 1));
    },
    RELATIONSHIP_ADD: m,
    RELATIONSHIP_REMOVE: m,
    RELATIONSHIP_UPDATE: m,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
      let { messageId: t, channelId: n } = e,
        i = p[n];
      if (null == i) return !1;
      let r = a().findIndex(i.items, (e) => {
        let { message: n } = e;
        return n.id === t;
      });
      if (-1 === r) return !1;
      ((i.items = i.items.slice()), (i.items[r].message = (0, o.T)(i.items[r].message)));
    },
  });
}
