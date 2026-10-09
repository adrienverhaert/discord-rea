/* Recovered shipped factory. Module 817232.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7586510..7594539
 * Raw property SHA-256: ca4e95b7e8908ad5ce2dba47fd6b617b3ec7706b776608ebbbb0391e797930b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => ea, dT: () => ee, PI: () => et });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(657335),
    o = n(837381),
    d = n(17928),
    c = n(451988),
    u = n(661531),
    _ = n(866665),
    E = n(939249),
    A = n(983851),
    h = n(27232),
    f = n(505930),
    I = n(782134),
    p = n(194261),
    T = n(307301),
    m = n(834730),
    g = n(890856),
    S = n(565645),
    N = n(775602),
    C = n(688810),
    O = n(21161),
    R = n(850992),
    L = n(319993),
    y = n(435558),
    D = n(132500),
    v = n(104142),
    b = n(407781),
    M = n(287809),
    P = n(194486),
    U = n(178226);
  function w(e) {
    let { sound: t, containerDimensions: n, ref: a } = e,
      s = (0, d.bG)([M.default], () => M.default.getCurrentUser()),
      l = (0, d.bG)([N.Ay], () => N.Ay.useReducedMotion),
      [o, c] = r.useState([]),
      u = o.length < 50,
      _ = t?.emojiId != null || t?.emojiName != null,
      E = r.useCallback(() => {
        if (!l && u && _ && null != s) {
          let e = (0, v.Br)({ id: t.emojiId, name: t.emojiName ?? "", animated: !1 }),
            n = null != t.emojiId,
            i = P.B.PREMIUM,
            r = (0, y.random)(v.Bf[i].length, !1),
            a = {
              id: (0, D.A)(),
              animationId: r,
              animationType: i,
              shouldResize: n,
              url: e,
              userId: s.id,
            };
          c((e) => [...e, a]);
        }
      }, [l, u, _, s, t]);
    r.useImperativeHandle(a, () => ({ addAnimation: E }));
    let A = r.useCallback((e) => {
      c((t) => {
        let n = [...t],
          i = n.findIndex((t) => t.id === e);
        return (n.splice(i, 1), n);
      });
    }, []);
    return l || !_
      ? null
      : (0, i.jsx)("div", {
          className: U.z,
          style: { width: n.width, height: n.height },
          children: o.map((e) =>
            (0, i.jsx)(b.A, { containerDimensions: n, effect: e, onComplete: A }, e.id),
          ),
        });
  }
  var G = n(885386),
    x = n(967198),
    k = n(174459),
    F = n(796774),
    B = n(209932),
    V = n(807348),
    H = n(813564),
    j = n(792348),
    W = n(708793),
    Y = n(980504),
    K = n(84566);
  function $(e) {
    let { targetSoundId: t, edge: n, onDrop: r } = e,
      [{ isOver: a, canDrop: l }, o] = (0, W.H)({
        accept: Y.Tj,
        drop: (e) => {
          ((0, F.Lk)(e.soundId, t), r?.());
        },
        collect: (e) => ({ isOver: e.isOver(), canDrop: e.canDrop() }),
      });
    return (0, i.jsx)("div", {
      ref: (e) => {
        o(e);
      },
      "aria-hidden": !0,
      className: s()(K.target, K[n], { [K.autoPointerEvents]: l, [K.dragOver]: a && l }),
    });
  }
  var z = n(496502),
    X = n(652215),
    Z = n(536283),
    q = n(257645),
    Q = n(660183),
    J = n(948611);
  function ee(e) {
    let {
      disabled: t = !1,
      onClick: n,
      text: r,
      children: a,
      tooltipPosition: l = "top",
      ref: o,
    } = e;
    return (0, i.jsx)(_.m, {
      text: r,
      position: l,
      children: (0, i.jsx)(E.D, {
        innerRef: o,
        "aria-label": r,
        className: s()(J.zr, { [J.$9]: t }),
        onClick: n,
        children: a,
      }),
    });
  }
  function et(e) {
    let { sound: t, previewSound: n, disabled: r = !1, tooltipPosition: a = "top" } = e,
      s = (0, d.bG)([x.A], () => x.A.getGuildId());
    return (0, i.jsx)(ee, {
      tooltipPosition: a,
      disabled: r,
      onClick: function (e) {
        (k.default.track(X.HAw.EXPRESSION_PICKER_SOUNDBOARD_SOUND_PREVIEWED, {
          sound_id: t.soundId,
          sound_name: t.name,
          sound_guild_id: t.guildId,
          location_guild_id: s,
        }),
          e.stopPropagation(),
          e.currentTarget.blur(),
          n());
      },
      text: Q.intl.formatToPlainString(Q.t["/8fYO5"], {
        emojiName: t.emojiName,
        soundName: t.name,
      }),
      children: (0, i.jsx)(A.H, { size: "md", color: "currentColor", className: J.Wo }),
    });
  }
  function en(e) {
    let { sound: t, disabled: n = !1 } = e,
      { analyticsLocations: a } = (0, C.Ay)(),
      l = (0, d.bG)([B.A], () => B.A.isFavoriteSound(t.soundId), [t.soundId]),
      o = r.useCallback(
        (e) => {
          (e.stopPropagation(),
            e.currentTarget.blur(),
            l
              ? (0, F.eS)(t.soundId)
              : ((0, H.Ni)({ sound: t, location: { ...a, object: X.ZSU.SOUNDBOARD_SOUND } }),
                (0, F.Rp)(t.soundId)));
        },
        [l, t, a],
      );
    return (0, i.jsx)(ee, {
      disabled: n,
      onClick: o,
      text: Q.intl.formatToPlainString(l ? Q.t.lQLsjc : Q.t.Y5DOs4, {
        emojiName: t.emojiName,
        soundName: t.name,
      }),
      children: l
        ? (0, i.jsx)(h.StarIcon, {
            size: "xs",
            className: s()(J.Wo, J.gj),
            color: u.A.unsafe_rawColors.PLATFORM_GOLD.css,
          })
        : (0, i.jsx)(f.y, { size: "xs", color: "currentColor", className: J.Wo }),
    });
  }
  function ei(e) {
    var t, n, a;
    let u,
      {
        sound: E,
        channel: A,
        containerClassName: h,
        className: f,
        focused: C,
        forceSecondaryActions: y = !1,
        interactive: D = !0,
        enableSecondaryActions: v = !1,
        suppressPlaySound: b,
        onMouseEnter: P,
        onSelectItem: U,
        analyticsLocations: x,
        buttonOverlay: k = V.If.PLAY,
        showLockForDisabledSound: F = !0,
        inNitroLockedSection: B = !1,
        isAnimated: W = !0,
        isPlayingSoundOverride: K,
        isSoundmoji: X,
        soundmojiVisualEffectRef: ee,
        tooltipOverride: ei,
        enableFavoritesDragAndDrop: ea = !1,
        isLastFavoriteSound: es = !1,
        onFavoriteSoundDrop: el,
        disableActiveStyles: eo = !1,
        ref: ed,
        ...ec
      } = e,
      { name: eu, emojiId: e_, emojiName: eE } = E,
      eA = (0, d.bG)([M.default], () => M.default.getCurrentUser()),
      eh = (0, z.v)(E, A?.guild_id),
      {
        playSoundboardSound: ef,
        previewSound: eI,
        isPlayingSound: ep,
      } = (0, j.A)(
        E,
        A?.id ?? null,
        (X ? G.HO.getSetting() : G.dG.getSetting()?.volume) ?? 100,
        !X && A?.isVocal() ? q.a.VOICE : q.a.DEFAULT,
      ),
      { createMultipleConfettiAt: eT } = r.useContext(O.x),
      em = r.useRef(null),
      eg =
        ((t = E.soundId),
        (n = em.current),
        r.useMemo(() => {
          if (null == n || "1" !== t) return { x: 0, y: 0 };
          let e = n.getBoundingClientRect();
          return { x: e.left + e.width / 2, y: e.top + e.height / 2 };
        }, [n, t])),
      eS = (0, d.bG)([N.Ay], () => N.Ay.useReducedMotion),
      eN = r.useRef(0.01),
      eC = r.useRef(new c.IX()),
      eO = "1" === E.soundId,
      eR = `sound-${E.soundId}`,
      eL = (0, o.rm)(eR),
      [{ isDragging: ey }, eD] = (0, l.i)({
        type: Y.Tj,
        item: () => ({ soundId: E.soundId }),
        canDrag: () => ea,
        collect: (e) => ({ isDragging: e.isDragging() }),
      }),
      ev = r.useCallback(
        (e) => {
          (eD(e), "function" == typeof ed ? ed(e) : null != ed && (ed.current = e));
        },
        [eD, ed],
      ),
      eb = null != e_ || null != eE,
      eM = !(0, H.Ir)(eA, E, A) && !X,
      eP = y || (v && !eM),
      eU = R.LW.useStore().bottomPosition ?? 0,
      ew = em.current?.getBoundingClientRect().bottom ?? 0,
      [eG, ex] = r.useState(!1),
      ek = r.useCallback(() => {
        ex(!0);
      }, []),
      eF = r.useCallback(() => {
        ex(!1);
      }, []),
      eB = eM && F;
    function eV(e) {
      (eO &&
        !eS &&
        ((eN.current = Math.min(eN.current + 0.01, 0.1)),
        Math.random() < eN.current && eT(eg.x, eg.y, void 0, void 0, { sprite: Z.dR })),
      null != U)
        ? U(e)
        : b || ef(x);
    }
    let eH = (0, i.jsx)("div", {
      onMouseEnter: ek,
      onMouseLeave: eF,
      children: et({ sound: E, previewSound: eI, disabled: eM && !y }),
    });
    function ej(e) {
      return b || eM
        ? eB
          ? (0, i.jsx)(p.LockIcon, {
              size: "xs",
              color: "currentColor",
              className: s()(J.C4, J.hz, e, { [J.hn]: eb }),
            })
          : null
        : (0, i.jsx)(I.PlayIcon, { size: "xs", color: "currentColor", className: s()(J.C4, e) });
    }
    let eW = (0, i.jsx)("div", {
      onMouseEnter: ek,
      onMouseLeave: eF,
      children: (0, i.jsx)(en, { sound: E, disabled: !D && !y }),
    });
    r.useEffect(() => {
      let e = eC.current;
      return (
        eO &&
          e.start(1e3, () => {
            eN.current = Math.max(eN.current - 0.01, 0.01);
          }),
        () => e.stop()
      );
    }, [eO]);
    let eY =
      ((a = em.current),
      null == (u = a?.parentElement?.getBoundingClientRect())
        ? { width: 0, height: 0 }
        : { width: u.width, height: u.height });
    return (0, i.jsxs)("li", {
      ref: ev,
      className: s()(J.H, h, { [J.cB]: ea && ey }),
      onMouseEnter: P,
      children: [
        ea &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)($, { edge: "before", targetSoundId: E.soundId, onDrop: el }),
              es && (0, i.jsx)($, { edge: "after", targetSoundId: null, onDrop: el }),
            ],
          }),
        (0, i.jsx)(_.m, {
          "aria-label": null != ei ? E.name : void 0,
          __unsupportedReactNodeAsText: ei ?? E.name,
          position: ew + 50 > eU ? "top" : "bottom",
          shouldShow: !eG,
          delay: 500,
          children: (0, i.jsxs)(g.s, {
            ...ec,
            buttonProps: { ...eL, id: eR, role: "button" },
            "aria-label": Q.intl.formatToPlainString(Q.t.tuMUJ2, {
              emojiName: E.emojiName,
              soundName: E.name,
            }),
            className: s()(
              J.aG,
              {
                [J.CS]: W,
                [J.he]: K ?? ep,
                [J.ju]: b,
                [J.wT]: D,
                [J.$9]: !D && !y,
                [J.Au]: eM && !y,
                [J.fx]: !D && y,
                [J.in]: D && C,
                [J.bo]: eo,
              },
              f,
            ),
            onClick: (e) => {
              eV?.(e);
            },
            onContextMenu: v && !eM ? eh : void 0,
            children: [
              (0, i.jsxs)("div", {
                className: s()(J.KM, { [J.hn]: eb }),
                "aria-hidden": !0,
                ref: em,
                children: [
                  eb && (0, i.jsx)(S.A, { emojiId: e_, emojiName: eE, className: J.Zg }),
                  (0, i.jsx)(m.E, {
                    variant: "text-xs/medium",
                    color: D ? void 0 : "text-muted",
                    className: s()(J.TW, { [J.hn]: eb }),
                    children: eu,
                  }),
                ],
              }),
              (function () {
                switch (k) {
                  case V.If.ADD:
                    return (0, i.jsxs)("div", {
                      className: J.ec,
                      children: [
                        (0, i.jsx)("div", { className: J.LQ }),
                        (0, i.jsxs)("div", {
                          className: J.O5,
                          children: [
                            eH,
                            (0, i.jsxs)("div", {
                              className: J.c9,
                              children: [
                                (0, i.jsx)(T.j, {
                                  size: "md",
                                  color: "currentColor",
                                  className: J.y_,
                                }),
                                (0, i.jsx)(m.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: Q.intl.string(Q.t.QqqXLY),
                                }),
                              ],
                            }),
                            eP && eW,
                          ],
                        }),
                      ],
                    });
                  case V.If.NONE:
                    return null;
                  case V.If.PLAY:
                  case V.If.SOUNDMOJI:
                  default:
                    return eB && !B
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("div", { className: J.LQ }),
                            ej(J.B3),
                            (0, i.jsx)("div", {
                              className: J.d7,
                              children: (0, i.jsxs)("div", {
                                className: J.O5,
                                children: [eP && eH, eP && eW],
                              }),
                            }),
                          ],
                        })
                      : (0, i.jsxs)("div", {
                          className: J.d7,
                          children: [
                            (0, i.jsx)("div", { className: s()({ [J.LQ]: !b }) }),
                            (0, i.jsx)("div", {
                              className: J.O5,
                              children:
                                k === V.If.SOUNDMOJI
                                  ? (0, i.jsx)(L.Ay, {
                                      sound: E,
                                      channel: A,
                                      setTooltipShowing: ex,
                                      renderSoundButton: er,
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                      children: [eP && eH, ej(), eP && eW],
                                    }),
                            }),
                          ],
                        });
                }
              })(),
            ],
          }),
        }),
        !E.available &&
          (0, i.jsx)(_.m, {
            text: Q.intl.string(Q.t.MDOXJR),
            shouldShow: !eG,
            children: (0, i.jsx)("div", {
              className: J.ET,
              children: !B && (0, i.jsxs)("div", { className: J.ld, children: [eH, eW] }),
            }),
          }),
        !0 === X && (0, i.jsx)(w, { sound: E, containerDimensions: eY, ref: ee }),
      ],
    });
  }
  function er(e) {
    return (0, i.jsx)(ei, { ...e });
  }
  let ea = ei;
}
