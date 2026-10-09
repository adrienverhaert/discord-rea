/* Recovered shipped factory. Module 85316.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1211166..1211387
 * Raw property SHA-256: ab6a0be9f7ddca64f2ef9fc967781d0cfe2d79d461ab845a2c9dfeda86165517
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { L: () => n });
  class n extends Set {
    constructor(e, t, r) {
      (super(e),
        e instanceof n
          ? ((this.anchorKey = t ?? e.anchorKey), (this.currentKey = r ?? e.currentKey))
          : ((this.anchorKey = t ?? null), (this.currentKey = r ?? null)));
    }
  }
}
