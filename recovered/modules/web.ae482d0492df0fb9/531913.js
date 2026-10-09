/* Recovered shipped factory. Module 531913.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3008149..3008936
 * Raw property SHA-256: 712d587aa4560c57343a2e72c51da16348e75ad300f6b39a9aa0a6eb7bc99016
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(582128),
    r = n(176999),
    a = n(17928),
    s = n(549699),
    l = n(29496),
    o = n(201718),
    d = n(339580),
    c = n(773669),
    u = n(403362),
    _ = n(352003);
  let E = [];
  function A(e, t) {
    (0, o.P)(e);
    let n = (0, a.bG)([d.A], () => d.A.getUserIdentityByApplication(e, t)),
      A = (0, a.bG)([c.default], () => c.default.locale),
      h = i.useMemo(() => [t], [t]),
      [f] = (0, _.A)(h),
      I = i.useMemo(() => (0, r.VG)(n?.profile ?? void 0), [n?.profile]),
      p = (0, a.bG)([d.A], () => d.A.getFetchState(e) !== d.e.FETCHED),
      T = (0, a.bG)([l.A], () => l.A.getAssets(t)),
      m = i.useMemo(() => Object.values(T ?? {}).filter(u.Vq), [T]),
      g = i.useCallback((e) => (0, s.Q)(t, e, e.metadata.width), [t]);
    return {
      locale: A,
      surfaceConfigs: f?.surfaces ?? {},
      isLoading: p,
      hasIdentity: null != n,
      resolutionContext: {
        data: I,
        applicationAssets: m,
        getApplicationAssetUrl: g,
        localizedStrings: E,
      },
    };
  }
}
