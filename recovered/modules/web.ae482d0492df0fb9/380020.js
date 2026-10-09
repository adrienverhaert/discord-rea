/* Recovered shipped factory. Module 380020.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9182948..9183253
 * Raw property SHA-256: 05e704eeb79873f1e7a08672949745a57d153c52b1fd4770f6e49c6c9a21aaf6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(73153),
    r = n(439372),
    a = n(461213);
  class s extends r.A {
    stores = new Map().set(a.A, l);
  }
  function l() {
    i.h.dispatch({
      type: "SELF_PRESENCE_STORE_UPDATE",
      status: a.A.getStatus(),
      activities: a.A.getActivities(!0),
      hiddenActivities: a.A.getHiddenActivities(),
    });
  }
  let o = new s();
}
