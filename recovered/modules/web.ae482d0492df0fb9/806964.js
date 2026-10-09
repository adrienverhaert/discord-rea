/* Recovered shipped factory. Module 806964.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2273605..2273928
 * Raw property SHA-256: b9eac39356fa8139a1d5cba8cad12fc2ed5c3ddd4df916d545a324357c645d2f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { u: () => o });
  var i = n(951001),
    r = n(265422),
    a = n(763827),
    s = n(309010),
    l = n(652215);
  let o = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
      if (!a.A.isConnected()) return !1;
      let e = a.A.getGuildId() ?? l.ME,
        t = s.Ay.getChannelId(e);
      return ((0, r.i)(e, t), i.A.channelListScrollTo(e, a.A.getChannelId()), !1);
    },
  };
}
