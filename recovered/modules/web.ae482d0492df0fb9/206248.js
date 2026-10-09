/* Recovered shipped factory. Module 206248.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 961523..963543
 * Raw property SHA-256: 0e8ecb8e8fe5d5630edb193c8f020d05f2e6b9724679ad7e76b2c2ff9fe36527
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { H: () => S });
  var i = n(477900),
    r = n(582128),
    a = n(941861),
    s = n(844222),
    l = n(460890),
    o = n(978495),
    d = n(353795),
    c = n(80687),
    u = n(607470),
    _ = n(256905),
    E = n(273875),
    A = n(208756),
    h = n(798618),
    f = n(627330),
    I = n(478542),
    p = n(818348),
    T = n(314341),
    m = n(660183),
    g = n(594024);
  function S(e) {
    let {
        title: t,
        body: n,
        assetUrl: S,
        previewUrl: N = S,
        disableMediaViewer: C = !1,
        action: O,
        caretConfig: R = { align: "center" },
        badge: L,
        textLink: y,
        onWatchVideo: D,
        onRequestClose: v,
        popoverRef: b,
        position: M,
        ...P
      } = e,
      { reducedMotion: U } = r.useContext(s.C),
      w = (0, a.Rs)(),
      G = (0, l.G9)().isWindowFocused?.() ?? w,
      x = r.useRef(null),
      k = (0, o.RJ)(N),
      F = (0, o.gA)(N),
      B = r.useCallback(
        () => ({
          type: "VIDEO",
          url: S,
          proxyUrl: S,
          alt: t,
          width: 1280,
          height: 720,
          className: g.$_,
        }),
        [S, t],
      );
    r.useEffect(() => {
      null != x.current && (!U.enabled && G ? x.current?.play().catch(p.tE) : x.current?.pause());
    }, [G, U.enabled]);
    let V = r.useCallback(() => {
        (null !== x.current && x.current.pause(), v?.());
      }, [v]),
      H = r.useCallback(() => {
        (null !== x.current && x.current.pause(), v?.());
      }, [v]),
      j = r.useCallback(() => {
        null !== x.current && x.current.pause();
        let e = B();
        ((0, _.R)({
          items: [e],
          startingIndex: 0,
          location: "VideoPopover",
          shouldHideMediaOptions: !0,
        }),
          v?.(),
          D?.());
      }, [B, D, v]),
      W = (0, i.jsxs)(i.Fragment, {
        children: [
          k || F
            ? (0, i.jsx)(d.v, { type: "image", src: N })
            : (0, i.jsx)(u.A, {
                ref: x,
                src: N,
                width: 232,
                height: 131,
                autoPlay: !U.enabled && G,
                muted: !0,
                loop: !0,
                playsInline: !0,
                controls: !1,
                preload: "metadata",
              }),
          !C &&
            (0, i.jsx)("div", {
              className: g.Rr,
              children: (0, i.jsx)(c.D, {
                playing: !1,
                size: "sm",
                "aria-label": m.intl.string(T.default.YpT3kk),
                onClick: j,
              }),
            }),
        ],
      }),
      Y = {
        targetElementRef: P.targetElementRef,
        shouldShow: P.shouldShow,
        scrollBehavior: P.scrollBehavior,
        position: M,
        onRequestClose: V,
        hasVideo: !0,
        caretConfig: R,
        ...("edge" === P.alignmentStrategy
          ? { alignmentStrategy: "edge", align: P.align }
          : { alignmentStrategy: "trigger-center" }),
      };
    return (0, i.jsx)(E.x, {
      ...Y,
      children: (0, i.jsxs)("div", {
        ref: b,
        children: [
          (0, i.jsx)(I.p, { onClick: H }),
          (0, i.jsx)(h.F, {}),
          (0, i.jsx)("div", { className: g.s, children: W }),
          (0, i.jsx)(f.D, { title: t, body: n, badge: L, textLink: y }),
          null != O ? (0, i.jsx)(A.Z, { actions: [O] }) : null,
        ],
      }),
    });
  }
}
