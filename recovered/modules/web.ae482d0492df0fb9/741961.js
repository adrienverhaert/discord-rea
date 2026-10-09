/* Recovered shipped factory. Module 741961.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9225703..9228592
 * Raw property SHA-256: b521bb11ca41753932e9eaa41f58eec720d27b3d919c37c29a67ca8ebceeb96c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  let i;
  n.d(t, { A: () => O });
  var r = n(17928),
    a = n(636537),
    s = n(73153),
    l = n(695870),
    o = n(927813),
    d = n(280450),
    c = n(734057),
    u = n(101392),
    _ = n(652215);
  let E = 10 * o.A.Millis.SECOND,
    A = 1.5 * o.A.Millis.SECOND,
    h = {},
    f = {},
    I = {},
    p = Object.freeze({}),
    T = Object.freeze({});
  function m(e) {
    return c.A.getChannel(e)?.getGuildId() ?? void 0;
  }
  function g(e) {
    var t, n, i, r;
    let a,
      l,
      { channelId: o, userId: d, guildId: c, customTypingIndicatorConfig: u } = e,
      _ = { ...(h[o] ?? p) };
    clearTimeout(_[d]);
    let A = setTimeout(() => {
      s.h.dispatch({ type: "TYPING_STOP", channelId: o, userId: d, guildId: c });
    }, E);
    ((_[d] = A),
      (h[o] = _),
      null != c &&
        ((t = c),
        (n = o),
        (i = d),
        (r = A),
        clearTimeout((l = { ...((a = { ...(f[t] ?? T) })[n] ?? p) })[i]),
        (l[i] = r),
        (a[n] = l),
        (f[t] = a)),
      void 0 !== u && I[d] !== u && (I = { ...I, [d]: u }));
  }
  function S(e) {
    let { channelId: t, userId: n, guildId: i } = e,
      r = h[t];
    if (null == r || null == r[n]) return !1;
    let a = { ...r };
    if (
      (clearTimeout(a[n]),
      delete a[n],
      (h[t] = a),
      null != i &&
        (function (e, t, n) {
          let i = f[e];
          if (null == i) return;
          let r = i[t];
          if (null == r || null == r[n]) return;
          let a = { ...r };
          delete a[n];
          let s = { ...i };
          (0 === Object.keys(a).length ? delete s[t] : (s[t] = a),
            0 === Object.keys(s).length ? delete f[e] : (f[e] = s));
        })(i, t, n),
      n in I && !Object.values(h).some((e) => n in e))
    ) {
      let e = { ...I };
      (delete e[n], (I = e));
    }
  }
  function N() {
    ((h = {}), (f = {}), (I = {}));
  }
  class C extends r.Ay.Store {
    initialize() {
      this.waitFor(d.default, c.A);
    }
    static displayName = "TypingStore";
    getTypingUsers(e) {
      return h[e] ?? p;
    }
    getTypingUsersByGuild(e) {
      return f[e] ?? T;
    }
    isTyping(e, t) {
      return null != (h[e] ?? p)[t];
    }
    getCustomTypingIndicatorConfig(e) {
      return I[e] ?? null;
    }
  }
  let O = new C(s.h, {
    TYPING_START: g,
    TYPING_STOP: S,
    TYPING_START_LOCAL: function (e) {
      let { channelId: t } = e,
        n = d.default.getId();
      if (null == n || t === l.E) return !1;
      null != i && i.channelId !== t && (null != i.timeout && clearTimeout(i.timeout), (i = null));
      let r = Date.now(),
        o = 0.8 * E;
      if (null != i && (null != i.timeout || i.prevSend + o > r)) return !1;
      let c = setTimeout(
        () => {
          let e;
          null == i ||
            i.channelId !== t ||
            n !== d.default.getId() ||
            null == i.timeout ||
            ((i.timeout = null),
            ((e = h[t] ?? p) === p ? 0 : Object.keys(e).length) > 5 ||
              a.Bo.post({ url: _.Rsh.TYPING(t), oldFormErrors: !0, rejectWithError: !0 }).then(
                (e) => {
                  if (200 === e.status) {
                    let n = e.body.message_send_cooldown_ms ?? 0,
                      i = e.body.thread_create_cooldown_ms ?? 0;
                    (n > 0 &&
                      s.h.dispatch({
                        type: "SLOWMODE_SET_COOLDOWN",
                        channelId: t,
                        slowmodeType: u.R.SendMessage,
                        cooldownMs: n,
                      }),
                      i > 0 &&
                        s.h.dispatch({
                          type: "SLOWMODE_SET_COOLDOWN",
                          channelId: t,
                          slowmodeType: u.R.CreateThread,
                          cooldownMs: i,
                        }));
                  }
                },
              ));
        },
        null == i || i.prevSend > r - 2 * o ? A : 0,
      );
      return (
        (i = { channelId: t, timeout: c, prevSend: r }),
        g({ channelId: t, userId: n, guildId: m(t) })
      );
    },
    TYPING_STOP_LOCAL: function (e) {
      let { channelId: t } = e,
        n = d.default.getId();
      return (
        null != n &&
        null != i &&
        i.channelId === t &&
        null != i.timeout &&
        (clearTimeout(i.timeout), (i = null), S({ channelId: t, userId: n, guildId: m(t) }))
      );
    },
    CONNECTION_OPEN: N,
    OVERLAY_INITIALIZE: N,
    MESSAGE_CREATE: function (e) {
      var t;
      let {
        channelId: n,
        guildId: r,
        message: { author: a },
        optimistic: s,
      } = e;
      return (
        s &&
          ((t = n),
          null == i ||
            i.channelId !== t ||
            (null != i.timeout && clearTimeout(i.timeout), (i = null))),
        null != a && S({ channelId: n, userId: a.id, guildId: r ?? m(n) })
      );
    },
  });
}
