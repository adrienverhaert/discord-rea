/* Recovered shipped factory. Module 525505.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4396412..4397076
 * Raw property SHA-256: 02c2943d7424917db31ef4428d18cfe66789d71122e0f711526d0932c3f8067a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d, u: () => o });
  var i = n(17928),
    r = n(280450),
    a = n(487329),
    s = n(161518),
    l = n(731854);
  function o(e, t) {
    return (0, i.bG)([s.A, r.default], () => {
      for (let n of r.default.getId() === t
        ? [
            ...(e === l.x.STREAM ? s.A.getActiveErrorsOfType(a.iy.SCREENSHARE_OS_ERROR) : []),
            ...s.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT),
            ...s.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM),
          ]
        : [
            ...s.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT),
            ...s.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM),
          ])
        if (n.mediaContext === e && n.userId === t) return n;
    });
  }
  function d(e, t) {
    return o(e, t)?.type;
  }
}
