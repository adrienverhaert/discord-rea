/* Recovered shipped factory. Module 11550.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5324276..5325675
 * Raw property SHA-256: 5fee7a2ba3ed8ba3a92342d606d57d5478c3bbcd344ab56a0ac7cad115b01875
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(17928),
    r = n(73153),
    a = n(280450),
    s = n(698441),
    l = n(357801),
    o = n(988794);
  let d = {},
    c = {};
  function u(e) {
    let t = { ...d };
    (delete t[e], (d = t));
    let n = { ...c };
    (delete n[e], (c = n));
  }
  class _ extends i.Ay.PersistedStore {
    static displayName = "UpcomingEventNoticesStore";
    static persistKey = "UpcomingEventNotices";
    initialize(e) {
      (this.waitFor(a.default, s.Ay),
        null != e &&
          ((d = e.upcomingEventDismissals ?? {}), (c = e.upcomingEventSeenTimestamps ?? {})));
    }
    getGuildEventNoticeDismissalTime(e) {
      return d[e];
    }
    getAllEventDismissals() {
      return d;
    }
    getUpcomingNoticeSeenTime(e) {
      return c[e];
    }
    getAllUpcomingNoticeSeenTimes() {
      return c;
    }
    getState() {
      return { upcomingEventDismissals: d, upcomingEventSeenTimestamps: c };
    }
  }
  let E = new _(r.h, {
    UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (e) {
      let { eventId: t } = e,
        n = { ...d };
      ((n[t] = Date.now()), (d = n));
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
      let { guildScheduledEvent: t } = e;
      (t.status === o.XG.CANCELED || t.status === o.XG.COMPLETED) && u(t.id);
    },
    GUILD_SCHEDULED_EVENT_DELETE: function (e) {
      let { guildScheduledEvent: t } = e;
      u(t.id);
    },
    GUILD_SCHEDULED_EVENT_USER_ADD: function (e) {
      let { userId: t, guildEventId: n } = e;
      if (t !== a.default.getId()) return;
      let i = s.Ay.getGuildScheduledEvent(n);
      if (null == i || i.status !== o.XG.SCHEDULED || null != d[n]) return;
      let r = c[n];
      if ((0, l.F)(i, void 0, r, !1) === o.w0.NEW_EVENT) {
        let e = { ...d };
        ((e[n] = Date.now()), (d = e));
      }
    },
    UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (e) {
      let { guildEventId: t } = e,
        n = { ...c };
      ((n[t] = Date.now()), (c = n));
    },
  });
}
