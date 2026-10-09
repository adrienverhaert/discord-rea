/* Recovered shipped factory. Module 767589.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9673592..9673852
 * Raw property SHA-256: 49c54b80c820169d307f29af1d4dc9b35db9a44e5c94bc96982a401b62e5cb15
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Su: () => a, ii: () => s, ob: () => l });
  var i = n(638504),
    r = n(65412);
  let a = { readerFactory: (e) => new i.V(e, new TextDecoder("utf-8")) };
  function s(e, t) {
    return null == t ? null : e.fromBinary((0, r.A)(t), a);
  }
  function l(e, t) {
    return (0, r.C)(e.toBinary(t));
  }
}
