/* Recovered shipped factory. Module 695904.
 * Source: recovered/web/assets/3273259ebbc0a8f3.js
 * UTF-16 property offsets: 1067..1617
 * Raw property SHA-256: e295b6735239ab85fdecf5afdfa8349c127d82b53402a030429ba4cb5ca41736
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { aS: () => u, bq: () => c, kM: () => m });
  var i = n(17928),
    l = n(945810),
    s = n(710195),
    r = n(287809);
  let a = { enabled: !1 },
    d = { 0: a, 1: { enabled: !0 } },
    o = (0, l.mj)({
      name: "2026-08-profile-read-state-v1",
      kind: "user",
      defaultConfig: a,
      variations: d,
    });
  function u() {
    let t = r.default.getCurrentUser()?.id;
    if (null == t) return null;
    let e = s.A.getAssignment("user", t, o.definition.name);
    return e?.variantId == null || e.useAsEligibility ? null : (d[e.variantId] ?? null);
  }
  function c() {
    return (0, i.bG)([r.default, s.A], u);
  }
  function m(t) {
    let { location: e } = t;
    return (o.useConfig({ location: e }), null);
  }
}
