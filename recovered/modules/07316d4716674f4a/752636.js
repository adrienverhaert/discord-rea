/* Recovered shipped factory. Module 752636.
 * Source: recovered/web/assets/07316d4716674f4a.js
 * UTF-16 property offsets: 5172..5718
 * Raw property SHA-256: f600707301d7452eb595dd4c2d391a910c00e27e592eefa1fd4bd10dc6c88bc0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { A: () => s });
  var a = i(477900),
    n = i(582128),
    l = i(143413),
    r = i(622868);
  let o = n.memo(r.Ay);
  function s(e) {
    let {
      message: t,
      channel: i,
      author: n,
      compact: r,
      animateAvatar: s,
      guildId: d,
      isGroupStart: c = !0,
      roleIcon: u,
      hideTimestamp: m,
      hideGuildTag: h,
      preview: p,
      avatarDecorationOverride: g,
      avatarOverride: _,
      usernameClassName: A,
    } = e;
    return !(0, l.A)(t) && (c || r)
      ? (0, a.jsx)(o, {
          message: t,
          channel: i,
          author: n,
          guildId: d,
          compact: r,
          animate: s,
          roleIcon: u,
          hideTimestamp: m,
          hideGuildTag: h,
          preview: p,
          avatarDecorationOverride: g,
          avatarOverride: _,
          usernameClassName: A,
        })
      : void 0;
  }
}
