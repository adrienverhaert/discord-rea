/* Recovered shipped factory. Module 439372.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2298652..2299351
 * Raw property SHA-256: 8b05e27891a00aec4bb5f79f17cbcf0d7af6d89181b564fc65e21146efad37f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => r }), n(423034));
  var i = n(73153);
  class r {
    initializedCount = 0;
    initialize() {
      (this.initializedCount++,
        this.initializedCount > 1 ||
          (this._initialize(),
          Object.entries(this.actions).forEach((e) => {
            let [t, n] = e;
            i.h.subscribe(t, "function" == typeof n ? n : n.callback);
          }),
          this.stores.forEach((e, t) => {
            (t.addChangeListener(e), e());
          })));
    }
    terminate(e) {
      this.initializedCount <= 0 ||
        (e ? (this.initializedCount = 0) : this.initializedCount--,
        0 === this.initializedCount &&
          (this._terminate(),
          Object.entries(this.actions).forEach((e) => {
            let [t, n] = e;
            i.h.unsubscribe(t, "function" == typeof n ? n : n.callback);
          }),
          this.stores.forEach((e, t) => {
            t.removeChangeListener(e);
          })));
    }
    actions = {};
    stores = new Map();
    _initialize() {}
    _terminate() {}
  }
}
