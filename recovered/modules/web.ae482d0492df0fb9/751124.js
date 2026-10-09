/* Recovered shipped factory. Module 751124.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4928465..4928702
 * Raw property SHA-256: 1f39f3de89ea6b457655bb20aa8130f6e4bedd04f87ae81f0a6e40ad0b99d2d1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  let i = new (n(626584).A)("createWebSocket");
  function r(e, t) {
    try {
      return new WebSocket(e, t);
    } catch (n) {
      throw (
        i.warn(`Failed to create websocket for url '${e}' (protocols: ${JSON.stringify(t)})`),
        n
      );
    }
  }
}
