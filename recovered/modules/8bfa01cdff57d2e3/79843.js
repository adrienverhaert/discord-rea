/* Recovered shipped factory. Module 79843.
 * Source: recovered/web/assets/8bfa01cdff57d2e3.js
 * UTF-16 property offsets: 5083..5433
 * Raw property SHA-256: e3e206d7ed92af552462262fa4ec463932c11b5546de916ba9bbcd5711765299
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, e, l) {
  l.d(e, { A: () => d });
  var t = l(5180),
    r = l(395504),
    i = l(71393),
    u = l(543465),
    a = l(97587);
  function d(n, e) {
    if ((0, t.ai)(e)) return null;
    let l = i.A.getGuild(n.getGuildId());
    return null != l && (0, a.Ay)((0, a.Fd)(n), l)
      ? (0, r.WW)(l.id)
        ? { reason: "opt-in-channels", guild: l }
        : u.Ay.isFavorite(l.id, n.id)
          ? { reason: "pinned-channel", guild: l }
          : null
      : { reason: "no-permission" };
  }
}
