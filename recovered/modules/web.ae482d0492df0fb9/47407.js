/* Recovered shipped factory. Module 47407.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8810951..8811182
 * Raw property SHA-256: 776515493347a7038fb19846b5c982c9f1ca757250315f0d012be53283f70478
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, W: () => a });
  var i = n(573648),
    r = n(395671);
  let a = "xbox:";
  class s extends r.Ay {
    constructor(e) {
      (super(e), (this.id = `${a}${e.name}`), (this.name = e.name));
    }
    getIconURL() {
      return i.A.get("xbox").icon.lightPNG;
    }
  }
}
