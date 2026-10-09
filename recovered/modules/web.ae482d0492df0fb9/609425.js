/* Recovered shipped factory. Module 609425.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4236134..4236761
 * Raw property SHA-256: 4e0b9cc19dafbadfb6d131eddf1b5796fc4fe72550e8c8051380f937ebbb532f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(582128),
    r = n(17928),
    a = n(386467),
    s = n(696451),
    l = n(287809),
    o = n(824994);
  function d() {
    let {
        userId: e,
        guildId: t,
        pendingDisplayNameStyles: n,
        ignoreDisabledStylesSetting: d = !1,
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      c = (0, o.W)({ location: "useDisplayNameStyles" }),
      u = (0, r.bG)([l.default], () =>
        null != e ? l.default.getUser(e) : l.default.getCurrentUser(),
      ),
      _ = (0, i.useContext)(a.A);
    null == t && (t = _);
    let E = (0, r.bG)([s.Ay], () => (null != t && null != u ? s.Ay.getMember(t, u.id) : null));
    return c || d
      ? void 0 !== n
        ? null === n && null != t
          ? u?.displayNameStyles
          : n
        : (E?.displayNameStyles ?? u?.displayNameStyles)
      : null;
  }
}
