/* Recovered shipped factory. Module 602034.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9876418..9877222
 * Raw property SHA-256: 8d6f20b8821275021e4e953f125a796d38a5a1cb7bd4ecd8b03034331578c65a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Aq: () => d,
    HP: () => s,
    KE: () => r,
    Lp: () => u,
    M4: () => o,
    Mz: () => l,
    eM: () => i,
    nF: () => c,
    t$: () => a,
  });
  let i = "data-list-item-id",
    r = "data-list-id";
  function a(e, t) {
    return `${e}___${t}`;
  }
  function s(e) {
    return e.split("___")[1];
  }
  function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
    return `[${t}="${e}"]`;
  }
  function o(e, t) {
    return `${e}-${t}`;
  }
  function d(e, t, n) {
    return `${e}-${t}-${n}`;
  }
  function c(e, t) {
    let n = !1;
    return function () {
      for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
      n || (e(...r), (n = !0), setTimeout(() => (n = !1), t));
    };
  }
  class u {
    makeHandler;
    handlers = new Map();
    constructor(e) {
      ((this.makeHandler = e), (this.makeHandler = e));
    }
    get(e) {
      let t = this.handlers.get(e);
      return (null == t && ((t = this.makeHandler(e)), this.handlers.set(e, t)), t);
    }
    clean() {
      (delete this.handlers, (this.handlers = new Map()));
    }
  }
}
