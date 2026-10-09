/* Recovered shipped factory. Module 671897.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8360753..8372869
 * Raw property SHA-256: 7c24b4f73f56dac96e3df86f836b5d7d2fb536a0e9f596c64af8f6313ed6ec67
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => en }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(621466),
    d = n(17928),
    c = n(661531),
    u = n(876230),
    _ = n(717421),
    E = n(358618),
    A = n(793920),
    h = n(983851),
    f = n(299163),
    I = n(86147),
    p = n(729475),
    T = n(261958),
    m = n(32880),
    g = n(922016),
    S = n(980707),
    N = n(477782),
    C = n(365199),
    O = n(268791),
    R = n(834730),
    L = n(315710),
    y = n(297264),
    D = n(775602),
    v = n(174459),
    b = n(683574),
    M = n(61491),
    P = n(113494),
    U = n(782134),
    w = n(417270),
    G = n(939249),
    x = n(866665),
    k = n(660183),
    F = n(862649);
  let B = "-:--",
    V = {
      [u.Q6.PLAYING]: { icon: P.PauseIcon, label: k.intl.string(k.t.ZcgDJX) },
      [u.Q6.PAUSED]: { icon: U.PlayIcon, label: k.intl.string(k.t.RscU7I) },
      [u.Q6.ENDED]: { icon: w.RetryIcon, label: k.intl.string(k.t.hsvh0i) },
    },
    H = { [u.oA.SM]: u.n4.SM, [u.oA.MD]: u.n4.MD, [u.oA.LG]: u.n4.LG },
    j = { [u.n4.SM]: "sm", [u.n4.MD]: "md", [u.n4.LG]: "lg" },
    W = { [u.n4.SM]: "24px", [u.n4.MD]: "24px", [u.n4.LG]: "32px" };
  function Y(e) {
    let { compact: t = !1 } = e,
      [n, a] = r.useState(null),
      [l, o] = r.useState(null),
      [d, c] = r.useState(!1),
      { videoRef: u } = (0, b.X$)();
    r.useEffect(() => {
      let e = u.current;
      function t() {
        null != e && (a(e.currentTime), o(e.duration));
      }
      if (null != e)
        return (
          e.addEventListener("timeupdate", t),
          e.addEventListener("loadedmetadata", t),
          e.addEventListener("durationchange", t),
          () => {
            (e.removeEventListener("timeupdate", t),
              e.removeEventListener("loadedmetadata", t),
              e.removeEventListener("durationchange", t));
          }
        );
    }, [u]);
    let _ = Number.isFinite(n) && Number.isFinite(l) ? Math.max(0, l - n) : null,
      E = d ? (null != _ ? `-${(0, M.rB)(_)}` : B) : Number.isFinite(n) ? (0, M.rB)(n) : B,
      A = Number.isFinite(l) ? (0, M.rB)(l) : B;
    return (0, i.jsxs)(G.D, {
      className: s()(F.d$, F.jk),
      "data-testid": "discord-web-video-player-duration",
      onClick: () => c((e) => !e),
      children: [
        (0, i.jsx)(R.E, {
          variant: "text-sm/normal",
          className: F.Ue,
          tabularNumbers: !0,
          children: E,
        }),
        !t &&
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(R.E, { variant: "text-sm/normal", className: F.zO, children: "/" }),
              (0, i.jsx)(R.E, {
                variant: "text-sm/normal",
                className: F.Ue,
                tabularNumbers: !0,
                children: A,
              }),
            ],
          }),
      ],
    });
  }
  function K(e) {
    let {
        iconComponent: t,
        animationTime: n,
        visible: r,
        ariaLabel: a,
        active: o,
        disabled: d,
        overlay: _,
        tooltipLabel: E,
        tooltipDelayMs: A = 1500,
        shortcut: h,
        onClick: f,
        buttonSize: I = u.n4.MD,
        "data-testid": p,
        clickableProps: T,
        ref: m,
      } = e,
      g = "" !== (h ?? "").trim();
    return (0, i.jsx)(x.m, {
      text: r ? E : void 0,
      keyboardShortcut: g ? h : void 0,
      ariaHidden: !0,
      delay: A,
      children: (0, i.jsx)(G.D, {
        onClick: !0 === d ? void 0 : f,
        className: s()(F.K5, { [F.Iy]: d }),
        "aria-label": a,
        "aria-keyshortcuts": g ? h : void 0,
        "aria-disabled": d,
        "data-testid": p,
        innerRef: m,
        ...T,
        children: (0, i.jsx)(l.animated.div, {
          className: F.K5,
          style: {
            opacity: (0, l.to)(
              [n.to({ range: [0, 1], output: [0, 1] })],
              (e) => `${r ? e : Math.pow(e, 8)}`,
            ),
            height: W[I],
          },
          children:
            null != _
              ? (0, i.jsxs)("span", {
                  className: F.bT,
                  children: [
                    (0, i.jsx)(t, {
                      size: j[I],
                      color: !0 !== d ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                      className: s()(F.jk, { [F.x2]: o, [F.Wr]: !d }),
                    }),
                    _,
                  ],
                })
              : (0, i.jsx)(t, {
                  size: j[I],
                  color: !0 !== d ? c.A.colors.WHITE : c.A.colors.TEXT_MUTED,
                  className: s()(F.jk, { [F.x2]: o, [F.Wr]: !d }),
                }),
        }),
      }),
    });
  }
  var $ = n(91034),
    z = n(710434),
    X = n(634156),
    Z = n(652215),
    q = n(871273);
  let Q = { [u.oA.SM]: 48, [u.oA.MD]: 100, [u.oA.LG]: 100 },
    J = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    ee = J[0],
    et = J[J.length - 1];
  function en(e) {
    let {
        playerState: t,
        animSpring: n,
        visible: a,
        seekForwardEnabled: g,
        hideCaptionBtn: S = !1,
        hideTranscriptBtn: N = !1,
        hideSkipButtons: C = !1,
        hideFullScreenBtn: O = !1,
        hidePlaybackSpeedBtn: R = !1,
        size: L,
        downloadUrl: y,
        downloadContentType: M,
        extraButtons: P,
        autoFocus: U = !1,
        keyDownHandlerRef: w,
        volume: G,
        muted: x,
        transcriptEnabled: B,
        captionEnabled: j,
        handlePlaybackBtnClick: W,
        handleTranscriptBtnClick: J,
        handleCaptionBtnClick: ee,
        handleFullScreenBtnClick: et,
        handleSeekBackBtnClick: en,
        handleSeekForwardBtnClick: er,
        autoHideVolumeSlider: es = !1,
        compactTimeDisplay: el = !1,
        handleControlBarPendingInteraction: eo,
        onVolumeChange: ed,
        onMutedChange: ec,
        onVolumeExpandedChange: eu,
      } = e,
      e_ = (0, d.bG)([D.Ay], () => D.Ay.useReducedMotion),
      eE = (0, d.bG)([D.Ay], () => D.Ay.keyboardModeEnabled),
      { isFullscreen: eA, videoRef: eh } = (0, b.X$)(),
      [ef, eI] = r.useState(x ? 0 : G),
      [ep, eT] = r.useState(!1),
      [em, eg] = r.useState(!1),
      [{ volumeAnimSpring: eS }, eN] = (0, _.z)(() => ({
        from: { volumeAnimSpring: 0 },
        config: { tension: 100, friction: 3, clamp: !0 },
      })),
      eC = r.useRef(null),
      [eO, eR] = r.useState(1),
      [eL, ey] = r.useState(G),
      [eD, ev] = r.useState(x);
    (G !== eL || x !== eD) && (ey(G), ev(x), eI(x ? 0 : G));
    let eb = r.useCallback(
        (e) => {
          (eR(e), null != eh.current && (eh.current.playbackRate = e));
        },
        [eh],
      ),
      eM = r.useCallback(() => {
        if (null == y) return;
        let e = M?.split("/");
        (v.default.track(Z.HAw.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
          attachment_type: e?.[0],
          attachment_subtype: e?.[1],
        }),
          window.open(y, "_blank"));
      }, [y, M]),
      eP = r.useCallback(
        (e) => {
          null != eh.current &&
            (e !== eh.current.volume && (eh.current.volume = e), e !== ef && eI(e));
        },
        [eh, ef],
      ),
      eU = r.useCallback(() => {
        if (null != eh.current)
          if (0 === ef) {
            let e = 0 === G ? 0.3 : G;
            (eP(e), ec(!1), ed(e));
          } else (ed(ef), eP(0), ec(!0));
      }, [eh, ef, eP, G, ec, ed]);
    function ew() {
      (eT(!0), eu(!0));
    }
    function eG() {
      (eT(!1), eu(!1));
    }
    let ex = r.useCallback(
      (e) => {
        if (!(e.metaKey || ((0, o.vq)(e.target) && (0, o.Cw)(e.target))))
          switch (e.key) {
            case u.TJ.PLAYBACK:
              (e.stopPropagation(), W());
              break;
            case u.TJ.SPACE:
              (e.stopPropagation(), eE || (e.preventDefault(), W()));
              break;
            case u.TJ.SEEK_BACK:
            case u.TJ.SEEK_BACK_ALT:
              (e.stopPropagation(), en());
              break;
            case u.TJ.SEEK_FORWARD:
            case u.TJ.SEEK_FORWARD_ALT:
              (e.stopPropagation(), er());
              break;
            case u.TJ.CAPTION:
              (e.stopPropagation(), S || ee());
              break;
            case u.TJ.FULLSCREEN:
              (e.stopPropagation(), O || et());
              break;
            case u.TJ.MUTE:
              (e.stopPropagation(), eU());
          }
      },
      [ee, et, W, en, er, eU, S, O, eE],
    );
    (r.useEffect(() => {
      U && null != eC.current && eC.current.focus();
    }, [U]),
      r.useEffect(
        () => (
          null != w && (w.current = ex),
          () => {
            null != w && (w.current = null);
          }
        ),
        [ex, w],
      ),
      r.useEffect(
        () => (
          eN({ volumeAnimSpring: !es || em || ep ? 1 : 0, immediate: e_ }),
          () => {
            eS.stop();
          }
        ),
        [es, em, ep, eN, e_, eS],
      ));
    let ek = 0 === ef ? E._ : ef < 0.5 ? A.S : h.H,
      eF = k.intl.string(0 === ef ? k.t.YqAjXy : k.t.w4m945),
      { icon: eB, label: eV } = V[t];
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)("div", {
          className: F.X3,
          children: [
            (0, i.jsx)(K, {
              iconComponent: eB,
              animationTime: n,
              visible: a,
              ariaLabel: eV,
              tooltipLabel: eV,
              shortcut: u.TJ.PLAYBACK,
              onClick: W,
              ref: eC,
              buttonSize: H[L],
              "data-testid": "discord-web-video-player-play-pause-btn",
            }),
            !C &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(K, {
                    iconComponent: z.q,
                    animationTime: n,
                    visible: a,
                    onClick: en,
                    ariaLabel: k.intl.string(q.default["dRVF+Z"]),
                    tooltipLabel: k.intl.string(q.default["dRVF+Z"]),
                    shortcut: u.TJ.SEEK_BACK,
                    buttonSize: H[L],
                    "data-testid": "discord-web-video-player-seek-backward-btn",
                  }),
                  (0, i.jsx)(K, {
                    iconComponent: X.i,
                    animationTime: n,
                    visible: a,
                    onClick: er,
                    disabled: !g,
                    ariaLabel: g
                      ? k.intl.string(q.default.yV2FLL)
                      : k.intl.string(q.default.YWbiPw),
                    tooltipLabel: g
                      ? k.intl.string(q.default.yV2FLL)
                      : k.intl.string(q.default.YWbiPw),
                    tooltipDelayMs: 1500 * !!g,
                    shortcut: u.TJ.SEEK_FORWARD,
                    buttonSize: H[L],
                    "data-testid": "discord-web-video-player-seek-forward-btn",
                  }),
                ],
              }),
          ],
        }),
        (0, i.jsxs)(l.animated.div, {
          className: s()(F.X3, F.L1),
          style: {
            opacity: (0, l.to)(
              [n.to({ range: [0, 1], output: [0, 1] })],
              (e) => `${a ? e : Math.pow(e, 8)}`,
            ),
          },
          children: [
            (0, i.jsxs)("div", {
              onMouseEnter: ew,
              onMouseLeave: eG,
              onFocus: ew,
              onBlur: eG,
              className: F.RD,
              "data-testid": "discord-web-video-player-volume-control",
              children: [
                (0, i.jsx)(K, {
                  iconComponent: ek,
                  animationTime: n,
                  visible: a,
                  onClick: eU,
                  ariaLabel: eF,
                  tooltipLabel: eF,
                  shortcut: u.TJ.MUTE,
                  buttonSize: H[L],
                  "data-testid": "discord-web-video-player-volume-btn",
                }),
                (0, i.jsx)(l.animated.div, {
                  className: F.MQ,
                  "data-testid": "discord-web-video-player-volume-slider",
                  style: {
                    opacity: (0, l.to)(
                      [eS.to({ range: [0, 1], output: [0, 1] })],
                      (e) => `${a ? e : Math.pow(e, 8)}`,
                    ),
                    width: (0, l.to)(
                      [eS.to({ range: [0, 1], output: [0, Q[L]] })],
                      (e) => `${e}px`,
                    ),
                  },
                  children: (0, i.jsx)(f.A, {
                    mini: !0,
                    value: ef,
                    keyboardStep: 0.1,
                    minValue: 0,
                    maxValue: 1,
                    onValueChange: function (e) {
                      (eP(e),
                        ed(e),
                        em && (eg(!1), eo(!1)),
                        x && e > 0 ? ec(!1) : x || 0 !== e || ec(!0));
                    },
                    asValueChanges: function (e) {
                      (eP(e), em || (eg(!0), eo(!0)));
                    },
                    fillStyles: { backgroundColor: c.A.colors.WHITE.css },
                    orientation: "horizontal",
                    "aria-label": k.intl.string(q.default.XiLvuG),
                    getAriaValueText: (e) =>
                      k.intl.formatToPlainString(q.default["5L6uDs"], {
                        percent: Math.round(100 * e),
                      }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(Y, { compact: el }),
          ],
        }),
        (0, i.jsxs)("div", {
          className: s()(F.X3, F.ST),
          children: [
            (0, i.jsx)(ei, {
              canCollapse: null != P && P.length > 0,
              buttons: (function (e) {
                let {
                    hideTranscriptBtn: t = !1,
                    hideCaptionBtn: n = !1,
                    transcriptEnabled: i,
                    captionEnabled: r,
                    playerState: a,
                    handleTranscriptBtnClick: s,
                    handleCaptionBtnClick: l,
                    downloadUrl: o,
                    handleDownloadButtonClick: d,
                    extraButtons: c,
                  } = e,
                  _ = [];
                return (
                  t ||
                    _.push({
                      id: "transcript",
                      iconComponent: T.u,
                      label: k.intl.string(q.default["6EjGUv"]),
                      onClick: s,
                      active: i && a !== u.Q6.ENDED,
                      disabled: a === u.Q6.ENDED,
                      "data-testid": "discord-web-video-player-transcript-btn",
                    }),
                  n ||
                    _.push({
                      id: "caption",
                      iconComponent: $.I,
                      label: k.intl.string(q.default["0DbPcL"]),
                      onClick: l,
                      active: r,
                      shortcut: u.TJ.CAPTION,
                      "data-testid": "discord-web-video-player-captions-btn",
                    }),
                  null != o &&
                    _.push({
                      id: "download",
                      iconComponent: m.DownloadIcon,
                      label: k.intl.string(k.t["1WjMbC"]),
                      onClick: d,
                      "data-testid": "discord-web-video-player-download-btn",
                    }),
                  null != c && _.push(...c),
                  _
                );
              })({
                hideTranscriptBtn: N,
                hideCaptionBtn: S,
                transcriptEnabled: B,
                captionEnabled: j,
                playerState: t,
                handleTranscriptBtnClick: J,
                handleCaptionBtnClick: ee,
                downloadUrl: y,
                handleDownloadButtonClick: eM,
                extraButtons: P,
              }),
              animSpring: n,
              visible: a,
              size: L,
            }),
            !R &&
              (0, i.jsx)(ea, {
                playbackRate: eO,
                onPlaybackRateChange: eb,
                animSpring: n,
                visible: a,
                size: L,
                handleControlBarPendingInteraction: eo,
              }),
            !O &&
              (0, i.jsx)(K, {
                iconComponent: eA ? I.z : p.T,
                animationTime: n,
                visible: a,
                onClick: et,
                ariaLabel: k.intl.string(q.default.z9Cnzv),
                tooltipLabel: k.intl.string(q.default.z9Cnzv),
                shortcut: u.TJ.FULLSCREEN,
                buttonSize: H[L],
                "data-testid": "discord-web-video-player-fullscreen-btn",
              }),
          ],
        }),
      ],
    });
  }
  function ei(e) {
    let { buttons: t, canCollapse: n, animSpring: r, visible: a, size: s } = e;
    return 0 === t.length
      ? null
      : !n || t.length <= 1
        ? (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
              (0, i.jsx)(
                K,
                {
                  iconComponent: e.iconComponent,
                  animationTime: r,
                  visible: a,
                  onClick: e.onClick,
                  active: e.active,
                  disabled: e.disabled,
                  ariaLabel: e.label,
                  tooltipLabel: e.label,
                  tooltipDelayMs: e.tooltipDelayMs,
                  shortcut: e.shortcut,
                  buttonSize: H[s],
                  "data-testid": e["data-testid"],
                },
                e.id,
              ),
            ),
          })
        : (0, i.jsx)(er, { buttons: t, animSpring: r, visible: a, size: s });
  }
  function er(e) {
    let { buttons: t, animSpring: n, visible: a, size: s } = e,
      l = r.useRef(null),
      o = k.intl.string(k.t.PdRCRg),
      { activeLayer: d } = (0, b.X$)();
    return (0, i.jsx)(g.Y, {
      targetElementRef: l,
      position: "top",
      align: "right",
      layerContext: d,
      renderPopout: (e) => {
        let { closePopout: n } = e;
        return (0, i.jsx)(S.W, {
          navId: "video-player-overflow",
          "aria-label": o,
          onClose: n,
          onSelect: n,
          children: t.map((e) => {
            let t = { type: "icon", icon: e.iconComponent };
            return null != e.active
              ? (0, i.jsx)(
                  N.sL,
                  {
                    id: e.id,
                    label: e.label,
                    checked: e.active,
                    disabled: e.disabled,
                    leadingAccessory: t,
                    action: e.onClick,
                  },
                  e.id,
                )
              : (0, i.jsx)(
                  N.Dr,
                  {
                    id: e.id,
                    label: e.label,
                    disabled: e.disabled,
                    shortcut: e.shortcut,
                    leadingAccessory: t,
                    action: e.onClick,
                  },
                  e.id,
                );
          }),
        });
      },
      children: (e) =>
        (0, i.jsx)(K, {
          ref: l,
          iconComponent: C.MoreHorizontalIcon,
          animationTime: n,
          visible: a,
          ariaLabel: o,
          tooltipLabel: o,
          buttonSize: H[s],
          clickableProps: e,
          "data-testid": "discord-web-video-player-overflow-menu-button",
        }),
    });
  }
  function ea(e) {
    let {
        playbackRate: t,
        onPlaybackRateChange: n,
        animSpring: a,
        visible: s,
        size: l,
        handleControlBarPendingInteraction: o,
      } = e,
      d = r.useRef(null),
      c = k.intl.string(q.default.ZwPhbB),
      { activeLayer: u } = (0, b.X$)();
    return (0, i.jsx)(g.Y, {
      targetElementRef: d,
      layerContext: u,
      position: "top",
      align: "right",
      onRequestOpen: () => o(!0),
      onRequestClose: () => {
        (o(!1), d.current?.focus());
      },
      renderPopout: () => (0, i.jsx)(es, { playbackRate: t, onPlaybackRateChange: n, label: c }),
      children: (e) => {
        let n = 1 !== t;
        return (0, i.jsx)(K, {
          ref: d,
          iconComponent: O.$,
          animationTime: a,
          visible: s,
          active: n,
          overlay: n
            ? (0, i.jsx)(R.E, {
                "aria-hidden": !0,
                variant: "text-xxs/bold",
                color: "none",
                className: F.IG,
                tabularNumbers: !0,
                children: `${t}x`,
              })
            : void 0,
          ariaLabel: c,
          tooltipLabel: c,
          buttonSize: H[l],
          clickableProps: { ...e, "aria-haspopup": "dialog" },
          "data-testid": "discord-web-video-player-playback-speed-btn",
        });
      },
    });
  }
  function es(e) {
    let { playbackRate: t, onPlaybackRateChange: n, label: a } = e,
      s = r.useRef(null);
    return (
      (0, L.tj)(s),
      (0, i.jsxs)("div", {
        ref: s,
        className: F.qp,
        role: "dialog",
        "aria-label": a,
        "data-testid": "discord-web-video-player-playback-speed-popout",
        children: [
          (0, i.jsx)(y.D, {
            variant: "heading-md/semibold",
            color: "text-default",
            className: F.xl,
            children: a,
          }),
          (0, i.jsx)(f.A, {
            value: t,
            initialValue: 1,
            minValue: ee,
            maxValue: et,
            markers: J,
            stickToMarkers: !0,
            defaultValue: 1,
            onValueChange: n,
            asValueChanges: n,
            onMarkerRender: (e) => `${e}x`,
            orientation: "horizontal",
            "aria-label": a,
            getAriaValueText: (e) => `${e}x`,
          }),
        ],
      })
    );
  }
}
