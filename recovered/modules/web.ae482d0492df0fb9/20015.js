/* Recovered shipped factory. Module 20015.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3027008..3027350
 * Raw property SHA-256: c27dd3a756631c3fbe5cd40dfb70e277b9b4fb8c5bd54bca80b418fc3e5f5e04
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { K: () => a, n: () => s }), n(938796));
  var i = n(136722),
    r = n(395671);
  function a(e) {
    return null == e
      ? i.iu(0)
      : null != e &&
          (e instanceof r.Ay ||
            ("flags" in e && "bigint" == typeof e.flags) ||
            ("flags" in e && null != e.flags && "object" == typeof e.flags && "parts" in e.flags))
        ? e.flags
        : i.iu(e.flags_new ?? e.flags ?? 0);
  }
  function s(e, t) {
    return i.zy(a(e), t);
  }
}
