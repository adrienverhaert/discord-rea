/* Recovered shipped factory. Module 585250.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3167452..3167849
 * Raw property SHA-256: d2abe08c11e21d04ab952c462521a72212ef16ea9510d8abbb3d8389d510a350
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(439372),
    r = n(763827),
    a = n(198052);
  class s extends i.A {
    stores = new Map().set(a.A, this.handleFocusParticipant);
    handleFocusParticipant() {
      let e = r.A.getChannelId();
      if (null != e) {
        let t = a.A.getSelectedParticipantId(e),
          n = a.A.getVideoParticipants(e);
        r.A.getRTCConnection()?.setSelectedParticipant(
          n.find((e) => e.id === t && !e.localVideoDisabled)?.id,
        );
      }
    }
  }
  let l = new s();
}
