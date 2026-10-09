/* Recovered shipped factory. Module 209489.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9608720..9608991
 * Raw property SHA-256: d8ff7a191771dc6a51e20b8fd718e281e9d15a98449ce73059769b60538d02b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  (n.d(t, { A: () => s }), n(321073), (i = n(4472).A));
  let r = [],
    a = !1,
    s = {
      ...i,
      awaitOnline: () =>
        new Promise((e) => {
          if (i.isOnline()) return e();
          (r.push(e),
            a ||
              ((a = !0),
              i.addOnlineCallback(function e() {
                (r.forEach((e) => e()), (r.length = 0), (a = !1), i.removeOnlineCallback(e));
              })));
        }),
    };
}
