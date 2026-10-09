/* Recovered shipped factory. Module 70738.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5168364..5168876
 * Raw property SHA-256: 1e15825598c946f3921b4e2fac919aa6803b7653dfa1429c0c9e549f1acd8b59
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { mF: () => s, tX: () => i, vf: () => r });
  let i = 2 * n(927813).A.Millis.DAY;
  function r(e) {
    let { joinedAt: t, userId: n } = e;
    return null == t ? null : { guild_joined_at: new Date(t).getTime(), user_id: n };
  }
  var a,
    s =
      (((a = {})[(a.ORDER_BY_UNSPECIFIED = 0)] = "ORDER_BY_UNSPECIFIED"),
      (a[(a.ORDER_BY_GUILD_JOINED_AT_DESC = 1)] = "ORDER_BY_GUILD_JOINED_AT_DESC"),
      (a[(a.ORDER_BY_GUILD_JOINED_AT_ASC = 2)] = "ORDER_BY_GUILD_JOINED_AT_ASC"),
      (a[(a.ORDER_BY_USER_ID_DESC = 3)] = "ORDER_BY_USER_ID_DESC"),
      (a[(a.ORDER_BY_USER_ID_ASC = 4)] = "ORDER_BY_USER_ID_ASC"),
      a);
}
