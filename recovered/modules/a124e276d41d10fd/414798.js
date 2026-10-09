/* Recovered shipped factory. Module 414798.
 * Source: recovered/web/assets/a124e276d41d10fd.js
 * UTF-16 property offsets: 95..287
 * Raw property SHA-256: 9e26f0bf132c24ae9611e2667796e04b5fae2f6f212a7c88c835d123e4167afc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (p, t, s) {
  s.d(t, { A: () => i });
  var h = s(73153);
  let i = {
    startTyping(p) {
      h.h.dispatch({ type: "TYPING_START_LOCAL", channelId: p });
    },
    stopTyping(p) {
      h.h.dispatch({ type: "TYPING_STOP_LOCAL", channelId: p });
    },
  };
}
