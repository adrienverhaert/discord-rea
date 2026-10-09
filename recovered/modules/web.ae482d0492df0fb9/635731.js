/* Recovered shipped factory. Module 635731.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2323583..2323864
 * Raw property SHA-256: e90c65fdd08edce5a9187d119dd8c1c4cbf150d901f5812465779976bfbc62a4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  let i = class extends Array {
    maxSize;
    constructor(e) {
      (super(), (this.maxSize = e));
    }
    push() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      for (let e of t) (this.length >= this.maxSize && this.shift(), super.push(e));
      return this.length;
    }
  };
}
