/* Recovered shipped factory. Module 479909.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3331009..3364031
 * Raw property SHA-256: be987da7a3843a7e0f33cc7db47694734506606226070fe71d8c726658ea32b2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    C: () => t6,
    Sk: () => ne,
    Zx: () => t1,
    v7: () => t7,
    L0: () => t8,
    N_: () => t5,
    MD: () => nt,
    Ay: () => ni,
    uW: () => nn,
    NO: () => t3,
    ck: () => t9,
    ml: () => t4,
    Vu: () => t2,
  });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(143236),
    o = n(284009),
    d = n.n(o),
    c = n(462180),
    u = n(607399),
    _ = n(136722),
    E = n(17928),
    A = n(192308),
    h = n(559106),
    f = n(281595),
    I = n(465532),
    p = n(765671),
    T = n(775602),
    m = n(793574),
    g = n(688810),
    S = n(177640),
    N = n(989837),
    C = n(289873),
    O = n(268218),
    R = n(750506),
    L = n(60809),
    y = n(660183),
    D = n(836555);
  let v = { width: 500, height: L.$V },
    b = (0, O.Fe)({
      createPromise: () =>
        Promise.all([
          n.e("609019"),
          n.e("237427"),
          n.e("169727"),
          n.e("896691"),
          n.e("779367"),
          n.e("992956"),
          n.e("7452"),
          n.e("60002"),
          n.e("189423"),
          n.e("49742"),
          n.e("403382"),
          n.e("597981"),
          n.e("622936"),
          n.e("216947"),
          n.e("172727"),
          n.e("460582"),
          n.e("458098"),
          n.e("826744"),
          n.e("507528"),
          n.e("76428"),
          n.e("834552"),
          n.e("993103"),
          n.e("397270"),
          n.e("695445"),
          n.e("890027"),
          n.e("638221"),
          n.e("571210"),
          n.e("88342"),
          n.e("936320"),
          n.e("27773"),
          n.e("311802"),
          n.e("698965"),
          n.e("132191"),
          n.e("37977"),
          n.e("354044"),
          n.e("682337"),
          n.e("437065"),
          n.e("538887"),
          n.e("235313"),
          n.e("454625"),
          n.e("636373"),
          n.e("726033"),
          n.e("655708"),
          n.e("371133"),
          n.e("280854"),
          n.e("335395"),
          n.e("408362"),
          n.e("715038"),
          n.e("252229"),
          n.e("653849"),
          n.e("522261"),
          n.e("678195"),
          n.e("472289"),
          n.e("918024"),
          n.e("774021"),
          n.e("341701"),
          n.e("639163"),
          n.e("583518"),
          n.e("499118"),
          n.e("336611"),
          n.e("322094"),
          n.e("761764"),
          n.e("915086"),
          n.e("68974"),
          n.e("556385"),
          n.e("291220"),
          n.e("211584"),
          n.e("135621"),
        ]).then(n.bind(n, 854379)),
      webpackId: 854379,
      renderLoader: () =>
        (0, i.jsx)("div", { className: D.R4, style: v, children: (0, i.jsx)(C.y, {}) }),
    }),
    M = { height: L.$V },
    P = r.memo(function (e) {
      let { positionTargetRef: t, align: n, ...r } = e;
      return (0, i.jsx)("span", {
        style: L.sK,
        children: (0, i.jsx)(R.nE, {
          className: D.T8,
          targetRef: t,
          position: "top",
          align: n ?? "right",
          spacing: 24,
          autoInvert: !0,
          nudgeAlignIntoViewport: !0,
          clickTrap: !0,
          children: (e) => {
            let { isPositioned: t } = e;
            return (0, i.jsx)("section", {
              className: D.V6,
              role: "dialog",
              style: M,
              "aria-label": y.intl.string(y.t["3CNGLK"]),
              children: t && (0, i.jsx)(b, { ...r }),
            });
          },
        }),
      });
    });
  var U = n(861382),
    w = n(435558),
    G = n.n(w),
    x = n(537652),
    k = n(155718),
    F = n(666860),
    B = n(659280),
    V = n(579940),
    H = n(962125),
    j = n(915089),
    W = n(850992),
    Y = n(887695),
    K = n(286509),
    $ = n(721768),
    z = n(842209),
    X = n(210978),
    Z = n(392054),
    q = n(168186),
    Q = n(866665),
    J = n(939249),
    ee = n(88218),
    et = n(664929),
    en = n(934305);
  let ei = [16, 8, 8, 8];
  function er(e) {
    let {
        className: t,
        channel: n,
        sections: a,
        activeCategoryIndex: l,
        filteredSectionId: o,
        onSectionClick: d,
        applicationCommandListRef: c,
      } = e,
      u = r.useRef(null),
      _ = r.useCallback(
        (e, t) => {
          let n = 8;
          return (a[t + 1]?.type === Z.Hf.BUILT_IN && (n += 8), 32 + n);
        },
        [a],
      ),
      E = r.useCallback(
        (e, t) => (t ? 8 * (a[e + 1]?.type !== Z.Hf.BUILT_IN) : 8 * (0 !== e)),
        [a],
      ),
      A = r.useCallback(
        (e, t) => {
          let r = a[t];
          if (null == r) return;
          let s = (0, et.Rg)(r),
            c = 4 * (r.type === Z.Hf.BUILT_IN),
            u = 32 - 2 * c,
            _ = (0, i.jsx)(s, {
              channel: n,
              section: r,
              isSelected: null != o ? r.id === o : l === t,
              padding: c,
              width: u,
              height: u,
              selectable: !0,
            }),
            E = r.type !== Z.Hf.BUILT_IN && t < a.length - 1 && a[t + 1].type === Z.Hf.BUILT_IN;
          return (0, i.jsxs)(
            "div",
            {
              className: en.uW,
              children: [
                (0, i.jsx)(Q.m, {
                  text: r.name,
                  position: "right",
                  asContainer: !0,
                  children: (0, i.jsx)(J.D, {
                    "aria-label": r.name,
                    onClick: () => {
                      d(r);
                    },
                    children: _,
                  }),
                }),
                E ? (0, i.jsx)("hr", { className: en.zQ }) : null,
              ],
            },
            r.id,
          );
        },
        [l, n, d, a, o],
      );
    return 0 === a.length
      ? null
      : (0, i.jsx)("div", {
          className: s()(t, en.iE),
          children: (0, i.jsx)(ee.A, {
            categoryListRef: u,
            expressionsListRef: c,
            store: W.LS,
            categories: a,
            className: en.p_,
            renderCategoryListItem: A,
            rowCount: a.length,
            categoryHeight: _,
            listPadding: ei,
            getScrollOffsetForIndex: E,
          }),
        });
  }
  var ea = n(524007),
    es = n(73510),
    el = n(652215),
    eo = n(643904);
  let ed = [8, 8, 0, 8],
    ec = G().debounce(() => {
      (0, F.zV)(el.HAw.APPLICATION_COMMAND_BROWSER_SCROLLED);
    }, 300);
  function eu(e) {
    let { channel: t, canOnlyUseTextCommands: n, ref: a } = e,
      l = r.useRef(!1),
      o = r.useRef(0),
      [d, c] = r.useState(0),
      u = r.useRef(null),
      [_, E] = r.useState(!1),
      A = W.LS.useStore((e) => e.activeCategoryIndex);
    r.useEffect(() => {
      (0, F.zV)(el.HAw.APPLICATION_COMMAND_BROWSER_OPENED);
    }, []);
    let {
        sectionDescriptors: h,
        activeSections: f,
        commandsByActiveSection: I,
        hasMoreAfter: p,
        commands: T,
        filteredSectionId: m,
        scrollDown: g,
        filterSection: S,
      } = z.cu({
        context: { channel: t, type: "channel" },
        filters: {
          commandTypes: [k.kc.CHAT],
          builtIns: n ? X.n.ONLY_TEXT : X.n.ALLOW,
          applicationCommands: !n,
        },
        options: { placeholderCount: 7, limit: es.Hi, includeFrecency: !0 },
        allowFetch: !0,
      }),
      N = (0, Y.Fk)({
        activeCategoryIndex: A,
        isScrolling: l,
        listRef: u,
        onActiveCategoryIndexChange: (e) => {
          let t = f[e];
          if (null != t) {
            let e = h.findIndex((e) => e.id === t.id);
            W.LS.setActiveCategoryIndex(e);
          }
        },
        scrollOffset: 20,
        searchQuery: "",
      });
    function C(e) {
      let t = f.length,
        n = I.reduce((e, t) => e + t.data.length, 0) - 7 * !!p;
      (p && e + 420 > 48 * t + 56 * n - 512 && g(), N(e), ec(), (o.current = e));
    }
    let O = r.useRef(C);
    (r.useEffect(() => {
      O.current = C;
    }),
      r.useEffect(() => {
        O.current(o.current);
      }, [T]));
    let R = r.useCallback((e) => (e !== f.length - 1 || p ? 16 : 0), [f.length, p]),
      L = I.map((e) => e.data.length);
    (r.useEffect(() => {
      null != u.current && _ && null != d && u.current.scrollRowIntoView(d);
    }, [_, d]),
      r.useLayoutEffect(() => {
        null != m && u.current?.scrollToSectionTop(0);
      }, [T, m]));
    let D = r.useCallback(
        (e) => {
          e.id === m || e.id === es.Ik.FRECENCY
            ? (S(null), u.current?.scrollToSectionTop(0))
            : S(e.id);
        },
        [S, m],
      ),
      v = r.useCallback(
        (e, n, i) => {
          $.Gf({
            channelId: t.id,
            command: e,
            section: n,
            location: Z.Oh.DISCOVERY,
            triggerSection: i,
          });
        },
        [t.id],
      );
    r.useImperativeHandle(
      a,
      () => ({
        onTabOrEnter: (e) => {
          if (null == d) return !e && (c(0), !0);
          if (null == d) return !1;
          let t = 0,
            n = 0;
          for (let e of I)
            if (((t = n), d < (n += e.data.length))) {
              let n = e.data[d - t],
                i = h.find((e) => e.id === n.applicationId);
              v(n, i, (0, q.$S)(e.section));
              break;
            }
          return !0;
        },
        onMoveSelection: (e) => {
          if (0 === T.length) return !0;
          let t = 7 * !!p,
            n = T.length + t,
            i = null == d ? 0 : d + e;
          return (i >= n ? (i = n - 1) : i < 0 && (i = 0), c(i), E(!0), !0);
        },
      }),
      [T.length, I, p, h, v, d],
    );
    let b = r.useCallback(
        (e) => {
          let n = f[e];
          if (null == n) return null;
          let r = (0, et.Rg)(n),
            a = (0, i.jsx)(r, { channel: t, section: n, width: 16, height: 16, padding: 0 });
          return (0, i.jsx)(K.A, { className: eo.Km, icon: a, children: n.name }, e);
        },
        [t, f],
      ),
      M = r.useCallback(
        (e, t) => {
          let n = e === f.length - 1,
            r = f[e],
            { data: a } = I[e];
          return (0, i.jsxs)(
            "ul",
            {
              role: "group",
              "aria-label": r.name,
              className: s()(eo.Wy, { [eo.YD]: n }),
              children: [
                t,
                0 === a.length &&
                  (0, i.jsx)(x.A, {
                    message: y.intl.format(y.t.WoQXT6, { applicationName: r.name }),
                    className: eo.qK,
                  }),
              ],
            },
            e,
          );
        },
        [f, I],
      ),
      P = r.useCallback(
        (e, n) => {
          let r = I[n.sectionIndex],
            a = r.data[n.sectionRowIndex],
            s = `${r.section.id}:${a?.id ?? e}`;
          if (
            null == a ||
            (r.section.id !== a.applicationId && r.section.id !== es.Ik.FRECENCY) ||
            a.inputType === Z.y$.PLACEHOLDER
          )
            return (0, i.jsx)(ea.A, {}, s);
          let l = h.find((e) => e.id === a.applicationId);
          return (0, i.jsx)(
            B.Ay.NewCommand,
            {
              index: e,
              command: a,
              channel: t,
              className: eo.D5,
              selected: d === e,
              showImage: r.section.id !== a.applicationId,
              section: l,
              onClick: () => v(a, l, (0, q.$S)(r.section)),
              onHover: () => {
                (c(null), E(!1));
              },
            },
            s,
          );
        },
        [t, I, v, h, d],
      ),
      U = (0, j.GV)();
    return (
      (0, V.gf)(U, !0, (0, B.aI)(d)),
      r.useEffect(
        () => () => {
          (0, V.nQ)();
        },
        [],
      ),
      (0, i.jsxs)(B.Ay, {
        id: U,
        className: eo.x9,
        innerClassName: eo.iE,
        onMouseDown: e_,
        children: [
          (0, i.jsx)(er, {
            className: eo.H$,
            channel: t,
            sections: h,
            filteredSectionId: m,
            activeCategoryIndex: A,
            onSectionClick: D,
            applicationCommandListRef: u,
          }),
          (0, i.jsx)(H.A, {
            role: "listbox",
            className: eo.p_,
            listPadding: ed,
            onScroll: C,
            renderRow: P,
            renderSection: M,
            renderSectionHeader: b,
            rowCount: f.length,
            rowCountBySection: L,
            rowHeight: 56,
            sectionHeaderHeight: 32,
            sectionMarginBottom: R,
            ref: u,
            stickyHeaders: !0,
          }),
        ],
      })
    );
  }
  function e_(e) {
    e.preventDefault();
  }
  var eE = n(702841),
    eA = n(305070),
    eh = n(31498),
    ef = n(598071),
    eI = n(151271),
    ep = n(573853),
    eT = n(256265),
    em = n(336807),
    eg = n(857071),
    eS = n(135621),
    eN = n(105330),
    eC = n(280450),
    eO = n(559908),
    eR = n(620141),
    eL = n(224964),
    ey = n(31408),
    eD = n(536283);
  function ev(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
      a = r.useRef(n),
      s = (0, eN.l)({ editorHeight: t }),
      l = (0, eL.A)(),
      o = (0, E.bG)([eO.Ay, eC.default], () => eO.Ay.isComboing(eC.default.getId(), i)),
      d = s?.left ?? 0,
      c = (s?.top ?? 0) - 16,
      u = 0 === n.length,
      _ = r.useMemo(() => 0.05 > Math.random(), [u]);
    return (
      r.useEffect(() => {
        0 !== n.length &&
          n !== a.current &&
          o &&
          (l.fire(d, c, _ ? { sprite: eD.dR } : null), (a.current = n));
      }, [n, o, d, c, _, l]),
      null
    );
  }
  function eb(e) {
    return (0, i.jsx)(eR.A, {
      confettiLocation: ey.k.CHAT_INPUT,
      children: (0, i.jsx)(ev, { ...e }),
    });
  }
  var eM = n(931664),
    eP = n(631576),
    eU = n(522602);
  let ew = /(!|\.|;|,|-|\u2014|\u2013|\?|"|')/g,
    eG = /(\n|\t|\s)/g;
  var ex = n(194004),
    ek = n(406704),
    eF = n(885386),
    eB = n(951260),
    eV = n(696451),
    eH = n(576705),
    ej = n(309010),
    eW = n(638128),
    eY = n(287809),
    eK = n(821102),
    e$ = n(174459),
    ez = n(234320),
    eX = n(625494),
    eZ = n(488926),
    eq = n(723702),
    eQ = n(486319),
    eJ = n(355622),
    e0 = n(392553),
    e1 = n(834730),
    e2 = n(140735),
    e3 = n(176781),
    e6 = n(463930),
    e5 = n(935063),
    e4 = n(73392),
    e7 = n(650019),
    e8 = n(763754),
    e9 = n(967144),
    te = n(118517),
    tt = n(976860),
    tn = n(747926),
    ti = n(232835),
    tr = n(285796),
    ta = n(595347);
  function ts(e) {
    let { onClick: t, "aria-label": n } = e;
    return (0, i.jsx)(J.D, {
      className: ta.b,
      onClick: t,
      "aria-label": n,
      children: (0, i.jsx)(tr.a, { size: "md", color: "currentColor", className: ta.u }),
    });
  }
  var tl = n(558497);
  let to = "channel-reply-bar-a11y-description";
  function td(e) {
    let { channel: t, message: n, replyChainLength: a } = e,
      s = r.useRef(a);
    return (
      r.useEffect(() => {
        s.current = a;
      }),
      r.useEffect(() => {
        (0, F.zV)(el.HAw.THREAD_NUDGE_SHOWN, {
          type: "Reply Chain (3)",
          reply_chain_length: s.current + 1,
          channel_id: t.id,
          guild_id: t.guild_id,
        });
      }, [t]),
      (0, i.jsxs)(J.D, {
        onClick: function () {
          ((0, te.Jx)(t.id), (0, tn.Tv)(t, n, "Reply Chain Nudge"));
        },
        className: tl._r,
        focusProps: { offset: { right: -4, left: -4 } },
        children: [
          (0, i.jsx)(e1.E, {
            color: "text-default",
            className: tl.Qq,
            variant: "text-sm/normal",
            children: y.intl.format(y.t.B3V0FM, { count: Math.min(10, a + 1) }),
          }),
          (0, i.jsx)(e1.E, {
            color: "text-link",
            className: tl.NG,
            variant: "text-sm/semibold",
            children: y.intl.string(y.t.rBIGBL),
          }),
        ],
      })
    );
  }
  function tc(e) {
    let t,
      n,
      { reply: a, chatInputType: l } = e,
      { channel: o, message: d, shouldMention: c, showMentionToggle: u, mediaMention: _ } = a,
      {
        guildId: A,
        nick: h,
        colorString: f,
        colorStrings: I,
        colorRoleName: p,
        authorId: T,
        displayNameStyles: m,
      } = (0, e8.Ay)(d),
      g = (0, e9.gn)(A, T, I),
      S = (0, e4.a)({ displayNameStyles: m }),
      N = (0, e7.A)(_, d.attachments),
      C =
        ((t = o.id),
        (n = d.id),
        (0, E.bG)(
          [ti.A],
          () => {
            let e = n;
            for (let n = 0; n < 10; n++) {
              let i = ti.A.getMessage(t, e);
              if (i?.type !== el.lAJ.REPLY || null == i.messageReference) return n;
              e = i.messageReference.message_id;
            }
            return 10;
          },
          [t, n],
        )),
      O = (0, ek.n)(o, d),
      R = l.showThreadPromptOnReply && C >= 2 && O;
    return (0, i.jsx)("div", {
      className: tl.e1,
      children: (0, i.jsxs)("div", {
        className: tl.kL,
        children: [
          (0, i.jsxs)("div", {
            className: tl.eU,
            children: [
              (0, i.jsx)(e2.A, {
                id: to,
                children: y.intl.formatToPlainString(y.t.EpJL4E, { username: h }),
              }),
              (0, i.jsx)(J.D, {
                onClick: function () {
                  return (0, tt.pX)(el.BVt.CHANNEL(o.getGuildId(), o.id, d.id));
                },
                focusProps: { offset: { top: -8, right: -4, bottom: -8, left: -4 } },
                children: (0, i.jsx)(e1.E, {
                  color: "text-default",
                  className: s()(tl.Qq, tl.Fn),
                  variant: "text-sm/normal",
                  children: y.intl.format(y.t["8E4GxS"], {
                    userHook: (e, t) =>
                      (0, i.jsxs)(
                        r.Fragment,
                        {
                          children: [
                            "\xa0",
                            N?.title != null
                              ? (0, i.jsxs)("span", {
                                  className: tl.H8,
                                  children: [
                                    N.isClip &&
                                      (0, i.jsx)(e3.x, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: tl.gS,
                                      }),
                                    (0, i.jsx)(e1.E, {
                                      variant: "text-sm/semibold",
                                      color: "text-default",
                                      className: tl.NV,
                                      children: N.title,
                                    }),
                                    (0, i.jsxs)(e1.E, {
                                      variant: "text-sm/normal",
                                      color: "text-link",
                                      children: ["@", N.timestamp],
                                    }),
                                  ],
                                })
                              : (0, i.jsx)(e6.g, {
                                  className: tl.UU,
                                  name: h,
                                  colorString: f,
                                  colorStrings: g,
                                  roleName: p,
                                  displayNameStylesFont: S,
                                }),
                          ],
                        },
                        t,
                      ),
                  }),
                }),
              }),
              (0, i.jsxs)("div", {
                className: tl.o1,
                children: [
                  u &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(Q.m, {
                          asContainer: !0,
                          text: c ? y.intl.string(y.t.DH2o6R) : y.intl.string(y.t.utGGIY),
                          children: (0, i.jsx)(J.D, {
                            role: "switch",
                            "aria-checked": c,
                            onClick: function (e) {
                              (e.stopPropagation(), (0, te.vz)(o.id, !c));
                            },
                            children: (0, i.jsxs)(e1.E, {
                              variant: "text-sm/bold",
                              color: c ? "text-link" : "text-muted",
                              className: tl.Z4,
                              children: [
                                (0, i.jsx)(e5.X, {
                                  size: "md",
                                  color: "currentColor",
                                  "aria-label": y.intl.string(y.t.P8tvKG),
                                  className: tl.mM,
                                }),
                                c ? y.intl.string(y.t.p9jC2r) : y.intl.string(y.t.U7f3bK),
                              ],
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", { className: tl.me, "aria-hidden": !0 }),
                      ],
                    }),
                  (0, i.jsx)(ts, {
                    onClick: function (e) {
                      (e.stopPropagation(), (0, te.Jx)(o.id));
                    },
                    "aria-label": y.intl.string(y.t.jSnJGT),
                  }),
                ],
              }),
            ],
          }),
          R && (0, i.jsx)(td, { channel: o, message: d, replyChainLength: C }),
        ],
      }),
    });
  }
  var tu = n(749314),
    t_ = n(148355),
    tE = n(218782);
  let tA = r.memo(function (e) {
    let { channelId: t, chatInputType: n } = e,
      [a, s] = r.useState(null),
      l = (0, E.bG)([eM.A], () => eM.A.getStickerPreview(t, n.drafts.type));
    return n.stickers?.allowSending && null != l && 0 !== l.length
      ? (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: tE.Tz,
              children: l.map((e) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className: tE.dp,
                    children: [
                      (0, i.jsx)(J.D, {
                        onFocus: () => s(e.id),
                        onBlur: () => s(null),
                        className: tE.b,
                        "aria-label": y.intl.formatToPlainString(y.t.BGAQRd, { name: e.name }),
                        onClick: () => (0, eP.x5)(t, n.drafts.type),
                        children: (0, i.jsx)("div", {
                          className: tE.Nk,
                          children: (0, i.jsx)(tr.a, {
                            size: "md",
                            color: "currentColor",
                            className: tE.ut,
                          }),
                        }),
                      }),
                      (0, i.jsx)(t_.A, {
                        isInteracting: a === e.id,
                        className: tE.UV,
                        size: 48,
                        sticker: e,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            (0, i.jsx)(tu.A, { className: tE.R }),
          ],
        })
      : null;
  });
  var th = n(612394);
  n(321073);
  var tf = n(442433);
  n(827669);
  var tI = n(811559);
  function tp(e) {
    let t,
      a,
      l,
      { className: o, activeCommand: d, activeOption: c, optionStates: u, channelId: _ } = e,
      E = r.useCallback(
        (e) => {
          let t = d?.rootCommand?.id;
          null == t
            ? e.preventDefault()
            : (0, tf.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("638221"), n.e("715687")]).then(
                  n.bind(n, 646938),
                );
                return (n) => (0, i.jsx)(e, { ...n, id: t, label: y.intl.string(y.t.oJ1Muw) });
              });
        },
        [d?.rootCommand?.id],
      ),
      A = r.useCallback(() => {
        $.Gf({ channelId: _, command: null, section: null });
      }, [_]);
    if (null == d) return null;
    if (null != c) {
      let e = u[c.name].lastValidationResult;
      ((t = c.displayName), (a = c.displayDescription), (l = e?.success ? null : e?.error));
    } else ((t = `/${d.displayName}`), (a = d.displayDescription), (l = null));
    return (0, i.jsxs)("div", {
      className: s()(o, tI.M0),
      onContextMenu: E,
      children: [
        (0, i.jsxs)("div", {
          className: tI.iz,
          children: [
            (0, i.jsx)(e1.E, {
              variant: "text-md/semibold",
              color: "interactive-text-active",
              tag: "span",
              children: t,
            }),
            null != l
              ? (0, i.jsx)("span", { className: tI.z3, children: l })
              : (0, i.jsx)("span", { className: tI.h_, children: a }),
          ],
        }),
        (0, i.jsx)("div", {
          className: tI.o1,
          children: (0, i.jsx)(ts, { onClick: A, "aria-label": y.intl.string(y.t.cpT0Cq) }),
        }),
      ],
    });
  }
  var tT = n(73153),
    tm = n(734057);
  let tg = new Set();
  class tS extends E.Ay.PersistedStore {
    static displayName = "PTOStore";
    static persistKey = "PTOStore";
    initialize(e) {
      (this.waitFor(tm.A, eV.Ay, ej.Ay, eY.default), null != e && (tg = new Set(e)));
    }
    hasId(e) {
      return tg.has(e);
    }
    getState() {
      return [...tg];
    }
  }
  let tN = new tS(tT.h, {});
  function tC() {
    let e = ej.Ay.getChannelId();
    if (null == e) return;
    let t = tm.A.getChannel(e);
    null != t &&
      t.isPrivate() &&
      (tg.has(t.getRecipientId()) || (tg.add(t.getRecipientId()), tN.emitChange()));
  }
  function tO() {
    return (0, i.jsxs)("div", {
      className: tl.eU,
      children: [
        (0, i.jsx)(e1.E, {
          variant: "text-sm/medium",
          className: s()(tl.Qq, tl.Fn),
          children: y.intl.string(y.t["2UvR1E"]),
        }),
        (0, i.jsx)("div", {
          className: tl.o1,
          children: (0, i.jsx)(ts, { onClick: tC, "aria-label": y.intl.string(y.t.cpT0Cq) }),
        }),
      ],
    });
  }
  var tR = n(541188);
  function tL(e) {
    let { error: t } = e;
    return (0, i.jsxs)("div", {
      className: tR.M,
      children: [
        (0, i.jsx)(e1.E, {
          variant: "text-xs/bold",
          color: "text-strong",
          children: y.intl.string(y.t["4VDCG0"]),
        }),
        t
          ? (0, i.jsx)(e1.E, {
              variant: "text-xs/medium",
              className: tR.z,
              children: y.intl.string(y.t.qNorwt),
            })
          : (0, i.jsx)(e1.E, {
              variant: "text-xs/medium",
              color: "text-muted",
              children: y.intl.string(y.t["260qZS"]),
            }),
      ],
    });
  }
  var ty = n(25201),
    tD = n(926321),
    tv = n(399482);
  function tb(e) {
    var t, n;
    let { channelId: r } = e,
      a = (0, ty.vR)(r);
    if (null == a) return null;
    let l = a.rolling,
      o =
        ((t = l),
        (n = a.results),
        t
          ? y.intl.string(y.t["x/FIRX"])
          : null == n
            ? ""
            : y.intl.formatToPlainString(y.t.xU4pF1, { total: n.reduce((e, t) => e + t, 0) }));
    return (0, i.jsx)("div", {
      className: s()(tv.kL, { [tv.Kd]: !a.dismissing }),
      children: (0, i.jsxs)("div", {
        className: tv.Qs,
        children: [
          (0, i.jsx)(tD.DiceIcon, { size: "md", className: s()({ [tv.su]: l }) }),
          (0, i.jsx)(e1.E, { color: "text-default", variant: "text-sm/normal", children: o }),
        ],
      }),
    });
  }
  var tM = n(575293),
    tP = n(536637),
    tU = n.n(tP),
    tw = n(31717),
    tG = n(551640),
    tx = n(970244),
    tk = n(29621);
  function tF(e) {
    let { channel: t, scheduledMessageDraft: n } = e,
      { scheduledTimestamp: r } = n;
    return (0, i.jsx)("div", {
      className: tk.e1,
      children: (0, i.jsx)("div", {
        className: tk.kL,
        children: (0, i.jsxs)("div", {
          className: tk.g3,
          children: [
            (0, i.jsx)(J.D, {
              className: tk.a3,
              "aria-label": y.intl.string(y.t.SBcdAN),
              onClick: function () {
                (0, tx.e0)({
                  channel: t,
                  defaultValue: tU()(r),
                  entryPoint: tG.t.COMPOSER_BAR,
                  isEditing: !0,
                });
              },
              children: (0, i.jsx)(e1.E, {
                color: "text-default",
                className: tk.Qq,
                variant: "text-sm/normal",
                children: y.intl.formatToPlainString(y.t["MQcRX/"], {
                  timestamp: new Date(r).valueOf(),
                }),
              }),
            }),
            (0, i.jsx)("div", {
              className: tk.o1,
              children: (0, i.jsx)(ts, {
                onClick: function (e) {
                  (e.stopPropagation(), I.A.clearDraft(t.id, tw.C.ScheduledMessage));
                },
                "aria-label": y.intl.string(y.t.cpT0Cq),
              }),
            }),
          ],
        }),
      }),
    });
  }
  var tB = n(495088);
  function tV(e) {
    let { bars: t } = e,
      n = t.stacked.map((e, t) => (0, i.jsx)("div", { children: e }, t)),
      a = t.floating.map((e, t) => (0, i.jsx)(r.Fragment, { children: e }, t));
    return 0 === n.length && 0 === a.length
      ? null
      : (0, i.jsxs)(r.Fragment, {
          children: [
            a.length > 0 && (0, i.jsx)("div", { className: tB.Vq, children: a }),
            n.length > 0 && (0, i.jsx)("div", { className: tB.MD, children: n }),
          ],
        });
  }
  var tH = n(123583),
    tj = n(822610),
    tW = n(625928),
    tY = n(135261),
    tK = n(820066),
    t$ = n(922016),
    tz = n(375499),
    tX = n(879064),
    tZ = n(307731),
    tq = n(9287);
  function tQ(e) {
    let { getSlateEditor: t, onInsertEmoji: n, type: a, channel: s } = e,
      l = t(),
      o = r.useRef(null);
    return null == l
      ? null
      : (0, i.jsxs)("div", {
          id: "slate-toolbar",
          className: tq.aL,
          children: [
            (0, i.jsx)("div", {
              className: tq.Wy,
              children: (0, i.jsx)(tY.P, {
                slateEditor: l,
                options: a.markdown,
                iconClassName: tq.C7,
                dividerClassName: tq.us,
              }),
            }),
            (0, i.jsx)(t$.Y, {
              targetElementRef: o,
              renderPopout: function (e) {
                let { closePopout: t } = e;
                return (0, i.jsx)(tX.A, {
                  persistSearch: !0,
                  channel: s,
                  closePopout: t,
                  onSelectEmoji: (e) => {
                    let { emoji: i, willClose: r } = e;
                    (n({ emoji: i, willClose: r }), r && t());
                  },
                  pickerIntention:
                    a.expressionPicker?.emojiIntention ?? tZ.EmojiIntention.COMMUNITY_CONTENT,
                });
              },
              position: "bottom",
              animation: t$.Y.Animation.NONE,
              align: "left",
              children: (e, t) => {
                let { isShown: n } = t;
                return (0, i.jsx)(tz.A, { ...e, ref: o, active: n, className: tq.Z8, tabIndex: 0 });
              },
            }),
          ],
        });
  }
  var tJ = n(263582),
    t0 = n(698279);
  function t1(e, t, a, s, l) {
    let [o, d] = r.useState(!1),
      c = r.useCallback(
        (r, u, _, E, h, f) => {
          if (o) return;
          d(!0);
          let p = eM.A.getStickerPreview(l, t.drafts.type)?.map((e) => e.id) ?? [],
            T = eU.A.getUploads(l, t.drafts.type) ?? [];
          if (null == u && !E && !h && (0, eT.xz)(T, l)) {
            (d(!1),
              (0, A.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("686889"),
                  n.e("786830"),
                  n.e("42809"),
                  n.e("560570"),
                  n.e("896691"),
                  n.e("779367"),
                  n.e("992956"),
                  n.e("7452"),
                  n.e("60002"),
                  n.e("189423"),
                  n.e("797845"),
                  n.e("169727"),
                  n.e("313097"),
                  n.e("64097"),
                  n.e("639887"),
                  n.e("567999"),
                  n.e("272223"),
                  n.e("239729"),
                  n.e("505634"),
                  n.e("267526"),
                  n.e("801348"),
                  n.e("377016"),
                  n.e("17256"),
                  n.e("852197"),
                  n.e("225307"),
                  n.e("332165"),
                  n.e("618416"),
                  n.e("501546"),
                  n.e("849162"),
                  n.e("229511"),
                  n.e("202342"),
                  n.e("599660"),
                  n.e("452880"),
                  n.e("125729"),
                  n.e("249681"),
                  n.e("76428"),
                  n.e("481647"),
                  n.e("776602"),
                  n.e("140402"),
                  n.e("21921"),
                  n.e("695445"),
                  n.e("890027"),
                  n.e("139970"),
                  n.e("179049"),
                  n.e("294857"),
                  n.e("193158"),
                  n.e("179745"),
                  n.e("693832"),
                  n.e("803332"),
                  n.e("455924"),
                  n.e("818465"),
                  n.e("432209"),
                  n.e("250478"),
                  n.e("858337"),
                  n.e("979630"),
                  n.e("260218"),
                  n.e("59413"),
                  n.e("968763"),
                  n.e("356296"),
                  n.e("118917"),
                  n.e("935948"),
                  n.e("562168"),
                  n.e("846523"),
                  n.e("919307"),
                  n.e("126437"),
                  n.e("24922"),
                  n.e("898377"),
                  n.e("698547"),
                  n.e("24889"),
                  n.e("895532"),
                  n.e("296467"),
                  n.e("647177"),
                  n.e("98972"),
                  n.e("431649"),
                  n.e("836150"),
                  n.e("699011"),
                  n.e("964320"),
                  n.e("472789"),
                  n.e("827335"),
                  n.e("508371"),
                  n.e("150200"),
                  n.e("333097"),
                  n.e("412743"),
                  n.e("710014"),
                  n.e("486155"),
                  n.e("335986"),
                  n.e("386861"),
                  n.e("777848"),
                  n.e("770961"),
                  n.e("623685"),
                  n.e("842516"),
                  n.e("684688"),
                ]).then(n.bind(n, 538899));
                return (t) =>
                  (0, i.jsx)(e, {
                    ...t,
                    threadId: l,
                    attachments: T,
                    sendMessage: () => c(r, void 0, void 0, void 0, !0),
                  });
              }));
            return;
          }
          e({
            value: r,
            uploads: T,
            stickers: p,
            command: u,
            commandOptionValues: _,
            isGif: E,
            gifMetadata: f,
          }).then((e) => {
            let { shouldClear: n, shouldRefocus: i } = e,
              r = (n && t.submit?.clearOnSubmit) ?? !1,
              o = null != a.current;
            (r &&
              (l !== ej.Ay.getChannelId()
                ? I.A.saveDraft(l, "", t.drafts.type)
                : o && (a.current?.clearValue(), s.current?.hide())),
              o && (d(!1), (0, eI.v8)(), i && a.current?.focus()));
          });
        },
        [a, s, e, o, t, l],
      );
    return {
      submitting: o,
      submit: c,
      handleSubmit: r.useCallback(
        (e) => {
          a?.current?.submit(e);
        },
        [a],
      ),
    };
  }
  function t2(e, t, n) {
    return r.useCallback(
      (i, r) => {
        if (
          r?.shiftKey === !0 ||
          t === eJ.oU.CREATE_FORUM_POST ||
          t === eJ.oU.CREATE_ANNOUNCEMENT_POST
        )
          n.current?.insertGIF(i);
        else {
          let t = {
            gif_provider: i.provider ?? em.jQ,
            load_id: eK.A.getAnalyticsID(),
            source_object: "GIF Picker",
            gif_url: i.url,
            gif_id: i.id,
          };
          e(i.url, void 0, void 0, !0, void 0, t);
        }
        ((0, eI.v8)(), n.current?.focus());
      },
      [n, e, t],
    );
  }
  function t3(e) {
    return r.useCallback(
      (t) => {
        let { emoji: n, willClose: i } = t,
          r = e.current;
        (null != n && null != r && r.insertEmoji({ emoji: n, willClose: i }), i && (0, eI.v8)());
      },
      [e],
    );
  }
  function t6(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: a, chatInputType: s, submit: l } = e,
      { analyticsLocations: o } = (0, g.Ay)();
    return r.useCallback(
      (e, r) => {
        n ||
          (s === eJ.oU.CREATE_ANNOUNCEMENT_POST ||
          s === eJ.oU.CREATE_FORUM_POST ||
          (function (e, t, n, i) {
            if (eU.A.getUploadCount(n, i) > 0) return !0;
            let r = eM.A.getStickerPreview(n, i);
            if (null != r && r.length > 0) return !0;
            switch (e) {
              case ex.D6.STICKER_PICKER:
                return "" !== t.trim();
              case ex.D6.AUTOCOMPLETE:
                var a;
                return (
                  (null == (a = t) ? [] : a.replace(ew, "").replace(eG, " ").trim().split(" "))
                    .length > 1
                );
              case ex.D6.BUILT_IN_INTEGRATION:
              default:
                return !1;
            }
          })(r, i, a, s.drafts.type)
            ? ((0, th.fh)({
                sticker: e,
                stickerSelectLocation: r,
                isReplacement: null != eM.A.getStickerPreview(a, s.drafts.type),
                analyticsLocations: o,
              }),
              (0, eP.$x)(a, e, s.drafts.type))
            : (l({ value: "", uploads: void 0, stickers: [e.id] }), t.current?.clearValue()),
          (0, eI.v8)(),
          t.current?.focus());
      },
      [n, i, a, t, o, l, s],
    );
  }
  function t5(e, t, n) {
    let i = r.useCallback(() => {
        t || (0, eI.r$)(t0.kx.EMOJI, e, n);
      }, [t, e, n]),
      a = r.useCallback(() => {
        !t && e.gifs?.allowSending && (0, eI.r$)(t0.kx.GIF, e, n);
      }, [t, e, n]),
      s = r.useCallback(() => {
        !t && e.stickers?.allowSending && (0, eI.r$)(t0.kx.STICKER, e, n);
      }, [t, e, n]);
    ((0, ez.Vo)({ event: el.jej.TOGGLE_EMOJI_POPOUT, handler: i }),
      (0, ez.Vo)({ event: el.jej.TOGGLE_GIF_PICKER, handler: a }),
      (0, ez.Vo)({ event: el.jej.TOGGLE_STICKER_PICKER, handler: s }));
  }
  function t4(e, t, n) {
    let [i] = r.useState(() => new l.EventEmitter());
    return (
      r.useEffect(() => {
        i.emit("text-changed", t, n);
      }, [t, n, i]),
      {
        eventEmitter: i,
        handleEditorSelectionChanged: function (t) {
          null != e.current && i.emit("selection-changed", t);
        },
      }
    );
  }
  function t7() {
    let e = r.useRef(null),
      t = r.useCallback(() => {
        e.current?.onMaybeShowAutocomplete();
      }, []),
      n = r.useCallback(() => {
        e.current?.onHideAutocomplete();
      }, []);
    return { autocompleteRef: e, handleMaybeShowAutocomplete: t, handleHideAutocomplete: n };
  }
  function t8(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
  }
  function t9(e) {
    let [t, n] = r.useState(0);
    return {
      editorHeight: t,
      handleResize: r.useCallback(
        (t) => {
          (n(t ?? 0), e?.(t));
        },
        [e],
      ),
    };
  }
  function ne(e, t, n, i) {
    let r = e.getGuildId(),
      a = (0, E.bG)([eg.A], () => null != r && eg.A.isLurking(r), [r]),
      s = (0, E.bG)([eV.Ay, eY.default], () => {
        let e = eY.default.getCurrentUser();
        return (null != r && null != e ? eV.Ay.getMember(r, e.id)?.isPending : null) ?? !1;
      }),
      l = (0, E.cf)(
        [eH.A],
        () => {
          let r = e.isPrivate(),
            a = eH.A.computePermissions(e),
            l = _.zy(a, el.xBc.CREATE_PUBLIC_THREADS) || _.zy(a, el.xBc.CREATE_PRIVATE_THREADS),
            o =
              (!t.permissions?.requireCreateTherads || l) &&
              (!t.permissions?.requireSendMessages || _.zy(a, el.xBc.SEND_MESSAGES)),
            d = o && _.zy(a, el.xBc.ATTACH_FILES),
            c = null != n,
            u = (0, ek.UJ)(e);
          return {
            disabled: i || s || (!r && !o) || u,
            canAttachFiles: !0 === t.attachments && (r || s || d || c),
            canCreateThreads: l,
            canEveryoneSendMessages: eZ.MJ(el.xBc.SEND_MESSAGES, e),
          };
        },
        [
          e,
          t.permissions.requireCreateTherads,
          t.permissions.requireSendMessages,
          t.attachments,
          n,
          i,
          s,
        ],
      );
    return { isLurking: a, isPendingMember: s, ...l };
  }
  function nt(e, t, n) {
    let [i, a, s] = (0, eI.RQ)((e) => [e.activeView, e.activeViewType, e.activeChannelId], c.x),
      l = (0, E.bG)(
        [N.A],
        () => N.A.shouldShowPopup() && N.A.activeViewType() === e && N.A.activeChannelId() === n,
      );
    r.useEffect(
      () => () => {
        (0, eI.v8)(e, n);
      },
      [e, n],
    );
    let o = r.useCallback(() => {
        null != i || l || t.current?.handleOuterClick();
      }, [i, l, t]),
      d = null == i || null == a || a !== e || s !== n;
    return { expressionPickerView: i, shouldHideExpressionPicker: d, handleOuterClick: o };
  }
  function nn(e, t) {
    return {
      handleAutocompleteVisibilityChange: r.useCallback(
        (n) => {
          n && (0, eI.v8)(e, t);
        },
        [e, t],
      ),
    };
  }
  let ni = r.memo(function (e) {
    let t,
      n,
      {
        textValue: a,
        richValue: l,
        className: o,
        innerClassName: c,
        editorClassName: _,
        id: A,
        required: I,
        disabled: C,
        placeholder: O,
        accessibilityLabel: R,
        channel: L,
        type: y,
        focused: D,
        error: v,
        renderAttachButton: b,
        renderApplicationCommandIcon: M,
        renderButtons: w,
        pendingReply: G,
        onChange: x,
        onResize: k,
        onBlur: F,
        onFocus: B,
        onKeyDown: V,
        onSubmit: H,
        promptToUpload: j,
        highlighted: W,
        canMentionRoles: Y,
        canMentionChannels: K,
        maxCharacterCount: $,
        showRemainingCharsAfterCount: z,
        allowNewLines: X = !0,
        characterCountClassName: Z,
        "aria-describedby": q,
        "aria-labelledby": Q,
        setEditorRef: J,
        autoCompletePosition: ee,
        children: et,
        disableThemedBackground: en = !1,
        emojiPickerCloseOnModalOuterClick: ei,
        parentModalKey: er,
        scheduledMessageDraft: ea,
        showValueWhenDisabled: es = !1,
        ref: eo,
      } = e;
    d()(null != y, "chat input type must be set");
    let { analyticsLocations: ed } = (0, g.Ay)(m.A.CHANNEL_TEXT_AREA),
      ec = t8(eo),
      e_ = r.useRef(null),
      eT = r.useRef(null),
      em = r.useRef(null),
      eg = r.useRef(null),
      eN = r.useRef(null),
      eC = r.useCallback(() => em.current?.getSlateEditor() ?? null, []);
    J?.(em.current);
    let eO = (0, S.A)(L),
      eR = (0, eB.n)("ChannelTextAreaContainer"),
      eL = (0, E.cf)([T.Ay], () => ({
        expressionPickerFormat: T.Ay.expressionPickerFormat,
        condensePickerWhenNarrow: T.Ay.condensePickerWhenNarrow,
      })),
      ey = eR ? eL.expressionPickerFormat : T.IG.FLEXIBLE,
      eD = !eR || eL.condensePickerWhenNarrow,
      [ev, eM] = r.useState(!eO);
    (0, p.i4)(ec, (e) => {
      let { width: t } = e;
      return eM(!eO && (null == t || t > 450));
    });
    let eP = ey === T.IG.HIDDEN,
      eU = ey === T.IG.CONDENSED || (ey === T.IG.FLEXIBLE && eD && !ev),
      { activeCommand: ew, activeCommandSection: eG } = (0, E.cf)([U.A], () => ({
        activeCommand: y.commands?.enabled ? U.A.getActiveCommand(L.id) : null,
        activeCommandSection: y.commands?.enabled ? U.A.getActiveCommandSection(L.id) : null,
      })),
      {
        isLurking: ex,
        isPendingMember: ek,
        disabled: eH,
        canAttachFiles: ej,
        canCreateThreads: eK,
        canEveryoneSendMessages: ez,
      } = ne(L, y, ew, C),
      eZ = y.toolbarType === eJ.O1.STATIC,
      e1 = !eF.D_.useSetting() && !(0, eq.isAndroidWeb)() && null != window.ResizeObserver,
      e2 = !e1 || !y.commands?.enabled || !D || "/" !== a,
      e3 = (0, eS.A)(),
      { fontSize: e6 } = (0, E.cf)([T.Ay], () => ({ fontSize: T.Ay.fontSize })),
      e5 = (0, E.bG)([eW.A], () => eW.A.isEnabled());
    t5(y, eH, L.id);
    let { eventEmitter: e4, handleEditorSelectionChanged: e7 } = t4(em, a, l),
      e8 = r.useRef(a);
    e8.current = a;
    let e9 = r.useCallback(
        (e, t, n) => {
          ("/" === t &&
            "" === e8.current &&
            y.commands?.enabled &&
            e4.emit("command-sentinel-typed"),
            x?.(e, t, n));
        },
        [x, y.commands?.enabled, e4],
      ),
      { submitting: te, submit: tt, handleSubmit: tn } = t1(H, y, em, eN, L.id),
      { autocompleteRef: ti, handleMaybeShowAutocomplete: tr, handleHideAutocomplete: ta } = t7(),
      ts = t2(tt, y, em),
      tl = t3(em),
      td = t6({
        editorRef: em,
        disabled: eH,
        textValue: a,
        channelId: L.id,
        chatInputType: y,
        submit: H,
      }),
      tu = r.useCallback(
        (e, t, n) => {
          let i = em.current;
          (null != e &&
            null != i &&
            (e$.default.track(el.HAw.SOUNDMOJI_SELECT, {
              channel_id: L.id,
              guild_id: L.guild_id,
              sound_guild_id: e.guildId,
              sound_id: e.soundId,
              source: t,
            }),
            i.insertSound(e)),
            n && (0, eI.v8)(),
            i?.focus());
        },
        [em, L.id, L.guild_id],
      ),
      t_ = r.useCallback(() => eN?.current?.hide(), []),
      { editorHeight: tE, handleResize: th } = t9(k),
      {
        handleTab: tf,
        handleEnter: tI,
        handleSpace: tT,
        handleMoveSelection: tm,
      } = ((t = r.useCallback(
        () => !!(!e2 && e_.current?.onTabOrEnter(!1)) || ti.current?.onTabOrEnter(!1) || !1,
        [e2, e_, ti],
      )),
      (n = r.useCallback(
        () => !!(!e2 && e_.current?.onTabOrEnter(!0)) || ti.current?.onTabOrEnter(!0) || !1,
        [e2, e_, ti],
      )),
      {
        handleTab: t,
        handleEnter: n,
        handleSpace: r.useCallback(() => ti.current?.onSpace() || !1, [ti]),
        handleMoveSelection: r.useCallback(
          (e) => !!(!e2 && e_.current?.onMoveSelection(e)) || ti.current?.onMoveSelection(e) || !1,
          [e2, e_, ti],
        ),
      }),
      {
        expressionPickerView: tS,
        shouldHideExpressionPicker: tC,
        handleOuterClick: tR,
      } = nt(y, em, L.id),
      { selectedAutocompleteInputType: tD, selectedAutocompleteInputError: tv } = (function (e, t) {
        let [n, i] = r.useState({
            selectedAutocompleteInputType: null,
            selectedAutocompleteInputError: !1,
          }),
          a = r.useCallback(() => {
            let e,
              n = t.current?.getSlateEditor();
            (null != n && (e = tK.VW.getSelectedParentOfType(n, eh.mk)?.[0]),
              i({
                selectedAutocompleteInputType: e?.type ?? null,
                selectedAutocompleteInputError: e?.error ?? !1,
              }));
          }, [t]);
        return (
          r.useEffect(
            () => (
              e.on("selection-changed", a),
              e.on("submit-failure", a),
              a(),
              () => {
                (e.off("selection-changed", a), e.on("submit-failure", a));
              }
            ),
            [a, e],
          ),
          n
        );
      })(e4, em),
      { handleAutocompleteVisibilityChange: tP } = nn(y, L.id),
      tU = (function (e) {
        let { type: t, channelId: n } = e;
        return (0, eE.bG)(
          [N.A],
          () => {
            let e = N.A.activeViewType();
            return null != e && e === t && N.A.activeChannelId() === n && N.A.shouldShowPopup();
          },
          [t, n],
        );
      })({ type: y, channelId: L.id }),
      tw = r.useCallback(() => {
        e4.emit("submit-failure");
      }, [e4]);
    (0, eQ.R)(e4, L.guild_id, L.id);
    let tG = null != G,
      tx = (eH && !((ex || ek) && ez)) || (te && y.submit?.useDisabledStylesOnSubmit),
      tk = null;
    null != ew ? (tk = M?.(ew, eG, tB.g$)) : (!eH || eK) && (tk = b?.(tG, tB.g$));
    let { isVisible: t$, showsUpsell: tz } = (0, tJ.A)({
        type: y,
        textValue: a,
        maxCharacterCount: $,
        showRemainingCharsAfterCount: z,
      }),
      tX = e1 && null != l && !eH && y.showCharacterCount && null == ew,
      tZ = e1 && !__OVERLAY__ && null != l && null == ew && y.toolbarType !== eJ.O1.NONE && !eH,
      tq = (function (e) {
        let {
            channel: t,
            type: n,
            activeCommand: a,
            pendingReply: s,
            scheduledMessageDraft: l,
            selectedAutocompleteInputType: o,
            selectedAutocompleteInputError: d,
          } = e,
          { activeCommandOption: c, activeCommandOptionStates: u } = (0, E.cf)([U.A], () => ({
            activeCommandOption: U.A.getActiveOption(t.id),
            activeCommandOptionStates: U.A.getOptionStates(t.id),
          })),
          _ = (0, E.bG)([eV.Ay, eY.default, tN], () => {
            let e = eY.default.getCurrentUser();
            if (null == e || !e.isStaff() || !t.isDM()) return !1;
            let n = eY.default.getUser(t.getRecipientId());
            if (!n?.isStaff()) return !1;
            let i = eV.Ay.getNicknames(n.id).some(
              (e) => e.endsWith("[PTO]") || e.endsWith("[OOO]"),
            );
            return i ? !tN.hasId(n.id) && i : (tg.delete(n.id) && tN.emitChange(), !1);
          }),
          A = (0, ty.Ay)((e) => e.channelId === t.id);
        return r.useMemo(() => {
          let e = [],
            r = [];
          return (
            null != t.guild_id &&
              n === eJ.oU.NORMAL &&
              r.push((0, i.jsx)(tM.A, { guildId: t.guild_id, channel: t, className: tB.UW })),
            null != a &&
              e.push(
                (0, i.jsx)(tp, {
                  activeCommand: a,
                  activeOption: c ?? null,
                  optionStates: u,
                  channelId: t.id,
                }),
              ),
            null != s && e.push((0, i.jsx)(tc, { reply: s, chatInputType: n })),
            _ && e.push((0, i.jsx)(tO, {})),
            null != l && e.push((0, i.jsx)(tF, { channel: t, scheduledMessageDraft: l })),
            "timestampMentionInput" === o && r.push((0, i.jsx)(tL, { error: d ?? !1 })),
            A && e.push((0, i.jsx)(tb, { channelId: t.id })),
            { stacked: e, floating: r }
          );
        }, [a, c, u, t, A, s, _, n, l, o, d]);
      })({
        channel: L,
        type: y,
        activeCommand: ew,
        pendingReply: G,
        scheduledMessageDraft: ea,
        selectedAutocompleteInputType: tD,
        selectedAutocompleteInputError: tv,
      }),
      t0 = 0 === a.trim().length,
      ni = null != G ? [q, to].filter(Boolean).join(" ") : q,
      nr = y.layout === eJ.wt.INLINE,
      na = y.layout === eJ.wt.FLUSH,
      ns = (0, i.jsx)("div", { ref: eT, className: tB.BW }),
      nl = tU ? (0, i.jsx)(P, { align: "right", positionTargetRef: eT, channel: L }) : null,
      no =
        null != w
          ? w()
          : (0, i.jsx)(tH.A, {
              type: y,
              disabled: eH,
              channel: L,
              handleSubmit: tn,
              isEmpty: t0,
              showAllButtons: !eU && !eP,
              expressionButtonsHidden: eP,
            }),
      nd = tX
        ? (0, i.jsx)(tW.A, {
            type: y,
            textValue: a,
            className: Z,
            maxCharacterCount: $,
            showRemainingCharsAfterCount: z,
          })
        : null;
    return (
      r.useEffect(() => {
        D && eX._.dispatch(el.jej.CHANNEL_TEXT_AREA_FOCUSED, { channelId: L.id });
      }, [D, L.id]),
      (0, i.jsx)(ef.Sv, {
        value: e4,
        children: (0, i.jsxs)(g.f5, {
          value: ed,
          children: [
            tZ && eZ
              ? (0, i.jsx)(tQ, { getSlateEditor: eC, onInsertEmoji: tl, type: y, channel: L })
              : tZ
                ? (0, i.jsx)(tY.A, {
                    ref: eN,
                    getSlateEditor: eC,
                    containerRef: eg,
                    options: y.markdown,
                  })
                : null,
            (0, i.jsxs)("div", {
              ref: ec,
              className: s()(o, {
                [tB.gM]: !0,
                [tB.Bz]: t$ && tX,
                [tB.Qv]: tz && tX,
                [tB.h9]: tx,
                [tB.mr]: W,
                [tB.Wn]: u.Fr,
                [tB.Ls]: nr,
                [tB.AH]: na,
                [tB.z3]: null != v,
              }),
              children: [
                nr || na ? null : (0, i.jsx)(tV, { bars: tq }),
                (0, i.jsxs)("div", {
                  ref: eg,
                  onScroll: t_,
                  className: s()(c, { [tB.xx]: !0, [tB.k6]: !en, [tB.Ri]: tq.stacked.length > 0 }),
                  children: [
                    (0, i.jsx)(tA, { channelId: L.id, chatInputType: y }),
                    y.hideAttachmentArea
                      ? null
                      : (0, i.jsx)(tj.A, { channelId: L.id, type: y, canAttachFiles: ej }),
                    (0, i.jsxs)("div", {
                      className: s()(tB.vW, {
                        [tB.BF]: tx,
                        [tB.RL]: y !== eJ.oU.EDIT && (null != tk || (tx && null == tk) || ex),
                        [tB.fk]: y === eJ.oU.THREAD_CREATION,
                        [tB.TZ]: y === eJ.oU.CREATE_FORUM_POST || y === eJ.oU.FORWARD_MESSAGE_INPUT,
                        [tB.$i]: y === eJ.oU.USER_PROFILE_REPLY,
                      }),
                      onMouseDown: tR,
                      children: [
                        nl,
                        tk,
                        (0, i.jsx)(h.vN, {
                          ringTarget: ec,
                          ringClassName: tB.Rg,
                          children: (0, i.jsx)(e0.A, {
                            ref: em,
                            id: A,
                            focused: D,
                            useSlate: e1,
                            textValue: a,
                            richValue: l,
                            disabled: eH,
                            placeholder: O,
                            required: I,
                            accessibilityLabel: R,
                            isPreviewing: (ex || ek) && ez,
                            channel: L,
                            type: y,
                            canPasteFiles: ej,
                            uploadPromptCharacterCount: el.CS1,
                            maxCharacterCount: $ ?? e3,
                            allowNewLines: X,
                            "aria-describedby": ni,
                            onChange: e9,
                            onResize: th,
                            onBlur: F,
                            onFocus: B,
                            onKeyDown: V,
                            onSubmit: tt,
                            onSubmitFailure: tw,
                            onTab: tf,
                            onEnter: tI,
                            onSpace: tT,
                            onMoveSelection: tm,
                            onSelectionChanged: e7,
                            onMaybeShowAutocomplete: tr,
                            onHideAutocomplete: ta,
                            promptToUpload: j,
                            fontSize: e6,
                            spellcheckEnabled: e5,
                            canOnlyUseTextCommands: tG,
                            className: s()(
                              {
                                [tB.QI]: y === eJ.oU.THREAD_CREATION,
                                [tB.AV]: y === eJ.oU.PROFILE_BIO_INPUT,
                                [tB.GR]: y === eJ.oU.OVERLAY_INLINE_REPLY,
                              },
                              _,
                            ),
                            "aria-labelledby": Q,
                            showValueWhenDisabled: es,
                          }),
                        }),
                        no,
                        ns,
                      ],
                    }),
                  ],
                }),
                e2 ? null : (0, i.jsx)(eu, { ref: e_, channel: L, canOnlyUseTextCommands: tG }),
                (0, i.jsx)(eA.A, {
                  ref: ti,
                  channel: L,
                  canMentionRoles: Y,
                  canMentionChannels: K,
                  useNewSlashCommands: e1,
                  canOnlyUseTextCommands: tG,
                  canSendStickers: y.stickers?.allowSending,
                  canSendSoundmoji: y.soundmoji?.allowSending,
                  textValue: a,
                  focused: D,
                  expressionPickerView: tS,
                  type: y,
                  targetRef: ec,
                  editorRef: em,
                  onSendMessage: tt,
                  onSendSticker: td,
                  onVisibilityChange: tP,
                  editorScrollerRef: eg,
                  editorHeight: tE,
                  barsHeight: 40 * tq.floating.length,
                  setValue: (e, t) => e9?.(null, e, t),
                  position: ee,
                }),
                (0, i.jsx)(eb, { textValue: a, editorHeight: tE, channelId: L.id }),
                nd,
                et,
              ],
            }),
            (0, i.jsx)(f.U, { error: v }),
            tC
              ? null
              : (0, i.jsx)(ep.A, {
                  positionTargetRef: ec,
                  type: y,
                  onSelectGIF: ts,
                  onSelectEmoji: tl,
                  onSelectSticker: td,
                  onSelectSound: tu,
                  channel: L,
                  closeOnModalOuterClick: ei,
                  parentModalKey: er,
                  position: "top",
                  align: "right",
                  positionLayerClassName: tB.BD,
                }),
          ],
        }),
      })
    );
  });
}
