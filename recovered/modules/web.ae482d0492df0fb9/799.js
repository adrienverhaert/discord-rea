/* Recovered shipped factory. Module 799.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3696303..3696733
 * Raw property SHA-256: c6ec7a5fdd3a7666df252191b5be53e7c25610160f3e2cba68d223664a9e191c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { y: () => l });
  var i = n(77729),
    r = n(649223),
    a = n(313465),
    s = n(696016);
  async function l(e, t) {
    let n = t(e.resolved[0].clip),
      l = await (0, r.N)(i.A.clips.getClipProtocolURLFromPath(n));
    if (!(l.width > 0 && l.height > 0))
      throw Error(`auto-montage: invalid source resolution ${l.width}x${l.height} for ${n}`);
    return (
      s.nx.info(`decider: auto-montage output resolution ${l.width}x${l.height} taken from ${n}`),
      (0, a.V1)(e, t, l)
    );
  }
}
