/* Recovered shipped factory. Module 345254.
 * Source: recovered/web/assets/290017bbf455a3c5.js
 * UTF-16 property offsets: 435..913
 * Raw property SHA-256: 7e77f84b362e19ac400104288c433dc6261bbe19b57428099efed6242e2c9780
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, i, e) {
  e.d(i, { A: () => d });
  var t = e(477900);
  e(582128);
  var c = e(477782),
    r = e(173936),
    o = e(174459),
    a = e(957565),
    s = e(652215),
    l = e(660183);
  function d(n, i) {
    return a.p5
      ? (0, t.jsx)(c.Dr, {
          id: "copy-link",
          label: l.intl.string(l.t.Xrt5Po),
          leadingAccessory: { type: "icon", icon: r.LinkIcon },
          icon: r.LinkIcon,
          action: () => {
            ((0, a.C)(
              `${location.protocol}//${location.host}${s.BVt.CHANNEL(i.guild_id, i.id, n.id)}`,
            ),
              o.default.track(s.HAw.MESSAGE_LINK_COPIED, {
                message_id: n.id,
                channel: n.channel_id,
              }));
          },
        })
      : null;
  }
}
