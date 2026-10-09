/* Recovered shipped factory. Module 144165.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 829331..832635
 * Raw property SHA-256: 9dc13f8b5a5505f1eadb922394c60263a2ba37ddcda834906df6d9ed21514fea
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { _: () => T });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(559106),
    o = n(939249),
    d = n(834730);
  function c(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, width: s = 288, height: l = 162 } = e;
    return (0, i.jsx)("img", {
      style: { width: s, height: l },
      src: "https://cdn.discordapp.com/assets/content/9704f78db46554d26701d9fdb7e758c796cea63014fb2633f39bec487a3322b6.svg",
      alt: t,
      "aria-label": n,
      "aria-hidden": r,
      role: a ?? "img",
    });
  }
  var u = n(264927),
    _ = n(515718),
    E = n(835517),
    A = n(966697),
    h = n(652215),
    f = n(838541),
    I = n(660183),
    p = n(774702);
  let T = (e) => {
    var t, n, a, d;
    let c,
      {
        className: E,
        imageClassName: T,
        readyState: S = h.Rv1.READY,
        src: N,
        placeholder: C,
        placeholderVersion: O,
        alt: R,
        width: L,
        height: y,
        maxWidth: D = L,
        maxHeight: v = y,
        minWidth: b = 0,
        minHeight: M = 0,
        mediaLayoutType: P,
        limitResponsiveWidth: U = !0,
        accessory: w,
        zoomable: G = !0,
        original: x,
        children: k = (e) => {
          let { src: t, size: n, alt: r, className: a, mediaLayoutType: s } = e;
          return (0, i.jsx)("img", {
            className: a ?? void 0,
            alt: r ?? I.intl.string(I.t.X4IxWL),
            src: t,
            style: g(n, s),
          });
        },
        renderAccessory: F,
        onClick: B,
        tabIndex: V,
        dataSafeSrc: H,
        useFullWidth: j = !1,
        srcIsAnimated: W,
        disableLoadingSpinner: Y = !1,
        ref: K,
        ...$
      } = e,
      z = r.useRef(null),
      X = r.useRef(null);
    if (1 === L && 1 === y) return null;
    let Z = (0, _.Uj)({
        width: L,
        height: y,
        maxWidth: D,
        maxHeight: v,
        minWidth: b,
        minHeight: M,
      }),
      q = 0 !== Z.width ? Z.width / Z.height : 1;
    ("" !== N && S !== h.Rv1.ERROR
      ? (c = k({ src: N, size: Z, alt: R, className: T, mediaLayoutType: P }))
      : S !== h.Rv1.LOADING && (c = (0, i.jsx)(m, { size: Z, mediaLayoutType: P, alt: R })),
      (c = (0, i.jsx)(A.y, {
        disableSpinner: Y,
        readyState: S,
        aspectRatio: q,
        placeholder: C,
        placeholderVersion: O,
        placeholderStyle: g(Z, P),
        children: c,
      })));
    let Q = null != F ? F() : null;
    return (
      (Q = Q ?? w),
      (0, i.jsx)(l.vN, {
        ringTarget: z,
        focusTarget: X,
        children: (0, i.jsxs)("div", {
          ref: K,
          className: s()(
            "imageWrapper",
            p.h4,
            { [p.j3]: G, [p.LF]: S !== h.Rv1.READY, [p.vk]: null != B },
            E,
          ),
          style:
            ((t = Z),
            (n = U),
            (a = j),
            (d = P) === f.dG.MOSAIC
              ? {
                  display: "block",
                  maxHeight: "inherit",
                  margin: "auto",
                  width: a ? "100%" : t.width,
                  height: "100%",
                }
              : d === f.dG.RESPONSIVE
                ? {
                    maxWidth: n ? t.width : void 0,
                    width: "100%",
                    aspectRatio: `${t.width} / ${t.height}`,
                  }
                : t),
          ...$,
          children: [
            null != x &&
              (0, i.jsx)("a", {
                tabIndex: -1,
                onClick: B,
                "aria-hidden": !0,
                className: p.mt,
                href: x,
                ref: z,
                "data-role": "img",
                "data-safe-src": H ?? N,
              }),
            null != B
              ? (0, i.jsx)(o.D, {
                  className: p.w8,
                  tabIndex: V ?? 0,
                  onClick: B,
                  "aria-label": R ?? I.intl.string(I.t.X4IxWL),
                  "aria-describedby": u.l2,
                  innerRef: X,
                  focusProps: { enabled: !1 },
                  children: c,
                })
              : c,
            null != Q ? (0, i.jsx)("div", { className: p.mQ, children: Q }) : null,
          ],
        }),
      })
    );
  };
  function m(e) {
    let { size: t, mediaLayoutType: n, alt: r } = e;
    return (0, i.jsxs)("div", {
      className: p.x5,
      style: (function (e, t) {
        switch (t) {
          case f.dG.MOSAIC:
            return {
              width: "100%",
              height: "100%",
              aspectRatio: `${e.width} / ${e.height}`,
              display: "flex",
              maxHeight: "inherit",
            };
          case f.dG.RESPONSIVE:
            return { ...S(e), display: "flex" };
          default:
            return e;
        }
      })(t, n),
      children: [
        (0, i.jsx)("div", {
          className: p.QM,
          children: (0, i.jsx)(c, { alt: r ?? I.intl.string(I.t.X4IxWL), height: "auto" }),
        }),
        (0, i.jsx)(d.E, {
          className: p.b4,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: I.intl.string(I.t.sAfT1K),
        }),
      ],
    });
  }
  function g(e, t) {
    switch (t) {
      case f.dG.MOSAIC:
        return {
          display: "block",
          objectFit: "cover",
          minWidth: "100%",
          minHeight: "100%",
          maxWidth: 1 === (0, E.A)() ? "calc(100% + 1px)" : "100%",
        };
      case f.dG.RESPONSIVE:
        return S(e);
      default:
        return e;
    }
  }
  function S(e) {
    let { width: t, height: n } = e;
    return {
      maxWidth: t,
      maxHeight: n,
      width: "100%",
      display: "block",
      aspectRatio: `${t} / ${n}`,
    };
  }
  T.displayName = "Image";
}
