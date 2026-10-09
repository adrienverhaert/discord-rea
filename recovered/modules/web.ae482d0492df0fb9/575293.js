/* Recovered shipped factory. Module 575293.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5238638..5241943
 * Raw property SHA-256: 08675420446bb153e39380a908f001c0d9ef334beec611bade851cfbfc477045
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => w });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(615300),
    o = n(702841),
    d = n(834730),
    c = n(276293),
    u = n(602853),
    _ = n(661531),
    E = n(939249),
    A = n(935286),
    h = n(628284),
    f = n(775602),
    I = n(47167),
    p = n(713654),
    T = n(418842),
    m = n(734057),
    g = n(696451),
    S = n(71393),
    N = n(225142),
    C = n(374084),
    O = n(101611),
    R = n(473529),
    L = n(111487),
    y = n(652215),
    D = n(660183),
    v = n(160639);
  let b = { compact: 58, cozy: 74, default: 64 };
  function M(e) {
    let { action: t } = e,
      n = (0, o.bG)([m.A], () => m.A.getChannel(t.channelId)),
      r = (0, I.Ay)(n, !0);
    return null == n
      ? (0, i.jsx)(d.E, {
          variant: "text-xxs/normal",
          color: "text-default",
          children: D.intl.format(D.t.MkzlDL, { channelName: D.intl.string(D.t.J90oLW) }),
        })
      : (0, i.jsx)(d.E, {
          variant: "text-xxs/normal",
          color: "text-default",
          children: D.intl.format(D.t.MkzlDL, { channelName: r }),
        });
  }
  function P(e) {
    let { channelId: t, emojiId: n, emojiName: r } = e,
      a = (0, o.bG)([m.A], () => m.A.getChannel(t));
    if (null == a) return null;
    let s = (0, p.gU)(a) ?? c.N;
    return (0, i.jsx)(L.A, {
      emojiId: n,
      emojiName: r,
      size: L.g.MEDIUM,
      defaultComponent: (0, i.jsx)(s, { className: v.p }),
    });
  }
  function U(e) {
    let { guildId: t, channel: n, className: a } = e,
      { channelAction: c, completed: I } = (0, O.j4)(t, n),
      p = (0, O.Lr)(t, c?.channelId),
      m = (0, o.bG)([f.Ay], () => f.Ay.useReducedMotion),
      g = c?.actionType === C.NewMemberActionTypes.VIEW,
      S = (0, u.r)(_.A.colors.WHITE),
      R = b[(0, T.C)()],
      [L, y] = r.useState(!1),
      [U] = r.useState(new l.A.Value(0)),
      [w] = r.useState(new l.A.Value(0));
    (r.useEffect(() => {
      I
        ? l.A.timing(U, {
            toValue: 0,
            duration: m ? 1 : 350,
            easing: l.A.Easing.quad,
            delay: 500 * !g,
          }).start(() => y(!0))
        : l.A.timing(U, {
            toValue: 1,
            duration: m ? 1 : 350,
            easing: l.A.Easing.quad,
            delay: 400,
          }).start();
    }, [I, U, g, m]),
      r.useEffect(() => {
        I &&
          L &&
          l.A.timing(w, {
            toValue: 1,
            duration: 350 * !m,
            easing: l.A.Easing.quad,
            delay: 400,
          }).start();
      }, [I, w, L, m]));
    let G = r.useCallback(() => {
      null != p && (0, N.qo)(t, p.channelId);
    }, [t, p]);
    return null == c || (g && !L)
      ? null
      : (0, i.jsx)("div", {
          className: s()(v.kL, a),
          children:
            L && null != p
              ? (0, i.jsx)(l.A.div, {
                  style: {
                    marginBottom: w.interpolate({ inputRange: [0, 1], outputRange: [-R, 0] }),
                  },
                  children: (0, i.jsxs)(E.D, {
                    className: s()(v.vK, v.vk, { [v.pJ]: n.isForumChannel() }),
                    onClick: G,
                    children: [
                      (0, i.jsx)(P, {
                        channelId: p.channelId,
                        emojiId: p.emoji?.id,
                        emojiName: p?.emoji?.name,
                      }),
                      (0, i.jsxs)("div", {
                        className: v.Qq,
                        children: [
                          (0, i.jsx)(d.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: D.intl.format(D.t["/beONw"], { step: p.title }),
                          }),
                          (0, i.jsx)(M, { action: p }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: v.kJ,
                        children: (0, i.jsx)(A.E, { size: "xs", color: S.hex(), className: v.fz }),
                      }),
                    ],
                  }),
                })
              : (0, i.jsxs)(l.A.div, {
                  className: s()(v.vK, { [v.pJ]: n.isForumChannel() }),
                  style: {
                    marginBottom: U.interpolate({ inputRange: [0, 1], outputRange: [-R, 0] }),
                  },
                  children: [
                    (0, i.jsx)(P, {
                      channelId: c.channelId,
                      emojiId: c.emoji?.id,
                      emojiName: c?.emoji?.name,
                    }),
                    (0, i.jsxs)("div", {
                      className: v.Qq,
                      children: [
                        (0, i.jsx)(d.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: c.title,
                        }),
                        (0, i.jsx)(d.E, {
                          variant: "text-xxs/normal",
                          color: "text-muted",
                          children: D.intl.string(D.t["ElGg8+"]),
                        }),
                      ],
                    }),
                    I
                      ? (0, i.jsx)(h.y, {
                          size: "custom",
                          color: "currentColor",
                          className: v.so,
                          secondaryColor: S.hex(),
                          width: 20,
                          height: 20,
                        })
                      : null,
                  ],
                }),
        });
  }
  function w(e) {
    let { guildId: t, channel: n, className: r } = e,
      a = (0, R.d)(t),
      s = (0, o.bG)([g.Ay], () => g.Ay.getSelfMember(t)?.isPending === !0),
      l = (0, O.jY)(t),
      d = (0, o.bG)([S.A], () => S.A.getGuild(t)?.features.has(y.GuildFeatures.GUILD_SERVER_GUIDE));
    return l || s || !a || !d ? null : (0, i.jsx)(U, { guildId: t, channel: n, className: r });
  }
}
