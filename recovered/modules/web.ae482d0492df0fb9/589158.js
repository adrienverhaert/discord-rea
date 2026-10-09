/* Recovered shipped factory. Module 589158.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 745992..754381
 * Raw property SHA-256: 085beb834cd1c383c1c64e04e58b3ae60708b7d01bb8353d1df4768dce184730
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => ec });
  var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(17928),
    d = n(319060),
    c = n(866665),
    u = n(329177),
    _ = n(939249),
    E = n(104510),
    A = n(661531),
    h = n(463930),
    f = n(97808),
    I = n(778712),
    p = n(922016),
    T = n(960076),
    m = n(397244),
    g = n(714114),
    S = n(394871),
    N = n(296948),
    C = n(709066),
    O = n(235986),
    R = n(141504),
    L = (((i = L || {}).SINGLE_AVATAR = "1"), (i.MULTIPLE_AVATAR = "2"), i);
  let y = { [I._3.SIZE_32]: R.dT, [I._3.SIZE_40]: R.Jb };
  class D extends a.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = L;
    render() {
      let {
        type: e,
        avatarSize: t,
        className: n,
        childrenClassName: i,
        doNotAnimate: a,
      } = this.props;
      return "2" === e
        ? (0, r.jsxs)("div", {
            className: l()(R.ce, R.jO, n),
            children: [
              (0, r.jsxs)(O.A, {
                children: [
                  (0, r.jsx)("div", { className: l()(R.RH, y[t], R.hC) }),
                  (0, r.jsx)("div", { className: l()(R.RH, y[t], R.hC) }),
                  (0, r.jsx)("div", { className: l()(R.RH, y[t]) }),
                ],
              }),
              (0, r.jsx)(O.A, {
                grow: 1,
                className: R.eC,
                style: { maxWidth: this.placeholderMaxWidth },
              }),
            ],
          })
        : (0, r.jsxs)(O.A, {
            className: l()(R.qf, !a && R.lN, n),
            children: [
              (0, r.jsx)("div", { className: l()(R.RH, y[t], i) }),
              (0, r.jsx)(O.A, {
                grow: 1,
                className: l()(R.gM, i),
                style: { maxWidth: this.placeholderMaxWidth },
              }),
            ],
          });
    }
  }
  var v = n(268218),
    b = n(193663),
    M = n(490427),
    P = n(609425),
    U = n(922301),
    w = n(660184),
    G = n(73392),
    x = n(218150),
    k = n(534400),
    F = n(531685),
    B = n(620141),
    V = n(19309),
    H = n(224964);
  function j(e) {
    let { confettiSpawnRef: t, shouldFire: n } = e,
      i = (0, o.bG)([F.A], () => F.A.isFocused()),
      r = (0, H.A)();
    return (
      a.useEffect(() => {
        if (i && n) {
          let e = (0, V.A)(t);
          null != e && r.fire(e.x, e.y);
        }
      }, [r, t, i, n]),
      null
    );
  }
  function W(e) {
    return (0, r.jsx)(B.A, {
      confettiLocation: e.confettiLocation,
      children: (0, r.jsx)(j, { ...e }),
    });
  }
  var Y = n(967144),
    K = n(859703),
    $ = n(738822),
    z = n(866157),
    X = n(854627),
    Z = n(240248),
    q = n(427262),
    Q = n(652215),
    J = n(31408),
    ee = n(660183),
    et = n(590218);
  let en = (0, v.Fe)({
    createPromise: () =>
      Promise.all([
        n.e("788029"),
        n.e("505928"),
        n.e("752657"),
        n.e("237427"),
        n.e("634225"),
        n.e("747973"),
        n.e("953840"),
        n.e("723180"),
        n.e("60955"),
        n.e("264236"),
        n.e("811310"),
        n.e("913823"),
        n.e("187110"),
        n.e("292583"),
        n.e("132191"),
        n.e("466322"),
        n.e("344502"),
        n.e("682337"),
        n.e("538887"),
        n.e("454625"),
        n.e("8563"),
        n.e("35485"),
        n.e("324761"),
        n.e("653849"),
        n.e("209729"),
        n.e("603808"),
        n.e("932606"),
        n.e("285350"),
        n.e("424265"),
        n.e("669558"),
        n.e("919885"),
        n.e("655602"),
        n.e("867160"),
      ]).then(n.bind(n, 198525)),
    webpackId: 198525,
    name: "QuestMembersListPopout",
    renderLoader: () => null,
  });
  (0, Z.xI)(d.A.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
  let ei = a.memo(function (e) {
      let { isOwner: t, lostPermissionTooltipText: n, ownerTooltipText: i } = e;
      return null != t && t && null == n
        ? (0, r.jsx)(c.m, {
            __unsupportedReactNodeAsText: i ?? ee.intl.string(ee.t.pclUFJ),
            children: (0, r.jsx)(u.CrownIcon, {
              size: "md",
              color: "currentColor",
              className: et.Dd,
              "aria-label": i ?? ee.intl.string(ee.t.pclUFJ),
            }),
          })
        : null;
    }),
    er = a.memo(function (e) {
      let { premiumSince: t, onClickPremiumGuildIcon: n } = e;
      return null == t
        ? null
        : (0, r.jsx)(c.m, {
            text: ee.intl.formatToPlainString(ee.t.IWkAq7, { date: t }),
            asContainer: !0,
            children: (0, r.jsx)(_.D, {
              onClick: n,
              tabIndex: -1,
              children: (0, r.jsx)(E._, {
                color: A.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: et.PC,
              }),
            }),
          });
    }),
    ea = a.memo(function (e) {
      let { user: t } = e;
      if (null == t) return null;
      let n = (0, N.r)(t);
      return null == n
        ? null
        : (0, r.jsx)(C.A, { className: et.AO, type: n, verified: t.isVerifiedBot() });
    }),
    es = a.memo(function (e) {
      let {
        user: t,
        isOwner: n,
        lostPermissionTooltipText: i,
        ownerTooltipText: a,
        premiumSince: s,
        onClickPremiumGuildIcon: l,
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(ea, { user: t }),
          (0, r.jsx)(ei, { isOwner: n, lostPermissionTooltipText: i, ownerTooltipText: a }),
          (0, r.jsx)(er, { premiumSince: s, onClickPremiumGuildIcon: l }),
        ],
      });
    }),
    el = a.memo(function (e) {
      let {
          colorRoleName: t,
          colorString: n,
          colorStrings: i,
          name: a,
          hideClanTag: s,
          user: l,
          guildId: o,
          isHovering: d,
        } = e,
        c = (0, P.A)({ userId: l?.id, guildId: o }),
        u = (0, G.a)({ displayNameStyles: c }),
        _ = null == o && null != c;
      return (0, r.jsxs)(r.Fragment, {
        children: [
          _
            ? (0, r.jsx)(w.A, {
                userName: a ?? "",
                displayNameStyles: c,
                effectDisplayType: d ? U.G.ANIMATED : U.G.STATIC,
                loop: !0,
              })
            : (0, r.jsx)(h.g, {
                roleName: t,
                colorString: n,
                colorStrings: i,
                name: a,
                className: et.UU,
                displayNameStylesFont: u,
                animateRoleGradient: d,
              }),
          !s &&
            (0, r.jsx)(k.Ay, {
              primaryGuild: l?.primaryGuild,
              userId: l?.id,
              contextGuildId: o,
              disableGuildProfile: !0,
              className: et.fc,
            }),
          null != o && l?.id != null && (0, r.jsx)(x.A, { guildId: o, userId: l.id }),
        ],
      });
    }),
    eo = a.memo(function (e) {
      let {
          user: t,
          shouldAnimateStatus: n,
          activities: i,
          status: a,
          eventHandlers: s,
          avatarSrc: l,
          isMobile: o,
          isVR: d,
          isTyping: c,
          avatarDecorationSrc: u,
          handleSetTypingRef: _,
          typingRef: E,
          currentUser: A,
        } = e,
        h = a === Q.clD.OFFLINE,
        p = n ? f.Js : f.eu,
        m = (0, T.A)(i) ? Q.clD.STREAMING : a;
      return (
        (m = h ? void 0 : m),
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(p, {
              ...s,
              size: I._3.SIZE_32,
              src: l,
              isMobile: o,
              isVR: d,
              isTyping: c,
              status: m,
              "aria-label": t.username,
              statusTooltip: !0,
              avatarDecoration: u,
              typingIndicatorRef: _,
            }),
            (0, r.jsx)(W, {
              confettiSpawnRef: E,
              shouldFire: c && null != A && t.id !== A.id,
              confettiLocation: J.k.MEMBER_USER,
            }),
          ],
        })
      );
    }),
    ed = a.memo(function (e) {
      let {
          hideSubtext: t,
          hideTooltip: n = !1,
          activities: i,
          status: s,
          applicationStream: l,
          voiceStatusChannel: o,
          user: d,
          channel: c,
          isHoveringOrFocusing: u,
          quest: _,
        } = e,
        E = a.useMemo(
          () => (0, m.A)({ activities: i, status: s, applicationStream: l, voiceChannel: o }),
          [i, s, l, o],
        ),
        A = a.useMemo(
          () =>
            !(0, M.A)({
              activity: i?.find((e) => {
                let { type: t } = e;
                return t === Q.$pd.CUSTOM_STATUS;
              }),
              user: d,
              channel: c,
            }),
          [i, d, c],
        );
      return t || !E
        ? null
        : (0, r.jsx)(S.A, {
            user: d,
            activities: i,
            applicationStream: l,
            voiceChannel: o,
            animateEmoji: u,
            hideEmoji: A,
            hasQuest: null != _,
            hideTooltip: n,
          });
    }),
    ec = a.memo(function (e) {
      let {
          selected: t = !1,
          colorString: n,
          colorStrings: i,
          colorRoleName: s,
          isOwner: d,
          ownerTooltipText: u,
          lostPermissionTooltipText: _,
          isTyping: E = !1,
          nick: A,
          user: h,
          currentUser: f,
          activities: T,
          applicationStream: m,
          status: S,
          shouldAnimateStatus: N = !1,
          isMobile: C,
          isVR: O,
          premiumSince: R,
          channel: L,
          guildId: y,
          className: v,
          nameplate: M,
          hideClanTag: P = !1,
          hideSubtext: U = !1,
          hideTooltip: w = !1,
          onMouseDown: G,
          onKeyDown: x,
          onClick: k,
          onContextMenu: F,
          onClickPremiumGuildIcon: B,
          "aria-controls": V,
          "aria-expanded": H,
          "aria-posinset": j,
          "aria-setsize": W,
          id: Z,
          tabIndex: J,
          itemProps: ee,
          ref: ei,
        } = e,
        er = h?.id,
        ea = q.Ay.useName(h),
        ec = a.useRef(null),
        eu = ei ?? ec,
        [e_, eE] = a.useState(!1),
        [eA, eh] = a.useState(!1),
        [ef, eI] = a.useState(null),
        { voiceChannel: ep } = (0, g.Ay)({ userId: er, guildId: y }),
        {
          avatarDecorationSrc: eT,
          avatarSrc: em,
          eventHandlers: eg,
        } = (0, X.A)({ userId: er, size: I._3.SIZE_32, animateOnHover: !(t || e_), guildId: y }),
        { onFocus: eS, ...eN } = ee ?? {},
        eC = (0, Y.gn)(y, er, i ?? null),
        [eO, eR] = a.useState(!1);
      a.useEffect(() => {
        t && eR(!1);
      }, [t]);
      let eL = (0, z.YW)(T),
        ey = (0, o.bG)([K.A], () => K.A.getQuestPreviewOverride($.uF.MEMBERS_LIST), []),
        eD = null != ey,
        ev = eD ? ey : eL,
        eb = (0, z.Yl)(eL, m, er),
        eM = (eD || eb) && t && !eO,
        eP = a.useCallback(() => {
          eE(!0);
        }, []),
        eU = a.useCallback(() => {
          eE(!1);
        }, []),
        ew = a.useCallback(() => {
          (eh(!0), eS?.());
        }, [eS]),
        eG = a.useCallback(() => {
          eh(!1);
        }, []),
        ex = a.useCallback((e) => {
          eI(e);
        }, []),
        ek = a.useCallback(
          (e) =>
            null == ev
              ? null
              : (0, r.jsx)(en, {
                  name: A ?? ea,
                  quest: ev,
                  memberListItemRef: eu,
                  applicationStream: m,
                  ...e,
                  closePopout: () => eR(!0),
                }),
          [ev, eu, m, A, ea],
        );
      return null == h
        ? (0, r.jsx)(D, { avatarSize: I._3.SIZE_32, className: et.qf })
        : (0, r.jsx)(p.Y, {
            targetElementRef: eu,
            renderPopout: ek,
            position: "bottom",
            shouldShow: eM,
            nudgeAlignIntoViewport: !1,
            useRawTargetDimensions: !0,
            animation: p.Y.Animation.NONE,
            spacing: -3,
            children: () =>
              (0, r.jsx)(b.A, {
                ref: eu,
                selected: t,
                className: l()(et.Dc, v, { [et.WK]: S === Q.clD.OFFLINE && !t, [et.PJ]: eM }),
                innerClassName: et.Hz,
                onClick: k,
                onKeyDown: x,
                onMouseDown: G,
                onContextMenu: F,
                onMouseEnter: eP,
                onMouseLeave: eU,
                onBlur: eG,
                hovered: e_,
                name:
                  null == _
                    ? (0, r.jsx)("span", {
                        className: et.Xh,
                        children: (0, r.jsx)(el, {
                          colorRoleName: s,
                          colorString: n ?? null,
                          name: A ?? ea,
                          colorStrings: eC,
                          hideClanTag: P,
                          user: h,
                          guildId: y,
                          isHovering: e_,
                        }),
                      })
                    : (0, r.jsx)(c.m, {
                        text: _,
                        children: (0, r.jsx)("span", {
                          className: l()(et.Xh, et.oj),
                          children: (0, r.jsx)(el, {
                            colorRoleName: s,
                            colorString: n ?? null,
                            name: A ?? ea,
                            colorStrings: eC,
                            hideClanTag: P,
                            user: h,
                            guildId: y,
                            isHovering: e_,
                          }),
                        }),
                      }),
                avatar: (0, r.jsx)(eo, {
                  user: h,
                  shouldAnimateStatus: N,
                  activities: T,
                  status: S,
                  eventHandlers: eg,
                  avatarSrc: em,
                  isMobile: C,
                  isVR: O,
                  isTyping: E,
                  avatarDecorationSrc: eT,
                  handleSetTypingRef: ex,
                  typingRef: ef,
                  currentUser: f,
                }),
                nameplate: M,
                subText: (0, r.jsx)(ed, {
                  hideSubtext: U,
                  activities: T,
                  status: S,
                  applicationStream: m,
                  voiceStatusChannel: ep,
                  user: h,
                  channel: L,
                  isHoveringOrFocusing: e_ || eA,
                  quest: eL,
                  hideTooltip: w,
                }),
                decorators: (0, r.jsx)(es, {
                  user: h,
                  isOwner: d,
                  lostPermissionTooltipText: _,
                  ownerTooltipText: u,
                  premiumSince: R,
                  onClickPremiumGuildIcon: B,
                }),
                "aria-controls": V,
                "aria-expanded": H,
                "aria-setsize": W,
                "aria-posinset": j,
                id: Z,
                tabIndex: J,
                onFocus: ew,
                focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                ...eN,
              }),
          });
    });
}
