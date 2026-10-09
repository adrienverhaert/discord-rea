/* Recovered shipped factory. Module 870136.
 * Source: recovered/web/assets/01b22e209092a111.js
 * UTF-16 property offsets: 94..522
 * Raw property SHA-256: 58c41599bea4c19cf78fb3f49073ae0857e74385cf0eb8d083def310f98edf44
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, t, u) {
  u.d(t, { Ay: () => o, U0: () => s, c: () => l });
  var e = u(17928),
    r = u(696451),
    i = u(287809),
    c = u(316031);
  function l(n) {
    let t = (0, e.bG)([i.default], () => i.default.getCurrentUser());
    return o(t?.id, n);
  }
  function a(n, t, u) {
    return null != t && null != n ? u.getMember(t, n) : null;
  }
  function d(n) {
    return [n?.communicationDisabledUntil ?? null, (0, c.Z)(n)];
  }
  function o(n, t) {
    return d((0, e.bG)([r.Ay], () => a(n, t, r.Ay), [t, n]));
  }
  function s(n, t) {
    return d(a(n, t, r.Ay));
  }
}
