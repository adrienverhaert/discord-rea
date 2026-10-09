/* Recovered shipped factory. Module 977445.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4780458..4780845
 * Raw property SHA-256: b6a4c3f952b0e5a20249d8722c29b115aa5d5a8ebeebdf487be8b99e7824a47a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Fs: () => s, pq: () => l, uS: () => o });
  var i = n(17928),
    r = n(10716),
    a = n(147964);
  function s(e) {
    return a.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e);
  }
  function l() {
    return null != a.A.getTestModeApplicationId() || r.A.getIsEnabled();
  }
  function o(e) {
    return (0, i.bG)(
      [a.A, r.A],
      () => null != e && (a.A.inTestModeForApplication(e) || r.A.inDevModeForApplication(e)),
      [e],
    );
  }
}
