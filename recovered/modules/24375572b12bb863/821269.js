/* Recovered shipped factory. Module 821269.
 * Source: recovered/web/assets/24375572b12bb863.js
 * UTF-16 property offsets: 95..404
 * Raw property SHA-256: fa4f5a93af11533f5f571bfe417093b6f74e824efe99b9c1884e9d04851bdc51
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { q: () => d });
  var s = t(582128),
    n = t(17928),
    i = t(994500),
    a = t(287809),
    r = t(922590);
  let u = [];
  function d(e) {
    let { userId: l } = e,
      t = (0, n.bG)([i.A, a.default], () => i.A.isFriend(l) || a.default.getUser(l)?.isProvisional),
      d = (0, r.f1)(l);
    return s.useMemo(
      () =>
        t
          ? u
          : d.map((e) => {
              let { applicationId: l } = e;
              return l;
            }),
      [d, t],
    );
  }
}
