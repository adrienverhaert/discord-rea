/* Recovered shipped factory. Module 39418.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4369043..4369661
 * Raw property SHA-256: 8ea9a0bf7994eb9e72d9693de17a88f973de808c8891b209aad135fd7af82406
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { o: () => o });
  var i = n(38405),
    r = n(652215);
  let a = [r.t02.UNAUTHORIZED, r.t02.EMAIL_VERIFICATION_REQUIRED, r.t02.USER_BANNED],
    s = new Set([500, 502, 503, 504]),
    l = new Set([401, 403, 405, 409, 429]);
  function o(e) {
    null != e &&
      !(function (e) {
        if (null == e) return !1;
        let t = e?.cause;
        return (
          !!(
            t?.crossDomain === !0 ||
            ("status" in e &&
              "number" == typeof e.status &&
              (0 === e.status || s.has(e.status) || l.has(e.status))) ||
            ("code" in e && "number" == typeof e.code && a.includes(e.code)) ||
            ("body" in e &&
              null != e.body &&
              "object" == typeof e.body &&
              "code" in e.body &&
              "number" == typeof e.body?.code &&
              a.includes(e.body.code))
          ) || !1
        );
      })(e) &&
      i.A.captureException(e);
  }
}
