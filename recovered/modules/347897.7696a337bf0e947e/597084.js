/* Recovered shipped factory. Module 597084.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 616035..616610
 * Raw property SHA-256: 9947ce7f5d47e913b988ae5e869b0fdf13bfb6d0ec56ef1aaeab152240964f94
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  let n = r(152772);
  t.default = class {
    constructor() {
      this._queue = [];
    }
    enqueue(e, t) {
      let r = { priority: (t = Object.assign({ priority: 0 }, t)).priority, run: e };
      if (this.size && this._queue[this.size - 1].priority >= t.priority)
        return void this._queue.push(r);
      let i = n.default(this._queue, r, (e, t) => t.priority - e.priority);
      this._queue.splice(i, 0, r);
    }
    dequeue() {
      let e = this._queue.shift();
      return null == e ? void 0 : e.run;
    }
    filter(e) {
      return this._queue.filter((t) => t.priority === e.priority).map((e) => e.run);
    }
    get size() {
      return this._queue.length;
    }
  };
}
