/* Recovered shipped factory. Module 857500.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9259056..9259881
 * Raw property SHA-256: 4da1da85de5905be2bc39c1259cb78e335b4528189d75f05bb293621ca35b5a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => h });
  var i = n(73153),
    r = n(439372),
    a = n(280450),
    s = n(131319),
    l = n(734057),
    o = n(309010),
    d = n(117549),
    c = n(652215);
  function u() {
    (!(function () {
      let e = o.Ay.getVoiceChannelId(),
        t = s.A.bitrate;
      if (null == e) return;
      let n = l.A.getChannel(e);
      null == n ||
        (t !== n.bitrate && i.h.dispatch({ type: "SET_CHANNEL_BITRATE", bitrate: n.bitrate }));
    })(),
      (function () {
        let e = o.Ay.getVoiceChannelId(),
          t = d.A.mode;
        if (null == e) return;
        let n = l.A.getChannel(e);
        if (null == n) return;
        let r = n.videoQualityMode ?? c.K3c.AUTO;
        t !== r && i.h.dispatch({ type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: r });
      })());
  }
  function _(e) {
    let { channels: t } = e;
    for (let e of t) o.Ay.getVoiceChannelId() === e.id && u();
  }
  function E(e) {
    let { voiceStates: t } = e;
    t.forEach((e) => {
      a.default.getSessionId() === e.sessionId && u();
    });
  }
  class A extends r.A {
    actions = { CHANNEL_UPDATES: _, VOICE_STATE_UPDATES: E };
  }
  let h = new A();
}
