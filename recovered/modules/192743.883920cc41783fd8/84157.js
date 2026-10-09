/* Recovered shipped factory. Module 84157.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 695608..698246
 * Raw property SHA-256: 357bc63f5460b514bc02d25146c27f689f5f6c2275ff077c9d78c1bbd67e9954
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  function r() {
    return "u" > typeof window;
  }
  function o(e) {
    return u(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function a(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
  }
  function i(e) {
    var t;
    return null == (t = (u(e) ? e.ownerDocument : e.document) || window.document)
      ? void 0
      : t.documentElement;
  }
  function u(e) {
    return !!r() && (e instanceof Node || e instanceof a(e).Node);
  }
  function l(e) {
    return !!r() && (e instanceof Element || e instanceof a(e).Element);
  }
  function s(e) {
    return !!r() && (e instanceof HTMLElement || e instanceof a(e).HTMLElement);
  }
  function c(e) {
    return (
      !(!r() || "u" < typeof ShadowRoot) &&
      (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot)
    );
  }
  n.d(t, {
    $4: () => T,
    CP: () => O,
    L9: () => E,
    Ll: () => u,
    Lv: () => p,
    Ng: () => c,
    Tc: () => k,
    Tf: () => m,
    ZU: () => d,
    _m: () => R,
    ep: () => i,
    eu: () => S,
    gJ: () => _,
    mq: () => o,
    sQ: () => w,
    sb: () => s,
    v9: () =>
      function e(t, n, r) {
        var o;
        (void 0 === n && (n = []), void 0 === r && (r = !0));
        let i = (function e(t) {
            let n = T(t);
            return S(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : s(n) && d(n)
                ? n
                : e(n);
          })(t),
          u = i === (null == (o = t.ownerDocument) ? void 0 : o.body),
          l = a(i);
        if (u) {
          let t = R(l);
          return n.concat(l, l.visualViewport || [], d(i) ? i : [], t && r ? e(t) : []);
        }
        return n.concat(i, e(i, [], r));
      },
    vq: () => l,
    zk: () => a,
  });
  let f = new Set(["inline", "contents"]);
  function d(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: o } = E(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !f.has(o);
  }
  let h = new Set(["table", "td", "th"]);
  function p(e) {
    return h.has(o(e));
  }
  let y = [":popover-open", ":modal"];
  function m(e) {
    return y.some((t) => {
      try {
        return e.matches(t);
      } catch (e) {
        return !1;
      }
    });
  }
  let v = ["transform", "translate", "scale", "rotate", "perspective"],
    g = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    b = ["paint", "layout", "strict", "content"];
  function w(e) {
    let t = k(),
      n = l(e) ? E(e) : e;
    return (
      v.some((e) => !!n[e] && "none" !== n[e]) ||
      (!!n.containerType && "normal" !== n.containerType) ||
      (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
      (!t && !!n.filter && "none" !== n.filter) ||
      g.some((e) => (n.willChange || "").includes(e)) ||
      b.some((e) => (n.contain || "").includes(e))
    );
  }
  function _(e) {
    let t = T(e);
    for (; s(t) && !S(t);) {
      if (w(t)) return t;
      if (m(t)) break;
      t = T(t);
    }
    return null;
  }
  function k() {
    return !("u" < typeof CSS) && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  let x = new Set(["html", "body", "#document"]);
  function S(e) {
    return x.has(o(e));
  }
  function E(e) {
    return a(e).getComputedStyle(e);
  }
  function O(e) {
    return l(e)
      ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
      : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
  }
  function T(e) {
    if ("html" === o(e)) return e;
    let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || i(e);
    return c(t) ? t.host : t;
  }
  function R(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
  }
}
