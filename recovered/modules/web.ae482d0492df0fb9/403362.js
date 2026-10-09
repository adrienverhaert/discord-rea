/* Recovered shipped factory. Module 403362.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9566364..9566741
 * Raw property SHA-256: 59c9497302b9277d2fa01085f8c4f1dc68a7cbfe155a99b4ae407aebfdbf96d8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Eo: () => d,
    QE: () => c,
    S1: () => o,
    Vq: () => l,
    iT: () => a,
    m6: () => r,
    xb: () => s,
  });
  let i = "development" === window.GLOBAL_ENV.PROJECT_ENV;
  function r() {
    return !1;
  }
  function a() {
    return i;
  }
  function s(e) {
    throw Error(`Unhandled value: ${e}`);
  }
  function l(e) {
    return null != e;
  }
  function o(e, t) {
    return t.includes(e);
  }
  function d(e, t) {
    return t.has(e);
  }
  function c(e) {
    return null != e[1];
  }
}
