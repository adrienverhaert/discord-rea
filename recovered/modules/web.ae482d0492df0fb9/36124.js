/* Recovered shipped factory. Module 36124.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2519843..2520466
 * Raw property SHA-256: 8a6c7f7768d741141178372742efade138f6eddadddb78c36da0ead046940319
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => c, JM: () => l, LD: () => o });
  var i = n(435558),
    r = n.n(i),
    a = n(635377),
    s = n.n(a);
  let l = 100,
    o = [[0, 99]];
  function d(e) {
    let t = {};
    return (
      e.forEach((e, n) => {
        t[n] = e;
      }),
      t
    );
  }
  class c {
    _subscriptions = {};
    _onChange;
    constructor(e) {
      this._onChange = e;
    }
    reset() {
      this._subscriptions = {};
    }
    get(e) {
      return d(this._get(e));
    }
    _get(e) {
      return this._subscriptions[e] ?? new (s())({ max: 5 });
    }
    clear(e) {
      delete this._subscriptions[e];
    }
    subscribe(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = this._get(e),
        s = a.get(t);
      return (
        !((i && null != s) || r().isEqual(s, n)) &&
        (a.set(t, n), (this._subscriptions[e] = a), this._onChange(e, d(a)), !0)
      );
    }
  }
}
