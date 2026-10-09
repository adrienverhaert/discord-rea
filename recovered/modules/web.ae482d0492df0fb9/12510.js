/* Recovered shipped factory. Module 12510.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8424526..8426083
 * Raw property SHA-256: ff92c1285a1f6f258fe1c934ea6b9bccf13fd431ef5336205012134f1b0efc7d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Od: () => d, Xz: () => o, eX: () => u, pu: () => c });
  var i = n(636537),
    r = n(73153),
    a = n(913122),
    s = n(38405),
    l = n(652215);
  async function o(e) {
    r.h.wait(() => {
      r.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
    });
    try {
      let t = await i.Bo.post({ url: l.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
      return (
        r.h.dispatch({
          type: "ORB_CHALLENGE_CLAIM_SUCCESS",
          achievementIdentifier: e,
          response: t.body,
        }),
        t.body
      );
    } catch (n) {
      let t = n instanceof a.LG ? n : new a.LG(n);
      (s.A.captureException(t, { tags: { app_context: "achievements" } }),
        r.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t }));
    }
  }
  async function d(e) {
    r.h.wait(() => {
      r.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
    });
    try {
      let t = await i.Bo.get({ url: l.Rsh.ORB_USER_CHALLENGES_LIST, rejectWithError: !1 });
      return (
        r.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: t.body }),
        null != e && e(t.body),
        t.body
      );
    } catch (t) {
      let e = t instanceof a.LG ? t : new a.LG(t);
      (s.A.captureException(e, { tags: { app_context: "achievements" } }),
        r.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: e }));
    }
  }
  async function c() {
    try {
      let e = await i.Bo.get({ url: l.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE, rejectWithError: !1 });
      return (
        r.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }),
        e.body
      );
    } catch (e) {
      return;
    }
  }
  async function u() {
    r.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_ACK" });
    try {
      let e = await i.Bo.post({
        url: l.Rsh.ORB_USER_CHALLENGES_UNREAD_STATE_ACK,
        rejectWithError: !1,
      });
      return (
        r.h.dispatch({ type: "ORB_CHALLENGES_UNREAD_UPDATE", achievementUnreadState: e.body }),
        e.body
      );
    } catch (e) {
      return;
    }
  }
}
