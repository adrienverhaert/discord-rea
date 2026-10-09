/* Recovered shipped factory. Module 315069.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2487135..2487773
 * Raw property SHA-256: fbb6942c0bfac4b87eeeff4ab10675fdca3a0071ea124e0b841af2c300e70a98
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  class i {
    toJS() {
      return { ...this };
    }
    set(e, t) {
      let n = this[e];
      return t instanceof Date && n instanceof Date && t.getTime() === n.getTime()
        ? this
        : n !== t
          ? new this.constructor({ ...this, [e]: t })
          : this;
    }
    merge(e) {
      let t = null;
      for (let n in e) {
        if (!e.hasOwnProperty(n)) continue;
        let i = this[n],
          r = e[n];
        (r instanceof Date && i instanceof Date && r.getTime() === i.getTime()) ||
          (i !== r && (null == t && (t = { ...this }), (t[n] = e[n])));
      }
      return null != t ? new this.constructor(t) : this;
    }
    update(e, t, n) {
      null == n && ((n = t), (t = void 0));
      let r = this[e];
      return (
        r instanceof i ||
          (r instanceof Array ? (r = [...r]) : r instanceof Object && (r = { ...r })),
        void 0 === r && (r = t),
        this.set(e, n(r))
      );
    }
  }
}
