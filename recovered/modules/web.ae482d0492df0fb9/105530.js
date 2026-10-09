/* Recovered shipped factory. Module 105530.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7659889..7660452
 * Raw property SHA-256: 5504b5779b4132c7c58c4b8b6bc0266b7ef56da53ac8fcb0c604736562d3b7e4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => o, eY: () => l, zF: () => s });
  var i,
    r = n(17928),
    a = n(977997),
    s =
      (((i = {})[(i.NONE = 0)] = "NONE"),
      (i[(i.REQUESTED_TO_SPEAK = 1)] = "REQUESTED_TO_SPEAK"),
      (i[(i.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2)] =
        "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK"),
      (i[(i.ON_STAGE = 3)] = "ON_STAGE"),
      i);
  function l(e) {
    return null == e
      ? 0
      : e.suppress && null != e.requestToSpeakTimestamp
        ? 1
        : e.suppress || null == e.requestToSpeakTimestamp
          ? 3 * (!e.suppress && null == e.requestToSpeakTimestamp)
          : 2;
  }
  function o(e, t) {
    return (0, r.bG)(
      [a.A],
      () => (null == e || null == t ? 0 : l(a.A.getVoiceStateForChannel(t, e))),
      [e, t],
    );
  }
}
