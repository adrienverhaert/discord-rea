/* Recovered shipped factory. Module 454932.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6559927..6560490
 * Raw property SHA-256: 7c1a8da16db325cfad556164edbc6fd24e608f1d2fb0d85881fddf8ee776c983
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { o: () => d });
  var i = n(17928),
    r = n(587895),
    a = n(994500),
    s = n(427262),
    l = n(420825),
    o = n(660183);
  function d(e) {
    let { user: t, applicationId: n, isGameRelationship: d } = e,
      c = (0, i.bG)([a.A], () => a.A.getNickname(t.id)),
      u = s.Ay.useName(t),
      _ = s.Ay.useUserTag(t),
      E = (0, i.bG)([r.A], () => (null != n ? r.A.getApplication(n) : null)),
      A = (0, l.z)(t.id);
    return t.isProvisional
      ? {
          displayName: c ?? u,
          subLabel: null,
          application: E,
          applicationName: E?.name ?? null,
          note: null,
        }
      : {
          displayName: c ?? u,
          subLabel: d ? o.intl.string(o.t["Uv/eTx"]) : _,
          application: E,
          applicationName: E?.name ?? null,
          note: A,
        };
  }
}
