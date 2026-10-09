/* Recovered shipped factory. Module 49491.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4754515..4754771
 * Raw property SHA-256: 2980e736b61ce1546fb1e6abb2639c15a7f2e8525df6809204a4d74e6aab7b32
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l, b: () => s });
  var i = n(17928),
    r = n(501592),
    a = n(287809);
  function s(e, t) {
    return null != e && !1 === t && (0, r.K)(e.contentClassification);
  }
  function l(e) {
    return s(
      e,
      (0, i.bG)([a.default], () => a.default.getCurrentUser()?.nsfwAllowed),
    );
  }
}
