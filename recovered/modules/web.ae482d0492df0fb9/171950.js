/* Recovered shipped factory. Module 171950.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8458634..8459513
 * Raw property SHA-256: ee6571167aaeeab1e9d4f0c361e41687d6623e30999ab6af1e2f9ca02dcab2b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I });
  var i = n(439372),
    r = n(674966),
    a = n(312006),
    s = n(105530),
    l = n(288737),
    o = n(280450),
    d = n(734057),
    c = n(192820),
    u = n(763827),
    _ = n(652215),
    E = n(765682);
  let A = null;
  function h() {
    (r.A.requestPermission(E.iL.AUDIO).then((e) => {}),
      c.Ay.getMode() === _.TBI.PUSH_TO_TALK && r.A.requestPermission(E.iL.INPUT_MONITORING));
  }
  class f extends i.A {
    actions = {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
    };
    handleVoiceChannelSelect(e) {
      let { channelId: t } = e;
      null == t && (A = null);
    }
    handleVoiceStateUpdates(e) {
      let { voiceStates: t } = e;
      t.forEach((e) => {
        var t;
        let { userId: n, channelId: i } = e;
        if (null != i && o.default.getId() === n && null != u.A.getRTCConnectionId() && A !== i) {
          if (!d.A.getChannel(i)?.isListenModeCapable() || a.Ay.isSpeaker(n, i)) {
            ((A = i), h());
            return;
          }
          ((t = new l.A(e)),
            (0, s.eY)(t) === s.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && ((A = i), h()));
        }
      });
    }
  }
  let I = new f();
}
