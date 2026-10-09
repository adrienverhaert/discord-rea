/* Recovered shipped factory. Module 773729.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6371742..6451944
 * Raw property SHA-256: dbc34ac13726d1055ac2d5ba1911cd5bc2cc0d56ac4cb25f1c22e696e73a653e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { g: () => rB, A: () => rj }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(17928),
    c = n(554146),
    u = n(451988),
    _ = n(97808),
    E = n(778712),
    A = n(922016),
    h = n(939249),
    f = n(140735),
    I = n(312138),
    p = n(192308),
    T = n(442433),
    m = n(820284),
    g = n(717558),
    S = n(964486),
    N = n(220839),
    C = n(397244),
    O = n(394871),
    R = n(202091),
    L = n(866323),
    y = n(120842);
  function D(e) {
    let { text: t } = e,
      n = (0, L.p)(t, {
        from: { opacity: 0, transform: "translate3d(0, 107%, 0)" },
        enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        config: { duration: 220, clamp: !0 },
      });
    return (0, i.jsx)("div", {
      className: y.k,
      children: n((e, t) => (0, i.jsx)(R.animated.div, { className: y.H, style: e, children: t })),
    });
  }
  var v = n(29160),
    b = n(793574),
    M = n(688810),
    P = n(992526),
    U = n(158390),
    w = n(927813),
    G = n(682618),
    x = n(864197),
    k = n(982240),
    F = n(988341),
    B = n(521502),
    V = n(380610),
    H = n(198052),
    j = n(18235),
    W = n(183184),
    Y = n(384059),
    K = n(480890),
    $ = n(601255),
    z = n(562819),
    X = n(449582),
    Z = n(351952),
    q = n(88686),
    Q = n(214881),
    J = n(302223),
    ee = n(248778),
    et = n(609425),
    en = n(922301),
    ei = n(660184),
    er = n(643501),
    ea = n(277984),
    es = n(826673),
    el = n(617617),
    eo = n(280450),
    ed = n(615405),
    ec = n(295405),
    eu = n(935208),
    e_ = n(92202),
    eE = n(425565),
    eA = n(355097);
  let eh = null,
    ef = null;
  var eI = n(771527),
    ep = n(552122),
    eT = n(74848),
    em = n(607399),
    eg = n(305866),
    eS = n(707554),
    eN = n(364522),
    eC = n(22231),
    eO = n(508770),
    eR = n(935154),
    eL = n(780338),
    ey = n(224640),
    eD = n(980707),
    ev = n(877784),
    eb = n(26137),
    eM = n(473935),
    eP = n(765671),
    eU = n(643056),
    ew = n(470739),
    eG = n(176781),
    ex = n(812993),
    ek = n(320448),
    eF = n(834730),
    eB = n(993401),
    eV = n(660183),
    eH = n(211450);
  function ej(e) {
    return (0, i.jsx)("div", {
      className: eH.wE,
      children: (0, i.jsx)(eD.W, {
        "data-menu-migrated": !0,
        variant: "fixed",
        hideScroller: !0,
        onSelect: void 0,
        ...e,
      }),
    });
  }
  function eW(e) {
    let {
        action: t,
        onClick: n,
        icon: a,
        label: s,
        sublabel: l,
        trailing: o,
        renderSubmenu: d,
        ref: c,
        submenuTargetElementRef: u,
        submenuAlign: _,
      } = e,
      E = null != n,
      f = (0, eB.rE)({ action: t, onClick: n }),
      [I, T] = r.useState(!1),
      m = r.useRef(null),
      g = c ?? m,
      S = null != d,
      N = S && E,
      C = r.useCallback(() => {
        T(!0);
      }, []),
      O = r.useCallback(() => {
        (0, p.hasAnyModalOpen)() || T(!1);
      }, []);
    function R() {
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)("div", {
            className: eH.iA,
            children: (0, i.jsx)(a, { size: "xs", color: "currentColor" }),
          }),
          (0, i.jsxs)("div", {
            className: eH.$H,
            children: [
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(eF.E, {
                    color: "currentColor",
                    variant: "text-sm/medium",
                    className: eH.W1,
                    children: s,
                  }),
                  (0, i.jsx)(eF.E, {
                    color: "currentColor",
                    variant: "text-xs/medium",
                    children: l,
                  }),
                ],
              }),
              o,
            ],
          }),
        ],
      });
    }
    function L(e) {
      let t;
      return (
        (t = N
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(h.D, { className: eH.ef, onClick: f, children: R() }),
                (0, i.jsx)(h.D, {
                  className: eH.ap,
                  "aria-label": eV.intl.string(eV.t.PdRCRg),
                  ...e,
                  onClick: C,
                  children: (0, i.jsx)(ek._, { size: "xs", color: "currentColor" }),
                }),
              ],
            })
          : S
            ? (0, i.jsxs)(h.D, {
                className: eH.ef,
                ...e,
                onClick: C,
                children: [
                  R(),
                  (0, i.jsx)("div", {
                    className: eH.ap,
                    children: (0, i.jsx)(ek._, { size: "xs", color: "currentColor" }),
                  }),
                ],
              })
            : (0, i.jsx)(h.D, { className: eH.ef, onClick: f, children: R() })),
        (0, i.jsx)("div", { ref: g, className: eH.jG, children: t })
      );
    }
    return S
      ? (0, i.jsx)("li", {
          className: eH.j$,
          onMouseEnter: C,
          onMouseLeave: O,
          children: (0, i.jsx)(A.Y, {
            targetElementRef: u ?? g,
            align: _,
            spacing: 0,
            renderPopout: d,
            shouldShow: I,
            onRequestClose: O,
            children: L,
          }),
        })
      : (0, i.jsx)("li", { className: eH.j$, children: L() });
  }
  function eY(e) {
    let { children: t, "aria-label": n } = e;
    return (0, i.jsx)("ul", { "aria-label": n, children: t });
  }
  var eK = n(780964),
    e$ = n(766075),
    ez = n(734066),
    eX = n(915725),
    eZ = n(409067),
    eq = n(271597),
    eQ = n(297264),
    eJ = n(475358),
    e0 = n(866665),
    e1 = n(408278),
    e2 = n(625903),
    e3 = n(404778),
    e6 = n(689175),
    e5 = n(821609),
    e4 = n(532624),
    e7 = n(879631),
    e8 = n(350535),
    e9 = n(974293),
    te = n(572164),
    tt = n(953932),
    tn = n(280483),
    ti = n(890856),
    tr = n(713517),
    ta = n(609174),
    ts = n(619744);
  function tl(e) {
    let { onBeforeEdit: t, variant: n = "primary" } = e,
      a = (0, ta.Y_)(),
      s = r.useCallback(
        (e) => {
          (e.stopPropagation(),
            e.preventDefault(),
            t?.(),
            (0, eq.p)({ initialEditingClipId: a.id }));
        },
        [a, t],
      );
    return (0, i.jsx)(e5.$, {
      onClick: s,
      icon: eC.PencilIcon,
      variant: n,
      size: "sm",
      text: eV.intl.string(eV.t.bt75uw),
      fullWidth: !0,
    });
  }
  var to = n(82716),
    td = n(449397),
    tc = n(930317),
    tu = n(285072),
    t_ = n(575172);
  let tE = r.memo(function (e) {
    let { clip: t, isNew: n, onClose: a, className: l } = e,
      o = r.useRef(null),
      { isHoveringOrFocusing: d } = (0, tr.A)(o),
      c = r.useCallback(() => {
        (a?.(), (0, eq.p)({ initialEditingClipId: t.id }));
      }, [t.id, a]);
    return (0, i.jsx)(ta.Cl, {
      clip: t,
      children: (0, i.jsx)(ti.s, {
        ref: o,
        "aria-label": eV.intl.string(eV.t.bt75uw),
        onClick: c,
        className: s()(t_.Z1, l),
        children: (0, i.jsxs)(tc.d, {
          isStatic: !0,
          children: [
            n &&
              (0, i.jsx)("div", {
                className: t_.Ad,
                children: (0, i.jsx)(eO.E, { type: "new", variant: "brand" }),
              }),
            (0, i.jsxs)(tu.h, {
              isVisible: d,
              className: t_.Lw,
              children: [
                (0, i.jsxs)("div", {
                  className: t_.mY,
                  children: [(0, i.jsx)(to.z, {}), (0, i.jsx)(ts.k, {})],
                }),
                (0, i.jsxs)("div", {
                  className: t_.E_,
                  children: [
                    (0, i.jsx)(tl, { onBeforeEdit: a, variant: "overlay-secondary" }),
                    (0, i.jsx)(td.e, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  });
  var tA = n(696016),
    th = n(652215),
    tf = n(753070),
    tI = n(704796),
    tp = n(48127);
  function tT(e) {
    let { onOpenGallery: t, onOpenSettings: n, onClose: a, setPopoutRef: s } = e;
    (0, tn.A)();
    let l = (0, d.yK)([eX.Ay], () => Object.values(eX.Ay.getClips())),
      o = (0, d.bG)([eX.Ay], () => eX.Ay.getSettings()),
      c = (0, d.bG)([eX.Ay], () => eX.Ay.getNewClipIds()),
      u = (0, e9.aJ)("ClipsPopout"),
      _ = (0, d.bG)([eX.Ay], () => eX.Ay.getEnableAutoclipping()),
      E = (0, d.bG)([e4.Ay], () => e4.Ay.getKeybindForAction(th.hCu.SAVE_CLIP)),
      A = r.useCallback(
        (e) => {
          s?.(e);
        },
        [s],
      ),
      h = !o.showPovClipsInGallery,
      f = r.useMemo(() => {
        let e = l.filter(
          (e) => e.type === tA.nQ.CLIP && "" !== e.thumbnail && (!h || !(0, eZ.kD)(e)),
        );
        return (e.sort((e, t) => t.createdAt - e.createdAt), e);
      }, [l, h]),
      I = r.useMemo(() => f.slice(0, 16), [f]),
      p = f.length > 16,
      T = null != E ? e8.dI(E.shortcut, !0) : null,
      m = [
        (0, e7.$)(o.clipsLength / w.A.Millis.SECOND),
        (0, tf.zr)(o.clipsQuality.resolution),
        eV.intl.formatToPlainString(eV.t.Qb44XH, { fps: o.clipsQuality.frameRate }),
      ];
    return (
      u && m.push(eV.intl.string(tI.default.XWkJoi)),
      (0, i.jsxs)("div", {
        ref: A,
        className: tp.SW,
        role: "dialog",
        "aria-label": eV.intl.string(eV.t.z2jK6X),
        children: [
          (0, i.jsxs)("div", {
            className: tp.wx,
            children: [
              (0, i.jsxs)("div", {
                className: tp.$,
                children: [
                  (0, i.jsx)(eQ.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: eV.intl.string(eV.t.z2jK6X),
                  }),
                  null != T && (0, i.jsx)(eJ.e, { className: tp.P, shortcut: T }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: tp.$s,
                children: [
                  (0, i.jsx)(e0.m, {
                    text: eV.intl.string(eV.t["3D5yo/"]),
                    children: (0, i.jsx)(e1.K, {
                      onClick: () => n(),
                      icon: e2.SettingsIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": eV.intl.string(eV.t["3D5yo/"]),
                    }),
                  }),
                  (0, i.jsx)(e0.m, {
                    text: eV.intl.string(tI.default["55C2MH"]),
                    children: (0, i.jsx)(e1.K, {
                      onClick: () => t(),
                      icon: eG.x,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": eV.intl.string(tI.default["55C2MH"]),
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, i.jsxs)("div", {
            className: tp.ov,
            children: [
              m.map((e, t) =>
                (0, i.jsxs)(
                  r.Fragment,
                  {
                    children: [
                      t > 0 && (0, i.jsx)("span", { className: tp.LO, children: "\u2022" }),
                      (0, i.jsx)(eF.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tag: "span",
                        className: tp.c5,
                        children: e,
                      }),
                    ],
                  },
                  e,
                ),
              ),
              u &&
                (0, i.jsx)(eF.E, {
                  variant: "text-xs/semibold",
                  color: _ ? "text-strong" : "text-feedback-critical",
                  tag: "span",
                  className: tp.wS,
                  children: _
                    ? eV.intl.string(tI.default.lTwKmt)
                    : eV.intl.string(tI.default.GNDqtf),
                }),
            ],
          }),
          (0, i.jsx)(e3.c, {}),
          I.length > 0
            ? (0, i.jsxs)(e6.Ch, {
                className: tp.Vg,
                fade: !0,
                disableFocusRingScope: !0,
                children: [
                  I.map((e) =>
                    (0, i.jsx)(tE, { clip: e, isNew: c.includes(e.id), onClose: a }, e.id),
                  ),
                  p &&
                    (0, i.jsx)("div", {
                      className: tp.qr,
                      children: (0, i.jsx)(e5.$, {
                        onClick: () => t(),
                        text: eV.intl.string(tI.default["55C2MH"]),
                        variant: "secondary",
                        size: "sm",
                      }),
                    }),
                ],
              })
            : (0, i.jsx)(tm, { keybindString: T }),
        ],
      })
    );
  }
  function tm(e) {
    let { keybindString: t } = e,
      n = (0, te.E)();
    return (0, i.jsxs)("div", {
      className: tp.p$,
      children: [
        (0, i.jsx)(eF.E, {
          variant: "text-md/medium",
          color: "text-default",
          className: tp.qO,
          children: eV.intl.string(tI.default.mjfghy),
        }),
        n
          ? null != t &&
            (0, i.jsx)(eF.E, {
              variant: "text-sm/medium",
              color: "text-muted",
              className: tp.CZ,
              children: eV.intl.format(tI.default.y4zC7j, {
                protipHook: (e) =>
                  (0, i.jsx)(
                    eF.E,
                    {
                      variant: "text-sm/medium",
                      color: "text-feedback-positive",
                      tag: "span",
                      children: e,
                    },
                    "protip",
                  ),
                keybind: (0, i.jsx)(eJ.e, { shortcut: t }),
              }),
            })
          : (0, i.jsx)(tt.A, {}),
      ],
    });
  }
  function tg(e) {
    let { onClose: t, popoutContainerRef: n } = e,
      a = (0, ez.sw)(),
      s = !(0, d.bG)([eX.Ay], () => eX.Ay.getSettings().showPovClipsInGallery),
      l = (0, d.bG)(
        [eX.Ay],
        () => {
          let e = eX.Ay.getNewClipIds();
          return s
            ? e.filter((e) => {
                let t = eX.Ay.getClipById(e);
                return null != t && !(0, eZ.kD)(t);
              }).length
            : e.length;
        },
        [s],
      ),
      o = r.useCallback(
        (e) => {
          (t(), (0, eq.p)({ initialEditingClipId: e }));
        },
        [t],
      ),
      c = r.useCallback(() => {
        (t(), (0, e$.openUserSettings)(eK.X.CLIPS_PANEL));
      }, [t]);
    return a
      ? (0, i.jsx)(eW, {
          action: "PRESS_CLIPS",
          icon: eG.x,
          label: eV.intl.string(eV.t.z2jK6X),
          trailing: l > 0 ? (0, i.jsx)(ex.hV, { count: l }) : null,
          onClick: () => o(),
          submenuTargetElementRef: n,
          submenuAlign: "bottom",
          renderSubmenu: (e) =>
            (0, i.jsx)(tT, { ...e, onOpenGallery: o, onOpenSettings: c, onClose: t }),
        })
      : null;
  }
  var tS = n(480335),
    tN = n(577390),
    tC = n(372320),
    tO = n(31956),
    tR = n(744808),
    tL = n(645507),
    ty = n(131607),
    tD = n(970931),
    tv = n(315710),
    tb = n(789645),
    tM = n(775602),
    tP = n(832248),
    tU = n(462887),
    tw = n(736653),
    tG = n(439174),
    tx = n(158045),
    tk = n(19886),
    tF = n(202541);
  function tB() {
    let e = (0, tk.Xb)(),
      t = (0, tx.nK)();
    if (null == e || !t) return null;
    let n = new Date().getTime();
    for (let t = tF.sp.length - 1; t >= 0; t--) {
      let i = tF.VD[tF.sp[t]],
        r = new Date(e);
      if (
        (r.setMonth(e.getMonth() + i.tenureReqNumMonths),
        r.setHours(r.getHours() + 30),
        n > r.getTime())
      )
        if (n - r.getTime() < 6048e5) return i.id;
        else break;
    }
    return null;
  }
  let tV = {
      [tF.Ac.PREMIUM_TENURE_1_MONTH]: { dark: " #D76C1F, #F79C53", light: " #8E2A0B, #D4681C" },
      [tF.Ac.PREMIUM_TENURE_3_MONTH]: { dark: " #8F9E9E, #C0CBD1", light: " #53555F, #697979" },
      [tF.Ac.PREMIUM_TENURE_6_MONTH]: { dark: " #ED8200, #FFCE46", light: " #744400, #CC7000" },
      [tF.Ac.PREMIUM_TENURE_12_MONTH]: { dark: " #36AAFF, #7BE7CB", light: " #006394, #0089EB" },
      [tF.Ac.PREMIUM_TENURE_24_MONTH]: { dark: " #8670FF, #C2BDFF", light: " #5423CC, #8670FF" },
      [tF.Ac.PREMIUM_TENURE_36_MONTH]: { dark: " #009423, #67FF33", light: " #005C15, #009E25" },
      [tF.Ac.PREMIUM_TENURE_60_MONTH]: { dark: " #E83068, #FF8F70", light: " #881141, #DD1852" },
      [tF.Ac.PREMIUM_TENURE_72_MONTH]: {
        dark: " #829AE8, #DDB4FF, #A2D6FF",
        light: " #6881D4, #956CB8, #5491A0",
      },
    },
    tH = {
      [tF.Ac.PREMIUM_TENURE_1_MONTH]: {
        dark: "https://cdn.discordapp.com/assets/content/76b6239d8631db63ae8ddfae2959791fe02bcc550c376cb35d77ef9df1a62ee5.webm",
        light:
          "https://cdn.discordapp.com/assets/content/f09f5aa678c2d463109f0ca84a572646c1b6b21974865e84ac92f3c3a3f50b87.webm",
      },
      [tF.Ac.PREMIUM_TENURE_3_MONTH]: {
        dark: "https://cdn.discordapp.com/assets/content/333650072ffe3aa581594ad0a78d525ce57e9e34bd236acb81db8b75aa25df7c.webm",
        light:
          "https://cdn.discordapp.com/assets/content/adb6e9b17112ca46167a49c50860b17c3aae5f0e56be9c82baa62ffdd664ad24.webm",
      },
      [tF.Ac.PREMIUM_TENURE_6_MONTH]: {
        dark: "https://cdn.discordapp.com/assets/content/279e3118d1cfcc6cfa8decab76b4153e4c3c1eff8a2e77888ae51b96c7292888.webm",
        light:
          "https://cdn.discordapp.com/assets/content/e2d18cff69e5718d2836557c0089cf5056f5e833e25e28b6e98bdbc1503d726f.webm",
      },
      [tF.Ac.PREMIUM_TENURE_12_MONTH]: {
        dark: "https://cdn.discordapp.com/assets/content/74b1267eebcf0dcd18ac9fb16c89d231604489cfa3d0eebcd71a4c24962e3538.webm",
        light:
          "https://cdn.discordapp.com/assets/content/20265cc95d50db21c86b4a217c967c535561fcb6bfa733df6ba1d0393ca5f980.webm",
      },
      [tF.Ac.PREMIUM_TENURE_24_MONTH]: {
        dark: "https://cdn.discordapp.com/assets/content/68ae410145a1ab508c52f2431e5f808b4cd60d89d74d41f07d6a85ce75106a2a.webm",
        light:
          "https://cdn.discordapp.com/assets/content/7aba50f994ce9e66bacabe14aafb881e43997136887f81054f1f025f032f7aea.webm",
      },
      [tF.Ac.PREMIUM_TENURE_36_MONTH]: {
        dark: "https://cdn.discordapp.com/assets/content/03f8fb27edf5fc0c15d71326623a871339eab9fc36316afab2fcce955049d726.webm",
        light:
          "https://cdn.discordapp.com/assets/content/566f4db88f64218ac2df0ac3af6bbc975dcd25044e5fdceb0ee8889b2b13c86c.webm",
      },
      [tF.Ac.PREMIUM_TENURE_60_MONTH]: {
        dark: "https://cdn.discordapp.com/assets/content/d2e0f57d4f0054e58fa2b13a28e2ccef6168ffd752760b84feff4da9b076912a.webm",
        light:
          "https://cdn.discordapp.com/assets/content/2bbcfd689cc2c402457c21c93b81c98537936d7e54ac6ac46d6a3133519b0101.webm",
      },
      [tF.Ac.PREMIUM_TENURE_72_MONTH]: {
        dark: "https://cdn.discordapp.com/assets/content/2d56eadb5dd14d8bc5d74a55d04cef85bfc2d083b6b0ea53f389c9f34993237a.webm",
        light:
          "https://cdn.discordapp.com/assets/content/c5e4aed8b111912db02d0aa12a73d162720f27aaf432000378344e94cde1ec65.webm",
      },
    };
  var tj = n(570484);
  let tW = r.lazy(() => Promise.all([n.e("969274"), n.e("924832")]).then(n.bind(n, 748579)));
  function tY() {
    let e = (0, d.bG)([tM.Ay], () => tM.Ay.useReducedMotion),
      t = (0, tP.A)((e) => e.shouldRenderTenureLevelUp),
      n = (function () {
        let e = tB(),
          t = (0, tU.M)((0, tw.Ay)());
        if (null == e) return null;
        let n = tV[e],
          i = tH[e],
          r = {
            currentBadge: (0, tG.e0)(e),
            currentBadgeTextGradient: t ? n?.dark : n?.light,
            levelUpVideoSrc: t ? i?.dark : i?.light,
          },
          a = tF.sp.indexOf(e);
        if (a > 0) {
          let e = tF.sp[a - 1],
            n = tV[e];
          ((r.prevBadge = (0, tG.e0)(e)), (r.prevBadgeTextGradient = t ? n?.dark : n?.light));
        }
        return r;
      })(),
      [a, s] = r.useState(null);
    return (null != n && null == a && s(n), e || !t || null == a)
      ? null
      : (0, i.jsx)(tK, { levelUpData: a });
  }
  function tK(e) {
    let { levelUpData: t } = e,
      n = r.useRef(null),
      a = r.useCallback(() => {
        tP.A.setState({ shouldRenderTenureLevelUp: !1 });
      }, []);
    return (0, i.jsx)(tv.Ok, {
      containerRef: n,
      children: (0, i.jsxs)("div", {
        className: tj.i,
        children: [
          (0, i.jsx)("div", {
            className: tj.b,
            children: (0, i.jsx)(e0.m, {
              text: eV.intl.string(eV.t.cpT0Cq),
              children: (0, i.jsx)(e1.K, {
                icon: tb.P,
                variant: "secondary",
                size: "sm",
                onClick: a,
                "aria-label": eV.intl.string(eV.t.cpT0Cq),
              }),
            }),
          }),
          (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(tW, { levelUpData: t }) }),
        ],
      }),
    });
  }
  var t$ = n(397562),
    tz = n(206835),
    tX = n(183555),
    tZ = n(465318),
    tq = n(999291),
    tQ = n(402860),
    tJ = n(718019),
    t0 = n(365607),
    t1 = n(915614),
    t2 = n(744753),
    t3 = n(559506),
    t6 = n(646986),
    t5 = n(657538),
    t4 = n(946356),
    t7 = n(465829),
    t8 = n(624479),
    t9 = n(206845),
    ne = n(957565),
    nt = n(427262),
    nn = n(62119);
  function ni(e) {
    let { user: t, isVisible: n } = e,
      { trackUserProfileAction: r } = (0, tX.NJ)();
    return ne.p5
      ? (0, i.jsx)(t9.A, {
          text: eV.intl.string(eV.t.y5MwJy),
          delay: 0,
          "aria-label": !1,
          copyValue: nt.Ay.getUserTag(t, { decoration: "never", identifiable: "always" }),
          onCopy: () => r({ action: "COPY_USERNAME" }),
          children: (e) =>
            (0, i.jsx)(h.D, {
              ...e,
              className: s()(nn.c, { [nn.R]: n }),
              "aria-label": eV.intl.string(eV.t.y5MwJy),
              children: (0, i.jsx)(t8.CopyIcon, { size: "xs", color: "currentColor" }),
            }),
        })
      : null;
  }
  var nr = n(394816),
    na = n(442228),
    ns = n(885386),
    nl = n(362862),
    no = n(621466),
    nd = n(318254),
    nc = n(863610),
    nu = n(421773),
    n_ = n(318346),
    nE = n(923138),
    nA = n(309954),
    nh = n(673125),
    nf = n(646731),
    nI = n(769001);
  function np(e) {
    let {
      popoutContainerRef: t,
      scrollerRef: n,
      shouldScrollIntoView: a,
      onCloseAccountPopout: l,
    } = e;
    (0, nE.I)({ enabled: !0 });
    let { balance: o } = (0, nA.W)(),
      c = (0, d.bG)([nh.Ay], () =>
        nh.Ay.userOpenedWalletViaProfileDCF
          ? nh.Y0.NEW_ACHIEVEMENT
          : nh.Ay.clientUnreadNotificationType,
      );
    r.useEffect(
      () => () => {
        nh.Ay.setUserOpenedWalletViaProfileDCF(!1);
      },
      [],
    );
    let {
        isHovered: u,
        onMouseEnter: _,
        onMouseLeave: E,
        setIsHovered: f,
        cancelTimers: I,
      } = (0, nu.A)(0, 500),
      T = r.useCallback(() => {
        (0, p.hasAnyModalOpen)() || E();
      }, [E]),
      m = r.useRef(null),
      g = r.useRef(null),
      S = r.useRef(null),
      N = r.useCallback(
        (e) => {
          (S.current?.disconnect(),
            (S.current = null),
            null != e &&
              ((S.current = new ResizeObserver(() => {
                I();
              })),
              S.current.observe(e)));
        },
        [I],
      );
    (r.useEffect(() => () => S.current?.disconnect(), []),
      r.useEffect(() => {
        if (u)
          return (
            document.addEventListener("mouseover", e),
            () => document.removeEventListener("mouseover", e)
          );
        function e(e) {
          if ((0, p.hasAnyModalOpen)()) return;
          let t = (0, no.vq)(e.target, Element) ? e.target : null,
            n = t?.closest(`.${eH.j$}`);
          null != n && n !== m.current && (I(), f(!1));
        }
      }, [u, I, f]));
    let C = r.useRef(!1);
    r.useEffect(() => {
      u || (C.current = !1);
    }, [u]);
    let O = r.useCallback(() => {
        (C.current ||
          ((C.current = !0),
          (0, n_.Y)({
            pageType: b.A.USER_PROFILE_ACCOUNT_POPOUT,
            sectionType: b.A.ORB_WALLET,
            ctaObject: b.A.ORB_WALLET_OPEN_FROM_PROFILE,
          })),
          _());
      }, [_]),
      R = (0, eB.rE)({ action: "PRESS_ORBS", onClick: O });
    r.useEffect(() => {
      let e = n?.current,
        t = m.current;
      if (!a || null == e || null == t) return;
      function i() {
        if (null == e || null == t) return;
        let n = e.getBoundingClientRect(),
          i = t.getBoundingClientRect(),
          r = i.bottom + 24 - n.bottom,
          a = n.top - (i.top - 24);
        r > 0 ? (e.scrollTop += r) : a > 0 && (e.scrollTop -= a);
      }
      let r = requestAnimationFrame(i),
        s = new ResizeObserver(i);
      for (let t of (s.observe(e), Array.from(e.children))) s.observe(t);
      function l() {
        (s.disconnect(), clearTimeout(o));
      }
      let o = setTimeout(l, 3e3);
      return (
        e.addEventListener("wheel", l, { once: !0 }),
        e.addEventListener("pointerdown", l, { once: !0 }),
        () => {
          (cancelAnimationFrame(r),
            l(),
            e.removeEventListener("wheel", l),
            e.removeEventListener("pointerdown", l));
        }
      );
    }, [a, n]);
    let L = r.useMemo(
        () =>
          null != o
            ? eV.intl.format(eV.t["8xDISf"], { balance: String(o) })
            : (0, i.jsx)(nc.n, { dotRadius: 3.5, themed: !0, className: nI.K }),
        [o],
      ),
      y = r.useMemo(
        () =>
          c === nh.Y0.NEW_ACHIEVEMENT
            ? (0, i.jsx)(eO.E, { type: "new", variant: "brand" })
            : c === nh.Y0.UNCLAIMED_ACHIEVEMENT
              ? (0, i.jsx)(eO.E, { type: { text: eV.intl.string(eV.t.O13yhz) }, variant: "brand" })
              : null,
        [c],
      ),
      D = r.useCallback(() => {
        (I(), f(!1), l());
      }, [I, f, l]),
      v = r.useCallback(
        (e) => {
          let { relatedTarget: t } = e;
          (0, no.vq)(t, Node) && null != m.current && m.current.contains(t) && I();
        },
        [I],
      );
    return (0, i.jsx)("li", {
      ref: m,
      className: eH.j$,
      onMouseEnter: O,
      onMouseLeave: T,
      children: (0, i.jsx)(A.Y, {
        targetElementRef: t,
        align: "bottom",
        spacing: -16,
        renderPopout: () =>
          (0, i.jsx)("div", {
            ref: N,
            onMouseEnter: _,
            onMouseLeave: v,
            children: (0, i.jsx)(nf.vG, { onCloseWallet: D, returnRef: g, isProfilePopout: !0 }),
          }),
        shouldShow: u,
        onRequestClose: T,
        children: (e) =>
          (0, i.jsx)("div", {
            className: eH.jG,
            children: (0, i.jsxs)(h.D, {
              innerRef: g,
              className: eH.ef,
              ...e,
              onClick: R,
              children: [
                (0, i.jsx)("div", {
                  className: eH.iA,
                  children: (0, i.jsx)(nd.C, { color: "currentColor", size: "xs" }),
                }),
                (0, i.jsx)("div", {
                  className: eH.$H,
                  children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(eF.E, {
                      color: "currentColor",
                      variant: "text-sm/medium",
                      className: eH.W1,
                      children: L,
                    }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: s()(eH.ap, nI._),
                  children: [y, (0, i.jsx)(ek._, { size: "xs", color: "currentColor" })],
                }),
              ],
            }),
          }),
      }),
    });
  }
  var nT = n(290863),
    nm = n(351906),
    ng = n(403362),
    nS = n(562153),
    nN = n(661531),
    nC = n(477782),
    nO = n(628284),
    nR = n(695366),
    nL = n(363195),
    ny = n(889227),
    nD = n(287809),
    nv = n(174459),
    nb = n(429707),
    nM = n(274303),
    nP = n(994125),
    nU = n(347853),
    nw = n(573879),
    nG = n(559117),
    nx = n(43105),
    nk = n(661439),
    nF = n(385113),
    nB = n(352003),
    nV = n(429913),
    nH = n(334074),
    nj = n(633075),
    nW = n(667049),
    nY = n(90165),
    nK = n(49999),
    n$ = n(518477);
  function nz(e) {
    let { targetElementRef: t, onClose: a } = e,
      [s, l] = r.useState(!1),
      o = (0, d.bG)([eo.default], () => eo.default.getId()),
      { eligibleApplications: u, markAsDismissed: _ } = (function () {
        let e = (0, d.yK)([nF.A], () => nF.A.getFeaturedApplicationIds());
        ((0, nB.A)(e),
          r.useEffect(() => {
            (0, nk.X)();
          }, []));
        let t = (0, d.bG)([eo.default], () => eo.default.getId()),
          n = (0, nW.A)(t),
          i = r.useMemo(() => n.filter((e) => e instanceof nj.R), [n]),
          a = (0, nV.A)(e),
          s = r.useMemo(() => a.filter(ng.Vq), [a]),
          l = (0, d.cf)([nY.A], () => {
            let t = {};
            for (let n of e) {
              let e = s.find((e) => e.id === n)?.getCanonicalGameId();
              null != e && (t[n] = nY.A.getLastPlayedDateTime(e));
            }
            return t;
          }),
          o = r.useMemo(() => {
            let e = Date.now();
            return s.filter((t) => {
              if (i.some((e) => e.applicationId === t.id)) return !1;
              let n = l[t.id];
              return null != n && e - n < 7776e6;
            });
          }, [s, i, l]),
          { eligibleToShow: u, markAsDismissed: _ } = (0, nH.hj)({
            applications: o,
            dismissibleContent: c.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
            cooldownConfig: nH.SH,
          });
        return {
          eligibleApplications: r.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]),
          markAsDismissed: _,
        };
      })();
    return ((0, r.useEffect)(() => {
      0 !== u.length &&
        Promise.all([
          n.e("459257"),
          n.e("535308"),
          n.e("393514"),
          n.e("816027"),
          n.e("562772"),
          n.e("970604"),
          n.e("504715"),
          n.e("677624"),
          n.e("165291"),
          n.e("796668"),
          n.e("953327"),
          n.e("733814"),
          n.e("106980"),
          n.e("839772"),
          n.e("814431"),
          n.e("763214"),
          n.e("291103"),
          n.e("59599"),
          n.e("488602"),
          n.e("426737"),
          n.e("607468"),
          n.e("440636"),
          n.e("568960"),
          n.e("315289"),
          n.e("372883"),
          n.e("396635"),
          n.e("807007"),
          n.e("162775"),
          n.e("128804"),
          n.e("60882"),
          n.e("71151"),
          n.e("985301"),
          n.e("790484"),
          n.e("211004"),
          n.e("269714"),
          n.e("62849"),
          n.e("489020"),
          n.e("670058"),
          n.e("527798"),
          n.e("892877"),
          n.e("322497"),
          n.e("249918"),
          n.e("507140"),
          n.e("862543"),
          n.e("759086"),
          n.e("504374"),
          n.e("584996"),
          n.e("101105"),
          n.e("263406"),
          n.e("1955"),
          n.e("341161"),
          n.e("410526"),
          n.e("202985"),
          n.e("603619"),
          n.e("222969"),
          n.e("515363"),
          n.e("227853"),
          n.e("286615"),
          n.e("70866"),
          n.e("311541"),
          n.e("472847"),
          n.e("870088"),
          n.e("300641"),
          n.e("932020"),
          n.e("586662"),
          n.e("758053"),
          n.e("247471"),
          n.e("889002"),
          n.e("709976"),
          n.e("750955"),
          n.e("953343"),
          n.e("279774"),
          n.e("763945"),
          n.e("261204"),
          n.e("686731"),
          n.e("807432"),
          n.e("873532"),
          n.e("590088"),
          n.e("60104"),
          n.e("46083"),
          n.e("857297"),
          n.e("295570"),
          n.e("327439"),
          n.e("747802"),
          n.e("626353"),
          n.e("71169"),
          n.e("906470"),
          n.e("736663"),
          n.e("419121"),
          n.e("919789"),
          n.e("669130"),
          n.e("802890"),
          n.e("82937"),
          n.e("987221"),
          n.e("157064"),
          n.e("156957"),
          n.e("918786"),
          n.e("701335"),
          n.e("257935"),
          n.e("724086"),
          n.e("358937"),
          n.e("448738"),
          n.e("680431"),
          n.e("338332"),
          n.e("894292"),
          n.e("153302"),
          n.e("88683"),
          n.e("363874"),
          n.e("923981"),
          n.e("750370"),
          n.e("972281"),
          n.e("307107"),
          n.e("896622"),
          n.e("466592"),
          n.e("73946"),
          n.e("282050"),
          n.e("436101"),
          n.e("976888"),
          n.e("387970"),
          n.e("847445"),
          n.e("547510"),
          n.e("966366"),
          n.e("983513"),
          n.e("76928"),
          n.e("355502"),
          n.e("528311"),
          n.e("377109"),
          n.e("74886"),
          n.e("713273"),
          n.e("515293"),
          n.e("193457"),
          n.e("892937"),
          n.e("420446"),
          n.e("490449"),
          n.e("148758"),
          n.e("36026"),
          n.e("291043"),
          n.e("119766"),
          n.e("589154"),
          n.e("888499"),
          n.e("839182"),
          n.e("52727"),
          n.e("423117"),
          n.e("169727"),
          n.e("595990"),
          n.e("377368"),
          n.e("123727"),
          n.e("348567"),
          n.e("452075"),
          n.e("900277"),
          n.e("127962"),
          n.e("76428"),
          n.e("834552"),
          n.e("863232"),
          n.e("993103"),
          n.e("364827"),
          n.e("708757"),
          n.e("517888"),
          n.e("811133"),
          n.e("959880"),
          n.e("174016"),
          n.e("907167"),
          n.e("910471"),
          n.e("11301"),
          n.e("952372"),
          n.e("784569"),
          n.e("861060"),
          n.e("77333"),
          n.e("264572"),
          n.e("639161"),
          n.e("477175"),
          n.e("960235"),
          n.e("402368"),
          n.e("190779"),
          n.e("716460"),
          n.e("221856"),
          n.e("678157"),
          n.e("147134"),
          n.e("883846"),
          n.e("996481"),
          n.e("331988"),
          n.e("585968"),
          n.e("40291"),
          n.e("733115"),
          n.e("397270"),
          n.e("373122"),
          n.e("724285"),
          n.e("293159"),
          n.e("755936"),
          n.e("147662"),
          n.e("209338"),
          n.e("749894"),
          n.e("927875"),
          n.e("833703"),
          n.e("256274"),
          n.e("544571"),
          n.e("692990"),
          n.e("362931"),
          n.e("745959"),
          n.e("858529"),
          n.e("481987"),
          n.e("595653"),
          n.e("958038"),
          n.e("532039"),
          n.e("719466"),
          n.e("776458"),
          n.e("576909"),
          n.e("27355"),
          n.e("406174"),
          n.e("715555"),
          n.e("776273"),
          n.e("407170"),
          n.e("572963"),
          n.e("307575"),
          n.e("229787"),
          n.e("554241"),
          n.e("724303"),
          n.e("521930"),
          n.e("53102"),
          n.e("875842"),
          n.e("88599"),
          n.e("95340"),
          n.e("354044"),
          n.e("437065"),
          n.e("709640"),
          n.e("952548"),
          n.e("636373"),
          n.e("726033"),
          n.e("655708"),
          n.e("553984"),
          n.e("884601"),
          n.e("782969"),
          n.e("14035"),
          n.e("428967"),
          n.e("475324"),
          n.e("859546"),
          n.e("608032"),
          n.e("477970"),
          n.e("386317"),
          n.e("252229"),
          n.e("77473"),
          n.e("523276"),
          n.e("25279"),
          n.e("729963"),
          n.e("812042"),
          n.e("538513"),
          n.e("102328"),
          n.e("147864"),
          n.e("830938"),
          n.e("895785"),
          n.e("122990"),
          n.e("113458"),
          n.e("534874"),
          n.e("50097"),
          n.e("518954"),
          n.e("500520"),
          n.e("201050"),
          n.e("93461"),
          n.e("203930"),
          n.e("903663"),
          n.e("36877"),
          n.e("908081"),
          n.e("829260"),
          n.e("489523"),
          n.e("25212"),
          n.e("504098"),
          n.e("245691"),
          n.e("604172"),
          n.e("568881"),
          n.e("582486"),
          n.e("350949"),
          n.e("134504"),
          n.e("908608"),
          n.e("741786"),
          n.e("553683"),
          n.e("280098"),
          n.e("704374"),
          n.e("186546"),
          n.e("723934"),
          n.e("571294"),
          n.e("598421"),
          n.e("845928"),
          n.e("443256"),
          n.e("646424"),
          n.e("114633"),
          n.e("373566"),
          n.e("720161"),
          n.e("247339"),
          n.e("897117"),
          n.e("659624"),
          n.e("384100"),
          n.e("736637"),
          n.e("653308"),
          n.e("414501"),
          n.e("819119"),
          n.e("182816"),
          n.e("64500"),
          n.e("486825"),
          n.e("487318"),
          n.e("69658"),
          n.e("671367"),
          n.e("375072"),
          n.e("569443"),
          n.e("49282"),
          n.e("235683"),
          n.e("702091"),
        ]).then(n.bind(n, 577593));
    }, [u.length]),
    0 === u.length)
      ? null
      : (0, i.jsx)(nx.A, {
          targetElementRef: t,
          position: "right",
          gradientColor: "blue",
          graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/06b7b29c0f2eac5ce71823e813f9989b2a53aba0998090a4fa1d0ab6241127a9.svg",
          },
          title: eV.intl.string(eV.t.HMWL9c),
          body: eV.intl.string(eV.t["9hfy3A"]),
          onRequestClose: () =>
            _(
              u.map((e) => e.id),
              nK.i.USER_DISMISS,
            ),
          actions: [
            {
              text: eV.intl.string(eV.t.VSLDly),
              loading: s,
              onClick: function () {
                (l(!0),
                  (0, tQ.openUserProfileModal)({ userId: o, tabSection: n$.RP.WIDGETS })
                    .then(() => {
                      let e = u.map((e) => e.id);
                      ((0, p.openModalLazy)(
                        async () => {
                          let { default: t } = await Promise.all([
                            n.e("515293"),
                            n.e("193457"),
                            n.e("892937"),
                            n.e("169727"),
                            n.e("487697"),
                            n.e("518954"),
                            n.e("504098"),
                            n.e("723934"),
                            n.e("720161"),
                            n.e("182816"),
                            n.e("911581"),
                          ]).then(n.bind(n, 51820));
                          return (n) =>
                            (0, i.jsx)(t, {
                              ...n,
                              trackUserProfileEditAction: () => {},
                              highlightedApplicationIds: e,
                            });
                        },
                        { stackingBehavior: "stack" },
                      ),
                        _(
                          u.map((e) => e.id),
                          nK.i.TAKE_ACTION,
                        ),
                        a());
                    })
                    .finally(() => l(!1)));
              },
            },
          ],
        });
  }
  var nX = n(461213),
    nZ = n(818348),
    nq = n(709516);
  function nQ() {
    let e = (0, d.bG)([nX.A], () => nX.A.getStatus()),
      t = (0, nt.MU)(e) ?? "",
      n = e === nZ.cl.INVISIBLE || e === nZ.cl.OFFLINE;
    return (0, i.jsxs)("div", {
      className: nq.k,
      children: [
        (0, i.jsxs)(f.A, { tag: "div", children: [eV.intl.string(eV.t.AHoLf4), ":"] }),
        t,
        t.length > 0 &&
          n &&
          (0, i.jsx)(e0.m, {
            text: eV.intl.string(eV.t.L99HQm),
            children: (0, i.jsx)(nR.E, {
              size: "xs",
              color: nN.A.colors.STATUS_WARNING,
              "aria-label": eV.intl.string(eV.t.L99HQm),
            }),
          }),
      ],
    });
  }
  var nJ = n(146901),
    n0 = n(827827);
  let n1 = [
      { duration: 15 * w.A.Millis.MINUTE, label: () => eV.intl.string(eV.t["8ot6gv"]) },
      { duration: w.A.Millis.HOUR, label: () => eV.intl.string(eV.t.UMWBZr) },
      { duration: 8 * w.A.Millis.HOUR, label: () => eV.intl.string(eV.t.EpAXPC) },
      { duration: w.A.Millis.DAY, label: () => eV.intl.string(eV.t["755t4q"]) },
      { duration: 3 * w.A.Millis.DAY, label: () => eV.intl.string(eV.t["f3/1ch"]) },
      { duration: void 0, label: () => eV.intl.string(eV.t["46dqJY"]) },
    ],
    n2 = "forever";
  function n3(e) {
    let { status: t, currentStatus: n, description: r } = e,
      a = t !== th.clD.ONLINE,
      s = (0, i.jsx)(i.Fragment, {
        children: n1.map((e) => {
          let { duration: r, label: a } = e;
          return (0, i.jsx)(
            nC.Dr,
            {
              id: `${t}-${r}`,
              label: a(),
              action: () => (0, n0.A)({ nextStatus: t, prevStatus: n, durationMillis: r }),
              dontCloseOnAction: !0,
            },
            r ?? n2,
          );
        }),
      });
    return (0, i.jsx)(nC.Dr, {
      id: t,
      keepItemStyles: !0,
      hasSubmenu: a,
      label: (0, nt.MU)(t),
      subtext: r,
      iconLeft: () => (0, i.jsx)(eR.nW, { status: t, size: 10 }),
      leadingAccessory: { type: "status", status: t },
      action: () => {
        (0, n0.A)({ nextStatus: t, prevStatus: n });
      },
      dontCloseOnAction: !0,
      children: a ? s : void 0,
    });
  }
  function n6(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: i } = (0, nJ._)(e);
    return "today" === t
      ? eV.intl.formatToPlainString(eV.t.ZxxHIO, { timeString: i })
      : eV.intl.formatToPlainString(eV.t["9OFjSe"], { dateString: n, timeString: i });
  }
  var n5 = n(996988),
    n4 = n(207634),
    n7 = n(47453);
  function n8(e) {
    let {
        currentUser: t,
        onClose: n,
        setPopoutRef: a,
        highlightBadge: l,
        openedAt: o,
        className: u,
      } = e,
      A = __OVERLAY__,
      h = (0, tq.Ay)(t.id, void 0),
      { analyticsLocations: I } = (0, M.Ay)(b.A.USER_PROFILE_ACCOUNT_POPOUT),
      T = (0, tX.pb)({ layout: "ACCOUNT_POPOUT", userId: t.id, guildId: void 0 });
    (0, t$.A)(I, h, n$.R7.ACCOUNT_POPOUT);
    let { ref: m } = (0, eP.Ay)(),
      { isHoveringOrFocusing: g, isHovering: S } = (0, tr.A)(m);
    (r.useEffect(() => {
      a?.(m.current);
    }, [m, a]),
      r.useEffect(
        () => (
          tP.A.setState({ isOpen: !0 }),
          () =>
            tP.A.setState({
              isOpen: !1,
              shouldRenderTenureLevelUp: !1,
              shouldScrollToOrbsMenuItem: !1,
            })
        ),
        [],
      ));
    let N = (0, d.bG)([nT.A], () => nT.A.getStatus(t.id)),
      C = n6(ns.CY.useSetting()),
      O = (0, d.bG)([nm.A], () => nm.A.hidePersonalInformation),
      R = (0, tD.kB)(),
      L = ns.Q_.useSetting(),
      y = (function (e) {
        let t = ns.CY.useSetting(),
          n = (0, tD.kB)(),
          r = ns.Jr.useSetting();
        function a(i) {
          let r = n6(t);
          if (e === i && null != r) return r;
          switch (i) {
            case th.clD.DND:
              return n ? eV.intl.string(eV.t.day5A6) : eV.intl.string(eV.t["tq/fMK"]);
            case th.clD.INVISIBLE:
              return eV.intl.string(eV.t.zPc6Mc);
            default:
              return;
          }
        }
        let s = (0, i.jsx)(i.Fragment, {
            children: n1.map((t) => {
              let { duration: n, label: r } = t;
              return (0, i.jsx)(
                nC.Dr,
                {
                  id: `${e}-${n}`,
                  label: r(),
                  action: () => {
                    (0, tD.ES)(!0, n);
                  },
                  dontCloseOnAction: !0,
                },
                n ?? n2,
              );
            }),
          }),
          l = n3({ status: th.clD.ONLINE, currentStatus: e }),
          o = n3({ status: th.clD.IDLE, currentStatus: e, description: a(th.clD.IDLE) }),
          d = n3({ status: th.clD.DND, currentStatus: e, description: a(th.clD.DND) }),
          c = n3({ status: th.clD.INVISIBLE, currentStatus: e, description: a(th.clD.INVISIBLE) });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l,
            (0, i.jsx)(nC.bX, {}, "menu-separator-statuses"),
            o,
            d,
            c,
            n
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(nC.bX, {}, "menu-separator-statuses"),
                    (0, i.jsx)(
                      nC.Dr,
                      {
                        id: "quiet-mode",
                        "aria-label": "focus mode",
                        keepItemStyles: !0,
                        hasSubmenu: !0,
                        label: eV.intl.string(eV.t.gJRnwK),
                        iconLeft: eL.BellSlashIcon,
                        leadingAccessory: { type: "icon", icon: eL.BellSlashIcon },
                        badge: { text: eV.intl.string(eV.t.ApAu9f) },
                        subtext:
                          null != r && "0" !== r
                            ? eV.intl.format(eV.t.BWD8fs, {
                                endTime: new Date(Number(r)).toLocaleString(eV.intl.currentLocale, {
                                  month: "numeric",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "2-digit",
                                }),
                              })
                            : eV.intl.string(eV.t["Br1q+x"]),
                        action: () => {
                          (0, tD.ES)(!n);
                        },
                        dontCloseOnAction: !0,
                        children: s,
                      },
                      "quiet-mode",
                    ),
                  ],
                })
              : null,
          ],
        });
      })(N),
      D = (function (e) {
        let t = (0, d.bG)([nD.default], () => nD.default.getCurrentUser()),
          n = (0, d.bG)([nm.A], () => nm.A.hidePersonalInformation),
          r = (0, d.bG)([nL.A], () => (0, tU.M)(nL.A.theme)),
          { multiAccountUsers: a } = (0, nP.K)(),
          s = a.map((a) => {
            let s = new ny.A(a),
              l = s.id === t?.id,
              o = a.tokenStatus === nM.U.INVALID,
              d = n ? null : `#${s.discriminator}`;
            return (0, i.jsx)(
              nC.Dr,
              {
                id: s.id,
                focusedClassName: nG.in,
                void_label: (e) => {
                  let { isFocused: t } = e;
                  return (0, i.jsxs)("div", {
                    className: nG.ci,
                    children: [
                      (0, i.jsx)(_.eu, {
                        src: s.getAvatarURL(void 0, 40),
                        size: E._3.SIZE_24,
                        "aria-label": a.username,
                      }),
                      (0, i.jsxs)("div", {
                        className: nG.DD,
                        children: [
                          (0, i.jsx)(eF.E, {
                            className: nG.gE,
                            variant: "text-sm/normal",
                            children: nt.Ay.getUserTag(s, {
                              mode: "username",
                              identifiable: n ? "never" : "always",
                            }),
                          }),
                          !s.hasUniqueUsername() &&
                            (0, i.jsx)(eF.E, {
                              className: nG.df,
                              variant: "text-sm/normal",
                              children: d,
                            }),
                        ],
                      }),
                      l &&
                        (0, i.jsx)(nO.y, {
                          size: "sm",
                          color: t
                            ? nN.A.unsafe_rawColors.WHITE.css
                            : nN.A.unsafe_rawColors.BRAND_500.css,
                          secondaryColor:
                            (t && r) || (t && !r)
                              ? nN.A.unsafe_rawColors.BRAND_500.css
                              : nN.A.unsafe_rawColors.WHITE.css,
                          className: nG.s0,
                        }),
                      o &&
                        (0, i.jsx)(nR.E, {
                          color: nN.A.unsafe_rawColors.RED_400.css,
                          secondaryColor:
                            (t && r) || (t && !r)
                              ? nN.A.unsafe_rawColors.BRAND_500.css
                              : nN.A.unsafe_rawColors.WHITE.css,
                          size: "xs",
                          className: nG.s0,
                        }),
                    ],
                  });
                },
                action: () => {
                  if ((e?.(), o)) (0, nU.A)();
                  else {
                    var n;
                    (n = s.id) !== t?.id &&
                      (nv.default.track(th.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                        location: { section: th.JJy.USER_PROFILE },
                      }),
                      nb.Mx(n, void 0, nw.WX.MULTI_ACCOUNT_MENU));
                  }
                },
              },
              s.id,
            );
          });
        return (
          s.push(
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(nC.bX, {}),
                (0, i.jsx)(nC.Dr, {
                  id: "manage-accounts",
                  label: eV.intl.string(eV.t.WbFpq4),
                  action: () => {
                    (e?.(), (0, nU.A)());
                  },
                }),
              ],
            }),
          ),
          s
        );
      })(n),
      v = (0, tz.A)({ analyticsLocations: I }),
      U = (0, tx.TW)(t),
      w = (0, P.J)({ location: "UserProfileAccountPopout" }),
      G = (0, eU.d)({ location: "UserProfileAccountPopout" }),
      x = r.useRef(null),
      k = r.useRef(null),
      F = r.useRef(null),
      B = (0, tC.A)(h?.profileFrame?.skuId),
      V = (0, tN.A)(h?.profileFrame?.skuId);
    (0, tO.A)({ skuId: h?.profileFrame?.skuId, openedAt: o, context: T, analyticsLocations: I });
    let H = r.useRef((0, tP.A)((e) => e.shouldRenderTenureLevelUp)),
      j = r.useMemo(() => (0, tL.A)(), []),
      [W, Y] = r.useState(() => tP.A.getState().shouldRenderTenureLevelUp);
    function K(e) {
      (n?.(),
        (0, tQ.openUserProfileModal)({
          customStatusPrompt: j,
          sourceAnalyticsLocations: I,
          ...T,
          ...e,
        }));
    }
    r.useEffect(() => {
      let e = setTimeout(() => {
        Y(!1);
      }, 500);
      return () => clearTimeout(e);
    }, []);
    let $ = h?.widgets != null && h.widgets.length > 0,
      z = r.useCallback(() => {
        n();
      }, [n]),
      X = r.useCallback(() => {
        (v(), z());
      }, [v, z]),
      Z = (0, ee.u)("UserProfileAccountPopout"),
      q = tZ.A.useConfig({ location: "UserProfileAccountPopout" }).enabled,
      Q = (0, nl.H)({ location: "UserProfileAccountPopout" }),
      J = (0, tP.A)((e) => e.shouldScrollToOrbsMenuItem),
      [et, en] = (0, ty.kn)(
        [
          Z ? c.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE : void 0,
          q ? c.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK : void 0,
        ].filter(ng.Vq),
        void 0,
        !0,
      ),
      ei = r.useId();
    return (0, i.jsx)(M.f5, {
      value: I,
      children: (0, i.jsx)(tX.of, {
        value: T,
        openedAt: o,
        fetchStartedAt: h?.fetchStartedAt,
        fetchEndedAt: h?.fetchEndedAt,
        isLoaded: h?.isLoaded,
        children: (0, i.jsxs)(eg.l, {
          ref: m,
          "aria-labelledby": ei,
          className: s()(eH.jC, u),
          "data-layer": "base",
          children: [
            (0, i.jsx)(f.A, {
              children: (0, i.jsx)(eS.H, { id: ei, children: eV.intl.string(eV.t["5fWB8U"]) }),
            }),
            (0, i.jsxs)(eS.F, {
              children: [
                (0, i.jsxs)(t4.A, {
                  className: eH.BK,
                  user: t,
                  displayProfile: h,
                  themeType: n5.d.POPOUT,
                  children: [
                    (0, i.jsxs)("div", {
                      className: n7.wx,
                      children: [
                        (0, i.jsx)(t1.A, { user: t, displayProfile: h, themeType: n5.d.POPOUT }),
                        (0, i.jsx)(tJ.A, {
                          user: t,
                          displayProfile: h,
                          avatarSize: n4.T[n5.d.POPOUT].avatarSize,
                          onOpenProfile: A ? void 0 : K,
                        }),
                        (0, i.jsx)(nr.A, {
                          ref: x,
                          user: t,
                          themeType: n5.d.POPOUT,
                          onCloseProfile: n,
                          prompt: j,
                        }),
                      ],
                    }),
                    (0, i.jsxs)(eN.Ip, {
                      ref: F,
                      className: eH.rf,
                      style: { pointerEvents: W ? "none" : void 0 },
                      children: [
                        (0, i.jsx)(t3.A, { userId: t.id }),
                        (0, i.jsx)(t7.Ay, {
                          className: eH.eF,
                          user: t,
                          displayName: nS.Ay.getName(void 0, null, t),
                          onClickName: A ? void 0 : K,
                          displayNameTrailing: (0, i.jsx)(ni, { user: t, isVisible: g }),
                          pronouns: h?.pronouns,
                          trailing: (0, i.jsx)(t0.A, {
                            displayProfile: h,
                            themeType: n5.d.POPOUT,
                            onClose: n,
                            shouldOpenBadgeTooltip: null != l ? (e) => e === l : void 0,
                            shouldGlowTenureBadge: H.current,
                          }),
                        }),
                        (0, i.jsx)(t2.A, { isPremiumUser: U, onInteraction: n }),
                        (0, i.jsx)(na.A, {
                          userId: t.id,
                          userBio: h?.bio,
                          hidePersonalInformation: O,
                          onClose: n,
                        }),
                        $ &&
                          (0, i.jsx)(t5.A, {
                            user: t,
                            widgets: h?.widgets,
                            onOpenUserProfileModal: K,
                          }),
                        (0, i.jsx)(t6.A, {
                          user: t,
                          currentUser: t,
                          onOpenUserProfileModal: K,
                          onClose: n,
                        }),
                        (0, i.jsxs)("div", {
                          className: eH.T_,
                          children: [
                            (0, i.jsx)(t4.A.Overlay, {
                              className: eH.g0,
                              children: (0, i.jsxs)(eY, {
                                children: [
                                  (0, i.jsx)(eW, {
                                    action: "EDIT_PROFILE",
                                    label: eV.intl.string(eV.t.s5vZlQ),
                                    icon: eC.PencilIcon,
                                    trailing:
                                      null != et
                                        ? (0, i.jsx)("div", {
                                            className: eH.IO,
                                            "aria-hidden": !0,
                                            children: (0, i.jsx)(eO.E, {
                                              type: "new",
                                              variant: "brand",
                                            }),
                                          })
                                        : null,
                                    onClick: () => {
                                      (et ===
                                        c.M.DISPLAY_NAME_STYLES_FLYWHEEL_EDIT_PROFILE_NEW_BADGE &&
                                        en(nK.i.TAKE_ACTION),
                                        X());
                                    },
                                    ref: k,
                                  }),
                                  (0, i.jsx)(eW, {
                                    action: "PRESS_SET_STATUS",
                                    label: (0, i.jsx)(nQ, {}),
                                    sublabel: null != C && C,
                                    icon: () => (0, i.jsx)(eR.nW, { status: N, size: 12 }),
                                    trailing:
                                      (R || N === th.clD.DND) &&
                                      (0, i.jsx)(eL.BellSlashIcon, { size: "xxs" }),
                                    renderSubmenu: em.Fr
                                      ? void 0
                                      : (e) => {
                                          let { closePopout: t } = e;
                                          return (0, i.jsx)(ej, {
                                            navId: "set-status-submenu",
                                            className: eH.hQ,
                                            "aria-label": eV.intl.string(eV.t.E13trI),
                                            onClose: t,
                                            children: y,
                                          });
                                        },
                                    onClick: em.Fr
                                      ? () => {
                                          (n(),
                                            (0, p.openModalLazy)(
                                              () =>
                                                new Promise((e) =>
                                                  e((e) => {
                                                    let { onClose: t, ...n } = e;
                                                    return (0, i.jsx)(ey.d, {
                                                      onClose: t,
                                                      ...n,
                                                      size: "sm",
                                                      "aria-label": eV.intl.string(eV.t["3Uj+2p"]),
                                                      children: (0, i.jsx)(eD.W, {
                                                        "data-menu-migrated": !0,
                                                        navId: "set-status-submenu-mobile-web",
                                                        variant: "fixed",
                                                        "aria-label": eV.intl.string(eV.t.E13trI),
                                                        hideScroller: !0,
                                                        onClose: t,
                                                        onSelect: void 0,
                                                        children: y,
                                                      }),
                                                    });
                                                  }),
                                                ),
                                            ));
                                        }
                                      : void 0,
                                  }),
                                  w &&
                                    G &&
                                    (0, i.jsx)(eW, {
                                      action: "PRESS_VIEW_BADGES",
                                      icon: ev.q,
                                      label: eV.intl.string(eV.t.l6w3Vj),
                                      onClick: () => {
                                        (n(),
                                          (0, ew.openBadgeDirectoryModal)({
                                            viewingCurrentUserBadges: !0,
                                          }));
                                      },
                                    }),
                                  (0, i.jsx)(tg, { onClose: n, popoutContainerRef: m }),
                                  Q &&
                                    (0, i.jsx)(np, {
                                      popoutContainerRef: m,
                                      scrollerRef: F,
                                      shouldScrollIntoView: J,
                                      onCloseAccountPopout: n,
                                    }),
                                ],
                              }),
                            }),
                            (0, i.jsx)(t4.A.Overlay, {
                              className: eH.g0,
                              children: (0, i.jsxs)(eY, {
                                children: [
                                  (0, i.jsx)(eW, {
                                    action: "PRESS_SWITCH_ACCOUNTS",
                                    icon: eb.r,
                                    label: eV.intl.string(eV.t.oMNyYN),
                                    onClick: () => {
                                      (n(), (0, nU.A)());
                                    },
                                    renderSubmenu: (e) => {
                                      let { closePopout: t } = e;
                                      return (0, i.jsx)(ej, {
                                        navId: "switch-accounts-submenu",
                                        "aria-label": eV.intl.string(eV.t.wFhVqL),
                                        onClose: t,
                                        children: D,
                                      });
                                    },
                                  }),
                                  !__OVERLAY__ &&
                                    ne.p5 &&
                                    L &&
                                    (0, i.jsx)(eW, {
                                      action: "COPY_USER_ID",
                                      icon: eM.L,
                                      label: eV.intl.string(eV.t["/AXYnE"]),
                                      onClick: () => {
                                        ((0, ne.C)(t.id), n());
                                      },
                                    }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    h?.profileEffect != null &&
                      !H.current &&
                      (0, i.jsx)(tS.A, { skuId: h.profileEffect.skuId, isHovering: S }),
                    null != B && (0, i.jsx)(tR.A, { frame: B, fadeIn: V }),
                  ],
                }),
                (0, i.jsx)(nz, { targetElementRef: k, onClose: n }),
                (0, i.jsx)(tY, {}),
              ],
            }),
          ],
        }),
      }),
    });
  }
  var n9 = n(518293),
    ie = n(655116),
    it = n(438140),
    ii = n(454719),
    ir = n(342296),
    ia = n(852712),
    is = n(389960),
    il = n(173660),
    io = n(616356),
    id = n(734057),
    ic = n(629016),
    iu = n(186111),
    i_ = n(192820),
    iE = n(763827),
    iA = n(967198),
    ih = n(485296),
    iI = n(486020),
    ip = n(625494),
    iT = n(536194),
    im = n(19575),
    ig = n(994314),
    iS = n(485599),
    iN = n(116833);
  function iC(e) {
    let t = "progress" === e.variant,
      n = t
        ? {
            title: eV.intl.string(eV.t.uwDBSq),
            body: eV.intl.formatToPlainString(eV.t.Mk5nzZ, { count: e.newBadgeCount }),
          }
        : { title: eV.intl.string(eV.t["5GD53o"]), body: eV.intl.string(eV.t["2Rb7tE"]) };
    return (0, i.jsx)(nx.A, {
      targetElementRef: e.targetElementRef,
      shouldShow: !0,
      position: "top",
      alignmentStrategy: "edge",
      align: "left",
      caretConfig: { align: "start" },
      size: "lg",
      graphic: {
        type: "dynamic",
        component: iN.DynamicGraphicComponent.BADGE_DIRECTORY_NUX,
        props: { hasProgress: t, badgeIconUrls: t ? e.badgeIconUrls : void 0 },
        aspectRatio: "21/9",
      },
      title: n.title,
      body: n.body,
      actions: [
        { variant: "primary", text: eV.intl.string(eV.t.pHo9tZ), onClick: e.onPrimaryAction },
      ],
      onRequestClose: e.onRequestClose,
    });
  }
  function iO(e) {
    let { variantProps: t, targetElementRef: n, markAsDismissed: r } = e;
    return (0, i.jsx)(iC, {
      ...t,
      onPrimaryAction: () => {
        (r(nK.i.TAKE_ACTION), (0, ew.openBadgeDirectoryModal)());
      },
      onRequestClose: () => r(nK.i.USER_DISMISS),
      targetElementRef: n,
    });
  }
  var iR = n(206248);
  function iL(e) {
    let {
        targetElementRef: t,
        markAsDismissed: n,
        onCheckItOut: r,
        position: a,
        shouldShow: s = !0,
        children: l,
      } = e,
      o = (0, ez.sw)();
    return (0, i.jsxs)(i.Fragment, {
      children: [
        l,
        s && o
          ? (0, i.jsx)(iR.H, {
              targetElementRef: t,
              title: eV.intl.string(tI.default.Qn21R6),
              body: eV.intl.string(tI.default.eFDg0b),
              badge: "beta",
              assetUrl:
                "https://cdn.discordapp.com/assets/content/4c8a4a5e95e1fc7ef746d21f8fb3153da946324813f8551c86a19266ed8e9ab0.png",
              disableMediaViewer: !0,
              position: a,
              caretConfig: { align: "center" },
              action: {
                text: eV.intl.string(eV.t.RzWDqY),
                onClick: function () {
                  (n(nK.i.TAKE_ACTION), r());
                },
              },
              onRequestClose: function () {
                n(nK.i.USER_DISMISS);
              },
            })
          : null,
      ],
    });
  }
  var iy = n(379848),
    iD = n(626584),
    iv = n(757036),
    ib = n(591179),
    iM = n(531685),
    iP = n(259065),
    iU = n(763052);
  let iw = new iD.A("DisplayNameStylesFlywheelCoachmark");
  function iG(e) {
    let { markAsDismissed: t, targetElementRef: n, children: a } = e,
      { analyticsLocations: s } = (0, M.Ay)(),
      l = (0, r.useRef)(null),
      o = (0, d.bG)([iM.A], () => iM.A.isFocused()),
      c = (0, iv.L)(tF.PremiumTypes.TIER_2),
      u = (0, ib.X)("DisplayNameStylesFlywheelCoachmark"),
      _ = (0, r.useCallback)(() => {
        t(nK.i.TAKE_ACTION);
        let e = nD.default.getCurrentUser();
        u && null != e
          ? (0, tQ.openUserProfileModal)({
              userId: e.id,
              sourceAnalyticsLocations: s,
              onModalOpen: () => {
                (0, iP.L)({ analyticsLocations: s, stackingBehavior: "stack" });
              },
            })
          : (0, e$.openUserSettings)(eK.X.PROFILE_PANEL, { analyticsLocations: s }, () => {
              (0, iP.L)({ analyticsLocations: s });
            });
      }, [t, s, u]),
      E = (0, r.useCallback)(() => {
        t(nK.i.USER_DISMISS);
      }, [t]);
    (0, r.useEffect)(() => {
      o && l.current?.paused ? l.current?.play().catch(iw.error) : o || l.current?.pause();
    }, [o]);
    let A = c ? [eV.intl.string(iU.default.TyUdka)] : [eV.intl.string(iU.default.dluV0R)];
    return (0, i.jsxs)(i.Fragment, {
      children: [
        a,
        (0, i.jsx)(nx.A, {
          targetElementRef: n,
          shouldShow: !0,
          onRequestClose: E,
          align: "right",
          position: "top",
          caretConfig: { align: "center" },
          gradientColor: "nitro-pink",
          graphic: {
            type: "video",
            ref: l,
            src: "https://cdn.discordapp.com/assets/content/c0da8c4f64ef225b01b94a5c05d7fece18b9f36338c1f214ffb7b26299058973.webm",
            aspectRatio: "21/9",
            loop: !0,
          },
          size: "lg",
          title: eV.intl.string(iU.default.cYwrp8),
          body: A,
          actions: [{ text: eV.intl.string(eV.t["4P5I8V"]), variant: "primary", onClick: _ }],
        }),
      ],
    });
  }
  var ix = n(45780),
    ik = n(696451),
    iF = n(71393),
    iB = n(685073),
    iV = n(73153);
  let iH = { lastSeenInfos: {} },
    ij = iH;
  class iW extends d.Ay.PersistedStore {
    static displayName = "GuildTagChangedCoachmarkStore";
    static persistKey = "GuildTagChangedCoachmarkStore";
    initialize(e) {
      ij = e ?? iH;
    }
    getState() {
      return ij;
    }
    getGuildLastSeenInfo(e) {
      return ij.lastSeenInfos[e] ?? null;
    }
  }
  let iY = new iW(iV.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
      let { guildId: t, lastSeenInfo: n } = e;
      ij.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
      ij = iH;
    },
  });
  var iK = n(514661);
  let i$ = new iD.A("GuildTagAvailableCoachmark");
  function iz(e) {
    let t = (0, d.bG)([iF.A], () => iF.A.getGuild(e.guildId));
    function n(n) {
      (t?.profile?.tag != null &&
        iV.h.dispatch({
          type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
          guildId: t.id,
          lastSeenInfo: { tag: t.profile.tag },
        }),
        e.onDismiss?.(n));
    }
    let {
      isAdopting: r,
      onAdoptTag: a,
      onEditProfile: s,
    } = (0, iK.A)(t?.id ?? null, () => n(nK.i.TAKE_ACTION));
    if (null == t || !(0, iB.q0)(t))
      return (
        i$.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."),
        e.children
      );
    let l = [
      { text: eV.intl.string(eV.t.jwEaiX), loading: r, onClick: a, variant: "primary" },
      { text: eV.intl.string(eV.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
      children: [
        e.children,
        (0, i.jsx)(nx.A, {
          targetElementRef: e.targetElementRef,
          shouldShow: !0,
          position: "top",
          graphic: {
            type: "dynamic",
            component: iN.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
            props: { guildId: t.id, guildProfile: t.profile },
          },
          title: eV.intl.formatToPlainString(eV.t["m/Tc3n"], { guildName: t.name }),
          body: eV.intl.string(eV.t.DrAXIr),
          actions: l,
          size: "md",
          onRequestClose: () => n(nK.i.USER_DISMISS),
        }),
      ],
    });
  }
  function iX(e) {
    let t = (0, d.bG)([iF.A], () => iF.A.getGuild(e.guildId));
    function n(t) {
      e.onDismiss?.(t);
    }
    let {
      isAdopting: r,
      onAdoptTag: a,
      onEditProfile: s,
    } = (0, iK.A)(t?.id ?? null, () => n(nK.i.TAKE_ACTION));
    if (null == t || !(0, iB.q0)(t))
      return (
        i$.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."),
        e.children
      );
    let l = [
      { text: eV.intl.string(eV.t.jwEaiX), loading: r, onClick: a, variant: "primary" },
      { text: eV.intl.string(eV.t.s5vZlQ), onClick: s, variant: "secondary" },
    ];
    return (0, i.jsxs)(i.Fragment, {
      children: [
        e.children,
        (0, i.jsx)(nx.A, {
          targetElementRef: e.targetElementRef,
          shouldShow: !0,
          position: "top",
          graphic: {
            type: "dynamic",
            component: iN.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
            props: { guildId: t.id, guildProfile: t.profile },
          },
          title: eV.intl.formatToPlainString(eV.t.VFqnyU, { guildName: t.name }),
          body: eV.intl.string(eV.t.DrAXIr),
          actions: l,
          size: "md",
          onRequestClose: () => n(nK.i.USER_DISMISS),
        }),
      ],
    });
  }
  var iZ = n(843010),
    iq = n(764231),
    iQ = n(425713);
  function iJ(e) {
    let { groupName: t, targetElementRef: n } = e,
      r = tB(),
      a = (0, d.bG)([tM.Ay], () => tM.Ay.useReducedMotion),
      s = (0, tP.A)((e) => e.isOpen),
      l = (0, iZ.G)();
    return a || null == r || s || l
      ? null
      : (0, i.jsx)(iy.zJ, {
          contentType: c.M.NITRO_TENURE_BADGE_LEVEL_UP,
          timeRecurringConfig: { cooldownDurationMs: 12096e5 },
          groupName: t,
          children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e;
            return (0, i.jsx)(i0, {
              recentlyLeveledTenureBadge: r,
              markAsDismissed: a,
              targetElementRef: n,
              shouldShow: t === c.M.NITRO_TENURE_BADGE_LEVEL_UP,
            });
          },
        });
  }
  function i0(e) {
    let {
        recentlyLeveledTenureBadge: t,
        markAsDismissed: n,
        targetElementRef: a,
        shouldShow: s,
      } = e,
      l = tF.sp.indexOf(t),
      o = (0, iQ.I)(tF.sp[l > 0 ? l - 1 : l]).ambient,
      d = (0, r.useCallback)(() => {
        (n(nK.i.TAKE_ACTION),
          tP.A.setState({ shouldRenderTenureLevelUp: !0 }),
          ip._.dispatch(th.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
      }, [n]),
      c = (0, r.useCallback)(() => {
        n(nK.i.USER_DISMISS);
      }, [n]),
      u = tF.VD[t],
      _ = eV.intl.formatToPlainString(eV.t.ewkaVR, {
        timeMilestone: (0, iq.T)(u.id, u.tenureReqNumMonths)?.toLocaleLowerCase(),
      }),
      E = [{ text: eV.intl.string(eV.t.RzWDqY), variant: "primary", onClick: d }];
    return (0, i.jsx)(nx.A, {
      targetElementRef: a,
      onRequestClose: c,
      shouldShow: s,
      caretConfig: { align: "center" },
      graphic: null != o ? { type: "image", src: o, aspectRatio: "6/4" } : void 0,
      size: "lg",
      title: eV.intl.string(eV.t.VoDxsV),
      body: _,
      actions: E,
    });
  }
  var i1 = n(764014);
  function i2(e) {
    let { targetElementRef: t } = e,
      n = (0, tP.A)((e) => e.isOpen),
      [r, a] = (0, ty.kn)(
        n ? [] : [c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK],
        nK.m.ACCOUNT_NAME_ZONE,
        !0,
      );
    return r === c.M.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK
      ? (0, i.jsx)(nx.A, {
          targetElementRef: t,
          graphic: { type: "image", src: i1.A },
          position: "top",
          alignmentStrategy: "edge",
          align: "left",
          caretConfig: { align: "start" },
          title: eV.intl.string(eV.t["Q+dH5r"]),
          body: eV.intl.string(eV.t.YKJw4W),
          onRequestClose: () => a(nK.i.USER_DISMISS),
          actions: [
            {
              text: eV.intl.string(eV.t.dcOuei),
              onClick: function () {
                (a(nK.i.TAKE_ACTION),
                  tP.A.setState({ shouldScrollToOrbsMenuItem: !0 }),
                  nh.Ay.setUserOpenedWalletViaProfileDCF(!0),
                  ip._.dispatch(th.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
              },
            },
          ],
        })
      : null;
  }
  function i3(e) {
    let { isQuestBarEmpty: t, hasLoadedQuestBar: n } = (0, n9.c9)(),
      r = null != e.targetElementRef.current && t && n,
      [a, s] = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { shouldShow: n = !0 } = t,
          i = (0, ix.G$)(c.V.ADOPT_CLAN_IDENTITY_NOTICE, e ?? th.dJq),
          r = (0, d.bG)(
            [iF.A, nD.default, ik.Ay],
            () => {
              if (null === e) return !1;
              let t = iF.A.getGuild(e);
              if (void 0 === t || !(0, iB.Rg)(t) || null == t.profile || null === t.profile.tag)
                return !1;
              let n = nD.default.getCurrentUser();
              if (
                void 0 === n ||
                (n.primaryGuild?.identityGuildId === t.id && n.primaryGuild?.tag === t.profile.tag)
              )
                return !1;
              let i = ik.Ay.getMember(e, n.id);
              return null != i && !i.isPending;
            },
            [e],
          );
        return (0, ty.ww)(r && n && !i ? [c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2] : [], e ?? th.eGj);
      })(e.guildId, { shouldShow: r }),
      [l, o] = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { shouldShow: n = !0 } = t,
          i = e?.primaryGuild,
          r = i?.identityGuildId ?? null,
          a = (0, d.bG)([iY], () => (null === r ? null : iY.getGuildLastSeenInfo(r))),
          s = (0, d.bG)([iF.A], () => iF.A.getGuild(r)?.profile?.tag),
          l = null != s && i?.identityGuildId === r && i?.tag === null,
          o = null != r && a?.tag === s,
          u = null !== r && l && !o;
        return (0, ty.Wl)(u && n ? c.M.GUILD_TAG_UPDATED_COACHMARK : null, {
          cooldownDurationMs: 864e5,
        });
      })(e.currentUser, { shouldShow: r });
    return r
      ? a === c.M.GUILD_TAG_AVAILABLE_COACHMARK_V2
        ? (0, i.jsx)(iX, {
            guildId: e.guildId,
            onDismiss: s,
            targetElementRef: e.targetElementRef,
            children: e.children,
          })
        : l === c.M.GUILD_TAG_UPDATED_COACHMARK
          ? (0, i.jsx)(iz, {
              guildId: e.currentUser.primaryGuild?.identityGuildId ?? null,
              onDismiss: o,
              targetElementRef: e.targetElementRef,
              children: e.children,
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(iJ, {
                  groupName: nK.m.ACCOUNT_NAME_ZONE,
                  targetElementRef: e.targetElementRef,
                }),
                e.isOrbchievementsEnabled &&
                  (0, i.jsx)(i2, { targetElementRef: e.targetElementRef }),
                (0, i.jsx)(iy.Ay, {
                  contentTypes: e.additionalDCs ?? [],
                  groupName: nK.m.ACCOUNT_NAME_ZONE,
                  children: (t) => {
                    let { visibleContent: n, markAsDismissed: r } = t;
                    switch (n) {
                      case c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK:
                        return (0, i.jsx)(iG, {
                          markAsDismissed: r,
                          targetElementRef: e.targetElementRef,
                          children: e.children,
                        });
                      case c.M.CLIPS_PRIMARY_ENTRY_POINT_COACHMARK:
                        return (0, i.jsx)(iL, {
                          markAsDismissed: r,
                          position: "top",
                          targetElementRef: e.targetElementRef,
                          onCheckItOut: eq.p,
                          children: e.children,
                        });
                      case c.M.BADGE_DIRECTORY_NUX_POPOVER:
                        return (0, i.jsxs)(i.Fragment, {
                          children: [
                            e.children,
                            (0, i.jsx)(iO, {
                              variantProps: e.badgeDirectoryNuxPopoverVariant,
                              markAsDismissed: r,
                              targetElementRef: e.targetElementRef,
                            }),
                          ],
                        });
                      default:
                        return e.children;
                    }
                  },
                }),
              ],
            })
      : e.children;
  }
  var i6 = n(348858),
    i5 = n(615675),
    i4 = n(900797),
    i7 = n(847374),
    i8 = n(617354),
    i9 = n(829773),
    re = n(42473),
    rt = n(731854),
    rn = n(516171),
    ri = n(577755);
  function rr(e) {
    let {
        selfDeaf: t,
        serverDeaf: n,
        awaitingRemote: a,
        onClick: l,
        iconForeground: o,
        nameplate: d,
        shouldShowOutputDeviceChangedTooltip: c,
        dismissTooltips: u,
      } = e,
      _ = t || n,
      {
        Component: E,
        play: h,
        events: { onMouseEnter: f, onMouseLeave: I },
      } = (0, i6.I)(_ ? "undeafen" : "deafen"),
      p = n ? i5.T : E,
      { name: T } = (0, eT.x5)(rt.oh.AUDIO_OUTPUT),
      m = (0, i8.A)(t, n, a),
      { analyticsLocations: g } = (0, M.Ay)(b.A.AUDIO_OUTPUT_BUTTON),
      S = r.useRef(null);
    return (
      r.useEffect(() => () => h(), [_, h]),
      (0, i.jsx)(M.f5, {
        value: g,
        children: (0, i.jsx)(A.Y, {
          targetElementRef: S,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (
              u(),
              (0, i.jsx)(M.f5, {
                value: g,
                children: (0, i.jsx)(i9.A, {
                  onInteraction: (0, K.s)("AudioDeviceMenu", b.A.ACCOUNT),
                  onClose: t,
                  renderOutputDevices: !0,
                  renderOutputVolume: !0,
                  maybeRenderSpatialAudioCheckbox: !0,
                  renderSettingsButton: !0,
                }),
              })
            );
          },
          position: "top",
          align: "left",
          animation: A.Y.Animation.FADE,
          spacing: 4,
          children: (e, t) => {
            let { onClick: r } = e,
              { isShown: u } = t,
              E = u ? i4.t : i7.a;
            return (0, i.jsxs)("div", {
              ref: S,
              className: s()(rn.Lh, { [rn.v8]: _, [rn.q6]: u }),
              children: [
                (0, i.jsx)(re.A, {
                  "aria-checked": _,
                  "aria-label": eV.intl.string(eV.t.wjcRFX),
                  className: rn.eT,
                  disabled: a,
                  icon: (0, i.jsx)(p, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _ ? nN.A.colors.ICON_VOICE_MUTED : "currentColor",
                    className: o,
                  }),
                  iconForeground: _ ? ri.o : void 0,
                  innerClassName: s()({ [ri.T]: n }),
                  onClick: l,
                  onContextMenu: r,
                  onMouseEnter: f,
                  onMouseLeave: I,
                  plated: null != d,
                  redGlow: _,
                  role: "switch",
                  tooltipText: m,
                }),
                (0, i.jsx)(re.A, {
                  className: s()(rn.UT, { [rn.q6]: u }),
                  disabled: a,
                  icon: (0, i.jsx)(E, {
                    className: rn.$$,
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: _ ? nN.A.colors.ICON_VOICE_MUTED : "currentColor",
                  }),
                  onClick: r,
                  onContextMenu: r,
                  plated: null != d,
                  redGlow: _,
                  tooltipType: c ? "green_void_do_not_use" : void 0,
                  tooltipForceOpen: c,
                  tooltipPositionKey: c
                    ? eV.intl.formatToPlainString(eV.t["f+DDY/"], { outputDeviceName: T })
                    : void 0,
                  tooltipShouldShow: !u,
                  tooltipText: c
                    ? eV.intl.format(eV.t["f+DDY/"], { outputDeviceName: T })
                    : eV.intl.string(eV.t.aA4Vce),
                  "aria-label": c
                    ? eV.intl.formatToPlainString(eV.t["f+DDY/"], { outputDeviceName: T })
                    : eV.intl.string(eV.t.aA4Vce),
                }),
              ],
            });
          },
        }),
      })
    );
  }
  var ra = n(523875),
    rs = n(666654),
    rl = n(993719);
  let ro = {};
  class rd extends d.Ay.Store {
    static displayName = "CallFeedbackTutorialStore";
    getIsTutorialActive(e) {
      return ro[e] ?? !1;
    }
  }
  let rc = new rd(iV.h, {
    CALL_FEEDBACK_TUTORIAL_SHOW: function (e) {
      let { tutorialKey: t } = e;
      ro[t] = !0;
    },
    CALL_FEEDBACK_TUTORIAL_DISMISS: function (e) {
      let { tutorialKey: t } = e;
      ro[t] = !1;
    },
  });
  var ru = n(362823),
    r_ = n(980923),
    rE = n(436763),
    rA = n(222176),
    rh = n(973324);
  function rf(e) {
    let t,
      {
        selfMute: n,
        serverMute: a,
        suppress: l,
        awaitingRemote: o,
        iconForeground: c,
        onMouseEnter: u,
        onMouseLeave: _,
        onClick: E,
        nameplate: h,
        shouldShowSpeakingWhileMutedTooltip: f,
        shouldShowSpeakingWhilePTTTooltip: I,
        shouldShowInputDeviceChangedTooltip: p,
        shouldShowPTTJoinTooltip: T,
        dismissTooltips: m,
        speaking: g,
      } = e,
      S = (0, d.bG)([i_.Ay], () => i_.Ay.getMode() === rt.TB.PUSH_TO_TALK),
      N = (0, d.bG)([i_.Ay], () => i_.Ay.getSettings().modeOptions.shortcut),
      C = (0, d.bG)([rc], () => rc.getIsTutorialActive(ru.v.MUTE_TUTORIAL)),
      O = (0, d.bG)([iE.A], () => null != iE.A.getChannelId()),
      { name: R } = (0, eT.x5)(rt.oh.AUDIO_INPUT),
      { enabledInputProfiles: L } = (0, ia.d)({ location: "MicrophoneButton" }),
      y = r.useRef(null),
      D = n || l || a,
      v = (0, ra.L)(D ? "unmute" : "mute"),
      { analyticsLocations: P } = (0, M.Ay)(b.A.AUDIO_INPUT_BUTTON),
      { Component: U, events: w, play: G } = v,
      x = a || l ? rs.O : U;
    r.useEffect(() => () => G(), [D, G]);
    let k = (0, r_.A)(n, a, l, o);
    t = f
      ? {
          tooltipType: "green_void_do_not_use",
          tooltipText: eV.intl.string(eV.t["29gnR4"]),
          tooltipForceOpen: !0,
        }
      : T || I
        ? {
            tooltipType: "green_void_do_not_use",
            tooltipText: eV.intl.format(eV.t.c1qUOQ, { keybind: e8.dI(N).toLocaleUpperCase() }),
            tooltipForceOpen: !0,
          }
        : { tooltipText: k };
    let F = S && O,
      B = D ? nN.A.colors.ICON_VOICE_MUTED : "currentColor",
      V = r.useCallback(() => {
        (E(), C && rl.N(ru.v.MUTE_TUTORIAL));
      }, [E, C]);
    return (0, i.jsxs)(M.f5, {
      value: P,
      children: [
        (0, i.jsx)(A.Y, {
          targetElementRef: y,
          renderPopout: (e) => {
            let { closePopout: t } = e;
            return (
              m(),
              (0, i.jsx)(M.f5, {
                value: P,
                children: (0, i.jsx)(i9.A, {
                  onInteraction: (0, K.s)("AudioDeviceMenu", b.A.ACCOUNT),
                  onClose: t,
                  maybeRenderPTTCheckbox: !0,
                  renderInputProfiles: L.length > 0,
                  renderInputDevices: !0,
                  maybeRenderInputMeter: !0,
                  renderInputVolume: !0,
                  renderSettingsButton: !0,
                }),
              })
            );
          },
          position: "top",
          align: "left",
          animation: A.Y.Animation.FADE,
          spacing: 4,
          children: (e, n) => {
            let { onClick: r } = e,
              { isShown: a } = n,
              l = a ? i4.t : i7.a;
            return (0, i.jsxs)("div", {
              ref: y,
              className: s()(rn.Lh, { [rn.v8]: D, [rn.q6]: a }),
              children: [
                (0, i.jsx)(re.A, {
                  "aria-checked": D,
                  "aria-label": eV.intl.string(eV.t.w4m945),
                  className: rn.eT,
                  disabled: o,
                  icon: (0, i.jsx)(x, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: B,
                    className: c,
                  }),
                  onClick: V,
                  onContextMenu: r,
                  onMouseEnter: () => {
                    (u(), w.onMouseEnter());
                  },
                  onMouseLeave: () => {
                    (_(), w.onMouseLeave());
                  },
                  plated: null != h,
                  redGlow: D,
                  role: "switch",
                  ...t,
                  children: F ? (0, i.jsx)("div", { className: s()(rA.U, { [rA.z]: g }) }) : null,
                }),
                (0, i.jsx)(re.A, {
                  "aria-label": p
                    ? eV.intl.formatToPlainString(eV.t["18wnuD"], { inputDeviceName: R })
                    : eV.intl.string(eV.t.fRzCbB),
                  className: s()(rn.UT, { [rn.q6]: a }),
                  disabled: o,
                  icon: (0, i.jsx)(l, {
                    className: rn.$$,
                    size: "custom",
                    width: 12,
                    height: 12,
                    color: B,
                  }),
                  onClick: r,
                  onContextMenu: r,
                  onMouseEnter: u,
                  onMouseLeave: _,
                  plated: null != h,
                  redGlow: D,
                  tooltipType: p ? "green_void_do_not_use" : void 0,
                  tooltipForceOpen: p,
                  tooltipPositionKey: p
                    ? eV.intl.formatToPlainString(eV.t["18wnuD"], { inputDeviceName: R })
                    : void 0,
                  tooltipShouldShow: !a,
                  tooltipText: p
                    ? eV.intl.format(eV.t["18wnuD"], { inputDeviceName: R })
                    : eV.intl.string(eV.t.fRzCbB),
                }),
              ],
            });
          },
        }),
        (0, i.jsx)(nx.A, {
          targetElementRef: y,
          shouldShow: C,
          graphic: { type: "image", src: rh.A },
          onRequestClose: () => {
            rl.N(ru.v.MUTE_TUTORIAL);
          },
          position: "top",
          title: eV.intl.string(rE.default.VG4zAf),
          body: eV.intl.string(rE.default["8VIRzR"]),
        }),
      ],
    });
  }
  var rI = n(935399),
    rp = n(505312),
    rT = n(848847),
    rm = n(975807),
    rg = n(891262);
  let rS = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="143" height="107"><rect x="1" y="1" width="141" height="105" fill="none" stroke="hotpink" stroke-width="2"/></svg>')}`;
  function rN(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
      a = r.useMemo(
        () => [
          {
            text: eV.intl.string(rg.default["j4n5/K"]),
            variant: "primary",
            onClick: () => {
              ((0, rm.A)(eE.C1), t(nK.i.TAKE_ACTION));
            },
          },
        ],
        [t],
      ),
      s = r.useCallback(() => {
        t(nK.i.USER_DISMISS);
      }, [t]);
    return (0, i.jsx)(nx.A, {
      targetElementRef: n,
      graphic: { type: "image", src: rS, aspectRatio: "6/4" },
      title: eV.intl.string(rg.default.tmst3F),
      body: eV.intl.string(rg.default.sJHQqC),
      position: "top",
      caretConfig: { align: "end" },
      actions: a,
      onRequestClose: s,
    });
  }
  function rC(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
      { analyticsLocations: r } = (0, M.Ay)(b.A.HOLIDAY_COACHMARK);
    return (0, i.jsx)(nx.A, {
      targetElementRef: n,
      align: "center",
      position: "top",
      caretConfig: { align: "end" },
      graphic: {
        type: "image",
        src: "https://cdn.discordapp.com/assets/content/f5c1292fad8b7f3e1381e1a235d5f9ce22d791176d5f2fbd4d3dc461d1f895c0.png",
      },
      title: eV.intl.string(eV.t.Mjs8KR),
      body: eV.intl.string(eV.t.U0INks),
      actions: [
        {
          text: eV.intl.string(eV.t.NENZhS),
          onClick: () => {
            ((0, e$.openUserSettings)(eK.X.NOTIFICATION_HOLIDAY_SOUNDPACK, {
              analyticsLocations: r,
            }),
              t(nK.i.TAKE_ACTION));
          },
        },
      ],
      gradientColor: "purple",
      onRequestClose: () => t(nK.i.USER_DISMISS),
    });
  }
  var rO = n(88001),
    rR = n(259589),
    rL = n(438705);
  function ry(e) {
    let { targetElementRef: t, shouldShow: n, onDismiss: a } = e,
      s = r.useCallback(() => {
        (a(), (0, e$.openUserSettings)(eK.X.SUBSCRIPTIONS_PANEL));
      }, [a]);
    return (0, i.jsx)(nx.A, {
      targetElementRef: t,
      position: "top",
      caretConfig: { align: "start" },
      size: "md",
      graphic: { type: "image", src: rL },
      shouldShow: n,
      title: eV.intl.format(rR.default.bx8sR9, { premiumGroupProductName: (0, rO.DP)() }),
      body: eV.intl.format(rR.default.Pw4OFZ, { premiumGroupProductName: (0, rO.DP)() }),
      onRequestClose: a,
      actions: [{ text: eV.intl.string(rR.default.DD26QR), onClick: s }],
    });
  }
  var rD = n(873298),
    rv = n(840387);
  function rb(e) {
    let { markAsDismissed: t, targetElementRef: n } = e,
      a = (0, rv.Z)(),
      s = ns.KP.useSetting(),
      l = a && s !== rD.KP.FRIENDS_AND_ALL_GUILDS,
      o = r.useCallback(() => {
        (t(nK.i.TAKE_ACTION), (0, e$.openUserSettings)(eK.X.PROFILE_PRIVACY_CATEGORY));
      }, [t]),
      d = r.useCallback(() => {
        t(nK.i.USER_DISMISS);
      }, [t]),
      c = l
        ? s === rD.KP.FRIENDS_ONLY
          ? eV.intl.string(eV.t["/hogEy"])
          : eV.intl.string(eV.t["6hEfm1"])
        : eV.intl.string(eV.t.bnNxW1);
    return (0, i.jsx)(nx.A, {
      targetElementRef: n,
      shouldShow: !0,
      onRequestClose: d,
      align: "center",
      position: "top",
      caretConfig: { align: "end" },
      graphic: {
        type: "image",
        src: "https://cdn.discordapp.com/assets/content/6127c744cb2822ba2b138271130d9493e2579c126af2ee58921b6f988c6a46d6.svg",
      },
      title: eV.intl.string(eV.t.Ve4nS1),
      body: c,
      size: "md",
      gradientColor: "purple",
      actions: [{ text: eV.intl.string(eV.t.eOoTMX), variant: "primary", onClick: o }],
    });
  }
  var rM = n(415443);
  function rP(e) {
    let t,
      n,
      {
        webBuildOverride: a,
        onClick: s,
        onContextMenu: l,
        dismissibleContents: o,
        iconForeground: d,
        nameplate: u,
      } = e,
      _ = r.useRef(null),
      [E, A] = r.useState(!1);
    (0, rI.Ay)(() => {
      function e() {
        return A(!0);
      }
      return (
        ip._.subscribe(th.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
        () => {
          ip._.unsubscribe(th.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
        }
      );
    });
    let h = r.useCallback(() => {
        (A(!1), s());
      }, [s]),
      f = eI.A.coachmarkDismissibleContent;
    if (null != a) {
      let e = (0, rM.A)("1791444004336", !0);
      t =
        null != e
          ? eV.intl.formatToPlainString(eV.t.wve4kg, { webBuildOverride: a.id, builtAt: e })
          : eV.intl.formatToPlainString(eV.t.Gzh6ZP, { webBuildOverride: a.id });
    } else t = eV.intl.string(eV.t.cduTBL);
    let I = e2.SettingsIcon,
      p = (0, rp.w)();
    return (
      (I = null != a ? rT.H : p.Component),
      (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(re.A, {
            ref: _,
            tooltipText: t,
            tooltipPositionKey: n,
            onClick: h,
            onContextMenu: l,
            "aria-label": eV.intl.string(eV.t.cduTBL),
            icon: (0, i.jsx)(I, { size: "refresh_sm", color: "currentColor", className: d }),
            ...p.events,
            plated: null != u,
          }),
          (0, i.jsx)(ry, { targetElementRef: _, shouldShow: E, onDismiss: () => A(!1) }),
          (0, i.jsx)(iy.Ay, {
            contentTypes: o,
            groupName: nK.m.ACCOUNT_NAME_ZONE,
            children: (e) => {
              let { visibleContent: t, markAsDismissed: n } = e;
              return t === c.M.TINY_BRONCO && null != it.PL
                ? (0, i.jsx)(r.Suspense, {
                    fallback: null,
                    children: (0, i.jsx)(it.PL, { markAsDismissed: n, targetElementRef: _ }),
                  })
                : t === c.M.PRIVATE_PROFILE_COACHMARK
                  ? (0, i.jsx)(rb, { markAsDismissed: n, targetElementRef: _ })
                  : t === c.M.GIFT_CARDS_MARKETING_COACHMARK
                    ? (0, i.jsx)(rN, { markAsDismissed: n, targetElementRef: _ })
                    : null != f && t === f
                      ? (0, i.jsx)(rC, { markAsDismissed: n, targetElementRef: _ })
                      : null;
            },
          }),
        ],
      })
    );
  }
  var rU = n(358285);
  let rw = im.Ay.getEnableHardwareAcceleration() ? _.Js : _.eu,
    rG = 2.5 * w.A.Millis.SECOND,
    rx = 2 * w.A.Millis.MINUTE,
    rk = 5 * w.A.Millis.SECOND;
  function rF(e) {
    let {
        ref: t,
        speaking: n,
        voiceDb: a = -1 / 0,
        streaming: l,
        currentUser: o,
        status: d,
        handleClick: c,
        handleMouseLeave: u,
        renderNameTag: _,
        nameplate: f,
        avatarDecoration: I,
        "data-jump-section": p,
      } = e,
      T = r.useRef(null),
      g = t ?? T,
      S = (0, iI.F_)({ avatarDecoration: I, size: (0, z.Te)(E._3.SIZE_32) }),
      C = (0, et.A)(),
      {
        updateOpenPopoutRef: O,
        highlightBadge: R,
        setHighlightBadge: L,
      } = (function () {
        let e = r.useRef(null),
          t = r.useCallback((t) => {
            e.current = () => {
              (t.onMouseDown(), t.onClick());
            };
          }, []),
          [n, i] = r.useState(),
          [a, s] = r.useState(!1);
        return (
          (0, N.A)(() => s(!0), 750),
          r.useEffect(() => {
            function t(t) {
              let { highlightBadge: n } = t;
              (null != n && i(n), e.current?.());
            }
            return (
              ip._.subscribe(th.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
              () => {
                ip._.unsubscribe(th.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
              }
            );
          }),
          { updateOpenPopoutRef: t, highlightBadge: a ? n : void 0, setHighlightBadge: i }
        );
      })(),
      y = (0, Z.K)(f);
    return null == o
      ? null
      : (0, i.jsx)(m.A, {
          object: th.ZSU.AVATAR,
          children: (0, i.jsx)(ir.A, {
            user: o,
            targetElementRef: g,
            clickTrap: !0,
            preload: () =>
              (0, ii.A)(o.id, o.getAvatarURL(void 0, ir.S), {
                type: "account_popout",
                withMutualGuilds: !1,
                withMutualFriends: !1,
                guildId: void 0,
              }),
            renderPopout: (e, t) => {
              let { closePopout: n, setPopoutRef: r } = e;
              return (0, i.jsx)(n8, {
                currentUser: o,
                highlightBadge: R,
                openedAt: t,
                onClose: n,
                setPopoutRef: r,
                className: rU.dI,
              });
            },
            position: "top",
            align: "left",
            animation: A.Y.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
              (u(), L(void 0));
            },
            children: (e) => {
              O(e);
              let { onMouseEnter: t, onMouseDown: r, ...u } = e;
              return (0, i.jsxs)("div", {
                ref: g,
                style: y,
                onMouseEnter: t,
                onMouseDown: r,
                onClick: (t) => {
                  (e.onClick?.(t), c?.(t));
                },
                className: s()(rU.Q9, { [rU.ZQ]: null != f }),
                children: [
                  (0, i.jsx)(h.D, {
                    ...u,
                    onClick: (t) => {
                      (t.stopPropagation(), e.onClick?.(t), c?.(t));
                    },
                    "aria-label": eV.intl.string(eV.t["5fWB8U"]),
                    focusProps: { ringTarget: g },
                    className: rU.$n,
                    "data-jump-section": p,
                  }),
                  (0, i.jsx)(rw, {
                    size: E._3.SIZE_32,
                    src: o.getAvatarURL(void 0, 28, !1),
                    avatarDecoration: S,
                    status: l ? th.clD.STREAMING : d,
                    isSpeaking: n,
                    voiceDb: a,
                    className: rU.my,
                    "aria-hidden": !0,
                  }),
                  (0, i.jsx)("div", { className: rU.oM, children: _(C) }),
                ],
              });
            },
          }),
        });
  }
  class rB extends r.PureComponent {
    speakingWhileMutedTooltipTimeout = new u.Ep();
    lastSpeakingWhileMutedNotificationTime = void 0;
    state = {
      hovered: !1,
      shouldShowNametagTooltip: !1,
      shouldShowSpeakingWhileMutedTooltip: !1,
      hoveringOnMute: !1,
    };
    containerRef = r.createRef();
    avatarWithPopoutRef = r.createRef();
    componentDidUpdate(e) {
      let { speakingWhileMuted: t, occluded: n } = e,
        { speakingWhileMuted: i, occluded: r } = this.props;
      (r !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged());
    }
    componentWillUnmount() {
      this.speakingWhileMutedTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
      let { serverMute: e, suppress: t, selfMute: n } = this.props;
      ((0, W.A)(e, t, th.JJy.ACCOUNT_PANEL), (0, Y.X)(b.A.ACCOUNT, Y.O.MIC, n));
    };
    handleToggleSelfDeaf = () => {
      let { serverDeaf: e, selfDeaf: t } = this.props;
      ((0, j.A)(e, th.JJy.ACCOUNT_PANEL), (0, Y.X)(b.A.ACCOUNT, Y.O.DEAFEN, !t));
    };
    handleOpenAccountSettings = () => {
      (this.dismissTooltips(),
        iE.A.isConnected()
          ? (0, e$.openUserSettings)(eK.X.VOICE_AND_VIDEO_PANEL)
          : (0, e$.openUserSettings)());
    };
    handleOpenSettingsContextMenu = (e) => {
      let { currentUser: t } = this.props;
      null != t &&
        (0, T.L3)(e, async () => {
          let { default: e } = await Promise.all([
            n.e("618416"),
            n.e("902654"),
            n.e("706073"),
            n.e("227512"),
            n.e("262564"),
            n.e("71866"),
            n.e("891473"),
            n.e("101105"),
            n.e("263406"),
            n.e("1955"),
            n.e("341161"),
            n.e("410526"),
            n.e("202985"),
            n.e("603619"),
            n.e("222969"),
            n.e("515363"),
            n.e("162775"),
            n.e("128804"),
            n.e("60882"),
            n.e("71151"),
            n.e("227853"),
            n.e("286615"),
            n.e("70866"),
            n.e("311541"),
            n.e("472847"),
            n.e("870088"),
            n.e("300641"),
            n.e("932020"),
            n.e("586662"),
            n.e("758053"),
            n.e("247471"),
            n.e("889002"),
            n.e("709976"),
            n.e("750955"),
            n.e("953343"),
            n.e("279774"),
            n.e("763945"),
            n.e("261204"),
            n.e("686731"),
            n.e("807432"),
            n.e("873532"),
            n.e("590088"),
            n.e("60104"),
            n.e("46083"),
            n.e("857297"),
            n.e("295570"),
            n.e("327439"),
            n.e("747802"),
            n.e("626353"),
            n.e("71169"),
            n.e("906470"),
            n.e("736663"),
            n.e("419121"),
            n.e("489020"),
            n.e("919789"),
            n.e("669130"),
            n.e("802890"),
            n.e("82937"),
            n.e("987221"),
            n.e("157064"),
            n.e("156957"),
            n.e("918786"),
            n.e("701335"),
            n.e("257935"),
            n.e("724086"),
            n.e("358937"),
            n.e("448738"),
            n.e("680431"),
            n.e("338332"),
            n.e("894292"),
            n.e("153302"),
            n.e("88683"),
            n.e("363874"),
            n.e("923981"),
            n.e("750370"),
            n.e("972281"),
            n.e("307107"),
            n.e("896622"),
            n.e("466592"),
            n.e("73946"),
            n.e("282050"),
            n.e("436101"),
            n.e("976888"),
            n.e("387970"),
            n.e("847445"),
            n.e("547510"),
            n.e("966366"),
            n.e("983513"),
            n.e("76928"),
            n.e("355502"),
            n.e("528311"),
            n.e("411938"),
            n.e("326559"),
            n.e("217991"),
            n.e("31159"),
            n.e("952068"),
            n.e("768289"),
            n.e("772565"),
            n.e("533781"),
            n.e("737853"),
            n.e("225307"),
            n.e("332165"),
            n.e("501546"),
            n.e("854326"),
            n.e("984"),
            n.e("226229"),
            n.e("981833"),
            n.e("614929"),
            n.e("570473"),
            n.e("516497"),
            n.e("24774"),
            n.e("326794"),
            n.e("489565"),
            n.e("684231"),
            n.e("570690"),
            n.e("886631"),
            n.e("435860"),
            n.e("426782"),
            n.e("406322"),
            n.e("942571"),
            n.e("464759"),
            n.e("763343"),
            n.e("194704"),
            n.e("684290"),
            n.e("403643"),
            n.e("323223"),
            n.e("830560"),
            n.e("526575"),
            n.e("588035"),
            n.e("165291"),
            n.e("109383"),
            n.e("818291"),
            n.e("243794"),
            n.e("519435"),
            n.e("10985"),
            n.e("171206"),
            n.e("788029"),
            n.e("45036"),
            n.e("480889"),
            n.e("434683"),
            n.e("920955"),
            n.e("505928"),
            n.e("752657"),
            n.e("747973"),
            n.e("314001"),
            n.e("885251"),
            n.e("914175"),
            n.e("529366"),
            n.e("990185"),
            n.e("444038"),
            n.e("849162"),
            n.e("660201"),
            n.e("123727"),
            n.e("179301"),
            n.e("918347"),
            n.e("358574"),
            n.e("689521"),
            n.e("398791"),
            n.e("10886"),
            n.e("84993"),
            n.e("343298"),
            n.e("592268"),
            n.e("852197"),
            n.e("553627"),
            n.e("59599"),
            n.e("46238"),
            n.e("736919"),
            n.e("440636"),
            n.e("568960"),
            n.e("459257"),
            n.e("790484"),
            n.e("985301"),
            n.e("631323"),
            n.e("464452"),
            n.e("74979"),
            n.e("714144"),
            n.e("816027"),
            n.e("458855"),
            n.e("305161"),
            n.e("845486"),
            n.e("401425"),
            n.e("120561"),
            n.e("880186"),
            n.e("58353"),
            n.e("17256"),
            n.e("377016"),
            n.e("226867"),
            n.e("754366"),
            n.e("657682"),
            n.e("600336"),
            n.e("535413"),
            n.e("172413"),
            n.e("145006"),
            n.e("205894"),
            n.e("38956"),
            n.e("302458"),
            n.e("556436"),
            n.e("256172"),
            n.e("945210"),
            n.e("655282"),
            n.e("792818"),
            n.e("861161"),
            n.e("579958"),
            n.e("27612"),
            n.e("987313"),
            n.e("657266"),
            n.e("622074"),
            n.e("587308"),
            n.e("903758"),
            n.e("962811"),
            n.e("930206"),
            n.e("365461"),
            n.e("96922"),
            n.e("292699"),
            n.e("198877"),
            n.e("531521"),
            n.e("786830"),
            n.e("873943"),
            n.e("152263"),
            n.e("28636"),
            n.e("597981"),
            n.e("622936"),
            n.e("216947"),
            n.e("301850"),
            n.e("926787"),
            n.e("870423"),
            n.e("727139"),
            n.e("993562"),
            n.e("464838"),
            n.e("772699"),
            n.e("40074"),
            n.e("733814"),
            n.e("202342"),
            n.e("988435"),
            n.e("377476"),
            n.e("403032"),
            n.e("746309"),
            n.e("883221"),
            n.e("330150"),
            n.e("205406"),
            n.e("64640"),
            n.e("368991"),
            n.e("223213"),
            n.e("584996"),
            n.e("377109"),
            n.e("656997"),
            n.e("828849"),
            n.e("74886"),
            n.e("713273"),
            n.e("944121"),
            n.e("245851"),
            n.e("459397"),
            n.e("652014"),
            n.e("643363"),
            n.e("980902"),
            n.e("157771"),
            n.e("43853"),
            n.e("529659"),
            n.e("721654"),
            n.e("283543"),
            n.e("715958"),
            n.e("560042"),
            n.e("824992"),
            n.e("827649"),
            n.e("860350"),
            n.e("769590"),
            n.e("580305"),
            n.e("161411"),
            n.e("966268"),
            n.e("25839"),
            n.e("683084"),
            n.e("927808"),
            n.e("273298"),
            n.e("925807"),
            n.e("959922"),
            n.e("997926"),
            n.e("180556"),
            n.e("876880"),
            n.e("680212"),
            n.e("888213"),
            n.e("150183"),
            n.e("394692"),
            n.e("272788"),
            n.e("704570"),
            n.e("595944"),
            n.e("45374"),
            n.e("10058"),
            n.e("859516"),
            n.e("30482"),
            n.e("641794"),
            n.e("259298"),
            n.e("49571"),
            n.e("388474"),
            n.e("774188"),
            n.e("280999"),
            n.e("362079"),
            n.e("557729"),
            n.e("463143"),
            n.e("363750"),
            n.e("28420"),
            n.e("477550"),
            n.e("71930"),
            n.e("97191"),
            n.e("385504"),
            n.e("310994"),
            n.e("770720"),
            n.e("195830"),
            n.e("338218"),
            n.e("846582"),
            n.e("589752"),
            n.e("53719"),
            n.e("992535"),
            n.e("737132"),
            n.e("207998"),
            n.e("442781"),
            n.e("803511"),
            n.e("955410"),
            n.e("868052"),
            n.e("106980"),
            n.e("64231"),
            n.e("257073"),
            n.e("179028"),
            n.e("29489"),
            n.e("269714"),
            n.e("445380"),
            n.e("926018"),
            n.e("120239"),
            n.e("213217"),
            n.e("680015"),
            n.e("585005"),
            n.e("684986"),
            n.e("527302"),
            n.e("423538"),
            n.e("700572"),
            n.e("14775"),
            n.e("446761"),
            n.e("718269"),
            n.e("530166"),
            n.e("594045"),
            n.e("348567"),
            n.e("452075"),
            n.e("900277"),
            n.e("774346"),
            n.e("127962"),
            n.e("503376"),
            n.e("494822"),
            n.e("926132"),
            n.e("76428"),
            n.e("834552"),
            n.e("863232"),
            n.e("993103"),
            n.e("364827"),
            n.e("708757"),
            n.e("517888"),
            n.e("811133"),
            n.e("959880"),
            n.e("174016"),
            n.e("907167"),
            n.e("910471"),
            n.e("11301"),
            n.e("952372"),
            n.e("784569"),
            n.e("861060"),
            n.e("77333"),
            n.e("264572"),
            n.e("639161"),
            n.e("477175"),
            n.e("960235"),
            n.e("402368"),
            n.e("190779"),
            n.e("716460"),
            n.e("221856"),
            n.e("678157"),
            n.e("147134"),
            n.e("883846"),
            n.e("996481"),
            n.e("331988"),
            n.e("585968"),
            n.e("40291"),
            n.e("733115"),
            n.e("397270"),
            n.e("373122"),
            n.e("724285"),
            n.e("293159"),
            n.e("755936"),
            n.e("147662"),
            n.e("209338"),
            n.e("749894"),
            n.e("927875"),
            n.e("833703"),
            n.e("256274"),
            n.e("544571"),
            n.e("692990"),
            n.e("362931"),
            n.e("745959"),
            n.e("858529"),
            n.e("481987"),
            n.e("595653"),
            n.e("958038"),
            n.e("532039"),
            n.e("719466"),
            n.e("776458"),
            n.e("576909"),
            n.e("27355"),
            n.e("406174"),
            n.e("715555"),
            n.e("393336"),
            n.e("481647"),
            n.e("776273"),
            n.e("776602"),
            n.e("140402"),
            n.e("391763"),
            n.e("21921"),
            n.e("407170"),
            n.e("811310"),
            n.e("571210"),
            n.e("676418"),
            n.e("572963"),
            n.e("307575"),
            n.e("897073"),
            n.e("942724"),
            n.e("913823"),
            n.e("393766"),
            n.e("166495"),
            n.e("401518"),
            n.e("88342"),
            n.e("187110"),
            n.e("854461"),
            n.e("139970"),
            n.e("554241"),
            n.e("940258"),
            n.e("724303"),
            n.e("198329"),
            n.e("858164"),
            n.e("521930"),
            n.e("292583"),
            n.e("308555"),
            n.e("53102"),
            n.e("110327"),
            n.e("586127"),
            n.e("427032"),
            n.e("173764"),
            n.e("875842"),
            n.e("311802"),
            n.e("698965"),
            n.e("9205"),
            n.e("25949"),
            n.e("836863"),
            n.e("869853"),
            n.e("854622"),
            n.e("807936"),
            n.e("344502"),
            n.e("146070"),
            n.e("617249"),
            n.e("88599"),
            n.e("179049"),
            n.e("95340"),
            n.e("362422"),
            n.e("590365"),
            n.e("989088"),
            n.e("37977"),
            n.e("136149"),
            n.e("470068"),
            n.e("354044"),
            n.e("817989"),
            n.e("437065"),
            n.e("720590"),
            n.e("709640"),
            n.e("23055"),
            n.e("235313"),
            n.e("147626"),
            n.e("952548"),
            n.e("613867"),
            n.e("417886"),
            n.e("203589"),
            n.e("636373"),
            n.e("294857"),
            n.e("726033"),
            n.e("480830"),
            n.e("179745"),
            n.e("655708"),
            n.e("64504"),
            n.e("553984"),
            n.e("280854"),
            n.e("335395"),
            n.e("884601"),
            n.e("782969"),
            n.e("154469"),
            n.e("945413"),
            n.e("146844"),
            n.e("163235"),
            n.e("212055"),
            n.e("486672"),
            n.e("14035"),
            n.e("632756"),
            n.e("564850"),
            n.e("170104"),
            n.e("491793"),
            n.e("902564"),
            n.e("428967"),
            n.e("92935"),
            n.e("67878"),
            n.e("475324"),
            n.e("758946"),
            n.e("214285"),
            n.e("248330"),
            n.e("731503"),
            n.e("803332"),
            n.e("859546"),
            n.e("938149"),
            n.e("408362"),
            n.e("741678"),
            n.e("608032"),
            n.e("852617"),
            n.e("477970"),
            n.e("844780"),
            n.e("102698"),
            n.e("204744"),
            n.e("737021"),
            n.e("818465"),
            n.e("971430"),
            n.e("211185"),
            n.e("976516"),
            n.e("400501"),
            n.e("41332"),
            n.e("985794"),
            n.e("767837"),
            n.e("473384"),
            n.e("436564"),
            n.e("282783"),
            n.e("432209"),
            n.e("893349"),
            n.e("368062"),
            n.e("859991"),
            n.e("386317"),
            n.e("709371"),
            n.e("924691"),
            n.e("252229"),
            n.e("603998"),
            n.e("77473"),
            n.e("939171"),
            n.e("987478"),
            n.e("550033"),
            n.e("96680"),
            n.e("523276"),
            n.e("868214"),
            n.e("25279"),
            n.e("661814"),
            n.e("729963"),
            n.e("812042"),
            n.e("612287"),
            n.e("588070"),
            n.e("692513"),
            n.e("538513"),
            n.e("102328"),
            n.e("147864"),
            n.e("793438"),
            n.e("830938"),
            n.e("691671"),
            n.e("895785"),
            n.e("122990"),
            n.e("113458"),
            n.e("534874"),
            n.e("305557"),
            n.e("36227"),
            n.e("50097"),
            n.e("518954"),
            n.e("535507"),
            n.e("500520"),
            n.e("201050"),
            n.e("883952"),
            n.e("229666"),
            n.e("92295"),
            n.e("589916"),
            n.e("460773"),
            n.e("159957"),
            n.e("458273"),
            n.e("208018"),
            n.e("968763"),
            n.e("278045"),
            n.e("26001"),
            n.e("838056"),
            n.e("414591"),
            n.e("652111"),
            n.e("93461"),
            n.e("203930"),
            n.e("935948"),
            n.e("708536"),
            n.e("120379"),
            n.e("903663"),
            n.e("411353"),
            n.e("508829"),
            n.e("898377"),
            n.e("896804"),
            n.e("36877"),
            n.e("963203"),
            n.e("295998"),
            n.e("275133"),
            n.e("819193"),
            n.e("437961"),
            n.e("201243"),
            n.e("215920"),
            n.e("951811"),
            n.e("228850"),
            n.e("908081"),
            n.e("496268"),
            n.e("527687"),
            n.e("139103"),
            n.e("904774"),
            n.e("78601"),
            n.e("574678"),
            n.e("829260"),
            n.e("919885"),
            n.e("342234"),
            n.e("81189"),
            n.e("66580"),
            n.e("200203"),
            n.e("489523"),
            n.e("249629"),
            n.e("726294"),
            n.e("780407"),
            n.e("127659"),
            n.e("25212"),
            n.e("620689"),
            n.e("276814"),
            n.e("132737"),
            n.e("781949"),
            n.e("356675"),
            n.e("504098"),
            n.e("492383"),
            n.e("245691"),
            n.e("98972"),
            n.e("431649"),
            n.e("604172"),
            n.e("734546"),
            n.e("568881"),
            n.e("341701"),
            n.e("562999"),
            n.e("283230"),
            n.e("42834"),
            n.e("248836"),
            n.e("225612"),
            n.e("468083"),
            n.e("548730"),
            n.e("965576"),
            n.e("871467"),
            n.e("350949"),
            n.e("270591"),
            n.e("93857"),
            n.e("51892"),
            n.e("841838"),
            n.e("472789"),
            n.e("137937"),
            n.e("115332"),
            n.e("760989"),
            n.e("827335"),
            n.e("369501"),
            n.e("303710"),
            n.e("949013"),
            n.e("860003"),
            n.e("396325"),
            n.e("808979"),
            n.e("33448"),
            n.e("645830"),
            n.e("512162"),
            n.e("733771"),
            n.e("866008"),
            n.e("531158"),
            n.e("79216"),
            n.e("946039"),
            n.e("995602"),
            n.e("170571"),
            n.e("544901"),
            n.e("929569"),
            n.e("896480"),
            n.e("146149"),
            n.e("986300"),
            n.e("479006"),
            n.e("138733"),
            n.e("817006"),
            n.e("759174"),
            n.e("932011"),
            n.e("576415"),
            n.e("983947"),
            n.e("944727"),
            n.e("705871"),
            n.e("527462"),
            n.e("501888"),
            n.e("186546"),
            n.e("322455"),
            n.e("960816"),
            n.e("168031"),
            n.e("271203"),
            n.e("175284"),
            n.e("384820"),
            n.e("966598"),
            n.e("154168"),
            n.e("845928"),
            n.e("506627"),
            n.e("443256"),
            n.e("360536"),
            n.e("340346"),
            n.e("864926"),
            n.e("812411"),
            n.e("888205"),
            n.e("775951"),
            n.e("858531"),
            n.e("228011"),
            n.e("373566"),
            n.e("815057"),
            n.e("702846"),
            n.e("991531"),
            n.e("462318"),
            n.e("574196"),
            n.e("523638"),
            n.e("450541"),
            n.e("647999"),
            n.e("337886"),
            n.e("311008"),
            n.e("61750"),
            n.e("220803"),
            n.e("195782"),
            n.e("659624"),
            n.e("679019"),
            n.e("262720"),
            n.e("483518"),
            n.e("846327"),
            n.e("531997"),
            n.e("809940"),
            n.e("787462"),
            n.e("798384"),
            n.e("986629"),
            n.e("42408"),
            n.e("943534"),
            n.e("124564"),
            n.e("666601"),
            n.e("170371"),
            n.e("313052"),
            n.e("639721"),
            n.e("419631"),
            n.e("82384"),
            n.e("903820"),
            n.e("876892"),
            n.e("971508"),
            n.e("816799"),
            n.e("316140"),
            n.e("852694"),
            n.e("728549"),
            n.e("671056"),
            n.e("162883"),
            n.e("540976"),
            n.e("85216"),
            n.e("883922"),
            n.e("649351"),
            n.e("483102"),
            n.e("902552"),
            n.e("580890"),
            n.e("689588"),
            n.e("524084"),
            n.e("44264"),
            n.e("821403"),
            n.e("444790"),
            n.e("87641"),
            n.e("874913"),
            n.e("435476"),
            n.e("203041"),
            n.e("135001"),
            n.e("496422"),
            n.e("214451"),
            n.e("407755"),
            n.e("993720"),
            n.e("654658"),
            n.e("912938"),
            n.e("233049"),
            n.e("569443"),
            n.e("439518"),
            n.e("543456"),
            n.e("44491"),
          ]).then(n.bind(n, 907206));
          return (t) =>
            (0, i.jsx)(e, {
              ...t,
              onClose: T.Z_,
              onInteraction: (0, K.s)("UserSettingsMenu", b.A.ACCOUNT),
            });
        });
    };
    audioOnInteractionHandler = (0, K.s)("AudioDeviceMenu", b.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
      (this.dismissTooltips(),
        (0, T.L3)(e, async () => {
          let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(
            n.bind(n, 385318),
          );
          return () => {
            let { enabledInputProfiles: n } = (0, ia.d)({ location: "Account" });
            return (0, i.jsx)(M.f5, {
              value: t,
              children: (0, i.jsx)(e, {
                onClose: T.Z_,
                renderInputDevices: !0,
                renderInputProfiles: n.length > 0,
                renderInputVolume: !0,
                minimal: !0,
                onInteraction: this.audioOnInteractionHandler,
              }),
            });
          };
        }));
    };
    handleOutputAudioContextMenu = (e, t) => {
      (this.dismissTooltips(),
        (0, T.L3)(e, async () => {
          let { default: e } = await Promise.all([n.e("360536"), n.e("678827")]).then(
            n.bind(n, 385318),
          );
          return () =>
            (0, i.jsx)(M.f5, {
              value: t,
              children: (0, i.jsx)(e, {
                onClose: T.Z_,
                renderOutputDevices: !0,
                renderOutputVolume: !0,
                minimal: !0,
                onInteraction: this.audioOnInteractionHandler,
              }),
            });
        }));
    };
    handleMouseEnter = () => {
      this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
      this.setState({ hovered: !1 });
    };
    handleMouseEnterMute = () => {
      (this.setState({ hoveringOnMute: !0, shouldShowSpeakingWhileMutedTooltip: !1 }),
        this.speakingWhileMutedTooltipTimeout.stop());
    };
    handleMouseLeaveMute = () => {
      this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
      (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
        this.speakingWhileMutedTooltipTimeout.stop());
    };
    dismissTooltips = () => {
      (this.props.onDismissDeviceChangedTooltip?.(), this.dismissSpeakingWhileMutedTooltip());
    };
    handleOccludedChanged = () => {
      let { occluded: e } = this.props;
      e && this.setState({ shouldShowNametagTooltip: !1, shouldShowSpeakingWhileMutedTooltip: !1 });
    };
    handleSpeakingWhileMutedChanged = () => {
      let {
          selfMute: e,
          serverMute: t,
          suppress: n,
          speakingWhileMuted: i,
          occluded: r,
          deviceChangedTooltipType: a,
        } = this.props,
        { hoveringOnMute: s } = this.state,
        l =
          void 0 === this.lastSpeakingWhileMutedNotificationTime ||
          performance.now() - this.lastSpeakingWhileMutedNotificationTime > rx;
      i
        ? s ||
          !e ||
          t ||
          n ||
          r ||
          !l ||
          null != a ||
          this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
            ((this.lastSpeakingWhileMutedNotificationTime = performance.now()),
              this.speakingWhileMutedTooltipTimeout.start(rG, () =>
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              ));
          })
        : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
          this.speakingWhileMutedTooltipTimeout.stop());
    };
    renderStatus() {
      let { hovered: e } = this.state,
        {
          activities: t,
          applicationStream: n,
          currentUser: r,
          status: a,
          userTag: s,
          voiceChannel: l,
        } = this.props;
      if (null == r) return null;
      if ((0, C.A)({ activities: t, status: a, applicationStream: n, voiceChannel: l }))
        return (0, i.jsxs)(v.A, {
          hoverText: s,
          forceHover: e,
          children: [
            (0, i.jsx)(f.A, { children: nt.Ay.humanizeStatus(a) }),
            (0, i.jsx)(O.A, {
              user: r,
              activities: t,
              applicationStream: n,
              voiceChannel: l,
              textClassName: rU.XD,
              hideTooltip: !0,
            }),
          ],
        });
      let o = t?.find((e) => {
        let { type: t } = e;
        return t === th.$pd.CUSTOM_STATUS;
      });
      return null != o
        ? (0, i.jsxs)(v.A, {
            hoverText: s,
            forceHover: e,
            children: [
              (0, i.jsx)(f.A, { children: nt.Ay.humanizeStatus(a) }),
              (0, i.jsx)(J.A, { activity: o, emojiClassName: rU.Zg, className: rU.WO }),
            ],
          })
        : null != a && a !== th.clD.UNKNOWN && r.hasUniqueUsername()
          ? (0, i.jsx)(v.A, {
              hoverText: s,
              forceHover: e,
              children: (0, i.jsx)(D, { text: nt.Ay.humanizeStatus(a) }),
            })
          : s;
    }
    renderNameTag = (e) => {
      let { currentUser: t, username: n } = this.props;
      return null == t
        ? null
        : (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: rU.eW,
                children: (0, i.jsx)(iS.A, {
                  className: s()({ [rU.e8]: null != e }),
                  children: (0, i.jsx)(ei.A, {
                    userName: n,
                    displayNameStyles: e,
                    effectDisplayType: this.state.hovered ? en.G.ANIMATED : en.G.STATIC,
                    loop: !0,
                    inProfile: !0,
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: rU.XP,
                children: (0, i.jsx)(ig.A, { children: this.renderStatus() }),
              }),
            ],
          });
    };
    renderNameZone(e) {
      let {
        badgeDirectoryNuxPopoverVariant: t,
        currentUser: n,
        dismissibleContents: r,
        isOrbchievementsEnabled: a,
      } = this.props;
      return null == n
        ? null
        : (0, i.jsx)(i3, {
            guildId: this.props.selectedGuildId ?? null,
            currentUser: n,
            targetElementRef: this.avatarWithPopoutRef,
            badgeDirectoryNuxPopoverVariant: t,
            additionalDCs: r.avatar,
            isOrbchievementsEnabled: a,
            children: (0, i.jsx)(rF, {
              ...this.props,
              ref: this.avatarWithPopoutRef,
              handleMouseLeave: this.handleMouseLeave,
              renderNameTag: this.renderNameTag,
              "data-jump-section": e["data-jump-section"],
            }),
          });
    }
    render() {
      let {
          currentUser: e,
          nameplate: t,
          voiceChannel: n,
          isQuestBarEmpty: r,
          isListenAlongVisible: a,
        } = this.props,
        l = this.state.hovered;
      return null == e
        ? null
        : (0, i.jsx)(I.sk, {
            children: (e) =>
              (0, i.jsxs)("div", {
                ref: this.containerRef,
                className: s()(rU.kL, { [rU.UG]: null != n, [rU.bc]: !r, [rU.G5]: a }),
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                children: [
                  (0, i.jsx)(Q.A, { nameplate: t, hovered: l, placement: q.u.ACCOUNT }),
                  this.renderNameZone(e),
                  (0, i.jsx)(rV, {
                    ...this.props,
                    ...this.state,
                    accountContainerRef: this.containerRef,
                    handleMouseEnterMute: this.handleMouseEnterMute,
                    handleMouseLeaveMute: this.handleMouseLeaveMute,
                    handleToggleSelfMute: this.handleToggleSelfMute,
                    handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                    handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                    handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                    handleOpenAccountSettings: this.handleOpenAccountSettings,
                    handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu,
                    dismissTooltips: this.dismissTooltips,
                  }),
                ],
              }),
          });
    }
  }
  function rV(e) {
    let {
        selfDeaf: t,
        selfMute: n,
        awaitingRemote: a,
        serverMute: s,
        serverDeaf: l,
        suppress: o,
        shouldShowSpeakingWhileMutedTooltip: d,
        webBuildOverride: c,
        handleMouseEnterMute: u,
        handleMouseLeaveMute: _,
        handleToggleSelfDeaf: E,
        handleToggleSelfMute: A,
        handleInputAudioContextMenu: h,
        handleOutputAudioContextMenu: f,
        handleOpenAccountSettings: I,
        handleOpenSettingsContextMenu: p,
        dismissibleContents: T,
        occluded: m,
        nameplate: g,
        accountContainerRef: S,
        deviceChangedTooltipType: N,
        dismissTooltips: C,
        speaking: O,
      } = e,
      R = (0, Z.K)(g);
    function L() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (0, i.jsx)(rP, {
        webBuildOverride: c,
        onClick: I,
        onContextMenu: p,
        dismissibleContents: [...T.settings, ...e],
        iconForeground: null != g ? rU.t4 : void 0,
        nameplate: g,
      });
    }
    return (0, i.jsxs)("div", {
      className: rU.Uo,
      style: R,
      children: [
        (0, i.jsx)(rf, {
          accountContainerRef: S,
          selfMute: n,
          serverMute: s,
          suppress: o,
          awaitingRemote: a,
          onMouseEnter: u,
          onMouseLeave: _,
          onClick: A,
          onContextMenu: h,
          iconForeground: null != g ? rU.t4 : void 0,
          nameplate: g,
          shouldShowSpeakingWhileMutedTooltip: d,
          shouldShowInputDeviceChangedTooltip: !d && "input" === N,
          dismissTooltips: C,
          speaking: O,
        }),
        (0, i.jsx)(rr, {
          selfDeaf: t,
          serverDeaf: l,
          onClick: E,
          onContextMenu: f,
          awaitingRemote: a,
          iconForeground: null != g ? rU.t4 : void 0,
          nameplate: g,
          shouldShowOutputDeviceChangedTooltip: "output" === N,
          dismissTooltips: C,
        }),
        null != it.Lf
          ? (0, i.jsx)(r.Suspense, {
              fallback: L(),
              children: (0, i.jsx)(it.Lf, { occluded: m, children: L }),
            })
          : L(),
      ],
    });
  }
  function rH(e) {
    let t = (0, d.bG)([iE.A], () => null != iE.A.getChannelId()),
      n = (0, eT.Py)(e),
      i = r.useRef(new u.Ep()),
      [a, s] = r.useState(!1);
    r.useEffect(() => {
      t &&
        n &&
        (s(!0),
        i.current.start(rk, () => {
          s(!1);
        }));
    }, [t, n]);
    let l = r.useCallback(() => {
      (s(!1), i.current.stop());
    }, []);
    return (
      (0, S.l0)(() => {
        i.current.stop();
      }),
      { shouldShowTooltip: a, dismissTooltip: l }
    );
  }
  function rj() {
    let e = (0, d.bG)([nD.default], () => nD.default.getCurrentUser()),
      t = (0, d.bG)([eo.default], () => eo.default.getId()),
      {
        activities: n,
        streaming: a,
        status: s,
      } = (0, d.cf)([nX.A], () => {
        let e = nX.A.getActivities();
        return {
          activities: e,
          streaming:
            null !=
            e.find((e) => {
              let { type: t } = e;
              return t === th.$pd.STREAMING;
            }),
          status: nX.A.getStatus(),
        };
      }),
      l = (0, d.bG)([io.A], () => io.A.getAnyStreamForUser(t)),
      u = (0, g.A)({ userId: t }),
      _ = (0, d.bG)([ih.A], () => ih.A.getVoiceVolume(t)),
      E = nt.Ay.useUserTag(e, { decoration: "never" }),
      A = (0, d.bG)([iE.A, id.A], () => {
        let e = iE.A.getChannelId();
        return null != e ? id.A.getChannel(e) : null;
      }),
      { mute: h, selfMute: f, suppress: I } = (0, il.A)(A),
      { selfDeaf: T, deaf: m } = (0, is.A)(A),
      S = (0, d.bG)([B.A], () =>
        (0, V.kK)() ? B.A.getCurrentBuildOverride().overrides?.discord_web : null,
      ),
      N = (0, d.bG)([i_.Ay], () => i_.Ay.getSpeakingWhileMuted()),
      C = (0, d.bG)([H.A], () => H.A.isFullscreenInContext()),
      O = (0, d.bG)([iu.A], () => iu.A.hasLayers()),
      R = (0, p.useModalsStore)(p.hasAnyModalOpenSelector) || O || iT.P.isDisallowPopupsSet() || C,
      L = (0, d.bG)([er.default], () => null != er.default.getAwaitingRemoteSessionInfo()),
      y = (0, d.bG)([iA.A], () => iA.A.getGuildId()),
      D = e?.avatarDecoration,
      v = (0, $.A)(D),
      j = nt.Ay.useName(e) ?? "",
      { analyticsLocations: W } = (0, M.Ay)(b.A.ACCOUNT),
      Y = (0, X.r)({ user: e, guildId: void 0 }),
      { isQuestBarEmpty: K } = (0, n9.c9)(),
      z = (0, d.bG)([ie.A, nD.default, ic.A], () => {
        let e,
          t = ie.A.getSyncingWith(),
          n = ie.A.getActivity(),
          i = [];
        return (
          null != t
            ? (e = t.partyId)
            : null != n && null != n.party && null != n.party.id && (e = n.party.id),
          null != e &&
            (i = o()(Array.from(ic.A.getParty(e) ?? []))
              .map((e) => nD.default.getUser(e))
              .filter(ng.Vq)
              .value()),
          i.length > 1
        );
      }),
      Z = { avatar: [], settings: [] },
      q = (0, nl.H)({ location: "Account" }) && !R,
      Q = ep.A.useIsEligible(),
      J = eI.A.coachmarkDismissibleContent,
      et = (0, ee.u)("AccountCoachmark"),
      en = (0, P.J)({ location: "AccountCoachmark" }),
      ei = (function (e) {
        let { enabled: t } = (0, e_.K)({ location: e }),
          n = (0, d.bG)([el.A], () => el.A.hasLoaded(eA.oD.PRELOADED_USER_SETTINGS)),
          i = (0, d.bG)([eo.default], () => eo.default.getId()),
          a = null != i && eu.default.age(i) >= eE.I5,
          s = (0, es.HX)(c.M.GIFT_CARDS_MARKETING_COACHMARK),
          l = (0, d.bG)([ed.A], () => ed.A.ipCountryCode),
          { hasFetchedPaymentSources: o, hasPaymentSource: u } = (0, d.cf)([ec.A], () => ({
            hasFetchedPaymentSources: ec.A.hasFetchedPaymentSources,
            hasPaymentSource: ec.A.paymentSourceIds.length > 0,
          })),
          _ = t && a && n && !s && null != l && eE.ob.has(l);
        return (
          r.useEffect(() => {
            !_ ||
              eh === i ||
              ec.A.hasFetchedPaymentSources ||
              ed.A.isPaymentSourceFetching ||
              ((eh = i),
              ea.$o().then((e) => {
                null == e && (ef = i);
              }));
          }, [_, i]),
          _ && ef !== i && o && !u
        );
      })("AccountCoachmark"),
      eT = (function (e) {
        let { currentUserId: t, enabled: n, fetchCatalog: i = !0 } = e,
          a = n ? t : null,
          s = (0, d.bG)([k.Ay], () => null != a && k.Ay.hasCatalogFor(a), [a]),
          l = (0, d.bG)([k.Ay], () => null != a && k.Ay.hasCatalogFetchErrorFor(a), [a]),
          [o] = r.useState(() => new U.A(5 * w.A.Millis.SECOND, 5 * w.A.Millis.MINUTE)),
          c = r.useRef(null);
        r.useEffect(() => {
          if (null != a && i) {
            if (s) return void o.succeed();
            if (l) {
              if (o.fails >= 3) return;
              return (o.fail(() => (0, G.RS)(a, { isRetry: !0 })), () => o.cancel());
            }
            c.current !== a && ((c.current = a), (0, G.RS)(a));
          }
        }, [a, i, s, l, o]);
        let u = (0, d.bG)(
            [k.Ay],
            () =>
              null != a
                ? k.Ay.getBadges(a).filter((e) => F.sC.has(e.badge_id) && e.owned).length
                : 0,
            [a],
          ),
          _ = (0, d.yK)([k.Ay], () => (null != a ? (0, x.z)(k.Ay.getBadges(a)) : []), [a]),
          E = r.useMemo(
            () =>
              null != a && s
                ? u > 0
                  ? { variant: "progress", newBadgeCount: u, badgeIconUrls: _ }
                  : { variant: "no-progress" }
                : null,
            [a, s, u, _],
          ),
          A = i && o.fails < 3;
        return { variantProps: E, isPending: null != a && !s && (!l || A) };
      })({ currentUserId: e?.id, enabled: en }).variantProps;
    R ||
      (et && Z.avatar.push(c.M.DISPLAY_NAME_STYLES_FLYWHEEL_COACHMARK),
      null != eT && Z.avatar.push(c.M.BADGE_DIRECTORY_NUX_POPOVER),
      Q && null != J && Z.settings.push(J),
      ei && Z.settings.push(c.M.GIFT_CARDS_MARKETING_COACHMARK),
      Z.settings.push(c.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: em, dismissTooltip: eg } = rH(rt.oh.AUDIO_INPUT),
      { shouldShowTooltip: eS, dismissTooltip: eN } = rH(rt.oh.AUDIO_OUTPUT),
      eC = r.useMemo(() => (em ? "input" : eS ? "output" : void 0), [em, eS]),
      eO = r.useCallback(
        (e) => {
          switch (e) {
            case "input":
              eg();
              break;
            case "output":
              eN();
          }
        },
        [eg, eN],
      );
    return (0, i.jsx)(M.f5, {
      value: W,
      children: (0, i.jsx)(rB, {
        currentUser: e,
        username: j,
        activities: n,
        applicationStream: l,
        voiceChannel: A,
        dismissibleContents: Z,
        badgeDirectoryNuxPopoverVariant: eT,
        isOrbchievementsEnabled: q,
        userTag: E,
        occluded: R,
        selfDeaf: T,
        selfMute: f,
        serverDeaf: m,
        serverMute: h,
        speaking: u,
        voiceDb: _,
        speakingWhileMuted: N,
        status: s,
        streaming: a,
        suppress: I,
        webBuildOverride: S,
        awaitingRemote: L,
        nameplate: Y,
        selectedGuildId: y,
        avatarDecoration: v,
        isQuestBarEmpty: K,
        isListenAlongVisible: z,
        deviceChangedTooltipType: eC,
        onDismissDeviceChangedTooltip: () => eO(eC),
      }),
    });
  }
}
