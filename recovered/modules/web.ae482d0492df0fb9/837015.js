/* Recovered shipped factory. Module 837015.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3870198..3870530
 * Raw property SHA-256: a5f9e8e7ef073de97cefd143832059d40d9c8908f035387c42b3b61a6b27980f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, F: () => a });
  var i = n(575593),
    r = n(338535);
  function a(e) {
    return e instanceof s;
  }
  class s extends r.A {
    asset;
    label;
    palette;
    constructor(e) {
      (super(e),
        (this.type = i.R.NAMEPLATE),
        (this.asset = e.asset),
        (this.label = e.label),
        (this.palette = e.palette));
    }
    static fromServer(e) {
      return new s({ ...super.fromServer(e), ...e });
    }
  }
}
