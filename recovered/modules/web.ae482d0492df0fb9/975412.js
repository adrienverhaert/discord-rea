/* Recovered shipped factory. Module 975412.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2876188..2877704
 * Raw property SHA-256: 7c9a83fd00ffad43bcf2f8f4fd9be4dd6c2a667b058fe25d404bb8e7da49b62d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900);
  n(582128);
  var r = n(231723),
    a = n(192308),
    s = n(709055),
    l = n(573163),
    o = n(174459),
    d = n(211401),
    c = n(500049),
    u = n(60809),
    _ = n(652215);
  function E(e) {
    let {
      context: t,
      openInPopout: E,
      analyticsLocation: A = "open-activity-shelf",
      initialState: h,
    } = e;
    E && (0, s.A)(_.MLl.CHANNEL_CALL_POPOUT);
    let f = E ? r.KX : r.SY;
    ((0, d.k)(c.Se.DISMISSED),
      (0, d.R)(c.s4.VOICE, void 0, h, "channel" === t.type ? t.channel.id : void 0));
    let I =
      "contextless" !== t.type &&
      (l.Ay.hasUnread(t.channel.id) || l.Ay.getMentionCount(t.channel.id) > 0);
    return (
      o.default.track(_.HAw.VOICE_PANEL_TAB_OPENED, {
        tab: "activities",
        location: A,
        source: c.s4.VOICE,
        is_chat_badged: I,
      }),
      (0, a.openModalLazy)(
        async () => {
          let { default: e } = await Promise.all([
            n.e("237427"),
            n.e("169727"),
            n.e("49742"),
            n.e("403382"),
            n.e("597981"),
            n.e("622936"),
            n.e("216947"),
            n.e("172727"),
            n.e("460582"),
            n.e("458098"),
            n.e("826744"),
            n.e("507528"),
            n.e("1433"),
            n.e("76428"),
            n.e("834552"),
            n.e("993103"),
            n.e("397270"),
            n.e("571210"),
            n.e("88342"),
            n.e("311802"),
            n.e("698965"),
            n.e("132191"),
            n.e("37977"),
            n.e("354044"),
            n.e("437065"),
            n.e("538887"),
            n.e("235313"),
            n.e("636373"),
            n.e("726033"),
            n.e("655708"),
            n.e("371133"),
            n.e("280854"),
            n.e("335395"),
            n.e("408362"),
            n.e("252229"),
            n.e("522261"),
            n.e("678195"),
            n.e("918024"),
            n.e("774021"),
            n.e("341701"),
            n.e("639163"),
            n.e("583518"),
            n.e("499118"),
            n.e("322094"),
            n.e("761764"),
            n.e("915086"),
            n.e("68974"),
            n.e("556385"),
            n.e("291220"),
            n.e("211584"),
            n.e("12313"),
          ]).then(n.bind(n, 126784));
          return (n) => (0, i.jsx)(e, { context: t, ...n });
        },
        { modalKey: u.gS, contextKey: f },
      )
    );
  }
}
