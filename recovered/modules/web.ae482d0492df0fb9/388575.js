/* Recovered shipped factory. Module 388575.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7411565..7411892
 * Raw property SHA-256: eb44d2d3135cb9153135d0bb2b4e052989e7398da21443e2483ed764caa2c051
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(724066),
    r = n(439372),
    a = n(822382);
  class s extends r.A {
    actions = { USER_SETTINGS_PROTO_UPDATE: a.IY, POST_CONNECTION_OPEN: a.IY };
    _unsubscribeIntlLoadingStore;
    _initialize() {
      this._unsubscribeIntlLoadingStore = (0, i.I)(a.IY);
    }
    _terminate() {
      this._unsubscribeIntlLoadingStore?.();
    }
  }
  let l = new s();
}
