/* Recovered shipped factory. Module 54570.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7849476..7849950
 * Raw property SHA-256: 44d94189b664dde5aec85e10d29bcc2fd32211fbb9e6e99ed6151d6d40d7671d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { AU: () => r, kC: () => s, kP: () => a, pr: () => l, zU: () => o });
  var i = n(73153);
  function r(e, t, n, r, a) {
    i.h.dispatch({ type: "SPEAK_TEXT", text: e, interrupt: t, maxLength: n, onStart: r, onEnd: a });
  }
  function a(e, t) {
    i.h.dispatch({ type: "SPEAK_MESSAGE", channel: e, message: t });
  }
  function s(e, t) {
    i.h.dispatch({ type: "SPEAKING_MESSAGE", channelId: e, messageId: t });
  }
  function l() {
    i.h.dispatch({ type: "STOP_SPEAKING" });
  }
  function o(e) {
    i.h.dispatch({ type: "SET_TTS_SPEECH_RATE", speechRate: e });
  }
}
