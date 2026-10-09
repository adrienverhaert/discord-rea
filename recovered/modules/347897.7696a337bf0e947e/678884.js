/* Recovered shipped factory. Module 678884.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 804192..804538
 * Raw property SHA-256: d6fad74abaa74d9943c93c5cc2041fd56dfb174b83d8b7530f43f4c4d16861a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = class {
    constructor() {
      ((this.max = 1e3), (this.map = new Map()));
    }
    get(e) {
      let t = this.map.get(e);
      if (void 0 !== t) return (this.map.delete(e), this.map.set(e, t), t);
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, t) {
      if (!this.delete(e) && void 0 !== t) {
        if (this.map.size >= this.max) {
          let e = this.map.keys().next().value;
          this.delete(e);
        }
        this.map.set(e, t);
      }
      return this;
    }
  };
}
