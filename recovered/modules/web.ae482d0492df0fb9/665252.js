/* Recovered shipped factory. Module 665252.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8682343..8695182
 * Raw property SHA-256: 2bd14b41849f9982a49a4cb04d3edb2b460bff024b43b0e8ab79d17bd7d9aa69
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => ef });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(202091),
    d = n(17928),
    c = n(778712),
    u = n(922016),
    _ = n(97808),
    E = n(866665),
    A = n(939249),
    h = n(834730),
    f = n(866323),
    I = n(565645),
    p = n(114166),
    T = n(793574),
    m = n(688810),
    g = n(209932),
    S = n(813564),
    N = n(73153),
    C = n(734057),
    O = n(927813),
    R = n(714736);
  n(980504);
  let L = 7.5 * O.A.Millis.SECOND,
    y = new Map(),
    D = new Map();
  class v extends d.Ay.Store {
    initialize() {
      this.waitFor(C.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
      return y;
    }
    getSoundboardEcho(e) {
      return y.get(e);
    }
  }
  let b = new v(N.h, {
    VOICE_CHANNEL_EFFECT_SEND: function (e) {
      let {
        soundId: t,
        channelId: n,
        userId: i,
        authorId: r,
        sourceGuildId: a,
        soundName: s,
        emoji: l,
        soundVolume: o,
        isEcho: d,
      } = e;
      if (null == t || null == s) return !1;
      let c = C.A.getChannel(n)?.getGuildId();
      if (null == c) return !1;
      let { enabled: u } = (0, R.j)(c, "handleSoundPlayStart");
      if (!u) return !1;
      let _ = {
        soundId: t,
        name: s,
        guildId: a ?? "0",
        emojiId: l?.id ?? void 0,
        emojiName: l?.name,
        emojiAnimated: l?.animated ?? void 0,
        available: !0,
        userId: i,
        volume: o ?? 1,
      };
      !(function (e) {
        let t,
          n,
          { soundId: i, sound: r, authorId: a, playedByUserId: s, isEcho: l } = e,
          o = y.get(i),
          d = Date.now();
        (null == o
          ? y.set(i, {
              sound: r,
              count: 1,
              authorId: a,
              playedByUserIds: new Set([s]),
              mostRecentPlayedByUserId: l ? s : null,
              lastPlayedAt: d,
              startedAt: d,
            })
          : y.set(i, {
              ...o,
              count: o.count + 1,
              playedByUserIds: o.playedByUserIds.add(s),
              mostRecentPlayedByUserId: s === a ? o.mostRecentPlayedByUserId : s,
              lastPlayedAt: d,
            }),
          null != (t = D.get(i)) && clearTimeout(t),
          (n = setTimeout(() => {
            N.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: i });
          }, L)),
          D.set(i, n));
      })({ soundId: t, sound: _, authorId: r ?? i, playedByUserId: i, isEcho: d });
    },
    VOICE_CHANNEL_SELECT: function (e) {
      (D.forEach(clearTimeout), D.clear(), y.clear());
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
      let { soundId: t } = e;
      (D.delete(t), y.delete(t));
    },
  });
  var M = n(994500),
    P = n(287809),
    U = n(562153),
    w = n(427262),
    G = n(435558),
    x = n.n(G),
    k = n(111159),
    F = n(952270),
    B = n(320448),
    V = n(964486),
    H = n(624793),
    j = n(548118),
    W = n(465794),
    Y = n(796774),
    K = n(71393),
    $ = n(449054),
    z = n(158045),
    X = n(763827),
    Z = n(174459),
    q = n(652215),
    Q = n(202541),
    J = (((i = {}).HOVER = "hover"), (i.SEE_MORE_DETAILS = "see_more_details"), i);
  let ee = new Set();
  function et(e, t) {
    let { sound: n, startedAt: i } = t,
      r = `${e}:${n.soundId}:${i}`;
    return !ee.has(r) && (ee.add(r), !0);
  }
  function en(e) {
    let {
      action: t,
      guildId: n,
      channelId: i,
      echo: r,
      sourceGuildState: a,
      analyticsLocations: s,
    } = e;
    if (!et(`${q.HAw.SOUNDBOARD_ECHO_SOUND_DETAILS_VIEWED}:${t}`, r)) return;
    let { sound: l } = r;
    Z.default.track(q.HAw.SOUNDBOARD_ECHO_SOUND_DETAILS_VIEWED, {
      action: t,
      voice_guild_id: n,
      channel_id: i,
      sound_id: l.soundId,
      source_guild_id: l.guildId,
      source_guild_state: a,
      location_stack: s,
    });
  }
  var ei = n(660183),
    er = n(858981);
  function ea(e) {
    let { icon: t, title: n, description: i } = e;
    return (0, r.jsxs)("div", {
      className: er.wt,
      children: [
        t,
        (0, r.jsxs)("div", {
          className: er.FS,
          children: [
            (0, r.jsx)(h.E, { variant: "text-sm/medium", children: n }),
            (0, r.jsx)(h.E, { variant: "text-xs/medium", color: "text-muted", children: i }),
          ],
        }),
      ],
    });
  }
  function es(e) {
    let { sourceGuildName: t, isExternal: n } = e,
      { analyticsLocations: i } = (0, m.Ay)(T.A.SOUNDBOARD_ECHO, T.A.PREMIUM_UPSELL);
    return (
      (0, V.Ay)(() => {
        !(function (e) {
          let { isExternal: t, analyticsLocations: n } = e;
          Z.default.track(q.HAw.PREMIUM_UPSELL_VIEWED, {
            type: Q.e.SOUNDBOARD_ECHO_SOUND_DETAILS_UPSELL,
            is_external: t,
            location_stack: n,
            sku_id: z.Ay.getSkuIdForPremiumType(Q.PremiumTypes.TIER_2),
            voice_guild_id: X.A.getGuildId() ?? null,
          });
        })({ isExternal: n, analyticsLocations: i });
      }),
      (0, r.jsx)(m.f5, {
        value: i,
        children: (0, r.jsxs)("div", {
          className: er.Kt,
          children: [
            (0, r.jsx)(h.E, {
              variant: "text-xs/medium",
              color: "text-muted",
              children: ei.intl.format(ei.t["/ZJIuo"], { guildName: t }),
            }),
            (0, r.jsx)(W.A, {
              size: "sm",
              fullWidth: !0,
              subscriptionTier: Q.pe.TIER_2,
              buttonTextOverride: ei.intl.string(ei.t.pj0XBN),
            }),
          ],
        }),
      })
    );
  }
  function el(e) {
    let { sourceGuild: t } = e,
      n = a.useCallback(() => {
        (0, $.Z2)(t.id, {});
      }, [t.id]);
    return (0, r.jsxs)("div", {
      className: er.Ae,
      children: [
        (0, r.jsx)(A.D, {
          onClick: n,
          className: er.vk,
          children: (0, r.jsx)(h.E, {
            variant: "text-sm/medium",
            children: ei.intl.string(ei.t.BETi5Z),
          }),
        }),
        (0, r.jsx)(h.E, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: ei.intl.string(ei.t.QzKwEQ),
        }),
      ],
    });
  }
  function eo(e) {
    let { guildId: t, channelId: n, sound: i, startedAt: s } = e,
      l = (function (e) {
        let { guildId: t, soundId: n } = e,
          i = "0" === t,
          r = (0, d.bG)([K.A], () => K.A.getGuild(t)),
          [s, l] = a.useState(),
          o = !i && null == r;
        return (
          a.useEffect(() => {
            o &&
              (0, Y.nh)(n, t)
                .catch(() => null)
                .then(l);
          }, [o, n, t]),
          a.useMemo(
            () =>
              i
                ? { state: "DEFAULT_SOUND" }
                : null != r
                  ? { state: "MEMBER", sourceGuild: H.GO.createFromGuildRecord(r) }
                  : void 0 === s
                    ? { state: "LOADING" }
                    : null == s
                      ? { state: "UNAVAILABLE" }
                      : { state: "DISCOVERABLE", sourceGuild: H.GO.createFromDiscoverableGuild(s) },
            [i, r, s],
          )
        );
      })(i),
      o = (0, d.bG)([P.default], () => z.Ay.canUseSoundboardEverywhere(P.default.getCurrentUser())),
      { analyticsLocations: c } = (0, m.Ay)();
    switch (
      (a.useEffect(() => {
        "LOADING" !== l.state &&
          en({
            action: J.SEE_MORE_DETAILS,
            guildId: t,
            channelId: n,
            echo: { sound: i, startedAt: s },
            sourceGuildState: l.state.toLowerCase(),
            analyticsLocations: c,
          });
      }, [c, n, t, i, l.state, s]),
      l.state)
    ) {
      case "LOADING":
        return (0, r.jsxs)("div", {
          className: er.wt,
          children: [
            (0, r.jsx)("div", { className: er.EQ }),
            (0, r.jsx)("div", { className: er.jC }),
          ],
        });
      case "DEFAULT_SOUND":
        return (0, r.jsx)(ea, {
          icon: (0, r.jsx)("div", {
            className: er.EQ,
            children: (0, r.jsx)(k.p, { size: "refresh_sm" }),
          }),
          title: ei.intl.string(ei.t.rWPrJC),
          description: ei.intl.string(ei.t.ixMwGl),
        });
      case "UNAVAILABLE":
        return (0, r.jsx)(ea, {
          icon: (0, r.jsx)("div", {
            className: er.EQ,
            children: (0, r.jsx)(F.EyeSlashIcon, { size: "refresh_sm" }),
          }),
          title: ei.intl.string(ei.t.T7AWtb),
          description: ei.intl.string(ei.t.Z4UD3R),
        });
      case "MEMBER":
        let { sourceGuild: u } = l;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(ea, {
              icon: (0, r.jsx)(j.Ay, { size: j.Ay.Sizes.MEDIUM, guild: u, active: !0 }),
              title: u.name,
              description: ei.intl.string(ei.t.l3QzyC),
            }),
            !o && (0, r.jsx)(es, { sourceGuildName: u.name, isExternal: u.id !== t }),
          ],
        });
      case "DISCOVERABLE": {
        let { sourceGuild: e } = l;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(ea, {
              icon: (0, r.jsx)(j.Ay, { size: j.Ay.Sizes.MEDIUM, guild: e, active: !0 }),
              title: e.name,
              description: ei.intl.string(ei.t.s5No7R),
            }),
            (0, r.jsx)(el, { sourceGuild: e }),
          ],
        });
      }
    }
  }
  function ed(e) {
    let { guildId: t, channelId: n, sound: i, playedByUserIds: s, startedAt: l } = e,
      { emojiId: o, emojiName: c, emojiAnimated: u, name: _ } = i,
      E = (function (e) {
        let { playedByUserIds: t, guildId: n, channelId: i } = e,
          r = t.size,
          a = (0, d.yK)([P.default, M.A], () =>
            x()(Array.from(t))
              .reject((e) => M.A.isBlockedOrIgnored(e))
              .take(3)
              .map((e) => {
                let t = P.default.getUser(e);
                return U.Ay.getName(n, i, t);
              })
              .value(),
          ),
          s = r - a.length;
        if (1 === a.length)
          if (s > 0) return ei.intl.formatToPlainString(ei.t.EXaquk, { a: a[0], n: s });
          else return ei.intl.formatToPlainString(ei.t["DU+Rd+"], { a: a[0] });
        if (2 === a.length)
          if (s > 0) return ei.intl.formatToPlainString(ei.t.EO8JM8, { a: a[0], b: a[1], n: s });
          else return ei.intl.formatToPlainString(ei.t.qr8Cg3, { a: a[0], b: a[1] });
        return 3 !== a.length
          ? ei.intl.formatToPlainString(ei.t.P5JeeM, { n: s })
          : s > 0
            ? ei.intl.formatToPlainString(ei.t["+z+JUw"], { a: a[0], b: a[1], c: a[2], n: s })
            : ei.intl.formatToPlainString(ei.t["3Zq6FM"], { a: a[0], b: a[1], c: a[2] });
      })({ playedByUserIds: s, guildId: t, channelId: n }),
      [f, p] = a.useState(!1),
      T = a.useCallback((e) => e?.focus(), []),
      { analyticsLocations: g } = (0, m.Ay)();
    return (
      (0, V.Ay)(() => {
        en({
          action: J.HOVER,
          guildId: t,
          channelId: n,
          echo: { sound: i, startedAt: l },
          analyticsLocations: g,
        });
      }),
      (0, r.jsxs)("div", {
        className: er.kL,
        children: [
          (0, r.jsx)("div", {
            className: er.r,
            children: (0, r.jsx)(ea, {
              icon:
                null != c || null != o
                  ? (0, r.jsx)(I.A, { className: er.Zg, emojiId: o, emojiName: c, animated: u })
                  : null,
              title: _,
              description: E,
            }),
          }),
          f
            ? (0, r.jsx)("div", {
                ref: T,
                tabIndex: -1,
                className: er.bT,
                children: (0, r.jsx)(
                  eo,
                  { guildId: t, channelId: n, sound: i, startedAt: l },
                  i.soundId,
                ),
              })
            : (0, r.jsx)("div", {
                className: er.x_,
                children: (0, r.jsxs)(A.D, {
                  onClick: () => p(!0),
                  className: er.vk,
                  children: [
                    (0, r.jsx)(h.E, {
                      variant: "text-sm/medium",
                      children: ei.intl.string(ei.t["UQT3/h"]),
                    }),
                    (0, r.jsx)(B._, { size: "xs", color: "currentColor" }),
                  ],
                }),
              }),
        ],
      })
    );
  }
  var ec = n(559949),
    eu = n(73392),
    e_ = n(889053);
  function eE(e) {
    let { count: t } = e,
      [n, i] = a.useState(!1),
      [s, d] = a.useState(null),
      [c, u] = a.useState({}),
      _ = a.useRef(null),
      E = a.useRef(null),
      A = (0, f.p)(n, {
        from: { translateX: -100, opacity: 0 },
        enter: { translateX: 0, opacity: 1 },
        leave: { translateX: 100, opacity: 0 },
        config: o.config.default,
      });
    (a.useEffect(() => {
      if (
        t <= 100 &&
        t >= 50 &&
        null != E.current &&
        Math.floor(t / 10) > Math.floor(E.current / 10)
      ) {
        let e, n;
        null != _.current && clearTimeout(_.current);
        let r = 10 * Math.floor(t / 10);
        (d(r),
          i(!0),
          u(
            ((e = Math.floor(50 * Math.random()) + 20),
            (n = r - 10),
            {
              transform: `rotate(${Math.floor(25 * Math.random()) - 12.5}deg)`,
              bottom: e,
              top: -e - (r >= 100 ? 2 * n : n),
              left: Math.floor(100 * Math.random()) - 200,
              fontSize: `${n}px`,
              lineHeight: `${n}px`,
            }),
          ),
          (E.current = t),
          (_.current = setTimeout(() => {
            i(!1);
          }, 1500)));
      }
      E.current = t;
    }, [t]),
      a.useEffect(
        () => () => {
          null != _.current && clearTimeout(_.current);
        },
        [],
      ));
    let { className: h } = (0, eu.p)(ec.x.PIXELIFY);
    return A((e, t) =>
      t
        ? (0, r.jsx)(o.animated.div, {
            className: l()(e_._, h),
            style: { ...c, ...e },
            children:
              100 === s
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", { children: `${s} HIT` }),
                      (0, r.jsx)("div", { children: "SUPER COMBO" }),
                    ],
                  })
                : `${s} HIT COMBO`,
          })
        : null,
    );
  }
  var eA = n(998812);
  function eh(e) {
    let {
        guildId: t,
        channelId: n,
        sound: i,
        authorId: s,
        mostRecentPlayedByUserId: o,
        count: f,
        disabled: N,
        playedByUserIds: C,
        startedAt: O,
        showDetails: R,
        onDetailsMouseEnter: L,
        onDetailsMouseLeave: y,
      } = e,
      { authorUser: D, mostRecentPlayedUser: v } = (0, d.cf)([P.default, M.A], () => {
        let e = M.A.isBlockedOrIgnored(o ?? void 0);
        return {
          authorUser: P.default.getUser(s),
          mostRecentPlayedUser: e || s === o ? null : P.default.getUser(o),
        };
      }),
      b = a.useRef(null),
      { analyticsLocations: G } = (0, m.Ay)(T.A.SOUNDBOARD_ECHO);
    a.useEffect(() => {
      null == t ||
        null == D ||
        N ||
        (function (e) {
          let { guildId: t, channelId: n, echo: i, analyticsLocations: r } = e;
          if (!et(q.HAw.SOUNDBOARD_ECHO_VIEWED, i)) return;
          let { sound: a, authorId: s } = i;
          Z.default.track(q.HAw.SOUNDBOARD_ECHO_VIEWED, {
            voice_guild_id: t,
            channel_id: n,
            sound_id: a.soundId,
            source_guild_id: a.guildId,
            author_id: s,
            is_author: s === P.default.getCurrentUser()?.id,
            location_stack: r,
          });
        })({
          guildId: t,
          channelId: n,
          echo: { sound: i, authorId: s, startedAt: O },
          analyticsLocations: G,
        });
    }, [G, s, D, n, N, t, i, O]);
    let x = a.useCallback(() => {
        L(i.soundId);
      }, [L, i.soundId]),
      k = a.useCallback(() => {
        (0, S.CZ)(i, n, G);
      }, [G, n, i]),
      F = (0, d.bG)([g.A], () => g.A.isPlayingSound(i.soundId), [i]),
      B = a.useMemo(() => D?.getAvatarURL(t, (0, c.FT)(c._3.SIZE_32)), [D, t]),
      V = a.useMemo(() => v?.getAvatarURL(t, (0, c.FT)(c._3.SIZE_32)), [v, t]);
    if (null == t || null == D) return null;
    let { emojiId: H, emojiName: j, emojiAnimated: W, name: Y } = i;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsxs)("div", {
          className: l()(eA.Iv, { [eA.E$]: N }),
          style: { height: 36 },
          children: [
            (0, r.jsx)(u.Y, {
              targetElementRef: b,
              shouldShow: R,
              renderPopout: (e) => {
                let { setPopoutRef: a } = e;
                return (0, r.jsx)("div", {
                  ref: a,
                  onMouseEnter: x,
                  onMouseLeave: y,
                  children: (0, r.jsx)(ed, {
                    guildId: t,
                    channelId: n,
                    sound: i,
                    playedByUserIds: C,
                    startedAt: O,
                  }),
                });
              },
              position: "top",
              align: "center",
              children: () =>
                (0, r.jsx)("div", {
                  ref: b,
                  onMouseEnter: x,
                  onMouseLeave: y,
                  children: (0, r.jsxs)("div", {
                    className: eA.yA,
                    children: [
                      (0, r.jsx)("div", {
                        className: eA.R3,
                        children: (0, r.jsx)(_.eu, {
                          className: eA.Du,
                          src: B,
                          size: c._3.SIZE_32,
                          "aria-label": U.Ay.getNickname(t, n, D) ?? w.Ay.getName(D),
                        }),
                      }),
                      null != v &&
                        (0, r.jsx)("div", {
                          className: l()(eA.R3, eA.aR),
                          children: (0, r.jsx)(_.eu, {
                            className: eA.mf,
                            src: V,
                            size: c._3.SIZE_32,
                            "aria-label": U.Ay.getNickname(t, n, v) ?? w.Ay.getName(v),
                          }),
                        }),
                    ],
                  }),
                }),
            }),
            (0, r.jsx)(E.m, {
              text: N ? ei.intl.string(ei.t.VqNHoS) : null,
              children: (0, r.jsxs)(A.D, {
                className: l()(eA.nG, { [eA.Tz]: F, [eA.Jx]: N }),
                onClick: N ? () => null : k,
                "aria-label": ei.intl.formatToPlainString(ei.t.VOmeSq, { name: Y }),
                children: [
                  (null != j || null != H) &&
                    (0, r.jsx)(I.A, {
                      size: "reaction",
                      className: eA.FA,
                      emojiId: H,
                      emojiName: j,
                      animated: W,
                    }),
                  (0, r.jsx)(h.E, { variant: "text-md/medium", children: Y }),
                  (0, r.jsx)("div", { className: eA.SU }),
                  (0, r.jsxs)(h.E, {
                    variant: "text-md/medium",
                    className: eA.Zi,
                    tabularNumbers: !0,
                    children: ["x", (0, r.jsx)(p.A, { className: eA.Zi, value: f, digitWidth: 8 })],
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, r.jsx)(eE, { count: f }),
      ],
    });
  }
  function ef(e) {
    let { guildId: t, channelId: n } = e,
      i = (0, d.cf)([b], () => Object.fromEntries(b.getSoundboardEchoes())),
      [s, l] = a.useState({}),
      [c, u] = a.useState(!1),
      _ = a.useCallback(() => {
        (l(i), u(!0));
      }, [i]),
      E = a.useCallback(() => {
        u(!1);
      }, []),
      A = a.useMemo(
        () =>
          (c
            ? Object.entries(s).map((e) => {
                let [t, n] = e;
                return null != i[t] ? i[t] : { ...n, disabled: !0 };
              })
            : Object.values(i)
          )
            .slice(-3)
            .reverse(),
        [s, i, c],
      ),
      h = a.useMemo(() => A.map((e, t) => ({ echo: e, y: 42 * t })), [A]),
      I = (0, f.p)(h, {
        keys: (e) => e.echo.sound.soundId,
        from: () => ({ opacity: 0 }),
        enter: (e) => {
          let { y: t } = e;
          return { opacity: 1, translateY: -t };
        },
        update: (e) => {
          let { y: t } = e;
          return { translateY: -t };
        },
        leave: (e) => {
          let { y: t } = e;
          return { opacity: 0, translateY: -t - 36, pointerEvents: "none" };
        },
        config: o.config.gentle,
      }),
      [p, T] = a.useState(null),
      m = a.useRef(null);
    (a.useEffect(() => () => clearTimeout(m.current), []),
      null == p || A.some((e) => e.sound.soundId === p) || T(null));
    let g = a.useCallback((e) => {
        (clearTimeout(m.current), T(e));
      }, []),
      S = a.useCallback(() => {
        (clearTimeout(m.current), (m.current = setTimeout(() => T(null), 200)));
      }, []);
    return (0, r.jsx)("div", {
      className: eA.ei,
      style: { height: 126 },
      onMouseEnter: _,
      onMouseLeave: E,
      children: I((e, i) =>
        (0, r.jsx)(o.animated.div, {
          className: eA.Ob,
          style: e,
          children: (0, r.jsx)(eh, {
            guildId: t,
            channelId: n,
            ...i.echo,
            disabled: i.echo.disabled ?? !1,
            onDetailsMouseEnter: g,
            onDetailsMouseLeave: S,
            showDetails: p === i.echo.sound.soundId,
          }),
        }),
      ),
    });
  }
}
