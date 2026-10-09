/* Recovered shipped factory. Module 940950.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7303003..7303255
 * Raw property SHA-256: ed222a2b63052ae2cc6cf1fdc5d41923513e326448ca53d3a5068e777caa7640
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(730852),
    r = n(439372),
    a = n(763827);
  class s extends r.A {
    actions = { VOICE_STATE_UPDATES: this.handleVoiceStateUpdates };
    handleVoiceStateUpdates() {
      a.A.didReconnectTimeOut() && i.default.disconnect();
    }
  }
  let l = new s();
}
