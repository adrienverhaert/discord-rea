/* Recovered shipped factory. Module 107351.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9673853..9674415
 * Raw property SHA-256: 9c5bd4786d5066bf92f2c65c83544b113c1513ed60acc150ca59570bff0fa28e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { D: () => d, r: () => o }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(508300));
  var i = n(132500),
    r = n(506774),
    a = n(927813);
  let s = "purchase_token",
    l = 60 * a.A.Millis.DAY;
  function o() {
    let e = r.w.get(s);
    if (null != e && e.expires >= Date.now()) return e.purchaseToken;
    let t = (0, i.A)();
    return (r.w.set(s, { purchaseToken: t, expires: Date.now() + l }), t);
  }
  async function d() {
    let e = new Uint8Array(
      o()
        .split("")
        .map((e) => e.charCodeAt(0)),
    );
    return btoa(
      String.fromCharCode(
        ...new Uint8Array(await window.crypto.subtle.digest({ name: "SHA-256" }, e)),
      ),
    );
  }
}
