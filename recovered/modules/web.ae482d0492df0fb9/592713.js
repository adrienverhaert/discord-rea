/* Recovered shipped factory. Module 592713.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5126426..5127249
 * Raw property SHA-256: 51234f8a1a342beb44c4583915d71b2efd799cf274c2fb973f593b02a7610744
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(73153),
    r = n(439372),
    a = n(696451),
    s = n(287809),
    l = n(316031);
  let o = null;
  function d(e, t) {
    let n = a.Ay.getMember(e, t),
      r = s.default.getUser(t);
    if (null == n || null == r || (0, l.Z)(n)) return;
    let o = {
      ...n,
      guildId: e,
      nick: n.nick ?? r.username,
      avatar: n.avatar ?? void 0,
      avatarDecoration: null != n.avatarDecoration ? { ...n.avatarDecoration } : void 0,
      premiumSince: n.premiumSince ?? void 0,
      isPending: n.isPending ?? !1,
      user: { ...r, email: r.email ?? void 0, phone: r.phone ?? void 0 },
      communicationDisabledUntil: null,
    };
    i.h.dispatch({ type: "GUILD_MEMBER_UPDATE", ...o });
  }
  class c extends r.A {
    _initialize() {
      o = setInterval(() => {
        let e;
        Object.keys((e = a.Ay.getCommunicationDisabledUserMap())).forEach((t) => {
          let n = (0, a.DL)(t),
            i = (0, a.vg)(t),
            r = e[t];
          (0, l.n)(r) || d(n, i);
        });
      }, 1e4);
    }
    _terminate() {
      clearInterval(o);
    }
    clearGuildMemberTimeout = d;
  }
  let u = new c();
}
