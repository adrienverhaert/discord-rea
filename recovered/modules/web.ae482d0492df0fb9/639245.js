/* Recovered shipped factory. Module 639245.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5992897..6003026
 * Raw property SHA-256: 149663b226bdd3709fcd965e41cde21dd1efa5e39cfc7a9a7e83a39f9ef49c2f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { G7: () => et, iP: () => en, sX: () => ei, mG: () => er, MV: () => ee });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(562708),
    o = n(17928),
    d = n(3026),
    c = n(305866),
    u = n(834730),
    _ = n(939249),
    E = n(297264),
    A = n(821609),
    h = n(847374),
    f = n(866665),
    I = n(66834),
    p = n(565645),
    T = n(793574),
    m = n(688810),
    g = n(139286),
    S = n(235986),
    N = n(573435),
    C = n(836039),
    O = n(702841),
    R = n(71393),
    L = n(236285),
    y = n(770335),
    D = n(624793),
    v = n(652215),
    b = n(731383),
    M = n(548118),
    P = n(714991),
    U = n(492494),
    w = n(384684),
    G = n(985242),
    x = n(87719),
    k = n(465794),
    F = n(976860),
    B = n(309010),
    V = n(967198),
    H = n(287809),
    j = n(174459),
    W = n(486020),
    Y = n(449054),
    K = n(158045),
    $ = n(450707),
    z = n(773669),
    X = n(660183),
    Z = n(188645),
    q = n(746080),
    Q = n(202541),
    J = n(844749);
  function ee(e) {
    var t, n;
    let r,
      a,
      { node: s } = e;
    (0, b.i)({ emojiId: s.emojiId, currentGuildId: V.A.getGuildId() });
    let l =
        ((n = t = s.name),
        (r = (0, o.bG)([z.default], () => z.default.locale.startsWith("en-"))),
        (a =
          ":pizza:" === n && r ? X.intl.formatToPlainString(X.t["1knDPI"], { emojiName: n }) : n),
        ":pizza:" === t ? a : t),
      _ = l !== s.name;
    return (0, i.jsx)(c.l, {
      children: (0, i.jsx)(Z.Uq, {
        children: (0, i.jsxs)(S.A, {
          className: J.gH,
          children: [
            (0, i.jsx)(p.A, {
              emojiName: s.name,
              className: J.P$,
              src: s.src,
              animated: !1,
              size: "jumbo",
            }),
            (0, i.jsxs)(S.A, {
              direction: S.A.Direction.VERTICAL,
              justify: S.A.Justify.CENTER,
              className: J.bM,
              children: [
                (0, i.jsx)(u.E, {
                  className: J.__invalid_emojiName,
                  variant: "text-md/semibold",
                  children: _
                    ? (0, i.jsx)("div", { className: J.Gl, children: l })
                    : (0, i.jsx)(d.A, { children: l }),
                }),
                (0, i.jsx)(u.E, { variant: "text-sm/normal", children: X.intl.string(X.t.sXdH8c) }),
              ],
            }),
          ],
        }),
      }),
    });
  }
  let et = (e) => {
    let t,
      {
        expressionSourceGuild: n,
        hasJoinedExpressionSourceGuild: r,
        isDisplayingJoinGuildButtonInPopout: a,
        closePopout: l,
      } = e,
      { id: o, icon: c, name: A } = n,
      h = W.Ay.getGuildIconURL({ id: o, icon: c, size: 32, canAnimate: !0 }),
      f = (r = r ?? !0) || n.isDiscoverable();
    function I() {
      n.isDiscoverable()
        ? (l(), (0, Y.Z2)(o, {}))
        : r && (l(), (0, F.pX)(v.BVt.CHANNEL(o, B.Ay.getChannelId(o))));
    }
    let p = n.isDiscoverable() && null != n.presenceCount;
    return (0, i.jsxs)(S.A, {
      align: S.A.Align.CENTER,
      children: [
        (0, i.jsx)(N.Ay, {
          mask: N.Ay.Masks.SQUIRCLE,
          width: 32,
          height: 32,
          className: J.__invalid_guildIconContainer,
          children:
            null != h && f
              ? (0, i.jsxs)(_.D, {
                  "aria-label": A,
                  onClick: I,
                  children: [(0, i.jsx)("img", { src: h, alt: "", className: J.$f }), " :"],
                })
              : (0, i.jsx)(M.Ay, { size: M.Ay.Sizes.SMALL, className: J.oi, guild: n }),
        }),
        (0, i.jsxs)(S.A, {
          direction: S.A.Direction.VERTICAL,
          className: s()(J.__invalid_guildInformation, J.bM),
          children: [
            (0, i.jsxs)(S.A, {
              align: S.A.Align.CENTER,
              children: [
                (0, i.jsx)(P.A, { guild: n, className: J.n2 }),
                f
                  ? (0, i.jsx)(_.D, {
                      onClick: I,
                      className: J.bM,
                      children: (0, i.jsx)(E.D, {
                        className: J.J5,
                        variant: "heading-md/semibold",
                        children: (0, i.jsx)(d.A, { children: A }),
                      }),
                    })
                  : (0, i.jsx)(E.D, {
                      variant: "heading-md/semibold",
                      children: (0, i.jsx)(d.A, { children: A }),
                    }),
              ],
            }),
            (0, i.jsx)(S.A, {
              align: S.A.Align.CENTER,
              children: p
                ? ((t = !a && !r),
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: X.intl.format(X.t["LC+S+m"], { membersOnline: n.presenceCount }),
                      }),
                      (0, i.jsx)("div", { className: J.zk }),
                      t
                        ? (0, i.jsx)(_.D, {
                            className: J.Ki,
                            onClick: I,
                            children: (0, i.jsx)(u.E, {
                              variant: "text-xs/normal",
                              color: "text-link",
                              children: X.intl.string(X.t.riu2R5),
                            }),
                          })
                        : (0, i.jsx)(u.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: X.intl.string(X.t.inyJqO),
                          }),
                    ],
                  }))
                : (0, i.jsx)(u.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: X.intl.string(X.t.H29mx4),
                  }),
            }),
          ],
        }),
      ],
    });
  };
  function en(e) {
    let { node: t, closePopout: n, refreshPositionKey: a, nonce: s } = e,
      {
        expressionSourceGuild: l,
        expressionSourceApplication: o,
        sourceType: d,
        joinedEmojiSourceGuildRecord: u,
        emoji: _,
        isFetching: E,
      } = (function (e) {
        let { emojiId: t, refreshPositionKey: n } = e,
          { joinedEmojiSourceGuildRecord: i, emoji: a } = (0, O.cf)([L.Ay, R.A], () => {
            var e, n;
            let i;
            return (
              (e = L.Ay),
              (n = R.A),
              (i = null != t ? e.getCustomEmojiById(t) : null),
              i?.type === y.i.GUILD
                ? { emoji: i, joinedEmojiSourceGuildRecord: n.getGuild(i?.guildId) }
                : { emoji: null, joinedEmojiSourceGuildRecord: null }
            );
          }),
          s = null != i,
          l = null != i && i.features.has(v.GuildFeatures.DISCOVERABLE),
          o = (!s || l) && null != t,
          [d, c] = r.useState(o),
          [u, _] = r.useState(null),
          E = null != i ? D.GO.createFromGuildRecord(i) : null,
          [A, h] = r.useState(E),
          [f, I] = r.useState(null),
          p = r.useRef(n);
        return (
          r.useEffect(() => {
            p.current = n;
          }),
          r.useEffect(() => {
            async function e() {
              let e = null != t ? await (0, D.g_)(t) : null;
              if (null != e)
                switch ((_(e.type), e.type)) {
                  case D.rV.APPLICATION:
                    I(e.application);
                    break;
                  case D.rV.GUILD:
                    h(e.guild);
                }
              (c(!1), p.current?.());
            }
            (p.current?.(), o) ? e() : p.current?.();
          }, [t, o]),
          {
            expressionSourceGuild: A,
            expressionSourceApplication: f,
            sourceType: u,
            joinedEmojiSourceGuildRecord: i,
            hasJoinedEmojiSourceGuild: s,
            emoji: a,
            isFetching: d,
          }
        );
      })({ emojiId: t.emojiId, refreshPositionKey: a });
    return E
      ? (0, i.jsx)(Z.Y0, {})
      : (0, i.jsx)(c.l, {
          "aria-label": t.name,
          children: (0, i.jsx)(ei, {
            node: t,
            sourceType: d,
            expressionSourceApplication: o,
            guildEmoji: _ ?? void 0,
            expressionSourceGuild: l,
            joinedEmojiSourceGuildRecord: u,
            closePopout: n,
            onToggleShowMoreEmojis: a,
            demoMode: !1,
            nonce: s,
          }),
        });
  }
  function ei(e) {
    let t,
      n,
      {
        node: a,
        sourceType: c,
        expressionSourceApplication: E,
        expressionSourceGuild: f,
        joinedEmojiSourceGuildRecord: N,
        closePopout: O,
        onToggleShowMoreEmojis: R,
        guildEmoji: L,
        demoMode: y = !1,
        nonce: M,
      } = e,
      P = (0, o.bG)([H.default], () => H.default.getCurrentUser()),
      F = (0, o.bG)([V.A], () => V.A.getGuildId()),
      B = K.Ay.isPremium(P),
      W = null != F && (F === f?.id || F === N?.id),
      Y = null != N,
      z = f?.isDiscoverable() ?? !1;
    y && ((B = !0), (z = !0), (Y = !1), (W = !1));
    let ee = {
        page:
          null != (0, o.bG)([V.A], () => V.A.getGuildId()) ? v.liQ.GUILD_CHANNEL : v.liQ.DM_CHANNEL,
        section: v.JJy.EMOJI_UPSELL_POPOUT,
      },
      {
        isRoleSubscriptionEmoji: en,
        isUnusableRoleSubscriptionEmoji: ei,
        userIsRoleSubscriber: ea,
      } = r.useMemo(
        () =>
          null == L
            ? {
                isRoleSubscriptionEmoji: !1,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
              }
            : {
                isRoleSubscriptionEmoji: U.kT(L),
                isUnusableRoleSubscriptionEmoji: U.JN(L, F ?? void 0),
                userIsRoleSubscriber: w.A.getUserSubscriptionRoles(L.guildId).size > 0,
              },
        [L, F],
      ),
      es = !!ei && (0, C.tE)(L?.guildId),
      { analyticsLocations: el } = (0, m.Ay)(T.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, g.A)(
      {
        type: l.ImpressionTypes.MODAL,
        name: l.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
        properties: {
          location_stack: el,
          emoji_guild_id: L?.guildId ?? null,
          emoji_id: L?.id ?? null,
        },
      },
      { disableTrack: !en },
    );
    let eo = V.A.getGuildId(),
      ed = (0, $.O)({
        sourceType: c,
        expressionSourceApplication: E,
        isPremium: B,
        hasJoinedEmojiSourceGuild: Y,
        isRoleSubscriptionEmoji: en,
        isUnusableRoleSubscriptionEmoji: ei,
        userIsRoleSubscriber: ea,
        emojiComesFromCurrentGuild: W,
        isDiscoverable: z,
        shouldHideRoleSubscriptionCTA: es,
        onOpenPremiumSettings: () => {
          (O(),
            j.default.track(v.HAw.PREMIUM_PROMOTION_OPENED, {
              location_page: ee.page,
              location_section: ee.section,
            }),
            (0, x.e)());
        },
      }),
      ec = Y && ei && !es && ((B && en) || !B),
      eu = ed.emojiDescription,
      e_ = (0, b.i)({
        emojiId: a.emojiId,
        currentGuildId: eo,
        popoutData: ed,
        emojiSourceGuildId: f?.id,
        nonce: M,
        demoMode: y,
      }),
      eE = ed.type === $.u.JOIN_GUILD,
      eA = ed.type === $.u.GET_PREMIUM,
      [eh, ef] = r.useState(!1),
      eI = z || (Y && !W) || null != f;
    return (0, i.jsxs)(Z.Uq, {
      className: J.Bm,
      children: [
        (function () {
          async function e() {
            if (y || null == f || Y) return;
            O();
            let e = f.id;
            try {
              (await I.A.joinGuild(e), I.A.transitionToGuildSync(e));
            } catch {}
          }
          let t = !Y && z;
          return (0, i.jsxs)("div", {
            className: J.gH,
            children: [
              (0, i.jsxs)(S.A, {
                children: [
                  (0, i.jsx)(p.A, {
                    className: J.P$,
                    emojiId: a.emojiId,
                    emojiName: a.name,
                    animated: a.animated,
                    size: "jumbo",
                  }),
                  (0, i.jsxs)(S.A, {
                    direction: S.A.Direction.VERTICAL,
                    justify: S.A.Justify.CENTER,
                    className: J.bM,
                    children: [
                      (0, i.jsx)(u.E, {
                        variant: "text-md/semibold",
                        children: (0, i.jsx)(d.A, { children: a.name }),
                      }),
                      null != eu && (0, i.jsx)(u.E, { variant: "text-sm/normal", children: eu }),
                    ],
                  }),
                ],
              }),
              eA
                ? (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: J.lI,
                    children: (0, i.jsx)(k.A, {
                      subscriptionTier: Q.pe.TIER_2,
                      size: "sm",
                      fullWidth: !0,
                      buttonTextOverride: ed.text,
                      onSubscribeModalClose: (t) => (t ? e() : O()),
                      postSuccessGuild: t ? (f ?? void 0) : void 0,
                      premiumModalAnalyticsLocation: ee,
                    }),
                  })
                : eE
                  ? (0, i.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: J.lI,
                      children: (0, i.jsx)(A.$, {
                        variant: "primary",
                        size: "sm",
                        text: ed.text,
                        fullWidth: !0,
                        onClick: e,
                      }),
                    })
                  : void 0,
              ec &&
                (0, i.jsx)(G.A, {
                  text: ea ? X.intl.string(X.t.yma8Vp) : X.intl.string(X.t.nN2DIo),
                  size: "sm",
                  fullWidth: !0,
                  onClick: function () {
                    (O(),
                      N?.id != null &&
                        I.A.transitionToGuildSync(
                          N.id,
                          {
                            sourceLocationStack: [
                              T.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL,
                            ],
                          },
                          q.VV.ROLE_SUBSCRIPTIONS,
                        ));
                  },
                }),
            ],
          });
        })(),
        eI &&
          ((n = null != f && !Y && z && (f?.emojis?.length ?? 0) > 1),
          (0, i.jsxs)("div", {
            className: J.tl,
            children: [
              (0, i.jsx)(u.E, {
                className: J.YW,
                variant: "text-sm/medium",
                color: "text-subtle",
                children: Y ? X.intl.string(X.t.ohTzZH) : X.intl.string(X.t["eLfh+a"]),
              }),
              (0, i.jsx)(et, {
                expressionSourceGuild: f ?? D.GO.createFromGuildRecord(N),
                hasJoinedExpressionSourceGuild: Y,
                isDisplayingJoinGuildButtonInPopout: eE,
                closePopout: O,
              }),
              n &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    ((t = X.intl.string(X.t.pnsAS2)),
                    (0, i.jsx)(_.D, {
                      onClick: function () {
                        n &&
                          (R?.(),
                          eh ||
                            y ||
                            j.default.track(v.HAw.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, e_),
                          ef(!eh));
                      },
                      className: J.wK,
                      children: (0, i.jsxs)(S.A, {
                        children: [
                          (0, i.jsx)(u.E, {
                            className: J.__invalid_showMoreEmojisLabel,
                            "aria-label": t,
                            variant: "text-xs/normal",
                            color: "none",
                            children: t,
                          }),
                          (0, i.jsx)(h.a, {
                            size: "md",
                            color: "currentColor",
                            className: s()(J.ZB, { [J.cP]: !eh }),
                          }),
                        ],
                      }),
                    })),
                    null != a.emojiId &&
                      eh &&
                      (0, i.jsx)(er, {
                        emojiId: a.emojiId,
                        expressionSourceGuild: f,
                        popoutData: ed,
                        onClose: O,
                        hasJoinedEmojiSourceGuild: Y,
                        isDisplayingButtonInTopSection: eE || eA,
                      }),
                  ],
                }),
            ],
          })),
      ],
    });
  }
  function er(e) {
    let {
        emojiId: t,
        expressionSourceGuild: n,
        hasJoinedEmojiSourceGuild: r,
        popoutData: a,
        onClose: s,
        isDisplayingButtonInTopSection: l,
      } = e,
      o = (n?.emojis ?? [])
        .slice(0, 13)
        .filter((e) => e.id !== t)
        .slice(0, 12),
      { type: d, description: c } = a;
    return (0, i.jsxs)("div", {
      className: J.LX,
      children: [
        r
          ? null
          : o.map((e) =>
              (0, i.jsx)(
                f.m,
                {
                  text: e.require_colons ? `:${e.name}:` : e.name,
                  ...Z.Uk,
                  children: (0, i.jsx)(p.A, {
                    className: J.Th,
                    emojiId: e.id,
                    animated: e.animated,
                  }),
                },
                e.id,
              ),
            ),
        !l &&
          (d === $.u.GET_PREMIUM
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: J.lI,
                    children: (0, i.jsx)(k.A, {
                      subscriptionTier: Q.pe.TIER_2,
                      buttonTextOverride: a.text,
                      fullWidth: !0,
                      onClick: () => s(),
                    }),
                  }),
                  null != c &&
                    (0, i.jsx)("div", {
                      className: J.vd,
                      children: (0, i.jsx)(u.E, {
                        variant: "text-sm/medium",
                        "aria-label": c,
                        children: c,
                      }),
                    }),
                ],
              })
            : d === $.u.JOIN_GUILD
              ? (0, i.jsx)("div", {
                  "data-button-hoisted-classname-wrapper": !0,
                  className: J.lI,
                  children: (0, i.jsx)(A.$, {
                    variant: "primary",
                    size: "sm",
                    text: a.text,
                    fullWidth: !0,
                    onClick: () => {
                      (0, Y.Z2)(n.id, {});
                    },
                  }),
                })
              : null),
      ],
    });
  }
}
