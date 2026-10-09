/* Recovered shipped factory. Module 427358.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7906745..7908053
 * Raw property SHA-256: 94e063c7f8129dabf0d58243ed17746f61d170d0178e9c3ce09b459aa1f59699
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(17928),
    r = n(73153),
    a = n(994500);
  let s = 8 * n(927813).A.Millis.HOUR,
    l = new Map(),
    o = !1,
    d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
    c = { ...d };
  function u() {
    l = new Map(
      c.userAffinities
        .filter((e) => !a.A.isBlockedOrIgnored(e.otherUserId))
        .map((e) => [e.otherUserId, e]),
    );
  }
  class _ extends i.Ay.PersistedStore {
    static displayName = "UserAffinitiesV2Store";
    static persistKey = "UserAffinitiesStoreV2";
    initialize(e) {
      (this.waitFor(a.A),
        e?.userAffinities != null &&
          ((c.userAffinities = e.userAffinities), (c.lastFetched = e.lastFetched), u()),
        this.syncWith([a.A], u));
    }
    shouldFetch() {
      if (!o) return Date.now() - c.lastFetched > s;
    }
    isFetching() {
      return o;
    }
    getUserAffinities() {
      return c.userAffinities;
    }
    getUserAffinitiesMap() {
      return l;
    }
    compare(e, t) {
      return (l.get(t)?.communicationProbability ?? 0) - (l.get(e)?.communicationProbability ?? 0);
    }
    compareByDmProbability(e, t) {
      return (l.get(t)?.dmProbability ?? 0) - (l.get(e)?.dmProbability ?? 0);
    }
    getUserAffinity(e) {
      return l.get(e);
    }
    getState() {
      return c;
    }
    isHighlyAffinedVCUser(e) {
      return (l.get(e)?.vcProbability ?? 0) > 0.5;
    }
  }
  let E = new _(r.h, {
    LOAD_USER_AFFINITIES_V2: function () {
      o = !0;
    },
    LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
      let { affineUsers: t } = e;
      ((c.lastFetched = Date.now()), (o = !1), (c.userAffinities = t), u());
    },
    LOAD_USER_AFFINITIES_V2_FAILURE: function () {
      o = !1;
    },
    LOGOUT: function () {
      ((c = { ...d }), (l = new Map()), (o = !1));
    },
  });
}
