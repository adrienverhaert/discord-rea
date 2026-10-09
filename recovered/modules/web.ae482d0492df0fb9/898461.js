/* Recovered shipped factory. Module 898461.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3859081..3859390
 * Raw property SHA-256: 38a34e29294cb4d74380f649afa4223bdc030ddcd11c00913bf828dabc908730
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, T: () => a });
  var i = n(575593),
    r = n(338535);
  function a(e) {
    return e instanceof s;
  }
  class s extends r.A {
    asset;
    label;
    constructor(e) {
      (super(e),
        (this.type = i.R.AVATAR_DECORATION),
        (this.asset = e.asset),
        (this.label = e.label));
    }
    static fromServer(e) {
      return new s({ ...super.fromServer(e), ...e });
    }
  }
}
