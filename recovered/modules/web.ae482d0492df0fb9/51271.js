/* Recovered shipped factory. Module 51271.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5139108..5140072
 * Raw property SHA-256: e42c49ea92256c7dd2d9ddb4de8f76cef2395d46c2283ff4b4245a46ac32927b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { NC: () => c, cK: () => d, gH: () => l, iN: () => o });
  var i = n(280450),
    r = n(696451),
    a = n(174459),
    s = n(652215);
  function l(e) {
    let { guildId: t, applicationUserId: n, applicationStatus: r } = e;
    a.default.track(s.HAw.GUILD_MEMBER_APPLICATION_VIEWED, {
      guild_id: t,
      viewing_user_id: i.default.getId(),
      application_user_id: n,
      application_status: r,
    });
  }
  function o(e) {
    let { guildId: t, actionType: n, applicationUserId: r } = e;
    a.default.track(s.HAw.GUILD_MEMBER_APPLICATION_ACTION, {
      guild_id: t,
      action_type: n,
      application_user_id: r,
      viewing_user_id: i.default.getId(),
    });
  }
  function d(e) {
    let { guildId: t, messageId: n, channelId: l, joinRequestStatus: o, joinRequestUserId: d } = e,
      c = i.default.getId(),
      u = r.Ay.getMember(t, c)?.joinedAt != null;
    a.default.track(s.HAw.GUILD_MEMBER_APPLICATION_INTERVIEW_MESSAGE, {
      guild_id: t,
      channel_id: l,
      message_id: n,
      message_user_id: c,
      is_member: u,
      join_request_status: o,
      join_request_user_id: d,
    });
  }
  function c(e) {
    a.default.track(s.HAw.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
  }
}
