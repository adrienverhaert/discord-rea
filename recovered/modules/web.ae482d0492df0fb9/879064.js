/* Recovered shipped factory. Module 879064.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4274680..4328844
 * Raw property SHA-256: 33a14bff2e4cfb2af608da6a8bfae1ebf454155074a310efbde10385488f900a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => ir }), n(321073));
  var i,
    r,
    a = n(477900),
    s = n(582128),
    l = n(503698),
    o = n.n(l),
    d = n(649852),
    c = n.n(d),
    u = n(788413),
    _ = n(17928),
    E = n(554146),
    A = n(319060),
    h = n(305866),
    f = n(554375),
    I = n(820284),
    p = n(212245),
    T = n(964486),
    m = n(793574),
    g = n(666860),
    S = n(688810),
    N = n(379848),
    C = n(236285),
    O = n(536637),
    R = n.n(O),
    L = n(73153),
    y = n(935208);
  let D = { lastSeenNewlyAddedEmojiIds: {} },
    v = D,
    b = {};
  function M() {
    for (let e in b) v.lastSeenNewlyAddedEmojiIds[e] = b[e];
  }
  class P extends _.Ay.PersistedStore {
    static displayName = "NewlyAddedEmojiStore";
    static persistKey = "NewlyAddedEmojiStore";
    static migrations = [
      (e) => {
        let t = e.lastSeenNewlyAddedEmojiIds,
          n = {};
        for (let e in t) {
          let i = t[e];
          n[e] = { id: i, lastSeen: Date.now(), acknowledged: !1 };
        }
        return { lastSeenNewlyAddedEmojiIds: n };
      },
    ];
    initialize(e) {
      v = e ?? D;
    }
    getState() {
      return v;
    }
    getLastSeenEmojiByGuild(e) {
      return v.lastSeenNewlyAddedEmojiIds[e];
    }
    isNewerThanLastSeen(e, t) {
      if (null == e || null == t) return !1;
      let n = this.getLastSeenEmojiByGuild(e);
      if (null == n || y.default.compare(t, n.id) > 0) return !0;
      {
        let e = R()(n.lastSeen);
        return R()().isBefore(e.add(2, "weeks")) && !n.acknowledged;
      }
    }
  }
  let U = new P(L.h, {
    LOGOUT: function () {
      ((v = D), (b = {}));
    },
    NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function (e) {
      let { guildId: t, emojiId: n } = e,
        i = b[t] ?? v.lastSeenNewlyAddedEmojiIds[t];
      null == i || 0 > y.default.compare(i.id, n)
        ? (b[t] = { id: n, lastSeen: Date.now(), acknowledged: !0 })
        : (b[t] = { ...i, acknowledged: !0 });
    },
    NEWLY_ADDED_EMOJI_SEEN_PENDING: function (e) {
      let { guildId: t, emojiId: n } = e,
        i = b[t] ?? v.lastSeenNewlyAddedEmojiIds[t];
      (null == i || 0 > y.default.compare(i.id, n)) &&
        (b[t] = { id: n, lastSeen: Date.now(), acknowledged: !1 });
    },
    NEWLY_ADDED_EMOJI_SEEN_UPDATED: M,
    CLEAR_CACHES: function () {
      ((v = D), M());
    },
    CONNECTION_CLOSED: M,
  });
  var w = n(451731),
    G = n(850992),
    x = n(151271),
    k = n(60587),
    F = n(887695),
    B = n(562708),
    V = n(462887),
    H = n(939249),
    j = n(789645),
    W = n(696986),
    Y = n(297264),
    K = n(834730),
    $ = n(736653),
    z = n(139286),
    X = n(976860),
    Z = n(71393),
    q = n(384684),
    Q = n(985242),
    J = n(652215),
    ee = n(746080),
    et = n(660183),
    en = n(196404);
  function ei(e) {
    let t,
      { onClose: i, guildId: r, emojiId: s } = e,
      l = ((t = (0, $.Ay)()), (0, V.q)(t) ? n(454333) : n(674463)),
      { analyticsLocations: o } = (0, S.Ay)(m.A.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
    (0, z.A)({
      type: B.ImpressionTypes.MODAL,
      name: B.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
      properties: { location_stack: o, emoji_guild_id: r, emoji_id: s ?? null },
    });
    let d = (0, _.bG)([Z.A], () => Z.A.getGuild(r)),
      c = (0, _.bG)([q.A], () => null != r && q.A.getUserSubscriptionRoles(r).size > 0),
      u = c
        ? et.intl.string(et.t.GoLM9z)
        : et.intl.formatToPlainString(et.t["h0u/Hi"], { serverName: d?.name }),
      E = c ? et.intl.string(et.t.PjZ7Db) : et.intl.string(et.t.p8FG1D);
    return (0, a.jsxs)("div", {
      className: en.kL,
      children: [
        (0, a.jsx)("div", { className: en.Tp }),
        (0, a.jsxs)("div", {
          className: en.Qs,
          children: [
            (0, a.jsx)(H.D, {
              className: en.b,
              "aria-label": et.intl.string(et.t.cpT0Cq),
              onClick: i,
              children: (0, a.jsx)(j.P, {
                size: "xs",
                color: "currentColor",
                "aria-label": et.intl.string(et.t.cpT0Cq),
                className: en.yP,
              }),
            }),
            (0, a.jsx)("img", { alt: "", src: l, className: en.Tn }),
            (0, a.jsx)(W.h, { size: 22 }),
            (0, a.jsx)(Y.D, {
              color: "text-strong",
              variant: "heading-lg/extrabold",
              className: en.wx,
              children: et.intl.string(et.t.cBjkcx),
            }),
            (0, a.jsx)(W.h, { size: 4 }),
            (0, a.jsx)(K.E, {
              color: "text-default",
              variant: "text-md/normal",
              className: en.h_,
              children: u,
            }),
            (0, a.jsx)(W.h, { size: 24 }),
            (0, a.jsx)(Q.A, {
              text: E,
              onClick: function () {
                (0, X.pX)(J.BVt.CHANNEL(r, ee.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: o });
              },
            }),
          ],
        }),
      ],
    });
  }
  var er = n(450510),
    ea = n(885386),
    es = n(808728),
    el = n(287809),
    eo = n(174459),
    ed = n(474090),
    ec = n(240248),
    eu = n(822123),
    e_ = n(734057),
    eE = n(309010),
    eA = n(690521),
    eh = n(818645),
    ef = n(316884),
    eI = n(307731),
    ep = n(698279);
  function eT(e) {
    let { intention: t, containerWidth: n, rowSize: i, isBurstReaction: r, analyticsObject: a } = e,
      s = e_.A.getChannel(eE.Ay.getChannelId()),
      l = s?.getGuildId(),
      o =
        t === eI.EmojiIntention.REACTION
          ? C.Ay.emojiReactionFrecencyWithoutFetchingLatest.frequently.slice()
          : C.Ay.emojiFrecencyWithoutFetchingLatest.frequently.slice(),
      d =
        null != s
          ? C.Ay.getDisambiguatedEmojiContext(s.getGuildId()).favoriteEmojisWithoutFetchingLatest
          : [],
      c =
        t === eI.EmojiIntention.REACTION
          ? C.Ay.emojiReactionFrecencyWithoutFetchingLatest.numFrequentlyItems
          : C.Ay.emojiFrecencyWithoutFetchingLatest.numFrequentlyItems,
      u = o.slice(0, c),
      _ = null != l ? C.Ay.getGuildEmoji(l) : [],
      E = C.Ay.getDisambiguatedEmojiContext(s?.getGuildId()).getCustomEmoji(),
      { topEmojis: A, newlyAddedEmojis: h } = (0, ef.b)({
        guildId: s?.getGuildId(),
        pickerIntention: t,
      }),
      { visibleTopEmojis: f, visibleNewlyAddedEmojis: I } = (0, eh.W)({
        topEmojis: A,
        newlyAddedEmojis: h,
        rowSize: i,
      });
    g.Ay.trackWithMetadata(
      t === eI.EmojiIntention.REACTION
        ? J.HAw.REACTION_PICKER_OPENED
        : J.HAw.EXPRESSION_PICKER_OPENED,
      {
        width: n,
        tab: ep.kx.EMOJI,
        badged: !1,
        num_expressions_favorites: d.length,
        num_animated_expressions_favorites: d.filter((e) => e?.animated).length,
        num_custom_expressions_favorites: d.filter(eA.Ay.isCustomEmoji).length,
        num_standard_expressions_favorites: d.filter((e) => null == e.id).length,
        num_expressions_frecent: u.length,
        num_animated_expressions_frecent: u.filter((e) => e?.animated).length,
        num_custom_expressions_frecent: u.filter(eA.Ay.isCustomEmoji).length,
        num_standard_expressions_frecent: u.filter((e) => null == e.id).length,
        num_current_guild_expressions: _.length,
        num_custom_expressions_total: E.size,
        num_expressions_top_server: f.length,
        num_animated_expressions_top_server: f.filter((e) => e.animated).length,
        num_expressions_newly_added: I.length,
        num_animated_expressions_newly_added: I.filter((e) => e.animated).length,
        ...(t === eI.EmojiIntention.REACTION && { is_burst: r }),
        ...(null != a && { location_object: a }),
      },
    );
  }
  var em = n(206248),
    eg = n(403581),
    eS = n(724651),
    eN = n(732280),
    eC = n(783420),
    eO = n(158045),
    eR = n(202541);
  let eL = { object: J.ZSU.BUTTON_CTA, section: J.JJy.SUPER_REACTION_PICKER };
  function ey(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: i } = e,
      r = et.intl.string(et.t.eikz43),
      s = (0, eN.V)(),
      l = (0, eS.O)(),
      o = s?.subscriptionTrial,
      d = null != o || null != l,
      c = o?.skuId ?? eR.pe.TIER_2,
      u = d
        ? null != l
          ? et.intl.formatToPlainString(et.t.bkQ4bH, { percent: l.discount.amount })
          : (0, eO.FY)({ intervalType: o?.interval, intervalCount: o?.intervalCount })
        : et.intl.string(et.t.sEAnVH);
    return (0, a.jsx)(eC.A, {
      subscriptionTier: c,
      premiumModalAnalyticsLocation: eL,
      onSubscribeModalClose: (e) => {
        e && i();
      },
      children: (e) => {
        let { onClick: s } = e;
        return (0, a.jsx)(em.H, {
          targetElementRef: t,
          shouldShow: n,
          onRequestClose: i,
          position: "bottom",
          assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
          disableMediaViewer: !0,
          badge: d ? { type: "free_trial", variant: "expressive" } : void 0,
          title: et.intl.string(et.t.N4SCJ0),
          body: r,
          action: { text: u, variant: "expressive", icon: eg.t, onClick: s },
        });
      },
    });
  }
  var eD = n(435558),
    ev = n.n(eD),
    eb = n(837381),
    eM = n(460905),
    eP = n(775602),
    eU = n(713517),
    ew = n(866665),
    eG = n(499373),
    ex = n(938213),
    ek = n(938612);
  function eF(e) {
    let { onClick: t } = e,
      n = et.intl.string(ex.default["3D0GLv"]);
    return (0, a.jsx)("div", {
      className: ek.n,
      children: (0, a.jsx)(ew.m, {
        ariaHidden: !0,
        position: "right",
        text: n,
        children: (0, a.jsx)(H.D, {
          "aria-label": n,
          className: ek.x,
          onClick: t,
          children: (0, a.jsx)(eG.T, { size: "md", color: "currentColor" }),
        }),
      }),
    });
  }
  var eB = n(88218),
    eV = n(407698),
    eH = n(941971),
    ej = n(531685),
    eW = n(406810),
    eY = n(27232),
    eK = n(369606),
    e$ = n(413249),
    ez = n(141060),
    eX = n(687966),
    eZ = n(115979),
    eq = n(524501),
    eQ = n(926268),
    eJ = n(138134),
    e0 = n(7807),
    e1 = n(732139);
  let e2 = s.memo(function (e) {
    let { categoryId: t, ...n } = e,
      i = (function (e) {
        switch (e) {
          case e1.R2.RECENT:
            return eW.ClockIcon;
          case e1.R2.FAVORITES:
            return eY.StarIcon;
          case e1.R2.TOP_GUILD_EMOJI:
            return eK.TrophyIcon;
          case e1.R2.PEOPLE:
            return eM.n;
          case e1.R2.NATURE:
            return e$.p;
          case e1.R2.FOOD:
            return ez.i;
          case e1.R2.ACTIVITY:
            return eX.GameControllerIcon;
          case e1.R2.TRAVEL:
            return eZ.h;
          case e1.R2.OBJECTS:
            return eq.D;
          case e1.R2.SYMBOLS:
            return eQ.HeartIcon;
          case e1.R2.FLAGS:
            return eJ.FlagIcon;
          case e1.R2.PREMIUM_UPSELL:
            return eg.t;
          case e1.R2.SOUNDMOJI:
            return e0.J;
          default:
            return;
        }
      })(t);
    return null == i ? null : (0, a.jsx)(i, { color: "currentColor", ...n });
  });
  var e3 = n(724511),
    e6 = n(132500),
    e5 = n(770335),
    e4 = n(7584),
    e7 = n(526292),
    e8 = n(926972),
    e9 = n(711014),
    te =
      (((i = {})[(i.EMOJI = 0)] = "EMOJI"),
      (i[(i.EXPAND_OR_COLLAPSE_EMOJIS = 1)] = "EXPAND_OR_COLLAPSE_EMOJIS"),
      (i[(i.SOUNDMOJI = 2)] = "SOUNDMOJI"),
      i);
  let tt = [eI.EmojiDisabledReasons.DISALLOW_EXTERNAL, eI.EmojiDisabledReasons.DISALLOW_CUSTOM];
  var tn =
      (((r = {})[(r.PREMIUM = 0)] = "PREMIUM"),
      (r[(r.ROLE_SUBSCRIPTION = 1)] = "ROLE_SUBSCRIPTION"),
      r),
    ti = n(342379);
  let tr = "expression-guild-",
    { itemIdForIndex: ta } = (0, eB.J)(tr),
    ts = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
    tl = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
    to = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
    td = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
    tc = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
    tu = (0, ec.xI)(ti.__invalid_unicodeCategoryShortcutHeight),
    t_ = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
    tE = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
    tA = to + tl + 2 * tc,
    th = ts + tl,
    tf = th + (t_ + 2 * tE),
    tI = to + td + 2 * tc;
  function tp(e) {
    let {
        activeIndex: t,
        categoryIndex: n,
        analyticsContext: i,
        categories: r,
        category: l,
        handleCategorySelect: d,
        isWindowFocused: c,
        useReducedMotion: u,
      } = e,
      _ = s.useRef(null),
      { isHoveringOrFocusing: E } = (0, eU.A)(_),
      A = (0, eb.rm)(ta(n)),
      h = l.type === e1.s.GUILD ? null : l.id,
      f = t === n,
      I = l.type === e1.s.GUILD ? l.guild : null,
      p = (0, a.jsxs)(H.D, {
        innerRef: _,
        ...A,
        "aria-label": (0, eu.wt)(l, I),
        className: o()({
          [ti.ZG]: null != I,
          [ti.Bj]: null == I,
          [ti.s6]: null == I && f,
          [ti.xg]: l.type === e1.s.RECENT,
        }),
        onClick: () => {
          (null != I &&
            eo.default.track(J.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
              location: i?.location,
              tab: ep.kx.EMOJI,
              guild_id: I.id,
            }),
            d(n));
        },
        children: [
          (0, a.jsx)("div", {
            className: ti.a$,
            children: (0, a.jsx)(eH.A, { hovered: E, selected: f, size: "small" }),
          }),
          null != I
            ? (0, a.jsx)(e3.A, {
                guild: I,
                isSelected: f,
                shouldAnimate: !u && c,
                isLocked: l.isNitroLocked,
              })
            : null,
          null == I && null != h
            ? (0, a.jsx)(e2, {
                categoryId: h,
                className: ti.Yl,
                height: to,
                width: to,
                size: "custom",
              })
            : null,
        ],
      }),
      T = r[n + 1],
      m = null != T && l.type === e1.s.GUILD && T.type !== e1.s.GUILD;
    return null != I
      ? (0, a.jsxs)(s.Fragment, {
          children: [
            (0, a.jsx)(eV.Q, { guild: I, children: p }),
            m ? (0, a.jsx)("hr", { className: ti.ny }, "separator") : null,
          ],
        })
      : p;
  }
  let tT = (e) => {
    let {
        className: t,
        emojiListRef: n,
        sectionDescriptors: i,
        intention: r,
        channel: l,
        fallbackGuildId: d,
        shouldShowSoundmojiInEmojiPicker: c = !1,
        showOnlyUnicode: u = !1,
        canViewEmojiPacks: E = !1,
      } = e,
      A = G.Om.useStore((e) => e.activeCategoryIndex),
      h = (function (e) {
        let { emojiListRef: t } = e,
          n = (0, x.RQ)((e) => e.searchQuery),
          i = s.useCallback((e) => t.current?.scrollToSectionTop(e), [t]);
        return s.useCallback(
          (e) => {
            "" !== n ? ((0, x.Ri)(""), G.Om.setActiveCategoryIndex(e)) : i(e);
          },
          [i, n],
        );
      })({ sectionDescriptors: i, emojiListRef: n }),
      f = (0, p.p)(),
      I = (0, eu.ss)(r, l, { guildId: l?.guild_id ?? d, shouldShowSoundmojiInEmojiPicker: c }),
      T = s.useMemo(() => (u ? (0, eu.CQ)() : I), [I, u]),
      m = s.useRef(null),
      g = (0, _.bG)([ej.A], () => ej.A.isFocused()),
      S = (0, _.bG)([eP.Ay], () => eP.Ay.useReducedMotion, []),
      N = s.useMemo(
        () =>
          ev().memoize(
            (e, t) => {
              let n = T[t];
              if (null != n)
                return (0, a.jsx)(
                  tp,
                  {
                    activeIndex: A,
                    analyticsContext: f,
                    categories: T,
                    category: n,
                    categoryIndex: t,
                    handleCategorySelect: h,
                    isWindowFocused: g,
                    useReducedMotion: S,
                  },
                  t,
                );
            },
            (e, t) => t,
          ),
        [A, f, T, h, g, S],
      ),
      C = s.useMemo(() => [8, 8, 0, 8], []),
      O = s.useCallback(
        (e, t) => {
          let n = T[t];
          if (n.type === e1.s.RECENT) return tA;
          if (n.type === e1.s.GUILD) {
            let e = T[t + 1];
            return null != e && e.type !== e1.s.GUILD ? tf : th;
          }
          return tI;
        },
        [T],
      ),
      {
        nonUnicodeCategoryCount: R,
        firstUnicodeCategoryIndex: L,
        firstUnicodeCategoryOffsetTop: y,
        rowCountBySection: D,
      } = s.useMemo(() => {
        let e = 0,
          t = 0,
          n = 0,
          i = 0;
        T.forEach((r) => {
          r.type === e1.s.GUILD
            ? ((t += 1), (n += 1))
            : r.type === e1.s.UNICODE
              ? (i += 1)
              : ((e += 1), (t += 1));
        });
        let r = tA + t * th + tf;
        return {
          nonUnicodeCategoryCount: t,
          firstUnicodeCategoryIndex: t,
          firstUnicodeCategoryOffsetTop: r,
          rowCountBySection: [e, n, i],
        };
      }, [T]),
      [v, b] = s.useState(!0);
    s.useLayoutEffect(() => {
      b(R >= 7);
    }, [R]);
    let M = s.useCallback(
        (e) => {
          let t = m.current?.getListDimensions();
          null == t || (e + t.height - t_ >= y ? b(!1) : b(!0));
        },
        [y],
      ),
      P = s.useCallback(
        (e) => {
          (e(L), m.current?.scrollTo(y));
        },
        [y, L],
      ),
      U = s.useCallback(
        (e, t) => {
          let n = T[e];
          if (null == n) return 0;
          let i = v ? tu : 0;
          if (n.type === e1.s.RECENT) return t ? 0 : td;
          if (n.type === e1.s.GUILD) {
            let n = T[e + 1];
            return null != n && n.type !== e1.s.GUILD
              ? t
                ? t_ + -2 * tE + tl + i
                : tl
              : t
                ? i
                : tl;
          }
          return t ? tl + i : 2 * tl;
        },
        [T, v],
      ),
      w = s.useMemo(
        () =>
          function (e, t) {
            return (0, a.jsx)(s.Fragment, { children: t }, e);
          },
        [],
      ),
      k = v ? "shortcut" : "hiddenshortcut";
    return (0, a.jsx)(eB.A, {
      categoryListRef: m,
      expressionsListRef: n,
      className: t,
      store: G.Om,
      categories: T,
      listPadding: C,
      onScroll: M,
      renderCategoryListItem: N,
      renderSection: w,
      rowCount: T.length,
      categoryHeight: O,
      getScrollOffsetForIndex: U,
      rowCountBySection: D,
      navId: "emoji-picker-categories",
      itemIdPrefix: tr,
      emojiPacksHeader: E ? (0, a.jsx)(eF, {}) : null,
      children: (e) =>
        R >= 7 &&
        (0, a.jsx)(
          H.D,
          {
            "aria-hidden": !v,
            "aria-label": et.intl.string(et.t.dT0ctw),
            className: o()(ti.KB, { [ti.h_]: !v }),
            tabIndex: v ? 0 : -1,
            onClick: () => P(e),
            children: (0, a.jsx)(eM.n, {
              size: "custom",
              color: "currentColor",
              height: to,
              width: to,
            }),
          },
          k,
        ),
    });
  };
  var tm = n(49999),
    tg = n(860197);
  let tS = function (e) {
    let { markAsDismissed: t } = e;
    return (0, a.jsxs)(K.E, {
      variant: "text-xs/medium",
      color: "text-default",
      className: tg.iE,
      children: [
        (0, a.jsx)(eQ.HeartIcon, { size: "md", color: "currentColor", className: tg.Kk }),
        (0, a.jsx)("div", {
          className: tg.Qs,
          children: (0, a.jsx)(K.E, {
            variant: "text-xs/normal",
            children: et.intl.string(et.t.xdRf69),
          }),
        }),
        (0, a.jsx)(H.D, {
          onClick: () => t(tm.i.UNKNOWN),
          children: (0, a.jsx)(j.P, { size: "md", color: "currentColor", className: tg.VN }),
        }),
      ],
    });
  };
  var tN = n(202091),
    tC = n(717421),
    tO = n(343032),
    tR = n(683063),
    tL = n(131607),
    ty = n(748798);
  let tD = { tension: 750, mass: 2.5, friction: 70 };
  function tv(e) {
    let { checked: t, onClick: n, buttonRef: i } = e,
      r = (0, _.bG)([eP.Ay], () => eP.Ay.useReducedMotion),
      l = el.default.getCurrentUser(),
      d = null != l && !(0, eO.TW)(l),
      c = d ? [] : [E.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
      [u, A] = (0, tL.kn)(c),
      [h, f] = s.useState(!1),
      [I, p] = (0, tC.z)(() => ({})),
      T = (0, tN.animated)(tO.i);
    s.useEffect(() => {
      let e = u === E.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
      e && (A(tm.i.DISMISS), setTimeout(() => f(e), 200));
    }, [u, A]);
    let m = h
        ? et.intl.string(et.t["Osi/uy"])
        : t && !d
          ? et.intl.string(et.t["5cRA/b"])
          : et.intl.string(et.t.buV4av),
      g = h ? et.intl.string(et.t.ORK94p) : void 0;
    return (0, a.jsx)(tR.u, {
      position: "top",
      title: g,
      body: m,
      asset: (0, a.jsx)(eg.t, { size: "md", color: "currentColor" }),
      assetSize: 20,
      forceOpen: h,
      children: (0, a.jsx)(H.D, {
        innerRef: i,
        "aria-label": m,
        "aria-pressed": t,
        onClick: function () {
          (p({
            from: { rotate: t ? "360deg" : "0deg" },
            to: { rotate: t ? "0deg" : "360deg" },
            config: tD,
          }),
            n?.(),
            f(!1));
        },
        focusProps: { enabled: !1 },
        className: o()(ty.Pf, { [ty.wM]: t }),
        children: (0, a.jsx)(T, {
          style: r ? void 0 : I,
          size: "custom",
          width: 20,
          height: 20,
          color: t ? "white" : "currentColor",
          className: ty.Kk,
        }),
      }),
    });
  }
  var tb = n(821609),
    tM = n(644508),
    tP = n(824832),
    tU = n(267102),
    tw = n(242812);
  function tG(e) {
    let { channel: t, closePopout: n } = e,
      i = s.useRef(null),
      r = s.useRef(0),
      [l, o] = s.useState(!1),
      [d, c] = s.useState(!1),
      u = (0, tU.Us)() === J.BRT.OVERLAY,
      _ = d || l,
      E = s.useCallback(
        async (e, i, a) => {
          (c(!0),
            n(),
            await (0, tM.f)({
              userImage: { data: e, file: i, image: a },
              guildId: t?.guild_id ?? null,
              analyticsLocation: {
                section: J.JJy.EXPRESSION_PICKER,
                page: t?.guild_id != null ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
              },
            }),
            (r.current += 1),
            c(!1));
        },
        [t, n],
      );
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(ew.m, {
          asContainer: !0,
          text: u ? et.intl.string(et.t.RMbedC) : null,
          children: (0, a.jsx)(tb.$, {
            text: et.intl.string(et.t.iMJO37),
            variant: "secondary",
            onClick: function () {
              i.current?.activateUploadDialogue();
            },
            disabled: _ || u,
          }),
        }),
        (0, a.jsx)("div", {
          className: tw.F,
          children: (0, a.jsx)(
            tP.Ay,
            { ref: i, onChange: E, setLoading: o, disabled: _ },
            r.current,
          ),
        }),
      ],
    });
  }
  n(667532);
  var tx = n(833272),
    tk = n(82495),
    tF = n(260762),
    tB = n(915089),
    tV = n(650583),
    tH = n(683829);
  let tj = (0, tB.Ld)(),
    tW = tx.A.convert.fromCodePoint("1f44f"),
    tY = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
  function tK(e) {
    switch (tx.A.convert.toCodePoint(e)) {
      case "1f3fb":
        return et.intl.string(et.t["BVK5b/"]);
      case "1f3fc":
        return et.intl.string(et.t.xJWOK8);
      case "1f3fd":
        return et.intl.string(et.t["MB+T5g"]);
      case "1f3fe":
        return et.intl.string(et.t.MODud2);
      case "1f3ff":
        return et.intl.string(et.t["0uzqsc"]);
      default:
        return et.intl.string(et.t.bGN1ow);
    }
  }
  let t$ = (e) => {
    let { fade: t, surrogate: n, onClick: i, delay: r, index: s } = e,
      l = (0, eb.rm)(`item-${s}`),
      o = eA.Ay.getURL(tW + n),
      d = (0, tC.z)({ opacity: 1, from: { opacity: +!t }, delay: r }, "animate-always");
    return (0, a.jsx)(H.D, {
      ...l,
      role: "option",
      "aria-selected": 0 === s,
      onClick: () => i(n),
      className: tH.B6,
      children: (0, a.jsx)(tN.animated.div, {
        "aria-label": tK(n),
        className: tH.g4,
        style: { backgroundImage: `url("${o}")`, ...d },
      }),
    });
  };
  function tz(e) {
    let { id: t, selectedSurrogate: n, onClick: i } = e,
      r = (0, tF.A)("diversity"),
      l = (0, tC.z)({
        height: (tY + 14) * (e4.W$.length + 1),
        from: { height: tY + 14 },
        config: { duration: 125 },
      }),
      o = s.useRef(r);
    s.useEffect(() => {
      o.current.focusFirstVisibleItem();
    }, []);
    let d = ["", ...e4.W$];
    return (
      ev().remove(d, (e) => e === n),
      d.unshift(n),
      (0, a.jsx)(eb.hD, {
        navigator: r,
        children: (0, a.jsx)(eb.PR, {
          children: (e) => {
            let { ref: n, ...r } = e;
            return (0, a.jsx)(tN.animated.div, {
              ...r,
              id: t,
              ref: n,
              className: tH.J6,
              style: l,
              role: "listbox",
              children: d.map((e, t) =>
                (0, a.jsx)(
                  t$,
                  { index: t, fade: 0 !== t, delay: 20 * t, surrogate: e, onClick: i },
                  t,
                ),
              ),
            });
          },
        }),
      })
    );
  }
  let tX = function (e) {
    let { searchBarRef: t, selectedSurrogate: n, className: i } = e,
      r = eA.Ay.getURL(tW + n),
      [l, d] = s.useState(!1),
      c = (0, tk.A)(null, () => d(!1)),
      u = s.useRef(null);
    return (0, a.jsxs)("div", {
      ref: c,
      className: o()(tH.fx, i),
      children: [
        (0, a.jsx)(H.D, {
          innerRef: u,
          className: tH.Dj,
          onClick: function () {
            d(!0);
          },
          "aria-label": et.intl.formatToPlainString(et.t["2SfnMp"], { skinTone: tK(n) }),
          "aria-haspopup": !0,
          "aria-expanded": l,
          "aria-controls": tj,
          tabIndex: l ? -1 : 0,
          children: (0, a.jsx)("div", {
            className: tH.g4,
            style: { backgroundImage: `url("${r}")` },
          }),
        }),
        l
          ? (0, a.jsx)("div", {
              onKeyDown: function (e) {
                e.key === tV.dh.ESCAPE
                  ? (e.stopPropagation(), d(!1), null != u.current && u.current.focus())
                  : "Tab" === e.key && d(!1);
              },
              children: (0, a.jsx)(tz, {
                id: tj,
                selectedSurrogate: n,
                onClick: function (e) {
                  ((0, f.dK)(e), d(!1), t.current?.focus());
                },
              }),
            })
          : null,
      ],
    });
  };
  var tZ = n(462180),
    tq = n(602034),
    tQ = n(683438);
  let tJ = s.memo(function (e) {
    let {
        emojiListRef: t,
        gridNavigatorId: n,
        onKeyDown: i,
        onFocus: r,
        autoFocus: l,
        defaultSearchPlaceholder: o,
        ref: d,
      } = e,
      c = s.useRef(null),
      u = (0, x.RQ)((e) => e.searchQuery),
      [_, E, A] = G.Om.useStore(
        (e) => [e.inspectedExpressionPosition, e.searchPlaceholder, e.hasInteracted],
        tZ.x,
      ),
      h = s.useCallback(
        (e) => {
          (G.Om.setActiveCategoryIndex("" === e ? 0 : -1),
            G.Om.setInspectedExpressionPosition(0, 0),
            G.Om.setSearchPlaceholder(null),
            (0, x.Ri)(e),
            t.current?.scrollTo(0));
        },
        [t],
      ),
      f = s.useCallback(() => {
        h("");
      }, [h]);
    return (
      s.useImperativeHandle(d, () => ({ focus: () => c.current?.focus() })),
      (0, a.jsx)(tQ.I, {
        autoFocus: l,
        query: u,
        ref: c,
        placeholder: E ?? o,
        onClear: f,
        onKeyDown: function (e) {
          switch (e.key) {
            case tV.dh.ARROW_LEFT:
            case tV.dh.ARROW_RIGHT:
            case tV.dh.ARROW_UP:
            case tV.dh.ARROW_DOWN:
              document.activeElement !== e.target && e.preventDefault();
          }
          i(e);
        },
        onFocus: r,
        onChange: h,
        inputProps: {
          role: "combobox",
          "aria-label": et.intl.string(et.t.tCauZX),
          "aria-haspopup": "grid",
          "aria-autocomplete": "list",
          "aria-controls": n,
          "aria-expanded": !0,
          ...(A ? { "aria-activedescendant": (0, tq.Aq)(n, _.columnIndex, _.rowIndex) } : void 0),
        },
      })
    );
  });
  var t0 = n(381575);
  let t1 = function (e) {
    let {
        channel: t,
        accessory: n,
        pickerIntention: i,
        headerClassName: r,
        emojiListRef: s,
        onKeyDown: l,
        onFocus: d,
        autoFocus: c,
        searchBarRef: u,
        diversitySurrogate: _,
        isBurstReaction: E,
        onBurstReactionToggle: A,
        burstToggleRef: h,
        renderHeader: f,
        showAddEmojiButton: I = !0,
        closePopout: p,
      } = e,
      T = (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsx)(tJ, {
            emojiListRef: s,
            gridNavigatorId: e1.lq,
            onKeyDown: l,
            ref: u,
            onFocus: d,
            autoFocus: c,
            defaultSearchPlaceholder: (0, eu.wT)(i, E),
          }),
          i === eI.EmojiIntention.REACTION
            ? (0, a.jsx)(tv, { checked: E, onClick: A, buttonRef: h })
            : null,
          n ?? (0, a.jsx)(tX, { searchBarRef: u, className: t0.fx, selectedSurrogate: _ }),
          i !== eI.EmojiIntention.NO_CUSTOM_EMOJI && I
            ? (0, a.jsx)(tG, { channel: t, closePopout: p })
            : null,
        ],
      });
    return (0, a.jsx)("div", { className: o()(t0.wx, r), children: null != f ? f(T) : T });
  };
  var t2 = n(182922),
    t3 = n(363195),
    t6 = n(486020),
    t5 = n(977566);
  function t4(e) {
    return null != e && "animated" in e;
  }
  let t7 = s.memo(function (e) {
    let t,
      i,
      { className: r, emojiGrid: l, guildId: o, pickerIntention: d, channel: c } = e,
      u = G.Om.useStore((e) => e.inspectedExpressionPosition),
      E = s.useMemo(() => {
        let { rowIndex: e, columnIndex: t } = u;
        return l[e]?.[t];
      }, [l, u]);
    switch (E?.type) {
      case te.EMOJI:
        t = E?.emoji;
        break;
      case te.EXPAND_OR_COLLAPSE_EMOJIS:
        t = { type: "EXPAND_OR_COLLAPSE_EMOJI", guildId: E?.guildId, allNamesString: E?.name };
        break;
      case te.SOUNDMOJI:
      default:
        t = null;
    }
    let A = (0, _.bG)(
        [Z.A],
        () => (null !== t && t.type === e5.i.GUILD ? Z.A.getGuild(t.guildId) : null),
        [t],
      ),
      h = (0, _.bG)([ej.A], () => ej.A.isFocused()),
      f = (0, _.bG)([eP.Ay], () => eP.Ay.useReducedMotion, []),
      I = ea.Sf.useSetting(),
      p = (0, eu.O7)(o, t4(t) ? t : null),
      T = (0, _.bG)([C.Ay], () => C.Ay.expandedSectionsByGuildIds),
      { newlyAddedEmojis: m } = (0, ef.A)(o, d),
      g = E?.type === te.EMOJI ? E.subCategory : e1.tm.NONE;
    if (
      (s.useEffect(() => {
        let e = Date.now();
        return () => {
          Date.now() - e >= 250 &&
            t4(t) &&
            g !== e1.tm.NONE &&
            (g === e1.tm.NEWLY_ADDED_EMOJI &&
              null !== t &&
              t.type === e5.i.GUILD &&
              (0, w.mz)(t.guildId, m[0].id),
            null != u.source &&
              (0, eu.yB)({
                emoji: t,
                subCategory: g,
                position: E.columnIndex + 1,
                newlyAddedHighlight:
                  g === e1.tm.NEWLY_ADDED_EMOJI && U.isNewerThanLastSeen(o, t.id),
              }));
        };
      }),
      null == t)
    )
      return null;
    let S = (function (e, t) {
        let { allowAnimatedEmoji: i, sectionsExpandedFromThreeRows: r, theme: s } = t;
        if (t4(e)) {
          let t =
            null != e.id
              ? t6.Ay.getEmojiURL({ id: e.id, animated: i && e.animated, size: 28 })
              : e.url;
          return "" === t
            ? (0, a.jsx)(K.E, {
                variant: "text-md/normal",
                className: t5.J_,
                children: "surrogates" in e ? e.surrogates : null,
              })
            : (0, a.jsx)("img", { alt: (0, eA.N)(e) ?? "", src: t, className: t5.Zg });
        }
        if ("EXPAND_OR_COLLAPSE_EMOJI" !== e.type) return null;
        {
          let t = n(619508),
            i = n(404828),
            l = n(600003),
            o = n(318121);
          return r.has(e.guildId)
            ? (0, a.jsx)("img", { className: t5.Kk, src: (0, V.M)(s) ? l : o, alt: "" })
            : (0, a.jsx)("img", { className: t5.Kk, src: (0, V.M)(s) ? t : i, alt: "" });
        }
      })(t, { allowAnimatedEmoji: I, sectionsExpandedFromThreeRows: T, theme: t3.A.theme }),
      N =
        null != A
          ? (0, a.jsx)(e3.A, {
              className: t5.__invalid_guildIcon,
              guild: A,
              shouldAnimate: !f && h,
            })
          : null;
    i =
      "EXPAND_OR_COLLAPSE_EMOJI" === t.type
        ? T.has(t.guildId)
          ? et.intl.string(et.t["/K2RDH"])
          : et.intl.string(et.t.NZI2Zk)
        : (0, eA.N)(t);
    let O = (function (e) {
      let { inspectedEmoji: t, guild: n } = e,
        i = t4(t);
      return null != n && i ? et.intl.format(et.t.KFW2aY, { guildName: n.name }) : null;
    })({ inspectedEmoji: t, channel: c, guildId: o, intention: d, guild: A });
    return (0, a.jsx)(t2.A, {
      className: r,
      graphicPrimary: S,
      graphicSecondary: N,
      titlePrimary: i,
      titleSecondary: O,
      isFavorite: p,
      emojiSubCategory: g,
    });
  });
  n(30146);
  var t8 = n(607399),
    t9 = n(765178),
    ne = n(537652),
    nt = n(962125),
    nn = n(240864),
    ni = n(286509),
    nr = n(89366),
    na = n(10392),
    ns = n(82498),
    nl = n(202639),
    no = n(414872),
    nd = n(285373),
    nc = n(559106),
    nu = n(304072),
    n_ = n(189551),
    nE = n(289873),
    nA = n(796774),
    nh = n(209932),
    nf = n(817232),
    nI = n(576705);
  n(980504);
  var np = n(818348),
    nT = n(821425);
  let nm = s.memo(function (e) {
    let t,
      n,
      i,
      r,
      { channelId: l, onSelectSoundmoji: o } = e,
      d = (0, _.bG)([nh.A], () => !nh.A.isFetching() && !nh.A.hasFetchedAllSounds(), []),
      c = (0, _.bG)([e_.A], () => e_.A.getChannel(l)),
      u =
        ((t = (0, _.bG)([el.default], () =>
          eO.Ay.canUseSoundboardEverywhere(el.default.getCurrentUser()),
        )),
        (n = (0, _.bG)([nh.A], () => nh.A.getSoundsForGuild("0"))),
        (i = (0, _.yK)([Z.A], () => Z.A.getGuildIds())),
        (r = s.useMemo(() => nI.A.can(np.xB.USE_EXTERNAL_SOUNDS, c), [c])),
        s.useMemo(() => {
          let e = [];
          if (t && r) {
            let t = i.flatMap((e) => nh.A.getSoundsForGuild(e)?.filter((e) => e.available) ?? []);
            e.push(...ev().sampleSize(t, 4));
          } else if (c?.guild_id != null) {
            let t = nh.A.getSoundsForGuild(c?.guild_id)?.filter((e) => e.available);
            e.push(...ev().sampleSize(t, 4));
          }
          return (e.length < 4 && e.push(...ev().sampleSize(n ?? [], 4 - e.length)), e);
        }, [r, c?.guild_id, n, i, t]));
    return (s.useEffect(() => {
      (0, nA.E7)();
    }, [d]),
    0 === u.length)
      ? (0, a.jsx)(nE.y, {})
      : (0, a.jsx)("div", {
          className: nT.q,
          children: u.map((e, t) =>
            (0, a.jsx)(
              nf.Ay,
              {
                suppressPlaySound: !0,
                enableSecondaryActions: !0,
                isSoundmoji: !0,
                sound: e,
                channel: c,
                onSelectItem: (t) => o?.(e, !t.shiftKey),
              },
              t,
            ),
          ),
        });
  });
  var ng = n(594061),
    nS = n(771104),
    nN = n(442433),
    nC = n(147421),
    nO = n(723702),
    nR = n(140735),
    nL = n(194261),
    ny = n(703413);
  let nD = (e) => {
    let { src: t, alt: n, size: i, "aria-label": r, className: l } = e,
      d = s.useRef(null),
      c = s.useRef(!1),
      u = c.current ? ny.S : ny.Y;
    return (0, a.jsx)("img", {
      className: o()(u, l),
      alt: n,
      src: t,
      ref: d,
      "aria-label": r,
      style: { backgroundSize: i, height: i, width: i },
      onLoad: c.current
        ? void 0
        : (e) => {
            (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
              null != d.current &&
                ((c.current = !0), d.current.classList.remove(ny.Y), d.current.classList.add(ny.S));
            });
          },
    });
  };
  var nv = n(955388);
  let nb = ev().memoize(
      (e) =>
        `${e * eI.EmojiSprites.NonDiversityPerRow}px ${e * Math.ceil(e4.Ay.numNonDiversitySprites / eI.EmojiSprites.NonDiversityPerRow)}px`,
    ),
    nM = ev().memoize(
      (e) =>
        `${e * eI.EmojiSprites.DiversityPerRow}px ${e * Math.ceil(e4.Ay.numDiversitySprites / eI.EmojiSprites.DiversityPerRow)}px`,
    ),
    nP = s.memo(function (e) {
      let {
          emoji: t,
          size: i,
          surrogateCodePoint: r,
          allowAnimatedEmoji: l,
          "aria-label": d,
          isLocked: c,
        } = e,
        u = (() => {
          if (!t.useSpriteSheet) {
            let e =
              null == t.id
                ? t.url
                : t6.Ay.getEmojiURL({
                    id: t.id,
                    animated: l && t.animated,
                    size: eI.EMOJI_URL_BASE_SIZE,
                  });
            return null != e
              ? (0, a.jsx)(nD, {
                  className: nv.N1,
                  "aria-label": d,
                  src: e,
                  size: i,
                  alt: (0, eA.N)(t) ?? "",
                })
              : null;
          }
          return (0, a.jsx)("div", {
            className: o()(nv.xA, { [nv.N1]: c }),
            style: (function (e, t, i) {
              let r, a, s;
              if (!e.useSpriteSheet) return;
              let l = null != e.index ? e.index : 0;
              e.hasDiversity
                ? ((r = n(12303)(`./spritesheet-${t}-${i}.png.js`).default),
                  (a = nM(i)),
                  (s = eI.EmojiSprites.DiversityPerRow))
                : ((r = n(145519)(`./spritesheet-emoji-${i}.png.js`).default),
                  (a = nb(i)),
                  (s = eI.EmojiSprites.NonDiversityPerRow));
              let o = (-l % s) * i,
                d = -Math.floor(l / s) * i;
              return {
                backgroundImage: `url('${r}')`,
                backgroundPosition: `${o}px ${d}px`,
                backgroundSize: a,
                height: i,
                width: i,
              };
            })(t, r, i),
            children: (0, a.jsx)(nR.A, { children: d }),
          });
        })();
      return (0, a.jsxs)(s.Fragment, {
        children: [
          u,
          c
            ? (0, a.jsx)("div", {
                className: nv.iD,
                children: (0, a.jsx)(nL.LockIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: nv.fi,
                }),
              })
            : null,
        ],
      });
    });
  var nU = n(537911);
  function nw(e) {
    let t,
      {
        emoji: n,
        isFavorite: i,
        isLargeSize: r,
        isMediumSize: s,
        isInspected: l,
        isDisabled: d,
        showPulse: c,
        columnIndex: u,
        rowIndex: E,
        size: A,
        surrogateCodePoint: h,
        allowAnimatedEmoji: f,
        selectedItemClassName: I,
        inNitroLockedSection: p,
        ref: T,
        ...m
      } = e,
      g = (0, _.bG)([Z.A], () => (n.type === e5.i.GUILD ? Z.A.getGuild(n.guildId) : void 0), [n]);
    return (0, a.jsx)(nc.vN, {
      children: (0, a.jsx)("button", {
        ...m,
        className: o()(nU._X, { [nU.lG]: r, [nU.Lh]: s, [nU.Bx]: l, [I ?? ""]: l, [nU.TV]: c }),
        "data-type": k.g.EMOJI,
        "data-id": n.id,
        "data-name": n.name,
        "data-surrogates": "surrogates" in n ? n.surrogates : null,
        "data-animated": n.animated ? "true" : null,
        ref: T,
        children: (0, a.jsx)(nP, {
          "aria-label":
            ((t = (0, eA.N)(n)),
            (g?.name != null &&
              (t = et.intl.formatToPlainString(et.t["nXv4/B"], { names: t, guildName: g.name })),
            i)
              ? et.intl.formatToPlainString(et.t["9FI9Z0"], { names: t })
              : t),
          columnIndex: u,
          rowIndex: E,
          emoji: n,
          size: A,
          surrogateCodePoint: h,
          allowAnimatedEmoji: f,
          isLocked: d && !p,
        }),
      }),
    });
  }
  function nG(e) {
    let {
        descriptor: t,
        emojiItemKey: i,
        isInspected: r,
        rowIndex: l,
        channelGuildId: o,
        onInspect: d,
        onSelect: c,
        isScrolling: u,
        isUsingKeyboardNavigation: E,
        showEmojiFavoriteTooltip: A,
        surrogateCodePoint: h,
        selectedItemClassName: f,
        getEmojiItemProps: I,
        isMediumSize: p,
        isLargeSize: T,
        pulseItemKey: m,
        allowAnimatedEmoji: g,
        setPulseItemKey: S,
        messageId: N,
        isBurstReaction: O,
        rowPosition: R,
        inNitroLockedSection: L,
      } = e,
      [y, D] = s.useState(""),
      v = (0, _.bG)([eP.Ay], () => eP.Ay.useReducedMotion),
      b = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(o), [o]),
      M = s.useRef(null),
      { emoji: P, size: U, isDisabled: w, columnIndex: G } = t;
    function x() {
      u.current || E.current || d(t);
    }
    let { ref: k, tabIndex: F, onFocus: B, ...V } = I(G, l) ?? {},
      H =
        y !== `${G}:${l}`
          ? (0, a.jsx)(nw, {
              ref: k,
              emoji: P,
              isFavorite: b.isFavoriteEmojiWithoutFetchingLatest(P),
              isLargeSize: T,
              isMediumSize: p,
              isInspected: r,
              isDisabled: w,
              showPulse: m === i,
              allowAnimatedEmoji: g,
              onFocus: B ?? x,
              onMouseMove: x,
              onClick: (e) => {
                if (
                  null != M.current &&
                  null != R &&
                  null != N &&
                  !e.shiftKey &&
                  null != P.name &&
                  O &&
                  !v &&
                  g
                ) {
                  let e = null == P.id ? e4.Ay.convertNameToSurrogate(P.name) : P.name,
                    t = M.current.getBoundingClientRect();
                  ((t.x = R.x + (G + 1) * U), D(`${G}:${l}`), (0, nC.h)(N, e, P.id, t));
                }
                !(function (e) {
                  if ((e.stopPropagation(), u.current || E.current)) return;
                  let n = e.altKey;
                  (n &&
                    !C.Ay.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(P) &&
                    S(i),
                    (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP),
                    c(t, { isFinalSelection: !e.shiftKey, toggleFavorite: n }));
                })(e);
              },
              onContextMenu: function (e) {
                (0, nN.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                    n.e("638221"),
                    n.e("73500"),
                    n.e("377766"),
                    n.e("496715"),
                    n.e("293697"),
                    n.e("904774"),
                    n.e("446132"),
                  ]).then(n.bind(n, 233503));
                  return (t) => (0, a.jsx)(e, { ...t });
                });
              },
              tabIndex: F,
              columnIndex: G,
              rowIndex: l,
              size: U,
              surrogateCodePoint: h,
              selectedItemClassName: f,
              inNitroLockedSection: L,
            })
          : null;
    return (0, s.createElement)(
      "li",
      { ...V, key: i, ref: M },
      A
        ? (0, a.jsx)(ew.m, {
            text: et.intl.formatToPlainString(et.t.glqNsf, {
              key: (0, nO.isMac)() ? "Opt" : "Alt",
            }),
            position: "top",
            delay: 200,
            children: H,
          })
        : H,
    );
  }
  let nx = (e) => {
    let {
        emojiDescriptors: t,
        emojiSize: i,
        onSelect: r,
        onSelectSoundmoji: l,
        onInspect: d,
        surrogateCodePoint: c,
        getEmojiItemProps: u,
        getEmojiRowProps: _,
        isScrolling: E,
        isUsingKeyboardNavigation: A,
        rowIndex: h,
        allowAnimatedEmoji: f,
        showEmojiFavoriteTooltip: I,
        channelGuildId: p,
        category: T,
        selectedItemClassName: m,
        channelId: g,
        messageId: S,
        isBurstReaction: N,
        inNitroLockedSection: C,
        handleScrollUpOnSectionCollapse: O,
      } = e,
      R = n(619508),
      L = n(404828),
      y = n(600003),
      D = n(318121),
      v = n(443336),
      b = n(258901),
      M = n(135974),
      P = n(8013),
      w = (0, $.Ay)(),
      x = G.Om.getState(),
      [k, F] = s.useState(x.inspectedExpressionPosition),
      [B, H] = (0, nu.A)(null, 300),
      j = s.useRef(null);
    (s.useEffect(
      () =>
        G.Om.subscribe(
          (e) => e.inspectedExpressionPosition,
          (e) => F(e),
        ),
      [],
    ),
      s.useEffect(() => {
        ng.bW.loadIfNecessary();
      }, []));
    let W = i === e1.as.LARGE,
      Y = i === e1.as.MEDIUM;
    function z(e) {
      let t = `${e.rowIndex}c${e.columnIndex}`;
      switch (e.type) {
        case te.EXPAND_OR_COLLAPSE_EMOJIS: {
          let { visibleRowIndex: n, columnIndex: i } = e,
            l = k.rowIndex === n && k.columnIndex === i,
            c = e.sectionCollapsedToThreeRows
              ? l
                ? (0, V.M)(w)
                  ? b
                  : P
                : (0, V.M)(w)
                  ? R
                  : L
              : l
                ? (0, V.M)(w)
                  ? v
                  : M
                : (0, V.M)(w)
                  ? y
                  : D,
            _ = et.intl.string(e.sectionCollapsedToThreeRows ? et.t.NZI2Zk : et.t["/K2RDH"]);
          return (function () {
            let {
                onMouseEnter: n,
                onMouseLeave: i,
                handleSelect: r,
                icon: l,
                ariaLabel: c,
                shouldShowRoundHighlight: _,
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              { visibleRowIndex: f, columnIndex: I } = e,
              { ref: p, tabIndex: T, onFocus: g, ...S } = u(I, h) ?? {},
              N = k.rowIndex === f && k.columnIndex === I;
            function C() {
              E.current || A.current || d(e);
            }
            return (0, s.createElement)(
              "li",
              { ...S, key: t },
              (0, a.jsx)(nc.vN, {
                children: (0, a.jsx)("button", {
                  "aria-label": c,
                  ref: p,
                  className: o()(nU._X, {
                    [nU.lG]: W,
                    [nU.Lh]: Y,
                    [nU.Bx]: N && !_,
                    [m ?? ""]: N,
                    [nU.TV]: B === t,
                  }),
                  onFocus: g ?? C,
                  onMouseOver: C,
                  onMouseEnter: n,
                  onMouseLeave: i,
                  onClick: r,
                  tabIndex: T,
                  children: l,
                }),
              }),
            );
          })({
            handleSelect: function (t) {
              e.type !== te.EXPAND_OR_COLLAPSE_EMOJIS ||
                (t.stopPropagation(),
                E.current ||
                  A.current ||
                  (r(e, { isFinalSelection: !0, toggleFavorite: !1 }),
                  (0, n_.G)(e.guildId),
                  e.sectionCollapsedToThreeRows || O(),
                  eo.default.track(J.HAw.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                    collapsed: e.sectionCollapsedToThreeRows,
                    guild_id: e.guildId,
                  })));
            },
            icon: (0, a.jsx)("img", { className: nU.Kk, src: c, alt: "" }),
            ariaLabel: _,
            shouldShowRoundHighlight: !0,
          });
        }
        case te.EMOJI: {
          let { columnIndex: n, visibleRowIndex: i } = e,
            s = k.rowIndex === i && k.columnIndex === n;
          return (0, a.jsx)(
            nG,
            {
              rowIndex: h,
              descriptor: e,
              emojiItemKey: t,
              isInspected: s,
              isScrolling: E,
              isUsingKeyboardNavigation: A,
              surrogateCodePoint: c,
              allowAnimatedEmoji: f,
              selectedItemClassName: m,
              onSelect: r,
              onInspect: d,
              channelGuildId: p,
              getEmojiItemProps: u,
              isMediumSize: Y,
              isLargeSize: W,
              pulseItemKey: B,
              setPulseItemKey: H,
              showEmojiFavoriteTooltip: I,
              messageId: S,
              isBurstReaction: N,
              rowPosition: j?.current?.getBoundingClientRect(),
              inNitroLockedSection: C,
            },
            t,
          );
        }
        case te.SOUNDMOJI:
          return;
      }
    }
    function X(e) {
      return (0, a.jsx)("ul", {
        ..._(h),
        className: o()(nU.ND, { [nU.HO]: W, [nU.X$]: Y }),
        ref: j,
        children: e.map(z),
      });
    }
    if (T === e1.R2.SOUNDMOJI)
      return (0, a.jsx)("ul", {
        className: nU.ND,
        ref: j,
        children: (0, a.jsx)(nm, { channelId: g, onSelectSoundmoji: l }),
      });
    if (T !== e1.s.TOP_GUILD_EMOJI) return X(t);
    let Z = t.filter(
        (e) =>
          e.subCategory === e1.tm.TOP_GUILD_EMOJI ||
          (e.subCategory === e1.tm.NEWLY_ADDED_EMOJI &&
            e.emoji.type === e5.i.GUILD &&
            !U.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
      ),
      q = t.filter(
        (e) =>
          e.subCategory === e1.tm.NEWLY_ADDED_EMOJI &&
          e.emoji.type === e5.i.GUILD &&
          U.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id),
      );
    return 0 === q.length
      ? X(t)
      : (0, a.jsxs)("div", {
          className: nU.Ng,
          children: [
            (0, a.jsx)("div", {
              className: o()(nU.V6, { [nU.$3]: 0 === Z.length }),
              children: X(Z),
            }),
            (0, a.jsxs)("div", {
              className: nU.bc,
              children: [
                (0, a.jsx)("div", {
                  className: o()(nU.eE, { [nU.eM]: 1 === q.length, [nU.Wk]: Z.length > 0 }),
                  children: X(q),
                }),
                (0, a.jsxs)("div", {
                  className: o()(nU.lD, { [nU.EI]: W, [nU.qU]: Y, [nU.Wk]: Z.length > 0 }),
                  children: [
                    (0, a.jsx)(nS.A, { foreground: nU.rI }),
                    (0, a.jsx)(K.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      children: et.intl.string(et.t.y2b7CA),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  };
  var nk = n(618723);
  let nF = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_TOP),
    nB = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_RIGHT),
    nV = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_BOTTOM),
    nH = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_SEARCH_RESULTS_PADDING_TOP),
    nj = (0, ec.xI)(A.A.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
    nW = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_SECTION_MARGIN_BOTTOM),
    nY = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    nK = s.memo(function (e) {
      let t,
        n,
        {
          diversitySurrogate: i,
          emojiGrid: r,
          emojiListRef: l,
          emojiSize: d,
          onEmojiSelect: c,
          onSelectSoundmoji: u,
          setUpsellConfigs: E,
          sectionDescriptors: A,
          rowCountBySection: h,
          collapsedSections: f,
          setCollapsedSections: I,
          getEmojiItemProps: T,
          getEmojiRowProps: g,
          rowCount: N,
          isUsingKeyboardNavigation: C,
          channelGuildId: O,
          channelId: R,
          messageId: L,
          isBurstReaction: y,
          listHeaderClassName: D,
        } = e,
        v = s.useRef(!1),
        b = G.Om.useStore((e) => e.activeCategoryIndex),
        M = (0, x.RQ)((e) => e.searchQuery),
        P = ea.Sf.useSetting(),
        U = (0, _.bG)([el.default], () => el.default.getCurrentUser()),
        w = (0, ed.ki)(U),
        { location: B } = (0, p.p)(),
        { analyticsLocations: V } = (0, S.Ay)(),
        [j, W] = s.useState(0),
        [Y, $] = s.useState(!1),
        {
          listPadding: z,
          renderRow: X,
          renderSection: Z,
          renderSectionHeader: q,
          renderSectionFooter: Q,
          sectionMarginBottom: ee,
          sectionHeaderHeight: en,
          sectionFooterHeight: ei,
        } = (function (e) {
          let {
              collapsedSections: t,
              diversitySurrogate: n,
              emojiGrid: i,
              emojiSize: r,
              onEmojiSelect: l,
              onSelectSoundmoji: d,
              searchQuery: c,
              sectionDescriptors: u,
              setCollapsedSections: E,
              getEmojiItemProps: A,
              getEmojiRowProps: h,
              isScrolling: f,
              isUsingKeyboardNavigation: I,
              allowAnimatedEmoji: T,
              channelGuildId: m,
              channelId: g,
              messageId: S,
              isBurstReaction: N,
              listHeaderClassName: C,
              activeSectionIndex: O,
              emojiListRef: R,
            } = e,
            L = (0, p.p)(),
            y = s.useRef(J.An1),
            D = s.useMemo(() => ("" !== n ? tx.A.convert.toCodePoint(n) : ""), [n]),
            v = s.useCallback(
              (e) => {
                let t = u[e],
                  n = u[e + 1];
                return e >= u.length - 1 ? t.isNitroLocked : t.isNitroLocked && !n.isNitroLocked;
              },
              [u],
            ),
            b = s.useCallback(
              (e) => {
                if (e >= u.length - 1) return !1;
                let t = u[e],
                  n = u[e + 1];
                return !t.isNitroLocked && n.isNitroLocked;
              },
              [u],
            ),
            M = s.useCallback(
              function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                  i = new Set(t),
                  r = t.has(e);
                (r ? i.delete(e) : i.add(e),
                  null != n &&
                    eo.default.track(J.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                      location: L.location,
                      tab: ep.kx.EMOJI,
                      collapsed: !r,
                      guild_id: n.id,
                    }),
                  e === e1.R2.SOUNDMOJI &&
                    eo.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_SECTION_TOGGLED, {
                      collapsed: !r,
                    }),
                  E(i));
              },
              [L, t, E],
            ),
            P = s.useCallback((e) => {
              let { columnIndex: t, visibleRowIndex: n } = e,
                i =
                  e.type === te.SOUNDMOJI
                    ? null
                    : e.type === te.EMOJI
                      ? (0, eA.N)(e.emoji)
                      : e.name;
              (y.current !== J.An1 && window.cancelAnimationFrame(y.current),
                (y.current = window.requestAnimationFrame(() => {
                  (G.Om.setInspectedExpressionPosition(t, n, k.t.MOUSE_EVENT),
                    G.Om.setSearchPlaceholder(i),
                    (y.current = J.An1));
                })));
            }, []),
            U = (0, _.bG)([er.HP], () => er.HP.hasHotspot(er._2.FAVORITE_EMOJI_TOOLTIP), []),
            w = s.useMemo(
              () =>
                ev().memoize((e, t) => {
                  let n = i[e],
                    s = u[t.sectionIndex];
                  return (0, a.jsx)(
                    nx,
                    {
                      emojiDescriptors: n,
                      emojiSize: r,
                      surrogateCodePoint: D,
                      onInspect: P,
                      onSelect: l,
                      onSelectSoundmoji: d,
                      getEmojiItemProps: A,
                      getEmojiRowProps: h,
                      isScrolling: f,
                      isUsingKeyboardNavigation: I,
                      rowIndex: e,
                      allowAnimatedEmoji: T,
                      showEmojiFavoriteTooltip: U,
                      channelGuildId: m,
                      category: s.sectionId,
                      selectedItemClassName: nk.__invalid_selectedItem,
                      channelId: g,
                      messageId: S,
                      isBurstReaction: N,
                      inNitroLockedSection: s.isNitroLocked,
                      handleScrollUpOnSectionCollapse: function () {
                        R.current?.scrollToSectionTop(t.sectionIndex, { animate: !0 });
                      },
                    },
                    e,
                  );
                }),
              [i, u, r, D, P, l, d, A, h, f, I, T, U, m, g, S, N, R],
            );
          s.useEffect(() => () => w.cache?.clear?.(), [w]);
          let F = s.useMemo(
              () =>
                ev().memoize((e) => {
                  let n = u[e];
                  if (null == n) return;
                  let { guild: i, categoryId: r, type: s, sectionId: l } = n;
                  if (s === e1.s.SEARCH_RESULTS) return;
                  let d =
                      s === e1.s.GUILD
                        ? null != i
                          ? (0, a.jsx)(e3.A, { guild: i, height: 16, width: 16 })
                          : null
                        : null != r
                          ? (0, a.jsx)(e2, { categoryId: r, height: 16, width: 16, size: "custom" })
                          : null,
                    c = i?.name;
                  null != r && (c = (0, eu.Nu)(r, i?.name));
                  let _ = O === e,
                    E = n.isNitroLocked,
                    A = E && !_,
                    h = E && _,
                    f =
                      s === e1.s.SOUNDMOJI
                        ? (0, a.jsx)(H.D, {
                            className: nk.f3,
                            onClick: () => {
                              ((0, x.U)(ep.kx.SOUNDBOARD),
                                eo.default.track(J.HAw.SOUNDMOJI_EMOJI_PICKER_VIEW_ALL_CLICK));
                            },
                            children: et.intl.string(et.t.rUEjBe),
                          })
                        : void 0;
                  return (0, a.jsx)(
                    ni.A,
                    {
                      className: o()(nk.wx, C, { [nk.RA]: A, [nk.sp]: h }),
                      icon: d,
                      isCollapsed: t.has(l),
                      onClick: () => M(l, i),
                      trailing: f,
                      children: c,
                    },
                    l,
                  );
                }),
              [u, t, M, C, O],
            ),
            B = (0, e7.k0)(),
            V = s.useCallback(
              (e, n) => {
                let i = u[e],
                  r = b(e),
                  s = v(e);
                return (0, a.jsx)(
                  "div",
                  {
                    role: "rowgroup",
                    className: o()(nk.Wy, {
                      [nk.YD]: e === u.length - 1,
                      [nk.jl]: t.has(i.sectionId),
                      [nk.cW]: i.isNitroLocked,
                      [nk.T5]: r || s,
                    }),
                    children: n,
                  },
                  e,
                );
              },
              [t, u, b, v],
            ),
            j = s.useCallback(
              (e) =>
                b(e)
                  ? B
                    ? (0, a.jsx)(no.ap, {})
                    : (0, a.jsx)(no.Ay, {})
                  : v(e)
                    ? (0, a.jsx)("div", { className: nk.pQ })
                    : null,
              [b, v, B],
            ),
            W = s.useCallback((e) => (b(e) ? 41 : 33 * !!v(e)), [b, v]),
            Y = s.useCallback(
              (e) => (e === u.length - 1 || t.has(u[e]?.sectionId) || b(e) || v(e) ? 0 : nW),
              [t, u, b, v],
            );
          return {
            listPadding: s.useMemo(() => ["" !== c ? nH : nF, nB, nV, 0], [c]),
            renderRow: w,
            renderSection: V,
            renderSectionHeader: F,
            renderSectionFooter: j,
            sectionMarginBottom: Y,
            sectionHeaderHeight: s.useCallback(
              (e) => (u[e].type === e1.s.SEARCH_RESULTS ? 0 : nj),
              [u],
            ),
            sectionFooterHeight: W,
          };
        })({
          collapsedSections: f,
          diversitySurrogate: i,
          emojiGrid: r,
          emojiSize: d,
          onEmojiSelect: c,
          onSelectSoundmoji: u,
          searchQuery: M,
          sectionDescriptors: A,
          setCollapsedSections: I,
          getEmojiItemProps: T,
          getEmojiRowProps: g,
          isScrolling: v,
          isUsingKeyboardNavigation: C,
          allowAnimatedEmoji: P,
          channelGuildId: O,
          channelId: R,
          messageId: L,
          isBurstReaction: y,
          listHeaderClassName: D,
          activeSectionIndex: j,
          emojiListRef: l,
        }),
        es = s.useCallback(
          (e) => {
            let t = l.current?.getSectionDescriptors();
            null == t ||
              W(
                Math.max(
                  t.findLastIndex((t) => t.offset.top <= e),
                  0,
                ),
              );
          },
          [l],
        );
      s.useLayoutEffect(() => {
        es(l.current?.getScrollerNode()?.scrollTop ?? 0);
      }, [l, es, A, h, M]);
      let ec = (0, F.Fk)({
        activeCategoryIndex: b,
        isScrolling: v,
        listRef: l,
        onActiveCategoryIndexChange: function (e) {
          "" === M && G.Om.setActiveCategoryIndex(e);
        },
        scrollOffset: 0,
        searchQuery: M,
        disableForSearch: !1,
      });
      (0, F.FV)({ searchQuery: M, activeCategoryIndex: b, listRef: l });
      let e_ = s.useCallback(
          (e) => {
            (ec(e),
              es(e),
              n$({
                emojiListRef: l,
                sectionDescriptors: A,
                scrollTop: e,
                searchQuery: M,
                setShowUpsell: $,
              }));
          },
          [ec, es, l, A, M, $],
        ),
        eE = A.length > 0;
      (s.useEffect(() => {
        Y &&
          (eo.default.track(J.HAw.PREMIUM_UPSELL_VIEWED, {
            type: eR.e.EMOJI_PICKER_FLOATING_UPSELL,
            location: B,
            location_stack: V,
          }),
          (0, na.sq)(J.U7l.PREMIUM_UPSELL_VIEWED, V, () =>
            (0, ns.uq)(eR.e.EMOJI_PICKER_FLOATING_UPSELL),
          ));
      }, [B, V, Y]),
        s.useEffect(() => {
          "" !== M && $(!1);
        }, [M]));
      let eh = s.useRef(null);
      return (
        s.useEffect(
          () => (
            clearTimeout(eh.current),
            (eh.current = setTimeout(() => {
              (eE
                ? t9.O.announce(et.intl.string(et.t.uZ4F2O), "polite")
                : t9.O.announce(et.intl.string(et.t.IxxiKF), "assertive"),
                (eh.current = null));
            }, 200)),
            () => {
              clearTimeout(eh.current);
            }
          ),
          [eE, M],
        ),
        (0, a.jsxs)("div", {
          className: nk.AD,
          children: [
            eE
              ? (0, a.jsx)(nt.A, {
                  role: "none presentation",
                  className: nk.p_,
                  listPadding: z,
                  onScroll: e_,
                  renderRow: X,
                  renderSection: Z,
                  renderSectionHeader: q,
                  renderSectionFooter: Q,
                  rowCount: N,
                  rowCountBySection: h,
                  rowHeight: d + 2 * nY,
                  sectionHeaderHeight: en,
                  sectionMarginBottom: ee,
                  sectionFooterHeight: ei,
                  stickyHeaders: !0,
                  ref: l,
                })
              : (0, a.jsx)(ne.A, {
                  message: (0, a.jsx)(K.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: et.intl.string(et.t.IxxiKF),
                  }),
                  className: nk.BZ,
                }),
            w || t8.Fr
              ? null
              : (0, a.jsx)(nl.d, {
                  showUpsell: Y,
                  text:
                    ((t = (0, eO.Dd)(eR.PremiumTypes.TIER_2)),
                    et.intl.format(et.t.gMVjeS, {
                      nitroTierName: t,
                      onClick: () => {
                        E({ type: tn.PREMIUM, emojiDescriptor: void 0 });
                      },
                    })),
                  button:
                    ((n = (0, nr.qD)()),
                    (0, eO.LE)(n, eR.pe.TIER_2) ?? et.intl.string(et.t.BmJkbd)),
                  buttonAnalyticsObject: { section: J.JJy.EMOJI_PICKER_FLOATING_UPSELL },
                  leadingAction: (0, a.jsx)(nd.l, {
                    size: "sm",
                    className: nk.ij,
                    location: m.A.PREMIUM_WISHLIST_EMOJI_UPSELL,
                  }),
                }),
          ],
        })
      );
    }),
    n$ = ev().throttle(
      function (e) {
        let {
          emojiListRef: t,
          sectionDescriptors: n,
          scrollTop: i,
          searchQuery: r,
          setShowUpsell: a,
        } = e;
        a(
          (0, nn.s)({ listRef: t, searchQuery: r, nitroLockedSectionStates: n, scrollTop: i })
            .areOnlyNitroLockedSectionsVisible,
        );
      },
      300,
      { leading: !1, trailing: !0 },
    );
  var nz = n(506774),
    nX = n(28863),
    nZ = n(277984),
    nq = n(404374),
    nQ = n(780964),
    nJ = n(766075),
    n0 = n(166403),
    n1 = n(506150);
  let n2 = "premiumRetentionEmojiPickerNotice",
    n3 = nz.w.get(n2),
    n6 = function (e) {
      let { closePopout: t, channel: n } = e,
        [i, r] = s.useState(!1),
        { subscription: l, hasFetchedSubscriptions: o } = (0, _.cf)([n0.A], () => ({
          subscription: n0.A.getPremiumSubscription(),
          hasFetchedSubscriptions: n0.A.hasFetchedSubscriptions(),
        }));
      if (
        (s.useEffect(() => {
          o || (0, nZ.hP)();
        }, [o]),
        null == l || !(0, eO.PK)(l.status) || i)
      )
        return null;
      let d =
          l.status === J.Dmq.PAST_DUE
            ? (0, eO.ji)(l).expiresDate
            : R()(l.currentPeriodStart).add(eR.ph),
        c = `${l.id}:${d.toISOString()}`;
      if (n3 === c) return null;
      let u =
        eO.Ay.getPremiumType(l.planId) === eR.PremiumTypes.TIER_0
          ? nq.k0.PREMIUM_TIER_0
          : eO.Ay.getPremiumType(l.planId) === eR.PremiumTypes.TIER_1
            ? nq.k0.PREMIUM_TIER_1
            : nq.k0.PREMIUM_TIER_2;
      return (0, a.jsxs)(K.E, {
        variant: "text-xs/medium",
        color: "text-default",
        className: n1.g$,
        children: [
          (0, a.jsx)(eg.t, { size: "md", className: n1.lu, color: u }),
          (0, a.jsxs)("div", {
            className: n1.Xn,
            children: [
              (0, a.jsx)(K.E, {
                variant: "text-xs/normal",
                children: et.intl.format(et.t.bTMjiO, {
                  planName: eO.Ay.getTierDisplayNameByPlanId(l.planId),
                  endsAt: d.toDate(),
                }),
              }),
              (0, a.jsx)("div", {
                children: (0, a.jsx)(nX.Anchor, {
                  onClick: () => {
                    ((0, eu.xf)(n), t(), (0, nJ.openUserSettings)(nQ.X.NITRO_PANEL));
                  },
                  children: et.intl.string(et.t.W3aavh),
                }),
              }),
            ],
          }),
          (0, a.jsx)(H.D, {
            onClick: () => {
              (nz.w.set(n2, c), (n3 = c), r(!0));
            },
            children: (0, a.jsx)(j.P, { size: "md", color: "currentColor", className: n1.YF }),
          }),
        ],
      });
    };
  var n5 = n(148361);
  let n4 = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_HORIZONTAL),
    n7 = (0, ec.xI)(A.A.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT);
  function n8(e) {
    return e.stopPropagation();
  }
  function n9(e, t) {
    G.Om.setInspectedExpressionPosition(e, t, k.t.GRID_NAVIGATOR_EVENT);
  }
  let ie = c()(eu.bo, 200),
    it = c()(eu.Wi, 200),
    ii = { section: void 0, openPopoutType: void 0, popoutLocation: void 0 },
    ir = s.memo(function (e) {
      let t,
        n,
        {
          pickerIntention: i,
          channel: r,
          guildId: l,
          closePopout: d,
          emojiSize: c = e1.as.MEDIUM,
          hasTabWrapper: A = !1,
          onSelectEmoji: O,
          onSelectSoundmoji: R,
          containerWidth: L,
          onNavigateAway: y,
          persistSearch: D,
          className: v,
          headerClassName: b,
          analyticsOverride: M = ii,
          searchProps: P = {},
          wrapper: B,
          shouldHidePickerActions: V = !1,
          messageId: H,
          renderHeader: j,
          listHeaderClassName: W,
          categoryListClassName: Y,
          shouldShowSoundmojiInEmojiPicker: K = !1,
          showOnlyUnicode: $ = !1,
          showAddEmojiButton: z,
          canViewEmojiPacks: X = !1,
          ref: q,
        } = e,
        { onFocus: Q, onKeyDown: ee, autoFocus: en = !0, accessory: ec } = P,
        e_ = (0, _.bG)([es.Ay], () => (null != l ? es.Ay.getDefaultChannel(l) : null), [l]),
        [eE, ep] = s.useState(null),
        em = s.useRef(""),
        eg = (0, x.RQ)((e) => e.searchQuery),
        eS = s.useRef(null),
        eN = s.useRef(null),
        eC = s.useRef(null);
      null == r && null != e_ && (r = e_);
      let eO = r?.getGuildId() ?? l ?? null,
        [eR, eL] = s.useState(!1),
        eD = s.useRef(null),
        eb = el.default.getCurrentUser(),
        eM = (0, ed.ki)(eb),
        eP = eR && eM;
      s.useImperativeHandle(q, () => ({ onPickerOpen: e0 }));
      let { location: eU } = (0, p.p)(),
        { page: ew, section: eG, object: ex, openPopoutType: ek, popoutLocation: eF } = M,
        eB = s.useMemo(() => ({ ...eU, section: eG ?? J.JJy.EMOJI_PICKER_POPOUT }), [eU, eG]),
        { analyticsLocations: eV } = (0, S.Ay)(m.A.EMOJI_PICKER),
        { diversitySurrogate: eH } = (0, _.cf)([C.Ay], () => ({
          diversitySurrogate: C.Ay.diversitySurrogate,
        })),
        ej = (0, eu.sL)(eg, r, i, $),
        eW = null == ej ? 0 : ej.locked.length + ej.unlocked.length,
        eY = ea.iM.useSetting(),
        eK = s.useMemo(() => new Set(eY), [eY]),
        e$ = s.useCallback((e) => {
          ea.iM.updateSetting(Array.from(e));
        }, []),
        ez = (0, F.oV)({
          gridWrapperRef: eS,
          containerWidth: L,
          listPaddingLeft: n7,
          listScrollbarWidth: 8,
        }),
        {
          rowCountBySection: eX,
          sectionDescriptors: eZ,
          emojiGrid: eq,
          columnCounts: eQ,
        } = (function (e) {
          let {
              channel: t,
              fallbackGuildId: n,
              collapsedSections: i,
              pickerIntention: r,
              emojiSearchResults: a,
              gridWidth: l,
              emojiPaddingHorizontal: o,
              emojiSpriteSize: d,
              shouldShowSoundmojiInEmojiPicker: c,
              showOnlyUnicode: u,
            } = e,
            E = (0, _.bG)([C.Ay], () => C.Ay.categories),
            A = s.useMemo(() => (u ? e4.Ay.getCategories() : E), [E, u]),
            h = (0, _.bG)([Z.A], () => Z.A.getGuild(t?.getGuildId()), [t]),
            f = t?.getGuildId() ?? n,
            I = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(f), [f]),
            p = (0, eu.XI)(f),
            T = (0, eu.Fj)(f),
            m = (0, eu.QZ)(f),
            { topEmojis: g, newlyAddedEmojis: S } = (0, ef.A)(f, r),
            N = (0, _.yK)([e9.Ay], () => e9.Ay.getFlattenedGuildIds(), []),
            O = (0, _.bG)([C.Ay], () => C.Ay.expandedSectionsByGuildIds),
            R = (0, _.bG)([el.default], () => el.default.getCurrentUser()),
            L = (0, ed.ki)(R),
            y = (0, e7.k0)(),
            D = I.getGroupedCustomEmoji(),
            v = (0, e8.Ym)({ location: "useEmojiGrid" });
          return s.useMemo(() => {
            let e = [],
              n = [],
              s = [],
              u = [],
              _ = 0,
              E = 0;
            if (null != I && null != l) {
              let I = Math.floor(l / (d + 2 * o)),
                R = 3 * I;
              function f(a, l) {
                let o = new Map(),
                  c = i.has(l.sectionId),
                  [A, h] = ev().partition(a, (e) => {
                    let n = eA.Ay.isEmojiDisabled({ emoji: e, channel: t, intention: r });
                    return (o.set(e, n), !n);
                  }),
                  f = A.concat(h),
                  p = l.guild,
                  T = f.length > R && null != p && l.isNitroLocked,
                  m = T && !O.has(p.id);
                m && f.splice(R - 1);
                let N = Math.ceil((T ? f.length + 1 : f.length) / I),
                  C = [];
                for (let e = 0; e < N; e++) {
                  let t = e * I,
                    n = t + I,
                    i = f
                      .slice(t, n)
                      .map((e, t) => ({
                        type: 0,
                        emoji: e,
                        size: d,
                        isDisabled: o.get(e),
                        rowIndex: E,
                        columnIndex: t,
                        visibleRowIndex: _,
                        category: l.type,
                        subCategory:
                          l.sectionId === e1.s.TOP_GUILD_EMOJI
                            ? (0, eu.DA)(g, S, e.id ?? e.uniqueName ?? e.name)
                            : e1.tm.NONE,
                      }));
                  if ((C.push(i), !c)) {
                    if (T && e === N - 1) {
                      let t = C[e];
                      t.push({
                        type: 1,
                        guildId: p.id,
                        name: et.intl.string(et.t.NZI2Zk),
                        size: d,
                        rowIndex: e,
                        columnIndex: t.length,
                        visibleRowIndex: _,
                        sectionCollapsedToThreeRows: m,
                      });
                    }
                    (u.push(i.length), s.push(i), _++);
                  }
                  E++;
                }
                let L = { ...l, count: a.length };
                (n.push(L), e.push(c ? 0 : N));
              }
              if (null != a)
                (0 !== a.unlocked.length &&
                  f(a.unlocked, {
                    type: e1.s.SEARCH_RESULTS,
                    sectionId: e1.s.SEARCH_RESULTS,
                    count: a.unlocked.length,
                    isNitroLocked: !1,
                  }),
                  0 !== a.locked.length &&
                    f(a.locked, {
                      type: e1.s.PREMIUM_UPSELL,
                      categoryId: e1.R2.PREMIUM_UPSELL,
                      sectionId: e1.s.PREMIUM_UPSELL,
                      count: a.locked.length,
                      isNitroLocked: !L,
                    }));
              else {
                if (v && c) {
                  let t = [{ type: 2, rowIndex: E, columnIndex: 0, visibleRowIndex: _ }];
                  n.push({
                    type: e1.s.SOUNDMOJI,
                    categoryId: e1.R2.SOUNDMOJI,
                    sectionId: "soundmoji",
                    count: t.length,
                    isNitroLocked: !1,
                  });
                  let r = i.has(e1.R2.SOUNDMOJI);
                  (!r && (u.push(t.length), s.push(t), _++), e.push(+!r), E++);
                }
                for (let e of A)
                  if (e === e1.R2.CUSTOM) {
                    function C(n) {
                      let i = D.get(n);
                      if (null == i) return;
                      let a = i.filter(
                        (e) =>
                          !tt.includes(
                            eA.Ay.getEmojiUnavailableReason({
                              emoji: e,
                              channel: t ?? es.Ay.getDefaultChannel(n),
                              intention: r,
                            }),
                          ),
                      );
                      if (0 === a.length) return;
                      let s = Z.A.getGuild(n),
                        l =
                          y ||
                          (!L &&
                            eA.Ay.isEmojiCategoryNitroLocked({
                              categoryEmojis: a,
                              channel: t,
                              intention: r,
                            }));
                      f(a, {
                        categoryId: e,
                        guild: s,
                        type: e1.s.GUILD,
                        sectionId: null != s ? s.id : (0, e6.A)(),
                        count: a.length,
                        isNitroLocked: l,
                      });
                    }
                    if ((null != h && C(h.id), (0, eI.isExternalEmojiAllowedForIntention)(r)))
                      for (let e of N) (null == h || h.id !== e) && C(e);
                  } else if (e === e1.R2.TOP_GUILD_EMOJI) {
                    if (null != h) {
                      let { allEmojis: t } = (0, eh.W)({ topEmojis: g, newlyAddedEmojis: S });
                      t.length > 0 &&
                        f(t, {
                          categoryId: e,
                          guild: Z.A.getGuild(h.id),
                          type: e1.s.TOP_GUILD_EMOJI,
                          sectionId: e1.s.TOP_GUILD_EMOJI,
                          count: t.length,
                          isNitroLocked: !1,
                        });
                    }
                  } else if (e === e1.R2.RECENT) {
                    let n = (r === eI.EmojiIntention.REACTION ? m : T).filter(
                      (e) => !eA.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                    );
                    f(n, {
                      categoryId: e,
                      type: e1.s.RECENT,
                      sectionId: e1.s.RECENT,
                      count: n.length,
                      isNitroLocked: !1,
                    });
                  } else if (e === e1.R2.FAVORITES) {
                    let n = p.filter(
                      (e) => !eA.Ay.isEmojiFiltered({ emoji: e, channel: t, intention: r }),
                    );
                    0 !== n.length &&
                      f(n, {
                        categoryId: e,
                        type: e1.s.FAVORITES,
                        sectionId: e1.s.FAVORITES,
                        count: n.length,
                        isNitroLocked: !1,
                      });
                  } else {
                    let t = e4.Ay.getByCategory(e);
                    null != t &&
                      f(t, {
                        categoryId: e,
                        type: e1.s.UNICODE,
                        sectionId: e,
                        count: t.length,
                        isNitroLocked: !1,
                      });
                  }
              }
            }
            return { columnCounts: u, emojiGrid: s, rowCountBySection: e, sectionDescriptors: n };
          }, [I, l, d, o, a, i, D, O, t, r, g, S, L, A, h, N, m, T, p, y, v, c]);
        })({
          gridWidth: ez,
          fallbackGuildId: eO,
          channel: r,
          pickerIntention: i,
          emojiSearchResults: ej,
          collapsedSections: eK,
          emojiPaddingHorizontal: n4,
          emojiSpriteSize: c,
          shouldShowSoundmojiInEmojiPicker: K,
          showOnlyUnicode: $,
        }),
        { newlyAddedEmojis: eJ } = (0, ef.A)(eO, i);
      ((t = s.useRef({ intention: i, isBurstReaction: eR, analyticsObject: ex })),
        s.useEffect(() => {
          t.current.intention === eI.EmojiIntention.REACTION && eT(t.current);
        }, []));
      let e0 = s.useCallback(() => {
          let e = eJ.length > 0 ? eJ[0].id : null;
          ((0, w.uV)(eO, e), eT({ intention: i, isBurstReaction: eR, analyticsObject: ex }));
        }, [eJ, eO, i, eR, ex]),
        e2 = (function (e) {
          let {
              pickerIntention: t,
              selectedChannel: n,
              fallbackGuildId: i,
              onSelectEmoji: r,
              setUpsellConfigs: a,
              emojiSelectAnalytics: l,
              trackEmojiFavorited: o,
            } = e,
            d = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(n?.getGuildId() ?? i), [
              i,
              n,
            ]);
          return s.useCallback(
            (e, i) => {
              if (0 === e.type) {
                let { emoji: s } = e;
                if (null == s) return;
                let c = eA.Ay.getEmojiUnavailableReason({ emoji: s, channel: n, intention: t });
                if (i.toggleFavorite)
                  return void (d.isFavoriteEmojiWithoutFetchingLatest(s) || null != c
                    ? (0, f.Sw)(s)
                    : (o?.(e), (0, f.V4)(s)));
                if (c !== eI.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
                  if (c === eI.EmojiDisabledReasons.PREMIUM_LOCKED) {
                    (l?.(e, c), a({ type: 0, emojiDescriptor: e }));
                    return;
                  }
                  if (
                    c === eI.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED &&
                    s.type === e5.i.GUILD
                  ) {
                    (l?.(e, c), a({ type: 1, guildId: s.guildId, emojiId: s.id }));
                    return;
                  }
                  c !== eI.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE &&
                    (l?.(e), r({ emoji: s, willClose: i.isFinalSelection, isBurst: i.isBurst }));
                }
              }
            },
            [n, t, r, a, d, l, o],
          );
        })({
          pickerIntention: i,
          selectedChannel: r,
          fallbackGuildId: eO,
          closePopout: d,
          onSelectEmoji: O,
          setUpsellConfigs: ep,
          emojiSelectAnalytics: (e, t) => {
            "" !== eg
              ? (0, eu.Wf)({
                  emoji: e.emoji,
                  location: { ...eB, object: J.ZSU.EMOJI },
                  searchQuery: eg,
                  isLocked: null != t,
                  intention: i,
                  messageId: H,
                })
              : (0, eu._7)({
                  emoji: e.emoji,
                  location: { ...eB, object: ex ?? J.ZSU.EMOJI, ...(null != ew && { page: ew }) },
                  pickerIntention: i,
                  category: e.category,
                  subCategory: e.subCategory,
                  position: e.columnIndex + 1,
                  newlyAddedHighlight:
                    e.subCategory === e1.tm.NEWLY_ADDED_EMOJI &&
                    U.isNewerThanLastSeen(eO, e.emoji.id),
                  isBurstReaction: eR,
                  messageId: H,
                  lockedReason: t,
                  visibleRowIndex: e.visibleRowIndex,
                });
          },
          trackEmojiFavorited: (e) => {
            (0, eu.C5)({ emoji: e.emoji, location: { ...eB, object: J.ZSU.EMOJI } });
          },
        }),
        e3 = s.useCallback(() => {
          (d(), y?.());
        }, [d, y]),
        {
          getItemProps: ti,
          getRowProps: tr,
          gridContainerProps: ta,
          handleGridContainerKeyDown: ts,
          isUsingKeyboardNavigation: tl,
        } = (function (e) {
          let {
              analyticsLocation: t,
              pickerIntention: n,
              columnCounts: i,
              onSelectEmoji: r,
              emojiGrid: a,
              emojiList: l,
              channelGuildId: o,
              isBurstReaction: d,
            } = e,
            c = (0, _.bG)([C.Ay], () => C.Ay.getDisambiguatedEmojiContext(o), [o]),
            E = s.useCallback(
              (e, i) => {
                if (e.type === te.EMOJI) {
                  if (null != e.emoji && i.altKey)
                    return void (c.isFavoriteEmojiWithoutFetchingLatest(e.emoji)
                      ? (0, f.Sw)(e.emoji)
                      : ((0, eu.C5)({ emoji: e.emoji, location: { ...t, object: J.ZSU.EMOJI } }),
                        (0, f.V4)(e.emoji)));
                  let a = {
                    page: null != o ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                    section: J.JJy.EMOJI_PICKER_POPOUT,
                    object: J.ZSU.EMOJI,
                  };
                  (d &&
                    (a = {
                      page: null != o ? J.liQ.GUILD_CHANNEL : J.liQ.DM_CHANNEL,
                      section: J.JJy.EMOJI_PICKER_POPOUT,
                      object: J.ZSU.EMOJI,
                    }),
                    (0, eu._7)({
                      emoji: e.emoji,
                      location: a,
                      pickerIntention: n,
                      category: e.category,
                      subCategory: e.subCategory,
                      newlyAddedHighlight:
                        e.subCategory === e1.tm.NEWLY_ADDED_EMOJI &&
                        U.isNewerThanLastSeen(o, e.emoji.id),
                    }),
                    r({ emoji: e.emoji, willClose: !i.shiftKey, isBurst: d }));
                }
              },
              [r, o, n, c, t, d],
            ),
            {
              gridDispatch: A,
              getItemProps: h,
              getRowProps: I,
              gridContainerProps: p,
              handleGridContainerKeyDown: T,
              isUsingKeyboardNavigation: m,
            } = (0, F.Ff)({
              columnCounts: i,
              gridNavigatorId: e1.lq,
              itemGrid: a,
              itemList: l,
              onGridNavigatorItemSelect: E,
              onGridNavigatorPositionChange: n9,
            });
          return (
            s.useEffect(
              () =>
                G.Om.subscribe(
                  (e) => e.inspectedExpressionPosition,
                  (e) => {
                    if (null == e) return;
                    let { columnIndex: t, rowIndex: n, source: i } = e;
                    i !== k.t.GRID_NAVIGATOR_EVENT &&
                      A({ type: u.n.SET_FOCUSED_POSITION, x: t, y: n });
                  },
                ),
              [A],
            ),
            {
              getItemProps: h,
              getRowProps: I,
              gridContainerProps: p,
              handleGridContainerKeyDown: T,
              isUsingKeyboardNavigation: m,
            }
          );
        })({
          pickerIntention: i,
          analyticsLocation: eB,
          columnCounts: eQ,
          onSelectEmoji: O,
          emojiGrid: eq,
          emojiList: eN,
          channelGuildId: eO,
          isBurstReaction: eP,
        });
      (((e, t) => {
        let [n, i] = s.useState(null);
        (s.useEffect(() => {
          null != n && (t.current?.scrollToSectionTop(n), i(null));
        }, [t, n]),
          s.useEffect(() => {
            i(G.Om.getState().activeCategoryIndex);
          }, [e]));
      })(L, eN),
        s.useLayoutEffect(() => {
          en && eC.current?.focus();
        }, [L, eH, eC, en]),
        s.useEffect(() => {
          D || (0, x.Ri)("");
        }, [D]),
        s.useEffect(
          () => (
            eo.default.track(J.HAw.OPEN_POPOUT, {
              type: ek ?? "Emoji Picker",
              guild_id: eO,
              location: eF,
              ...(0, g.dI)(r),
            }),
            () => {
              (ie.cancel(), it.cancel());
            }
          ),
          [ek, eO, eF, r],
        ),
        (0, T.Ay)(
          () => (
            (0, eu.V$)({ intention: i, location: eB }),
            (em.current = eg),
            G.Om.resetStoreState
          ),
        ),
        s.useEffect(() => () => (0, er.sF)(er._2.FAVORITE_EMOJI_TOOLTIP), []),
        s.useLayoutEffect(() => {
          let { columnIndex: e, rowIndex: t } = G.Om.getState().inspectedExpressionPosition;
          eq[t]?.[e] == null && 0 !== e && G.Om.setInspectedExpressionPosition(0, 0);
        }, [eq]),
        s.useEffect(() => {
          if (
            ("" === em.current && "" !== eg && (0, eu.EG)(eB, i), "" !== eg && em.current !== eg)
          ) {
            let e = G.Om.getAnalyticsId();
            0 === eW
              ? ie({ location: eB, searchQuery: eg, intention: i, loadId: e })
              : it({
                  totalResults: eW,
                  numEmojiLocked: ej?.locked.length ?? 0,
                  location: eB,
                  searchQuery: eg,
                  intention: i,
                  loadId: e,
                });
          }
          em.current = eg;
        }, [eg, eB, eW, ej, i]));
      let to = B ?? (A ? "div" : h.l),
        td = null != ez;
      eE?.type === tn.PREMIUM
        ? (n = (0, a.jsx)(n5.default, {
            onUpsellClicked: e3,
            emojiDescriptor: eE.emojiDescriptor,
            pickerIntention: i,
            analyticsLocation: eB,
            onClose: () => ep(null),
            channel: r,
          }))
        : eE?.type === tn.ROLE_SUBSCRIPTION &&
          (n = (0, a.jsx)(ei, {
            onClose: () => ep(null),
            guildId: eE.guildId,
            emojiId: eE.emojiId,
          }));
      let tc = (0, a.jsx)(t1, {
          channel: r,
          pickerIntention: i,
          emojiListRef: eN,
          onKeyDown: (e) => {
            (ts?.(e), ee?.(e));
          },
          searchBarRef: eC,
          onFocus: Q,
          autoFocus: en,
          accessory: ec,
          headerClassName: b,
          diversitySurrogate: eH,
          isBurstReaction: eR,
          onBurstReactionToggle: function () {
            (eL(!eR), eC.current?.focus());
          },
          burstToggleRef: eD,
          renderHeader: j,
          showAddEmojiButton: z,
          closePopout: d,
        }),
        tu = [];
      C.Ay.hasFavoriteEmojis(eO) || tu.push(E.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP);
      let t_ = (0, a.jsx)(I.A, {
        ...eB,
        children: (0, a.jsxs)(to, {
          id: e1.Do,
          "aria-labelledby": A ? e1.k1 : void 0,
          role: A ? "tabpanel" : void 0,
          className: o()(t0.iE, { [t0.r6]: A, [t0.cB]: eP }),
          children: [
            A ? null : tc,
            (0, a.jsxs)("div", {
              className: o()(t0.Fb, v),
              onScroll: n8,
              children: [
                A ? tc : null,
                (0, a.jsxs)("div", {
                  className: t0.uK,
                  ref: eS,
                  children: [
                    (0, a.jsx)(n6, { channel: r, closePopout: d }),
                    (0, a.jsx)(N.Ay, {
                      contentTypes: tu,
                      children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === E.M.EMOJI_PICKER_FAVORITE_EMOJIS_TIP)
                          return (0, a.jsx)(tS, { markAsDismissed: () => n(tm.i.UNKNOWN) });
                      },
                    }),
                    V
                      ? null
                      : (0, a.jsx)("div", {
                          className: t0.Iy,
                          id: e1.lq,
                          ...ta,
                          children: td
                            ? (0, a.jsx)(nK, {
                                collapsedSections: eK,
                                diversitySurrogate: eH,
                                emojiGrid: eq,
                                emojiListRef: eN,
                                emojiSize: c,
                                getEmojiItemProps: ti,
                                getEmojiRowProps: tr,
                                gridWidth: ez,
                                isUsingKeyboardNavigation: tl,
                                onEmojiSelect: function (e, t) {
                                  e2(e, { ...t, isBurst: eP });
                                },
                                onSelectSoundmoji: R,
                                setUpsellConfigs: ep,
                                rowCount: eq.length,
                                rowCountBySection: eX,
                                sectionDescriptors: eZ,
                                setCollapsedSections: e$,
                                channelGuildId: eO,
                                channelId: r?.id,
                                messageId: H,
                                isBurstReaction: eP,
                                listHeaderClassName: W,
                              })
                            : null,
                        }),
                  ],
                }),
                (0, a.jsx)(t7, {
                  emojiGrid: eq,
                  className: t0.qV,
                  guildId: eO,
                  pickerIntention: i,
                  channel: r,
                }),
                n,
                i === eI.EmojiIntention.REACTION
                  ? (0, a.jsx)(ey, {
                      targetElementRef: eD,
                      shouldShow: eR && !eM,
                      onDismiss: () => eL(!1),
                    })
                  : null,
              ],
            }),
            V
              ? null
              : (0, a.jsx)(tT, {
                  className: o()(t0.jv, Y),
                  emojiListRef: eN,
                  sectionDescriptors: eZ,
                  intention: i,
                  channel: r,
                  fallbackGuildId: eO,
                  shouldShowSoundmojiInEmojiPicker: K,
                  showOnlyUnicode: $,
                  canViewEmojiPacks: X,
                }),
          ],
        }),
      });
      return (0, a.jsx)(S.f5, { value: eV, children: t_ });
    });
}
