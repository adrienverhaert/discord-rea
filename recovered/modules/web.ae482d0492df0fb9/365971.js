/* Recovered shipped factory. Module 365971.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9804452..9804684
 * Raw property SHA-256: 61de8cc065495e2de002ba5f4bb1e263dea4083a45cb46ee3b27866fa110472e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q2: () => r, Xg: () => s, rw: () => a });
  var i = n(435558);
  function r(e) {
    return e.__DISCORD_WINDOW_ID;
  }
  function a(e) {
    let t = (0, i.uniqueId)("window-");
    return ((e.__DISCORD_WINDOW_ID = t), t);
  }
  function s() {
    return r(window);
  }
}
