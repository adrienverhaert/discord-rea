/* Recovered shipped factory. Module 378939.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 635996..637113
 * Raw property SHA-256: 2c62ab8498177182afd5f3c28f171852f9c201ced34d19e4d88e22a9caa5c35e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(636537),
    r = n(73153),
    a = n(652215);
  let s = {
    setGuildFilter(e) {
      let { guildFilter: t, roleFilter: n, everyoneFilter: i } = e;
      r.h.dispatch({
        type: "SET_RECENT_MENTIONS_FILTER",
        guildFilter: t,
        roleFilter: n,
        everyoneFilter: i,
      });
    },
    clearMentions() {
      r.h.dispatch({ type: "CLEAR_MENTIONS" });
    },
    truncateMentions(e) {
      r.h.dispatch({ type: "TRUNCATE_MENTIONS", size: e });
    },
    fetchRecentMentions(e) {
      let {
        before: t,
        limit: n = a.Ue3,
        guildId: s = null,
        roles: l = !0,
        everyone: o = !0,
        feature: d,
      } = e;
      return (
        r.h.dispatch({ type: "LOAD_RECENT_MENTIONS", guildId: s }),
        i.Bo.get({
          url: a.Rsh.MENTIONS,
          query: { before: t, limit: n, guild_id: s, roles: l, everyone: o, feature: d },
          retries: 2,
          oldFormErrors: !0,
          rejectWithError: !0,
        }).then(
          (e) => {
            let { body: n } = e;
            r.h.dispatch({
              type: "LOAD_RECENT_MENTIONS_SUCCESS",
              messages: n,
              isAfter: null != t,
              hasMoreAfter: n.length >= a.Ue3,
            });
          },
          () => {
            r.h.dispatch({ type: "LOAD_RECENT_MENTIONS_FAILURE" });
          },
        )
      );
    },
    deleteRecentMention(e) {
      (i.Bo.del({
        url: a.Rsh.MENTIONS_MESSAGE_ID(e),
        retries: 2,
        oldFormErrors: !0,
        rejectWithError: !0,
      }),
        r.h.dispatch({ type: "RECENT_MENTION_DELETE", id: e }));
    },
    setRecentMentionsStale() {
      r.h.dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
    },
  };
}
