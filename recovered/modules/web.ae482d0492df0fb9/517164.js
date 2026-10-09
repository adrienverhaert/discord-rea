/* Recovered shipped factory. Module 517164.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3987111..3988423
 * Raw property SHA-256: 61a8152e9688498be92a668e809bd673d8f05c5e0d18dc9ab9b3afde30d51b71
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(17928),
    r = n(73153),
    a = n(83971);
  let s = new Map(),
    l = new Set(),
    o = null,
    d = !1,
    c = !1;
  function u() {
    ((s = new Map()), (l = new Set()), (o = null), (d = !1));
  }
  class _ extends i.Ay.Store {
    static displayName = "ContentInventoryOutboxStore";
    getMatchingOutboxEntry(e) {
      let { activity: t, userId: n } = e,
        i = s.get(n);
      if (null != i && null != t) return (0, a.nU)(i.entries, t);
    }
    getUserOutbox(e) {
      return s.get(e);
    }
    isFetchingUserOutbox(e) {
      return l.has(e);
    }
    get deleteOutboxEntryError() {
      return o;
    }
    get isDeletingEntryHistory() {
      return d;
    }
    get hasInitialized() {
      return c;
    }
  }
  let E = new _(r.h, {
    CONNECTION_OPEN: function () {
      (u(), (c = !0));
    },
    LOGOUT: function () {
      u();
    },
    CONTENT_INVENTORY_FETCH_OUTBOX_START: function (e) {
      let { userId: t } = e;
      l.add(t);
    },
    CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: function (e) {
      let { outbox: t, userId: n } = e;
      (s.set(n, { ...t, lastFetched: Date.now() }), l.delete(n));
    },
    CONTENT_INVENTORY_FETCH_OUTBOX_FAILURE: function (e) {
      let { userId: t } = e;
      l.delete(t);
    },
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: function () {
      ((o = null), (d = !0));
    },
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function (e) {
      let { entry: t, userId: n } = e;
      o = null;
      let i = s.get(n);
      if (null == i) return !1;
      let r = i.entries.filter((e) => e.id !== t.id);
      (s.set(n, { ...i, entries: r }), (d = !1));
    },
    CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function (e) {
      let { error: t } = e;
      ((o = t), (d = !1));
    },
    CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function () {
      ((o = null), (d = !1));
    },
  });
}
