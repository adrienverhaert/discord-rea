/* Recovered shipped factory. Module 757319.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2752951..2753270
 * Raw property SHA-256: 80d23161870a68b0fa94ce888181ea201c899e4a5a4fca61db37c5e433128efb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { _: () => l });
  var i = n(945810),
    r = n(207913),
    a = n(393033);
  let s = (0, i.mj)({
    kind: "user",
    name: "2026-07-manual-age-assurance-fallback",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
  });
  function l(e) {
    return (0, a.qn)()
      ? r.A.getIsManualReviewFallbackEnabled()
      : s.getConfig({ location: e }).enabled;
  }
}
