/* Recovered shipped factory. Module 925847.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6554094..6554250
 * Raw property SHA-256: d0188e60121b7be914cdd764b26ef1c053aaa6e4931365ed426c3ebaaa3a63ea
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => r });
  var i = n(492462);
  function r() {
    let { load_id: e } = (0, i.parse)(window.location.search);
    return Array.isArray(e) ? e[0] : e;
  }
}
