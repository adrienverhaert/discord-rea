/* Recovered shipped factory. Module 37965.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4371539..4371824
 * Raw property SHA-256: ecdfe07748410e44ddd5b085c0eadbdd1ae3da10106ff3c8ab09b729c68392df
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { W: () => a, Z: () => r });
  var i = n(73153);
  function r(e, t, n, r) {
    i.h.dispatch({
      type: "VIDEO_STREAM_READY_TIMEOUT",
      videoStreamId: e,
      mediaContext: n,
      userId: t,
      streamKey: r,
    });
  }
  function a(e, t) {
    i.h.dispatch({ type: "CLEAR_VIDEO_STREAM_READY_TIMEOUT", mediaContext: e, userId: t });
  }
}
