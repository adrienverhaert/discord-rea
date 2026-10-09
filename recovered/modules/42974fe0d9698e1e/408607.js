/* Recovered shipped factory. Module 408607.
 * Source: recovered/web/assets/42974fe0d9698e1e.js
 * UTF-16 property offsets: 95..372
 * Raw property SHA-256: f23cf0099ff0c24d587629616b9ee5089247b17db506e11d76dacd1a1c56ff6d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, l) {
  l.d(n, { A: () => r });
  var i = l(582128),
    a = l(17928),
    t = l(66834),
    s = l(287809);
  function r(e) {
    let n = (0, a.bG)([s.default], () => s.default.getUser(e?.creator_id), [e]);
    return (
      i.useEffect(() => {
        null == n && e?.creator_id != null && t.A.requestMembersById(e.guild_id, e.creator_id);
      }, [e, n]),
      n
    );
  }
}
