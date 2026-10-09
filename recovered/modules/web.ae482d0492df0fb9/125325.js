/* Recovered shipped factory. Module 125325.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8291775..8292048
 * Raw property SHA-256: 5969524864b7acc82aa4dc0f372a3de564215b43d780b705197a7c3c8ec7452a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { gq: () => a, rQ: () => s, tM: () => r });
  let i = {};
  function r(e, t) {
    return i[`${e}:${t}`];
  }
  function a(e, t, n) {
    let r = `${e}:${t}`;
    i[r] = { ...i[r], ...n };
  }
  function s(e) {
    for (let t in i) {
      let [n, r] = (function (e) {
        let [t, n] = e.split(":");
        return [t, n];
      })(t);
      e(n, r, i[t]);
    }
    i = {};
  }
}
