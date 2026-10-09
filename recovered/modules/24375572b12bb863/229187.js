/* Recovered shipped factory. Module 229187.
 * Source: recovered/web/assets/24375572b12bb863.js
 * UTF-16 property offsets: 1355..1601
 * Raw property SHA-256: 44cfa53c1a0ff3dac05ebe04985d540bf3246b1370217c4e0f73343156f1d0a6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, t) {
  t.d(l, { A: () => i });
  var s = t(803306),
    n = t(321191);
  function i(e, l) {
    if (n.A.isFetchingFriends(e)) return;
    let t = n.A.getMutualFriendsCount(e);
    if (0 === t) return;
    let i = n.A.getMutualFriends(e);
    if (null == t || null == i || i.length !== t) return (0, s.q0)(e, l);
  }
}
