/* Recovered shipped factory. Module 937767.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5799587..5801535
 * Raw property SHA-256: 3eb4543f9ee6bb70bef4b8b5ebd3b2b28d5d6b494e98e64b27e0698cd94c034d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(442433),
    a = n(593284),
    s = n(288539),
    l = n(734057);
  let o = {
    handleUserContextMenu(e, t, a, s) {
      let o = l.A.getChannel(t);
      null != o &&
        (0, r.L3)(s, async () => {
          let { default: t } = await Promise.all([
            n.e("147119"),
            n.e("403382"),
            n.e("597981"),
            n.e("622936"),
            n.e("216947"),
            n.e("463317"),
            n.e("326692"),
            n.e("834552"),
            n.e("993103"),
            n.e("708757"),
            n.e("585968"),
            n.e("893190"),
            n.e("21921"),
            n.e("189673"),
            n.e("536200"),
            n.e("638221"),
            n.e("571210"),
            n.e("882073"),
            n.e("797558"),
            n.e("676418"),
            n.e("592028"),
            n.e("425906"),
            n.e("123216"),
            n.e("428296"),
            n.e("691994"),
            n.e("166495"),
            n.e("229787"),
            n.e("88342"),
            n.e("147786"),
            n.e("936320"),
            n.e("576665"),
            n.e("482861"),
            n.e("311802"),
            n.e("698965"),
            n.e("869853"),
            n.e("682337"),
            n.e("538887"),
            n.e("235313"),
            n.e("843719"),
            n.e("454625"),
            n.e("332470"),
            n.e("371133"),
            n.e("41991"),
            n.e("959669"),
            n.e("624198"),
            n.e("715038"),
            n.e("436564"),
            n.e("252229"),
            n.e("680986"),
            n.e("245996"),
            n.e("939171"),
            n.e("700792"),
            n.e("592822"),
            n.e("190889"),
            n.e("529422"),
            n.e("823427"),
            n.e("856753"),
            n.e("61129"),
            n.e("983525"),
            n.e("309291"),
            n.e("242204"),
            n.e("331203"),
            n.e("307059"),
            n.e("449145"),
            n.e("255302"),
            n.e("493014"),
            n.e("349644"),
            n.e("649520"),
            n.e("825486"),
            n.e("522261"),
            n.e("873786"),
            n.e("678195"),
            n.e("951811"),
            n.e("343116"),
            n.e("139103"),
            n.e("713708"),
            n.e("470314"),
            n.e("70515"),
            n.e("404524"),
            n.e("654148"),
            n.e("774021"),
            n.e("666939"),
            n.e("830221"),
            n.e("324240"),
            n.e("304866"),
            n.e("717334"),
            n.e("184841"),
          ]).then(n.bind(n, 107632));
          return (n) => (0, i.jsx)(t, { ...n, user: e, channel: o, guildId: a });
        });
    },
    react(e, t, n) {
      let {
        userId: r,
        channelId: l,
        parsedUserId: o,
        roleId: d,
        roleName: c,
        viewingChannelId: u,
      } = e;
      return null == r && (null != d || "@everyone" === c || "@here" === c)
        ? (0, i.jsx)(
            a.A,
            { inlinePreview: n.noStyleAndInteraction, ...e, children: t(e.content, n) },
            n.key,
          )
        : (0, i.jsx)(
            s.A,
            {
              className: "mention",
              userId: r,
              channelId: l,
              viewingChannelId: u,
              parsedUserId: o,
              content: t(e.content, n),
              inlinePreview: n.noStyleAndInteraction,
            },
            n.key,
          );
    },
  };
}
