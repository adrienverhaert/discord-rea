/* Recovered shipped factory. Module 838533.
 * Source: recovered/web/assets/8bfa01cdff57d2e3.js
 * UTF-16 property offsets: 4745..5082
 * Raw property SHA-256: 98dee80c6dab08b5a10a84ccf42cce51d73048ea6de055c6f42be393a15b5db5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, e, l) {
  l.d(e, { A: () => a });
  var t = l(5180),
    r = l(734057),
    i = l(808728),
    u = l(652215);
  function a(n, e) {
    if (null == n || null == e) return null;
    if (!(0, t.ai)(n)) return r.A.getChannel(e);
    let l = i.Ay.getChannels(n),
      a =
        l[i.I6].find((n) => n.channel.id === e) ??
        l[i.vM].find((n) => n.channel.id === e) ??
        l[u.rbe.GUILD_CATEGORY].find((n) => n.channel.id === e);
    return a?.channel;
  }
}
