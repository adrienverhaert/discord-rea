/* Recovered shipped factory. Module 8880.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7850163..7850909
 * Raw property SHA-256: b332c003be719754a43f904562b24e0ba324357ae71df07c5c124444ba999a2d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(17928),
    r = n(73153);
  let a = { speechRate: 1, currentMessage: null },
    s = a;
  class l extends i.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
      s = { ...a, ...(e ?? null) };
    }
    isSpeakingMessage(e, t) {
      let { currentMessage: n } = s;
      return null !== n && n.channelId === e && n.messageId === t;
    }
    get currentMessage() {
      return s.currentMessage;
    }
    get speechRate() {
      return s.speechRate;
    }
    getUserAgnosticState() {
      return s;
    }
  }
  let o = new l(
    r.h,
    __OVERLAY__
      ? {}
      : {
          SPEAKING_MESSAGE: function (e) {
            let { messageId: t, channelId: n } = e;
            s = { ...s, currentMessage: { messageId: t, channelId: n } };
          },
          STOP_SPEAKING: function () {
            s = { ...s, currentMessage: null };
          },
          SET_TTS_SPEECH_RATE: function (e) {
            s = { ...s, speechRate: e.speechRate };
          },
        },
  );
}
