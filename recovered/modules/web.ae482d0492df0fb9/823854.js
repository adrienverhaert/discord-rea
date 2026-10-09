/* Recovered shipped factory. Module 823854.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8697912..8698308
 * Raw property SHA-256: 894d0098bb7c6590703fd192031e6123c245002cde46955830a2108c92165379
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(17928),
    r = n(73153),
    a = n(280450);
  class s extends i.Ay.Store {
    static displayName = "VoiceDareTrackingStore";
    initialize() {
      this.waitFor(a.default);
    }
    getProgressForUserId(e) {
      return null;
    }
    getTrackingEntryForUserId(e) {
      return null;
    }
    hasVoiceDareForUserId(e) {
      return !1;
    }
    getProgressForDareId(e) {
      return null;
    }
    getActiveDareForUserId(e) {
      return null;
    }
  }
  let l = new s(r.h, {});
}
