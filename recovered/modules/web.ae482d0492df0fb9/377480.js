/* Recovered shipped factory. Module 377480.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3227049..3227226
 * Raw property SHA-256: 039be449769c82e83f18065675c68efeeabc67af60359b644650fb7795ef3c3f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(73153),
    r = n(652215);
  function a(e, t) {
    i.h.dispatch({
      type: "CHANNEL_PRELOAD",
      guildId: e === r.ME ? null : e,
      channelId: t,
      context: r.QCW,
    });
  }
}
