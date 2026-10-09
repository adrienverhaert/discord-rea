/* Recovered shipped factory. Module 799422.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9506619..9506881
 * Raw property SHA-256: a972491c7826b51b850063c3c2a8d7206bf991f6eead388eaef8e72a47e19c1c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => r }), n(205816));
  var i = n(136722);
  class r {
    static cache = {};
    static has(e, t) {
      return (e & t) === t;
    }
    static asBasicFlag(e) {
      return i.pG(24, e);
    }
    static asBigFlag(e) {
      return (Object.hasOwn(this.cache, e) || (this.cache[e] = i.iu(e)), this.cache[e]);
    }
  }
}
