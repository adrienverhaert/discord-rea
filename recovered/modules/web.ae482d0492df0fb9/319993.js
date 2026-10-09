/* Recovered shipped factory. Module 319993.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6849316..6856347
 * Raw property SHA-256: 03a84737c6c2bd4e9e72269ad7c5c5696a03b30188be16e3072dd17ae3bae11a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Gq: () => $, WE: () => K, qn: () => W, Ay: () => z });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(17928),
    d = n(939249),
    c = n(834730),
    u = n(299163),
    _ = n(508770),
    E = n(403581),
    A = n(7807),
    h = n(922016),
    f = n(866665),
    I = n(983851),
    p = n(885574),
    T = n(967198),
    m = n(287809),
    g = n(824744),
    S = n(158045),
    N = n(926972),
    C = n(885386),
    O = n(862482),
    R = n(821609),
    L = n(66834),
    y = n(624793),
    D = n(639245),
    v = n(188645),
    b = n(796774),
    M = n(807348),
    P = n(71393),
    U = n(725807);
  n(801541);
  var w = n(889137);
  n(980504);
  var G = n(660183),
    x =
      (((i = {})[(i.JOIN_GUILD = 0)] = "JOIN_GUILD"),
      (i[(i.GET_NITRO = 1)] = "GET_NITRO"),
      (i[(i.NONE = 2)] = "NONE"),
      i),
    k = n(202541),
    F = n(652215),
    B = n(653131);
  function V(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: i } = e,
      s = a.useCallback(async () => {
        if ((n(), null != t))
          try {
            (await L.A.joinGuild(t), L.A.transitionToGuildSync(t));
          } catch {}
      }, [n, t]);
    return i === x.GET_NITRO
      ? (0, r.jsx)(U.A, {
          fullWidth: !0,
          showGradient: !0,
          premiumModalAnalyticsLocation: { section: F.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
          subscriptionTier: k.pe.TIER_2,
          size: O.$n.Sizes.SMALL,
          color: O.$n.Colors.CUSTOM,
          onClick: n,
          textOptions: { textOverride: G.intl.string(G.t.pj0XBN) },
        })
      : i === x.JOIN_GUILD
        ? (0, r.jsx)(R.$, {
            variant: "primary",
            size: "sm",
            text: G.intl.string(G.t.riu2R5),
            fullWidth: !0,
            onClick: s,
          })
        : null;
  }
  function H(e) {
    let t,
      n,
      i,
      s,
      { sound: l, channel: d, closePopout: u, refreshPosition: E, renderSoundButton: A } = e,
      h = "0" === l.guildId,
      f = (0, o.bG)([P.A], () => P.A.getGuild(l.guildId)),
      I = !h && null != f,
      [p, T] = a.useState(),
      g = (0, N.tj)({ location: "SoundmojiGuildInfo" }),
      C = h || I || null != p || !g,
      [O, R] = a.useState(!C);
    a.useEffect(() => {
      C ||
        (R(!0),
        (0, b.nh)(l.soundId, l.guildId)
          .then((e) => {
            T(e);
          })
          .finally(() => {
            (R(!1), E());
          }));
    }, [E, C, l.guildId, l.soundId]);
    let { buttonType: L, description: U } =
        ((t = "0" === l.guildId),
        (n = (0, o.bG)([m.default], () =>
          S.Ay.canUseSoundboardEverywhere(m.default.getCurrentUser()),
        )),
        (i = (0, N.tj)({ location: "useSoundmojiGuildInfoData" })),
        (s = l.guildId !== d?.guild_id),
        {
          buttonType: a.useMemo(
            () => (t || !i ? 2 : n ? (I || null == p ? 2 : 0) : 1),
            [t, n, i, I, p],
          ),
          description: a.useMemo(() => {
            let e = null != p;
            return (0, w.YW)({
              hasSoundmojiPermissions: n,
              isInGuild: I,
              isGuildDiscoverable: e,
              isSoundFromDifferentGuild: s,
              canSendSoundmojis: i,
              isDefaultSound: t,
            })
              .with({ canSendSoundmojis: !1 }, () => G.intl.string(G.t.x2kyyJ))
              .with({ isDefaultSound: !0 }, () => G.intl.string(G.t.AabHep))
              .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => G.intl.string(G.t.MRYt06))
              .with(
                { hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 },
                () => G.intl.string(G.t.p17MQJ),
              )
              .with(
                { hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 },
                () => G.intl.string(G.t.Lkbm5s),
              )
              .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                G.intl.string(G.t.GTJmaS),
              )
              .with(
                { hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 },
                () => G.intl.string(G.t["sj/imS"]),
              )
              .with(
                {
                  hasSoundmojiPermissions: !1,
                  isInGuild: !0,
                  isSoundFromDifferentGuild: !0,
                  canSendSoundmojis: !0,
                },
                () => G.intl.string(G.t["3Ru2/x"]),
              )
              .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                G.intl.string(G.t.qRkWhZ),
              )
              .exhaustive();
          }, [t, p, n, I, s, i]),
        }),
      k = L === x.JOIN_GUILD,
      F = !h && O,
      H = a.useMemo(
        () =>
          I
            ? y.GO.createFromGuildRecord(f)
            : null != p
              ? y.GO.createFromDiscoverableGuild(p)
              : void 0,
        [f, I, p],
      );
    return F
      ? (0, r.jsx)(v.Y0, {})
      : (0, r.jsxs)("div", {
          className: B.op,
          children: [
            (0, r.jsxs)(v.Uq, {
              children: [
                (0, r.jsxs)("div", {
                  className: B.g4,
                  children: [
                    A({
                      buttonOverlay: M.If.NONE,
                      sound: l,
                      channel: void 0,
                      isSoundmoji: !0,
                      onSelectItem: () => {},
                    }),
                    (0, r.jsx)(c.E, { variant: "text-sm/normal", children: U }),
                  ],
                }),
                null != H &&
                  (0, r.jsxs)("div", {
                    className: B.Qe,
                    children: [
                      (0, r.jsx)(c.E, {
                        variant: "eyebrow",
                        color: "text-muted",
                        className: B.x$,
                        children: I ? G.intl.string(G.t.tGDabk) : G.intl.string(G.t.rnOmOa),
                      }),
                      (0, r.jsx)("div", {
                        className: B.Ff,
                        children: (0, r.jsx)(D.G7, {
                          expressionSourceGuild: H,
                          hasJoinedExpressionSourceGuild: I,
                          isDisplayingJoinGuildButtonInPopout: k,
                          closePopout: u,
                        }),
                      }),
                      (0, r.jsx)(V, { buttonType: L, discoverableGuildId: p?.id, closePopout: u }),
                    ],
                  }),
              ],
            }),
            (0, r.jsx)("div", {
              className: B.aZ,
              children: (0, r.jsx)(_.E, { type: { text: "BETA" }, variant: "brand" }),
            }),
          ],
        });
  }
  var j = n(948611);
  function W() {
    let { volume: e, onVolumeChange: t } = (function () {
      let [e, t] = a.useState(C.HO.getSetting());
      return {
        volume: e,
        onVolumeChange: a.useCallback((e) => {
          let n = (0, g.w)(e);
          (t(n), C.HO.updateSetting(n));
        }, []),
      };
    })();
    return (0, r.jsxs)(d.D, {
      className: B.xJ,
      onClick: (e) => e.stopPropagation(),
      children: [
        (0, r.jsx)(c.E, { variant: "text-sm/normal", children: G.intl.string(G.t["2JbvKw"]) }),
        (0, r.jsx)(u.A, {
          onValueChange: t,
          className: B.aw,
          initialValue: (0, g.M)(e),
          maxValue: 100,
        }),
      ],
    });
  }
  function Y(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
      i = (0, N.tj)({ location: "SoundmojiBanner" }),
      a = (0, o.bG)([m.default], () => S.Ay.canUseSoundboardEverywhere(m.default.getCurrentUser())),
      s = (0, o.bG)([T.A], () => T.A.getGuildId());
    return n || a || "0" === t.guildId || t.guildId === s || !i
      ? (0, r.jsx)("div", {
          className: B.aZ,
          children: (0, r.jsx)(_.E, { type: { text: "BETA" }, variant: "brand" }),
        })
      : (0, r.jsxs)("div", {
          className: B.Mq,
          children: [
            (0, r.jsx)("div", { className: B.Nh }),
            (0, r.jsxs)("div", {
              className: B.Pc,
              children: [
                (0, r.jsx)(E.t, { size: "xxs", color: "white", className: B.aJ }),
                (0, r.jsx)(c.E, {
                  variant: "text-xs/medium",
                  color: "text-overlay-light",
                  className: B.sD,
                  children: G.intl.string(G.t["BMw+7I"]),
                }),
                (0, r.jsx)(_.E, { type: { text: "BETA" }, variant: "brand" }),
              ],
            }),
          ],
        });
  }
  function K(e) {
    let { sound: t } = e;
    return (0, r.jsxs)("div", {
      className: l()(B.op, B.kX),
      children: [
        (0, r.jsx)(Y, { sound: t }),
        (0, r.jsxs)("div", {
          className: B.Br,
          children: [
            (0, r.jsxs)("div", {
              className: B.tn,
              children: [
                (0, r.jsx)(A.J, { size: "sm", className: B.nR }),
                (0, r.jsx)(c.E, {
                  variant: "text-md/semibold",
                  color: "text-strong",
                  children: t.name,
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: B.tn,
              children: (0, r.jsx)(c.E, {
                variant: "text-sm/normal",
                children: G.intl.string(G.t.D6eYmf),
              }),
            }),
          ],
        }),
      ],
    });
  }
  function $(e) {
    let {
        renderPopout: t,
        position: n,
        tooltipText: i,
        children: s,
        setTooltipShowing: l,
        clickableClassName: o,
      } = e,
      [c, u] = a.useState(!1),
      [_, E] = a.useState(String(Date.now())),
      A = a.useCallback(
        (e) => {
          (e.stopPropagation(), u(!c));
        },
        [c],
      ),
      I = a.useCallback(() => {
        E(String(Date.now()));
      }, []),
      p = a.useRef(null);
    a.useEffect(() => {
      (c ? p.current?.focus() : p.current?.blur(), l?.(c));
    }, [c, l]);
    let T = !c;
    return (0, r.jsx)(h.Y, {
      targetElementRef: p,
      renderPopout: (e) =>
        (0, r.jsx)(d.D, {
          onClick: (e) => e.stopPropagation(),
          onMouseOver: (e) => e.stopPropagation(),
          children: t({ ...e, refreshPosition: I }),
        }),
      align: "center",
      nudgeAlignIntoViewport: !0,
      position: n,
      shouldShow: c,
      onRequestClose: () => u(!1),
      animationPosition: "bottom",
      positionKey: _,
      scrollBehavior: "close",
      children: (e) =>
        (0, r.jsx)(f.m, {
          onTooltipHide: () => {
            T && l?.(!1);
          },
          onTooltipShow: () => {
            T && l?.(!0);
          },
          text: i,
          position: "top",
          shouldShow: T,
          children: (0, r.jsx)(d.D, {
            ...e,
            innerRef: p,
            "aria-label": i,
            onClick: A,
            className: o,
            children: s,
          }),
        }),
    });
  }
  function z(e) {
    let { sound: t, channel: n, setTooltipShowing: i, renderSoundButton: a } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)($, {
          setTooltipShowing: i,
          renderPopout: () => (0, r.jsx)(W, {}),
          tooltipText: G.intl.string(G.t["19lt24"]),
          position: "top",
          children: (0, r.jsx)(I.H, { size: "md", color: "currentColor", className: j.Wo }),
        }),
        (0, r.jsx)($, {
          setTooltipShowing: i,
          renderPopout: (e) => (0, r.jsx)(H, { sound: t, channel: n, renderSoundButton: a, ...e }),
          tooltipText: G.intl.string(G.t["KVbJU/"]),
          position: "right",
          children: (0, r.jsx)(p.CircleInformationIcon, {
            size: "md",
            color: "currentColor",
            className: j.Wo,
          }),
        }),
      ],
    });
  }
}
