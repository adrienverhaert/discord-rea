/* Recovered shipped factory. Module 514810.
 * Source: recovered/web/assets/8cf9e7ce4c0ac641.js
 * UTF-16 property offsets: 78924..79327
 * Raw property SHA-256: abc196e053fc533a2ae9a182cf25d741312c09c3d5ffd42e17fc1425467e2894
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { N: () => r });
  var i = n(582128),
    l = n(17928),
    s = n(287809),
    a = n(660183);
  function r(e) {
    let t = e.linkedLobby?.linked_at,
      n = (0, l.bG)([s.default], () => s.default.getUser(e.linkedLobby?.linked_by));
    return i.useMemo(() => {
      if (null == t) return;
      let e = new Date(t);
      return null != n
        ? a.intl.format(a.t["xPrJ+q"], { username: n.username, linkedAtDate: e })
        : a.intl.formatToPlainString(a.t.EyygeM, { linkedAtDate: e });
    }, [t, n]);
  }
}
