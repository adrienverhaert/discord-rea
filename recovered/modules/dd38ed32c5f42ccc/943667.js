/* Recovered shipped factory. Module 943667.
 * Source: recovered/web/assets/dd38ed32c5f42ccc.js
 * UTF-16 property offsets: 95..314
 * Raw property SHA-256: 4aac2700d271db84c2b509f4332691e1e43cef37b4a9d3f80816271414e45e6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  (n.d(t, { A: () => r }), n(938796));
  var s = n(665260),
    u = n(652215);
  function r(e) {
    return (
      e.type === u.lAJ.DEFAULT &&
      (0, s.Lt)(e.flags, u.pr7.IS_CROSSPOST) &&
      null != e.messageReference &&
      e.messageReference.type !== u.SH7.FORWARD
    );
  }
}
