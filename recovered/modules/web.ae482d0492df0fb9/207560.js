/* Recovered shipped factory. Module 207560.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7213164..7213695
 * Raw property SHA-256: 81c5f41dc2aff4cbff89bf29b745ddde816cbf1e98caf477d9739b94964e982a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    SJ: () => u,
    To: () => l,
    aX: () => s,
    d6: () => a,
    fk: () => c,
    u0: () => d,
    yv: () => o,
  });
  var i = n(17928),
    r = n(923495);
  function a(e) {
    return r.A.isFeatureAgeGated(e);
  }
  function s(e) {
    return (0, i.bG)([r.A], () => r.A.isFeatureAgeGated(e));
  }
  function l(e) {
    return r.A.isSettingTeenByDefault(e);
  }
  function o(e) {
    return (0, i.bG)([r.A], () => r.A.isSettingTeenByDefault(e));
  }
  function d() {
    return r.A.hasAgeGatedFeatures();
  }
  function c() {
    return (0, i.bG)([r.A], () => r.A.hasAgeGatedFeatures());
  }
  function u() {
    return (0, i.bG)([r.A], () => r.A.hasTeenDefaults());
  }
}
