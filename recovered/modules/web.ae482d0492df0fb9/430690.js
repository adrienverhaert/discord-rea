/* Recovered shipped factory. Module 430690.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 910933..913609
 * Raw property SHA-256: 2c9e617eb01b04794e66e92adf807cfc1101e2d839c24a023654593727027324
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => g, t: () => S });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(562708),
    d = n(66455),
    c = n(819169),
    u = n(607399),
    _ = n(844222),
    E = n(717421),
    A = n(866323),
    h = n(765671),
    f = n(989395),
    I = n(688810),
    p = n(90558);
  let T = { mass: 1, tension: 300, friction: 28, clamp: !0 };
  function m(e, t) {
    return (n) => {
      if (0 === n) return "auto";
      let i = "forwards" === t.current,
        r = n > 0,
        a = !1;
      return (
        r && i && "left" === e && (a = !0),
        r && !i && "right" === e && (a = !0),
        !r && i && "right" === e && (a = !0),
        r || i || "left" !== e || (a = !0),
        a ? `${100 * Math.abs(n)}%` : "auto"
      );
    };
  }
  function g(e) {
    return null;
  }
  function S(e) {
    var t, n;
    let {
        contentDisplay: a,
        fadeInOut: g = !1,
        disableDefaultTransformStyling: S,
        slideWrapperClassName: N,
        ...C
      } = e,
      O = {},
      { analyticsLocations: R } = (0, I.Ay)();
    r.Children.forEach(C.children, (e, t) => {
      O[e.props.id] = {
        children: e.props.children,
        impressionName: e.props.impressionName,
        impressionProperties: e.props.impressionProperties,
        index: t,
      };
    });
    let L = C.activeSlide,
      y = (0, c.A)(C.activeSlide),
      D =
        C.directionOverride ??
        ((t = null != y ? O[y] : null),
        (n = O[L]),
        null == t ? null : t.index > n.index ? "backwards" : t.index < n.index ? "forwards" : null),
      { reducedMotion: v } = r.useContext(_.C),
      b = r.useContext(f.A),
      M = O[L].impressionName,
      P = { ...O[L].impressionProperties, location_stack: R };
    b({ type: o.ImpressionTypes.MODAL, name: M, properties: P, _stackContext: { isSlide: !0 } });
    let { ref: U, width: w = 0, height: G = 0 } = (0, h.Ay)(L),
      x = { ...T, ...C.springConfig, ...(v.enabled ? { clamp: !0 } : null) },
      k = (0, E.z)(
        { width: C.width ?? w, height: G, config: x },
        null == y ? "animate-never" : "respect-motion-settings",
      ),
      F = (0, A.p)(
        L,
        {
          value: 0,
          from: { value: 1 },
          enter: { value: 0 },
          leave: { value: -1 },
          config: x,
          onRest: (e, t) => {
            let { item: n } = t;
            n === L && null != C.onSlideReady && C.onSlideReady(n);
          },
        },
        null == y ? "animate-never" : "respect-motion-settings",
      ),
      B = (0, d.A)(D),
      { width: V, centered: H = !0 } = C,
      j =
        u.Fr && !C.shouldUseMediaQueriesForSizing
          ? "100%"
          : k.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
      W = u.Fr && !C.shouldUseMediaQueriesForSizing ? "100%" : k.height.to((e) => Math.round(e)),
      Y = r.useMemo(
        () =>
          u.Fr
            ? {}
            : H
              ? { transform: S ? void 0 : "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
              : { transform: S ? void 0 : "scale(1.0, 1.0)" },
        [H, S],
      ),
      K = u.Fr ? {} : { overflow: C.overflow ?? "hidden" },
      $ = r.useMemo(
        () => ({ width: u.Fr && !C.shouldUseMediaQueriesForSizing ? "100%" : V }),
        [C.shouldUseMediaQueriesForSizing, V],
      );
    return (0, i.jsx)(l.animated.div, {
      style: { position: "relative", minWidth: j, minHeight: W, ...K },
      children: F((e, t, n) => {
        let { key: r } = n,
          o = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
        return (0, i.jsx)(
          l.animated.div,
          {
            ref: t === L ? U : null,
            style: {
              position: "absolute",
              display: a,
              flexDirection: "column",
              backfaceVisibility: "hidden",
              ...$,
              ...Y,
              ...(v.enabled
                ? o
                : {
                    left: e.value.to(m("left", B)),
                    right: e.value.to(m("right", B)),
                    ...(g && o),
                  }),
            },
            className: s()({ [p.o]: C.shouldUseMediaQueriesForSizing }, N),
            children: O[t].children,
          },
          r,
        );
      }),
    });
  }
}
