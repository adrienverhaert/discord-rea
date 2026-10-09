/* Recovered shipped factory. Module 279208.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5653437..5653713
 * Raw property SHA-256: 88e9931783473a30918ffb618cb75211d88fed00e1c84c8cf22649f81bebb37d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i() {
    let e,
      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      i = window.GLOBAL_ENV.INVITE_HOST;
    return ((e = `/${t}`), `${n ? `${location.protocol}//` : ""}${i}${e}`);
  }
  n.d(t, { A: () => i });
}
