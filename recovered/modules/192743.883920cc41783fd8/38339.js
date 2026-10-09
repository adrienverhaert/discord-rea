/* Recovered shipped factory. Module 38339.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 643435..660429
 * Raw property SHA-256: 835d34e02786d0b22b46fc19b77df3921ff8991b5dae3acafcbc4e44c551b52d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    UU: () => et,
    cY: () => K,
    ll: () => Z,
    jD: () => er,
    RK: () => J,
    BN: () => ee,
    ER: () => eo,
    rD: () => ea,
    Ej: () => en,
  });
  let r = ["top", "right", "bottom", "left"],
    o = r.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
    a = Math.min,
    i = Math.max,
    u = Math.round,
    l = Math.floor,
    s = (e) => ({ x: e, y: e }),
    c = { left: "right", right: "left", bottom: "top", top: "bottom" },
    f = { start: "end", end: "start" };
  function d(e, t) {
    return "function" == typeof e ? e(t) : e;
  }
  function h(e) {
    return e.split("-")[0];
  }
  function p(e) {
    return e.split("-")[1];
  }
  function y(e) {
    return "x" === e ? "y" : "x";
  }
  function m(e) {
    return "y" === e ? "height" : "width";
  }
  let v = new Set(["top", "bottom"]);
  function g(e) {
    return v.has(h(e)) ? "y" : "x";
  }
  function b(e, t, n) {
    void 0 === n && (n = !1);
    let r = p(e),
      o = y(g(e)),
      a = m(o),
      i =
        "x" === o
          ? r === (n ? "end" : "start")
            ? "right"
            : "left"
          : "start" === r
            ? "bottom"
            : "top";
    return (t.reference[a] > t.floating[a] && (i = E(i)), [i, E(i)]);
  }
  function w(e) {
    return e.replace(/start|end/g, (e) => f[e]);
  }
  let _ = ["left", "right"],
    k = ["right", "left"],
    x = ["top", "bottom"],
    S = ["bottom", "top"];
  function E(e) {
    return e.replace(/left|right|bottom|top/g, (e) => c[e]);
  }
  function O(e) {
    let { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
  }
  function T(e, t, n) {
    let r,
      { reference: o, floating: a } = e,
      i = g(t),
      u = y(g(t)),
      l = m(u),
      s = h(t),
      c = "y" === i,
      f = o.x + o.width / 2 - a.width / 2,
      d = o.y + o.height / 2 - a.height / 2,
      v = o[l] / 2 - a[l] / 2;
    switch (s) {
      case "top":
        r = { x: f, y: o.y - a.height };
        break;
      case "bottom":
        r = { x: f, y: o.y + o.height };
        break;
      case "right":
        r = { x: o.x + o.width, y: d };
        break;
      case "left":
        r = { x: o.x - a.width, y: d };
        break;
      default:
        r = { x: o.x, y: o.y };
    }
    switch (p(t)) {
      case "start":
        r[u] -= v * (n && c ? -1 : 1);
        break;
      case "end":
        r[u] += v * (n && c ? -1 : 1);
    }
    return r;
  }
  let R = async (e, t, n) => {
    let { placement: r = "bottom", strategy: o = "absolute", middleware: a = [], platform: i } = n,
      u = a.filter(Boolean),
      l = await (null == i.isRTL ? void 0 : i.isRTL(t)),
      s = await i.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: c, y: f } = T(s, r, l),
      d = r,
      h = {},
      p = 0;
    for (let n = 0; n < u.length; n++) {
      let { name: a, fn: y } = u[n],
        {
          x: m,
          y: v,
          data: g,
          reset: b,
        } = await y({
          x: c,
          y: f,
          initialPlacement: r,
          placement: d,
          strategy: o,
          middlewareData: h,
          rects: s,
          platform: i,
          elements: { reference: e, floating: t },
        });
      ((c = null != m ? m : c),
        (f = null != v ? v : f),
        (h = { ...h, [a]: { ...h[a], ...g } }),
        b &&
          p <= 50 &&
          (p++,
          "object" == typeof b &&
            (b.placement && (d = b.placement),
            b.rects &&
              (s =
                !0 === b.rects
                  ? await i.getElementRects({ reference: e, floating: t, strategy: o })
                  : b.rects),
            ({ x: c, y: f } = T(s, d, l))),
          (n = -1)));
    }
    return { x: c, y: f, placement: d, strategy: o, middlewareData: h };
  };
  async function A(e, t) {
    var n, r;
    void 0 === t && (t = {});
    let { x: o, y: a, platform: i, rects: u, elements: l, strategy: s } = e,
      {
        boundary: c = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: h = "floating",
        altBoundary: p = !1,
        padding: y = 0,
      } = d(t, e),
      m =
        "number" != typeof (r = y)
          ? { top: 0, right: 0, bottom: 0, left: 0, ...r }
          : { top: r, right: r, bottom: r, left: r },
      v = l[p ? ("floating" === h ? "reference" : "floating") : h],
      g = O(
        await i.getClippingRect({
          element:
            null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n
              ? v
              : v.contextElement ||
                (await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating))),
          boundary: c,
          rootBoundary: f,
          strategy: s,
        }),
      ),
      b =
        "floating" === h
          ? { x: o, y: a, width: u.floating.width, height: u.floating.height }
          : u.reference,
      w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)),
      _ = ((await (null == i.isElement ? void 0 : i.isElement(w))) &&
        (await (null == i.getScale ? void 0 : i.getScale(w)))) || { x: 1, y: 1 },
      k = O(
        i.convertOffsetParentRelativeRectToViewportRelativeRect
          ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
              elements: l,
              rect: b,
              offsetParent: w,
              strategy: s,
            })
          : b,
      );
    return {
      top: (g.top - k.top + m.top) / _.y,
      bottom: (k.bottom - g.bottom + m.bottom) / _.y,
      left: (g.left - k.left + m.left) / _.x,
      right: (k.right - g.right + m.right) / _.x,
    };
  }
  function C(e, t) {
    return {
      top: e.top - t.height,
      right: e.right - t.width,
      bottom: e.bottom - t.height,
      left: e.left - t.width,
    };
  }
  function M(e) {
    return r.some((t) => e[t] >= 0);
  }
  let D = new Set(["left", "top"]);
  async function P(e, t) {
    let { placement: n, platform: r, elements: o } = e,
      a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
      i = h(n),
      u = p(n),
      l = "y" === g(n),
      s = D.has(i) ? -1 : 1,
      c = a && l ? -1 : 1,
      f = d(t, e),
      {
        mainAxis: y,
        crossAxis: m,
        alignmentAxis: v,
      } = "number" == typeof f
        ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
        : {
            mainAxis: f.mainAxis || 0,
            crossAxis: f.crossAxis || 0,
            alignmentAxis: f.alignmentAxis,
          };
    return (
      u && "number" == typeof v && (m = "end" === u ? -1 * v : v),
      l ? { x: m * c, y: y * s } : { x: y * s, y: m * c }
    );
  }
  var N = n(84157);
  function j(e) {
    let t = (0, N.L9)(e),
      n = parseFloat(t.width) || 0,
      r = parseFloat(t.height) || 0,
      o = (0, N.sb)(e),
      a = o ? e.offsetWidth : n,
      i = o ? e.offsetHeight : r,
      l = u(n) !== a || u(r) !== i;
    return (l && ((n = a), (r = i)), { width: n, height: r, $: l });
  }
  function L(e) {
    return (0, N.vq)(e) ? e : e.contextElement;
  }
  function z(e) {
    let t = L(e);
    if (!(0, N.sb)(t)) return s(1);
    let n = t.getBoundingClientRect(),
      { width: r, height: o, $: a } = j(t),
      i = (a ? u(n.width) : n.width) / r,
      l = (a ? u(n.height) : n.height) / o;
    return (
      (i && Number.isFinite(i)) || (i = 1),
      (l && Number.isFinite(l)) || (l = 1),
      { x: i, y: l }
    );
  }
  let U = s(0);
  function Y(e) {
    let t = (0, N.zk)(e);
    return (0, N.Tc)() && t.visualViewport
      ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
      : U;
  }
  function I(e, t, n, r) {
    var o;
    (void 0 === t && (t = !1), void 0 === n && (n = !1));
    let a = e.getBoundingClientRect(),
      i = L(e),
      u = s(1);
    t && (r ? (0, N.vq)(r) && (u = z(r)) : (u = z(e)));
    let l = (void 0 === (o = n) && (o = !1), r && (!o || r === (0, N.zk)(i)) && o) ? Y(i) : s(0),
      c = (a.left + l.x) / u.x,
      f = (a.top + l.y) / u.y,
      d = a.width / u.x,
      h = a.height / u.y;
    if (i) {
      let e = (0, N.zk)(i),
        t = r && (0, N.vq)(r) ? (0, N.zk)(r) : r,
        n = e,
        o = (0, N._m)(n);
      for (; o && r && t !== n;) {
        let e = z(o),
          t = o.getBoundingClientRect(),
          r = (0, N.L9)(o),
          a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
          i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
        ((c *= e.x),
          (f *= e.y),
          (d *= e.x),
          (h *= e.y),
          (c += a),
          (f += i),
          (n = (0, N.zk)(o)),
          (o = (0, N._m)(n)));
      }
    }
    return O({ width: d, height: h, x: c, y: f });
  }
  function F(e, t) {
    let n = (0, N.CP)(e).scrollLeft;
    return t ? t.left + n : I((0, N.ep)(e)).left + n;
  }
  function W(e, t) {
    let n = e.getBoundingClientRect();
    return { x: n.left + t.scrollLeft - F(e, n), y: n.top + t.scrollTop };
  }
  let H = new Set(["absolute", "fixed"]);
  function B(e, t, n) {
    var r;
    let o;
    if ("viewport" === t)
      o = (function (e, t) {
        let n = (0, N.zk)(e),
          r = (0, N.ep)(e),
          o = n.visualViewport,
          a = r.clientWidth,
          i = r.clientHeight,
          u = 0,
          l = 0;
        if (o) {
          ((a = o.width), (i = o.height));
          let e = (0, N.Tc)();
          (!e || (e && "fixed" === t)) && ((u = o.offsetLeft), (l = o.offsetTop));
        }
        let s = F(r);
        if (s <= 0) {
          let e = r.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            o =
              ("CSS1Compat" === e.compatMode &&
                parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
              0,
            i = Math.abs(r.clientWidth - t.clientWidth - o);
          i <= 25 && (a -= i);
        } else s <= 25 && (a += s);
        return { width: a, height: i, x: u, y: l };
      })(e, n);
    else if ("document" === t) {
      let t, n, a, u, l, s, c;
      ((r = (0, N.ep)(e)),
        (t = (0, N.ep)(r)),
        (n = (0, N.CP)(r)),
        (a = r.ownerDocument.body),
        (u = i(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth)),
        (l = i(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight)),
        (s = -n.scrollLeft + F(r)),
        (c = -n.scrollTop),
        "rtl" === (0, N.L9)(a).direction && (s += i(t.clientWidth, a.clientWidth) - u),
        (o = { width: u, height: l, x: s, y: c }));
    } else if ((0, N.vq)(t)) {
      let e, r, a, i, u, l;
      ((r = (e = I(t, !0, "fixed" === n)).top + t.clientTop),
        (a = e.left + t.clientLeft),
        (i = (0, N.sb)(t) ? z(t) : s(1)),
        (u = t.clientWidth * i.x),
        (l = t.clientHeight * i.y),
        (o = { width: u, height: l, x: a * i.x, y: r * i.y }));
    } else {
      let n = Y(e);
      o = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return O(o);
  }
  function q(e) {
    return "static" === (0, N.L9)(e).position;
  }
  function V(e, t) {
    if (!(0, N.sb)(e) || "fixed" === (0, N.L9)(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return ((0, N.ep)(e) === n && (n = n.ownerDocument.body), n);
  }
  function $(e, t) {
    let n = (0, N.zk)(e);
    if ((0, N.Tf)(e)) return n;
    if (!(0, N.sb)(e)) {
      let t = (0, N.$4)(e);
      for (; t && !(0, N.eu)(t);) {
        if ((0, N.vq)(t) && !q(t)) return t;
        t = (0, N.$4)(t);
      }
      return n;
    }
    let r = V(e, t);
    for (; r && (0, N.Lv)(r) && q(r);) r = V(r, t);
    return r && (0, N.eu)(r) && q(r) && !(0, N.sQ)(r) ? n : r || (0, N.gJ)(e) || n;
  }
  let G = async function (e) {
      let t = this.getOffsetParent || $,
        n = this.getDimensions,
        r = await n(e.floating);
      return {
        reference: (function (e, t, n) {
          let r = (0, N.sb)(t),
            o = (0, N.ep)(t),
            a = "fixed" === n,
            i = I(e, !0, a, t),
            u = { scrollLeft: 0, scrollTop: 0 },
            l = s(0);
          if (r || (!r && !a))
            if ((("body" !== (0, N.mq)(t) || (0, N.ZU)(o)) && (u = (0, N.CP)(t)), r)) {
              let e = I(t, !0, a, t);
              ((l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop));
            } else o && (l.x = F(o));
          a && !r && o && (l.x = F(o));
          let c = !o || r || a ? s(0) : W(o, u);
          return {
            x: i.left + u.scrollLeft - l.x - c.x,
            y: i.top + u.scrollTop - l.y - c.y,
            width: i.width,
            height: i.height,
          };
        })(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
      };
    },
    X = {
      convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
        let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
          a = "fixed" === o,
          i = (0, N.ep)(r),
          u = !!t && (0, N.Tf)(t.floating);
        if (r === i || (u && a)) return n;
        let l = { scrollLeft: 0, scrollTop: 0 },
          c = s(1),
          f = s(0),
          d = (0, N.sb)(r);
        if (
          (d || (!d && !a)) &&
          (("body" !== (0, N.mq)(r) || (0, N.ZU)(i)) && (l = (0, N.CP)(r)), (0, N.sb)(r))
        ) {
          let e = I(r);
          ((c = z(r)), (f.x = e.x + r.clientLeft), (f.y = e.y + r.clientTop));
        }
        let h = !i || d || a ? s(0) : W(i, l);
        return {
          width: n.width * c.x,
          height: n.height * c.y,
          x: n.x * c.x - l.scrollLeft * c.x + f.x + h.x,
          y: n.y * c.y - l.scrollTop * c.y + f.y + h.y,
        };
      },
      getDocumentElement: N.ep,
      getClippingRect: function (e) {
        let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
          u = [
            ...("clippingAncestors" === n
              ? (0, N.Tf)(t)
                ? []
                : (function (e, t) {
                    let n = t.get(e);
                    if (n) return n;
                    let r = (0, N.v9)(e, [], !1).filter(
                        (e) => (0, N.vq)(e) && "body" !== (0, N.mq)(e),
                      ),
                      o = null,
                      a = "fixed" === (0, N.L9)(e).position,
                      i = a ? (0, N.$4)(e) : e;
                    for (; (0, N.vq)(i) && !(0, N.eu)(i);) {
                      let t = (0, N.L9)(i),
                        n = (0, N.sQ)(i);
                      (n || "fixed" !== t.position || (o = null),
                        (
                          a
                            ? !n && !o
                            : (!n && "static" === t.position && !!o && H.has(o.position)) ||
                              ((0, N.ZU)(i) &&
                                !n &&
                                (function e(t, n) {
                                  let r = (0, N.$4)(t);
                                  return (
                                    !(r === n || !(0, N.vq)(r) || (0, N.eu)(r)) &&
                                    ("fixed" === (0, N.L9)(r).position || e(r, n))
                                  );
                                })(e, i))
                        )
                          ? (r = r.filter((e) => e !== i))
                          : (o = t),
                        (i = (0, N.$4)(i)));
                    }
                    return (t.set(e, r), r);
                  })(t, this._c)
              : [].concat(n)),
            r,
          ],
          l = u[0],
          s = u.reduce(
            (e, n) => {
              let r = B(t, n, o);
              return (
                (e.top = i(r.top, e.top)),
                (e.right = a(r.right, e.right)),
                (e.bottom = a(r.bottom, e.bottom)),
                (e.left = i(r.left, e.left)),
                e
              );
            },
            B(t, l, o),
          );
        return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
      },
      getOffsetParent: $,
      getElementRects: G,
      getClientRects: function (e) {
        return Array.from(e.getClientRects());
      },
      getDimensions: function (e) {
        let { width: t, height: n } = j(e);
        return { width: t, height: n };
      },
      getScale: z,
      isElement: N.vq,
      isRTL: function (e) {
        return "rtl" === (0, N.L9)(e).direction;
      },
    };
  function Q(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
  }
  function Z(e, t, n, r) {
    let o;
    void 0 === r && (r = {});
    let {
        ancestorScroll: u = !0,
        ancestorResize: s = !0,
        elementResize: c = "function" == typeof ResizeObserver,
        layoutShift: f = "function" == typeof IntersectionObserver,
        animationFrame: d = !1,
      } = r,
      h = L(e),
      p = u || s ? [...(h ? (0, N.v9)(h) : []), ...(0, N.v9)(t)] : [];
    p.forEach((e) => {
      (u && e.addEventListener("scroll", n, { passive: !0 }), s && e.addEventListener("resize", n));
    });
    let y =
        h && f
          ? (function (e, t) {
              let n,
                r = null,
                o = (0, N.ep)(e);
              function u() {
                var e;
                (clearTimeout(n), null == (e = r) || e.disconnect(), (r = null));
              }
              return (
                !(function s(c, f) {
                  (void 0 === c && (c = !1), void 0 === f && (f = 1), u());
                  let d = e.getBoundingClientRect(),
                    { left: h, top: p, width: y, height: m } = d;
                  if ((c || t(), !y || !m)) return;
                  let v = {
                      rootMargin:
                        -l(p) +
                        "px " +
                        -l(o.clientWidth - (h + y)) +
                        "px " +
                        -l(o.clientHeight - (p + m)) +
                        "px " +
                        -l(h) +
                        "px",
                      threshold: i(0, a(1, f)) || 1,
                    },
                    g = !0;
                  function b(t) {
                    let r = t[0].intersectionRatio;
                    if (r !== f) {
                      if (!g) return s();
                      r
                        ? s(!1, r)
                        : (n = setTimeout(() => {
                            s(!1, 1e-7);
                          }, 1e3));
                    }
                    (1 !== r || Q(d, e.getBoundingClientRect()) || s(), (g = !1));
                  }
                  try {
                    r = new IntersectionObserver(b, { ...v, root: o.ownerDocument });
                  } catch (e) {
                    r = new IntersectionObserver(b, v);
                  }
                  r.observe(e);
                })(!0),
                u
              );
            })(h, n)
          : null,
      m = -1,
      v = null;
    c &&
      ((v = new ResizeObserver((e) => {
        let [r] = e;
        (r &&
          r.target === h &&
          v &&
          (v.unobserve(t),
          cancelAnimationFrame(m),
          (m = requestAnimationFrame(() => {
            var e;
            null == (e = v) || e.observe(t);
          }))),
          n());
      })),
      h && !d && v.observe(h),
      v.observe(t));
    let g = d ? I(e) : null;
    return (
      d &&
        (function t() {
          let r = I(e);
          (g && !Q(g, r) && n(), (g = r), (o = requestAnimationFrame(t)));
        })(),
      n(),
      () => {
        var e;
        (p.forEach((e) => {
          (u && e.removeEventListener("scroll", n), s && e.removeEventListener("resize", n));
        }),
          null == y || y(),
          null == (e = v) || e.disconnect(),
          (v = null),
          d && cancelAnimationFrame(o));
      }
    );
  }
  let K = function (e) {
      return (
        void 0 === e && (e = 0),
        {
          name: "offset",
          options: e,
          async fn(t) {
            var n, r;
            let { x: o, y: a, placement: i, middlewareData: u } = t,
              l = await P(t, e);
            return i === (null == (n = u.offset) ? void 0 : n.placement) &&
              null != (r = u.arrow) &&
              r.alignmentOffset
              ? {}
              : { x: o + l.x, y: a + l.y, data: { ...l, placement: i } };
          },
        }
      );
    },
    J = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "autoPlacement",
          options: e,
          async fn(t) {
            var n, r, a, i;
            let { rects: u, middlewareData: l, placement: s, platform: c, elements: f } = t,
              {
                crossAxis: y = !1,
                alignment: m,
                allowedPlacements: v = o,
                autoAlignment: g = !0,
                ..._
              } = d(e, t),
              k =
                void 0 !== m || v === o
                  ? ((i = m || null)
                      ? [...v.filter((e) => p(e) === i), ...v.filter((e) => p(e) !== i)]
                      : v.filter((e) => h(e) === e)
                    ).filter((e) => !i || p(e) === i || (!!g && w(e) !== e))
                  : v,
              x = await A(t, _),
              S = (null == (n = l.autoPlacement) ? void 0 : n.index) || 0,
              E = k[S];
            if (null == E) return {};
            let O = b(E, u, await (null == c.isRTL ? void 0 : c.isRTL(f.floating)));
            if (s !== E) return { reset: { placement: k[0] } };
            let T = [x[h(E)], x[O[0]], x[O[1]]],
              R = [
                ...((null == (r = l.autoPlacement) ? void 0 : r.overflows) || []),
                { placement: E, overflows: T },
              ],
              C = k[S + 1];
            if (C) return { data: { index: S + 1, overflows: R }, reset: { placement: C } };
            let M = R.map((e) => {
                let t = p(e.placement);
                return [
                  e.placement,
                  t && y ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
                  e.overflows,
                ];
              }).sort((e, t) => e[1] - t[1]),
              D =
                (null ==
                (a = M.filter((e) => e[2].slice(0, p(e[0]) ? 2 : 3).every((e) => e <= 0))[0])
                  ? void 0
                  : a[0]) || M[0][0];
            return D !== s ? { data: { index: S + 1, overflows: R }, reset: { placement: D } } : {};
          },
        }
      );
    },
    ee = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "shift",
          options: e,
          async fn(t) {
            let { x: n, y: r, placement: o } = t,
              {
                mainAxis: u = !0,
                crossAxis: l = !1,
                limiter: s = {
                  fn: (e) => {
                    let { x: t, y: n } = e;
                    return { x: t, y: n };
                  },
                },
                ...c
              } = d(e, t),
              f = { x: n, y: r },
              p = await A(t, c),
              m = g(h(o)),
              v = y(m),
              b = f[v],
              w = f[m];
            if (u) {
              let e = "y" === v ? "top" : "left",
                t = "y" === v ? "bottom" : "right",
                n = b + p[e],
                r = b - p[t];
              b = i(n, a(b, r));
            }
            if (l) {
              let e = "y" === m ? "top" : "left",
                t = "y" === m ? "bottom" : "right",
                n = w + p[e],
                r = w - p[t];
              w = i(n, a(w, r));
            }
            let _ = s.fn({ ...t, [v]: b, [m]: w });
            return { ..._, data: { x: _.x - n, y: _.y - r, enabled: { [v]: u, [m]: l } } };
          },
        }
      );
    },
    et = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "flip",
          options: e,
          async fn(t) {
            var n, r, o, a, i;
            let u,
              l,
              s,
              {
                placement: c,
                middlewareData: f,
                rects: y,
                initialPlacement: m,
                platform: v,
                elements: O,
              } = t,
              {
                mainAxis: T = !0,
                crossAxis: R = !0,
                fallbackPlacements: C,
                fallbackStrategy: M = "bestFit",
                fallbackAxisSideDirection: D = "none",
                flipAlignment: P = !0,
                ...N
              } = d(e, t);
            if (null != (n = f.arrow) && n.alignmentOffset) return {};
            let j = h(c),
              L = g(m),
              z = h(m) === m,
              U = await (null == v.isRTL ? void 0 : v.isRTL(O.floating)),
              Y = C || (z || !P ? [E(m)] : ((u = E(m)), [w(m), u, w(u)])),
              I = "none" !== D;
            !C &&
              I &&
              Y.push(
                ...((l = p(m)),
                (s = (function (e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      if (n) return t ? k : _;
                      return t ? _ : k;
                    case "left":
                    case "right":
                      return t ? x : S;
                    default:
                      return [];
                  }
                })(h(m), "start" === D, U)),
                l && ((s = s.map((e) => e + "-" + l)), P && (s = s.concat(s.map(w)))),
                s),
              );
            let F = [m, ...Y],
              W = await A(t, N),
              H = [],
              B = (null == (r = f.flip) ? void 0 : r.overflows) || [];
            if ((T && H.push(W[j]), R)) {
              let e = b(c, y, U);
              H.push(W[e[0]], W[e[1]]);
            }
            if (((B = [...B, { placement: c, overflows: H }]), !H.every((e) => e <= 0))) {
              let e = ((null == (o = f.flip) ? void 0 : o.index) || 0) + 1,
                t = F[e];
              if (
                t &&
                ("alignment" !== R ||
                  L === g(t) ||
                  B.every((e) => g(e.placement) !== L || e.overflows[0] > 0))
              )
                return { data: { index: e, overflows: B }, reset: { placement: t } };
              let n =
                null ==
                (a = B.filter((e) => e.overflows[0] <= 0).sort(
                  (e, t) => e.overflows[1] - t.overflows[1],
                )[0])
                  ? void 0
                  : a.placement;
              if (!n)
                switch (M) {
                  case "bestFit": {
                    let e =
                      null ==
                      (i = B.filter((e) => {
                        if (I) {
                          let t = g(e.placement);
                          return t === L || "y" === t;
                        }
                        return !0;
                      })
                        .map((e) => [
                          e.placement,
                          e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                        ])
                        .sort((e, t) => e[1] - t[1])[0])
                        ? void 0
                        : i[0];
                    e && (n = e);
                    break;
                  }
                  case "initialPlacement":
                    n = m;
                }
              if (c !== n) return { reset: { placement: n } };
            }
            return {};
          },
        }
      );
    },
    en = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "size",
          options: e,
          async fn(t) {
            var n, r;
            let o,
              u,
              { placement: l, rects: s, platform: c, elements: f } = t,
              { apply: y = () => {}, ...m } = d(e, t),
              v = await A(t, m),
              b = h(l),
              w = p(l),
              _ = "y" === g(l),
              { width: k, height: x } = s.floating;
            "top" === b || "bottom" === b
              ? ((o = b),
                (u =
                  w === ((await (null == c.isRTL ? void 0 : c.isRTL(f.floating))) ? "start" : "end")
                    ? "left"
                    : "right"))
              : ((u = b), (o = "end" === w ? "top" : "bottom"));
            let S = x - v.top - v.bottom,
              E = k - v.left - v.right,
              O = a(x - v[o], S),
              T = a(k - v[u], E),
              R = !t.middlewareData.shift,
              C = O,
              M = T;
            if (
              (null != (n = t.middlewareData.shift) && n.enabled.x && (M = E),
              null != (r = t.middlewareData.shift) && r.enabled.y && (C = S),
              R && !w)
            ) {
              let e = i(v.left, 0),
                t = i(v.right, 0),
                n = i(v.top, 0),
                r = i(v.bottom, 0);
              _
                ? (M = k - 2 * (0 !== e || 0 !== t ? e + t : i(v.left, v.right)))
                : (C = x - 2 * (0 !== n || 0 !== r ? n + r : i(v.top, v.bottom)));
            }
            await y({ ...t, availableWidth: M, availableHeight: C });
            let D = await c.getDimensions(f.floating);
            return k !== D.width || x !== D.height ? { reset: { rects: !0 } } : {};
          },
        }
      );
    },
    er = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          name: "hide",
          options: e,
          async fn(t) {
            let { rects: n } = t,
              { strategy: r = "referenceHidden", ...o } = d(e, t);
            switch (r) {
              case "referenceHidden": {
                let e = C(await A(t, { ...o, elementContext: "reference" }), n.reference);
                return { data: { referenceHiddenOffsets: e, referenceHidden: M(e) } };
              }
              case "escaped": {
                let e = C(await A(t, { ...o, altBoundary: !0 }), n.floating);
                return { data: { escapedOffsets: e, escaped: M(e) } };
              }
              default:
                return {};
            }
          },
        }
      );
    },
    eo = function (e) {
      return (
        void 0 === e && (e = {}),
        {
          options: e,
          fn(t) {
            let { x: n, y: r, placement: o, rects: a, middlewareData: i } = t,
              { offset: u = 0, mainAxis: l = !0, crossAxis: s = !0 } = d(e, t),
              c = { x: n, y: r },
              f = g(o),
              p = y(f),
              m = c[p],
              v = c[f],
              b = d(u, t),
              w =
                "number" == typeof b
                  ? { mainAxis: b, crossAxis: 0 }
                  : { mainAxis: 0, crossAxis: 0, ...b };
            if (l) {
              let e = "y" === p ? "height" : "width",
                t = a.reference[p] - a.floating[e] + w.mainAxis,
                n = a.reference[p] + a.reference[e] - w.mainAxis;
              m < t ? (m = t) : m > n && (m = n);
            }
            if (s) {
              var _, k;
              let e = "y" === p ? "width" : "height",
                t = D.has(h(o)),
                n =
                  a.reference[f] -
                  a.floating[e] +
                  ((t && (null == (_ = i.offset) ? void 0 : _[f])) || 0) +
                  (t ? 0 : w.crossAxis),
                r =
                  a.reference[f] +
                  a.reference[e] +
                  (t ? 0 : (null == (k = i.offset) ? void 0 : k[f]) || 0) -
                  (t ? w.crossAxis : 0);
              v < n ? (v = n) : v > r && (v = r);
            }
            return { [p]: m, [f]: v };
          },
        }
      );
    },
    ea = (e, t, n) => {
      let r = new Map(),
        o = { platform: X, ...n },
        a = { ...o.platform, _c: r };
      return R(e, t, { ...o, platform: a });
    };
}
