/* Recovered shipped factory. Module 946255.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2663668..2664198
 * Raw property SHA-256: f2a1c133c7ed63598ff7db99910084652fee4f6ffea7b00bb8e229333a095173
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(174459),
    r = n(652215);
  function a(e) {
    let {
      type: t,
      source: n,
      userId: a,
      guildId: s,
      channelId: l,
      channelType: o,
      applicationId: d,
      partyId: c,
      messageId: u,
      locationObject: _,
      analyticsLocations: E,
      referrerId: A,
      inviterUserId: h,
      remoteJoinPlatform: f,
    } = e;
    i.default.track(r.HAw.APPLICATION_OPENED, {
      type: t,
      source: n,
      guild_id: s,
      channel_id: l,
      channel_type: o,
      application_id: d,
      party_id: c ?? void 0,
      other_user_id: a,
      message_id: u,
      location: _,
      location_stack: E,
      referrer_id: A,
      invite_inviter_id: h,
      remote_join_platform: f,
    });
  }
}
