/* Recovered shipped factory. Module 792336.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1150156..1150775
 * Raw property SHA-256: 017f48a7ec794ce11d81afdbbe3f67ed776e82861109a7f9ddae342b3679d10e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { K: () => i });
  var n = r(1576);
  class i {
    constructor(e) {
      this.ref = e;
    }
    getItemRect(e) {
      let t = this.ref.current;
      if (!t) return null;
      let r = null != e ? (0, n.au)(this.ref, e) : null;
      if (!r) return null;
      let i = t.getBoundingClientRect(),
        o = r.getBoundingClientRect();
      return {
        x: o.left - i.left - t.clientLeft + t.scrollLeft,
        y: o.top - i.top - t.clientTop + t.scrollTop,
        width: o.width,
        height: o.height,
      };
    }
    getContentSize() {
      let e = this.ref.current;
      return { width: e?.scrollWidth ?? 0, height: e?.scrollHeight ?? 0 };
    }
    getVisibleRect() {
      let e = this.ref.current;
      return {
        x: e?.scrollLeft ?? 0,
        y: e?.scrollTop ?? 0,
        width: e?.clientWidth ?? 0,
        height: e?.clientHeight ?? 0,
      };
    }
  }
}
