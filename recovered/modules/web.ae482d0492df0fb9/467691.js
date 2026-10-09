/* Recovered shipped factory. Module 467691.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2279184..2282294
 * Raw property SHA-256: 52014b4a8d90b4a08a39e1d3faf12a9a10195c97d149c27473073cc4236de723
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { US: () => D, BD: () => b, X8: () => M, mH: () => y });
  var i = n(477900);
  n(582128);
  var r = n(435558),
    a = n.n(r),
    s = n(192308),
    l = n(310953),
    o = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    _ = n(645959),
    E = n(625494),
    A = n(265422),
    h = n(652215),
    f = n(790782);
  function I(e, t) {
    return [
      { resourceId: e, type: f.P.GUILD_EVENT },
      ...(e === h.ME
        ? _.A.getPrivateChannelIds()
        : (0, l.A)(e, { withVoiceChannels: t, withCurrentVoiceChannel: !0 }).map((e) => e.id)),
    ];
  }
  let p = a().throttle(function (e, t) {
    var r;
    let a,
      l,
      _,
      {
        channelPredicate: f = () => !0,
        guildPredicate: p = () => !0,
        guildFeaturePredicate: T = () => !1,
        ensureChatIsVisible: m = () => !1,
        withVoiceChannels: g = !1,
      } = t,
      S = o.A.getState().guildId ?? h.ME,
      N = o.A.getState().channelId,
      C =
        ((r = S),
        (l = (a = [h.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(r)),
        e > 0
          ? a.slice(l).concat(a.slice(0, l), r)
          : (a.splice(l, 0, r), a.slice(l + 1).concat(a.slice(0, l + 1)))),
      O = e > 0 ? 0 : C.length - 1,
      R = I(S, g),
      L = R.indexOf(N) + e;
    for (; null != S && "" !== S;) {
      if (((_ = R[L]), p(S)))
        for (; null != _ && "" !== _;) {
          if ("string" == typeof _) {
            if (f(S, _)) return (0, A.i)(S, _, !1, m(S, _));
          } else if ("object" == typeof _ && T(_.resourceId, _.type))
            return (
              S !== c.A.getGuildId() && (0, A.i)(S, d.Ay.getDefaultChannel(S)?.id),
              (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("489565"),
                  n.e("684231"),
                  n.e("570690"),
                  n.e("886631"),
                  n.e("884841"),
                  n.e("998835"),
                  n.e("435860"),
                  n.e("998392"),
                  n.e("694303"),
                  n.e("147626"),
                  n.e("632756"),
                  n.e("256373"),
                  n.e("970644"),
                  n.e("901922"),
                  n.e("752695"),
                  n.e("449347"),
                  n.e("464287"),
                  n.e("853934"),
                  n.e("468248"),
                  n.e("469647"),
                  n.e("543267"),
                  n.e("798354"),
                  n.e("188353"),
                  n.e("886571"),
                ]).then(n.bind(n, 318104));
                return (t) => (0, i.jsx)(e, { ...t, guildId: S });
              })
            );
          ((L += e), (_ = R[L]));
        }
      if (((O += e), null == (S = C[O]) || "" === S)) break;
      ((R = I(S, g)), (L = e < 0 ? R.length - 1 : 0));
    }
    E._.dispatch(h.jej.SHAKE_APP, { duration: 200, intensity: 2 });
  }, h.ugG);
  var T = n(455234),
    m = n(95701),
    g = n(734057),
    S = n(573163),
    N = n(309010),
    C = n(543465);
  let O = (e, t) => {
      let n = g.A.getChannel(t);
      return (
        null != n &&
        ((0, m.Gw)(n.type) || h.kvI.GUILD_VOCAL_PRIMARY.has(n.type)
          ? S.Ay.getMentionCount(t) > 0 || N.Ay.getVoiceChannelId() === t
          : (!C.Ay.isChannelMuted(e, t) || S.Ay.getMentionCount(t) > 0) && (0, T.Y)(n))
      );
    },
    R = (e, t) =>
      t === f.P.GUILD_EVENT
        ? !C.Ay.isMuteScheduledEventsEnabled(e) && S.Ay.hasUnread(e, t)
        : S.Ay.hasUnread(e, t),
    L = (e, t) => {
      let n = g.A.getChannel(t);
      return (
        null != n &&
        !!h.kvI.GUILD_VOCAL.has(n.type) &&
        (S.Ay.getMentionCount(t) > 0 ||
          (N.Ay.getVoiceChannelId() === t && S.Ay.getUnreadCount(t) > 0))
      );
    },
    y = {
      binds: ["alt+shift+down"],
      comboKeysBindGlobal: !0,
      action() {
        let e = o.A.getState().guildId ?? h.ME;
        return (
          p(1, {
            channelPredicate: O,
            guildPredicate: (t) => t === e || !C.Ay.isMuted(t),
            guildFeaturePredicate: R,
            ensureChatIsVisible: L,
            withVoiceChannels: !0,
          }),
          !1
        );
      },
    },
    D = {
      binds: ["alt+shift+up"],
      comboKeysBindGlobal: !0,
      action() {
        let e = o.A.getState().guildId ?? h.ME;
        return (
          p(-1, {
            channelPredicate: O,
            guildPredicate: (t) => t === e || !C.Ay.isMuted(t),
            guildFeaturePredicate: R,
            ensureChatIsVisible: L,
            withVoiceChannels: !0,
          }),
          !1
        );
      },
    },
    v = (e, t) => S.Ay.getMentionCount(t) > 0,
    b = {
      binds: ["mod+shift+alt+down"],
      comboKeysBindGlobal: !0,
      action: () => (
        p(1, { channelPredicate: v, ensureChatIsVisible: L, withVoiceChannels: !0 }),
        !1
      ),
    },
    M = {
      binds: ["mod+shift+alt+up"],
      comboKeysBindGlobal: !0,
      action: () => (
        p(-1, { channelPredicate: v, ensureChatIsVisible: L, withVoiceChannels: !0 }),
        !1
      ),
    };
}
