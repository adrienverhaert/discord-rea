/* Recovered shipped factory. Module 273875.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 952507..956578
 * Raw property SHA-256: 4dd5093e4a43b0dfb6c2180e44626ef37dd9030b4dcae9179eebd47145818c7c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { x: () => N, e: () => g });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(113325),
    d = n(315629),
    c = n(17928),
    u = n(453903),
    _ = n(765671),
    E = n(186111),
    A = n(795127),
    h = n(844222),
    f = n(866323),
    I = n(555115),
    p = n(231723),
    T = n(818348),
    m = n(489387);
  let g = r.createContext(null),
    S = T.FX;
  function N(e) {
    let {
        children: t,
        targetElementRef: n,
        shouldShow: a = !0,
        onRequestClose: T,
        position: N = "top",
        align: C,
        alignmentStrategy: O = "trigger-center",
        caretConfig: R,
        hasVideo: L = !1,
        gradientColor: y,
        gradientOffsetBottom: D = 0.4,
        onPositionChange: v,
        onNudgeChange: b,
        scrollBehavior: M = "sticky",
        modal: P = !1,
        returnRef: U,
        experimental_ignoreModalClicks: w = !0,
        closeOnClickOutside: G = !1,
      } = e,
      { transitionState: x } = r.useContext(p.CP),
      k = null != x && x !== p.ip.ENTERED,
      [F, B] = r.useState(a),
      [V, H] = r.useState(N),
      j = r.useRef(N),
      W = r.useRef(0),
      { ref: Y, width: K, height: $ } = (0, _.Ay)(),
      z = (0, c.bG)([E.A], () => E.A.getLayers()),
      X = z[z.length - 1] ?? "base",
      Z = r.useRef(v);
    r.useEffect(() => {
      Z.current = v;
    }, [v]);
    let q = r.useCallback((e) => {
        null != e && e !== j.current && ((j.current = e), H(e), Z.current?.(e));
      }, []),
      Q = r.useMemo(
        () =>
          null == n.current ||
          (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === X,
        [n, X],
      );
    (r.useEffect(() => {
      k ? B(!1) : Q && a ? B(!0) : Q || B(!1);
    }, [Q, a, k]),
      r.useEffect(() => {
        q(N);
      }, [N, q]));
    let J = (function (e) {
        let { shouldShow: t, caretPosition: n, onExitComplete: i } = e,
          { reducedMotion: a } = r.useContext(h.C),
          { config: s, ...l } = (function (e, t) {
            let n = { opacity: 0, transform: "" },
              i = { opacity: 0, transform: "" };
            if (t)
              return {
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 150 },
              };
            switch (e) {
              case "top":
                ((n.transform = "translate3d(0, -10px, 0)"),
                  (i.transform = "translate3d(0, -10px, 0)"));
                break;
              case "bottom":
                ((n.transform = "translate3d(0, 10px, 0)"),
                  (i.transform = "translate3d(0, 10px, 0)"));
                break;
              case "left":
                ((n.transform = "translate3d(-10px, 0, 0)"),
                  (i.transform = "translate3d(-10px, 0, 0)"));
                break;
              case "right":
                ((n.transform = "translate3d(10px, 0, 0)"),
                  (i.transform = "translate3d(10px, 0, 0)"));
            }
            return {
              from: n,
              enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
              leave: i,
              config: void 0,
            };
          })(n, a.enabled);
        return (0, f.p)(
          t,
          {
            ...l,
            config: s ?? ((e, n) => (t ? I.n : I.t)),
            onRest: () => {
              t || null == i || i();
            },
          },
          "animate-always",
        );
      })({
        shouldShow: a && !k,
        caretPosition: (0, A.g)(V),
        onExitComplete: function () {
          B(!1);
        },
      }),
      ee = r.useMemo(() => {
        if ("edge" === O && null != C) {
          let e = "top" === V || "bottom" === V,
            t = "left" === V || "right" === V;
          if (e) {
            if ("left" === C || "center" === C || "right" === C) return C;
          } else if (t && ("top" === C || "center" === C || "bottom" === C)) return C;
        }
        return "center";
      }, [O, C, V]),
      et = r.useMemo(() => {
        if ("edge" !== O)
          return (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
              n = arguments.length > 2 ? arguments[2] : void 0,
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            if ("center" === e || "custom" === e) return 0;
            let r = "left" === t || "right" === t,
              a = r ? i : (n ?? 240);
            if (0 === a) return 0;
            let s = a / 2 - (r ? 22 : 20);
            switch (e) {
              case "start":
                return s;
              case "end":
                return -s;
              default:
                return 0;
            }
          })(R?.align ?? "center", V, K, $);
      }, [O, R, V, K, $]),
      en = r.useMemo(() => ({ position: V, caretConfig: R ?? { align: "center" } }), [V, R]);
    return (0, i.jsx)(u.$, {
      targetElementRef: n,
      shouldShow: F && !k,
      onRequestClose: T,
      position: V,
      align: ee,
      spacing: 14,
      offset: et,
      layerContext: void 0,
      positionKey: null != et ? `${V}-${et}` : void 0,
      popoutKey: void 0,
      fixed: !1,
      autoInvert: !0,
      nudgeAlignIntoViewport: "top" === V || "bottom" === V,
      closeOnClickOutside: G,
      ignoreModalClicks: w,
      scrollBehavior: M,
      renderPopout: function (e) {
        let { setPopoutRef: n, position: r, nudge: a, ...c } = e;
        return (
          q(r),
          a !== W.current && ((W.current = a), b?.(a)),
          J((e, r) => {
            if (!r) return null;
            let u = (0, i.jsx)(o.lG, {
                ...c,
                setDialogRef: n,
                modal: P,
                className: s()(null != y ? m.popoverContentWithGradient : m.popover, {
                  [m["popover--video"]]: L,
                }),
                returnRef: U,
                children: (0, i.jsx)(g.Provider, { value: en, children: t }),
              }),
              _ = {
                ...e,
                "--custom-caret-edge-offset-horizontal": "20px",
                "--custom-caret-edge-offset-vertical": "22px",
                "--custom-caret-edge-offset-horizontal-nudge": `${a}px`,
                "--custom-popover-width": "240px",
              };
            return (0, i.jsx)(l.animated.div, {
              ref: Y,
              "data-mana-component": "popover",
              style: _,
              children:
                null != y
                  ? (0, i.jsx)(d.h, {
                      offsetBottom: D,
                      color: y,
                      className: m.popoverGradientWrapper,
                      children: u,
                    })
                  : u,
            });
          })
        );
      },
      children: S,
    });
  }
}
