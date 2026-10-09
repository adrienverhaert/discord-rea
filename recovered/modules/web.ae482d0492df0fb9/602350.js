/* Recovered shipped factory. Module 602350.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5298653..5299580
 * Raw property SHA-256: 0636ac26139e15edfe8b7f5e6894ca0c3734dc1bc4afaa994a95af97a4e3da22
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(439372),
    r = n(280450),
    a = n(446243),
    s = n(558076),
    l = n(360729);
  let o = null,
    d = null;
  class c extends i.A {
    actions = {
      VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
      CONNECTION_RESUMED: () => this.handleConnectionResumed(),
    };
    isExperimentEnabled(e, t) {
      return (0, l.W8)({ guildId: e, location: t }).enabled;
    }
    handleVoiceStateUpdates(e) {
      let { voiceStates: t } = e;
      for (let e of t) {
        let { userId: t, guildId: n, channelId: i, sessionId: l, oldChannelId: c } = e;
        if (t !== r.default.getId()) {
          null != c && c !== i && (0, a.WQ)(t, c);
          continue;
        }
        if (l === r.default.getSessionId() && i !== o) {
          if (
            (null != o &&
              null != d &&
              this.isExperimentEnabled(d, "VOICE_STATE_UPDATE") &&
              (0, a.x2)(d, o),
            null != i && null != n)
          ) {
            let e = s.A.getPendingPosition(),
              t = s.A.getPendingSeat();
            this.isExperimentEnabled(n, "VOICE_STATE_UPDATE") && (0, a.tB)(n, i, e, t);
          }
          ((o = i), (d = n));
        }
      }
    }
    handleConnectionResumed() {
      null == o ||
        null == d ||
        (this.isExperimentEnabled(d, "CONNECTION_RESUMED") && (0, a.z5)(d, o));
    }
  }
  let u = new c();
}
