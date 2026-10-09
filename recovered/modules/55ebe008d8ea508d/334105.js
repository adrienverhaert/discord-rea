/* Recovered shipped factory. Module 334105.
 * Source: recovered/web/assets/55ebe008d8ea508d.js
 * UTF-16 property offsets: 95..418
 * Raw property SHA-256: 48bdbd0bac6ede3e6aaf23e8c8fa1dd79bff3fa125d34bdf5e65fc82fb785ad5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, e, a) {
  a.d(e, { cz: () => p, fJ: () => s });
  var t = a(17928),
    d = a(138298),
    i = a(940382),
    r = a(761640);
  function s(n, e, a) {
    d.A.openChannelAsSidebar({
      guildId: n,
      channelId: e,
      baseChannelId: e,
      details: { type: i.kk.CHAT, initialMessageId: a },
    });
  }
  function p(n) {
    return (0, t.bG)([r.Ay], () => null != n && r.Ay.getCurrentSidebarChannelId(n) === n, [n]);
  }
  a(573163);
}
