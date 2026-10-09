/* Recovered shipped factory. Module 812930.
 * Source: recovered/web/assets/ae04ed75dc5bc7f3.js
 * UTF-16 property offsets: 35220..35448
 * Raw property SHA-256: 95904b8a63128197ed0c93738f1f92527dad39386265620ff6c280f65afa2ba2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  (n.d(t, { A: () => r }), n(938796));
  var i = n(665260),
    l = n(427930),
    s = n(652215);
  function r(e) {
    return !(
      e.type !== s.lAJ.DEFAULT ||
      null != e.poll ||
      (0, i.Lt)(e.flags ?? 0, s.pr7.EPHEMERAL) ||
      ("messageReference" in e ? (0, l.A)(e) : (0, l.m)(e))
    );
  }
}
