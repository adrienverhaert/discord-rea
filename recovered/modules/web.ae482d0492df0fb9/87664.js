/* Recovered shipped factory. Module 87664.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3136290..3136683
 * Raw property SHA-256: 697acbe881f4b366930cc6fef31469963dba7e08d6c490a069d1e9499b7edeeb
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, M: () => l });
  var i = n(17928),
    r = n(616356),
    a = n(994500),
    s = n(652215);
  function l(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, a.A],
      i = null != e ? n.getRelationshipType(e) : s.eA$.NONE,
      l = null != e ? t.getAnyDiscoverableStreamForUser(e) : null;
    return i === s.eA$.BLOCKED || null == e ? null : l;
  }
  function o(e) {
    return (0, i.bG)([r.A, a.A], () => l(e, [r.A, a.A]), [e]);
  }
}
