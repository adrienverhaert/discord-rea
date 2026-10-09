/* Recovered shipped factory. Module 32523.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4435134..4436042
 * Raw property SHA-256: 4f6c55cb598c03cf9b6849b6b93d579357cfacdc78422b04ffc7119098c4d9cc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { hI: () => c });
  var i = n(582128),
    r = n(17928),
    a = n(618468),
    s = n(220478),
    l = n(102609),
    o = n(736056),
    d = n(688151);
  function c() {
    let e = (0, r.cf)([o.A], () => o.A.getRegisteredExperiments()),
      t = (0, r.cf)([o.A], () => o.A.getAllExperimentOverrideDescriptors());
    return {
      experiments: (0, i.useMemo)(
        () =>
          (function (e) {
            let t = {};
            for (let [n, i] of Object.entries(e))
              t[n] = {
                system: l.l5.LEGACY,
                kind: i.type === d.Vh.USER ? "user" : "guild",
                name: n,
                title: i.title,
                variants: i.buckets.map((e, t) => ({
                  id: e.valueOf(),
                  label:
                    "object" == typeof i.description
                      ? i.description[t]
                      : s.A.getExperimentBucketName(e),
                  shortLabel: s.A.getExperimentBucketName(e),
                  type:
                    e === d.RE.CONTROL
                      ? a.FZ.CONTROL
                      : e === d.RE.NOT_ELIGIBLE
                        ? a.FZ.UNSPECIFIED
                        : a.FZ.TREATMENT,
                })),
              };
            return t;
          })(e),
        [e],
      ),
      overridesInfo: (0, i.useMemo)(
        () =>
          (function (e) {
            let t = {};
            for (let [n, i] of Object.entries(e))
              t[n] = { experimentId: n, variantId: i.bucket.valueOf(), originalDescriptor: i };
            return t;
          })(t),
        [t],
      ),
    };
  }
}
