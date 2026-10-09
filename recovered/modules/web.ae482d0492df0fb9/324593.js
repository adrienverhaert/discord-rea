/* Recovered shipped factory. Module 324593.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7441197..7442185
 * Raw property SHA-256: 5be4867fa51c49a5bb6c291fd8e67d0ee141114243498e880c60669bd9256749
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(132500),
    r = n(174459),
    a = n(652215);
  let s = new (class {
    searchSessionId = null;
    searchSessionStartTime = null;
    isQueryEnteredTracked = !1;
    getSearchSessionId() {
      return this.searchSessionId;
    }
    isSessionActive() {
      return null != this.searchSessionId;
    }
    initialize() {
      ((this.searchSessionId = (0, i.A)()),
        (this.searchSessionStartTime = Date.now()),
        (this.isQueryEnteredTracked = !1));
    }
    maybeTrackQueryEntered() {
      this.isQueryEnteredTracked || (this.trackQueryEntered(), (this.isQueryEnteredTracked = !0));
    }
    terminate() {
      null != this.searchSessionId &&
        null != this.searchSessionStartTime &&
        (this.trackClosed(Date.now() - this.searchSessionStartTime),
        (this.searchSessionId = null),
        (this.searchSessionStartTime = null),
        (this.isQueryEnteredTracked = !1));
    }
    trackQueryEntered() {
      r.default.track(a.HAw.USER_SETTINGS_SEARCH_QUERY_ENTERED, {
        search_session_id: this.getSearchSessionId(),
      });
    }
    trackClosed(e) {
      r.default.track(a.HAw.USER_SETTINGS_SEARCH_CLOSED, {
        search_session_id: this.getSearchSessionId(),
        search_session_duration_ms: e,
      });
    }
  })();
}
