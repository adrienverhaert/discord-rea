/* Recovered shipped factory. Module 693806.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7275759..7275975
 * Raw property SHA-256: 9cc53dc22bcfbdc37264e58593980d4083e67eacee544bd5f0405181209932b8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(280450),
    r = n(734057),
    a = n(977997);
  function s() {
    let e = a.A.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
      t = e?.channelId;
    return r.A.getChannel(t);
  }
}
