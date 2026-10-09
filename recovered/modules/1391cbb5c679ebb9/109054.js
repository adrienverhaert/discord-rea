/* Recovered shipped factory. Module 109054.
 * Source: recovered/web/assets/1391cbb5c679ebb9.js
 * UTF-16 property offsets: 4204..4391
 * Raw property SHA-256: 46ef90cf7822157dcee69e9726c3beb88c755606b92998039525917e184ba663
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, l, n) {
  n.d(l, { A: () => i });
  var a = n(455207),
    s = n(943667);
  function i(e) {
    return (
      !((0, a.MZ)(e) || ((0, s.A)(e) && e.messageReference?.guild_id != null)) &&
      (null == e.interaction || "SENDING" !== e.state)
    );
  }
}
