/* Recovered shipped factory. Module 507696.
 * Source: recovered/web/assets/a071b44b1df687a0.js
 * UTF-16 property offsets: 95..272
 * Raw property SHA-256: bc8fbb7c1685d2b6dfc834f7c9e52fcdc770d84442342a5a537b83303d349a2d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, { D: () => u, N: () => l });
  var n = r(115718);
  let u = Array.from([n.rD.USER, n.rD.TEXT_CHANNEL, n.rD.VOICE_CHANNEL, n.rD.GROUP_DM]);
  function l(e) {
    return u.includes(e.type);
  }
}
