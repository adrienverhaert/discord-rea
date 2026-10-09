/* Recovered shipped factory. Module 744682.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 833918..836017
 * Raw property SHA-256: 0f8a7ca81770bcdd73f50a5f7365b22dcc50dca5a146154417a6f40d8f65e639
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(480664),
    o = n.n(l),
    d = n(844222),
    c = n(460890),
    u = n(260612),
    _ = n(964486),
    E = n(354328),
    A = n(162118);
  function h(e) {
    let {
        color: t,
        useLottieDefaultColors: a,
        src: l,
        size: h = "md",
        width: f,
        height: I,
        className: p,
        initialAnimation: T,
        initialFrame: m,
        markers: g,
        onBeforeDismount: S,
        ref: N,
      } = e,
      [C, O] = r.useState(null),
      R = r.useRef(null),
      L = r.useRef(null),
      y = r.useRef(null),
      D = "custom" === h ? { width: f, height: I } : (0, u.J)(h),
      v = !(0, E.A)("lottie_hover_multiple_loop"),
      b = r.useContext(d.C).reducedMotion.enabled,
      M = (0, c.G9)().isMainWindowVisible?.() ?? !0,
      P = b || !M,
      U = r.useRef(T);
    return (
      (0, _.l0)(() => {
        S?.({ finalFrame: y.current?.currentFrame ?? null });
      }),
      r.useImperativeHandle(
        N,
        () => ({
          play: (e) => {
            if (null == y.current) return;
            let t = null == L.current;
            if (((L.current = e), P)) {
              let t = g[e];
              (y.current.resetSegments(!0),
                y.current.setSegment(t.start + t.duration, t.start + t.duration),
                y.current.stop());
            } else {
              (y.current.setLoop(!v && e.includes("hover")), y.current.resetSegments(!0));
              let n =
                t && null != m && m >= g[e].start && m <= g[e].start + g[e].duration
                  ? m
                  : g[e].start;
              y.current.playSegments([n, g[e].start + g[e].duration], !0);
            }
          },
          stop: () => {
            if (null == y.current || P) return;
          },
          stopIfPlaying: (e) => {
            null == y.current ||
              P ||
              (L.current === e &&
                (y.current.resetSegments(!0),
                y.current.setSegment(g[e].start, g[e].start),
                y.current.stop()));
          },
          getDuration: (e) => (null == y.current ? null : y.current.getDuration(e)),
          getCurrentFrame: () => (null == y.current ? null : y.current.currentFrame),
        }),
        [P, v, g, m],
      ),
      r.useEffect(() => {
        null == C && l().then((e) => O(e.default));
      }, [C, l]),
      r.useEffect(
        () => (
          n
            .e("996382")
            .then(n.t.bind(n, 883885, 23))
            .then((e) => {
              let t,
                { default: n } = e;
              if (null == R.current) return;
              let i = 1 === Object.keys(g).length ? Object.values(g)[0].name : void 0,
                r = L.current ?? U.current ?? i;
              if (null != r && null != g[r]) {
                let e = g[r];
                t = null != e ? [m ?? e.start, e.start + e.duration] : void 0;
              }
              y.current = n.loadAnimation({
                container: R.current,
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                animationData: o()(C),
                initialSegment: t,
              });
            }),
          () => {
            y.current?.destroy();
          }
        ),
        [C, g, m],
      ),
      (0, i.jsx)("div", {
        style: {
          "--__lottieIconColor": null != t && "string" == typeof t ? t : t?.css,
          display: "flex",
          ...D,
        },
        className: s()(A.f, a ? void 0 : A.P, p),
        ref: R,
      })
    );
  }
}
