/* Recovered shipped factory. Module 715069.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 754708..768172
 * Raw property SHA-256: 365e50d780ad8969be186eab97c26d8aad5d45550e7738fce57dff7f9fc23655
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ls: () => eF, z9: () => eB, w_: () => eU, Ay: () => eH, th: () => eV });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(561028),
    c = n(562708),
    u = n(837381),
    _ = n(172218),
    E = n(612324),
    A = n(607399),
    h = n(17928),
    f = n(3026),
    I = n(97808),
    p = n(939249),
    T = n(866665),
    m = n(821609),
    g = n(366605),
    S = n(952270),
    N = n(428678),
    C = n(661531),
    O = n(549254),
    R = n(445529),
    L = n(778712),
    y = n(192308),
    D = n(834730),
    v = n(789645),
    b = n(308528),
    M = n(442433),
    P = n(765671),
    U = n(657043),
    w = n(960076),
    G = n(397244),
    x = n(714114),
    k = n(394871),
    F = n(709066),
    B = n(262295),
    V = n(620982),
    H = n(343328),
    j = n(963027),
    W = n(571694),
    Y = n(47167),
    K = n(739187),
    $ = n(857250),
    z = n(97483),
    X = n(148494),
    Z = n(976860),
    q = n(330001),
    Q = n(536637),
    J = n.n(Q),
    ee = n(74114),
    et = n(232835),
    en = n(994500),
    ei = n(58703),
    er = n(935208),
    ea = n(746080),
    es = n(652215),
    el = n(381941),
    eo = n(660183),
    ed = n(449582),
    ec = n(351952),
    eu = n(88686),
    e_ = n(214881),
    eE = n(559106),
    eA = n(351278);
  let eh = function (e) {
    let { className: t, focusProps: n, ref: r, ...a } = e;
    return (0, i.jsx)(eE.vN, {
      ...n,
      children: (0, i.jsx)("li", { className: s()(t, eA.k), ...a, ref: r }),
    });
  };
  var ef = n(824994),
    eI = n(922301),
    ep = n(660184),
    eT = n(3322),
    em = n(954376),
    eg = n(534400),
    eS = n(897898),
    eN = n(854627),
    eC = n(616356),
    eO = n(290863),
    eR = n(573163),
    eL = n(741961),
    ey = n(543465),
    eD = n(287809),
    ev = n(19575),
    eb = n(763097);
  let eM = ev.Ay.getEnableHardwareAcceleration() ? I.Js : I.eu,
    eP = { offset: { top: 2, bottom: 2, right: 4 } };
  function eU(e) {
    let { nameplate: t, icon: n, forceShow: r = !1, visibleElementRef: a, ...l } = e,
      o = (0, ec.K)(t),
      d = (0, U.BX)("SideButton");
    return (0, i.jsx)(p.D, {
      className: s()(eb.b, { [eb.DQ]: null != t, [eb.by]: r }),
      style: o,
      ...l,
      focusProps: d ? void 0 : { offset: { top: -2, bottom: -2, left: -2, right: 6 } },
      children: (0, i.jsx)("div", {
        ref: a,
        className: s()(eb.b3, { [eb.PJ]: null != t }),
        children: (0, i.jsx)(n, {
          size: "sm",
          color: "currentColor",
          className: s()(eb.ut, { [eb.Uq]: null != t }),
        }),
      }),
    });
  }
  function ew(e) {
    let { onClick: t, channelName: n, showNameplate: r } = e;
    return (0, i.jsx)("div", {
      className: eb.KQ,
      children: (0, i.jsx)(T.m, {
        text: eo.intl.formatToPlainString(eo.t.m0zYbV, { username: n }),
        children: (0, i.jsx)(m.$, {
          size: "sm",
          variant: r ? "overlay-secondary" : "secondary",
          onClick: t,
          text: eo.intl.string(eo.t.pVlP58),
        }),
      }),
    });
  }
  function eG() {
    return (0, i.jsx)(g.t, { size: "xs", color: "currentColor", className: eb.wB });
  }
  function ex() {
    return (0, i.jsx)(S.EyeSlashIcon, { size: "xs", color: "currentColor", className: eb.wB });
  }
  function ek() {
    return (0, i.jsx)(N.K, { size: "xs", color: "currentColor", className: eb.wB });
  }
  function eF(e) {
    let {
        eventTargetRef: t,
        isNitro: n,
        contentWidth: a,
        hoverGradientStart: s,
        hoverGradientMiddle: l,
        hoverGradientEnd: o,
      } = e,
      d = r.useMemo(
        () =>
          null != s && null != l && null != o
            ? {
                Color_GradientCenter: s,
                Color_InnerRing: l ?? C.A.colors.NITRO_TAB_GRADIENT_INNER_RING ?? l,
                Color_OuterRing: o,
                NitroVFX: !1,
              }
            : n
              ? {
                  Color_GradientCenter: C.A.colors.NITRO_TAB_GRADIENT_CENTER,
                  Color_InnerRing: C.A.colors.NITRO_TAB_GRADIENT_INNER_RING,
                  Color_OuterRing: C.A.colors.NITRO_TAB_GRADIENT_OUTER_RING,
                  NitroVFX: !0,
                }
              : {
                  Color_GradientCenter: C.A.colors.STANDARD_TAB_GRADIENT_CENTER,
                  Color_InnerRing: C.A.colors.STANDARD_TAB_GRADIENT_INNER_RING,
                  Color_OuterRing: C.A.colors.STANDARD_TAB_GRADIENT_OUTER_RING,
                  NitroVFX: !1,
                },
        [n, s, l, o],
      );
    return (0, i.jsx)(O.U, {
      eventTargetRef: t,
      className: eb.a1,
      dataBinding: { ...d, DimmerWidth: (a ?? 0) + 32 },
    });
  }
  function eB(e) {
    let {
        route: t,
        selected: n,
        icon: a,
        iconClassName: l,
        interactiveClassName: o,
        text: c,
        children: u,
        locationState: _,
        onClick: h,
        className: f,
        role: I,
        "aria-posinset": p,
        "aria-setsize": T,
        listItemRef: m,
        showHoverGradient: g = !1,
        nitroHoverGradient: S = !1,
        hoverGradientStart: N,
        hoverGradientMiddle: C,
        hoverGradientEnd: O,
        ...L
      } = e,
      { width: y, ref: D } = (0, P.Ay)(),
      v = r.useRef(null),
      b = r.useRef(null),
      M = (0, E.A)(m, v);
    return (0, i.jsx)(eh, {
      className: s()(eb.Ix, { [eb.Ij]: A.Fr }, f),
      onClick: h,
      role: I,
      focusProps: { ...eP, focusTarget: b, ringTarget: v },
      "aria-posinset": p,
      "aria-setsize": T,
      ref: M,
      children: (0, i.jsxs)(R.H, {
        as: "div",
        selected: n,
        className: s()(o, eb.bG, eb.$J, { [eb.Q2]: n }),
        children: [
          g &&
            (0, i.jsx)(eF, {
              eventTargetRef: v,
              isNitro: S,
              contentWidth: y,
              hoverGradientStart: N,
              hoverGradientMiddle: C,
              hoverGradientEnd: O,
            }),
          (0, i.jsxs)(d.N_, {
            to: { pathname: t, state: _ },
            className: eb.nf,
            innerRef: b,
            ...L,
            children: [
              (0, i.jsx)(B.A, {
                ref: g ? D : void 0,
                muted: !1,
                avatar: (0, i.jsx)(a, {
                  size: "refresh_sm",
                  className: s()(eb.e_, l),
                  color: "currentColor",
                }),
                name: c,
                innerClassName: eb.xx,
              }),
              u,
            ],
          }),
        ],
      }),
    });
  }
  function eV(e) {
    let {
        channel: t,
        selected: a = !1,
        user: l,
        activities: A,
        applicationStream: I,
        voiceChannel: p,
        isTyping: T,
        status: m,
        isMobile: g,
        isVR: S,
        nameplate: N,
        ref: C,
        "aria-posinset": O,
        "aria-setsize": P,
      } = e,
      [U, x] = r.useState(!1),
      [Q, ed] = r.useState(!1),
      [ec, eE] = r.useState(!1),
      eA = r.useRef(null),
      [eC, eO] = r.useState(!1),
      eL = (0, _.K)(
        r.useCallback((e) => {
          eO(e);
        }, []),
      ),
      eD = r.useRef(null),
      ev = C ?? eD,
      eF = (0, E.A)(ev, eL),
      {
        avatarSrc: eB,
        avatarDecorationSrc: eV,
        eventHandlers: eH,
      } = (0, eN.A)({ userId: l?.id, size: L._3.SIZE_32, animateOnHover: !(a || U || Q || ec) }),
      ej = t.isMultiUserDM(),
      eW = t.isSystemDM(),
      eY = !ej && !eW && t.type === es.rbe.DM,
      eK = eY && l?.primaryGuild != null,
      e$ = (0, h.bG)([ey.Ay], () => ey.Ay.isChannelMuted(t.getGuildId(), t.id)),
      ez = (0, h.bG)([ey.Ay], () => ey.Ay.isMessagesFavorite(t.id)),
      { ignored: eX, blocked: eZ } = (0, h.cf)([en.A], () => ({
        ignored: en.A.isIgnored(t.getRecipientId()),
        blocked: en.A.isBlocked(t.getRecipientId()),
      })),
      eq = eY && eX,
      eQ = eY && eZ,
      eJ = (e$ || eq || eQ) && !(a || U),
      e0 = (0, h.bG)([eR.Ay], () => eR.Ay.getMentionCount(t.id) > 0),
      e1 = (0, Y.Ay)(t),
      e2 = r.useRef(null),
      e3 = null != N && (a || U || ec);
    function e6() {
      x(!0);
    }
    function e5() {
      x(!1);
    }
    function e4() {
      ed(!0);
    }
    function e7() {
      ed(!1);
    }
    function e8(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      (null != e && (e.preventDefault(), e.stopPropagation()), b.A.closePrivateChannel(t.id, a, n));
    }
    function e9() {
      b.A.preload(es.ME, t.id);
    }
    function te(e) {
      e.stopPropagation();
    }
    function tt(e) {
      e.target === e.currentTarget && eA.current?.click();
    }
    function tn(e) {
      let r =
        "contextmenu" === e.type
          ? c.ImpressionNames.DM_LIST_RIGHT_CLICK_MENU_SHOWN
          : c.ImpressionNames.DM_LIST_KEBAB_MENU_SHOWN;
      (eE(!0),
        t.isMultiUserDM()
          ? (0, M.L3)(
              e,
              async () => {
                let { default: e } = await Promise.all([
                  n.e("926132"),
                  n.e("146652"),
                  n.e("893190"),
                  n.e("393336"),
                  n.e("391763"),
                  n.e("638221"),
                  n.e("955557"),
                  n.e("482861"),
                  n.e("130674"),
                  n.e("947502"),
                  n.e("965789"),
                  n.e("190889"),
                  n.e("979630"),
                  n.e("61129"),
                  n.e("983525"),
                  n.e("198415"),
                  n.e("331203"),
                  n.e("255302"),
                  n.e("935483"),
                  n.e("21106"),
                  n.e("836150"),
                  n.e("566378"),
                  n.e("699011"),
                  n.e("17244"),
                  n.e("146149"),
                  n.e("996028"),
                  n.e("153416"),
                  n.e("760200"),
                ]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: a });
              },
              { impressionName: r, noBlurEvent: !0, onClose: () => eE(!1) },
            )
          : (0, M.L3)(
              e,
              async () => {
                let { default: e } = await Promise.all([
                  n.e("205035"),
                  n.e("790484"),
                  n.e("147119"),
                  n.e("403382"),
                  n.e("597981"),
                  n.e("622936"),
                  n.e("216947"),
                  n.e("463317"),
                  n.e("326692"),
                  n.e("926132"),
                  n.e("834552"),
                  n.e("146652"),
                  n.e("993103"),
                  n.e("708757"),
                  n.e("585968"),
                  n.e("893190"),
                  n.e("393336"),
                  n.e("776273"),
                  n.e("391763"),
                  n.e("189673"),
                  n.e("536200"),
                  n.e("638221"),
                  n.e("571210"),
                  n.e("882073"),
                  n.e("797558"),
                  n.e("955557"),
                  n.e("592028"),
                  n.e("425906"),
                  n.e("234236"),
                  n.e("123216"),
                  n.e("691994"),
                  n.e("229787"),
                  n.e("88342"),
                  n.e("147786"),
                  n.e("936320"),
                  n.e("576665"),
                  n.e("482861"),
                  n.e("311802"),
                  n.e("698965"),
                  n.e("682337"),
                  n.e("235313"),
                  n.e("843719"),
                  n.e("454625"),
                  n.e("371133"),
                  n.e("41991"),
                  n.e("959669"),
                  n.e("130674"),
                  n.e("947502"),
                  n.e("715038"),
                  n.e("436564"),
                  n.e("252229"),
                  n.e("680986"),
                  n.e("245996"),
                  n.e("700792"),
                  n.e("592822"),
                  n.e("965789"),
                  n.e("190889"),
                  n.e("529422"),
                  n.e("823427"),
                  n.e("856753"),
                  n.e("979630"),
                  n.e("61129"),
                  n.e("983525"),
                  n.e("309291"),
                  n.e("242204"),
                  n.e("198415"),
                  n.e("331203"),
                  n.e("307059"),
                  n.e("255302"),
                  n.e("493014"),
                  n.e("838056"),
                  n.e("349644"),
                  n.e("935483"),
                  n.e("508829"),
                  n.e("172883"),
                  n.e("522261"),
                  n.e("873786"),
                  n.e("920628"),
                  n.e("678195"),
                  n.e("713708"),
                  n.e("21106"),
                  n.e("774021"),
                  n.e("836150"),
                  n.e("699011"),
                  n.e("17244"),
                  n.e("298199"),
                  n.e("864464"),
                  n.e("324240"),
                  n.e("304866"),
                  n.e("439778"),
                  n.e("996028"),
                  n.e("960816"),
                ]).then(n.bind(n, 385913));
                return (n) => (0, i.jsx)(e, { ...n, user: l, channel: t, channelSelected: a });
              },
              { impressionName: r, onClose: () => eE(!1) },
            ));
    }
    function ti(e) {
      (e.preventDefault(), e.stopPropagation());
      let r = eo.intl.formatToPlainString(eo.t.hJ5Ap4, { name: e1 }),
        a = eo.intl.format(eo.t.SSIVOu, { name: e1 });
      (t.isManaged() &&
        ((r = eo.intl.formatToPlainString(eo.t.hVGjEW, { name: e1 })),
        (a = eo.intl.format(eo.t.IK1Qvs, { name: e1 }))),
        (0, y.openModalLazy)(async () => {
          let { default: e } = await Promise.all([n.e("446215"), n.e("137803")]).then(
            n.bind(n, 925785),
          );
          return (t) => (0, i.jsx)(e, { title: r, body: a, onSubmit: e8, ...t });
        }));
    }
    let tr = (0, i.jsx)(ep.A, {
        userName: e1,
        displayNameStyles: l?.displayNameStyles,
        effectDisplayType: U || a || ec ? eI.G.ANIMATED : eI.G.PLAIN,
        loop: U,
        boldFontOpacity: 0.9,
      }),
      ta = eK
        ? (0, i.jsxs)(i.Fragment, {
            children: [
              tr,
              (0, i.jsx)(eg.Ay, {
                primaryGuild: l?.primaryGuild,
                userId: l?.id,
                inline: !0,
                disableGuildProfile: !0,
                className: s()(eb.fc, { [eb.Y_]: eJ }),
              }),
            ],
          })
        : tr,
      ts = r.useRef(null),
      tl = (0, ef.W)({ location: "PrivateChannel" }) && l?.displayNameStyles != null,
      { isIncomingCall: to, isOngoingCall: td } = (0, V.A)(t.id),
      tc = [
        (0, j.Ay)({
          channel: t,
          unread: e0,
          isIncomingCall: to,
          isOngoingCall: td,
          ignored: eq,
          blocked: eQ,
        }),
        (0, j.r2)({ channel: t, muted: e$, userStatus: m, isFavorite: ez }),
      ]
        .filter(Boolean)
        .join(", "),
      tu = (0, h.bG)([eR.Ay], () => eR.Ay.lastMessageId(t.id)),
      { waveShouldShow: t_, wavePressed: tE } = (function (e, t) {
        let n,
          i,
          a,
          s,
          l,
          o,
          d,
          c,
          u,
          _,
          [E, A] = r.useState(!1),
          f = r.useCallback(async () => {
            if (!E) {
              (A(!0),
                (0, q.W)({ channelId: e.id, source: "DM Channel" }),
                (0, Z.pX)(es.BVt.CHANNEL(es.ME, e.id)));
              try {
                await X.A.sendStickers(e.id, ["749054660769218631"], "", {
                  location: el.Hx.SEND_WAVE,
                });
              } catch (e) {
                e.ok ||
                  429 !== e.status ||
                  (0, K.P)((0, $.o)(eo.intl.string(eo.t.Whhv4w), z.Ck.FAILURE));
              }
              A(!1);
            }
          }, [e.id, E]);
        return {
          waveShouldShow:
            ((i = (n = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot))
              ? e.getRecipientId()
              : null),
            (a = (0, h.bG)([en.A], () => null != i && en.A.isFriend(i))),
            (s = (0, h.bG)([en.A], () => null != i && en.A.isIgnored(i))),
            (l = (0, h.bG)([et.A], () => {
              let t = et.A.getMessages(e.id);
              return 1 === t.length && t.first()?.type === es.lAJ.FRIEND_REQUEST_ACCEPTED;
            })),
            (o = e.hasFlag(ea.lx.HAS_ONLY_SYSTEM_MESSAGES)),
            (d = (0, h.bG)([et.A], () => et.A.hasCurrentUserSentWaveBlockingMessage(e.id))),
            (c = er.default.extractTimestamp(e.id)),
            (u = (0, ei.v0)(J()(), J()(c), 18144e5)),
            (_ = (0, ee.l)(e.id)),
            n && a && !s && (o || null == t || l) && !d && u && null == _),
          wavePressed: f,
        };
      })(t, tu);
    return (0, i.jsx)(u.tG, {
      id: t.id,
      children: (e) => {
        let { role: n, ...r } = e;
        return (0, i.jsxs)(eh, {
          className: s()(eb.Ix, eb.dm),
          role: n,
          focusProps: { ...eP, focusTarget: eA, ringTarget: ev },
          ref: eF,
          onMouseEnter: e6,
          onMouseLeave: e5,
          onMouseDown: e9,
          onFocus: e4,
          onBlur: e7,
          onContextMenu: tn,
          "aria-setsize": P,
          "aria-posinset": O,
          children: [
            e0 ? (0, i.jsx)("div", { className: s()(eb.dM, { [eb.SU]: eJ }) }) : null,
            (0, i.jsxs)(R.H, {
              className: s()(eb.bG, { [eb.Q2]: a || ec }),
              as: "div",
              onClick: tt,
              muted: eJ,
              selected: a,
              children: [
                (0, i.jsx)(e_.A, {
                  nameplate: e3 ? N : void 0,
                  selected: a,
                  hovered: U,
                  content: ts,
                  placement: eu.u.CHANNEL,
                }),
                (0, i.jsx)(d.N_, {
                  innerRef: eA,
                  to: es.BVt.CHANNEL(es.ME, t.id),
                  className: s()(eb.nf, eb.Zi),
                  "aria-label": tc,
                  onAuxClick: (e) => (0, eS.A)(e, t),
                  ...r,
                  children: (0, i.jsx)(B.A, {
                    ref: ts,
                    avatar: (function () {
                      let e = L._3.SIZE_32;
                      if (t.isMultiUserDM())
                        if (t.recipients.length >= 2 && null == t.icon)
                          return (0, i.jsx)(em.A, {
                            "aria-hidden": !0,
                            recipients: t.recipients,
                            size: e,
                            isTyping: T,
                            status: m,
                          });
                        else
                          return (0, i.jsx)(eM, {
                            ...eH,
                            src: (0, W.Y)(t),
                            "aria-hidden": !0,
                            size: e,
                            status: T ? es.clD.ONLINE : m,
                            isTyping: T,
                          });
                      o()(
                        null != l,
                        "PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel",
                      );
                      let n = null;
                      return (
                        l.isSystemUser() || (n = (0, w.A)(A) ? es.clD.STREAMING : m),
                        (0, i.jsx)(eM, {
                          ...eH,
                          size: L._3.SIZE_32,
                          src: eB,
                          avatarDecoration: eV,
                          status: n,
                          isMobile: g,
                          isVR: S,
                          isTyping: T,
                          "aria-label": l.username,
                          statusTooltip: !0,
                        })
                      );
                    })(),
                    highlighted: e0 && !eJ,
                    muted: eJ,
                    subText: t.isSystemDM()
                      ? (0, i.jsx)(D.E, {
                          variant: "text-xs/medium",
                          color: "none",
                          className: eb.W$,
                          children: (0, H.A)(t.id)
                            ? eo.intl.string(eo.t.FL5T01)
                            : eo.intl.string(eo.t.NnY5lc),
                        })
                      : t.isMultiUserDM()
                        ? (0, i.jsx)(D.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            className: eb.W$,
                            children: eo.intl.format(eo.t.CxSA5N, {
                              members: t.recipients.length + 1,
                            }),
                          })
                        : (0, G.A)({
                              activities: A,
                              status: m,
                              applicationStream: I,
                              voiceChannel: p,
                            })
                          ? (0, i.jsx)(k.A, {
                              user: l,
                              activities: A,
                              voiceChannel: p,
                              applicationStream: I,
                              animateEmoji: U || Q || ec,
                              textClassName: eb.XD,
                              iconClassName: eJ ? eb.tG : void 0,
                            })
                          : null,
                    name: (0, i.jsx)(f.A, { className: s()(eb.uN, { [eb.e8]: tl }), children: ta }),
                    decorators: t.isSystemDM()
                      ? (0, i.jsx)(F.A, {
                          className: eb.G$,
                          type: F.A.Types.SYSTEM_DM,
                          verified: !0,
                        })
                      : null,
                    withDisplayNameStyles: tl,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: s()(eb._q, { [eb.EY]: e3 }),
                  children: [
                    eQ
                      ? (0, i.jsx)(ek, {})
                      : eq
                        ? (0, i.jsx)(ex, {})
                        : ez
                          ? (0, i.jsx)(eG, {})
                          : null,
                    t_ && null != e1
                      ? (0, i.jsx)(ew, { channelName: e1, onClick: tE, showNameplate: e3 })
                      : null,
                    t_
                      ? null
                      : (0, i.jsx)(eU, {
                          icon: v.P,
                          "aria-label": ej
                            ? eo.intl.string(eo.t["26C4oi"])
                            : eo.intl.string(eo.t.jsvgc3),
                          onClick: ej ? ti : e8,
                          onMouseDown: te,
                          nameplate: N,
                          visibleElementRef: e2,
                        }),
                  ],
                }),
              ],
            }),
            a &&
              (0, i.jsx)(eT.A, {
                targetElementRef: ev,
                channelType: t.type,
                isTargetInViewport: eC,
              }),
          ],
        });
      },
    });
  }
  let eH = function (e) {
    let { channel: t, selected: n, ...r } = e,
      a = (0, h.bG)([eD.default], () => eD.default.getUser(t.getRecipientId())),
      s = a?.id,
      l = (0, h.cf)(
        [eO.A, eC.A],
        () => {
          let e;
          if (t.isMultiUserDM()) {
            let n = eO.A.getState().statuses;
            t.recipients.some((e) => n[e] === es.clD.ONLINE) && (e = es.clD.ONLINE);
          } else null != s && (e = eO.A.getStatus(s));
          return {
            status: e,
            activities: null != s ? eO.A.getActivities(s) : null,
            applicationStream: null != s ? eC.A.getAnyStreamForUser(s) : null,
            isMobile: null != s && eO.A.isMobileOnline(s),
            isVR: null != s && eO.A.isVROnline(s),
          };
        },
        [t, s],
      ),
      { voiceChannel: o } = (0, x.Ay)({ userId: s }),
      d = (0, ed.r)({ user: a }),
      c = (0, h.bG)(
        [eD.default, eL.A],
        () =>
          t.isMultiUserDM()
            ? er.default
                .keys(eL.A.getTypingUsers(t.id))
                .some((e) => e !== eD.default.getCurrentUser()?.id)
            : null != a && eL.A.isTyping(t.id, t.getRecipientId()),
        [t, a],
      );
    return t.isMultiUserDM()
      ? (0, i.jsx)(eV, {
          channel: t,
          selected: n,
          isTyping: c,
          status: l.status === es.clD.ONLINE ? es.clD.ONLINE : void 0,
          ...r,
        })
      : (0, i.jsx)(eV, {
          channel: t,
          selected: n,
          user: a,
          voiceChannel: o,
          isTyping: c,
          nameplate: d,
          ...r,
          ...l,
        });
  };
}
