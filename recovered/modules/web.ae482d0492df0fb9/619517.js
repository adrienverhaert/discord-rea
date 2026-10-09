/* Recovered shipped factory. Module 619517.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5806591..5815240
 * Raw property SHA-256: 8bab1ce04b5244b7119b58bb387fd4e2465e38cbdd6553aa96565dfc9343a97b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => C, P8: () => g, bp: () => m, p4: () => S });
  var i = n(477900),
    r = n(582128),
    a = n(435558),
    s = n(731738),
    l = n(269115),
    o = n(144165),
    d = n(945810),
    c = n(693875),
    u = n(776231),
    _ = n(807393),
    E = n(964404),
    A = n(544180),
    h = n(174459),
    f = n(486020),
    I = n(515718),
    p = n(652215),
    T = n(838541);
  let m = /\.gif($|\?|#)/i,
    g = /\.webp($|\?|#)/i,
    S = /\.avif($|\?|#)/i,
    N = /\.png($|\?|#)/i;
  class C extends r.Component {
    static visibilityObserver = new l.j({ threshold: 0.6 });
    static _lazyLoadTargets = new WeakMap();
    static _lazyLoadIO =
      "u" > typeof IntersectionObserver
        ? new IntersectionObserver(
            (e) => {
              for (let t of e)
                if (t.isIntersecting) {
                  let e = C._lazyLoadTargets.get(t.target);
                  null != e &&
                    (C._lazyLoadIO?.unobserve(t.target),
                    C._lazyLoadTargets.delete(t.target),
                    e._triggerLazyLoad());
                }
            },
            { threshold: 0, rootMargin: "300px" },
          )
        : null;
    static defaultProps = {
      shouldLink: !1,
      autoPlay: !1,
      animated: !1,
      minWidth: 0,
      minHeight: 0,
      shouldRenderAccessory: !0,
      srcIsAnimated: !1,
    };
    static isAnimated(e) {
      let { src: t, original: n, animated: i, srcIsAnimated: r } = e;
      return (
        i ||
        m.test(null != n && "" !== n ? n : t) ||
        (null != r &&
          r &&
          (g.test(null != n && "" !== n ? n : t) || S.test(null != n && "" !== n ? n : t)))
      );
    }
    static isSrcPNG(e) {
      let { src: t } = e;
      return N.test(t);
    }
    static isSrcAVIF(e) {
      let { src: t } = e;
      return S.test(t);
    }
    static getFormatQuality(e) {
      let { src: t, original: n, animated: i, srcIsAnimated: r, freeze: a = !1 } = e,
        s = null,
        l = null;
      return (
        f.QB && (a || !C.isAnimated({ src: t, original: n, animated: i, srcIsAnimated: r }))
          ? ((s = "webp"), (C.isSrcPNG({ src: t }) || C.isSrcAVIF({ src: t })) && (l = "lossless"))
          : a && (s = "png"),
        { format: s, quality: l }
      );
    }
    static preloadImage(e) {
      let {
        src: t,
        dimensions: { maxWidth: n, maxHeight: i, imageWidth: r, imageHeight: a },
        options: { srcIsAnimated: s, original: l, animated: o, sourceMetadata: d, freeze: c },
        callback: _,
      } = e;
      if (1 === r && 1 === a) return;
      let { format: E, quality: A } = C.getFormatQuality({
          src: t,
          original: l,
          animated: o,
          srcIsAnimated: s,
          freeze: c,
        }),
        h = (0, u.AE)({
          src: t,
          width: r,
          height: a,
          maxWidth: n,
          maxHeight: i,
          srcIsAnimated: s,
          format: E,
          quality: A,
        }),
        f = performance.now();
      return (0, u.yt)(h, (e, n) => {
        (C.trackLoadingCompleted({
          error: e,
          imageData: n,
          trigger: "PRELOAD",
          startLoadingTime: f,
          readyState: p.Rv1.READY,
          format: E,
          quality: A,
          imageProps: { src: t, width: r, height: a, sourceMetadata: d, original: l },
        }),
          _?.(e, n));
      });
    }
    static async trackLoadingCompleted(e) {
      let {
        error: t,
        imageData: n,
        trigger: i,
        startLoadingTime: r,
        readyState: a,
        format: l,
        quality: o,
        imageProps: { src: d, height: c, width: u, original: f, sourceMetadata: I },
      } = e;
      if (
        (t && _.A.increment({ name: s.K.IMAGE_LOAD_ERROR }),
        !O.getConfig({ location: "lazy_image" }).enabled)
      )
        return;
      let T = await fetch(n.url).catch(() => void 0),
        m = T?.headers?.get("content-length"),
        g = null != m ? Number(m) : null,
        S = Math.round(performance.now() - r);
      h.default.track(p.HAw.IMAGE_LOADING_COMPLETED, {
        duration_ms: S,
        requested_height: n.height,
        requested_width: n.width,
        height: c,
        width: u,
        original_url: f,
        url: d,
        requested_url: n.url,
        format: l,
        quality: o,
        state: t ? p.Rv1.ERROR : a,
        data_saving_mode: E.Ay.dataSavingMode,
        low_quality_image_mode: E.Ay.dataSavingMode,
        trigger: i,
        size: g,
        message_id: I?.message?.id,
        message_sent_timestamp: I?.message?.timestamp.getTime(),
        connection_type: A.A.getType(),
        effective_connection_speed: A.A.getEffectiveConnectionSpeed(),
        service_provider: A.A.getServiceProvider(),
      });
    }
    state = { readyState: p.Rv1.LOADING, hasMouseOver: !1, hasFocus: !1 };
    startLoadingTime = performance.now();
    _cancellers = new Set();
    _unmounted = !1;
    _imageRef = r.createRef();
    constructor(e) {
      (super(e),
        (0, u.LE)(this.getSrc(this.getRatio(), C.isAnimated(this.props))) &&
          (this.state.readyState = p.Rv1.READY));
    }
    componentDidMount() {
      let { readyState: e } = this.state;
      if (e === p.Rv1.LOADING)
        if (R.getConfig({ location: "LazyImage_componentDidMount" }).enabled) {
          let e = this._imageRef.current;
          null != e && null != C._lazyLoadIO
            ? (C._lazyLoadTargets.set(e, this), C._lazyLoadIO.observe(e))
            : this.loadImage(
                this.getSrc(this.getRatio(), C.isAnimated(this.props)),
                this.handleImageLoad,
              );
        } else
          this.loadImage(
            this.getSrc(this.getRatio(), C.isAnimated(this.props)),
            this.handleImageLoad,
          );
      C.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
      let t = C.isAnimated(this.props);
      C.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
      this._unmounted = !0;
      let e = this._imageRef.current;
      (null != e && (C._lazyLoadIO?.unobserve(e), C._lazyLoadTargets.delete(e)),
        C.isAnimated(this.props) && this.unobserveVisibility(),
        this._cancellers.forEach((e) => e()),
        this._cancellers.clear());
    }
    observeVisibility = () => {
      C.visibilityObserver.observe(this, this._imageRef);
    };
    unobserveVisibility = () => {
      C.visibilityObserver.unobserve(this);
    };
    getSrc(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { src: n, width: i, height: r, maxWidth: a, maxHeight: s, mediaLayoutType: l } = this.props,
        { format: o, quality: d } = C.getFormatQuality({ ...this.props, freeze: t });
      return (0, u.AE)({
        src: n,
        width: i,
        height: r,
        ratio: e,
        maxWidth: l === T.dG.MOSAIC ? a : void 0,
        maxHeight: l === T.dG.MOSAIC ? s : void 0,
        format: o,
        quality: d,
        animated: !t,
        srcIsAnimated: this.props.srcIsAnimated,
      });
    }
    getRatio() {
      let {
        width: e,
        height: t,
        maxWidth: n = 400,
        maxHeight: i = 300,
        mediaLayoutType: r,
        useFullWidth: a,
      } = this.props;
      return r === T.dG.MOSAIC && a
        ? (0, I.V)({ width: e, height: t, maxWidth: n, maxHeight: i })
        : (0, I.U8)({ width: e, height: t, maxWidth: n, maxHeight: i });
    }
    getType() {
      let { mediaLayoutType: e, responsive: t } = this.props;
      return e ?? (t ? T.dG.RESPONSIVE : T.dG.STATIC);
    }
    _triggerLazyLoad() {
      this._unmounted ||
        this.state.readyState !== p.Rv1.LOADING ||
        this.loadImage(
          this.getSrc(this.getRatio(), C.isAnimated(this.props)),
          this.handleImageLoad,
        );
    }
    loadImage(e, t) {
      let { width: n, height: i } = this.props;
      if (((this.startLoadingTime = performance.now()), 1 === n && 1 === i)) return;
      let r = (0, u.yt)(e, (e, n) => {
        (null != r && this._cancellers.delete(r), t?.(e, n));
      });
      null != r && this._cancellers.add(r);
    }
    handleImageLoad = (e, t) => {
      this._unmounted ||
        this.setState({ readyState: e ? p.Rv1.ERROR : p.Rv1.READY }, () => {
          let { format: n, quality: i } = C.getFormatQuality(this.props);
          C.trackLoadingCompleted({
            error: e,
            imageData: t,
            trigger: this.props.trigger ?? "LOAD",
            startLoadingTime: this.startLoadingTime,
            readyState: this.state.readyState,
            format: n,
            quality: i,
            imageProps: this.props,
          });
        });
    };
    onMouseEnter = (e) => {
      C.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
      let { onMouseEnter: t } = this.props;
      t?.(e);
    };
    onMouseLeave = (e) => {
      C.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
      let { onMouseLeave: t } = this.props;
      t?.(e);
    };
    onFocus = (e) => {
      C.isAnimated(this.props) && this.setState({ hasFocus: !0 });
    };
    onBlur = (e) => {
      let { currentTarget: t, relatedTarget: n } = e;
      t.contains(n) || this.setState({ hasFocus: !1 });
    };
    onClick = (e) => {
      let { onZoom: t, onClick: n } = this.props;
      null != n
        ? n(e)
        : null != t &&
          (e.preventDefault(),
          t(e, { zoomThumbnailPlaceholder: this.getSrc(this.getRatio()), trigger: "CLICK" }));
    };
    renderAccessory = () => {
      let { hasMouseOver: e, hasFocus: t } = this.state,
        n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
      return this.props.shouldRenderAccessory ? (e || t ? n : (0, i.jsx)(c.A, {})) : null;
    };
    render() {
      let {
          alt: e,
          zoomThumbnailPlaceholder: t,
          onZoom: n,
          shouldLink: r,
          onContextMenu: s,
          autoPlay: l,
          original: d,
          className: c,
          imageClassName: u,
          children: _,
          animated: E,
          shouldAnimate: A,
          freeze: h,
          width: f,
          height: I,
          minWidth: T,
          minHeight: m,
          maxWidth: g,
          maxHeight: S,
          onClick: N,
          renderAccessory: O,
          tabIndex: L,
          limitResponsiveWidth: y,
          useFullWidth: D,
          placeholder: v,
          placeholderVersion: b,
          dataSafeSrc: M,
          srcIsAnimated: P,
        } = this.props,
        { readyState: U, hasMouseOver: w, hasFocus: G } = this.state,
        x = null != n,
        k = this.getRatio(),
        F = (0, a.clamp)(Math.round(f * k), T ?? 0, g ?? 1 / 0),
        B = (0, a.clamp)(Math.round(I * k), m ?? 0, S ?? 1 / 0),
        V = R.getConfig({ location: "LazyImage_render" }).enabled,
        H = {
          alt: e,
          readyState: U,
          onContextMenu: s ?? void 0,
          zoomable: x,
          className: c,
          imageClassName: u,
          minWidth: T,
          minHeight: m,
          mediaLayoutType: this.getType(),
          limitResponsiveWidth: y,
          useFullWidth: D,
          tabIndex: L,
          width: F,
          height: B,
          src: "",
          placeholder: v,
          placeholderVersion: b,
          dataSafeSrc: M,
          srcIsAnimated: P,
          children:
            null != _
              ? (e) => {
                  let { src: t, size: n, alt: i, mediaLayoutType: r } = e;
                  return _({ src: t, size: n, alt: i, mediaLayoutType: r });
                }
              : void 0,
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
        };
      if (1 === H.width && 1 === H.height) return null;
      switch (
        ((x || null != N) && (H.onClick = this.onClick),
        r && (H.original = null != d && "" !== d ? d : H.src),
        U)
      ) {
        case p.Rv1.LOADING:
          null != t && (H.src = t);
          break;
        case p.Rv1.READY:
          if (C.isAnimated(this.props)) {
            H.onMouseLeave = this.onMouseLeave;
            let e = (l || w || G) && (null == A || A) && C.visibilityObserver.isVisible(this);
            (e
              ? ((H.src = this.getSrc(k, h)), (H.renderAccessory = O))
              : ((H.src = this.getSrc(k, h || !E || !l)),
                (H.renderAccessory = this.renderAccessory)),
              null != _ &&
                (H.children = (t) => {
                  let { src: n, size: i, alt: r, mediaLayoutType: a } = t;
                  return _({ src: n, size: i, animating: e, alt: r, mediaLayoutType: a });
                }));
          } else H.src = this.getSrc(k);
      }
      return (0, i.jsx)(o._, { disableLoadingSpinner: V, ref: this._imageRef, ...H });
    }
  }
  let O = (0, d.mj)({
      name: "2026-03-image-load-metrics",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 0: { enabled: !1 }, 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    R = (0, d.mj)({
      name: "2026-02-lazy-load-all-images",
      kind: "user",
      defaultConfig: { enabled: !1 },
      variations: { 1: { enabled: !0 } },
    });
}
