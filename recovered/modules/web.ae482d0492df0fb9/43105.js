/* Recovered shipped factory. Module 43105.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 956579..957760
 * Raw property SHA-256: 4eec3d96ce335eb6c3282d13f8be6019377ee77f9d72a3d28cdf7b18f1b8472f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A, h: () => h });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(353795),
    o = n(273875),
    d = n(208756),
    c = n(798618),
    u = n(916845),
    _ = n(627330),
    E = n(489387);
  function A(e) {
    let {
        title: t,
        body: n,
        badge: a,
        graphic: A,
        size: h = "md",
        actions: f,
        textLink: I,
        gradientColor: p,
        onRequestClose: T,
        popoverRef: m,
        position: g,
        caretConfig: S,
        scrollBehavior: N,
        ...C
      } = e,
      O = r.useCallback(
        (e, t) => {
          T?.(t);
        },
        [T],
      ),
      R = r.useCallback(() => {
        T?.("user:explicit");
      }, [T]),
      L = {
        targetElementRef: C.targetElementRef,
        shouldShow: C.shouldShow,
        hasVideo: C.hasVideo,
        position: g,
        caretConfig: S,
        onRequestClose: O,
        gradientColor: p,
        scrollBehavior: N,
        ...("edge" === C.alignmentStrategy
          ? { alignmentStrategy: "edge", align: C.align }
          : { alignmentStrategy: "trigger-center" }),
      };
    return (0, i.jsx)(o.x, {
      ...L,
      children: (0, i.jsxs)("div", {
        ref: m,
        "data-mana-component": "popover",
        children: [
          (0, i.jsx)(u.q, { onClick: R, variant: null != p ? "color-mix" : void 0 }),
          null != A &&
            (0, i.jsx)("div", {
              className: s()(E.graphic, { [E[`graphic--${h}`]]: null != h }),
              children: (0, i.jsx)(l.v, {
                ...A,
                aspectRatio: A.aspectRatio ?? ("sm" === h ? "2/1" : "16/9"),
              }),
            }),
          (0, i.jsx)(_.D, { title: t, body: n, badge: a, textLink: I }),
          null != f && f.length > 0 ? (0, i.jsx)(d.Z, { actions: f }) : null,
          (0, i.jsx)(c.F, {}),
        ],
      }),
    });
  }
  let h = A;
}
