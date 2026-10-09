/* Recovered shipped factory. Module 642481.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6871889..6873819
 * Raw property SHA-256: 70ab48393e0cc99fa720b996c2fa07d1fad82ad303d9a74783aef9af4db5491e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => p, j: () => I });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(273875),
    o = n(208756),
    d = n(798618),
    c = n(916845),
    u = n(297264),
    _ = n(834730),
    E = n(353795),
    A = n(37537),
    h = n(239027);
  function f(e) {
    let { title: t, body: n } = e,
      r = (0, A.c)("PremiumPopoverHeader");
    return (0, i.jsxs)("div", {
      className: h.header,
      children: [
        (0, i.jsx)(u.D, {
          variant: r ? "nitro-sm" : "heading-md/semibold",
          className: r ? h.titleRefresh : h.title,
          children: t,
        }),
        (0, i.jsx)("div", {
          className: h.headerBody,
          children: (0, i.jsx)(_.E, { variant: "text-sm/normal", color: "none", children: n }),
        }),
      ],
    });
  }
  function I(e) {
    let {
        title: t,
        body: n,
        graphic: a,
        size: u = "md",
        actions: _,
        gradientColor: A,
        onRequestClose: I,
        position: p,
        caretConfig: T,
        scrollBehavior: m,
        showCloseButton: g = !0,
        isCaretHoverable: S = !1,
        shouldTrapFocus: N = !1,
        returnRef: C,
        onNudgeChange: O,
        ...R
      } = e,
      [L, y] = r.useState(p ?? "top");
    r.useEffect(() => {
      null != p && y(p);
    }, [p]);
    let D = r.useMemo(() => ({ align: T?.align ?? "center", customOffset: T?.customOffset }), [T]),
      v = r.useCallback(() => {
        I?.();
      }, [I]),
      b = r.useCallback(
        (e) => {
          I?.(e);
        },
        [I],
      ),
      M = r.useCallback((e) => {
        y(e);
      }, []),
      P = S ? h.caretHoverable : void 0,
      U = {
        targetElementRef: R.targetElementRef,
        shouldShow: R.shouldShow,
        hasVideo: R.hasVideo,
        position: L,
        caretConfig: D,
        onRequestClose: v,
        gradientColor: A,
        onPositionChange: M,
        onNudgeChange: O,
        scrollBehavior: m,
        modal: N,
        returnRef: C,
        gradientOffsetBottom: 0,
        experimental_ignoreModalClicks: !1,
        ...("edge" === R.alignmentStrategy
          ? { alignmentStrategy: "edge", align: R.align }
          : { alignmentStrategy: "trigger-center" }),
      };
    return (0, i.jsx)(l.x, {
      ...U,
      children: (0, i.jsxs)("div", {
        "data-mana-component": "popover",
        children: [
          g && (0, i.jsx)(c.q, { onClick: b, variant: null != A ? "color-mix" : void 0 }),
          null != a &&
            (0, i.jsx)("div", {
              className: s()(h.graphic, { [h[`graphic--${u}`]]: null != u }),
              children: (0, i.jsx)(E.v, {
                ...a,
                aspectRatio: a.aspectRatio ?? ("sm" === u ? "2/1" : "16/9"),
              }),
            }),
          (0, i.jsx)(f, { title: t, body: n }),
          null != _ && _.length > 0
            ? (0, i.jsx)(o.Z, { actions: _, className: h.actionBar })
            : null,
          null != D && (0, i.jsx)(d.F, { className: P }),
        ],
      }),
    });
  }
  let p = I;
}
