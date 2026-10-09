/* Recovered shipped factory. Module 526132.
 * Source: recovered/web/assets/9e118497906e58e1.js
 * UTF-16 property offsets: 95..429
 * Raw property SHA-256: d429ab517d4f10c53a209a1cc2ed881d0282c9c53e1a4922aba985c6b0805067
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, c, t) {
  t.d(c, { e: () => r, n: () => a });
  var u = t(17928),
    e = t(576705),
    i = t(652215);
  function a(n) {
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.A;
    return (
      null != n &&
      null != n.linkedLobby &&
      c.can(i.xBc.MANAGE_CHANNELS, n) &&
      c.can(i.xBc.VIEW_CHANNEL, n) &&
      c.can(i.xBc.SEND_MESSAGES, n)
    );
  }
  function r(n) {
    return (0, u.bG)([e.A], () => a(n, e.A));
  }
}
