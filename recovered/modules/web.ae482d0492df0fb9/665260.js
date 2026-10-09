/* Recovered shipped factory. Module 665260.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11738473..11738888
 * Raw property SHA-256: 63f97496680743967484e6cfb1c5927cee91db77bdce6b949db14cea74f50eab
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t) {
    return (e & t) === t;
  }
  function r(e, t) {
    return (e & t) != 0;
  }
  function a(e, t) {
    return e | t;
  }
  function s(e, t) {
    return e & ~t;
  }
  function l(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      n[i - 1] = arguments[i];
    return n.reduce((e, t) => e & ~t, e);
  }
  function o(e, t, n) {
    return n ? e | t : e & ~t;
  }
  function d(e, t) {
    return i(e, t) ? e & ~t : e | t;
  }
  n.d(t, {
    Lt: () => i,
    PQ: () => d,
    UI: () => a,
    VL: () => s,
    br: () => r,
    iE: () => l,
    lA: () => o,
  });
}
