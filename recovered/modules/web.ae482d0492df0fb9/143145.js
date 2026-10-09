/* Recovered shipped factory. Module 143145.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5780956..5781199
 * Raw property SHA-256: 5bd38b9c79b40930fc5c99bee00612b7f2e7a9dda8fc31b090f3db039ea6ca03
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e, t, n) {
    return "string" == typeof e.content || void 0 === e.content ? e.content : t(e.content, n);
  }
  function r(e) {
    return (
      "home" === e || "browse" === e || "customize" === e || "guide" === e || "linked-roles" === e
    );
  }
  n.d(t, { d: () => r, t: () => i });
}
