/* Recovered shipped factory. Module 739008.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2272653..2273090
 * Raw property SHA-256: 7713d218a5e9ed21cfc0168f77492c9ea4039894512ea356c5052e04504f33bc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => u });
  var i = n(148494),
    r = n(567035),
    a = n(458294),
    s = n(232835),
    l = n(309010),
    o = n(967198),
    d = n(625494),
    c = n(652215);
  let u = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
      let e = o.A.getGuildId();
      if (null == e || !a.default.getGuildHasUnreadIgnoreMuted(e)) return;
      (0, r.A)([e]);
      let t = l.Ay.getChannelId(e);
      null == t ||
        (s.A.getMessages(t).hasMoreAfter
          ? i.A.jumpToPresent(t, c.EMb)
          : d._.dispatch(c.jej.SCROLLTO_PRESENT));
    },
  };
}
