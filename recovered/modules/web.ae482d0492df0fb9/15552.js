/* Recovered shipped factory. Module 15552.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3033456..3033877
 * Raw property SHA-256: 211c2eb2fcbe5c4458436b0e155e9ae84c85b9c5b408b8babcc05025b2265f81
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function i(e) {
    let t = {};
    if (((t.error_code = e.code), null != e.errors)) {
      for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
      return t;
    }
    return ((t.message = e.message), null != e.retryAfter && (t.retry_after = e.retryAfter), t);
  }
  function r(e) {
    if (Object.keys(e.fields).length > 0) return e.fields;
    let t = { message: e.message };
    return (null != e.retryAfter && (t.retry_after = e.retryAfter), t);
  }
  n.d(t, { W: () => i, p: () => r });
}
