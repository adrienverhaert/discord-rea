/* Recovered shipped factory. Module 216418.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2644514..2644784
 * Raw property SHA-256: 8847bb6c990f506a8d0a2d6c0675ca9f0f9bb0af44d2a0bf16c91525a74dc60e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s, q: () => l });
  var i = n(582128),
    r = n(587895),
    a = n(818023);
  function s(e) {
    return i.useMemo(() => l(e), [e]);
  }
  function l(e) {
    return (
      !(null != e && a.xW.includes(e ?? "")) ||
      r.A.getApplication(e)?.embeddedActivityConfig?.legacy_responsive_aspect_ratio
    );
  }
}
