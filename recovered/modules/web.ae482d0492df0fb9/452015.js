/* Recovered shipped factory. Module 452015.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5544402..5581248
 * Raw property SHA-256: ff65160c48ad2e821308d0464735e164bc8a6d1d1578fb4f2cb961c368e1d7ce
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { Ay: () => tE, NE: () => tA, Jz: () => t_, YW: () => te }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n(536637),
    l = n.n(s),
    o = n(17928),
    d = n(554146),
    c = n(189213),
    u = n(862482),
    _ = n(739187),
    E = n(857250),
    A = n(97483),
    h = n(939249),
    f = n(97808),
    I = n(778712),
    p = n(834730),
    T = n(821609),
    m = n(95477),
    g = n(559106),
    S = n(289873),
    N = n(320448),
    C = n(847374),
    O = n(297264),
    R = n(452027),
    L = n(109802),
    y = n(231723),
    D = n(765178),
    v = n(192308),
    b = n(888366),
    M = n(241541),
    P = n(73153),
    U = n(387755),
    w = n(308528),
    G = n(711950),
    x = n(376728);
  let k = {
    search(e, t) {
      P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: e, channelId: t });
    },
    clear(e) {
      P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY", query: "", channelId: e });
    },
    select(e) {
      P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT", row: e });
    },
    addUser(e) {
      P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER", userId: e });
    },
    removeUser(e) {
      P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER", userId: e });
    },
    open: (e) => P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN", channelId: e }),
    close() {
      P.h.dispatch({ type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE" });
    },
  };
  var F = n(717398),
    B = n(684136),
    V = n(964486),
    H = n(793574),
    j = n(666860),
    W = n(688810),
    Y = n(571694),
    K = n(47167),
    $ = n(915089),
    z = n(131607),
    X = n(727245),
    Z = n(247676),
    q = n(66442),
    Q = n(43105),
    J = n(403581),
    ee = n(783420),
    et = n(761640),
    en = n(174459),
    ei = n(695526);
  n(696101);
  var er = n(652215),
    ea = n(49999),
    es = n(202541),
    el = n(660183);
  function eo(e) {
    let { targetElementRef: t, channelId: n, location: a, onAddToGroup: s } = e,
      l = (0, ei.qH)(),
      c = "staff" === l,
      u = "entitled" === l,
      _ = (0, o.bG)([et.Ay], () => et.Ay.getSection(n)),
      { enabled: E } = X.A.useConfig({ location: a }),
      [A, h] = (0, z.kn)(E && !c ? [d.M.NITRO_GDM_CAP_COACHMARK] : []),
      f = A === d.M.NITRO_GDM_CAP_COACHMARK,
      I = r.useCallback(() => {
        (en.default.track(er.HAw.PREMIUM_PROMOTION_OPENED, {
          location: a,
          location_object: er.ZSU.BUTTON_CTA,
        }),
          h(ea.i.TAKE_ACTION));
      }, [a, h]),
      p = r.useCallback(() => {
        (s(), h(ea.i.TAKE_ACTION));
      }, [s, h]);
    return f
      ? (0, i.jsx)(ee.A, {
          subscriptionTier: es.pe.TIER_2,
          onClick: I,
          children: (e) => {
            let { onClick: n } = e;
            return (0, i.jsx)(
              Q.A,
              {
                targetElementRef: t,
                position: "bottom",
                alignmentStrategy: "trigger-center",
                gradientColor: "nitro-pink",
                badge: { type: "beta", variant: "expressive" },
                title: el.intl.string(el.t.d8Spvj),
                body: el.intl.formatToPlainString(el.t.SXkUiv, { number: 25 }),
                actions: [
                  u
                    ? {
                        text: el.intl.string(el.t.yZOtoD),
                        variant: "primary",
                        icon: M.D,
                        onClick: p,
                      }
                    : {
                        text: el.intl.string((0, ei.o9)(l)),
                        variant: "expressive",
                        icon: J.t,
                        onClick: n,
                      },
                ],
                onRequestClose: () => h(ea.i.USER_DISMISS),
              },
              _,
            );
          },
        })
      : null;
  }
  var ed = n(87719);
  function ec(e) {
    let { location: t, nitroAudience: n, transitionState: a, onClose: s } = e,
      l = r.useCallback(async () => {
        (en.default.track(er.HAw.PREMIUM_PROMOTION_OPENED, {
          location: t,
          location_object: er.ZSU.BUTTON_CTA,
        }),
          await s(),
          (0, ed.e)());
      }, [t, s]);
    return (0, i.jsx)(ee.A, {
      subscriptionTier: es.pe.TIER_2,
      children: (e) => {
        let { onClick: t } = e;
        return (0, i.jsx)(c.a, {
          transitionState: a ?? y.ip.ENTERED,
          onClose: async () => await s(),
          title: el.intl.formatToPlainString(el.t.IyBYPN, { number: er.wLU }),
          subtitle: el.intl.formatToPlainString(el.t["Ae97n/"], { number: 25 }),
          actions: [
            { text: el.intl.string(el.t.PUZmk4), variant: "secondary", onClick: l },
            {
              text: el.intl.string((0, ei.o9)(n)),
              variant: "expressive",
              icon: J.t,
              onClick: async (e) => {
                (t(e), await s());
              },
            },
          ],
        });
      },
    });
  }
  var eu = n(503698),
    e_ = n.n(eu),
    eE = n(202091),
    eA = n(866323),
    eh = n(568602),
    ef = n(775602);
  n(46121);
  var eI = n(222358);
  let ep = { mass: 1, tension: 320, friction: 30, clamp: !0 },
    eT = function (e) {
      let { location: t, memberCount: n, recipientLimit: a, ref: s } = e,
        l = (0, ei.qH)(),
        { enabled: d } = X.A.useConfig({ location: t }),
        c = (0, o.bG)([ef.Ay], () => ef.Ay.useReducedMotion),
        [u, _] = r.useState(!1),
        [E, A] = r.useState(!1),
        [h, f] = r.useState(1.4),
        I = r.useRef(1.4),
        m = r.useRef(null),
        g = r.useRef(null),
        S = (0, ei.yh)(l) && n >= a && d,
        N = r.useCallback(() => {
          (f(I.current),
            (I.current = Math.min(I.current + 2, 15)),
            _(!0),
            A(!0),
            null != m.current && clearTimeout(m.current),
            (m.current = setTimeout(() => {
              (_(!1), (m.current = null));
            }, 300)),
            null != g.current && clearTimeout(g.current),
            (g.current = setTimeout(() => {
              (A(!1), (g.current = null));
            }, 1e3)));
        }, []);
      (r.useImperativeHandle(s, () => ({ shake: N }), [N]),
        r.useEffect(() => {
          S || (I.current = 1.4);
        }, [S]),
        r.useEffect(
          () => () => {
            (null != m.current && clearTimeout(m.current),
              null != g.current && clearTimeout(g.current));
          },
          [],
        ));
      let C = r.useCallback(() => {
        en.default.track(er.HAw.PREMIUM_PROMOTION_OPENED, { location: t });
      }, [t]);
      return (0, eA.p)(S, {
        from: { transform: "translateY(16px)", opacity: 0.4 },
        enter: { transform: "translateY(0)", opacity: 1 },
        leave: { transform: "translateY(16px)", opacity: 0 },
        config: ep,
      })(
        (e, t) =>
          t &&
          (0, i.jsx)(eE.animated.div, {
            className: eI.kY,
            style: e,
            children: (0, i.jsxs)(eh.b, {
              isShaking: u,
              intensity: h,
              className: e_()(eI.vK, { [eI.hO]: E && c }),
              children: [
                (0, i.jsxs)("div", {
                  className: eI.Qs,
                  children: [
                    (0, i.jsx)(p.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: el.intl.string(el.t.KCD0Hp),
                    }),
                    (0, i.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-default",
                      children: el.intl.formatToPlainString(el.t["8o8Zk5"], { number: 25 }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: eI.XI,
                  children: (0, i.jsx)(ee.A, {
                    subscriptionTier: es.pe.TIER_2,
                    children: (e) => {
                      let { onClick: t } = e;
                      return (0, i.jsx)(T.$, {
                        variant: "expressive",
                        size: "sm",
                        text: el.intl.string((0, ei.o9)(l)),
                        icon: J.t,
                        onClick: (e) => {
                          (C(), t(e));
                        },
                      });
                    },
                  }),
                }),
              ],
            }),
          }),
      );
    };
  var em = n(683063),
    eg = n(84327);
  function eS(e) {
    let { memberCount: t, recipientLimit: n } = e,
      r = (0, ei.qH)(),
      a = (0, o.bG)([ef.Ay], () => ef.Ay.useReducedMotion),
      s = "entitled" === r && n > er.wLU,
      l = t > er.wLU,
      d = el.intl.formatToPlainString(el.t["9EQix0"], { numMembers: t, maxMemberLimit: n }),
      c = (0, i.jsx)("span", {
        className: e_()(eg.hJ, { [eg.VN]: a }),
        children: s
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(J.t, {
                  size: "xxs",
                  color: "currentColor",
                  className: e_()(eg.cn, { [eg.fw]: l }),
                  "aria-hidden": !0,
                }),
                (0, i.jsx)(p.E, {
                  variant: "text-md/normal",
                  className: e_()(eg.qz, { [eg.fw]: l }),
                  children: d,
                }),
              ],
            })
          : (0, i.jsx)(p.E, {
              variant: "text-md/normal",
              color: !s && t >= n ? "text-feedback-critical" : "text-subtle",
              children: d,
            }),
      });
    return (0, i.jsx)("div", {
      className: eg.VA,
      children: s
        ? (0, i.jsx)(em.u, {
            title: el.intl.string(el.t.u1ilug),
            body: el.intl.format(el.t["mr27w/"], { number: 25 }),
            position: "bottom",
            align: "center",
            children: c,
          })
        : c,
    });
  }
  var eN = n(774300);
  let eC = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-02-longer-group-dm-invites",
    defaultConfig: { inviteMaxAgeSeconds: 86400 },
    variations: { 0: { inviteMaxAgeSeconds: 86400 }, 1: { inviteMaxAgeSeconds: 2419200 } },
  });
  var eO = n(287809),
    eR = n(427262);
  async function eL(e, t) {
    if (0 === t.length) return;
    let n = [];
    for (let e of t) {
      let t = eO.default.getUser(e);
      null == t || t.bot || n.push(t);
    }
    if (0 !== n.length)
      try {
        let t = await x.Ay.createInvite(
            e,
            {
              max_age: (function (e) {
                let { location: t } = e,
                  { inviteMaxAgeSeconds: n } = eC.getConfig({ location: t });
                return n;
              })({ location: "5326c5_1" }),
            },
            er.PE1.GROUP_DM,
          ),
          i = await Promise.all(
            n.map(async (e) => {
              var n;
              return {
                user: e,
                success: await ((n = t.code),
                new Promise((t) => {
                  eN.A.enqueue(
                    {
                      inviteKey: n,
                      type: eN.F.USER,
                      user: e,
                      location: er.PE1.GROUP_DM,
                      inviteAnalyticsMetadata: { source: er.PE1.GROUP_DM },
                    },
                    (e) => {
                      t(e);
                    },
                  );
                })),
              };
            }),
          ),
          r = [],
          a = [];
        for (let { user: e, success: t } of i) t ? r.push(e) : a.push(e);
        if (a.length > 0) {
          let e, t;
          ((t =
            (e = a.map((e) => eR.Ay.getName(e))).length > 0
              ? el.intl.formatToPlainString(el.t["wWp/+6"], {
                  inviteCount: e.length,
                  username1: e[0],
                  username2: e[1] ?? "",
                  remaining: Math.max(0, e.length - 2),
                })
              : el.intl.string(el.t.iRntUl)),
            (0, _.P)((0, E.o)(t, A.Ck.FAILURE)));
        } else
          r.length > 0 &&
            (function (e) {
              let t = e.map((e) => eR.Ay.getName(e));
              if (0 === t.length) return;
              let n = el.intl.formatToPlainString(el.t.gztrTs, {
                inviteCount: t.length,
                username1: t[0],
                username2: t[1] ?? "",
                remaining: Math.max(0, t.length - 2),
              });
              (0, _.P)((0, E.o)(n, A.Ck.SUCCESS));
            })(r);
      } catch {
        (0, _.P)((0, E.o)(el.intl.string(el.t.iRntUl), A.Ck.FAILURE));
      }
  }
  var ey = n(279208),
    eD = n(267102),
    ev = n(976860),
    eb = n(219271),
    eM = n(427358),
    eP = n(95701),
    eU = n(734057),
    ew = n(71393),
    eG = n(958590),
    ex = n(584777),
    ek = n(763827),
    eF = n(573163),
    eB = n(994500),
    eV = n(351906),
    eH = n(957565),
    ej = n(625494),
    eW = n(927813),
    eY = n(403362),
    eK = n(935208),
    e$ = n(58736),
    ez = n(837381),
    eX = n(692617),
    eZ = n(658675),
    eq = n(297413),
    eQ = n(966327),
    eJ = n(235986),
    e0 = n(548118),
    e1 = n(640708),
    e2 = n(290863),
    e3 = n(294910);
  function e6(e) {
    let {
        user: t,
        row: n,
        hideDiscriminator: r,
        comparator: a,
        mutualGuilds: s,
        selected: l,
        checked: d,
        disabled: c = !1,
        onClick: u,
        onMouseEnter: _,
        "aria-setsize": E,
        "aria-posinset": A,
      } = e,
      f = (0, o.bG)([e2.A], () => e2.A.getStatus(t.id)),
      I = (0, ez.rm)(String(t.id));
    return (0, i.jsx)(h.D, {
      id: `user-row-${n}`,
      className: e_()(e3.Se, { [e3.r9]: c }),
      onClick: function () {
        u?.(t.id, n);
      },
      onMouseEnter: function () {
        _?.(n);
      },
      ...I,
      role: "checkbox",
      "aria-checked": d,
      "aria-disabled": c,
      "aria-setsize": E,
      "aria-posinset": A,
      children: (0, i.jsxs)(eJ.A, {
        align: eJ.A.Align.CENTER,
        className: e_()(e3.Bc, { [e3.oz]: l }),
        children: [
          (0, i.jsx)(eQ.A, { user: t, status: f, className: e3.my }),
          (0, i.jsxs)("div", {
            className: e3.YW,
            children: [
              (0, i.jsx)(p.E, {
                tag: "strong",
                className: e3.$R,
                "aria-hidden": !0,
                variant: "text-md/medium",
                children:
                  null != a && a === t.tag
                    ? eR.Ay.getName(t)
                    : null != a && "" !== a
                      ? a
                      : eR.Ay.getName(t),
              }),
              (0, i.jsxs)(p.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: null != s && s.length > 0 ? e3.dj : void 0,
                children: [
                  (0, i.jsx)(eq.A, {
                    user: t,
                    hideDiscriminator: r,
                    className: e3.xK,
                    forceUsername: !0,
                  }),
                  null != s && s.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(e1.A, {
                            height: 2,
                            width: 2,
                            "aria-hidden": "true",
                            className: e3.a6,
                          }),
                          (0, i.jsx)(eX.A, {
                            className: e3.gP,
                            guilds: s,
                            maxGuilds: 3,
                            size: e0.Ay.Sizes.SMOL,
                          }),
                          (0, i.jsx)("span", {
                            className: e3.tz,
                            children:
                              1 === s.length
                                ? s[0].name
                                : el.intl.format(el.t.E215W7, { count: s.length }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            ],
          }),
          (0, i.jsx)(eZ.P, { checked: d, disabled: c }),
        ],
      }),
    });
  }
  function e5(e) {
    let { targetElementRef: t, markAsDismissed: n } = e,
      a = r.useCallback(() => {
        n(ea.i.USER_DISMISS);
      }, [n]);
    return (0, i.jsx)(Q.A, {
      targetElementRef: t,
      position: "left",
      alignmentStrategy: "edge",
      align: "center",
      badge: "new",
      title: el.intl.string(el.t["Ur/4dI"]),
      body: el.intl.string(el.t.AVPtNF),
      actions: [{ text: el.intl.string(el.t["NX+WJN"]), onClick: a }],
      onRequestClose: a,
    });
  }
  var e4 = n(650583),
    e7 = n(872330);
  let e8 = (0, $.Ld)(),
    e9 = "PrivateChannelRecipientsInvite",
    te = {
      ADD_FRIENDS_TO_DM: "Add Friends to DM",
      NEW_GROUP_DM: "New Group DM",
      MEMBER_LIST: "Member List",
    };
  function tt(e) {
    if (eB.A.isFriend(e)) return !0;
    let t = eO.default.getCurrentUser(),
      n = eO.default.getUser(e);
    return !!(t?.isStaff() && n?.isStaff());
  }
  function tn(e) {
    let t = [],
      n = [];
    for (let i of e) tt(i) ? t.push(i) : n.push(i);
    return { channelRecipientIds: t, inviteLinkOnlyUserIds: n };
  }
  function ti(e) {
    let { recipientIds: t, location: n, useGroupDmShell: i = !1 } = e;
    return i && 1 === t.length
      ? w.A.createGroupDmShell({ recipientId: t[0], location: n })
      : w.A.openPrivateChannel({ recipientIds: t, location: n });
  }
  function tr() {
    (0, _.P)((0, E.o)(el.intl.string(el.t.fEptJP), A.Ck.FAILURE));
  }
  function ta(e) {
    let { channel: t, onClose: n } = e,
      r = (0, K.Ay)(t) ?? "",
      a = (0, o.bG)([eF.Ay], () => eF.Ay.lastMessageId(t.id) ?? t.id);
    return (0, i.jsx)(h.D, {
      onClick: () => {
        ((0, ev.uh)(er.ME, t.id), n());
      },
      children: (0, i.jsxs)("div", {
        className: e7.us,
        children: [
          (0, i.jsx)(f.eu, { src: (0, Y.Y)(t), size: I._3.SIZE_24, "aria-label": r }),
          (0, i.jsx)(p.E, {
            variant: "text-sm/medium",
            color: "text-strong",
            tag: "span",
            className: e7.J2,
            children: r,
          }),
          (0, i.jsx)("span", {
            className: e7.Pd,
            children: l()(eK.default.extractTimestamp(a)).fromNow(),
          }),
        ],
      }),
    });
  }
  function ts(e) {
    let { onConfirm: t, channelIds: n, ...r } = e,
      a = (0, o.yK)([eU.A], () => Array.from(n).map(eU.A.getChannel), [n]);
    return (0, i.jsx)(c.a, {
      title: el.intl.string(el.t.uFHxNd),
      subtitle: el.intl.string(el.t.rIsSqE),
      actions: [
        { variant: "secondary", text: el.intl.string(el.t["ETE/oC"]), onClick: r.onClose },
        {
          variant: "primary",
          text: el.intl.string(el.t.KCNNJu),
          onClick: () => {
            (t(), r.onClose());
          },
        },
      ],
      input: (0, i.jsx)(p.E, {
        variant: "text-md/normal",
        className: e7.Jv,
        children: el.intl.string(el.t.cjE7wH),
      }),
      ...r,
      children: a
        .filter(eY.Vq)
        .sort((e, t) => {
          let n = e.lastMessageId ?? e.id,
            i = t.lastMessageId ?? t.id;
          return eK.default.compare(i, n);
        })
        .map((e) => (0, i.jsx)(ta, { onClose: r.onClose, channel: e }, e.id)),
    });
  }
  function tl(e) {
    let { targetElementRef: t } = e,
      [n, r] = (0, z.kn)([d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK]);
    return n !== d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK
      ? null
      : (0, i.jsx)(e5, { targetElementRef: t, markAsDismissed: r });
  }
  class to extends r.PureComponent {
    state = {
      separator: !1,
      copied: !1,
      newChannelName: "",
      previewIcon: void 0,
      collapsedSections: new Set(),
    };
    static contextType = eD.Ay;
    copyTimeout;
    nitroUpsellBannerRef = r.createRef();
    scrollerRef = r.createRef();
    searchBarRef = r.createRef();
    _mobileCloseRef = r.createRef();
    _searchCounter = 0;
    _existingTimeout = null;
    _getAnalyticsEntryPoint() {
      let { channel: e, entryPointType: t } = this.props,
        n = "",
        i = "";
      return (
        null != e
          ? ((n = t ?? te.ADD_FRIENDS_TO_DM), (i = e.isDM() ? "DM" : "Group DM"))
          : ((n = te.NEW_GROUP_DM), (i = "Friends List")),
        { entryPointType: n, entryPointSource: i }
      );
    }
    componentDidMount() {
      let { channel: e } = this.props;
      P.h.wait(() => {
        k.open(e?.id).then(() => {
          this.trackModalOpened();
        });
      });
      let t = (0, j.dI)(e);
      (en.default.track(er.HAw.OPEN_POPOUT, {
        ...t,
        type: this._getAnalyticsEntryPoint().entryPointType,
        source: this._getAnalyticsEntryPoint().entryPointSource,
        is_friend: !this.isNotFriends(),
      }),
        ej._.subscribe(er.jej.SCROLL_PAGE_UP, this.scrollPageUp),
        ej._.subscribe(er.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
        this.createInvite(),
        setTimeout(() => {
          this.forceFocus();
        }, 0));
    }
    trackModalOpened = () => {
      let { channel: e } = this.props,
        t = ex.A.getResults(),
        { friendCount: n, nonFriendCount: i } = (0, j.g4)(t.map((e) => e.user.id)),
        r = this._getAnalyticsEntryPoint();
      en.default.track(er.HAw.PRIVATE_CHANNEL_INVITE_MODAL_OPENED, {
        ...(0, j.dI)(e),
        default_results_count: t.length,
        default_results_friend_count: n,
        default_results_non_friend_count: i,
        entry_point_type: r.entryPointType,
        entry_point_source: r.entryPointSource,
      });
    };
    componentWillUnmount() {
      (ej._.unsubscribe(er.jej.SCROLL_PAGE_UP, this.scrollPageUp),
        ej._.unsubscribe(er.jej.SCROLL_PAGE_DOWN, this.scrollPageDown),
        null != this.copyTimeout && clearTimeout(this.copyTimeout),
        P.h.wait(() => k.close()));
    }
    scrollPageUp = () => {
      this.scrollerRef.current?.scrollPageUp({ animate: !0 });
    };
    scrollPageDown = () => {
      this.scrollerRef.current?.scrollPageDown({ animate: !0 });
    };
    isNotFriends() {
      let { channel: e, isStaffOnlyDM: t } = this.props;
      if (null == e || !e.isDM()) return !1;
      let n = e.getRecipientId();
      if (null == n) throw Error("no recipient in DM");
      return !eB.A.isFriend(n) && !t;
    }
    allowNonFriendRecipientPicker() {
      return this.props.hasGuilds;
    }
    getResultsSections() {
      let { results: e, query: t, isLoading: n } = this.props;
      if (!this.allowNonFriendRecipientPicker() || "" === t) return null;
      let i = [],
        r = [];
      for (let t of e) eB.A.isFriend(t.user.id) ? i.push(t) : r.push(t);
      let a = [];
      return (
        i.length > 0 && a.push({ type: "friends", results: i, showSpinner: !1 }),
        (r.length > 0 || n) && a.push({ type: "serverMembers", results: r, showSpinner: n }),
        a
      );
    }
    getDisplayedResults() {
      let e = this.getResultsSections();
      if (null == e) return this.props.results;
      let { collapsedSections: t } = this.state,
        n = [];
      for (let i of e) t.has(i.type) || n.push(...i.results);
      return n;
    }
    createInvite() {
      let { channel: e } = this.props;
      null == e ||
        !e.isMultiUserDM() ||
        this.isPartyFull() ||
        x.Ay.createInvite(e.id, { max_age: this.props.inviteMaxAgeSeconds }, er.PE1.GROUP_DM);
    }
    isPartyFull() {
      let { channel: e } = this.props;
      return null != e && e.recipients.length + 1 >= (0, Z.A)({ useNitroCapExperiment: !0 });
    }
    getRemaining() {
      let { channel: e, selectedUsers: t } = this.props,
        n = (null == e ? 0 : e.recipients.length) + 1;
      return (0, Z.A)({ useNitroCapExperiment: !0 }) - t.size - n;
    }
    getTotalSelectedMemberCount() {
      let { channel: e, selectedUsers: t } = this.props;
      return new Set([...(e?.recipients ?? []), ...t]).size + 1;
    }
    shouldShowNitroCapRoadblock() {
      return this.props.isInNitroCapTreatment && (0, ei.yh)(this.props.nitroAudience);
    }
    getListBottomPadding() {
      return this.shouldShowNitroCapRoadblock() &&
        this.getTotalSelectedMemberCount() >= (0, Z.A)({ useNitroCapExperiment: !0 })
        ? 104
        : 14;
    }
    shouldShowPersonLimitCounter() {
      let { hasFriends: e } = this.props;
      return !(
        !this.props.isInNitroCapTreatment ||
        ((!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker())
      );
    }
    getCreateGroupButtonAction() {
      let { channel: e, selectedUsers: t } = this.props,
        n = this.getRemaining(),
        i = (null != e && 0 === t.size) || n < 0,
        r = t.size > 1 || null != e ? el.intl.string(el.t["h1/FMu"]) : el.intl.string(el.t.bA875g);
      return { variant: "primary", disabled: i, onClick: this.handleInviteUsers, text: r };
    }
    renderAddUsersButton() {
      let { channel: e, selectedUsers: t } = this.props;
      if (null == e || e.isDM()) return;
      let n = this.getRemaining(),
        r = 0 === t.size || n < 0;
      return (0, i.jsx)(T.$, {
        variant: "primary",
        text: el.intl.string(el.t.OYkgVk),
        disabled: r,
        onClick: this.handleInviteUsers,
      });
    }
    getTitle() {
      if (this.isNotFriends() && !this.allowNonFriendRecipientPicker())
        return el.intl.string(el.t.Xjlbvs);
      if (this.isPartyFull()) return el.intl.string(el.t.OtTQDz);
      let { channel: e } = this.props;
      return null == e
        ? el.intl.string(el.t.jD1qzM)
        : e.isMultiUserDM()
          ? el.intl.string(el.t.NB5DFD)
          : el.intl.string(el.t["PWkO7+"]);
    }
    getSubtitle() {
      let { channel: e, hasFriends: t } = this.props;
      if (!t && !this.allowNonFriendRecipientPicker()) {
        if (null != e && e.isDM()) {
          let t = e.getRecipientId();
          if (null != t) {
            let e = eO.default.getUser(t),
              n = null != e ? e.username : "";
            return el.intl.format(el.t["eg+R9x"], { username: n });
          }
        }
        return el.intl.string(el.t["1x/UBX"]);
      }
      if (this.isPartyFull()) return;
      if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
        let t = null != e ? e.getRecipientId() : null;
        if (null == t) throw Error("no recipient in DM");
        let n = eO.default.getUser(t),
          i = null != n ? n.username : "";
        return el.intl.format(el.t["eg+R9x"], { username: i });
      }
      if (null == e)
        return el.intl.format(el.t.t9mhPt, { number: (0, Z.A)({ useNitroCapExperiment: !0 }) });
      let n = this.getRemaining();
      return n <= 0
        ? el.intl.formatToPlainString(el.t.xYr004, {
            number: (0, Z.A)({ useNitroCapExperiment: !0 }),
          })
        : el.intl.formatToPlainString(el.t.barkEr, { number: n });
    }
    handleKeyDown(e) {
      let { selectedRow: t, selectedUsers: n, query: i } = this.props,
        { current: r } = this.searchBarRef;
      if (null == r) return;
      let a = this.getDisplayedResults(),
        s = t;
      switch (e.key) {
        case e4.dh.BACKSPACE:
          (null == i || 0 === i.length) &&
            n.size > 0 &&
            (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
          break;
        case e4.dh.ARROW_DOWN:
          (e.preventDefault(),
            e.stopPropagation(),
            ++s >= a.length && (s = 0),
            this.handleSelectionChange(s));
          break;
        case e4.dh.ARROW_UP:
          (e.preventDefault(),
            e.stopPropagation(),
            --s < 0 && (s = a.length - 1),
            this.handleSelectionChange(s));
          break;
        case e4.dh.ENTER:
          (e.preventDefault(), e.stopPropagation(), a.length > s && this.handleSelect(s));
      }
    }
    renderSearchBar() {
      let { query: e, hasFriends: t, selectedUsers: n } = this.props;
      if (
        ((!t || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) ||
        this.isPartyFull()
      )
        return null;
      let r = [];
      n.forEach((e) => {
        let t = eO.default.getUser(e);
        null != t &&
          r.push({
            id: e,
            label: eR.Ay.getName(t),
            icon: { type: "avatar", src: t.getAvatarURL(void 0, 32) },
          });
      });
      let { results: a, selectedRow: s, isLoading: l } = this.props,
        o = a.length > 0 || l,
        d = !1;
      for (let e of n) {
        if (eB.A.isFriend(e)) continue;
        let t = eO.default.getUser(e);
        if (null != t && !t.bot) {
          d = !0;
          break;
        }
      }
      return (0, i.jsxs)("div", {
        className: e7.ON,
        children: [
          (0, i.jsx)(m.k, {
            inputRef: this.searchBarRef,
            autoFocus: !0,
            fullWidth: !0,
            helperText: el.intl.string(d ? el.t.xHuK72 : el.t.FIHggl),
            placeholder: 0 === n.size ? el.intl.string(el.t["5h0QOP"]) : "",
            disabled: this.isPartyFull(),
            value: e,
            leading: {
              type: "tags",
              label: el.intl.string(el.t.kHyiXs),
              items: r,
              onRemove: this.handleRemoveUser,
            },
            onChange: this.handleQueryChange,
            onKeyDown: this.handleKeyDown.bind(this),
            role: "combobox",
            "aria-autocomplete": "list",
            "aria-haspopup": "listbox",
            "aria-controls": e8,
            "aria-expanded": o,
            "aria-activedescendant": o ? `user-row-${s}` : void 0,
          }),
          this.renderAddUsersButton(),
          (0, i.jsx)(tl, { targetElementRef: this.searchBarRef }),
        ],
      });
    }
    renderNitroUpsellBannerOverlay() {
      let { isInNitroCapTreatment: e, nitroAudience: t } = this.props;
      return e && (0, ei.yh)(t)
        ? (0, i.jsx)("div", {
            className: e7.qu,
            children: (0, i.jsx)(eT, {
              ref: this.nitroUpsellBannerRef,
              location: e9,
              memberCount: this.getTotalSelectedMemberCount(),
              recipientLimit: (0, Z.A)({ useNitroCapExperiment: !0 }),
            }),
          })
        : null;
    }
    renderModalInput() {
      let e = this.shouldShowPersonLimitCounter(),
        t = this.renderSearchBar();
      if (e || null != t)
        return (0, i.jsxs)(i.Fragment, {
          children: [
            e &&
              (0, i.jsx)(eS, {
                memberCount: this.getTotalSelectedMemberCount(),
                recipientLimit: (0, Z.A)({ useNitroCapExperiment: !0 }),
              }),
            t,
          ],
        });
    }
    renderMobileCloseButton = () =>
      (0, i.jsx)("div", {
        className: e7.Lh,
        ref: this._mobileCloseRef,
        children: (0, i.jsx)(g.xp, {
          containerRef: this._mobileCloseRef,
          children: (0, i.jsx)("div", {
            children: (0, i.jsx)(B.A, {
              className: e7.RR,
              closeAction: this.props.onClose,
              keybind: "ESC",
            }),
          }),
        }),
      });
    renderBody() {
      let { hasFriends: e } = this.props;
      return (!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()
        ? null
        : this.isPartyFull()
          ? (0, i.jsx)("div", {
              children: el.intl.format(el.t.xYr004, {
                number: (0, Z.A)({ useNitroCapExperiment: !0 }),
              }),
            })
          : null;
    }
    getListProps() {
      let { hasFriends: e, results: t } = this.props;
      if (
        ((!e || this.isNotFriends()) && !this.allowNonFriendRecipientPicker()) ||
        this.isPartyFull()
      )
        return;
      let n = this.getResultsSections();
      return null != n
        ? 0 === n.length
          ? this.getEmptyStateListProps()
          : this.getSectionedListProps(n)
        : 0 === t.length
          ? this.getEmptyStateListProps()
          : {
              ref: this.scrollerRef,
              sections: [t.length],
              className: e7.XG,
              innerClassName: e7.bv,
              renderRow: this.renderFlatRow,
              rowHeight: this.getFlatRowHeight,
              renderSection: this.renderEmptySection,
              sectionHeight: 0,
              onScroll: this.handleScroll,
              paddingTop: 0,
              paddingBottom: this.getListBottomPadding(),
              fade: !0,
              role: void 0,
              innerRole: "group",
              innerId: e8,
            };
    }
    getEmptyStateListProps() {
      let { channel: e } = this.props;
      return {
        sections: [1],
        sectionHeight: 0,
        rowHeight: 32,
        paddingBottom: this.getListBottomPadding(),
        renderRow: () => {
          let t = null != e && e.isMultiUserDM();
          return (0, i.jsxs)("div", {
            className: e7.wV,
            children: [
              (0, i.jsx)(p.E, {
                variant: "text-md/normal",
                color: "text-default",
                children: el.intl.string(el.t.z3yXsY),
              }),
              (0, i.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: el.intl.string(t ? el.t["l6Rj+t"] : el.t["7w2iq7"]),
              }),
            ],
          });
        },
      };
    }
    getSectionedListProps(e) {
      let { collapsedSections: t } = this.state,
        n = Array(e.length).fill(-1),
        r = 0;
      for (let i = 0; i < e.length; i++)
        t.has(e[i].type) || ((n[i] = r), (r += e[i].results.length));
      let a = r;
      return {
        ref: this.scrollerRef,
        sections: e.map((e) => e.results.length + +!!e.showSpinner),
        className: e7.XG,
        innerClassName: e7.bv,
        renderRow: (r) => {
          let { section: s, row: l } = r,
            o = e[s];
          if (null == o || t.has(o.type)) return null;
          if (l >= o.results.length)
            return (0, i.jsx)("div", {
              className: e7.Q_,
              children: (0, i.jsx)(S.y, { type: S.t.SPINNING_CIRCLE, className: e7.u1 }),
            });
          let d = o.results[l];
          if (null == d) return null;
          let c = n[s] + l;
          return this.renderUserRow(d, c, a);
        },
        rowHeight: (n, i) => {
          let r = e[n];
          return null == r || t.has(r.type)
            ? 0
            : i >= r.results.length
              ? 40
              : 48 * (null != r.results[i]);
        },
        renderSection: (n) => {
          let { section: r } = n,
            a = e[r];
          if (null == a) return null;
          let s = t.has(a.type),
            l = "friends" === a.type ? el.intl.string(el.t.TdEu5X) : el.intl.string(el.t.y29JXs),
            o = s ? N._ : C.a;
          return (0, i.jsxs)(h.D, {
            className: e7.bV,
            onClick: () => this.handleSectionToggle(a.type),
            "aria-expanded": !s,
            "aria-label": l,
            children: [
              (0, i.jsx)(O.D, { variant: "heading-sm/semibold", color: "text-muted", children: l }),
              (0, i.jsx)(o, { size: "xxs" }),
            ],
          });
        },
        sectionHeight: 32,
        onScroll: this.handleScroll,
        paddingTop: 0,
        paddingBottom: this.getListBottomPadding(),
        fade: !0,
        role: void 0,
        innerRole: "group",
        innerId: e8,
      };
    }
    handleSectionToggle = (e) => {
      this.setState(
        (t) => {
          let { collapsedSections: n } = t,
            i = new Set(n);
          return (i.has(e) ? i.delete(e) : i.add(e), { collapsedSections: i });
        },
        () => {
          let e = this.getDisplayedResults();
          this.props.selectedRow >= e.length && k.select(Math.max(0, e.length - 1));
        },
      );
    };
    renderUserRow(e, t, n) {
      let { selectedUsers: r, selectedRow: a, hideDiscriminator: s, channel: l } = this.props,
        { user: o, comparator: d, mutualGuilds: c } = e,
        u = r.has(o.id) || l?.recipients.includes(o.id),
        _ =
          (!u && 0 >= this.getRemaining() && !this.shouldShowNitroCapRoadblock()) ||
          l?.recipients.includes(o.id);
      return (0, i.jsx)(
        e6,
        {
          row: t,
          user: o,
          hideDiscriminator: s,
          comparator: d,
          mutualGuilds: c,
          checked: u,
          disabled: _,
          selected: t === a,
          onClick: this.handleClick,
          onMouseEnter: this.focusResult,
          "aria-posinset": t + 1,
          "aria-setsize": n,
        },
        o.id,
      );
    }
    getFlatRowHeight = (e, t) => {
      if (e > 0) return 0;
      let { results: n } = this.props;
      return 48 * (null != n[t]);
    };
    renderFlatRow = (e) => {
      let { section: t, row: n } = e;
      if (t > 0) return null;
      let { results: i } = this.props,
        r = i[n];
      return null == r ? null : this.renderUserRow(r, n, i.length);
    };
    renderEmptySection() {
      return null;
    }
    getInviteLinkFooter() {
      var e;
      let t,
        { channel: n, invite: r, hideInstantInvites: a } = this.props,
        { copied: s } = this.state;
      if (null == n || !n.isMultiUserDM() || this.isPartyFull()) return null;
      let l = null != r ? (0, ey.A)(r.code) : "",
        o = l.length > 0;
      return (0, i.jsx)(R.D, {
        label: el.intl.string(el.t.dTqtcN),
        helperText: o
          ? (t = Math.floor((e = this.props.inviteMaxAgeSeconds) / eW.A.Seconds.DAY)) <= 1
            ? el.intl.formatToPlainString(el.t.ZVdJMy, {
                numHours: Math.round(e / eW.A.Seconds.HOUR),
              })
            : el.intl.formatToPlainString(el.t.T96qss, { numDays: t })
          : void 0,
        children: (0, i.jsx)(L.e, {
          supportsCopy: eH.p5,
          placeholder: (0, ey.A)(el.intl.string(el.t.lPVBqP)),
          value: o ? (a ? el.intl.string(el.t["6HzNgZ"]) : l) : "",
          buttonColor: u.$n.Colors.BRAND,
          text: o
            ? s
              ? el.intl.string(el.t.q30c5i)
              : el.intl.string(el.t.OpuAlK)
            : el.intl.string(el.t.qzxqUf),
          mode: s ? L.q.SUCCESS : L.q.DEFAULT,
          onCopy: () => {
            o ? this.handleCopyInvite(l) : this.createInvite();
          },
        }),
      });
    }
    getFooterProps() {
      let { hasFriends: e, channel: t, selectedUsers: n } = this.props;
      if (this.isNotFriends() && !this.allowNonFriendRecipientPicker()) {
        let e = null != t ? t.getRecipientId() : null;
        if (null == e) throw Error("no recipient in DM");
        let n = eO.default.getUser(e),
          i = null != n && eB.A.getRelationshipType(n.id) === er.eA$.PENDING_OUTGOING;
        return {
          actions: [
            {
              variant: "primary",
              text: i ? el.intl.string(el.t.xMH6vD) : el.intl.string(el.t["PMsq/b"]),
              disabled: i,
              onClick: () => (null != n ? this.handleAddFriend(n) : null),
            },
          ],
        };
      }
      if (!e && !this.allowNonFriendRecipientPicker())
        return {
          actions: [
            {
              variant: "primary",
              text: el.intl.string(el.t.w5uwoI),
              onClick: this.handleAddFriendNavigation,
            },
          ],
        };
      if (this.isPartyFull()) return {};
      if (null == t) {
        let e = n.size > 1,
          t = new Set(n);
        return {
          actionBarInput: e
            ? (0, i.jsx)(td, {
                previewIcon: this.state.previewIcon,
                selectedUsers: t,
                channelName: this.state.newChannelName,
                onChange: this.handleChannelNameChange,
                onIconChange: this.handleIconChange,
                onIconRemove: this.handleIconRemove,
              })
            : void 0,
          actions: [
            {
              variant: "secondary",
              text: el.intl.string(el.t["ETE/oC"]),
              onClick: this.props.onClose,
            },
            this.getCreateGroupButtonAction(),
          ],
        };
      }
      if (t.isDM()) return { actions: [this.getCreateGroupButtonAction()] };
      let r = this.getInviteLinkFooter();
      return null != r ? { actionBarInput: r } : {};
    }
    renderNitroCapFullState() {
      let { transitionState: e, onClose: t, nitroAudience: n } = this.props;
      if ((0, ei.yh)(n))
        return (0, i.jsx)(ec, { transitionState: e, onClose: t, location: e9, nitroAudience: n });
      let r = (0, Z.A)({ useNitroCapExperiment: !0 });
      return (0, i.jsx)(c.a, {
        transitionState: e ?? y.ip.ENTERED,
        onClose: async () => await t(),
        title: el.intl.formatToPlainString(el.t.IyBYPN, { number: r }),
        subtitle: el.intl.formatToPlainString(el.t.xYr004, { number: r }),
        actions: [],
      });
    }
    render() {
      let { transitionState: e, onClose: t } = this.props;
      if (this.isPartyFull() && this.props.isInNitroCapTreatment)
        return this.renderNitroCapFullState();
      let { actionBarInput: n, actions: r } = this.getFooterProps();
      return (0, i.jsx)(c.a, {
        transitionState: e ?? y.ip.ENTERED,
        onClose: async () => await t(),
        title: this.getTitle(),
        subtitle: this.shouldShowPersonLimitCounter() ? void 0 : this.getSubtitle(),
        input: this.renderModalInput(),
        preview: this.renderNitroUpsellBannerOverlay(),
        actionBarInput: n,
        listProps: this.getListProps(),
        actions: r ?? [],
        children: this.renderBody(),
      });
    }
    handleAddFriend(e) {
      (this.props.onClose(),
        F.A.sendRequest({
          discordTag: eR.Ay.getUserTag(e, { identifiable: "always" }),
          context: { location: "Group DM" },
        }));
    }
    forceFocus = () => {
      let e = this.searchBarRef.current;
      e?.focus();
    };
    focusResult = (e) => {
      k.select(e);
    };
    handleSelect = (e) => {
      let { channel: t } = this.props;
      if (null == e) return void k.clear(t?.id);
      let n = this.getDisplayedResults()[e];
      null != n && this.handleClick(n.user.id, e);
    };
    handleSelectionChange = (e) => {
      k.select(e);
      let t = this.scrollerRef.current;
      if (null == t) return;
      let n = this.getResultsSections();
      if (null == n) return void t.scrollToIndex({ section: 0, row: e, padding: 8 });
      let { collapsedSections: i } = this.state,
        r = e;
      for (let e = 0; e < n.length; e++)
        if (!i.has(n[e].type)) {
          if (r < n[e].results.length)
            return void t.scrollToIndex({ section: e, row: r, padding: 8 });
          r -= n[e].results.length;
        }
    };
    handleQueryChange = (e) => {
      let { channel: t } = this.props,
        n = (0, j.dI)(t);
      (k.search(e, t?.id),
        null != this._existingTimeout && clearTimeout(this._existingTimeout),
        (this._existingTimeout = setTimeout(() => {
          (en.default.track(er.HAw.SEARCH_USER_LIST_STARTED, {
            ...n,
            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
            search_query_length: e.length,
          }),
            this._searchCounter++);
        }, 500)));
    };
    handleRemoveTag = (e) => {
      let t = Array.from(this.props.selectedUsers);
      k.removeUser(t[e]);
    };
    handleRemoveUser = (e) => {
      (e.forEach((e) => {
        let t = eO.default.getUser(e);
        (null != t &&
          D.O.announce(
            el.intl.formatToPlainString(el.t.JL1QSg, { username: eR.Ay.getName(t) }),
            "polite",
          ),
          k.removeUser(e));
      }),
        this.forceFocus());
    };
    handleClick = (() => {
      var e = this;
      return function (t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          { selectedUsers: i, query: r, channel: a } = e.props;
        if (a?.recipients.includes(t)) return;
        let s = !i.has(t),
          l = e.getResultsSections(),
          o = 0,
          d = n;
        if (null != l) {
          let i = eB.A.isFriend(t);
          o = i ? 1 : 2;
          let { collapsedSections: r } = e.state,
            a = i ? "friends" : "serverMembers",
            s = 0;
          for (let e of l) {
            if (e.type === a) break;
            r.has(e.type) || (s += e.results.length);
          }
          d = n - s;
        }
        let c = eO.default.getUser(t);
        if (s) {
          if (0 >= e.getRemaining()) {
            e.shouldShowNitroCapRoadblock() &&
              (e.nitroUpsellBannerRef.current?.shake(),
              D.O.announce(el.intl.string(el.t.KCD0Hp), "polite"));
            return;
          }
          e.getRemaining() > 0 &&
            (en.default.track(er.HAw.CREATE_DM_USER_ROW_INTERACTED, {
              ...(0, j.dI)(a),
              section: o,
              row: d,
              interaction_type: "select",
              affinity_score: eM.A.getUserAffinity(t)?.communicationProbability ?? -1,
            }),
            k.addUser(t),
            null != c &&
              D.O.announce(
                el.intl.formatToPlainString(el.t.iyKU50, { username: eR.Ay.getName(c) }),
                "polite",
              ),
            r.length > 0 && (k.clear(a?.id), e.forceFocus()));
        } else
          (en.default.track(er.HAw.CREATE_DM_USER_ROW_INTERACTED, {
            ...(0, j.dI)(a),
            section: o,
            row: d,
            interaction_type: "deselect",
            affinity_score: eM.A.getUserAffinity(t)?.communicationProbability ?? -1,
          }),
            k.removeUser(t),
            null != c &&
              D.O.announce(
                el.intl.formatToPlainString(el.t.JL1QSg, { username: eR.Ay.getName(c) }),
                "polite",
              ));
      };
    })();
    handleAddFriendNavigation = () => {
      (G.A.transitionToSection(er.m3P.ADD_FRIEND, { explicit: !0 }), this.props.onClose());
    };
    handleScroll = () => {
      let e = this.scrollerRef.current;
      null != e && this.setState({ separator: !e.isScrolledToTop() });
    };
    _getUserAffinities(e) {
      return {
        affinities: e.map((e) => {
          let t = eM.A.getUserAffinity(e);
          return t?.communicationProbability ?? -1;
        }),
      };
    }
    handleChannelNameChange = (e) => {
      this.setState({ newChannelName: e });
    };
    handleIconChange = (e) => {
      let { imageUri: t } = e;
      this.setState({ previewIcon: t });
    };
    handleIconRemove = () => {
      this.setState({ previewIcon: null });
    };
    updateGDM = (e, t) => {
      let n = {};
      ("" !== this.state.newChannelName && (n.name = this.state.newChannelName),
        null != this.state.previewIcon && (n.icon = this.state.previewIcon),
        (null != n.name || null != n.icon) && w.A.updateChannel(e, n, t),
        en.default.track(er.HAw.GDM_EDIT_INTERACTED, {
          channel_id: e,
          channel_type: er.rbe.GROUP_DM,
          location: t,
          new_name_set: "" !== this.state.newChannelName,
          new_icon_set: null != this.state.previewIcon,
        }));
    };
    createNewDM = (e) => {
      let t = this._searchCounter,
        { channel: n } = this.props,
        i = (0, j.dI)(n),
        r = !0;
      1 === e.length && (r = null == w.A._openCachedDMChannel(e[0]));
      let a = (0, j.g4)(e);
      en.default.track(er.HAw.CREATE_DM_USER_LIST_CLICKED, {
        ...i,
        is_new_dm: r,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: e,
        num_searches: t,
        affinity_score: this._getUserAffinities(e).affinities,
        name_is_set: "" !== this.state.newChannelName,
        icon_is_set: null != this.state.previewIcon,
        friend_recipient_count: a.friendCount,
        non_friend_recipient_count: a.nonFriendCount,
      });
      let { channelRecipientIds: s, inviteLinkOnlyUserIds: l } =
        e.length > 1 ? tn(e) : { channelRecipientIds: e, inviteLinkOnlyUserIds: [] };
      ti({ recipientIds: s, location: "New Group DM", useGroupDmShell: l.length > 0 })
        .then((e) => {
          (this.props.onComplete?.(e), this.updateGDM(e, H.A.NEW_GROUP_DM_INVITE_MODAL), eL(e, l));
        })
        .catch(tr);
    };
    pushToExistingDM = (e, t) => {
      let { channelRecipientIds: n, inviteLinkOnlyUserIds: i } = tn(t),
        r = e.id;
      e.isGroupDM()
        ? this._addRecipientsToExistingGroupDM(r, n, i)
        : e.isDM() && this._promoteDMToGroupDM(r, e.getRecipientId(), n, i);
      let a = (0, j.g4)(t);
      en.default.track(er.HAw.CREATE_DM_USER_LIST_CLICKED, {
        ...(0, j.dI)(e),
        is_new_dm: e.isDM(),
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: t,
        num_searches: this._searchCounter,
        affinity_score: this._getUserAffinities(t).affinities,
        friend_recipient_count: a.friendCount,
        non_friend_recipient_count: a.nonFriendCount,
      });
    };
    _addRecipientsToExistingGroupDM = (e, t, n) => {
      let i = ek.A.getChannelId() === e;
      (t.length > 0 ? w.A.addRecipients(e, t, er.ThZ.ADD_FRIENDS_TO_DM) : Promise.resolve(e))
        .then((e) => {
          (this.props.onComplete?.(e), eL(e, n), i && t.length > 0 && U.A.ring(e, t, "dm_invite"));
        })
        .catch(tr);
    };
    _promoteDMToGroupDM = (e, t, n, i) => {
      let r = ek.A.getChannelId() === e,
        a = tt(t),
        s = a ? [...n, t] : n,
        l = a ? i : [...i, t];
      (a && n.length > 0
        ? w.A.addRecipients(e, n, er.ThZ.ADD_FRIENDS_TO_DM)
        : s.length > 0 || l.length > 0
          ? ti({ recipientIds: s, location: "New Group DM", useGroupDmShell: l.length > 0 })
          : Promise.resolve(e)
      )
        .then((t) => {
          if ((this.props.onComplete?.(t), eL(t, l), r)) {
            if (t !== e) return void U.A.call(t, !1, !0);
            n.length > 0 && U.A.ring(t, n, "dm_invite");
          }
        })
        .catch(tr);
    };
    handleInviteUsers = () => {
      let { channel: e, selectedUsers: t, onClose: n } = this.props,
        r = Array.from(t);
      if (null != e) {
        let t = th(Array.from(new Set([...e.recipients, ...r])));
        t.size > 0
          ? (0, v.openModal)(
              (n) =>
                (0, i.jsx)(ts, {
                  ...n,
                  onConfirm: () => this.pushToExistingDM(e, r),
                  channelIds: t,
                }),
              {},
              (0, v.modalContextFromAppContext)(this.context.appContext),
            )
          : this.pushToExistingDM(e, r);
      } else {
        let e = th(r);
        r.length > 1 && e.size > 0
          ? (0, v.openModal)(
              (t) => (0, i.jsx)(ts, { ...t, onConfirm: () => this.createNewDM(r), channelIds: e }),
              {},
              (0, v.modalContextFromAppContext)(this.context.appContext),
            )
          : this.createNewDM(r);
      }
      n();
    };
    handleCopyInvite = (e) => {
      let { channel: t, invite: n } = this.props;
      (null != n && (0, eH.C)(e),
        null != this.copyTimeout && clearTimeout(this.copyTimeout),
        this.setState({ copied: !0 }),
        (this.copyTimeout = setTimeout(() => {
          this.setState({ copied: !1 });
        }, 1e3)),
        en.default.track(er.HAw.COPY_INSTANT_INVITE, {
          server: null,
          channel: null != t ? t.id : null,
          channel_type: null != t ? t.type : null,
          location: er.ThZ.ADD_FRIENDS_TO_DM,
          code: null != n ? n.code : null,
        }));
    };
    scrollToCounterSearchBarHeightChange = (e) => {
      let t = this.scrollerRef.current?.getScrollerNode?.();
      null != t && (t.scrollTop = Math.max(0, t.scrollTop + e));
    };
  }
  function td(e) {
    let {
        selectedUsers: t,
        channelName: n,
        previewIcon: r,
        onIconChange: a,
        onIconRemove: s,
        onChange: l,
      } = e,
      { analyticsLocations: o } = (0, W.Ay)(H.A.NEW_GROUP_DM_INVITE_MODAL),
      d = (0, K.Jo)(Array.from(t), eO.default, eB.A);
    return (0, i.jsxs)("div", {
      className: e7.zj,
      children: [
        (0, i.jsx)(q.X, {
          className: e7.r9,
          channel: null,
          previewIcon: r,
          onIconChange: a,
          onIconRemove: s,
          analyticsLocations: o,
          petite: !0,
          allowRemovingIcon: !1,
        }),
        (0, i.jsx)(p.E, {
          className: e7.hL,
          variant: "text-sm/medium",
          color: "text-muted",
          children: el.intl.string(el.t.YynaLK),
        }),
        (0, i.jsx)(m.k, {
          "aria-label": el.intl.string(el.t.YynaLK),
          name: "create-gdm-channel-name",
          placeholder: d,
          value: n,
          onChange: l,
        }),
      ],
    });
  }
  function tc(e) {
    let { channel: t, onComplete: n, entryPointType: r, ...a } = e,
      s = (0, o.cf)([eV.A, ex.A, eG.A, ew.A, eB.A], () => {
        let e;
        return (
          null != t && null != (e = eG.A.getInvite(t.id)) && e.isExpired() && (e = null),
          {
            ...ex.A.getState(),
            hasFriends: eB.A.getFriendCount() > 0,
            invite: e,
            hideDiscriminator: eV.A.hidePersonalInformation,
            hideInstantInvites: eV.A.hideInstantInvites,
            hasGuilds: ew.A.getGuildCount() > 0,
          }
        );
      }),
      l = (0, o.bG)(
        [eO.default],
        () =>
          !!eO.default.getCurrentUser()?.isStaff() &&
          null != t &&
          !!t.isDM() &&
          t.recipients.every((e) => eO.default.getUser(e)?.isStaff()),
        [t],
      ),
      d = (0, ei.qH)(),
      { enabled: c } = X.A.useConfig({ location: e9 }),
      u = (function (e) {
        let { location: t } = e,
          { inviteMaxAgeSeconds: n } = eC.useConfig({ location: t });
        return n;
      })({ location: "5326c5_1" });
    return (0, i.jsx)(to, {
      channel: t,
      isStaffOnlyDM: l,
      onComplete: n,
      entryPointType: r,
      isInNitroCapTreatment: c,
      nitroAudience: d,
      inviteMaxAgeSeconds: u,
      ...a,
      ...s,
    });
  }
  function tu(e) {
    let { channel: t, subscribeToGlobalHotkey: n, entryPointType: a } = e,
      s = `channel-invite-modal-${t?.id}`,
      l = (0, v.useHasModalOpen)(s),
      o = r.useCallback(
        () =>
          (0, v.openModalLazy)(
            () => Promise.resolve((e) => (0, i.jsx)(tc, { ...e, channel: t, entryPointType: a })),
            { modalKey: s },
          ),
        [t, a, s],
      ),
      d = r.useCallback(() => (l ? (0, v.closeModal)(s) : o()), [l, s, o]);
    return (
      r.useEffect(
        () => (
          n && ej._.subscribe(er.jej.TOGGLE_DM_CREATE, d),
          () => {
            ej._.unsubscribe(er.jej.TOGGLE_DM_CREATE, d);
          }
        ),
        [n, d],
      ),
      (0, V.Ay)(() => {
        (0, eb.u)();
      }),
      { showModal: o, toggleVisible: d }
    );
  }
  function t_(e) {
    let { channel: t, onComplete: n } = e,
      r = t?.id != null ? `channel-invite-modal-${t.id}` : "channel-invite-modal-new";
    (0, v.openModalLazy)(
      () => Promise.resolve((e) => (0, i.jsx)(tc, { ...e, channel: t, onComplete: n })),
      { modalKey: r },
    );
  }
  function tE(e) {
    let {
        channel: t,
        iconClassName: n,
        className: a,
        icon: s,
        tooltip: l,
        tooltipPosition: d = "bottom",
        subscribeToGlobalHotkey: c = !1,
      } = e,
      u = r.useRef(null),
      _ = s ?? (null == t ? b.g : M.D),
      { showModal: E } = tu({ channel: t, subscribeToGlobalHotkey: c }),
      A = (0, o.bG)([eO.default], () => eO.default.getUser(t?.getRecipientId()));
    return A?.bot || A?.isProvisional
      ? null
      : (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(e$.Ay.Icon, {
              ref: u,
              onClick: E,
              icon: _,
              className: a,
              iconClassName: n,
              tooltip: l,
              tooltipPosition: d,
            }),
            null != t &&
              t.isMultiUserDM() &&
              (0, i.jsx)(
                eo,
                { targetElementRef: u, channelId: t.id, location: e9, onAddToGroup: E },
                t.id,
              ),
          ],
        });
  }
  function tA(e) {
    let {
        channel: t,
        fullWidth: n = !1,
        text: a,
        icon: s,
        subscribeToGlobalHotkey: l = !1,
        allowFrictionlessGDMUpsell: o,
        entryPointType: c,
        ...u
      } = e,
      _ = r.useRef(null),
      { showModal: E } = tu({ channel: t, subscribeToGlobalHotkey: l, entryPointType: c }),
      A = r.useMemo(() => (o ? [d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK] : []), [o]),
      [h, f] = (0, z.kn)(A),
      I = r.useCallback(() => {
        (h === d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK && f(ea.i.TAKE_ACTION), E());
      }, [E, h, f]);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(T.$, {
          variant: "primary",
          ...u,
          onClick: I,
          buttonRef: _,
          text: a,
          "aria-label": a,
          icon: s,
          fullWidth: n,
        }),
        h === d.M.INVITE_NONFRIENDS_TO_GDM_COACHMARK &&
          (0, i.jsx)(e5, { targetElementRef: _, markAsDismissed: f }),
      ],
    });
  }
  function th(e) {
    let t = tf(e);
    return new Set(
      (0, a.chain)(eU.A.getMutablePrivateChannels())
        .values()
        .filter((e) => (0, eP.MK)(e.type))
        .filter((e) => tf(e.recipients) === t)
        .map((e) => e.id)
        .value(),
    );
  }
  function tf(e) {
    return JSON.stringify(e.sort());
  }
}
