/* Recovered shipped factory. Module 158390.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9881365..9882338
 * Raw property SHA-256: b73cd2aae05f07344178b6028eb8b5c3510012bfe771c0a458b99be6e2efe3ba
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  class i {
    min;
    max;
    jitter;
    _current;
    _timeoutId;
    _callback;
    _fails = 0;
    constructor(e = 500, t = null, n = !0) {
      if (e <= 0)
        throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
      ((this.min = e), (this.max = null != t ? t : 10 * e), (this.jitter = n), (this._current = e));
    }
    get fails() {
      return this._fails;
    }
    get current() {
      return this._current;
    }
    get pending() {
      return null != this._timeoutId;
    }
    succeed() {
      (this.cancel(), (this._fails = 0), (this._current = this.min));
    }
    fail(e, t) {
      this._fails += 1;
      let n = 2 * this._current;
      (this.jitter && (n *= Math.random()),
        (this._current = Math.min(this._current + n, this.max)));
      let i = null != t && t > this._current ? t : this._current;
      if (null != e) {
        if (null != this._timeoutId)
          if (this._callback !== e) throw Error("callback already pending");
          else this.cancel();
        ((this._callback = e),
          (this._timeoutId = setTimeout(() => {
            try {
              null != e && e();
            } finally {
              this.cancel();
            }
          }, i)));
      }
      return i;
    }
    cancel() {
      ((this._callback = null),
        null != this._timeoutId && (clearTimeout(this._timeoutId), (this._timeoutId = null)));
    }
  }
}
