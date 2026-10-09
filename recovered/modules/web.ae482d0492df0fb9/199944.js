/* Recovered shipped factory. Module 199944.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7739977..7740263
 * Raw property SHA-256: bf9d7ebb3f99577b0fa0b742fcb53dd808d931b8d63e124386b56482ad17d419
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(439372),
    r = n(913612),
    a = n(935671);
  class s extends i.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen, LOGOUT: this.handleLogout };
    handlePostConnectionOpen() {
      ((0, r.C)(), (0, a.Tn)("startup"));
    }
    handleLogout() {
      (0, a.AV)();
    }
  }
  let l = new s();
}
