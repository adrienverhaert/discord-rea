/* Recovered shipped factory. Module 553366.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7224367..7225152
 * Raw property SHA-256: 6194f9b79c91487471ff8d1c4c3ae5a73d7718caea375deec608376dcd89e4d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(401843),
    r = n(439372),
    a = n(616356),
    s = n(232835),
    l = n(935208),
    o = n(680724),
    d = n(25528),
    c = n(820672),
    u = n(652215);
  class _ extends r.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates(e) {
      let { voiceStates: t } = e;
      for (let e of t) {
        if (null == e.channelId || !0 !== e.selfStream) continue;
        let t = o.A.getPendingRequestForUser(e.userId);
        if (null == t) continue;
        let n = s.A.getMessage(e.channelId, t);
        if (
          n?.activity?.type !== u.xL.STREAM_REQUEST ||
          n.application?.id == null ||
          l.default.extractTimestamp(t) < Date.now() - c.M ||
          null ==
            (0, d.nn)(e.userId, e.guildId).find(
              (e) => n.application?.id != null && e.application_id === n.application.id,
            )
        )
          continue;
        let r = a.A.getStreamForUser(e.userId, e.guildId);
        null != r && i.A9(r, { forceMultiple: !0, noFocus: !0 });
      }
    }
  }
  let E = new _();
}
