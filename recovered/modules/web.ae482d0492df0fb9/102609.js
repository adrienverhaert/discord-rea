/* Recovered shipped factory. Module 102609.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4404683..4405768
 * Raw property SHA-256: 92b5e9e76f865decdf5b74b16cc046ae60fbde98abd119592bd3674729af8705
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { LQ: () => l, Ut: () => d, l5: () => c, t$: () => u, wh: () => o });
  var i,
    r = n(73153),
    a = n(736056),
    s = n(688151);
  function l(e, t, n) {
    a.A.trackExposure({
      experimentId: e,
      descriptor: t,
      location: n?.location,
      location_stack: n?.analyticsLocations,
      fingerprint: n?.fingerprint,
      excluded: n?.excluded,
      exposureType: n?.exposureType,
    });
  }
  function o(e) {
    let { id: t, title: n, description: i, buckets: r, commonTriggerPoint: l } = e;
    return (
      (0, a.N)({
        experimentId: t,
        experimentType: s.Vh.USER,
        title: n,
        description: i,
        buckets: r,
        commonTriggerPoint: l,
      }),
      { id: t }
    );
  }
  function d(e) {
    let { id: t, title: n, description: i, buckets: r, commonTriggerPoint: l } = e;
    return (
      (0, a.N)({
        experimentId: t,
        experimentType: s.Vh.GUILD,
        title: n,
        description: i,
        buckets: r,
        commonTriggerPoint: l,
      }),
      { id: t }
    );
  }
  var c = (((i = {}).LEGACY = "legacy"), (i.APEX = "apex"), i);
  function u(e, t, n) {
    switch (e) {
      case "legacy":
        r.h.dispatch({
          type: "EXPERIMENT_OVERRIDE_BUCKET",
          experimentId: t,
          experimentBucket: null != n ? n : null,
        });
        break;
      case "apex":
        null == n
          ? r.h.dispatch({ type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: t })
          : r.h.dispatch({
              type: "APEX_EXPERIMENT_OVERRIDE_CREATE",
              experimentName: t,
              variantId: n,
            });
    }
  }
}
