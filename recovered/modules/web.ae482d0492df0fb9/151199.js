/* Recovered shipped factory. Module 151199.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2278552..2278905
 * Raw property SHA-256: 76d22bcd33679fdfb1306c05f156505e433bfdadb1123707bd64ba0db5109c15
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { y: () => o });
  var i = n(914430),
    r = n(924985),
    a = n(808728),
    s = n(967198),
    l = n(652215);
  let o = {
    binds: ["mod+shift+a"],
    comboKeysBindGlobal: !0,
    action() {
      let e = s.A.getGuildId();
      return (
        null != e &&
        (a.Ay.getChannels(e)[l.rbe.GUILD_CATEGORY].some((e) => {
          let { channel: t } = e;
          return "null" !== t.id && !r.A.isCollapsed(t.id);
        })
          ? (0, i.rZ)(e)
          : (0, i.Al)(e),
        !1)
      );
    },
  };
}
