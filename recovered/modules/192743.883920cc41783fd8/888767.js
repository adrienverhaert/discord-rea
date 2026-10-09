/* Recovered shipped factory. Module 888767.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 82..19100
 * Raw property SHA-256: f08d32fff448fa0cc24a490bf9f3d01daceadbb18f7871b75e40395896ddbeb3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function r(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function o(e) {
    var t = r(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function a(e) {
    var t = r(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function i(e) {
    if ("u" < typeof ShadowRoot) return !1;
    var t = r(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  n.d(t, { n: () => es });
  var u,
    l,
    s,
    c,
    f,
    d = Math.max,
    h = Math.min,
    p = Math.round;
  function y() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function m() {
    return !/^((?!chrome|android).)*safari/i.test(y());
  }
  function v(e, t, n) {
    (void 0 === t && (t = !1), void 0 === n && (n = !1));
    var i = e.getBoundingClientRect(),
      u = 1,
      l = 1;
    t &&
      a(e) &&
      ((u = (e.offsetWidth > 0 && p(i.width) / e.offsetWidth) || 1),
      (l = (e.offsetHeight > 0 && p(i.height) / e.offsetHeight) || 1));
    var s = (o(e) ? r(e) : window).visualViewport,
      c = !m() && n,
      f = (i.left + (c && s ? s.offsetLeft : 0)) / u,
      d = (i.top + (c && s ? s.offsetTop : 0)) / l,
      h = i.width / u,
      y = i.height / l;
    return { width: h, height: y, top: d, right: f + h, bottom: d + y, left: f, x: f, y: d };
  }
  function g(e) {
    var t = r(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function b(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function w(e) {
    return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function _(e) {
    return v(w(e)).left + g(e).scrollLeft;
  }
  function k(e) {
    return r(e).getComputedStyle(e);
  }
  function x(e) {
    var t = k(e),
      n = t.overflow,
      r = t.overflowX,
      o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function S(e) {
    var t = v(e),
      n = e.offsetWidth,
      r = e.offsetHeight;
    return (
      1 >= Math.abs(t.width - n) && (n = t.width),
      1 >= Math.abs(t.height - r) && (r = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
    );
  }
  function E(e) {
    return "html" === b(e) ? e : e.assignedSlot || e.parentNode || (i(e) ? e.host : null) || w(e);
  }
  function O(e, t) {
    void 0 === t && (t = []);
    var n,
      o = (function e(t) {
        return ["html", "body", "#document"].indexOf(b(t)) >= 0
          ? t.ownerDocument.body
          : a(t) && x(t)
            ? t
            : e(E(t));
      })(e),
      i = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
      u = r(o),
      l = i ? [u].concat(u.visualViewport || [], x(o) ? o : []) : o,
      s = t.concat(l);
    return i ? s : s.concat(O(E(l)));
  }
  function T(e) {
    return a(e) && "fixed" !== k(e).position ? e.offsetParent : null;
  }
  function R(e) {
    for (
      var t = r(e), n = T(e);
      n && ["table", "td", "th"].indexOf(b(n)) >= 0 && "static" === k(n).position;
    )
      n = T(n);
    return n && ("html" === b(n) || ("body" === b(n) && "static" === k(n).position))
      ? t
      : n ||
          (function (e) {
            var t = /firefox/i.test(y());
            if (/Trident/i.test(y()) && a(e) && "fixed" === k(e).position) return null;
            var n = E(e);
            for (i(n) && (n = n.host); a(n) && 0 > ["html", "body"].indexOf(b(n));) {
              var r = k(n);
              if (
                "none" !== r.transform ||
                "none" !== r.perspective ||
                "paint" === r.contain ||
                -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                (t && "filter" === r.willChange) ||
                (t && r.filter && "none" !== r.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  var A = "bottom",
    C = "right",
    M = "left",
    D = "auto",
    P = ["top", A, C, M],
    N = "start",
    j = "viewport",
    L = "popper",
    z = P.reduce(function (e, t) {
      return e.concat([t + "-" + N, t + "-end"]);
    }, []),
    U = [].concat(P, [D]).reduce(function (e, t) {
      return e.concat([t, t + "-" + N, t + "-end"]);
    }, []),
    Y = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ],
    I = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function F() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  var W = { passive: !0 };
  function H(e) {
    return e.split("-")[0];
  }
  function B(e) {
    return e.split("-")[1];
  }
  function q(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function V(e) {
    var t,
      n = e.reference,
      r = e.element,
      o = e.placement,
      a = o ? H(o) : null,
      i = o ? B(o) : null,
      u = n.x + n.width / 2 - r.width / 2,
      l = n.y + n.height / 2 - r.height / 2;
    switch (a) {
      case "top":
        t = { x: u, y: n.y - r.height };
        break;
      case A:
        t = { x: u, y: n.y + n.height };
        break;
      case C:
        t = { x: n.x + n.width, y: l };
        break;
      case M:
        t = { x: n.x - r.width, y: l };
        break;
      default:
        t = { x: n.x, y: n.y };
    }
    var s = a ? q(a) : null;
    if (null != s) {
      var c = "y" === s ? "height" : "width";
      switch (i) {
        case N:
          t[s] = t[s] - (n[c] / 2 - r[c] / 2);
          break;
        case "end":
          t[s] = t[s] + (n[c] / 2 - r[c] / 2);
      }
    }
    return t;
  }
  var $ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function G(e) {
    var t,
      n,
      o,
      a,
      i,
      u,
      l,
      s = e.popper,
      c = e.popperRect,
      f = e.placement,
      d = e.variation,
      h = e.offsets,
      y = e.position,
      m = e.gpuAcceleration,
      v = e.adaptive,
      g = e.roundOffsets,
      b = e.isFixed,
      _ = h.x,
      x = void 0 === _ ? 0 : _,
      S = h.y,
      E = void 0 === S ? 0 : S,
      O = "function" == typeof g ? g({ x: x, y: E }) : { x: x, y: E };
    ((x = O.x), (E = O.y));
    var T = h.hasOwnProperty("x"),
      D = h.hasOwnProperty("y"),
      P = M,
      N = "top",
      j = window;
    if (v) {
      var L = R(s),
        z = "clientHeight",
        U = "clientWidth";
      (L === r(s) &&
        "static" !== k((L = w(s))).position &&
        "absolute" === y &&
        ((z = "scrollHeight"), (U = "scrollWidth")),
        ("top" === f || ((f === M || f === C) && "end" === d)) &&
          ((N = A),
          (E -= (b && L === j && j.visualViewport ? j.visualViewport.height : L[z]) - c.height),
          (E *= m ? 1 : -1)),
        (f === M || (("top" === f || f === A) && "end" === d)) &&
          ((P = C),
          (x -= (b && L === j && j.visualViewport ? j.visualViewport.width : L[U]) - c.width),
          (x *= m ? 1 : -1)));
    }
    var Y = Object.assign({ position: y }, v && $),
      I =
        !0 === g
          ? ((t = { x: x, y: E }),
            (n = r(s)),
            (o = t.x),
            (a = t.y),
            { x: p(o * (i = n.devicePixelRatio || 1)) / i || 0, y: p(a * i) / i || 0 })
          : { x: x, y: E };
    return ((x = I.x), (E = I.y), m)
      ? Object.assign(
          {},
          Y,
          (((l = {})[N] = D ? "0" : ""),
          (l[P] = T ? "0" : ""),
          (l.transform =
            1 >= (j.devicePixelRatio || 1)
              ? "translate(" + x + "px, " + E + "px)"
              : "translate3d(" + x + "px, " + E + "px, 0)"),
          l),
        )
      : Object.assign(
          {},
          Y,
          (((u = {})[N] = D ? E + "px" : ""), (u[P] = T ? x + "px" : ""), (u.transform = ""), u),
        );
  }
  var X = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Q(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return X[e];
    });
  }
  var Z = { start: "end", end: "start" };
  function K(e) {
    return e.replace(/start|end/g, function (e) {
      return Z[e];
    });
  }
  function J(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && i(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return !0;
        r = r.parentNode || r.host;
      } while (r);
    }
    return !1;
  }
  function ee(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function et(e, t, n) {
    var a, i, u, l, s, c, f, h, p, y;
    return t === j
      ? ee(
          (function (e, t) {
            var n = r(e),
              o = w(e),
              a = n.visualViewport,
              i = o.clientWidth,
              u = o.clientHeight,
              l = 0,
              s = 0;
            if (a) {
              ((i = a.width), (u = a.height));
              var c = m();
              (c || (!c && "fixed" === t)) && ((l = a.offsetLeft), (s = a.offsetTop));
            }
            return { width: i, height: u, x: l + _(e), y: s };
          })(e, n),
        )
      : o(t)
        ? (((a = v(t, !1, "fixed" === n)).top = a.top + t.clientTop),
          (a.left = a.left + t.clientLeft),
          (a.bottom = a.top + t.clientHeight),
          (a.right = a.left + t.clientWidth),
          (a.width = t.clientWidth),
          (a.height = t.clientHeight),
          (a.x = a.left),
          (a.y = a.top),
          a)
        : ee(
            ((i = w(e)),
            (l = w(i)),
            (s = g(i)),
            (c = null == (u = i.ownerDocument) ? void 0 : u.body),
            (f = d(l.scrollWidth, l.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0)),
            (h = d(l.scrollHeight, l.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0)),
            (p = -s.scrollLeft + _(i)),
            (y = -s.scrollTop),
            "rtl" === k(c || l).direction && (p += d(l.clientWidth, c ? c.clientWidth : 0) - f),
            { width: f, height: h, x: p, y: y }),
          );
  }
  function en() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function er(e) {
    return Object.assign({}, en(), e);
  }
  function eo(e, t) {
    return t.reduce(function (t, n) {
      return ((t[n] = e), t);
    }, {});
  }
  function ea(e, t) {
    void 0 === t && (t = {});
    var n,
      r,
      i,
      u,
      l,
      s,
      c,
      f,
      p = t,
      y = p.placement,
      m = void 0 === y ? e.placement : y,
      g = p.strategy,
      _ = void 0 === g ? e.strategy : g,
      x = p.boundary,
      S = p.rootBoundary,
      T = p.elementContext,
      M = void 0 === T ? L : T,
      D = p.altBoundary,
      N = p.padding,
      z = void 0 === N ? 0 : N,
      U = er("number" != typeof z ? z : eo(z, P)),
      Y = e.rects.popper,
      I = e.elements[void 0 !== D && D ? (M === L ? "reference" : L) : M],
      F =
        ((n = o(I) ? I : I.contextElement || w(e.elements.popper)),
        (r = void 0 === x ? "clippingParents" : x),
        (i = void 0 === S ? j : S),
        (c = (s = [].concat(
          "clippingParents" === r
            ? ((u = O(E(n))),
              !o((l = ["absolute", "fixed"].indexOf(k(n).position) >= 0 && a(n) ? R(n) : n))
                ? []
                : u.filter(function (e) {
                    return o(e) && J(e, l) && "body" !== b(e);
                  }))
            : [].concat(r),
          [i],
        ))[0]),
        ((f = s.reduce(
          function (e, t) {
            var r = et(n, t, _);
            return (
              (e.top = d(r.top, e.top)),
              (e.right = h(r.right, e.right)),
              (e.bottom = h(r.bottom, e.bottom)),
              (e.left = d(r.left, e.left)),
              e
            );
          },
          et(n, c, _),
        )).width = f.right - f.left),
        (f.height = f.bottom - f.top),
        (f.x = f.left),
        (f.y = f.top),
        f),
      W = v(e.elements.reference),
      H = V({ reference: W, element: Y, strategy: "absolute", placement: m }),
      B = ee(Object.assign({}, Y, H)),
      q = M === L ? B : W,
      $ = {
        top: F.top - q.top + U.top,
        bottom: q.bottom - F.bottom + U.bottom,
        left: F.left - q.left + U.left,
        right: q.right - F.right + U.right,
      },
      G = e.modifiersData.offset;
    if (M === L && G) {
      var X = G[m];
      Object.keys($).forEach(function (e) {
        var t = [C, A].indexOf(e) >= 0 ? 1 : -1,
          n = ["top", A].indexOf(e) >= 0 ? "y" : "x";
        $[e] += X[n] * t;
      });
    }
    return $;
  }
  function ei(e, t, n) {
    return d(e, h(t, n));
  }
  function eu(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function el(e) {
    return ["top", C, A, M].some(function (t) {
      return e[t] >= 0;
    });
  }
  var es =
    ((s =
      void 0 ===
      (l = (u = {
        defaultModifiers: [
          {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
              var t = e.state,
                n = e.instance,
                o = e.options,
                a = o.scroll,
                i = void 0 === a || a,
                u = o.resize,
                l = void 0 === u || u,
                s = r(t.elements.popper),
                c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
              return (
                i &&
                  c.forEach(function (e) {
                    e.addEventListener("scroll", n.update, W);
                  }),
                l && s.addEventListener("resize", n.update, W),
                function () {
                  (i &&
                    c.forEach(function (e) {
                      e.removeEventListener("scroll", n.update, W);
                    }),
                    l && s.removeEventListener("resize", n.update, W));
                }
              );
            },
            data: {},
          },
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                n = e.name;
              t.modifiersData[n] = V({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                o = n.adaptive,
                a = n.roundOffsets,
                i = void 0 === a || a,
                u = {
                  placement: H(t.placement),
                  variation: B(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: void 0 === r || r,
                  isFixed: "fixed" === t.options.strategy,
                };
              (null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  G(
                    Object.assign({}, u, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: void 0 === o || o,
                      roundOffsets: i,
                    }),
                  ),
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    G(
                      Object.assign({}, u, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: i,
                      }),
                    ),
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                })));
            },
            data: {},
          },
          {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
              var t = e.state;
              Object.keys(t.elements).forEach(function (e) {
                var n = t.styles[e] || {},
                  r = t.attributes[e] || {},
                  o = t.elements[e];
                a(o) &&
                  b(o) &&
                  (Object.assign(o.style, n),
                  Object.keys(r).forEach(function (e) {
                    var t = r[e];
                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t);
                  }));
              });
            },
            effect: function (e) {
              var t = e.state,
                n = {
                  popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
                  arrow: { position: "absolute" },
                  reference: {},
                };
              return (
                Object.assign(t.elements.popper.style, n.popper),
                (t.styles = n),
                t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                function () {
                  Object.keys(t.elements).forEach(function (e) {
                    var r = t.elements[e],
                      o = t.attributes[e] || {},
                      i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(
                        function (e, t) {
                          return ((e[t] = ""), e);
                        },
                        {},
                      );
                    a(r) &&
                      b(r) &&
                      (Object.assign(r.style, i),
                      Object.keys(o).forEach(function (e) {
                        r.removeAttribute(e);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"],
          },
          {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = e.name,
                o = n.offset,
                a = void 0 === o ? [0, 0] : o,
                i = U.reduce(function (e, n) {
                  var r, o, i, u, l, s;
                  return (
                    (e[n] =
                      ((r = t.rects),
                      (i = [M, "top"].indexOf((o = H(n))) >= 0 ? -1 : 1),
                      (l = (u =
                        "function" == typeof a ? a(Object.assign({}, r, { placement: n })) : a)[0]),
                      (s = u[1]),
                      (l = l || 0),
                      (s = (s || 0) * i),
                      [M, C].indexOf(o) >= 0 ? { x: s, y: l } : { x: l, y: s })),
                    e
                  );
                }, {}),
                u = i[t.placement],
                l = u.x,
                s = u.y;
              (null != t.modifiersData.popperOffsets &&
                ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += s)),
                (t.modifiersData[r] = i));
            },
          },
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = e.name;
              if (!t.modifiersData[r]._skip) {
                for (
                  var o = n.mainAxis,
                    a = void 0 === o || o,
                    i = n.altAxis,
                    u = void 0 === i || i,
                    l = n.fallbackPlacements,
                    s = n.padding,
                    c = n.boundary,
                    f = n.rootBoundary,
                    d = n.altBoundary,
                    h = n.flipVariations,
                    p = void 0 === h || h,
                    y = n.allowedAutoPlacements,
                    m = t.options.placement,
                    v = H(m) === m,
                    g =
                      l ||
                      (v || !p
                        ? [Q(m)]
                        : (function (e) {
                            if (H(e) === D) return [];
                            var t = Q(e);
                            return [K(e), t, K(t)];
                          })(m)),
                    b = [m].concat(g).reduce(function (e, n) {
                      var r, o, a, i, u, l, d, h, m, v, g, b;
                      return e.concat(
                        H(n) === D
                          ? ((o = (r = {
                              placement: n,
                              boundary: c,
                              rootBoundary: f,
                              padding: s,
                              flipVariations: p,
                              allowedAutoPlacements: y,
                            }).placement),
                            (a = r.boundary),
                            (i = r.rootBoundary),
                            (u = r.padding),
                            (l = r.flipVariations),
                            (h = void 0 === (d = r.allowedAutoPlacements) ? U : d),
                            0 ===
                              (g = (v = (m = B(o))
                                ? l
                                  ? z
                                  : z.filter(function (e) {
                                      return B(e) === m;
                                    })
                                : P).filter(function (e) {
                                return h.indexOf(e) >= 0;
                              })).length && (g = v),
                            Object.keys(
                              (b = g.reduce(function (e, n) {
                                return (
                                  (e[n] = ea(t, {
                                    placement: n,
                                    boundary: a,
                                    rootBoundary: i,
                                    padding: u,
                                  })[H(n)]),
                                  e
                                );
                              }, {})),
                            ).sort(function (e, t) {
                              return b[e] - b[t];
                            }))
                          : n,
                      );
                    }, []),
                    w = t.rects.reference,
                    _ = t.rects.popper,
                    k = new Map(),
                    x = !0,
                    S = b[0],
                    E = 0;
                  E < b.length;
                  E++
                ) {
                  var O = b[E],
                    T = H(O),
                    R = B(O) === N,
                    j = ["top", A].indexOf(T) >= 0,
                    L = j ? "width" : "height",
                    Y = ea(t, {
                      placement: O,
                      boundary: c,
                      rootBoundary: f,
                      altBoundary: d,
                      padding: s,
                    }),
                    I = j ? (R ? C : M) : R ? A : "top";
                  w[L] > _[L] && (I = Q(I));
                  var F = Q(I),
                    W = [];
                  if (
                    (a && W.push(Y[T] <= 0),
                    u && W.push(Y[I] <= 0, Y[F] <= 0),
                    W.every(function (e) {
                      return e;
                    }))
                  ) {
                    ((S = O), (x = !1));
                    break;
                  }
                  k.set(O, W);
                }
                if (x)
                  for (
                    var q = p ? 3 : 1,
                      V = function (e) {
                        var t = b.find(function (t) {
                          var n = k.get(t);
                          if (n)
                            return n.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return ((S = t), "break");
                      },
                      $ = q;
                    $ > 0 && "break" !== V($);
                    $--
                  );
                t.placement !== S &&
                  ((t.modifiersData[r]._skip = !0), (t.placement = S), (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = e.name,
                o = n.mainAxis,
                a = n.altAxis,
                i = n.boundary,
                u = n.rootBoundary,
                l = n.altBoundary,
                s = n.padding,
                c = n.tether,
                f = void 0 === c || c,
                p = n.tetherOffset,
                y = void 0 === p ? 0 : p,
                m = ea(t, { boundary: i, rootBoundary: u, padding: s, altBoundary: l }),
                v = H(t.placement),
                g = B(t.placement),
                b = !g,
                w = q(v),
                _ = "x" === w ? "y" : "x",
                k = t.modifiersData.popperOffsets,
                x = t.rects.reference,
                E = t.rects.popper,
                O =
                  "function" == typeof y
                    ? y(Object.assign({}, t.rects, { placement: t.placement }))
                    : y,
                T =
                  "number" == typeof O
                    ? { mainAxis: O, altAxis: O }
                    : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
                D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                P = { x: 0, y: 0 };
              if (k) {
                if (void 0 === o || o) {
                  var j,
                    L = "y" === w ? "top" : M,
                    z = "y" === w ? A : C,
                    U = "y" === w ? "height" : "width",
                    Y = k[w],
                    I = Y + m[L],
                    F = Y - m[z],
                    W = f ? -E[U] / 2 : 0,
                    V = g === N ? x[U] : E[U],
                    $ = g === N ? -E[U] : -x[U],
                    G = t.elements.arrow,
                    X = f && G ? S(G) : { width: 0, height: 0 },
                    Q = t.modifiersData["arrow#persistent"]
                      ? t.modifiersData["arrow#persistent"].padding
                      : en(),
                    Z = Q[L],
                    K = Q[z],
                    J = ei(0, x[U], X[U]),
                    ee = b ? x[U] / 2 - W - J - Z - T.mainAxis : V - J - Z - T.mainAxis,
                    et = b ? -x[U] / 2 + W + J + K + T.mainAxis : $ + J + K + T.mainAxis,
                    er = t.elements.arrow && R(t.elements.arrow),
                    eo = er ? ("y" === w ? er.clientTop || 0 : er.clientLeft || 0) : 0,
                    eu = null != (j = null == D ? void 0 : D[w]) ? j : 0,
                    el = ei(f ? h(I, Y + ee - eu - eo) : I, Y, f ? d(F, Y + et - eu) : F);
                  ((k[w] = el), (P[w] = el - Y));
                }
                if (void 0 !== a && a) {
                  var es,
                    ec,
                    ef = "x" === w ? "top" : M,
                    ed = "x" === w ? A : C,
                    eh = k[_],
                    ep = "y" === _ ? "height" : "width",
                    ey = eh + m[ef],
                    em = eh - m[ed],
                    ev = -1 !== ["top", M].indexOf(v),
                    eg = null != (ec = null == D ? void 0 : D[_]) ? ec : 0,
                    eb = ev ? ey : eh - x[ep] - E[ep] - eg + T.altAxis,
                    ew = ev ? eh + x[ep] + E[ep] - eg - T.altAxis : em,
                    e_ =
                      f && ev
                        ? (es = ei(eb, eh, ew)) > ew
                          ? ew
                          : es
                        : ei(f ? eb : ey, eh, f ? ew : em);
                  ((k[_] = e_), (P[_] = e_ - eh));
                }
                t.modifiersData[r] = P;
              }
            },
            requiresIfExists: ["offset"],
          },
          {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t,
                n = e.state,
                r = e.name,
                o = e.options,
                a = n.elements.arrow,
                i = n.modifiersData.popperOffsets,
                u = H(n.placement),
                l = q(u),
                s = [M, C].indexOf(u) >= 0 ? "height" : "width";
              if (a && i) {
                var c,
                  f =
                    ((c = o.padding),
                    er(
                      "number" !=
                        typeof (c =
                          "function" == typeof c
                            ? c(Object.assign({}, n.rects, { placement: n.placement }))
                            : c)
                        ? c
                        : eo(c, P),
                    )),
                  d = S(a),
                  h = "y" === l ? "top" : M,
                  p = "y" === l ? A : C,
                  y = n.rects.reference[s] + n.rects.reference[l] - i[l] - n.rects.popper[s],
                  m = i[l] - n.rects.reference[l],
                  v = R(a),
                  g = v ? ("y" === l ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
                  b = f[h],
                  w = g - d[s] - f[p],
                  _ = g / 2 - d[s] / 2 + (y / 2 - m / 2),
                  k = ei(b, _, w);
                n.modifiersData[r] = (((t = {})[l] = k), (t.centerOffset = k - _), t);
              }
            },
            effect: function (e) {
              var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
              null == r ||
                (("string" != typeof r || (r = t.elements.popper.querySelector(r))) &&
                  J(t.elements.popper, r) &&
                  (t.elements.arrow = r));
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
          },
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                n = e.name,
                r = t.rects.reference,
                o = t.rects.popper,
                a = t.modifiersData.preventOverflow,
                i = ea(t, { elementContext: "reference" }),
                u = ea(t, { altBoundary: !0 }),
                l = eu(i, r),
                s = eu(u, o, a),
                c = el(l),
                f = el(s);
              ((t.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: s,
                isReferenceHidden: c,
                hasPopperEscaped: f,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": c,
                  "data-popper-escaped": f,
                })));
            },
          },
        ],
      }).defaultModifiers)
        ? []
        : l),
    (f = void 0 === (c = u.defaultOptions) ? I : c),
    function (e, t, n) {
      void 0 === n && (n = f);
      var i,
        u,
        l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, I, f),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        c = [],
        d = !1,
        h = {
          state: l,
          setOptions: function (n) {
            var r,
              a,
              i,
              u,
              d,
              p,
              m = "function" == typeof n ? n(l.options) : n;
            (y(),
              (l.options = Object.assign({}, f, l.options, m)),
              (l.scrollParents = {
                reference: o(e) ? O(e) : e.contextElement ? O(e.contextElement) : [],
                popper: O(t),
              }));
            var v =
              ((a = Object.keys(
                (r = [].concat(s, l.options.modifiers).reduce(function (e, t) {
                  var n = e[t.name];
                  return (
                    (e[t.name] = n
                      ? Object.assign({}, n, t, {
                          options: Object.assign({}, n.options, t.options),
                          data: Object.assign({}, n.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {})),
              ).map(function (e) {
                return r[e];
              })),
              (i = new Map()),
              (u = new Set()),
              (d = []),
              a.forEach(function (e) {
                i.set(e.name, e);
              }),
              a.forEach(function (e) {
                u.has(e.name) ||
                  (function e(t) {
                    (u.add(t.name),
                      [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                        if (!u.has(t)) {
                          var n = i.get(t);
                          n && e(n);
                        }
                      }),
                      d.push(t));
                  })(e);
              }),
              (p = d),
              Y.reduce(function (e, t) {
                return e.concat(
                  p.filter(function (e) {
                    return e.phase === t;
                  }),
                );
              }, []));
            return (
              (l.orderedModifiers = v.filter(function (e) {
                return e.enabled;
              })),
              l.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options,
                  r = e.effect;
                if ("function" == typeof r) {
                  var o = r({ state: l, name: t, instance: h, options: void 0 === n ? {} : n });
                  c.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!d) {
              var e = l.elements,
                t = e.reference,
                n = e.popper;
              if (F(t, n)) {
                ((l.rects = {
                  reference:
                    ((o = R(n)),
                    (i = "fixed" === l.options.strategy),
                    (u = a(o)),
                    (y =
                      a(o) &&
                      ((c = p((s = o.getBoundingClientRect()).width) / o.offsetWidth || 1),
                      (f = p(s.height) / o.offsetHeight || 1),
                      1 !== c || 1 !== f)),
                    (m = w(o)),
                    (k = v(t, y, i)),
                    (E = { scrollLeft: 0, scrollTop: 0 }),
                    (O = { x: 0, y: 0 }),
                    (u || (!u && !i)) &&
                      (("body" !== b(o) || x(m)) &&
                        (E = (function (e) {
                          return e !== r(e) && a(e)
                            ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                            : g(e);
                        })(o)),
                      a(o)
                        ? ((O = v(o, !0)), (O.x += o.clientLeft), (O.y += o.clientTop))
                        : m && (O.x = _(m))),
                    {
                      x: k.left + E.scrollLeft - O.x,
                      y: k.top + E.scrollTop - O.y,
                      width: k.width,
                      height: k.height,
                    }),
                  popper: S(n),
                }),
                  (l.reset = !1),
                  (l.placement = l.options.placement),
                  l.orderedModifiers.forEach(function (e) {
                    return (l.modifiersData[e.name] = Object.assign({}, e.data));
                  }));
                for (
                  var o, i, u, s, c, f, y, m, k, E, O, T = 0;
                  T < l.orderedModifiers.length;
                  T++
                ) {
                  if (!0 === l.reset) {
                    ((l.reset = !1), (T = -1));
                    continue;
                  }
                  var A = l.orderedModifiers[T],
                    C = A.fn,
                    M = A.options,
                    D = void 0 === M ? {} : M,
                    P = A.name;
                  "function" == typeof C &&
                    (l = C({ state: l, options: D, name: P, instance: h }) || l);
                }
              }
            }
          },
          update:
            ((i = function () {
              return new Promise(function (e) {
                (h.forceUpdate(), e(l));
              });
            }),
            function () {
              return (
                u ||
                  (u = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      ((u = void 0), e(i()));
                    });
                  })),
                u
              );
            }),
          destroy: function () {
            (y(), (d = !0));
          },
        };
      if (!F(e, t)) return h;
      function y() {
        (c.forEach(function (e) {
          return e();
        }),
          (c = []));
      }
      return (
        h.setOptions(n).then(function (e) {
          !d && n.onFirstUpdate && n.onFirstUpdate(e);
        }),
        h
      );
    });
}
