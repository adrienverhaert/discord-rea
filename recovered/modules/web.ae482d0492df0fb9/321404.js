/* Recovered shipped factory. Module 321404.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5931712..5931966
 * Raw property SHA-256: a4af65b6dfa68435a53d5edda989e67432729f66195392aa1f4464c86162e71e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => s, c: () => l });
  var i = n(17928),
    r = n(380335),
    a = n(157550);
  function s(e) {
    return (0, i.bG)([r.A], () => r.A.isMessageRequest(e), [e]);
  }
  function l(e) {
    return (0, i.bG)([r.A, a.A], () => null != e && (r.A.isMessageRequest(e) || a.A.isSpam(e)));
  }
}
