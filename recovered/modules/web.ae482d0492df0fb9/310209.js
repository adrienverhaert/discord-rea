/* Recovered shipped factory. Module 310209.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8720145..8720660
 * Raw property SHA-256: 95bf133638e5602d8e37752c64e86fa591e7ef2e7b003e621bde643d8eb994e9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, j: () => l });
  var i,
    r = n(315069),
    a = n(32731),
    s = n(395671),
    l = (((i = {}).WISHLIST = "WISHLIST"), (i.RECOMMENDATION = "RECOMMENDATION"), i);
  class o extends r.A {
    skus;
    skusToUserAndReason;
    applications;
    constructor(e) {
      (super(),
        (this.skus = e.skus.map((e) => a.A.createFromServer(e))),
        (this.skusToUserAndReason = Object.fromEntries(
          Object.entries(e.skus_to_user_and_reason).map((e) => {
            let [t, n] = e;
            return [t, n];
          }),
        )),
        (this.applications = e.applications.map((e) => s.Ay.createFromServer(e))));
    }
    static fromServer(e) {
      return new o(e);
    }
  }
}
