/* Recovered shipped factory. Module 972347.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11754328..11754839
 * Raw property SHA-256: 6b71b67c9b6445aeeae1778ad9df2b881e84aa76197f634703fe9b3fc5fda312
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(143236);
  class r {
    emitter = new i.EventEmitter();
    on(e, t) {
      this.emitter.on(e, t);
    }
    off(e, t) {
      this.emitter.off(e, t);
    }
    once(e, t) {
      this.emitter.once(e, t);
    }
    addListener(e, t) {
      this.emitter.addListener(e, t);
    }
    removeListener(e, t) {
      this.emitter.removeListener(e, t);
    }
    removeAllListeners() {
      this.emitter.removeAllListeners();
    }
    emit(e) {
      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        n[i - 1] = arguments[i];
      this.emitter.emit(e, ...n);
    }
    listenerCount(e) {
      return this.emitter.listenerCount(e);
    }
  }
}
