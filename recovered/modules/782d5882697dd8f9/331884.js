/* Recovered shipped factory. Module 331884.
 * Source: recovered/web/assets/782d5882697dd8f9.js
 * UTF-16 property offsets: 348..651
 * Raw property SHA-256: 2f42f5845703914c793c7ceb138cfa401117d2f957dc67f8db7dad8cf4a292b9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { i: () => a, o: () => o });
  var r = n(284009),
    i = n.n(r),
    s = n(17928),
    l = n(287809);
  function a() {
    let e = (0, s.bG)([l.default], () => l.default.getCurrentUser());
    return (i()(null != e, "user has to be signed in before accessing shop"), e);
  }
  function o() {
    return (0, s.bG)([l.default], () => l.default.getCurrentUser());
  }
}
