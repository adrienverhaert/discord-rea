/* Recovered shipped factory. Module 49431.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7484139..7484345
 * Raw property SHA-256: 322b4883cf67deb882b98b03497c1e2ddd9d47d5810e81c43d10817c40db7922
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(439372),
    r = n(733391);
  class a extends i.A {
    actions = { POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this) };
    onPostConnectionOpen() {
      (0, r.Xw)();
    }
  }
  let s = new a();
}
