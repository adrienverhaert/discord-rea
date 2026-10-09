/* Recovered shipped factory. Module 644508.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4332345..4332898
 * Raw property SHA-256: 46d8af7d5aac96ee54e249d63842d1eb67e7b0378872ccd7eeea29662a0d1725
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { f: () => d });
  var i = n(477900),
    r = n(192308),
    a = n(174459),
    s = n(80569),
    l = n(308295),
    o = n(652215);
  async function d(e) {
    let { analyticsLocation: t = null, ...d } = e;
    (a.default.track(o.HAw.OPEN_MODAL, { type: "Emoji Studio", source: t }),
      await (0, r.openModalLazy)(
        async () => {
          let { EmojiStudioModal: e } = await Promise.all([
            n.e("684954"),
            n.e("324761"),
            n.e("50342"),
            n.e("507406"),
            n.e("455524"),
            n.e("489908"),
            n.e("71167"),
            n.e("534936"),
            n.e("195903"),
          ]).then(n.bind(n, 227780));
          return (t) => (0, i.jsx)(e, { ...t, ...d });
        },
        {
          modalKey: s.y,
          onCloseRequest: () => {
            (0, l.p)();
          },
        },
      ));
  }
}
