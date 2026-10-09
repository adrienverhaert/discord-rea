/* Recovered shipped factory. Module 230959.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5200196..5200551
 * Raw property SHA-256: 866e0a983722f6565afa33a0caf3de3a308956628d5132efae2eca0e0c425f4e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { R: () => a });
  var i = n(157347),
    r = n(70738);
  function a(e, t) {
    let n = (0, i.vn)(e.joinedAt);
    switch (t) {
      case r.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
        return n;
      case r.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
        return -n;
      case r.mF.ORDER_BY_USER_ID_ASC:
        return parseInt(e.userId);
      case r.mF.ORDER_BY_USER_ID_DESC:
        return -parseInt(e.userId);
      default:
        return -n;
    }
  }
}
