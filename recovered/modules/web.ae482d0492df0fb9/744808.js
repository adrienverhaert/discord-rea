/* Recovered shipped factory. Module 744808.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3855924..3858518
 * Raw property SHA-256: 77082fb160e6985c5037e2d9b5b5668136b0c05df46e9a4ab2d24dd520c32703
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => p });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(43990),
    d = n(770178),
    c = n(363195),
    u = n(746002),
    _ = n(855915),
    E = n(940622),
    A = n(163697),
    h = n(459872);
  function f(e) {
    let { skuId: t, layer: n, data: r, fadeIn: a, containerWidth: l, containerHeight: o } = e,
      d =
        r?.src ??
        (0, u.getCollectiblesItemAssetUrl)({ skuId: t, assetFormat: "static", assetId: n.id });
    if (null == d) return null;
    let c = s()(h.S_, {
      [h.Wm]: "front" === n.order,
      [h.aX]: "back" === n.order,
      [h.Mn]: "top" === n.anchor,
      [h.sQ]: "bottom" === n.anchor,
      [h.gX]: "center" === n.anchor,
      [h.no]: !0 === n.responsive,
      [h.qG]: !0 === a,
    });
    switch (n.type) {
      case "staple":
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", { className: s()(h.zu, c) }),
            (0, i.jsx)("img", { src: d, alt: "", "aria-hidden": !0, className: s()(c, h.im) }),
          ],
        });
      case "rail":
        return (0, i.jsx)("div", {
          role: "img",
          style: { backgroundImage: `url(${d})` },
          className: s()(c, h.H$),
        });
      case "border":
        return (0, i.jsx)("div", {
          role: "img",
          "aria-hidden": !0,
          className: s()(c, h.PQ),
          children: Array.from(
            {
              length: (function (e) {
                let { data: t, containerWidth: n, containerHeight: i } = e;
                if (null == t || 0 === t.naturalWidth || null == n || null == i) return 5;
                let r = n * (t.naturalHeight / t.naturalWidth);
                return r <= 0 ? 5 : Math.ceil(i / r) + 1;
              })({ data: r, containerWidth: l, containerHeight: o }),
            },
            (e, t) => (0, i.jsx)("img", { src: d, alt: "", "aria-hidden": !0 }, t),
          ),
        });
      default:
        return (n.type, null);
    }
  }
  function I(e) {
    let {
        skuId: t,
        label: n,
        layers: a,
        layerData: l,
        fadeIn: o,
        themeClass: c,
        profileFrameClassName: u,
        profileFrameStyle: _,
        className: E,
        isPreview: A,
      } = e,
      I = r.useRef(null),
      [p, T] = r.useState(null),
      [m, g] = r.useState(null),
      S = r.useCallback((e) => {
        (T(Math.round(e.contentRect.width)), g(Math.round(e.contentRect.height)));
      }, []);
    return (
      (0, d.g)(I, S, [], {
        fireOnMount: !0,
        enabled: a.some((e) => {
          let { type: t } = e;
          return "border" === t;
        }),
      }),
      (0, i.jsx)("div", {
        className: s()(h.uF, c, u, E, { [h.VH]: A }),
        style: _,
        "aria-label": n,
        role: "img",
        children: (0, i.jsx)("div", {
          ref: I,
          className: h.hH,
          children: a.map((e) =>
            (0, i.jsx)(
              f,
              {
                skuId: t,
                layer: e,
                data: l[e.id],
                fadeIn: o,
                containerWidth: p,
                containerHeight: m,
              },
              e.id,
            ),
          ),
        }),
      })
    );
  }
  function p(e) {
    let { frame: t, className: n, filterLayer: a, fadeIn: s = !0, isPreview: d } = e,
      u = (0, l.bG)([c.A], () => c.A.theme),
      h = (0, E.eo)(),
      f = (0, A.i)(t),
      { profileFrameStyle: p, profileFrameClassName: T } = h?.css ?? f,
      m = h?.layers ?? t.layers,
      g = null == a ? m : m.filter(a),
      S = g
        .map((e) => {
          let { id: t } = e;
          return t;
        })
        .join("\0"),
      N = r.useMemo(() => g, [S]),
      { layerData: C, settled: O } = (0, _.A)({ skuId: t.skuId, layers: null != h ? void 0 : N }),
      R = h?.layerData ?? C,
      L = null != h || O;
    return 0 !== N.length && L
      ? (0, i.jsx)(o.N, {
          theme: u,
          children: (e) =>
            (0, i.jsx)(I, {
              skuId: t.skuId,
              label: t.label,
              layers: N,
              layerData: R,
              fadeIn: s,
              themeClass: e,
              profileFrameClassName: T,
              profileFrameStyle: p,
              className: n,
              isPreview: d,
            }),
        })
      : null;
  }
}
