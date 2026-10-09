/* Recovered shipped factory. Module 807973.
 * Source: recovered/web/assets/a16e6ef86d7f513b.js
 * UTF-16 property offsets: 17024..17592
 * Raw property SHA-256: ef030ff5235c68b05ff0e423ebf3fac0f3046ea79e64520ea7a4e05da8f779cd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => C });
  var l = n(477900);
  n(582128);
  var r = n(503698),
    o = n.n(r),
    i = n(661531),
    a = n(565645),
    u = n(17928),
    s = n(236285),
    c = n(35275),
    d = n(655756);
  function C(e) {
    let { guildId: t, emojiId: n, emojiName: r, className: C } = e,
      h = (0, u.bG)(
        [s.Ay],
        () => {
          if (null == n) return null;
          let e = s.Ay.getDisambiguatedEmojiContext(t);
          return e.getById(n) ?? e.getByName(n);
        },
        [t, n],
      );
    return null != h || null != r
      ? (0, l.jsx)(a.A, {
          emojiId: h?.id,
          emojiName: r ?? h?.name,
          animated: h?.animated ?? !1,
          className: o()(d.m, C),
        })
      : (0, l.jsx)(c.A, {
          className: o()(d.m, C),
          color: i.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css,
        });
  }
}
