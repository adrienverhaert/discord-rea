/* Recovered shipped factory. Module 141931.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10492528..10493545
 * Raw property SHA-256: 3cfb8d7c2d9258a1adedfd828c6da1585bb25259fb265c865bbd07c66f950a7c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Fh: () => i, du: () => d, dv: () => _, fS: () => u, qQ: () => c, wB: () => E });
  class i extends Error {
    name = "SystemServiceNotAvailableError";
    constructor() {
      super("System service not available");
    }
  }
  var r,
    a,
    s,
    l,
    o,
    d =
      (((r = {})[(r.HasRTCConnection = 0)] = "HasRTCConnection"),
      (r[(r.IsSendingVideo = 1)] = "IsSendingVideo"),
      (r[(r.IsSendingStream = 2)] = "IsSendingStream"),
      (r[(r.IsReceivingVideo = 3)] = "IsReceivingVideo"),
      (r[(r.IsReceivingStream = 4)] = "IsReceivingStream"),
      (r[(r.VideoMediaSessionId = 5)] = "VideoMediaSessionId"),
      (r[(r.StreamMediaSessionId = 6)] = "StreamMediaSessionId"),
      (r[(r.IntentionalCrashReason = 7)] = "IntentionalCrashReason"),
      r),
    c =
      (((a = {})[(a.RendererProcessDelayed = 0)] = "RendererProcessDelayed"),
      (a[(a.RendererProcess = 1)] = "RendererProcess"),
      (a[(a.MainProcess = 2)] = "MainProcess"),
      a),
    u = (((s = {}).WINDOW = "window"), (s.SCREEN = "screen"), (s.CAMERA = "camera"), s),
    _ =
      (((l = {}).VIDEO = "VIDEO"),
      (l.MUTE = "MUTE"),
      (l.DEAFEN = "DEAFEN"),
      (l.DISCONNECT = "DISCONNECT"),
      l),
    E =
      (((o = {}).DEFAULT = "DEFAULT"),
      (o.UNREAD = "UNREAD"),
      (o.CONNECTED = "CONNECTED"),
      (o.SPEAKING = "SPEAKING"),
      (o.MUTED = "MUTED"),
      (o.DEAFENED = "DEAFENED"),
      o);
}
