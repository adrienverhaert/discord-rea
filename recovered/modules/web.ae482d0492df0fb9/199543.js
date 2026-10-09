/* Recovered shipped factory. Module 199543.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7374753..7374995
 * Raw property SHA-256: 63bdc42e28fd2e6c252f6396a29a575d26f230d45e43a8f8d04764c92ee84d4b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(439372),
    r = n(216623);
  async function a() {
    await (0, r.AX)();
  }
  class s extends i.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
      a();
    };
  }
  let l = new s();
}
