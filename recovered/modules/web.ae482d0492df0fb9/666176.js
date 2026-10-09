/* Recovered shipped factory. Module 666176.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8790224..8790498
 * Raw property SHA-256: 2d098ceaf4936c5a6dcc25583674faaf11e9708d41738df1d585e95cacaf463b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { HT: () => o, WY: () => a });
  var i = n(573648),
    r = n(395671);
  let a = "spotify",
    s = i.A.get(a);
  class l extends r.Ay {
    constructor() {
      (super({}), (this.id = a), (this.name = s.name));
    }
    getIconURL(e) {
      return s.icon.lightPNG;
    }
    getWhiteIconURL() {
      return s.icon.whitePNG;
    }
  }
  let o = new l();
}
