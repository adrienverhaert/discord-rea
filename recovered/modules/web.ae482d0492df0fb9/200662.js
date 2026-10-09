/* Recovered shipped factory. Module 200662.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5379008..5379246
 * Raw property SHA-256: 4f86dae3f330b817ff0acc94927f86d7763eba3185aaa1d621da7304bfe3ae11
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Eu: () => a, UZ: () => s, p6: () => r });
  var i = n(155718);
  function r(e, t) {
    return e === i.kc.CHAT ? "/" + t : t;
  }
  function a(e, t) {
    return `${e}:${t}`;
  }
  function s(e) {
    return Object.fromEntries(e.map((e) => [a(e.id, e.type), e]));
  }
  n(392054);
}
