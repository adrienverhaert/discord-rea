/* Recovered shipped factory. Module 194862.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2299352..2300076
 * Raw property SHA-256: a8eb6a3aedaae3905e735d54a96d880ebf552d414975654863761ad6d7492657
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(583613);
  class r {
    version = 0;
    data = new Map();
    cachedValues;
    cachedKeys;
    cachedEntries;
    constructor() {
      ((this.cachedValues = (0, i.L_)((e) => Array.from(this.data.values()))),
        (this.cachedKeys = (0, i.L_)((e) => Array.from(this.data.keys()))),
        (this.cachedEntries = (0, i.L_)((e) => Array.from(this.data.entries()))));
    }
    keys() {
      return this.cachedKeys(this.version);
    }
    values() {
      return this.cachedValues(this.version);
    }
    entries() {
      return this.cachedEntries(this.version);
    }
    size() {
      return this.data.size;
    }
    get(e) {
      return this.data.get(e);
    }
    set(e, t) {
      this.data.get(e) !== t && (this.data.set(e, t), this.version++);
    }
    delete(e) {
      let t = this.data.delete(e);
      return (t && this.version++, t);
    }
    clear() {
      0 !== this.data.size && (this.data.clear(), this.version++);
    }
  }
}
