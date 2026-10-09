/* Recovered shipped factory. Module 224640.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10362003..10363198
 * Raw property SHA-256: 505ef77f85fd08704e12309a71094feb85d01b73792ef1345f4eee4ca6ecd970
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(202091),
    o = n(113325),
    d = n(559106),
    c = n(707554),
    u = n(22856),
    _ = n(150591),
    E = n(815390),
    A = n(592551);
  function h(e) {
    let {
        transitionState: t,
        animationVariant: n = "default",
        size: a = "md",
        paddingSize: h = "sm",
        fullScreenOnMobile: f = !0,
        returnRef: I,
        role: p = "dialog",
        "aria-label": T,
        dismissable: m = !0,
        maxHeight: g = "default",
        onClose: S,
        contentOutsideContainer: N,
        trackingProps: C,
        children: O,
      } = e,
      R = r.useId(),
      L = r.useMemo(
        () => ({ id: R, headingId: `heading-${R}`, onClose: S, dismissable: m }),
        [m, R, S],
      ),
      y = (0, _.kS)(t, n),
      D = r.useRef(null);
    return (0, i.jsx)(u.V.Provider, {
      value: L,
      children: (0, i.jsx)(o.lG, {
        id: R,
        role: p,
        "aria-label": T,
        "aria-labelledby": null != T ? void 0 : L.headingId,
        returnRef: I,
        trackingProps: C,
        trackingComponentName: "Modal",
        children: (0, i.jsx)(c.F, {
          forceLevel: 1,
          children: (0, i.jsxs)("div", {
            className: s()(A.outerContainer, { [A.fullScreenOnMobile]: f }),
            children: [
              N,
              (0, i.jsx)(l.animated.div, {
                ref: D,
                "data-mana-component": "modal",
                className: s()(A.container, A[`size-${a}`], A[`padding-size-${h}`], {
                  [A.maxHeightViewport]: "viewport" === g,
                  [A.exiting]: t === E.i.EXITING || t === E.i.EXITED,
                }),
                style: y,
                children: (0, i.jsx)(d.xp, { containerRef: D, children: O }),
              }),
            ],
          }),
        }),
      }),
    });
  }
}
