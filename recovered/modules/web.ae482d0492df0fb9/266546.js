/* Recovered shipped factory. Module 266546.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8342623..8360223
 * Raw property SHA-256: e4965417f33c682339e59b24a10b47874fab6df4c9e8e622b101503c27798bfa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { COMPACT_CONTROL_BAR_MAX_WIDTH_PX: () => Y, default: () => $ }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(337836),
    d = n(17928),
    c = n(876230),
    u = n(231723),
    _ = n(717421),
    E = n(939249),
    A = n(289873),
    h = n(782134),
    f = n(113494),
    I = n(834730),
    p = n(964486),
    T = n(770178),
    m = n(765548),
    g = n(775602),
    S = n(475815),
    N = n(718499),
    C = n(23590),
    O = n(683574),
    R = n(671897),
    L = n(906892),
    y = n(565164),
    D = n(275664),
    v = n(408121),
    b = n(984212),
    M = n(246047),
    P = n(739416),
    U = n(931853),
    w = n(90721),
    G = n(920228),
    x = n(953584),
    k = n(338659),
    F = n(838541),
    B = n(660183),
    V = n(862649);
  let H = r.lazy(() =>
      Promise.all([n.e("272223"), n.e("919307")])
        .then(n.bind(n, 410694))
        .then((e) => ({ default: e.VideoStatsOverlay })),
    ),
    j = { tension: 250, friction: 5, clamp: !0 },
    W = { visibility: "hidden" },
    Y = 400,
    K = {
      [c.oA.SM]: {
        barHeightPx: 40,
        footerHorizontalPaddingPx: 12,
        scrimHeightPx: 72,
        controlsGapPx: 12,
        trailingGroupWidthPx: null,
      },
      [c.oA.MD]: {
        barHeightPx: 64,
        footerHorizontalPaddingPx: 20,
        scrimHeightPx: 121,
        controlsGapPx: 16,
        trailingGroupWidthPx: 200,
      },
      [c.oA.LG]: {
        barHeightPx: 72,
        footerHorizontalPaddingPx: 20,
        scrimHeightPx: 121,
        controlsGapPx: 16,
        trailingGroupWidthPx: 200,
      },
    };
  function $(e) {
    let {
        parentTransitionState: t,
        autoplay: n = !1,
        orientation: a = "landscape",
        videoUrlOverride: $,
        alt: z,
        src: X,
        poster: Z,
        initialActive: q = !0,
        initialTimeSec: Q = 0,
        onProgressUpdate: J,
        onEnded: ee,
        onError: et,
        maxSeekableTimeSec: en,
        captionTrackUrl: ei,
        transcriptText: er,
        renderEndScreen: ea,
        renderVideo: es = M.v,
        onPlayerStateChange: el,
        onFullscreenChange: eo,
        onVolumeChange: ed,
        onMutedChange: ec,
        initialVolume: eu = 0.3,
        initialMuted: e_ = !1,
        getInitialVolume: eE,
        getInitialMuted: eA,
        onLoadStart: eh,
        onLoadEnd: ef,
        onFirstFrame: eI,
        onBufferingStart: ep,
        onBufferingEnd: eT,
        onFocusChange: em,
        onVisibilityChange: eg,
        onSeek: eS,
        renderOverlay: eN,
        renderPersistentOverlay: eC,
        transcriptClassName: eO,
        onHlsInstance: eR,
        onClick: eL,
        preload: ey,
        downloadUrl: eD,
        fileSizeBytes: ev,
        downloadContentType: eb,
        extraButtons: eM,
        hideFullScreenBtn: eP = !1,
        hideSkipButtons: eU,
        compactTimeDisplay: ew = !1,
        hidePlaybackSpeedBtn: eG = !1,
        autoSizeControlBar: ex = !1,
        getPlaybackBlockedMessage: ek,
        progressClassName: eF,
        pauseOnLostVisibility: eB = !1,
        persistTimeline: eV = !1,
        persistPlayhead: eH = !0,
        autoFocus: ej = !1,
        autoHideVolumeSlider: eW = !1,
        timelineIndicatorConfig: eY,
        scrubPreviewVttUrl: eK,
        scrubPreviewImageUrl: e$,
        loadingSpinnerPosition: ez = "top-left",
        crossOrigin: eX = "anonymous",
        withVideoHalo: eZ = !1,
        objectFit: eq = "contain",
        minWidth: eQ = 240,
        minHeight: eJ = 180,
        muxContentMetadata: e0,
        awaitMuxReady: e1 = !1,
        playerRef: e2,
        ref: e3,
      } = e,
      e6 = $ ?? X,
      e5 = ek ?? U.u,
      { focused: e4, focusedChanged: e7 } = (0, P.A7)(),
      { visible: e8, visibleChanged: e9, targetRef: te } = (0, P.O7)(),
      [tt, tn] = r.useState(n ? c.Q6.PLAYING : c.Q6.PAUSED),
      [ti, tr] = r.useState(!1),
      [ta, ts] = r.useState(!1),
      [tl, to] = r.useState(0),
      [td, tc] = r.useState(null),
      tu = r.useCallback((e) => {
        (tc(null), to(e));
      }, []),
      t_ = r.useRef(null),
      [tE, tA] = r.useState(!1),
      th = r.useRef(null),
      [tf, tI] = r.useState(c.h$.LOADING),
      tp = r.useRef(!1),
      tT = r.useRef(null),
      [tm, tg] = r.useState([]),
      [tS, tN] = r.useState(!1),
      tC = r.useRef(!1),
      tO = r.useRef(!1),
      tR = r.useRef(!1),
      tL = r.useRef(!1),
      [ty, tD] = r.useState(!0),
      tv = r.useRef(!0),
      tb = r.useRef(null),
      tM = r.useRef(null),
      [tP, tU] = r.useState(n || q),
      [tw, tG] = r.useState(eu),
      [tx, tk] = r.useState(e_),
      [tF, tB] = r.useState(!eW),
      [tV, tH] = r.useState(!1),
      [tj, tW] = r.useState(!1),
      [tY, tK] = r.useState(!1),
      t$ = (0, d.bG)([g.Ay], () => g.Ay.useReducedMotion),
      tz = (0, r.useRef)(null),
      tX = (0, r.useRef)(null),
      tZ = (0, r.useRef)(null),
      tq = (0, r.useRef)(null),
      tQ = r.useRef(!0),
      [tJ, t0] = r.useState(null),
      t1 = r.useRef(null),
      t2 = (0, y.z5)(tP, t1, eK, e$),
      t3 = r.useCallback(() => tz.current?.currentTime ?? null, []),
      t6 = r.useMemo(
        () => ({
          get current() {
            return (0, M.c)(tz.current);
          },
        }),
        [],
      );
    (0, w.A)({
      videoRef: t6,
      canvasRef: tZ,
      enabled: tP && eZ && !t$,
      canvasWidth: 32,
      canvasHeight: 18,
    });
    let {
        showStats: t5,
        videoStats: t4,
        onCloseStats: t7,
      } = (function (e) {
        let { videoRef: t, src: n, fileSizeBytes: i } = e,
          a = null != n && "" !== n,
          s = (0, d.bG)([x.Ay], () => !!a && x.Ay.isVideoStatsEnabled(n)),
          [l, o] = r.useState(null);
        return (
          r.useEffect(() => {
            if (!s) return;
            let e = t.current;
            if (null == e) {
              a && (0, x.Vh)(n, !1);
              return;
            }
            let r = new k.s(e, i ?? void 0);
            return (
              r.startTracking(o, { emitInitial: !0 }),
              () => {
                r.destroy();
              }
            );
          }, [s, t, n, a, i]),
          r.useEffect(
            () => () => {
              a && (0, x.ke)(n);
            },
            [n, a],
          ),
          {
            showStats: s,
            videoStats: s ? l : null,
            onCloseStats: r.useCallback(() => {
              a && (0, x.Vh)(n, !1);
            }, [n, a]),
          }
        );
      })({ videoRef: tz, src: e6, fileSizeBytes: ev }),
      t8 = r.useCallback(
        (e, t) => {
          et?.(e, t);
        },
        [et],
      ),
      { isHlsActive: t9, hls: ne } = (0, N.Ay)(t6, {
        src: e6,
        initialTimeSec: Q,
        onError: t8,
        onHlsInstance: eR,
        crossOrigin: eX,
      }),
      { isReady: nt } = (0, C.A)({ videoRef: t6, hls: ne, contentMetadata: e0, isHls: t9 }),
      nn = e1 && !nt && !t9,
      [ni, nr] = r.useState(null),
      [na, ns] = r.useState(0),
      [nl, no] = r.useState(!1),
      nd = en ?? tz.current?.duration ?? 0,
      [nc, nu] = r.useState(!1),
      n_ = (0, m.A)((e) => {
        let t = e.contentRect.width;
        t <= 0 || nu(t < Y);
      });
    (0, T.g)(tX, n_, [], { enabled: ex, fireOnMount: ex });
    let nE = tY ? c.oA.LG : ex && nc ? c.oA.SM : c.oA.MD,
      nA = K[nE];
    (0, p.u5)(() => {
      tQ.current && (tQ.current = !1);
    });
    let nh = r.useCallback(
      function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (((tL.current = !0), tn(e), el?.(e, t), null != tz.current))
          switch (e) {
            case c.Q6.PLAYING:
              (t0(null), tU(!0), tz.current.play());
              break;
            case c.Q6.PAUSED:
              ((tC.current = !1), tz.current.pause(), (tv.current = !1));
              break;
            case c.Q6.ENDED:
              tH(!1);
          }
      },
      [el],
    );
    (r.useEffect(() => {
      if (!eB) return;
      let e = null != t && (t === u.ip.HIDDEN || t === u.ip.EXITING || t === u.ip.EXITED),
        n = null != t && e9 && !e8,
        i = e7 && !e4;
      if ((e || n || i) && null != tz.current && tt === c.Q6.PLAYING) {
        let t = e || n ? c.KB.VISIBILITY : c.KB.FOCUS;
        (t0(t), nh(c.Q6.PAUSED, t));
      }
    }, [eB, t, e4, e7, e8, e9, tt, nh]),
      (0, G.A)({
        videoRef: t6,
        enabled: eB,
        onPipPause: () => {
          (t0(c.KB.PICTURE_IN_PICTURE), nh(c.Q6.PAUSED, c.KB.PICTURE_IN_PICTURE));
        },
        onHiddenPause: () => {
          (t0(c.KB.FOCUS), nh(c.Q6.PAUSED, c.KB.FOCUS));
        },
      }),
      r.useEffect(() => {
        e7 && em?.(e4, tt);
      }, [e4, e7, tt, em]),
      r.useEffect(() => {
        e9 && eg?.(e8, tt);
      }, [e8, e9, tt, eg]));
    let [nf, nI] = r.useState(!1),
      np = r.useRef(null),
      nT = r.useRef(0);
    r.useLayoutEffect(() => {
      nT.current = performance.now();
    }, []);
    let nm = r.useCallback(() => {
        switch ((null != np.current && clearTimeout(np.current), tt)) {
          case c.Q6.PLAYING:
            np.current = setTimeout(
              () => {
                nI(!0);
              },
              Math.max(0, 3e3 - (performance.now() - nT.current)),
            );
          case c.Q6.PAUSED:
          case c.Q6.ENDED:
        }
      }, [tt]),
      ng = r.useCallback(() => {
        (nI(!1), (nT.current = performance.now()), nm());
      }, [nm]);
    (r.useEffect(() => {
      if (tt !== c.Q6.PLAYING) {
        (nI(!1), null != np.current && clearTimeout(np.current));
        return;
      }
      return (
        nm(),
        () => {
          null != np.current && clearTimeout(np.current);
        }
      );
    }, [tt, nm]),
      r.useEffect(
        () => () => {
          null != th.current && clearTimeout(th.current);
        },
        [],
      ));
    let nS = !nf && (ta || ti || tt === c.Q6.ENDED),
      nN = r.useRef(eo);
    nN.current = eo;
    let nC = r.useCallback(() => {
      let e = (0, S.qf)(tX.current);
      null == e || (0, S._U)(e) || (e.removeEventListener(S.Wb, nC), tK(!1), nN.current?.(!1));
    }, []);
    function nO() {
      null == tz.current ||
        (nL(Math.max((tT.current ?? tz.current.currentTime) - 10, 0)),
        tt === c.Q6.ENDED && nh(c.Q6.PAUSED, c.KB.SEEK));
    }
    function nR() {
      if (null == tz.current) return;
      let e = Math.min((tT.current ?? tz.current.currentTime) + 10, nd);
      (nL(e), tt !== c.Q6.ENDED && e >= tz.current.duration && nh(c.Q6.ENDED, c.KB.SEEK));
    }
    r.useEffect(() => {
      let e = tX.current;
      return () => {
        let t = (0, S.qf)(e);
        null != t && t.removeEventListener(S.Wb, nC);
      };
    }, [nC]);
    let nL = r.useCallback(
      function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (null == tz.current) return;
        let n = tz.current.currentTime;
        ((tT.current = e),
          tc((e / (tz.current.duration ?? 1)) * 100),
          tA(!0),
          null != th.current && clearTimeout(th.current),
          (th.current = setTimeout(() => {
            (tA(!1), (th.current = null));
          }, 100)),
          (tp.current = !0),
          (tz.current.currentTime = e),
          t && eS?.(n, e));
      },
      [eS],
    );
    function ny() {
      if (null != tz.current)
        switch (tt) {
          case c.Q6.ENDED:
            (nL(0), nh(c.Q6.PLAYING, c.KB.USER));
            break;
          case c.Q6.PLAYING:
            (t0(c.KB.USER), nh(c.Q6.PAUSED, c.KB.USER));
            break;
          default:
            nh(c.Q6.PLAYING, c.KB.USER);
        }
    }
    function nD(e) {
      null != eL ? eL(e) : (tU(!0), ny());
    }
    let nv = r.useCallback(() => {
      if (null == tz.current || 0 === tz.current.textTracks.length) return;
      let e = tz.current.textTracks[0];
      if (((e.mode = "hidden"), null != e.cues))
        for (let t = 0; t < e.cues.length; t++) {
          let n = e.cues[t];
          (0, b.C)(n) &&
            ((n.id = `cue-${t}`),
            (n.onenter = () => {
              nr(n);
            }),
            (n.onexit = () =>
              (function (e) {
                nr((t) => (t?.id === e.id ? null : t));
              })(n)));
        }
    }, []);
    function nb(e) {
      if (null != tz.current) {
        if (tf === c.h$.BUFFERING) {
          let e = null != tM.current ? performance.now() - tM.current : null;
          eT?.(e);
        } else if (tf === c.h$.LOADING) {
          let e = null != tb.current ? performance.now() - tb.current : null;
          ef?.(e);
        }
        (tI(c.h$.READY),
          tt === c.Q6.PLAYING && (tC.current || nh(c.Q6.PLAYING, c.KB.BUFFERING_RECOVERY)));
      }
    }
    function nM(e) {
      if ((nL(e), tt === c.Q6.ENDED && !tO.current)) {
        let t = tz.current?.duration;
        (null == t || Number.isNaN(t) || e < t) && nh(c.Q6.PLAYING, c.KB.USER);
      }
    }
    r.useEffect(() => {
      if (null == tq.current) return;
      let e = tq.current;
      return (
        e.addEventListener("load", nv),
        () => {
          null != e && e.removeEventListener("load", nv);
        }
      );
    }, [nv]);
    let [{ controlBarAnimSpring: nP }, nU] = (0, _.z)(() => ({
        from: { controlBarAnimSpring: 0 },
        config: j,
        onStart: () => {
          tD(!1);
        },
        onRest: () => {
          tD(!0);
        },
      })),
      nw = (0, r.useRef)(null),
      [{ captionHeightSpring: nG }, nx] = (0, _.z)(() => ({
        from: { captionHeightSpring: 0 },
        config: j,
      }));
    (r.useEffect(
      () => (
        nx({
          captionHeightSpring: tj && null != ni ? (nw.current?.clientHeight ?? 0) : 0,
          immediate: t$,
        }),
        () => {
          nG.stop();
        }
      ),
      [tj, nx, t$, ni, nG],
    ),
      r.useEffect(
        () => (
          nU({ controlBarAnimSpring: nS || tS ? 1 : 0, immediate: t$ }),
          () => {
            nP.stop();
          }
        ),
        [nS, nU, t$, tS, nP],
      ));
    let nk = tt === c.Q6.ENDED && null != ea,
      nF = r.useCallback(
        function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.KB.USER;
          null != tz.current && (nL(0), nh(c.Q6.PLAYING, e));
        },
        [nL, nh],
      ),
      nB = r.useRef(null),
      nV = r.useCallback(
        (e) => {
          (ng(), nB.current?.(e.nativeEvent));
        },
        [ng],
      );
    r.useImperativeHandle(
      e2,
      () => ({
        play: () => {
          nh(c.Q6.PLAYING, c.KB.USER);
        },
        pause: () => {
          nh(c.Q6.PAUSED, c.KB.USER);
        },
        seek: (e) => {
          nL(e);
        },
      }),
      [nh, nL],
    );
    let nH = {
        ref: r.useCallback(
          (e) => {
            tz.current = e;
            let t = (0, M.c)(e);
            ((te.current = t), "function" == typeof e3 ? e3(t) : null != e3 && (e3.current = t));
          },
          [e3, te],
        ),
        alt: z,
        playsInline: !0,
        mediaLayoutType: tY ? F.dG.STATIC : F.dG.RESPONSIVE,
        className: s()({ [V.R]: nk, [V.IR]: !0, [V.FP]: "cover" === eq && !tY }),
        controls: !1,
        poster: Z,
        preload: tP ? ey : "none",
        disablePictureInPicture: !0,
        "data-testid": "discord-web-video-player-video",
        onTimeUpdate: function (e) {
          null != tz.current &&
            (J?.(tz.current.currentTime, tz.current.duration),
            tp.current || tu((tz.current.currentTime / tz.current.duration) * 100));
        },
        onEnded: function (e) {
          (tI(c.h$.READY), ee?.(), tO.current || nh(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE));
        },
        onLoadedData: function (e) {
          if (tf === c.h$.LOADING) {
            let e = null != tb.current ? performance.now() - tb.current : null;
            (ef?.(e), tI(c.h$.READY));
          }
        },
        onLoadedMetadata: function (e) {
          if (null == tz.current) return;
          Q > 0 && !t9 && nL(Q, !1);
          let t = eE?.() ?? tw,
            n = eA?.() ?? tx;
          (t !== tw && tG(t), n !== tx && tk(n), (tz.current.volume = n ? 0 : t));
          let i = tz.current.duration;
          (i > 0 && isFinite(i) && ns(i), no(!0));
        },
        onLoadStart: function () {
          ((tb.current = performance.now()), eh?.());
        },
        onPlaying: function () {
          tv.current && (eI?.(performance.now()), (tv.current = !1));
        },
        onWaiting: function (e) {
          ((tM.current = performance.now()), ep?.(), tI(c.h$.BUFFERING));
        },
        onProgress: function (e) {
          if (null == tz.current) return;
          let t = [];
          for (let e = 0; e < tz.current.buffered.length; e++) {
            let n = tz.current.buffered.start(e),
              i = tz.current.buffered.end(e);
            i - n < 1 ||
              t.push({ start: n / tz.current.duration, size: (i - n) / tz.current.duration });
          }
          tg(t);
        },
        onCanPlay: nb,
        onCanPlayThrough: nb,
        onSeeked: function () {
          ((tp.current = !1),
            (tT.current = null),
            null != tz.current && tu((tz.current.currentTime / tz.current.duration) * 100));
        },
        onAbort: function () {
          return t8(c.SB.ABORT);
        },
        onError: function () {
          return t8(c.SB.ERROR);
        },
        onEmptied: function () {
          return t8(c.SB.EMPTIED);
        },
        onStalled: function () {
          return t8(c.SB.STALLED);
        },
        onClick: nD,
        crossOrigin: eX ?? void 0,
        src: t9 || nn ? null : (e6 ?? null),
        onSourceError: function () {
          return t8(c.SB.SOURCE_ERROR);
        },
        isScrubbing: tS,
        children: (0, i.jsxs)(i.Fragment, {
          children: [
            null != ei &&
              (0, i.jsx)("track", {
                ref: tq,
                src: ei,
                label: "English",
                kind: "captions",
                srcLang: "en",
                default: !0,
              }),
            null != eK && (0, i.jsx)("track", { ref: t1, src: eK, kind: "metadata" }),
          ],
        }),
      },
      nj = (0, i.jsx)(L.BK, {
        children: (0, i.jsx)(O.pT, {
          activeLayer: tY ? L.$W : void 0,
          isFullscreen: tY,
          videoRef: tz,
          isActive: tP,
          isControlBarExpanded: nS,
          children: (0, i.jsx)(E.D, {
            className: s()(V.W6, { [V.nZ]: !tP }),
            style: { minWidth: eQ, minHeight: eJ },
            "data-fullscreen": tY,
            "data-testid": "discord-web-video-player-container",
            tabIndex: tP ? -1 : 0,
            focusProps: tP ? void 0 : { ringTarget: t_ },
            onMouseEnter: function () {
              (tr(!0),
                nI(!1),
                (nT.current = performance.now()),
                null != np.current && clearTimeout(np.current));
            },
            onMouseLeave: function () {
              (tr(!1), nI(!1));
            },
            "aria-label": tP ? void 0 : B.intl.string(B.t.RscU7I),
            onClick: tP ? void 0 : nD,
            onMouseMove: ng,
            children: (0, i.jsxs)("div", {
              ref: tX,
              className: s()(V.NS, { [V.DO]: "portrait" === a, [V.r7]: "landscape" === a }),
              tabIndex: -1,
              onKeyDown: nV,
              "data-testid": "discord-web-video-player-frame",
              style: {
                "--custom-footer-horizontal-padding": `${nA.footerHorizontalPaddingPx}px`,
                "--custom-footer-bottom": "4px",
                "--custom-footer-scrim-height": `${nA.scrimHeightPx}px`,
                "--custom-controls-gap": `${nA.controlsGapPx}px`,
                "--custom-controls-end-width":
                  null != nA.trailingGroupWidthPx ? `${nA.trailingGroupWidthPx}px` : "auto",
              },
              children: [
                tP && eZ && !t$ && (0, i.jsx)("canvas", { ref: tZ, className: V.Xm }),
                nk && ea?.({ replay: nF }),
                es(nH),
                tf !== c.h$.READY &&
                  tt === c.Q6.PLAYING &&
                  null != e6 &&
                  (0, i.jsx)("span", {
                    className: s()(V.S, { [V.F]: "center" === ez }),
                    "data-testid": "discord-web-video-player-loading-spinner",
                    children: (0, i.jsx)(A.y, { type: A.y.Type.WANDERING_CUBES }),
                  }),
                (0, i.jsx)(U.A, {
                  message: e5({ hasVideoAsset: null != e6, playerState: tt, pauseReason: tJ }),
                  showOverlay: null == e6,
                }),
                t5 &&
                  null != t4 &&
                  (0, i.jsx)(r.Suspense, {
                    fallback: null,
                    children: (0, i.jsx)(H, { stats: t4, onClose: t7 }),
                  }),
                null != eN &&
                  (0, i.jsx)(l.animated.div, {
                    className: V.MU,
                    style: {
                      opacity: (0, l.to)([nP.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                      visibility: (0, l.to)([nP.to({ range: [0, 1], output: [0, 1] })], (e) =>
                        e < 0.1 ? "hidden" : "visible",
                      ),
                      pointerEvents: (0, l.to)([nP.to({ range: [0, 1], output: [0, 1] })], (e) =>
                        e < 0.3 ? "none" : "auto",
                      ),
                    },
                    children: eN(),
                  }),
                tV &&
                  tt !== c.Q6.ENDED &&
                  null != er &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(E.D, {
                        onClick: () => {
                          (tt === c.Q6.PAUSED && nh(c.Q6.PLAYING, c.KB.USER), tH(!1));
                        },
                        tabIndex: -1,
                        children: (0, i.jsx)("div", { className: V.BG }),
                      }),
                      (0, i.jsx)(l.animated.div, {
                        className: s()(V.xr, eO, { [V.MZ]: "portrait" === a }),
                        "data-testid": "discord-web-video-player-transcript",
                        style: {
                          marginBottom: (0, l.to)(
                            [nP, nG],
                            (e, t) => `${e * nA.barHeightPx + t}px`,
                          ),
                        },
                        children: (0, i.jsx)(v.X, {
                          text: er,
                          onClose: function () {
                            tH(!1);
                          },
                        }),
                      }),
                    ],
                  }),
                tP &&
                  (0, i.jsx)(l.animated.div, {
                    className: V.Jp,
                    style: {
                      opacity: (0, l.to)([nP.to({ range: [0, 1], output: [0, 1] })], (e) => `${e}`),
                    },
                  }),
                (0, i.jsx)(
                  "div",
                  {
                    className: s()(V.yf, {
                      [V.ZH]: tL.current && tt === c.Q6.PLAYING,
                      [V.v7]: tL.current && tt === c.Q6.PAUSED,
                    }),
                    style: { "--custom-play-pause-pop-ms": "1000ms" },
                    children:
                      tt === c.Q6.PLAYING
                        ? (0, i.jsx)(h.PlayIcon, { className: V.PK })
                        : (0, i.jsx)(f.PauseIcon, { className: V.PK }),
                  },
                  tt,
                ),
                tj &&
                  null != ni &&
                  !nk &&
                  (0, i.jsx)(l.animated.div, {
                    className: V.o$,
                    ref: nw,
                    "data-testid": "discord-web-video-player-captions",
                    style: {
                      translateY: (0, l.to)(
                        [nP.to({ range: [0, 1], output: [-20, -nA.barHeightPx] })],
                        (e) => `${e}px`,
                      ),
                    },
                    children: (0, i.jsx)(I.E, {
                      variant: "text-lg/semibold",
                      color: "text-overlay-light",
                      className: V.qh,
                      children: ni.text,
                    }),
                  }),
                tP &&
                  (0, i.jsxs)(l.animated.div, {
                    className: V.r8,
                    style: {
                      height: (0, l.to)(
                        [nP.to({ range: [0, 1], output: [0, nA.barHeightPx] })],
                        (e) => `${e}px`,
                      ),
                    },
                    children: [
                      (0, i.jsx)(l.animated.div, {
                        style: {
                          transform: (0, l.to)(
                            [nP.to({ range: [1, 0], output: [0, 1] })],
                            (e) => `translateY(-${20 * e}px)`,
                          ),
                        },
                        children: (0, i.jsx)("div", {
                          style: nS || tS || eV ? void 0 : W,
                          children: (0, i.jsx)(D.Ay, {
                            percent: null != td ? td : tl,
                            animate:
                              !0 !== tQ.current &&
                              !tE &&
                              tt === c.Q6.PLAYING &&
                              nl &&
                              tf === c.h$.READY,
                            interactionEnabled: ty && nd > 0,
                            backgroundColor: nS || eV ? void 0 : "rgba(0, 0, 0, 0.0)",
                            playerState: tt,
                            preloadedBuffers: nS ? tm : void 0,
                            durationSec: na > 0 ? na : +!nl,
                            isFullyVisible: nS && ty,
                            maxSeekableTime: null != en && nd > 0 ? nd : void 0,
                            progressClassName: eF,
                            persistPlayhead: eH,
                            onClick: nM,
                            onScrubBack: nO,
                            onScrubForward: nR,
                            onDragStateChange: function (e) {
                              if (((tO.current = e), tN(e), e))
                                ((tC.current = tt === c.Q6.PLAYING),
                                  (tR.current = tt === c.Q6.ENDED),
                                  tC.current
                                    ? tz.current?.pause()
                                    : tR.current && nh(c.Q6.PAUSED, c.KB.SEEK));
                              else {
                                let e = tz.current,
                                  t =
                                    null != e &&
                                    !Number.isNaN(e.duration) &&
                                    e.currentTime >= e.duration;
                                tC.current
                                  ? ((tC.current = !1),
                                    t ? nh(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE) : e?.play())
                                  : tR.current
                                    ? ((tR.current = !1),
                                      t
                                        ? nh(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE)
                                        : nh(c.Q6.PLAYING, c.KB.USER))
                                    : t && nh(c.Q6.ENDED, c.KB.PLAYBACK_COMPLETE);
                              }
                            },
                            indicatorConfig: eY,
                            scrubPreviewCues: t2,
                            onIndicatorSeek: nM,
                            getCurrentTimeSec: t3,
                            "data-testid": "discord-web-video-player-timeline",
                          }),
                        }),
                      }),
                      (0, i.jsx)(l.animated.div, {
                        className: V.uN,
                        "data-testid": "discord-web-video-player-controls",
                        style: {
                          paddingTop: (0, l.to)(
                            [nP.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${e * e * 20}px`,
                          ),
                          paddingBottom: (0, l.to)(
                            [nP.to({ range: [0, 1], output: [0, 1] })],
                            (e) => `${e * e * 20}px`,
                          ),
                          pointerEvents: (0, l.to)(
                            [nP.to({ range: [0, 1], output: [0, 1] })],
                            (e) => (e < 0.3 ? "none" : "auto"),
                          ),
                        },
                        onFocus: function () {
                          return ts(!0);
                        },
                        onBlur: function () {
                          return ts(!1);
                        },
                        children: (0, i.jsx)(R.A, {
                          playerState: tt,
                          animSpring: nP,
                          visible: nS,
                          seekForwardEnabled: null == en || (tz.current?.currentTime ?? 0) + 1 < nd,
                          hideCaptionBtn: null == ei,
                          hideTranscriptBtn: null == er,
                          hideFullScreenBtn: eP,
                          hidePlaybackSpeedBtn: eG,
                          hideSkipButtons: eU ?? "portrait" === a,
                          compactTimeDisplay: ew,
                          size: nE,
                          downloadUrl: eD,
                          downloadContentType: eb,
                          extraButtons: eM,
                          autoFocus: ej,
                          keyDownHandlerRef: nB,
                          volume: tw,
                          muted: tx,
                          transcriptEnabled: tV,
                          captionEnabled: tj,
                          handlePlaybackBtnClick: ny,
                          handleTranscriptBtnClick: function () {
                            tH(!tV);
                          },
                          handleCaptionBtnClick: function () {
                            tW(!tj);
                          },
                          handleFullScreenBtnClick: function () {
                            let e = !tY,
                              t = (0, S.qf)(tX.current);
                            (e && null != t
                              ? ((0, S.tl)(t), t.addEventListener(S.Wb, nC), eo?.(!0))
                              : e ||
                                null == t ||
                                (t.removeEventListener(S.Wb, nC), eo?.(!1), (0, S.sP)(t)),
                              tK(e));
                          },
                          handleSeekBackBtnClick: nO,
                          handleSeekForwardBtnClick: nR,
                          autoHideVolumeSlider: eW,
                          handleControlBarPendingInteraction: tN,
                          onVolumeChange: function (e) {
                            (tG(e), ed?.(e));
                          },
                          onMutedChange: function (e) {
                            (tk(e), ec?.(e));
                          },
                          onVolumeExpandedChange: function (e) {
                            tB(e);
                          },
                        }),
                      }),
                    ],
                  }),
                null != eC &&
                  (0, i.jsx)("div", {
                    className: V.MU,
                    children: eC({
                      playerState: tt,
                      isControlBarExpanded: nS,
                      controlBarAnimationSpring: nP,
                      videoRef: tz,
                      isActive: tP,
                      isVolumeExpanded: tF,
                    }),
                  }),
                !tP &&
                  (0, i.jsx)("div", {
                    className: V.mF,
                    ref: t_,
                    children: (0, i.jsx)(h.PlayIcon, {
                      size: "xs",
                      color: "currentColor",
                      className: V.z_,
                    }),
                  }),
                (0, i.jsx)(L.bW, {}),
                (0, i.jsx)(o.P, {}),
              ],
            }),
          }),
        }),
      });
    return (0, i.jsx)(o.Jh, { enabled: tY, children: nj });
  }
}
