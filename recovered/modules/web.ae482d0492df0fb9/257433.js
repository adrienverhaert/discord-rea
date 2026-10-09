/* Recovered shipped factory. Module 257433.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4434591..4435133
 * Raw property SHA-256: d968b192edc49096730abff751ab745f75513bf01fbc0d754b2206fb481843e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Fm: () => o, iN: () => l });
  var i = n(17928),
    r = n(102609),
    a = n(736056),
    s = n(710195);
  function l(e, t) {
    return (0, i.bG)([a.A, s.A], () =>
      e.system === r.l5.LEGACY
        ? a.A.getUserExperimentDescriptor(e.name)?.bucket
        : s.A.getAssignment(e.kind, t, e.name)?.variantId,
    );
  }
  function o(e, t) {
    return (0, i.bG)([a.A, s.A], () =>
      (function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.A, s.A],
          [i, l] = n;
        return null == e
          ? null
          : e.system === r.l5.LEGACY
            ? i.getLoadedUserExperiment(e.name)
            : l.getServerAssignment(e.kind, t, e.name);
      })(e, t, [a.A, s.A]),
    );
  }
}
