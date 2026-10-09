/* Recovered shipped factory. Module 166590.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3872610..3872865
 * Raw property SHA-256: 00878c76b766cebed5ac5937b606db19af4cd97d6abbb145d5034efec5b2a316
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, g: () => a });
  var i = n(575593),
    r = n(338535);
  function a(e) {
    return e instanceof s;
  }
  class s extends r.A {
    constructor(e) {
      (super(e), (this.type = i.R.NONE));
    }
    static fromServer(e) {
      return new s({ ...super.fromServer(e), type: i.R.NONE });
    }
  }
}
