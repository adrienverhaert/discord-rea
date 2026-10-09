/* Recovered shipped factory. Module 978884.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 616611..617210
 * Raw property SHA-256: 646cb2bfa947d7b5354cf1c23fb9c0e23001893b81849590dd504c6ac4be04c8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  let n = r(221180);
  class i extends Error {
    constructor(e) {
      (super(e), (this.name = "TimeoutError"));
    }
  }
  let o = (e, t, r) =>
    new Promise((o, a) => {
      if ("number" != typeof t || t < 0)
        throw TypeError("Expected `milliseconds` to be a positive number");
      if (t === 1 / 0) return void o(e);
      let s = setTimeout(() => {
        if ("function" == typeof r) {
          try {
            o(r());
          } catch (e) {
            a(e);
          }
          return;
        }
        let n = "string" == typeof r ? r : `Promise timed out after ${t} milliseconds`,
          s = r instanceof Error ? r : new i(n);
        ("function" == typeof e.cancel && e.cancel(), a(s));
      }, t);
      n(e.then(o, a), () => {
        clearTimeout(s);
      });
    });
  ((e.exports = o), (e.exports.default = o), (e.exports.TimeoutError = i));
}
