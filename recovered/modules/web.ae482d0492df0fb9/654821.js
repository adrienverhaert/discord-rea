/* Recovered shipped factory. Module 654821.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3385444..3387537
 * Raw property SHA-256: 89fc7b17290579ba8574f0994b153636a1ef56a5de66ad927f2f31f481c98dda
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t),
    n.d(t, { hasDomParent: () => r, isDOMRangeCollapsed: () => a, normalizeDOMPoint: () => s }));
  var i = n(235599);
  {
    i.rL.toSlateRange = (e, t, n) => {
      var r;
      let s,
        { exactMatch: l, suppressThrow: o } = n,
        {
          anchorNode: d,
          anchorOffset: u,
          focusNode: _,
          focusOffset: E,
        } = null != (s = (r = t) && r.anchorNode && c(r.anchorNode)) && r instanceof s.Selection
          ? {
              anchorNode: t.anchorNode,
              anchorOffset: t.anchorOffset,
              focusNode: t.focusNode,
              focusOffset: t.focusOffset,
            }
          : {
              anchorNode: t.startContainer,
              anchorOffset: t.startOffset,
              focusNode: t.endContainer,
              focusOffset: t.endOffset,
            },
        A = a(d, u, _, E);
      if (null == d || null == _ || null == u || null == E) {
        if (o) return null;
        throw Error("Cannot resolve a Slate range from DOM range");
      }
      let h = i.rL.toSlatePoint(e, [d, u], { exactMatch: l, suppressThrow: o }),
        f = A ? h : i.rL.toSlatePoint(e, [_, E], { exactMatch: l, suppressThrow: o });
      return null != h && null != f ? { anchor: h, focus: f } : null;
    };
    let e = i.rL.toSlatePoint;
    i.rL.toSlatePoint = (t, n, i) => {
      let { exactMatch: r, suppressThrow: a, direction: l = "forward" } = i;
      r || (n = s(n, l));
      try {
        return e(t, n, { exactMatch: !0, suppressThrow: a });
      } catch (e) {
        if (a) return null;
        throw e;
      }
    };
  }
  function r(e, t) {
    if (null == t) return !1;
    for (; null != e;) {
      if (e === t) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  function a(e, t, n, i) {
    return e === n && t === i;
  }
  function s(e, t) {
    let n,
      [i, r] = e;
    if (!o(i) || 0 === i.childNodes.length) return e;
    for (
      "forward" === t && r === i.childNodes.length && (t = "backward"),
        "backward" === t && r--,
        [i, n] = l(i, r, t),
        "forward" === t && n < r ? (t = "backward") : "backward" === t && n > r && (t = "forward"),
        r = n;
      o(i) && i.childNodes.length > 0;
    ) {
      let e = "backward" === t ? i.childNodes.length - 1 : 0;
      i = l(i, e, t)[0];
    }
    let a = "backward" === t && null != i.textContent ? i.textContent.length : 0;
    return [i, a];
  }
  function l(e, t, n) {
    var i;
    let { childNodes: r } = e,
      a = r[t],
      s = t,
      l = !1,
      c = !1;
    for (
      ;
      ((d((i = a)) && 8 === i.nodeType) ||
        (o(a) && 0 === a.childNodes.length) ||
        (o(a) && "false" === a.getAttribute("contenteditable"))) &&
      (!l || !c);
    ) {
      if (s >= r.length) {
        ((l = !0), (s = t - 1), (n = "backward"));
        continue;
      }
      if (s < 0) {
        ((c = !0), (s = t + 1), (n = "forward"));
        continue;
      }
      ((a = r[s]), (t = s), (s += "forward" === n ? 1 : -1));
    }
    return [a, t];
  }
  function o(e) {
    return d(e) && 1 === e.nodeType;
  }
  function d(e) {
    let t = c(e);
    return null != t && e instanceof t.Node;
  }
  function c(e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || null;
  }
}
