/* Recovered shipped factory. Module 440014.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5820630..5844206
 * Raw property SHA-256: 1e3a06a1bf7797630c18c6c58ec24f8f4f3f173ae932e8e0ea70e636a74fc9bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { rB: () => z, Ay: () => en }), n(321073));
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(435558),
    o = n.n(l),
    d = n(615300),
    c = n(621466),
    u = n(933681),
    _ = n(939249),
    E = n(113494),
    A = n(782134),
    h = n(559106),
    f = n(43990),
    I = n(607470),
    p = n(384015),
    T = n(945810),
    m = n(953051),
    g = n(423562),
    S = n(544180),
    N = n(953727);
  function C(e) {
    let { width: t = 16, height: n = 16, color: r = "currentColor", foreground: a, ...s } = e;
    return (0, i.jsx)("svg", {
      ...(0, N.A)(s),
      width: t,
      height: n,
      viewBox: "0 0 24 24",
      children: (0, i.jsx)("path", {
        className: a,
        fill: r,
        d: "M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z",
      }),
    });
  }
  var O = n(174459),
    R = n(927813),
    L = n(824744),
    y = n(475815),
    D = n(953584),
    v = n(122641),
    b = n(692051),
    M = n(660183),
    P = n(317714);
  function U(e) {
    let { onPlay: t, className: n, inactive: a } = e,
      l = r.useRef(null),
      o = (0, i.jsx)("div", {
        className: P.P0,
        ref: l,
        children: (0, i.jsx)(A.PlayIcon, { size: "xs", color: "currentColor", className: P.Kk }),
      });
    return (0, i.jsx)(b.Y.Consumer, {
      children: (e) =>
        a || null == t
          ? (0, i.jsx)("div", { className: P.Iv, children: o })
          : (0, i.jsx)(_.D, {
              className: s()(n, P.Iv, { [P.vu]: !e.disableInteractions }),
              onClick: t,
              tabIndex: 0,
              "aria-label": M.intl.string(M.t.RscU7I),
              focusProps: { ringTarget: l },
              children: o,
            }),
    });
  }
  var w = n(821209),
    G = n(338659),
    x = n(410694),
    k = n(20504),
    F = n(652215),
    B = n(838541),
    V = n(650583),
    H = n(311225),
    j = n(938442);
  let W = "-:--",
    Y = { friction: 14, tension: 200 },
    K = { VIDEO: "VIDEO", AUDIO: "AUDIO" },
    $ = { width: "100%", height: "100%", backgroundColor: "black" };
  function z(e) {
    let t = 0 | e,
      n = t % 60;
    return `${(t - n) / 60}:${String(n).padStart(2, "0")}`;
  }
  function X(e) {
    let { current: t, duration: n } = e,
      r = null != t ? z(t) : W,
      a = null != n ? z(n) : W;
    return (
      (r = r.padStart(a.length, "0")),
      (0, i.jsxs)("div", {
        className: H.d$,
        children: [
          (0, i.jsx)("span", { className: H.Ue, children: r }),
          (0, i.jsx)("span", { className: H.zO, children: "/" }),
          (0, i.jsx)("span", { className: H.Ue, children: a }),
        ],
      })
    );
  }
  class Z extends r.Component {
    static defaultProps = { disabled: !1 };
    state = { translateY: new d.A.Value(0) };
    volumeButton;
    durationBar;
    componentDidMount() {
      this.state.translateY.setValue(+!!this.props.autoPlay);
    }
    componentDidUpdate(e) {
      let { hide: t, playing: n } = this.props;
      t && !e.hide
        ? (this.animateControls(1, n), this.volumeButton?.blur(), this.props.onControlsHide?.())
        : !t && e.hide && (this.animateControls(0, n), this.props.onControlsShow?.());
    }
    updateProgress(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { durationBar: n } = this;
      null != n && n.setGrabber(e, t);
    }
    animateControls(e, t) {
      let { translateY: n } = this.state;
      t ? d.A.spring(n, { toValue: e, ...Y }).start() : n.setValue(e);
    }
    setDurationRef = (e) => {
      this.durationBar = e;
    };
    setVolumeButtonRef = (e) => {
      this.volumeButton = e;
    };
    getAnimatedStyle() {
      let { translateY: e } = this.state;
      return {
        transform: [
          { translateY: e.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
        ],
      };
    }
    renderPlayIcon() {
      let {
        playing: e,
        currentTime: t,
        duration: n,
        onPause: r,
        onPlay: a,
        disabled: s,
      } = this.props;
      return e
        ? (0, i.jsx)(_.D, {
            className: H.CY,
            onClick: r,
            tabIndex: s ? -1 : 0,
            "aria-label": M.intl.string(M.t.ZcgDJX),
            children: (0, i.jsx)(
              E.PauseIcon,
              { size: "xs", color: "currentColor", className: H.pd },
              "pause",
            ),
          })
        : null != t && t === n
          ? (0, i.jsx)(_.D, {
              className: H.CY,
              onClick: a,
              tabIndex: s ? -1 : 0,
              "aria-label": M.intl.string(M.t.hsvh0i),
              children: (0, i.jsx)(C, { className: H.pd }, "replay"),
            })
          : (0, i.jsx)(_.D, {
              className: H.CY,
              onClick: a,
              tabIndex: s ? -1 : 0,
              "aria-label": M.intl.string(M.t.RscU7I),
              children: (0, i.jsx)(
                A.PlayIcon,
                { size: "xs", color: "currentColor", className: H.pd },
                "play",
              ),
            });
    }
    render() {
      let {
        buffers: e,
        children: t,
        currentTime: n,
        duration: r,
        muted: a,
        onDrag: s,
        onDragEnd: l,
        onDragStart: o,
        onToggleMuted: c,
        onVolumeShow: u,
        onVolumeHide: _,
        width: E,
        volume: A,
        type: h,
      } = this.props;
      return (0, i.jsxs)(d.A.div, {
        className: h === K.VIDEO ? H._v : H.dH,
        onClick: (e) => e.stopPropagation(),
        onDoubleClick: (e) => e.stopPropagation(),
        style: this.getAnimatedStyle(),
        children: [
          this.renderPlayIcon(),
          "string" == typeof E || E > 250 ? (0, i.jsx)(X, { current: n, duration: r }) : null,
          (0, i.jsx)(v.A, {
            buffers: e,
            value: r ?? 0,
            onDrag: s,
            onDragEnd: l,
            onDragStart: o,
            type: v.A.Types.DURATION,
            ref: this.setDurationRef,
          }),
          (0, i.jsx)("div", {
            className: j.Uu,
            children: (0, i.jsx)(k.A, {
              ref: this.setVolumeButtonRef,
              muted: a,
              value: A,
              minValue: 0,
              maxValue: 1,
              currentWindow: window,
              onValueChange: (e) => s(e, v.A.Types.VOLUME),
              onToggleMute: c,
              onVolumeShow: u,
              onVolumeHide: _,
              iconClassName: H.pd,
              iconColor: "currentColor",
              sliderWrapperClassName: H.L9,
            }),
          }),
          t,
        ],
      });
    }
  }
  function q(e) {
    let { fileName: t, fileSize: n, src: r, disabled: a, mimeType: s, hideDownloadButton: l } = e;
    return (0, i.jsxs)("div", {
      className: H.WU,
      children: [
        (0, i.jsxs)("div", {
          className: H.xe,
          children: [
            a
              ? t
              : (0, i.jsx)(p.A, {
                  href: r,
                  className: H.kH,
                  iconClassName: H.XR,
                  mimeType: s,
                  fileName: t,
                }),
            (0, i.jsx)("div", { className: H.fL, children: n }),
          ],
        }),
        !l && (0, i.jsx)(p.A, { href: r, className: H.kH, iconClassName: H.XR, mimeType: s }),
      ],
    });
  }
  class Q extends r.Component {
    state = { play: !1, scale: new d.A.Value(0), opacity: new d.A.Value(0) };
    pop() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      this.setState({ play: e }, this.popAnimation);
    }
    popAnimation = () => {
      let { opacity: e, scale: t } = this.state;
      (t.setValue(0),
        e.setValue(0),
        d.A.parallel([
          d.A.sequence([
            d.A.timing(e, { toValue: 1, duration: 200 }),
            d.A.timing(e, { toValue: 0, duration: 200 }),
          ]),
          d.A.spring(t, { toValue: 1.5, ...Y, friction: 80 }),
        ]).start());
    };
    getAnimatedStyle() {
      let { opacity: e, scale: t } = this.state;
      return d.A.accelerate({
        opacity: e.interpolate({ inputRange: [0, 1], outputRange: [0, 0.8] }),
        transform: [{ scale: t.interpolate({ inputRange: [0, 1], outputRange: [1, 2] }) }],
      });
    }
    render() {
      let { play: e } = this.state,
        t = e ? A.PlayIcon : E.PauseIcon;
      return (0, i.jsx)(d.A.div, {
        className: H.kO,
        style: this.getAnimatedStyle(),
        children: (0, i.jsx)(t, { className: H.PK }),
      });
    }
  }
  let J = (0, T.mj)({
    name: "2026-03-media-play-metrics",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
  });
  class ee {
    metadata;
    playTimeSec = 0;
    playWallTimeMs = 0;
    firstPlayWaitingMs = 0;
    stallCount = 0;
    stallMs = 0;
    seekCount = 0;
    seekWaitingMs = 0;
    errorMessage = null;
    errorCode = null;
    stateTime = performance.now();
    currentState = "not_started";
    playbackStartTime;
    lastPlayingTime;
    analyticsEnabled;
    constructor(e) {
      ((this.metadata = e),
        (this.analyticsEnabled = J.getConfig({ location: "media_player" }).enabled));
    }
    moveToState(e) {
      ((this.stateTime = performance.now()), (this.currentState = e));
    }
    timeInState() {
      return performance.now() - this.stateTime;
    }
    sendEvent() {
      (this.analyticsEnabled &&
        (null == this.errorCode &&
          null == this.errorMessage &&
          !1 === this.metadata.hasValidFrame &&
          ((this.errorCode = 4),
          (this.errorMessage = "No valid video frames detected - codec may be unsupported")),
        O.default.track(F.HAw.MEDIA_PLAY_FINISHED, {
          play_time_sec: this.playTimeSec,
          play_wall_time_ms: this.playWallTimeMs,
          first_play_waiting_ms: this.firstPlayWaitingMs,
          stall_count: this.stallCount,
          stall_ms: this.stallMs,
          seek_count: this.seekCount,
          seek_waiting_ms: this.seekWaitingMs,
          media_source: this.metadata.src,
          mime_type: this.metadata.mimeType,
          file_size: this.metadata.fileSize,
          file_duration_sec: this.metadata.fileDurationSec,
          connection_type: S.A.getType(),
          effective_connection_speed: S.A.getEffectiveConnectionSpeed(),
          service_provider: S.A.getServiceProvider(),
          error_message: this.errorMessage,
          error_code: this.errorCode,
        })),
        (this.playTimeSec = 0),
        (this.playWallTimeMs = 0),
        (this.firstPlayWaitingMs = 0),
        (this.stallCount = 0),
        (this.stallMs = 0),
        (this.seekCount = 0),
        (this.seekWaitingMs = 0),
        (this.playbackStartTime = void 0),
        (this.lastPlayingTime = void 0),
        this.moveToState("not_started"));
    }
    updatePlayTime(e) {
      ((this.playTimeSec += Math.max(
        (this.lastPlayingTime ?? e) - (this.playbackStartTime ?? 0),
        0,
      )),
        (this.playWallTimeMs += this.timeInState()));
    }
    onWaiting = (e) => {
      switch (this.currentState) {
        case "not_started":
          this.moveToState("not_started_waiting");
          break;
        case "playing":
          (this.updatePlayTime(e.currentTarget.currentTime),
            (this.stallCount += 1),
            this.moveToState("stalled"));
          break;
        case "seeking":
        case "not_started_waiting":
        case "stalled":
          break;
        case "paused":
        case "seeked":
          this.moveToState("stalled");
          break;
        default:
          (0, u.dr)(this.currentState);
      }
    };
    onSeeking = (e) => {
      switch (this.currentState) {
        case "seeking":
        case "seeked":
          this.moveToState("seeking");
          return;
        case "stalled":
          this.stallMs += this.timeInState();
          break;
        case "playing":
          this.updatePlayTime(e.currentTarget.currentTime);
          break;
        case "not_started":
        case "not_started_waiting":
        case "paused":
          break;
        default:
          (0, u.dr)(this.currentState);
      }
      ((this.seekCount += 1), this.moveToState("seeking"));
    };
    onSeeked = (e) => {
      switch (this.currentState) {
        case "seeking":
        case "seeked":
          let t = this.stateTime;
          (this.moveToState("seeked"), (this.stateTime = t));
          break;
        case "not_started":
        case "not_started_waiting":
        case "stalled":
        case "playing":
        case "paused":
          break;
        default:
          (0, u.dr)(this.currentState);
      }
    };
    onPause = (e) => {
      switch (this.currentState) {
        case "playing":
          (this.updatePlayTime(e.currentTarget.currentTime),
            this.moveToState("paused"),
            this.sendEvent());
          break;
        case "stalled":
          ((this.stallMs += this.timeInState()), this.moveToState("paused"), this.sendEvent());
          break;
        case "not_started":
        case "not_started_waiting":
        case "paused":
        case "seeking":
          break;
        case "seeked":
          ((this.seekWaitingMs += this.timeInState()), (this.seekCount += 1));
          break;
        default:
          (0, u.dr)(this.currentState);
      }
    };
    onError = (e) => {
      (this.moveToState("paused"), this.sendEvent());
    };
    onPlaying = (e) => {
      switch (this.currentState) {
        case "playing":
          return;
        case "not_started":
          this.firstPlayWaitingMs = 0;
          break;
        case "not_started_waiting":
          this.firstPlayWaitingMs = this.timeInState();
          break;
        case "stalled":
          this.stallMs += this.timeInState();
          break;
        case "seeked":
          this.seekWaitingMs += this.timeInState();
          break;
        case "paused":
        case "seeking":
          break;
        default:
          (0, u.dr)(this.currentState);
      }
      ((this.playbackStartTime = e.currentTarget.currentTime), this.moveToState("playing"));
    };
    onTimeUpdate = (e) => {
      switch (this.currentState) {
        case "playing":
          this.lastPlayingTime = e.currentTarget.currentTime;
          return;
        case "not_started":
        case "not_started_waiting":
        case "stalled":
        case "seeked":
        case "paused":
        case "seeking":
          break;
        default:
          (0, u.dr)(this.currentState);
      }
    };
    onDragStart = (e) => {
      null != e && (this.lastPlayingTime = e);
    };
    onLoadedMetadata = (e) => {
      this.metadata.fileDurationSec = e.currentTarget.duration;
    };
  }
  class et extends r.PureComponent {
    static Types = K;
    static defaultProps = {
      width: 400,
      height: 300,
      forceExternal: !1,
      playable: !0,
      downloadable: !0,
      autoPlay: !1,
      autoMute: !1,
      volume: 1,
    };
    static minWidth = 150;
    static minHeight = 110;
    _unmounted = !1;
    _lastMove = 0;
    _analytics;
    _statsCollector = null;
    _hasStatsListener = !1;
    mediaRef = r.createRef();
    controlsRef = r.createRef();
    handleVideoRef = (e) => {
      ((this.mediaRef.current = e),
        null != this.props.videoRef && (this.props.videoRef.current = e));
    };
    playPausePopRef = r.createRef();
    containerRef = r.createRef();
    static getDerivedStateFromProps(e, t) {
      return !e.playable && t.playing ? { playing: !1, hideControls: !1 } : null;
    }
    constructor(e) {
      (super(e),
        (this._analytics = new ee({
          src: e.src,
          mimeType: e.mimeType?.join("/"),
          fileSize: e.fileSizeBytes,
        })));
      const { autoPlay: t, autoMute: n, volume: i, playable: r } = this.props,
        a = "function" == typeof i ? i() : i,
        s = "function" == typeof n ? n() : n;
      this.state = {
        buffers: [],
        currentTime: null,
        dragging: null,
        duration: null,
        fullscreen: !1,
        hasClickedPlay: !1,
        hasLoadedMetadata: !1,
        hideControls: !r,
        muted: s,
        volume: a,
        playing: t,
        preload: "none",
        width: et.minWidth,
        height: et.minHeight,
        hovering: !1,
        showStats: !1,
        videoStats: null,
      };
    }
    componentDidMount() {
      let { playing: e, muted: t, volume: n } = this.state,
        { type: i, src: r } = this.props;
      if (
        i === K.VIDEO &&
        (D.Ay.addChangeListener(this.handleStatsStoreChange),
        (this._hasStatsListener = !0),
        D.Ay.isVideoStatsEnabled(r) && !this.state.showStats)
      )
        try {
          this.toggleStats();
        } catch (e) {
          D.Ay.setVideoStats(r, !1);
        }
      let { current: a } = this.mediaRef;
      null != a &&
        (t && (a.muted = t), e && (this.play(!0), this.handleUIUpdate()), (a.volume = n));
    }
    componentDidUpdate(e, t) {
      let {
        props: { onPause: n, onVolumeChange: i, onMute: r, src: a, type: s },
        state: { playing: l, fullscreen: o, muted: d, dragging: c, volume: u, showStats: _ },
      } = this;
      if (a !== e.src && s === K.VIDEO) {
        (null != this._statsCollector &&
          this._statsCollector.resetCodecInfo(this.props.fileSizeBytes),
          D.Ay.clearVideoStats(e.src));
        let t = D.Ay.isVideoStatsEnabled(a);
        _ !== t && (t ? this.toggleStats() : _ && this.toggleStats());
      }
      let { current: E } = this.mediaRef,
        { current: A } = this.playPausePopRef;
      if (null == E) return;
      (l && !t.playing
        ? (this.play(),
          this.handleMouseMove(),
          this.handleUIUpdate(),
          t.hasClickedPlay && A?.pop(l))
        : !l && t.playing && (E.pause(), A?.pop(l), n?.()),
        l && null == this._analytics.metadata.hasValidFrame && this.checkVideoDecodability());
      let h = (0, y.qf)(E.parentNode, E);
      (o && !t.fullscreen && null != h
        ? ((0, y.tl)(h), h.addEventListener(y.Wb, this.handleFullScreenExit))
        : !o &&
          t.fullscreen &&
          null != h &&
          (h.removeEventListener(y.Wb, this.handleFullScreenExit), (0, y.sP)(h, h.ownerDocument)),
        c === v.A.Types.DURATION && t.dragging !== v.A.Types.DURATION && l
          ? E.pause()
          : c !== v.A.Types.DURATION && t.dragging === v.A.Types.DURATION && l && E.play(),
        d !== t.muted && ((E.muted = d), r?.(d)),
        u !== t.volume && ((E.volume = u), i?.(u)));
    }
    componentWillUnmount() {
      ((this._unmounted = !0),
        null != this._statsCollector &&
          (this._statsCollector.destroy(), (this._statsCollector = null)),
        this._hasStatsListener &&
          (D.Ay.removeChangeListener(this.handleStatsStoreChange),
          (this._hasStatsListener = !1),
          this.props.type === K.VIDEO && D.Ay.clearVideoStats(this.props.src)));
      let { current: e } = this.mediaRef;
      if (null == e) return;
      let t = (0, y.qf)(e.parentNode, e);
      null != t && (t.removeEventListener(y.Wb, this.handleFullScreenExit), (0, y.sP)(t));
    }
    play() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { onPlay: t, volume: n, autoMute: i } = this.props,
        { current: r } = this.mediaRef;
      if (null != r) {
        let a = {};
        if ("function" == typeof n) {
          let e = n();
          e !== this.state.volume && ((r.volume = e), (a.volume = e));
        }
        if ("function" == typeof i) {
          let e = i();
          e !== this.state.muted && ((r.muted = e), (a.muted = e));
        }
        (this.setState(a),
          r.play(),
          t?.(e, r.currentTime * R.A.Millis.SECOND, r.duration * R.A.Millis.SECOND));
      }
    }
    getWidth() {
      let { width: e } = this.props;
      return "100%" === e ? e : Math.max(e, et.minWidth);
    }
    getHeight() {
      let { height: e } = this.props;
      return "100%" === e ? e : Math.max(e, et.minHeight);
    }
    handleFullScreenExit = () => {
      let { current: e } = this.mediaRef;
      if (null == e) return;
      let t = (0, y.qf)(e.parentNode, e);
      (null != t && (0, y._U)(t, t?.ownerDocument)) || this.setState({ fullscreen: !1 });
    };
    toggleFullscreen = () => {
      if (null != this.props.onFullscreenChange)
        return void this.props.onFullscreenChange(!this.state.fullscreen);
      let e = !this.state.fullscreen;
      this.setState({ fullscreen: e });
    };
    setMuted = (e) => {
      this.setState({ muted: e });
    };
    toggleMuted = () => {
      this.setMuted(!this.state.muted);
    };
    setTime = (() => {
      var e = this;
      return function (t) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          { current: i } = e.mediaRef;
        null != i &&
          isFinite(i.duration) &&
          isFinite(i.currentTime) &&
          ((i.currentTime = t), e.updateValue(t / i.duration, n), e.updateTime(t, i.duration));
      };
    })();
    updateValue(e) {
      let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { current: n } = this.controlsRef;
      null != n && n.updateProgress(e, t);
    }
    updateTime(e, t) {
      let n = 0 | e,
        i = 0 | t;
      (this.state.currentTime !== n || this.state.duration !== i) &&
        this.setState({ currentTime: n, duration: i });
    }
    updateControlsVisibility() {
      let { dragging: e, fullscreen: t } = this.state,
        n = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
      n !== this.state.hideControls && null == e && this.setState({ hideControls: n });
    }
    handleUIUpdate = () => {
      if (!this.state.playing || this._unmounted) return;
      let { current: e } = this.mediaRef;
      null != e &&
        (e.duration > 0 && this.updateValue(e.currentTime / e.duration),
        this.updateTime(e.currentTime, e.duration),
        this.updateControlsVisibility(),
        requestAnimationFrame(this.handleUIUpdate));
    };
    handleDrag = (e, t) => {
      let { current: n } = this.mediaRef;
      if (t === v.A.Types.DURATION)
        null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
      else if (t === v.A.Types.VOLUME) {
        let t = (0, L.w)(e, 1);
        0 === t
          ? this.setState({ muted: !0, volume: t })
          : this.state.muted && t > 0
            ? this.setState({ muted: !1, volume: t })
            : this.setState({ volume: t });
      }
    };
    handleLoaded = (e) => {
      this._analytics.onLoadedMetadata(e);
      let { current: t } = this.mediaRef;
      null != t &&
        (null != this.props.initialTimeSec &&
          this.props.initialTimeSec > 0 &&
          (t.currentTime = this.props.initialTimeSec),
        this.updateTime(t.currentTime, t.duration),
        this.setState({ hasLoadedMetadata: !0, currentTime: t.currentTime, duration: t.duration }));
    };
    handleDurationChange = () => {
      let { current: e } = this.mediaRef;
      null != e &&
        (this.updateTime(e.currentTime, e.duration), this.setState({ duration: e.duration }));
    };
    handleBuffer = o().debounce(() => {
      let { current: e } = this.mediaRef;
      null == e
        ? this.setState({ buffers: [] })
        : this.setState({
            buffers: (function (e) {
              let t = [],
                { duration: n } = e;
              for (let i = 0; i < e.buffered.length; i++) {
                let r = e.buffered.start(i),
                  a = e.buffered.end(i);
                if (a - r < 1) continue;
                let s = (a - r) / n,
                  l = r / n;
                t.push([l, s]);
              }
              return t;
            })(e),
          });
    }, 400);
    handleEnded = (e) => {
      let { onEnded: t } = this.props;
      (null != t && t(e), this.setState({ playing: !1, hideControls: !1 }));
    };
    handleMouseMove = () => {
      this._lastMove = Date.now();
    };
    handleMouseLeave = () => {
      (this.state.playing && (this._lastMove = 0), this.setState({ hovering: !1 }));
    };
    handleMouseEnter = () => {
      ("none" === this.state.preload && this.setState({ preload: "metadata" }),
        this.setState({ hovering: !0 }));
    };
    shouldUnmuteOnFirstInteraction() {
      let {
        props: { autoMute: e, disableClickToUnmute: t },
        state: { hasClickedPlay: n, muted: i },
      } = this;
      return !t && !n && e && i;
    }
    handleVideoClick = (e) => {
      let {
        state: { playing: t },
        props: { onClick: n, autoPlay: i },
      } = this;
      null != n
        ? n(e)
        : (e.stopPropagation(),
          i && t && this.shouldUnmuteOnFirstInteraction()
            ? this.setState({ muted: !1, hasClickedPlay: !0 })
            : this.setPlay(!this.state.playing));
    };
    setPlay = (e) => {
      let {
        state: { muted: t },
      } = this;
      e !== this.state.playing &&
        (e
          ? this.setState({
              playing: e,
              hasClickedPlay: !0,
              muted: !this.shouldUnmuteOnFirstInteraction() && t,
            })
          : this.setState({ playing: !1, hideControls: !1 }));
    };
    handleDragStart = (e) => {
      (this.setState({ dragging: e }),
        this._analytics.onDragStart(this.mediaRef.current?.currentTime ?? null));
    };
    handleDragEnd = () => {
      (this.setState({ dragging: null }), (this._lastMove = Date.now()));
    };
    handleKeyDown = (e) => {
      let { current: t } = this.mediaRef,
        { disableArrowKeySeek: n } = this.props;
      if (e.key === V.dh.SPACE) (e.preventDefault(), this.setPlay(!this.state.playing));
      else if (e.key !== V.dh.ARROW_LEFT || null == t || n)
        if (e.key !== V.dh.ARROW_RIGHT || null == t || n) {
          if ((0, m.A)(e.key) && null != t) {
            (e.preventDefault(), e.stopPropagation());
            let n = Number(e.key) / 10;
            ((t.currentTime = t.duration * n), this.setPlay(!0));
          }
        } else {
          (e.preventDefault(), e.stopPropagation());
          let n = Math.min(isFinite(t.duration) ? t.duration : 0, t.currentTime + 5);
          this.setTime(n);
        }
      else {
        (e.preventDefault(), e.stopPropagation());
        let n = Math.max(0, t.currentTime - 5);
        this.setTime(n);
      }
    };
    handleError = (e) => {
      let t = e.currentTarget;
      ((this._analytics.errorCode = t.error?.code ?? null),
        (this._analytics.errorMessage = t.error?.message ?? null),
        this._analytics.onError(e));
    };
    _isUpdatingStats = !1;
    toggleStats = () => {
      let { showStats: e } = this.state,
        { current: t } = this.mediaRef,
        { src: n } = this.props;
      if (e)
        (null != this._statsCollector && this._statsCollector.stopTracking(),
          (this._isUpdatingStats = !0),
          this.setState({ showStats: !1 }, () => {
            ((this._isUpdatingStats = !1),
              this._unmounted || D.Ay.setVideoStats(this.props.src, !1));
          }));
      else if (null != t && (0, c.vq)(t, HTMLVideoElement))
        try {
          (null == this._statsCollector &&
            (this._statsCollector = new G.s(t, this.props.fileSizeBytes)),
            this._statsCollector.startTracking(this.handleStatsUpdate),
            (this._isUpdatingStats = !0),
            this.setState({ showStats: !0, videoStats: this._statsCollector.getStats() }, () => {
              ((this._isUpdatingStats = !1),
                this._unmounted || D.Ay.setVideoStats(this.props.src, !0));
            }));
        } catch (e) {
          (null != this._statsCollector &&
            (this._statsCollector.destroy(), (this._statsCollector = null)),
            (this._isUpdatingStats = !1),
            this._unmounted || D.Ay.setVideoStats(this.props.src, !1));
        }
      else D.Ay.setVideoStats(n, !1);
    };
    handleStatsUpdate = (e) => {
      this.setState({ videoStats: e });
    };
    handleStatsStoreChange = () => {
      let { src: e, type: t } = this.props;
      t !== K.VIDEO ||
        this._isUpdatingStats ||
        (D.Ay.isVideoStatsEnabled(e) !== this.state.showStats && this.toggleStats());
    };
    renderVideo() {
      let {
          alt: e,
          src: t,
          poster: n,
          forceExternal: r,
          responsive: a,
          mediaLayoutType: s,
        } = this.props,
        { playing: l, fullscreen: o } = this.state,
        d = this.getWidth(),
        c = this.getHeight();
      return r
        ? (0, i.jsx)(I.A, {
            alt: e,
            className: H.Ki,
            controls: !1,
            height: c,
            poster: n,
            width: d,
            responsive: a && !o,
            mediaLayoutType: s,
            playsInline: !0,
            autoPlay: l,
          })
        : (0, i.jsx)(I.A, {
            alt: e,
            className: H.Ki,
            controls: !1,
            playsInline: !0,
            autoPlay: l,
            height: c,
            responsive: a && !o,
            mediaLayoutType: o ? B.dG.STATIC : s,
            onClick: this.handleVideoClick,
            onEnded: this.handleEnded,
            onError: this.handleError,
            onWaiting: this._analytics.onWaiting,
            onSeeking: this._analytics.onSeeking,
            onSeeked: this._analytics.onSeeked,
            onPause: this._analytics.onPause,
            onPlaying: this._analytics.onPlaying,
            onTimeUpdate: this._analytics.onTimeUpdate,
            onLoadedMetadata: this.handleLoaded,
            onProgress: this.handleBuffer,
            poster: n,
            preload: this.state.preload,
            ref: this.handleVideoRef,
            width: d,
            src: t,
          });
    }
    renderAudio() {
      return (0, i.jsx)("audio", {
        className: H.z7,
        controls: !1,
        onClick: this.handleVideoClick,
        onEnded: this.handleEnded,
        onLoadedMetadata: this.handleLoaded,
        onProgress: this.handleBuffer,
        preload: this.state.preload,
        ref: this.mediaRef,
        children: (0, i.jsx)("source", { src: this.props.src }),
      });
    }
    renderControls() {
      let { current: e } = this.mediaRef,
        {
          props: {
            type: t,
            autoPlay: n,
            playable: r = !0,
            onVolumeShow: a,
            onVolumeHide: s,
            onControlsHide: l,
            onControlsShow: o,
          },
          state: {
            buffers: d,
            currentTime: c,
            duration: u,
            hasClickedPlay: _,
            hideControls: E,
            muted: A,
            playing: h,
            fullscreen: f,
            volume: I,
            dragging: p,
          },
        } = this,
        T = this.getWidth();
      return _ || n || t === K.AUDIO
        ? (0, i.jsx)(Z, {
            buffers: d,
            currentTime: c,
            duration: u,
            volume: (0, L.M)(I, 1),
            hide: t === K.VIDEO && E,
            muted: A,
            autoPlay: n,
            onDrag: this.handleDrag,
            onDragEnd: this.handleDragEnd,
            onDragStart: this.handleDragStart,
            onPause: () => this.setPlay(!1),
            onPlay: () => this.setPlay(!0),
            onToggleMuted: this.toggleMuted,
            onVolumeShow: a,
            onVolumeHide: s,
            onControlsShow: o,
            onControlsHide: l,
            playing: h,
            dragging: p,
            type: t,
            ref: this.controlsRef,
            width: f ? window.screen.width : T,
            disabled: !r,
            children:
              t === K.VIDEO && !1 !== this.props.allowFullScreen
                ? (0, i.jsx)(g.A, {
                    "aria-label": M.intl.string(M.t["2nM3Pk"]),
                    className: H.CY,
                    iconClassName: H.pd,
                    guestWindow: window,
                    onClick: this.toggleFullscreen,
                    node: (0, y.qf)(e?.parentNode, e),
                  })
                : null,
          })
        : (0, i.jsx)(U, { onPlay: this.handleVideoClick, inactive: !r });
    }
    renderMetadata() {
      let { fileName: e, fileSize: t, src: n, type: r, playable: a, mimeType: s } = this.props;
      return null == e || null == t
        ? null
        : r === K.AUDIO
          ? (0, i.jsx)(q, {
              fileName: e,
              fileSize: t,
              src: n,
              disabled: !a,
              mimeType: s,
              hideDownloadButton: !0,
            })
          : null;
    }
    renderPlayPausePop() {
      return (0, i.jsx)(Q, { ref: this.playPausePopRef });
    }
    getMediaStyle() {
      let { responsive: e, type: t, height: n } = this.props,
        { fullscreen: i } = this.state,
        r = this.getWidth();
      return i
        ? $
        : t === K.AUDIO
          ? { width: void 0, height: "auto" }
          : e
            ? void 0
            : { width: r, height: n };
    }
    render() {
      let {
          height: e,
          type: t,
          src: n,
          forceExternal: r,
          className: a,
          renderLinkComponent: l,
          responsive: o,
          mediaLayoutType: d,
          renderOverlayContent: c,
        } = this.props,
        { fullscreen: u, hideControls: _, playing: E } = this.state,
        A = H.bQ;
      if ((t === K.AUDIO ? (A = H._X) : _ ? (A = H.CX) : E && (A = H.sw), r && t === K.VIDEO)) {
        let t = this.getWidth();
        return (0, i.jsxs)("div", {
          className: s()(A, { [H.mE]: d === B.dG.MOSAIC }),
          style: o ? void 0 : { width: t, height: e },
          onKeyDown: this.handleKeyDown,
          tabIndex: 0,
          children: [
            this.renderMetadata(),
            this.renderVideo(),
            (0, i.jsx)("div", {
              className: H.s4,
              children: (0, i.jsx)(w.A, {
                className: H.__invalid_playButton,
                externalURL: n,
                renderLinkComponent: l,
              }),
            }),
          ],
        });
      }
      return (0, i.jsx)("div", {
        ref: this.containerRef,
        className: s()(A, H.mr, a, { [H.mE]: d === B.dG.MOSAIC }),
        "data-fullscreen": u,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onMouseMove: E ? this.handleMouseMove : void 0,
        onKeyDown: this.handleKeyDown,
        tabIndex: 0,
        style: this.getMediaStyle(),
        children: (0, i.jsxs)(h.xp, {
          containerRef: this.containerRef,
          children: [
            this.renderMetadata(),
            t === K.AUDIO ? this.renderAudio() : this.renderVideo(),
            (0, i.jsx)(f.N, {
              theme: F.NJ8.ONYX,
              children: (e) => (0, i.jsx)("div", { className: e, children: this.renderControls() }),
            }),
            t === K.VIDEO ? this.renderPlayPausePop() : null,
            null != c
              ? (0, i.jsx)("div", { className: s()({ [H.eM]: E || u }), children: c() })
              : null,
            t === K.VIDEO && this.state.showStats && null != this.state.videoStats
              ? (0, i.jsx)(x.VideoStatsOverlay, {
                  stats: this.state.videoStats,
                  onClose: this.toggleStats,
                })
              : null,
          ],
        }),
      });
    }
    checkVideoDecodability() {
      let { current: e } = this.mediaRef;
      if (null == e || !(0, c.vq)(e, HTMLVideoElement)) return;
      if (this.props.type !== K.VIDEO) {
        this._analytics.metadata.hasValidFrame = !0;
        return;
      }
      if (null != this._analytics.metadata.hasValidFrame) return;
      let t = e.videoHeight,
        n = e.currentTime,
        i = e.readyState;
      if (0 === t && i >= 2)
        return void setTimeout(() => {
          if (null == e) return;
          let t = e.videoHeight,
            i = e.currentTime;
          if (0 === t && i > n + 0.5) {
            this._analytics.metadata.hasValidFrame = !1;
            return;
          }
          if (t > 0) {
            this._analytics.metadata.hasValidFrame = !0;
            return;
          }
        }, 1500);
      if (t > 0) {
        this._analytics.metadata.hasValidFrame = !0;
        return;
      }
    }
  }
  let en = et;
}
