/* Recovered shipped factory. Module 511558.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7546224..7576477
 * Raw property SHA-256: bc91bd28f1eb88510fb6ccd6a473c82d319e732dc18614a223de86377ddef29a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => ty });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(305866),
    o = n(289873),
    d = n(793574),
    c = n(688810),
    u = n(151271),
    _ = n(665252),
    E = n(702841),
    A = n(594061),
    h = n(796774),
    f = n(209932),
    I = n(714736);
  n(30146);
  var p = n(675816),
    T = n(562708),
    m = n(17928),
    g = n(27232),
    S = n(406810),
    N = n(111159),
    C = n(7689),
    O = n(369606),
    R = n(939249),
    L = n(297264),
    y = n(358618),
    D = n(983851),
    v = n(442433),
    b = n(537652),
    M = n(212245),
    P = n(139286),
    U = n(915089),
    w = n(724511),
    G = n(850992),
    x = n(887695),
    k = n(435558),
    F = n(962125),
    B = n(158045),
    V = n(240864),
    H = n(212633);
  let j = (0, k.throttle)(
      function (e) {
        let {
          listRef: t,
          searchQuery: n,
          nitroLockedSectionStates: i,
          scrollTop: r,
          sectionHeaderHeight: a,
          sectionFooterHeight: s,
        } = e;
        if (null == t.current) return;
        let l = (0, V.s)({
          listRef: t,
          searchQuery: n,
          nitroLockedSectionStates: i,
          scrollTop: r,
          sectionHeaderHeight: a,
          sectionFooterHeight: s,
        });
        u.RQ.setState({
          isNitroLockedSectionVisible: l.isNitroLockedSectionVisible,
          areOnlyNitroLockedSectionsVisible: l.areOnlyNitroLockedSectionsVisible,
        });
      },
      300,
      { leading: !1, trailing: !0 },
    ),
    W = function (e) {
      let {
          categories: t,
          store: n,
          hasSearchResults: a,
          listPadding: s,
          renderRow: l,
          renderSection: o,
          renderSectionHeader: d,
          renderSectionFooter: c,
          renderInspector: _,
          renderEmptySearchState: E,
          rowCount: A,
          rowCountBySection: h,
          rowHeight: f,
          sectionHeaderHeight: I,
          sectionFooterHeight: p,
          renderUpsell: T,
          onScroll: m,
          ref: g,
        } = e,
        S = r.useRef(!1),
        N = r.useRef(null),
        C = (0, u.RQ)((e) => e.searchQuery),
        O = n.useStore((e) => e.activeCategoryIndex),
        R = r.useMemo(
          () =>
            t.map((e) =>
              (0, B.Em)(e.categoryInfo)
                ? { isNitroLocked: e.categoryInfo.isNitroLocked }
                : { isNitroLocked: !1 },
            ),
          [t],
        ),
        L = (0, x.Fk)({
          activeCategoryIndex: O,
          isScrolling: S,
          listRef: N,
          onActiveCategoryIndexChange: n.setActiveCategoryIndex,
          scrollOffset: 20,
          searchQuery: C,
        }),
        y = r.useCallback(
          (e) => {
            (L(e),
              j({
                listRef: N,
                searchQuery: C,
                nitroLockedSectionStates: R,
                scrollTop: e,
                sectionHeaderHeight: I,
                sectionFooterHeight: p,
              }),
              m?.(e));
          },
          [L, C, R, I, p, m],
        );
      return (
        r.useEffect(() => {
          null != N.current && y(N.current.getScrollerNode()?.scrollTop ?? 0);
        }, [y, N]),
        (0, x.FV)({ searchQuery: C, activeCategoryIndex: O, listRef: N }),
        r.useImperativeHandle(
          g,
          () => ({
            scrollTo: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return N.current?.scrollTo(...t);
            },
            getRowDescriptors: () => N.current?.getRowDescriptors() ?? [],
            getSectionDescriptors: () => N.current?.getSectionDescriptors() ?? [],
            scrollToSectionTop: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return N.current?.scrollToSectionTop(...t);
            },
            scrollRowIntoView: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return N.current?.scrollRowIntoView(...t);
            },
            getScrollerNode: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return N.current?.getScrollerNode(...t);
            },
            scrollIntoViewNode: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return N.current?.scrollIntoViewNode(...t);
            },
            getListDimensions: function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return N.current?.getListDimensions(...t) ?? { height: -1, totalHeight: -1 };
            },
          }),
          [],
        ),
        (0, i.jsxs)("div", {
          className: H.i,
          children: [
            C.length > 0 && !a && null != E
              ? E()
              : (0, i.jsx)(F.A, {
                  role: "none presentation",
                  listPadding: s,
                  onScroll: y,
                  renderRow: l,
                  renderSection: o,
                  renderSectionHeader: d,
                  renderSectionFooter: c,
                  rowCount: A,
                  rowCountBySection: h,
                  rowHeight: f,
                  sectionHeaderHeight: I,
                  sectionFooterHeight: p,
                  stickyHeaders: !0,
                  ref: N,
                }),
            T?.(),
            _?.(),
          ],
        })
      );
    };
  var Y = n(462180),
    K = n(602034),
    $ = n(683438),
    z = n(642232);
  let X = function (e) {
    let {
        store: t,
        hasSendableExpressions: n,
        onKeyDown: a,
        gridNavigatorId: s,
        expressionsListRef: l,
        defaultSearchPlaceholder: o,
        emptySearchPlaceholder: d,
        ref: c,
      } = e,
      _ = r.useRef(null),
      [E, A] = (0, u.RQ)((e) => [e.searchQuery, e.isSearchSuggestion], Y.x),
      h = t.useStore((e) => e.searchPlaceholder),
      [f, I] = t.useStore((e) => [e.inspectedExpressionPosition, e.hasInteracted], Y.x),
      p = r.useCallback(
        (e) => {
          (t.setActiveCategoryIndex("" === e ? 0 : G.Uk),
            t.setInspectedExpressionPosition(0, 0),
            t.setSearchPlaceholder(null),
            (0, u.Ri)(e),
            l.current?.scrollTo(0));
        },
        [l, t],
      ),
      T = r.useCallback(() => {
        p("");
      }, [p]);
    return (
      r.useImperativeHandle(c, () => ({ focus: () => _.current?.focus() })),
      r.useLayoutEffect(() => {
        A && _.current?.focus();
      }, [A]),
      (0, i.jsx)("div", {
        className: z.i,
        children: (0, i.jsx)($.I, {
          autoFocus: n,
          disabled: !n,
          query: E,
          ref: _,
          placeholder: null != h ? h : n || null == d ? o : d,
          onClear: T,
          onKeyDown: a,
          onChange: p,
          inputProps: {
            "aria-haspopup": "grid",
            "aria-controls": s,
            "aria-expanded": !0,
            ...(I ? { "aria-activedescendant": (0, K.Aq)(s, f.columnIndex, f.rowIndex) } : void 0),
          },
        }),
      })
    );
  };
  var Z = n(904289);
  function q(e) {
    let {
        categories: t,
        collapsedCategories: n,
        containerWidth: a,
        store: s,
        onSelectItem: l,
        onSearchExpressions: o,
        onScroll: d,
        hasSearchResults: c,
        defaultSearchPlaceholder: _,
        emptySearchPlaceholder: E,
        renderEmptyState: A,
        renderRow: h,
        renderSection: f,
        renderSectionHeader: I,
        renderSectionFooter: p,
        renderInspector: T,
        renderEmptySearchState: m,
        renderCategoryList: g,
        renderHeaderAccessories: S,
        rowHeight: N,
        sectionHeaderHeight: C,
        sectionFooterHeight: O,
        itemNodeWidth: R,
        listPaddingRight: L,
        itemNodeMargin: y,
        listPadding: D,
        gridNavigatorId: v,
        gridNotice: b,
        renderHeader: M,
        renderUpsell: P,
      } = e,
      U = r.useRef(null),
      w = r.useRef(null),
      G = r.useRef(null),
      k = 0 === t.length,
      F = (0, u.RQ)((e) => e.searchQuery),
      B = s.useStore((e) => e.inspectedExpressionPosition),
      V = (0, x.oV)({ gridWrapperRef: U, containerWidth: a, showingEmptyState: k }),
      {
        expressionsGrid: H,
        rowCount: j,
        rowCountBySection: Y,
        columnCounts: K,
        gutterWidth: $,
      } = (0, x.se)({
        categories: t,
        collapsedCategories: n,
        gridWidth: V,
        listPaddingRight: L,
        itemNodeWidth: R,
        itemNodeMargin: y,
      }),
      {
        getItemProps: z,
        getRowProps: q,
        gridContainerProps: Q,
        handleGridContainerKeyDown: J,
        isUsingKeyboardNavigation: ee,
      } = (0, x.JZ)({
        columnCounts: K,
        expressionsListRef: w,
        expressionsGrid: H,
        onSelectItem: l,
        store: s,
        gridNavigatorId: v,
      }),
      et = r.useCallback(
        (e, t) =>
          h(
            H[e],
            q(e),
            {
              isUsingKeyboardNavigation: ee.current,
              gutterWidth: $,
              rowIndex: e,
              totalRowCount: j,
              sectionIndex: t.sectionIndex,
            },
            (t) => z(e, t),
            (t) => s.setInspectedExpressionPosition(t, e),
          ),
        [H, z, q, $, ee, h, s, j],
      ),
      en = r.useCallback((e) => I?.(t[e], e), [t, I]),
      ei = r.useCallback((e) => p?.(t[e], e), [t, p]),
      er = r.useCallback(
        () => T?.(H?.[B.rowIndex]?.[B.columnIndex]),
        [H, B.columnIndex, B.rowIndex, T],
      );
    (r.useEffect(() => {
      o(F);
    }, [o, F]),
      r.useEffect(() => {
        s.setBottomPosition(U.current?.getBoundingClientRect().bottom ?? null);
      }),
      r.useEffect(() => s.resetStoreState, [s.resetStoreState]),
      r.useLayoutEffect(() => {
        G.current?.focus();
      }, []));
    let ea = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(X, {
          ref: G,
          store: s,
          hasSendableExpressions: !0,
          onKeyDown: J,
          expressionsListRef: w,
          gridNavigatorId: v,
          defaultSearchPlaceholder: _,
          emptySearchPlaceholder: E,
        }),
        S?.(),
      ],
    });
    return (0, i.jsxs)(i.Fragment, {
      children: [
        null != M ? M(ea) : (0, i.jsxs)("div", { className: Z.wx, children: [" ", ea, " "] }),
        k && null != A
          ? A(Z.p$)
          : (0, i.jsxs)(i.Fragment, {
              children: [
                g(w),
                null != b && (0, i.jsx)("div", { className: Z.Eb, children: b }),
                (0, i.jsx)("div", {
                  ref: U,
                  className: Z.AD,
                  id: v,
                  ...Q,
                  children:
                    null != V
                      ? (0, i.jsx)(W, {
                          categories: t,
                          ref: w,
                          store: s,
                          hasSearchResults: c,
                          listPadding: D,
                          renderRow: et,
                          renderSection: f,
                          renderSectionHeader: null != I ? en : void 0,
                          renderSectionFooter: null != p ? ei : void 0,
                          renderInspector: null != T ? er : void 0,
                          renderEmptySearchState: m,
                          rowCount: j,
                          rowCountBySection: Y,
                          rowHeight: N,
                          sectionHeaderHeight: C,
                          sectionFooterHeight: O,
                          renderUpsell: P,
                          onScroll: d,
                        })
                      : null,
                }),
              ],
            }),
      ],
    });
  }
  var Q = n(89366),
    J = n(319993),
    ee = n(202639),
    et = n(414872),
    en = n(285373),
    ei = n(609178),
    er = n(885386),
    ea = n(763827),
    es = n(287809),
    el = n(977997),
    eo = n(147925),
    ed = n(174459),
    ec = n(807348),
    eu = n(813564),
    e_ = n(699840),
    eE = n(147472);
  n(321073);
  var eA = n(964486),
    eh = n(931991),
    ef = n(734057),
    eI = n(71393),
    ep = n(576705),
    eT = n(309010),
    em = n(473145),
    eg = n(636537),
    eS = n(73153),
    eN = n(463347),
    eC = n(125831),
    eO = n(945810);
  let eR = (0, eO.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
  });
  (0, eO.mj)({
    kind: "user",
    name: "2026-08-top-soundboard-sounds-mobile",
    defaultConfig: { enabled: !1, topSoundsFirst: !1 },
    variations: { 1: { enabled: !0, topSoundsFirst: !0 }, 2: { enabled: !0, topSoundsFirst: !1 } },
  });
  var eL = n(652215),
    ey = n(805143),
    eD = n(194567),
    ev = n(980504),
    eb = n(202541);
  function eM(e, t) {
    return (null != t && (e = t(e)), e.map((e, t) => ({ type: ec.uq.SOUND, sound: e, index: t })));
  }
  function eP(e) {
    let {
        sections: t,
        guildIds: n,
        allSounds: i,
        potentialSoundIdsForSection: r,
        sectionType: a,
        sortSoundsFn: s,
      } = e,
      l = {};
    for (let e of [...n, "0"])
      for (let t of i.get(e) ?? []) null != r.find((e) => e === t.soundId) && (l[t.soundId] = t);
    let o = [];
    for (let e of r) {
      let t = l[e];
      null != t && o.push(t);
    }
    let d = eM(o, s);
    d.length > 0 && t.push({ key: a, categoryInfo: { type: a }, items: d });
  }
  function eU(e, t, n) {
    let { allSounds: i, topSoundIds: r } = n,
      a = {};
    for (let e of i.get(t.id) ?? []) a[e.soundId] = e;
    let s = [];
    for (let e of r) {
      let t = a[e];
      null != t && s.push(t);
    }
    0 !== s.length &&
      e.push({
        key: ec.Cx.TOP_SOUNDS,
        categoryInfo: { type: ec.Cx.TOP_SOUNDS, guild: t },
        items: eM(s),
      });
  }
  function ew(e, t) {
    let n = t.get("0") ?? ev.pD;
    e.push({ key: ec.Cx.DEFAULTS, categoryInfo: { type: ec.Cx.DEFAULTS }, items: eM(n, eD.U9) });
  }
  var eG = n(554146),
    ex = n(43105),
    ek = n(131607),
    eF = n(49999),
    eB = n(660183);
  function eV(e) {
    let { targetElementRef: t } = e,
      { allowReordering: n } = e_.q.useConfig({ location: "SoundboardFavoritesCoachmark" }),
      [r, a] = (0, ek.kn)(n ? [eG.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK] : [], void 0, !0);
    return r !== eG.M.SOUNDBOARD_FAVORITES_ORDERING_COACHMARK
      ? null
      : (0, i.jsx)(ex.A, {
          targetElementRef: t,
          onRequestClose: function (e) {
            (("user:escape" === e || "user:explicit" === e) && a(eF.i.DISMISS),
              a(eF.i.AUTO_DISMISS));
          },
          title: eB.intl.string(eB.t.KFcQy8),
          body: eB.intl.string(eB.t["P/1x7s"]),
          badge: "beta",
        });
  }
  var eH = n(837381),
    ej = n(866665),
    eW = n(713517),
    eY = n(88218),
    eK = n(407698),
    e$ = n(941971),
    ez = n(698279),
    eX = n(120052);
  let eZ = [8, 8, 8, 8],
    eq = "soundboard_guild_",
    { itemIdForIndex: eQ } = (0, eY.J)(eq);
  function eJ(e) {
    let { children: t, className: n, isSelected: a, listItemProps: s, onClick: l } = e,
      o = r.useRef(null),
      { isHoveringOrFocusing: d } = (0, eW.A)(o);
    return (0, i.jsxs)(R.D, {
      innerRef: o,
      ...s,
      className: n,
      onClick: l,
      children: [
        (0, i.jsx)("div", {
          className: eX.a$,
          children: (0, i.jsx)(e$.A, { hovered: d, selected: a, size: "small" }),
        }),
        t,
      ],
    });
  }
  function e0(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: a } = e;
    return (0, i.jsx)(eJ, {
      className: s()(eX.Yl, { [eX.wH]: n }),
      isSelected: n,
      listItemProps: a,
      onClick: r,
      children: (0, i.jsx)(t, { className: eX.xi, color: "currentColor" }),
    });
  }
  function e1(e, t, n, r, a) {
    switch (e.categoryInfo.type) {
      case ec.Cx.FAVORITES:
        return (0, i.jsx)(
          e0,
          { icon: g.StarIcon, onClick: t, isSelected: n, listItemProps: r },
          e.key,
        );
      case ec.Cx.FREQUENTLY_USED:
        return (0, i.jsx)(
          e0,
          { icon: S.ClockIcon, onClick: t, isSelected: n, listItemProps: r },
          e.key,
        );
      case ec.Cx.GUILD:
        return (0, i.jsx)(
          eJ,
          {
            className: eX.L1,
            isSelected: n,
            listItemProps: r,
            onClick: t,
            children: (0, i.jsx)(w.A, { guild: e.categoryInfo.guild, isSelected: n, isLocked: a }),
          },
          e.key,
        );
      case ec.Cx.DEFAULTS:
        return (0, i.jsx)(e0, { icon: N.p, onClick: t, isSelected: n, listItemProps: r }, e.key);
      case ec.Cx.TOP_SOUNDS:
        return (0, i.jsx)(
          e0,
          { icon: O.TrophyIcon, onClick: t, isSelected: n, listItemProps: r },
          e.key,
        );
      default:
        return null;
    }
  }
  function e2(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: a, isNitroLocked: s } = e,
      l = (0, eH.rm)(eQ(n));
    return t.categoryInfo.type === ec.Cx.GUILD
      ? (0, i.jsx)(eK.Q, { guild: t.categoryInfo.guild, children: e1(t, r, a, l, s) })
      : (0, i.jsx)(ej.m, {
          text: (function (e) {
            switch (e.categoryInfo.type) {
              case ec.Cx.FAVORITES:
                return eB.intl.string(eB.t.k8fFjp);
              case ec.Cx.FREQUENTLY_USED:
                return eB.intl.string(eB.t["+cGVV6"]);
              case ec.Cx.GUILD:
                return e.categoryInfo.guild.name;
              case ec.Cx.DEFAULTS:
                return eB.intl.string(eB.t.Rtvk9X);
              case ec.Cx.TOP_SOUNDS:
                return eB.intl.formatToPlainString(eB.t.GXs41w, {
                  guildName: e.categoryInfo.guild.name,
                });
            }
          })(t),
          position: "right",
          align: "center",
          children: e1(t, r, a, l, s),
        });
  }
  function e3(e) {
    let {
        soundboardListRef: t,
        categories: n,
        shouldUpsellLockedCategories: a,
        listPadding: l = eZ,
        guildId: o,
        inExpressionPicker: d,
      } = e,
      c = r.useRef(null),
      u = (0, m.bG)([es.default], () => es.default.getCurrentUser()),
      _ = (0, B.TW)(u, eb.PremiumTypes.TIER_2),
      E = r.useCallback(
        (e, t, n, r) => {
          let s = a && e6(e.categoryInfo, _, o);
          return (0, i.jsx)(e2, {
            category: e,
            categoryIndex: t,
            onClick: function () {
              (ed.default.track(eL.HAw.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                location: { page: eL.liQ.SOUNDBOARD_POPOUT },
                guild_id: o ?? null,
                num_expressions: e.items.length,
                tab: ez.kx.SOUNDBOARD,
                sticker_pack_id: null,
                pack_id: null,
              }),
                n());
            },
            isSelected: r,
            isNitroLocked: s,
          });
        },
        [o, a, _],
      );
    return (0, i.jsx)(eY.A, {
      className: s()(d ? eX.HZ : eX.jv),
      categoryListRef: c,
      expressionsListRef: t,
      store: G.LW,
      categories: n,
      listPadding: l,
      renderCategoryListItem: E,
      rowCount: n.length,
      categoryHeight: 40,
      navId: "soundboard-picker-categories",
      itemIdPrefix: eq,
    });
  }
  function e6(e, t, n) {
    return (
      (null == n && e.type === ec.Cx.GUILD && !t) ||
      (e.type === ec.Cx.GUILD && e.guild.id !== n && !t)
    );
  }
  var e5 = n(191023),
    e4 = n(192308),
    e7 = n(28863),
    e8 = n(695366),
    e9 = n(834730),
    te = n(789645),
    tt = n(565645),
    tn = n(775602),
    ti = n(826673),
    tr = n(182922),
    ta = n(532624),
    ts = n(531685),
    tl = n(723702),
    to = n(350535),
    td = n(115023);
  function tc(e) {
    let { soundboardSound: t, closePicker: r } = e,
      a = (0, u.RQ)((e) => e.searchQuery),
      s = (0, E.bG)([f.A], () => null != t && f.A.isFavoriteSound(t.soundId)),
      l = (0, E.bG)([eI.A], () => eI.A.getGuild(t?.guildId)),
      o = (0, E.bG)([tn.Ay], () => tn.Ay.useReducedMotion, []),
      d = (0, E.bG)([ts.A], () => ts.A.isFocused()),
      c = (0, E.bG)([ta.Ay], () => ta.Ay.getKeybindForAction(eL.hCu.SOUNDBOARD_HOLD));
    if (null != t && a.length > 0)
      return (0, i.jsx)(tr.A, {
        graphicPrimary:
          null != t.emojiId || null != t.emojiName
            ? (0, i.jsx)(tt.A, { emojiId: t.emojiId, emojiName: t.emojiName, className: td.Zg })
            : (0, i.jsx)(e5.ImageIcon, { size: "md", color: "currentColor", className: td.Zg }),
        graphicSecondary: null != l ? (0, i.jsx)(w.A, { guild: l, shouldAnimate: !o && d }) : null,
        titlePrimary: t.name,
        titleSecondary: l?.name,
        isFavorite: s,
      });
    function _() {
      (r(),
        (0, e4.openModalLazy)(async () => {
          let { default: e } = await Promise.all([
            n.e("161411"),
            n.e("498640"),
            n.e("846327"),
            n.e("912618"),
          ]).then(n.bind(n, 29681));
          return (t) => (0, i.jsx)(e, { ...t });
        }));
    }
    let A = (0, ti.k8)(eG.M.SOUNDBOARD_KEYBIND_TIP),
      h =
        null != c && (0, tl.isWindows)() && !A
          ? eB.intl.format(eB.t.udMTth, {
              keybind: (0, to.dI)(c.shortcut, !0),
              openSettingsHook: (e, t) => (0, i.jsx)(e7.Anchor, { onClick: _, children: e }, t),
            })
          : null;
    return null == h
      ? null
      : (0, i.jsxs)("div", {
          className: td.g,
          children: [
            (0, i.jsx)(e8.E, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: td.QW,
            }),
            (0, i.jsx)(e9.E, {
              variant: "text-sm/medium",
              color: "text-default",
              className: td.L5,
              children: h,
            }),
            (0, i.jsx)(R.D, {
              className: td.b,
              onClick: function () {
                return (0, ti.Dr)(eG.M.SOUNDBOARD_KEYBIND_TIP);
              },
              children: (0, i.jsx)(te.P, { size: "xs", color: "currentColor" }),
            }),
          ],
        });
  }
  var tu = n(817232),
    t_ = n(890856),
    tE = n(307301),
    tA = n(468689);
  function th(e) {
    (tA.default.open(e, eL.BEX.SOUNDBOARD),
      (0, e4.openModalLazy)(async () => {
        let { default: t } = await Promise.all([
          n.e("860350"),
          n.e("207998"),
          n.e("179652"),
          n.e("775417"),
          n.e("67491"),
          n.e("308555"),
          n.e("883952"),
          n.e("220287"),
          n.e("66580"),
          n.e("808979"),
          n.e("420643"),
          n.e("974049"),
          n.e("280559"),
          n.e("669006"),
          n.e("98913"),
          n.e("612811"),
        ]).then(n.bind(n, 191110));
        return (n) => (0, i.jsx)(t, { ...n, guildId: e });
      }));
  }
  var tf = n(948611),
    tI = n(308078);
  function tp(e) {
    let { guild: t, focused: n, onSelectItem: r, ...a } = e,
      { canCreateExpressions: l } = (0, eh.nr)(t);
    return (0, i.jsx)(ej.m, {
      text: eB.intl.string(eB.t["fHo+z1"]),
      shouldShow: !l,
      children: (0, i.jsx)("li", {
        className: tf.H,
        children: (0, i.jsxs)(t_.s, {
          ...a,
          "aria-label": eB.intl.formatToPlainString(eB.t.c1qVYh, { guildName: t.name }),
          className: s()(tI.n4, { [tI.in]: n, [tI.r9]: !l }),
          onClick: () => (null != r ? r() : th(t.id)),
          children: [
            (0, i.jsx)(tE.j, { size: "sm", color: "currentColor" }),
            (0, i.jsx)(e9.E, {
              variant: "text-xs/semibold",
              color: l ? "currentColor" : "text-muted",
              children: eB.intl.string(eB.t["8Fu/S7"]),
            }),
          ],
        }),
      }),
    });
  }
  function tT(e) {
    let {
        descriptor: t,
        soundButtonProps: n,
        rowIndex: i,
        columnIndex: a,
        isUsingKeyboardNavigation: s,
        suppressPlaySound: l,
        getItemProps: o,
        onSelectItem: d,
        onItemMouseEnter: c,
        buttonOverlay: u,
        isNitroLocked: _,
        showLockForDisabledSound: E,
        inExpressionPicker: A,
      } = e,
      h = G.LW.useStore((e) => e.inspectedExpressionPosition),
      f = `${i}-${a}`,
      I = s && h.rowIndex === i && h.columnIndex === a;
    switch (t.item.type) {
      case ec.uq.SOUND:
        return (0, r.createElement)(tu.Ay, {
          ...o(a),
          ...n,
          key: f,
          sound: t.item.sound,
          suppressPlaySound: l,
          focused: I,
          onMouseEnter: () => c(a),
          onSelectItem: (e) => d(t, e),
          enableSecondaryActions: !0,
          buttonOverlay: u,
          inNitroLockedSection: _,
          showLockForDisabledSound: E,
          isSoundmoji: !0 === A,
        });
      case ec.uq.ADD_SOUND:
        return (0, r.createElement)(tp, {
          ...o(a),
          key: f,
          guild: t.item.guild,
          focused: I,
          onSelectItem: () => d(t),
        });
    }
  }
  var tm = n(635799);
  let tg = 32 + et.kg - 8,
    tS = {
      [ec.Cx.SEARCH]: d.A.SOUNDBOARD_SEARCH_RESULTS_SECTION,
      [ec.Cx.DEFAULTS]: d.A.SOUNDBOARD_DEFAULT_SOUNDS_SECTION,
      [ec.Cx.GUILD]: d.A.SOUNDBOARD_GUILD_SOUNDS_SECTION,
      [ec.Cx.FAVORITES]: d.A.SOUNDBOARD_FAVORITES_SECTION,
      [ec.Cx.FREQUENTLY_USED]: d.A.SOUNDBOARD_FREQUENTLY_USED_SECTION,
      [ec.Cx.TOP_SOUNDS]: d.A.SOUNDBOARD_TOP_SOUNDS_SECTION,
    };
  function tN(e) {
    let {
        categoryInfo: t,
        collapsed: n,
        toggleCollapsed: a,
        isSectionNitroLocked: l,
        showNitroDivider: o,
        canRenderFavoritesUpsell: d,
      } = e,
      c = r.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        o && (0, i.jsx)(et.Ay, { className: tm.yH }),
        (0, i.jsx)("div", {
          className: s()(tm.hd, { [tm.Jb]: l, [tm.VD]: l }),
          children: (0, i.jsx)(R.D, {
            className: tm.bV,
            onClick: a,
            onKeyDown: (e) => e.stopPropagation(),
            "aria-expanded": !n,
            children: (0, i.jsxs)("div", {
              className: tm.M2,
              ref: d ? c : void 0,
              children: [
                (function () {
                  switch (t.type) {
                    case ec.Cx.FAVORITES:
                      return (0, i.jsx)(g.StarIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: tm.nr,
                      });
                    case ec.Cx.FREQUENTLY_USED:
                      return (0, i.jsx)(S.ClockIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: tm.nr,
                      });
                    case ec.Cx.GUILD:
                      return (0, i.jsx)(w.A, { guild: t.guild, height: 16, width: 16 });
                    case ec.Cx.DEFAULTS:
                      return (0, i.jsx)(N.p, {
                        size: "custom",
                        width: 28,
                        height: 28,
                        color: "currentColor",
                        className: tm.nr,
                      });
                    case ec.Cx.SEARCH:
                      return (0, i.jsx)(C.MagnifyingGlassIcon, {
                        size: "md",
                        color: "currentColor",
                        className: tm.nr,
                      });
                    case ec.Cx.TOP_SOUNDS:
                      return (0, i.jsx)(O.TrophyIcon, {
                        size: "xs",
                        color: "currentColor",
                        className: tm.nr,
                      });
                  }
                })(),
                (0, i.jsx)(L.D, {
                  variant: "text-sm/semibold",
                  color: "none",
                  className: tm.Gf,
                  children: (function () {
                    switch (t.type) {
                      case ec.Cx.FAVORITES:
                        return eB.intl.string(eB.t.k8fFjp);
                      case ec.Cx.FREQUENTLY_USED:
                        return eB.intl.string(eB.t["+cGVV6"]);
                      case ec.Cx.GUILD:
                        return t.guild.name;
                      case ec.Cx.DEFAULTS:
                        return eB.intl.string(eB.t.Rtvk9X);
                      case ec.Cx.SEARCH:
                        return eB.intl.string(eB.t["zkoeq/"]);
                      case ec.Cx.TOP_SOUNDS:
                        return eB.intl.formatToPlainString(eB.t.GXs41w, {
                          guildName: t.guild.name,
                        });
                    }
                  })(),
                }),
                (0, i.jsx)(eo.A, {
                  className: tm.nr,
                  direction: n ? eo.A.Directions.RIGHT : eo.A.Directions.DOWN,
                }),
              ],
            }),
          }),
        }),
        d && (0, i.jsx)(eV, { targetElementRef: c }),
      ],
    });
  }
  function tC() {
    return (0, i.jsx)(b.A, { message: eB.intl.string(eB.t.bgDdNK) });
  }
  function tO(e) {
    let { className: t } = e,
      n = (0, m.bG)([f.A], () => f.A.isSoundboardVolumeMuted()) ? y._ : D.H;
    return (0, i.jsx)(n, { size: "md", color: "currentColor", className: t });
  }
  function tR(e) {
    let {
        guildId: t,
        channel: a,
        containerWidth: l,
        onClose: o,
        onSelect: _,
        shouldValidateSelectedSound: E = !1,
        suppressPlaySound: A = !1,
        shouldShowLockedSounds: h = !0,
        gridNotice: I,
        soundButtonOverlay: g,
        listPadding: S,
        renderHeader: N,
        defaultSoundsOnly: C = !1,
        inExpressionPicker: O,
        analyticsSource: L,
      } = e,
      { analyticsLocations: y } = (0, c.Ay)(),
      { analyticsLocations: b } = (0, c.Ay)(d.A.PREMIUM_UPSELL),
      { location: w } = (0, M.p)(),
      x = r.useMemo(() => ({ ...w, section: eL.JJy.SOUNDBOARD_SOUND_PICKER }), [w]),
      [k, F] = r.useState(null),
      V = (0, m.bG)([es.default], () => es.default.getCurrentUser()),
      H = (0, B.TW)(V, eb.PremiumTypes.TIER_2),
      j = (0, m.bG)([el.A], () => el.A.getVoiceState(t, V?.id ?? eL.dJq)),
      W = j?.selfDeaf || j?.mute || j?.suppress,
      Y = (0, u.RQ)((e) => e.searchQuery),
      K = null != Y && "" !== Y,
      $ = (0, U.GV)(),
      { allowReordering: z } = e_.q.useConfig({ location: "SoundboardSoundGrid" }),
      [X, Z] = r.useState(!1),
      { isDraggingFavoriteSound: et } = (0, p.V)((e) => ({
        isDraggingFavoriteSound: e.isDragging() && e.getItemType() === ev.Tj,
      })),
      eo = r.useCallback(() => {
        Z(!0);
      }, []);
    r.useEffect(() => {
      if (X)
        return (
          window.addEventListener("mousemove", e),
          () => {
            window.removeEventListener("mousemove", e);
          }
        );
      function e() {
        Z(!1);
      }
    }, [X]);
    let {
        categories: eO,
        availableSounds: eG,
        soundCounts: ex,
      } = (function (e) {
        let { filterOutEmptyCurrentGuild: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = (0, m.bG)([es.default], () => es.default.getCurrentUser()),
          a = B.Ay.isPremium(i, eb.PremiumTypes.TIER_2),
          [s, l, o, d] = (0, m.yK)([f.A], () => [
            f.A.getSounds(),
            f.A.getFavorites(),
            f.A.getFrequentlyUsedSoundIds(),
            f.A.isFetching(),
          ]),
          c = (0, eD.IJ)(),
          { sortOrder: u } = e_.q.useConfig({ location: "useSoundGrid" }),
          _ = (0, ey.Y)(e, !1),
          E = (0, m.yK)([eI.A], () => {
            let e = [];
            return (
              _.forEach((t) => {
                let n = eI.A.getGuild(t);
                null != n && e.push(n);
              }),
              e
            );
          }),
          A = B.Ay.canUseSoundboardEverywhere(i),
          h = (0, m.bG)([eI.A], () => eI.A.getGuild(e?.guild_id)),
          I = (0, m.bG)(
            [ep.A],
            () => {
              let { canCreateExpressions: e } = (0, eh.ie)(h);
              return e;
            },
            [h],
          ),
          p = r.useMemo(() => o.filter((e) => !l.has(e)).slice(0, 3), [o, l]),
          T = (0, m.bG)([eT.Ay, ef.A, eI.A], () => {
            let e = eT.Ay.getVoiceChannelId(),
              t = null != e ? ef.A.getChannel(e) : null;
            return t?.guild_id != null ? eI.A.getGuild(t.guild_id) : void 0;
          }),
          { enabled: g, topSoundsFirst: S } = eR.getConfig({ location: "useSoundGrid" });
        (0, eA.Ay)(() => {
          g &&
            (function (e) {
              var t;
              if (
                null == e ||
                null == es.default.getCurrentUser() ||
                !eR.getConfig({ location: "maybeFetchTopSoundboardSoundsByGuild" }).enabled
              )
                return;
              let n = f.A.getTopSoundboardSoundsMetadata(e);
              if (null != n) {
                let { topSoundsTTL: e } = n;
                if (null == e || Date.now() < e) return;
              }
              eC.A.getIsFetching(e) ||
                ((t = e),
                (0, eN.tZ)(t) ||
                  (eS.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH", guildId: t }),
                  eg.Bo.get({
                    url: eL.Rsh.TOP_SOUNDBOARD_SOUNDS_FOR_GUILD(t),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                  }).then(
                    (e) =>
                      eS.h.dispatch({
                        type: "TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS",
                        guildId: t,
                        topSoundsMetadata: e.body.items
                          .map((e) => ({ soundId: e.sound_id, rank: e.sound_rank }))
                          .sort((e, t) => e.rank - t.rank),
                      }),
                    () =>
                      eS.h.dispatch({ type: "TOP_SOUNDBOARD_SOUNDS_FETCH_FAILURE", guildId: t }),
                  )));
            })(T?.id);
        });
        let N = (0, m.yK)([f.A], () => f.A.getTopSoundboardSoundIds(T?.id)),
          C = r.useMemo(() => N.slice(0, 3), [N]);
        return r.useMemo(() => {
          let e = 0,
            i = 0,
            r = [];
          if (n)
            return (
              ew(r, s),
              {
                categories: r,
                availableSounds: s.get("0") ?? ev.pD,
                isFetching: d,
                soundCounts: {
                  favoriteSoundCount: 0,
                  unlockedCustomSoundCount: 0,
                  lockedCustomSoundCount: 0,
                },
              }
            );
          g && null != T && S && eU(r, T, { allSounds: s, topSoundIds: C });
          let o = "favorite-date" === u ? eD.XP : eD.U9;
          return (
            eP({
              sections: r,
              guildIds: _,
              allSounds: s,
              potentialSoundIdsForSection: Array.from(l),
              sectionType: ec.Cx.FAVORITES,
              sortSoundsFn: o,
            }),
            p.length > 0 &&
              eP({
                sections: r,
                guildIds: _,
                allSounds: s,
                potentialSoundIdsForSection: p,
                sectionType: ec.Cx.FREQUENTLY_USED,
              }),
            g && null != T && !S && eU(r, T, { allSounds: s, topSoundIds: C }),
            void 0 !== h &&
              (function (e, t, n) {
                let {
                    currentGuildHasAddPermissions: i,
                    allSounds: r,
                    filterOutEmptyCurrentGuild: a,
                    sortSoundsFn: s,
                  } = n,
                  l = r.get(t.id) ?? [],
                  o = eM(l, s),
                  d = l.length < (0, em.fA)(t) && i,
                  c = 0 === o.length;
                ((d || c) && !a && o.push({ type: ec.uq.ADD_SOUND, guild: t }),
                  (a && c) ||
                    e.push({
                      categoryInfo: { type: ec.Cx.GUILD, guild: t, isNitroLocked: !1 },
                      key: t.id,
                      items: o,
                    }));
              })(r, h, {
                currentGuildHasAddPermissions: I,
                allSounds: s,
                filterOutEmptyCurrentGuild: t,
                sortSoundsFn: c,
              }),
            A || ew(r, s),
            !(function (e) {
              let {
                sections: t,
                guilds: n,
                currentGuildId: i,
                allSounds: r,
                hasNitro: a,
                sortSoundsFn: s,
              } = e;
              for (let e of n) {
                if (e.id === i) continue;
                let n = eM(r.get(e.id) ?? [], s);
                n.length > 0 &&
                  t.push({
                    categoryInfo: { type: ec.Cx.GUILD, guild: e, isNitroLocked: !a },
                    key: e.id,
                    items: n,
                  });
              }
            })({
              sections: r,
              guilds: E,
              currentGuildId: h?.id,
              allSounds: s,
              hasNitro: a,
              sortSoundsFn: c,
            }),
            A && ew(r, s),
            r.forEach((t) => {
              t.categoryInfo.type === ec.Cx.GUILD &&
                (t.categoryInfo.isNitroLocked ? (i += t.items.length) : (e += t.items.length));
            }),
            {
              categories: r,
              availableSounds: Array.from(s.values()).flat(),
              isFetching: d,
              soundCounts: {
                favoriteSoundCount: l.size,
                unlockedCustomSoundCount: e,
                lockedCustomSoundCount: i,
              },
            }
          );
        }, [_, s, l, !0, h, I, t, A, E, n, d, a, c, p, T, C, g, S, u]);
      })(a, void 0, C),
      [ek, eF] = r.useState([]),
      eV = r.useMemo(
        () =>
          Y.length > 0
            ? [{ key: ec.Cx.SEARCH, categoryInfo: { type: ec.Cx.SEARCH }, items: eM(ek) }]
            : eO,
        [eO, Y.length, ek],
      ),
      eH = (0, u.RQ)((e) => e.isNitroLockedSectionVisible),
      ej = r.useMemo(() => eV.filter((e) => e.items.length > 0), [eV]),
      eW = r.useMemo(
        () => ej.findLastIndex((e) => !!(0, B.Em)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        [ej],
      ),
      eY = !H && h && -1 !== eW,
      eK = !H && h && -1 !== eW,
      e$ = er.b0.useSetting(),
      eX = r.useMemo(() => new Set(e$), [e$]),
      eZ = null == a,
      eq = B.Ay.canUseCustomCallSounds(V),
      eQ = r.useCallback(
        (e) => {
          (eX.has(e) ? eX.delete(e) : eX.add(e), er.b0.updateSetting(Array.from(eX)));
        },
        [eX],
      ),
      eJ = r.useCallback(
        (e, t, n, i) => {
          if (null != _ && !E) return _(e, n);
          let r = (0, eu.Ir)(V, e, a, !1);
          if (null != _ && E && r) _(e, n);
          else if (!A && r && (0, eu.Au)(a))
            ((0, eu.Ak)(e, a?.id ?? eL.dJq, t, i),
              K &&
                ed.default.track(eL.HAw.SEARCH_RESULT_SELECTED, {
                  search_type: eL.I4_.SOUNDBOARD,
                  channel_id: a?.id,
                  query: Y,
                  location_stack: t,
                }));
          else {
            if ((0, eu.Ir)(V, e, a)) return;
            h && F(e);
          }
        },
        [A, V, a, h, K, Y, _, E],
      ),
      e0 = r.useCallback(
        (e, t) => {
          switch (e.item.type) {
            case ec.uq.SOUND:
              let n = tS[e?.category] ?? null,
                i = e?.item.index;
              return eJ(e.item.sound, null == n ? y : [...y, n], t?.shiftKey !== !0, i);
            case ec.uq.ADD_SOUND:
              return (o(), th(e.item.guild.id));
          }
        },
        [y, eJ, o],
      ),
      e1 = r.useCallback(
        (e, n, r, l, o) => {
          let d = ej[r.sectionIndex],
            c = h && e6(d.categoryInfo, H, t) && eY,
            u = z && d.categoryInfo.type === ec.Cx.FAVORITES;
          return (0, i.jsx)(
            "ul",
            {
              ...n,
              className: s()(tm.a, { [tm.uL]: c }),
              children: e.map((e, t) => {
                let n =
                    e.item.type === ec.uq.SOUND &&
                    e.category === ec.Cx.FAVORITES &&
                    e.item.index === d.items.length - 1,
                  s =
                    e.item.type === ec.uq.SOUND
                      ? `sound-${e.item.sound.soundId}`
                      : `add-sound-${e.item.guild.id}`;
                return (0, i.jsx)(
                  tT,
                  {
                    descriptor: e,
                    soundButtonProps: {
                      channel: a,
                      interactive: eZ ? eq : !W,
                      forceSecondaryActions: !0,
                      analyticsLocations: y,
                      enableFavoritesDragAndDrop: u,
                      isLastFavoriteSound: n,
                      onFavoriteSoundDrop: eo,
                      disableActiveStyles: u && X,
                    },
                    rowIndex: r.rowIndex,
                    columnIndex: t,
                    isUsingKeyboardNavigation: r.isUsingKeyboardNavigation,
                    suppressPlaySound: A,
                    getItemProps: l,
                    onSelectItem: e0,
                    onItemMouseEnter: o,
                    buttonOverlay: g,
                    isNitroLocked: c,
                    showLockForDisabledSound: h,
                    inExpressionPicker: O,
                  },
                  s,
                );
              }),
            },
            `row-${n["aria-rowindex"]}`,
          );
        },
        [ej, h, H, t, A, e0, a, eZ, eq, W, y, g, eY, O, z, eo, X],
      ),
      e2 = r.useCallback(
        (e, t) => {
          if (e <= 0 || !h) return !1;
          let n = ej[e],
            i = ej[e - 1],
            r = e6(n.categoryInfo, H, t),
            a = e6(i.categoryInfo, H, t);
          return r && !a;
        },
        [ej, h, H],
      ),
      e5 = r.useCallback(() => {
        let e = f.A.getSoundById("3");
        null != e && F(e);
      }, []),
      e4 = r.useCallback(() => {
        let e = (0, B.Dd)(eb.PremiumTypes.TIER_2);
        return eB.intl.format(eB.t["tw/SSq"], { nitroTierName: e, onClick: e5 });
      }, [e5]),
      e7 = r.useCallback((e) => (e2(e, t) ? tg : 32), [t, e2]),
      e8 = r.useCallback(
        (e) => {
          let t = e === ej.length - 1;
          return eK && t ? 70 : eY && e === eW ? 20 : 0;
        },
        [ej.length, eY, eK, eW],
      ),
      e9 = r.useCallback(
        (e, t) => {
          let n = et && ej[e]?.categoryInfo.type !== ec.Cx.FAVORITES;
          return (0, i.jsx)("div", { className: s()({ [tm.YJ]: n }), children: t }, e);
        },
        [ej, et],
      ),
      te = r.useCallback(
        (e, n) => {
          let r = `${e.key}`,
            a = h && e6(e.categoryInfo, H, t),
            s = e2(n, t),
            l = eX.has(r);
          return (0, i.jsx)(
            tN,
            {
              categoryInfo: e.categoryInfo,
              toggleCollapsed: function () {
                (ed.default.track(eL.HAw.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                  location: { page: eL.liQ.SOUNDBOARD_POPOUT },
                  tab: ez.kx.SOUNDBOARD,
                  guild_id: t ?? null,
                  collapsed: !l,
                  sticker_pack_id: null,
                  num_expressions: e.items.length,
                }),
                  eQ(r));
              },
              collapsed: l,
              isSectionNitroLocked: a && eY,
              showNitroDivider: s && eY,
              canRenderFavoritesUpsell:
                z && e.items.length > 1 && e.categoryInfo.type === ec.Cx.FAVORITES,
            },
            `header-${r}`,
          );
        },
        [eX, eQ, t, e2, h, H, eY, z],
      ),
      tt = r.useCallback(
        (e, t) => {
          let n = t === ej.length - 1,
            r = t === eW;
          return eK && n
            ? (0, i.jsx)("div", { className: s()(tm.Lk, { [tm.Ns]: r }) })
            : eY && t === eW
              ? (0, i.jsx)("div", { className: s()(tm.a3, { [tm.Ns]: r }) })
              : null;
        },
        [eW, eY, eK, ej.length],
      ),
      tn = r.useCallback((e) => eF((0, eE.lG)(e, eG, V, a, y)), [a, V, eG, y]),
      ti = r.useCallback(
        (e) => {
          (0, v.L3)(e, async () => {
            let { default: e } = await n.e("811562").then(n.bind(n, 666801));
            return (t) => (0, i.jsx)(e, { sourceAnalyticsLocations: y, ...t });
          });
        },
        [y],
      ),
      tr = r.useCallback(
        () =>
          O
            ? (0, i.jsx)(J.Gq, {
                renderPopout: () => (0, i.jsx)(J.qn, {}),
                tooltipText: eB.intl.string(eB.t["19lt24"]),
                position: "top",
                clickableClassName: s()(tm.Jm, tm.Zz),
                children: (0, i.jsx)(D.H, { size: "md", color: "currentColor", className: tm.By }),
              })
            : (0, i.jsx)(R.D, {
                tabIndex: 0,
                className: tm.Jm,
                onClick: ti,
                "aria-label": eB.intl.string(eB.t.kbFsAD),
                children: (0, i.jsx)(tO, { className: tm.By }),
              }),
        [O, ti],
      ),
      ta = r.useCallback(
        (e) =>
          (0, i.jsx)(e3, {
            soundboardListRef: e,
            categories: eO,
            shouldUpsellLockedCategories: eY,
            listPadding: S,
            guildId: t,
            inExpressionPicker: O,
          }),
        [eO, S, eY, t, O],
      ),
      ts = r.useCallback(() => {
        let e = (0, Q.qD)();
        return (0, B.LE)(e, eb.pe.TIER_2) ?? eB.intl.string(eB.t.pj0XBN);
      }, []),
      tl = r.useCallback(
        () =>
          eK
            ? (0, i.jsx)(ee.d, {
                showUpsell: eH,
                text: e4(),
                button: ts(),
                buttonAnalyticsObject: { section: eL.JJy.SOUND_PICKER_FLOATING_UPSELL },
                leadingAction: (0, i.jsx)(en.l, {
                  size: "sm",
                  className: tm.ij,
                  location: d.A.PREMIUM_WISHLIST_SOUNDBOARD_UPSELL,
                  forceDarkTheme: !0,
                }),
              })
            : null,
        [e4, ts, eK, eH],
      ),
      to = r.useCallback(
        (e) =>
          e?.item.type === ec.uq.SOUND
            ? (0, i.jsx)(tc, { closePicker: o, soundboardSound: e?.item.sound ?? null })
            : null,
        [o],
      ),
      td = (0, m.bG)([ea.A], () => ea.A.getMediaSessionId());
    return (
      (0, P.A)({
        type: T.ImpressionTypes.POPOUT,
        name: T.ImpressionNames.SOUNDBOARD_POPOUT,
        properties: {
          source: L,
          guild_id: t,
          media_session_id: td,
          available_custom_sounds_count: ex.unlockedCustomSoundCount,
          unavailable_custom_sounds_count: ex.lockedCustomSoundCount,
          favorite_sounds_count: ex.favoriteSoundCount,
          type: ev.c4.FULL_PICKER,
        },
      }),
      (0, i.jsxs)(i.Fragment, {
        children: [
          null != k
            ? (0, i.jsx)(ei.A, {
                title: eB.intl.string(O ? eB.t.rZEEvU : eB.t.jGDYF0),
                description: eB.intl.string(O ? eB.t.ZPNG5A : eB.t["grL/hg"]),
                analyticsLocationSection: eL.JJy.SOUNDBOARD_SOUND_PICKER_UPSELL,
                upsellViewedTrackingData: {
                  type: eb.e.SOUND_PICKER_SOUND_CLICKED,
                  is_external: !0,
                  location: { ...x, object: eL.ZSU.SOUNDBOARD_SOUND },
                  location_stack: b,
                  sku_id: B.Ay.getSkuIdForPremiumType(eb.PremiumTypes.TIER_2),
                  voice_guild_id: ea.A.getGuildId(),
                },
                onClose: () => F(null),
                onUpsellClicked: o,
              })
            : void 0,
          (0, i.jsx)(q, {
            categories: ej,
            collapsedCategories: eX,
            containerWidth: l,
            store: G.LW,
            onSelectItem: e0,
            onSearchExpressions: tn,
            hasSearchResults: ek.length > 0,
            defaultSearchPlaceholder: eB.intl.string(eB.t.sKt3xS),
            renderRow: e1,
            renderSectionHeader: te,
            renderSectionFooter: tt,
            renderSection: e9,
            renderCategoryList: ta,
            renderHeaderAccessories: tr,
            rowHeight: 48,
            sectionHeaderHeight: e7,
            sectionFooterHeight: e8,
            itemNodeWidth: 150,
            gridNavigatorId: $,
            renderEmptySearchState: tC,
            renderInspector: to,
            gridNotice: I,
            renderHeader: N,
            renderUpsell: tl,
          }),
        ],
      })
    );
  }
  var tL = n(70317);
  function ty(e) {
    let {
        guildId: t,
        channel: n,
        containerWidth: a,
        onClose: p,
        onSelect: T,
        analyticsSource: m,
        suppressPlaySound: g,
        shouldValidateSelectedSound: S,
        shouldShowLockedSounds: N = !0,
        gridNotice: C,
        inExpressionPicker: O,
        soundButtonOverlay: R,
        listPadding: L,
        renderHeader: y,
        defaultSoundsOnly: D,
      } = e,
      { fetching: v, maybeFetchData: b } = {
        fetching: (0, E.bG)([f.A], () => f.A.isFetchingAnySounds()),
        maybeFetchData: r.useCallback(() => {
          (h.E7(), A.bW.loadIfNecessary());
        }, []),
      },
      { analyticsLocations: M } = (0, c.Ay)(d.A.SOUNDBOARD_POPOUT),
      { enabled: P } = (0, I.W)(t ?? "0", "SoundboardSoundPicker"),
      U = O ? void 0 : { height: 520 };
    return (
      r.useEffect(() => {
        b();
      }, [b]),
      r.useEffect(() => {
        O || (0, u.Ri)("");
      }, [O]),
      (0, i.jsx)(c.f5, {
        value: M,
        children: (0, i.jsxs)(l.l, {
          style: U,
          className: s()(tL.Nz, { [tL.Bg]: v, [tL.yV]: O }),
          children: [
            null != t && n?.id != null && P
              ? (0, i.jsx)(_.A, { guildId: t, channelId: n.id })
              : null,
            v
              ? (0, i.jsx)(o.y, {})
              : (0, i.jsx)(tR, {
                  guildId: t,
                  channel: n,
                  onClose: p,
                  onSelect: T,
                  shouldValidateSelectedSound: S,
                  containerWidth: a,
                  suppressPlaySound: g,
                  shouldShowLockedSounds: N,
                  gridNotice: C,
                  soundButtonOverlay: R,
                  listPadding: L,
                  renderHeader: y,
                  defaultSoundsOnly: D,
                  inExpressionPicker: O,
                  analyticsSource: m,
                }),
          ],
        }),
      })
    );
  }
}
