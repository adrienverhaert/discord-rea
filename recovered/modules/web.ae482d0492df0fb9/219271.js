/* Recovered shipped factory. Module 219271.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7905731..7906744
 * Raw property SHA-256: df12d28c679592d45b427aa224b9becbf192958f12698fd6f6749693224f301d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { u: () => o });
  var i = n(636537),
    r = n(73153),
    a = n(153488),
    s = n(427358),
    l = n(652215);
  function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.A.shouldFetch() && a.A.hasConsented(l.YAq.PERSONALIZATION)
      ? (r.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
        i.Bo.get({
          url: l.Rsh.USER_AFFINITIES_V2,
          retries: 3 * !!e,
          oldFormErrors: !0,
          rejectWithError: !1,
        }).then(
          (e) => {
            let { body: t } = e;
            r.h.dispatch({
              type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
              affineUsers: t.user_affinities.map((e) => ({
                otherUserId: e.other_user_id,
                userSegment: e.user_segment,
                otherUserSegment: e.other_user_segment,
                isFriend: e.is_friend,
                dmProbability: e.dm_probability ?? 0,
                dmRank: e.dm_rank ?? 0,
                vcProbability: e.vc_probability ?? 0,
                vcRank: e.vc_rank ?? 0,
                serverMessageProbability: e.server_message_probability ?? 0,
                serverMessageRank: e.server_message_rank ?? 0,
                communicationProbability: e.communication_probability ?? 0,
                communicationRank: e.communication_rank ?? 0,
              })),
            });
          },
          () => {
            r.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
          },
        ))
      : Promise.resolve();
  }
}
