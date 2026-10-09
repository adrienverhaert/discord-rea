/* Recovered shipped factory. Module 288737.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8810156..8810950
 * Raw property SHA-256: 5ad25e9af5c4238cb1846f7ab0335d380208e9c5f03645e5cdcc5c37fc009294
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(315069);
  class r extends i.A {
    userId;
    channelId;
    sessionId;
    mute;
    deaf;
    selfMute;
    selfDeaf;
    selfVideo;
    selfStream;
    suppress;
    requestToSpeakTimestamp;
    discoverable;
    connectedAt;
    constructor(e) {
      (super(),
        (this.userId = e.userId || ""),
        (this.channelId = e.channelId || null),
        (this.sessionId = e.sessionId || null),
        (this.mute = e.mute || !1),
        (this.deaf = e.deaf || !1),
        (this.selfMute = e.selfMute || !1),
        (this.selfDeaf = e.selfDeaf || !1),
        (this.selfVideo = e.selfVideo || !1),
        (this.selfStream = e.selfStream || !1),
        (this.suppress = e.suppress || !1),
        (this.requestToSpeakTimestamp = e.requestToSpeakTimestamp),
        (this.discoverable = e.discoverable ?? !0),
        (this.connectedAt = e.connectedAt));
    }
    isVoiceMuted() {
      return this.selfMute || this.mute || this.suppress || null != this.requestToSpeakTimestamp;
    }
    isVoiceDeafened() {
      return this.selfDeaf || this.deaf;
    }
  }
}
