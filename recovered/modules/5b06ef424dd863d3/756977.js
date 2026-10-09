/* Recovered shipped factory. Module 756977.
 * Source: recovered/web/assets/5b06ef424dd863d3.js
 * UTF-16 property offsets: 95..437
 * Raw property SHA-256: e68d10ce9e0fd720048a6039065f03f48b821b1d23dcc518ee73bcb3c65adf94
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { A: () => d });
  var i = n(17928),
    l = n(309010),
    a = n(680724),
    r = n(431788),
    u = n(660183);
  function d(t, e) {
    let n = (0, i.bG)([a.A], () => a.A.isRequestOnCooldown(t)),
      d = (0, i.bG)([l.Ay], () => l.Ay.getVoiceChannelId() === e, [e]);
    return n
      ? [!0, u.intl.string(r.default.mVFTUg)]
      : d
        ? [!1, u.intl.string(r.default.qRXats)]
        : [!0, u.intl.string(r.default.qRXats)];
  }
}
