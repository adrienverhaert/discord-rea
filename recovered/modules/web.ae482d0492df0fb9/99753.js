/* Recovered shipped factory. Module 99753.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3989996..3991138
 * Raw property SHA-256: 399563821bf9295193dc7e9c053625d19a709fe31d7b44a0486ad1183345abf4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => E });
  var r = n(17928),
    a = n(73153),
    s = n(83971);
  let l = new Map(),
    o = new Map(),
    d = new Map(),
    c = !1;
  function u(e) {
    (e(l), (l = new Map(l)));
  }
  class _ extends r.Ay.Store {
    static displayName = "ContentInventoryStore";
    getFeeds() {
      return l;
    }
    getFeed(e) {
      return l.get(e);
    }
    getFeedState(e) {
      return o.get(e);
    }
    getLastFeedFetchDate(e) {
      return d.get(e);
    }
    getFilters() {
      return i;
    }
    getFeedRequestId(e) {
      return this.getFeed(e)?.request_id;
    }
    getDebugImpressionCappingDisabled() {
      return c;
    }
    getMatchingInboxEntry(e) {
      let { activity: t, userId: n, feedId: i } = e,
        r = this.getFeed(i);
      if (null == r || null == t) return;
      let a = r.entries.reduce(
        (e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]),
        [],
      );
      return (0, s.nU)(a, t);
    }
  }
  let E = new _(a.h, {
    CONNECTION_OPEN: function () {
      l = new Map();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
      let { feedId: t, feed: n } = e;
      (u((e) => e.set(t, n)), d.set(t, new Date()));
    },
    CONTENT_INVENTORY_SET_FEED_STATE: function (e) {
      let { feedId: t, state: n } = e;
      o.set(t, n);
    },
    CONTENT_INVENTORY_SET_FILTERS: function (e) {
      let { filters: t } = e;
      i = t;
    },
    CONTENT_INVENTORY_CLEAR_FEED: function (e) {
      let { feedId: t } = e;
      if (!l.has(t)) return !1;
      u((e) => e.delete(t));
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function () {
      c = !c;
    },
  });
}
