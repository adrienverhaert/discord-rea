/* Recovered shipped factory. Module 684407.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8705782..8706867
 * Raw property SHA-256: 3aa5cda0bc81ce759a2248bf045fbb526f297b18d6d24c9540ca4a9f33162631
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A, E: () => a });
  var i = n(17928),
    r = n(73153);
  let a = {},
    s = {},
    l = {},
    o = !1,
    d = !1,
    c = !1;
  function u(e) {
    let { guild: t } = e.invite;
    return t?.welcome_screen != null && ((s[t.id] = t.welcome_screen), !0);
  }
  function _(e) {
    let { welcomeScreen: t, guildId: n } = e;
    s[n] = t ?? a;
  }
  class E extends i.Ay.Store {
    static displayName = "WelcomeScreenStore";
    get(e) {
      if (null != e) return s[e];
    }
    isFetching() {
      return d;
    }
    hasError() {
      return c;
    }
    hasSeen(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null != e && (t ? o : l[e] || !1);
    }
    isEmpty(e) {
      if (null == e) return !0;
      let t = s[e];
      return null == t || 0 === t.welcome_channels.length;
    }
  }
  let A = new E(r.h, {
    INVITE_RESOLVE_SUCCESS: u,
    INVITE_ACCEPT_SUCCESS: u,
    WELCOME_SCREEN_SUBMIT_SUCCESS: _,
    WELCOME_SCREEN_UPDATE: _,
    WELCOME_SCREEN_VIEW: function (e) {
      let { guildId: t, isLurking: n } = e;
      ((l[t] = !0), n && (o = !0));
    },
    GUILD_STOP_LURKING: function () {
      o = !1;
    },
    GUILD_DELETE: function (e) {
      let {
        guild: { id: t },
      } = e;
      l[t] = !1;
    },
    WELCOME_SCREEN_FETCH_START: function () {
      ((d = !0), (c = !1));
    },
    WELCOME_SCREEN_FETCH_SUCCESS: function (e) {
      ((d = !1), (c = !1));
      let { welcomeScreen: t, guildId: n } = e;
      s[n] = t ?? a;
    },
    WELCOME_SCREEN_FETCH_FAIL: function () {
      ((d = !1), (c = !0));
    },
  });
}
