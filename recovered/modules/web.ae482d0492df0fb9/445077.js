/* Recovered shipped factory. Module 445077.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5134324..5134773
 * Raw property SHA-256: 295643436bfe7cc46ab6888fb67c93ed6b7eb1fdbe881eae7fceaaa7f921699a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { T: () => o }), n(938796));
  var i = n(636537),
    r = n(73153),
    a = n(529942),
    s = n(164956),
    l = n(652215);
  function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return s.A.isFullServerPreview(e)
      ? void (0, a.Z$)(e, { memberOptions: t })
      : (r.h.dispatch({
          type: "GUILD_MEMBER_UPDATE_LOCAL",
          guildId: e,
          roles: t.roles,
          flags: t.flags,
        }),
        i.Bo.patch({
          url: l.Rsh.SET_GUILD_MEMBER(e),
          body: t,
          oldFormErrors: !!n || void 0,
          rejectWithError: !1,
        }));
  }
}
