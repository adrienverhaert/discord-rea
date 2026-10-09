/* Recovered shipped factory. Module 683063.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10476171..10477865
 * Raw property SHA-256: dc9da47c3a6ab5b2a6415888eebc3b12cbae7d92683e8fd6a8bc2d6682ed6d9d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { u: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(353795),
    o = n(140735),
    d = n(834730),
    c = n(255434),
    u = n(747556),
    _ = n(710778),
    E = n(280336),
    A = n(194981),
    h = n(8777);
  function f(e) {
    let {
        children: t,
        title: n,
        body: a,
        asset: f,
        assetSize: I = 48,
        padding: p = "default",
        asContainer: T = !1,
        element: m = "span",
        position: g = "top",
        align: S = "center",
        spacing: N,
        caretConfig: C,
        targetElementRef: O,
        anchorRef: R,
        positionKey: L,
        ariaHidden: y = !1,
        lineClamp: D,
        ...v
      } = e,
      [b, M] = r.useState(null);
    r.useLayoutEffect(() => {
      null != R && M(R.current);
    }, [R]);
    let P = r.useCallback(
        (e) => {
          (null == R && M(e), (0, _.cZ)(O, e));
        },
        [O, R],
      ),
      {
        tooltipId: U,
        isVisible: w,
        targetElementRef: G,
        trigger: x,
      } = (0, A.D)({
        children: t,
        targetElementRef: P,
        asContainer: T,
        containerTag: m,
        ariaHidden: y,
        ...v,
      }),
      k = null != n && ("string" != typeof n || "" !== n),
      F = null != f && !r.isValidElement(f),
      B = r.useMemo(
        () =>
          (0, i.jsxs)("div", {
            className: s()(h.jk, { [h.eb]: null == f, [h.Sx]: "lg" === p }),
            children: [
              null != f &&
                (0, i.jsx)("div", {
                  className: h.s,
                  style: { width: I },
                  children: F ? (0, i.jsx)(l.v, { ...f }) : f,
                }),
              (0, i.jsxs)("div", {
                className: h.P_,
                children: [
                  k && (0, i.jsx)(d.E, { variant: "text-sm/medium", children: n }),
                  (0, i.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: k ? "text-subtle" : "text-default",
                    lineClamp: D,
                    children: a,
                  }),
                ],
              }),
            ],
          }),
        [f, I, p, n, a, k, F, D],
      ),
      V = L ?? `${(0, _.Xj)(n ?? "")}|${(0, _.Xj)(a)}`,
      H = (0, E.j)({ shouldShow: w });
    if (!T && !r.isValidElement(t)) return null;
    let j = H((e, t) =>
      t
        ? (0, i.jsx)(u.Bc, {
            isRichTooltip: !0,
            richTooltipPadding: p,
            children: (0, i.jsx)(c.R, {
              isVisible: w,
              isRendered: !0,
              targetElementRef: G,
              targetElement: b,
              anchorRef: R,
              id: U,
              content: B,
              position: g,
              align: S,
              spacing: N,
              caretConfig: C,
              animationStyle: e,
              positionKey: V,
            }),
          })
        : null,
    );
    return (0, i.jsxs)(i.Fragment, {
      children: [x, y || null == B ? null : (0, i.jsx)(o.A, { id: U, children: B }), j],
    });
  }
}
