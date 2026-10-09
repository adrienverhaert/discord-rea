/* Recovered shipped factory. Module 140175.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5884250..5884535
 * Raw property SHA-256: 5c5ceec41a1e79e7505c0d504d62044ed21fe1199e5242d898a9590ed839ba02
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { N: () => a });
  var i = n(73153),
    r = n(731854);
  function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (i.h.dispatch({ type: "PUSH_TO_TALK_STATE_CHANGE", isActive: t, isPriority: n }),
      e.eachConnection((e) => e.setForceAudioInput(t, n, !1), r.x.DEFAULT));
  }
}
