/* Recovered shipped factory. Module 823441.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8802386..8802652
 * Raw property SHA-256: b29c5548a8c3b214b9a6616d8743652bc4d81eca4ecd1b368e807599c620bd30
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, K: () => s });
  var i = n(573648),
    r = n(395671),
    a = n(660183);
  let s = "twitch:";
  class l extends r.Ay {
    constructor(e) {
      (super(e), (this.id = `${s}${e.url}`), (this.name = a.intl.string(a.t.JIPtgq)));
    }
    getIconURL() {
      return i.A.get("twitch").icon.lightPNG;
    }
  }
}
