/* Recovered shipped factory. Module 235599.
 * Source: recovered/web/assets/918146.e792a241e8075058.js
 * UTF-16 property offsets: 95..56530
 * Raw property SHA-256: 88f83958a269d2365ab2c15be1310433dac9cbd38c778b048d88fdb827acab14
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  r.d(t, {
    A: () => tl,
    Fo: () => e6,
    RV: () => eb,
    f7: () => ej,
    o$: () => tC,
    rL: () => eh,
    zL: () => to,
  });
  var u = r(877413),
    n = r.n(u),
    a = r(649852),
    o = r.n(a),
    i = r(64015),
    s = r.n(i),
    l = r(582128),
    c = r(104681),
    D = r(719442),
    d = r(415171),
    f = r(294106),
    C = r(333007);
  function h(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = r),
      e
    );
  }
  function B(e, t) {
    if (null == e) return {};
    var r,
      u,
      n = (function (e, t) {
        if (null == e) return {};
        var r,
          u,
          n = {},
          a = Object.keys(e);
        for (u = 0; u < a.length; u++) ((r = a[u]), t.indexOf(r) >= 0 || (n[r] = e[r]));
        return n;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (u = 0; u < a.length; u++)
        ((r = a[u]),
          !(t.indexOf(r) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(e, r) &&
            (n[r] = e[r]));
    }
    return n;
  }
  var v = 0;
  class p {
    constructor() {
      this.id = "".concat(v++);
    }
  }
  var g = new WeakMap(),
    E = new WeakMap(),
    A = new WeakMap(),
    F = new WeakMap(),
    m = new WeakMap(),
    w = new WeakMap(),
    b = new WeakMap(),
    y = new WeakMap(),
    x = new WeakMap(),
    O = new WeakMap(),
    k = new WeakMap(),
    P = new WeakMap(),
    S = new WeakMap(),
    T = new WeakMap(),
    j = new WeakMap(),
    N = new WeakMap(),
    R = new WeakMap(),
    M = new WeakMap(),
    K = new WeakMap(),
    L = new WeakMap(),
    _ = new WeakMap(),
    W = Symbol("placeholder"),
    q = Symbol("mark-placeholder"),
    I = globalThis.Text,
    Q = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    V = (e) => H(e) && 8 === e.nodeType,
    z = (e) => H(e) && 1 === e.nodeType,
    H = (e) => {
      var t = Q(e);
      return !!t && e instanceof t.Node;
    },
    U = (e) => {
      var t = e && e.anchorNode && Q(e.anchorNode);
      return !!t && e instanceof t.Selection;
    },
    $ = (e) => H(e) && 3 === e.nodeType,
    Y = (e, t, r) => {
      for (
        var { childNodes: u } = e, n = u[t], a = t, o = !1, i = !1;
        (V(n) ||
          (z(n) && 0 === n.childNodes.length) ||
          (z(n) && "false" === n.getAttribute("contenteditable"))) &&
        (!o || !i);
      ) {
        if (a >= u.length) {
          ((o = !0), (a = t - 1), (r = "backward"));
          continue;
        }
        if (a < 0) {
          ((i = !0), (a = t + 1), (r = "forward"));
          continue;
        }
        ((n = u[a]), (t = a), (a += "forward" === r ? 1 : -1));
      }
      return [n, t];
    },
    J = (e, t, r) => {
      var [u] = Y(e, t, r);
      return u;
    },
    Z = (e) => {
      var t = "";
      if ($(e) && e.nodeValue) return e.nodeValue;
      if (z(e)) {
        for (var r of Array.from(e.childNodes)) t += Z(r);
        var u = getComputedStyle(e).getPropertyValue("display");
        ("block" === u || "list" === u || "BR" === e.tagName) && (t += "\n");
      }
      return t;
    },
    X = /data-slate-fragment="(.+?)"/m,
    G = (e, t, r) => {
      var { target: u } = t;
      if (z(u) && u.matches('[contentEditable="false"]')) return !1;
      var { document: n } = eh.getWindow(e);
      if (n.contains(u)) return eh.hasDOMNode(e, u, { editable: !0 });
      var a = r.find((e) => {
        var { addedNodes: t, removedNodes: r } = e;
        for (var n of t) if (n === u || n.contains(u)) return !0;
        for (var a of r) if (a === u || a.contains(u)) return !0;
      });
      return !!a && a !== t && G(e, a, r);
    },
    ee = parseInt(l.version.split(".")[0], 10) >= 17,
    et =
      "u" > typeof navigator &&
      "u" > typeof window &&
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !window.MSStream,
    er = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    eu = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    en = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ea = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    eo =
      "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    ei = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    es =
      "u" > typeof navigator &&
      /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    el = eu && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    ec =
      "u" > typeof navigator &&
      /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    eD = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    ed = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    ef =
      "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    eC =
      (!es || !el) &&
      !eo &&
      "u" > typeof globalThis &&
      globalThis.InputEvent &&
      "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    eh = {
      isComposing: (e) => !!P.get(e),
      getWindow(e) {
        var t = A.get(e);
        if (!t) throw Error("Unable to find a host window element for this editor");
        return t;
      },
      findKey(e, t) {
        var r = y.get(t);
        return (r || ((r = new p()), y.set(t, r)), r);
      },
      findPath(e, t) {
        for (var r = [], u = t; ;) {
          var n = E.get(u);
          if (null == n)
            if (D.KE.isEditor(u)) return r;
            else break;
          var a = g.get(u);
          if (null == a) break;
          (r.unshift(a), (u = n));
        }
        throw Error("Unable to find the path for Slate node: ".concat(D.h6.stringify(t)));
      },
      findDocumentOrShadowRoot(e) {
        var t = eh.toDOMNode(e, e),
          r = t.getRootNode();
        return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection
          ? r
          : t.ownerDocument;
      },
      isFocused: (e) => !!k.get(e),
      isReadOnly: (e) => !!O.get(e),
      blur(e) {
        var t = eh.toDOMNode(e, e),
          r = eh.findDocumentOrShadowRoot(e);
        (k.set(e, !1), r.activeElement === t && t.blur());
      },
      focus(e) {
        var t = eh.toDOMNode(e, e),
          r = eh.findDocumentOrShadowRoot(e);
        (k.set(e, !0), r.activeElement !== t && t.focus({ preventScroll: !0 }));
      },
      deselect(e) {
        var { selection: t } = e,
          r = eh.findDocumentOrShadowRoot(e).getSelection();
        (r && r.rangeCount > 0 && r.removeAllRanges(), t && D.gB.deselect(e));
      },
      hasDOMNode(e, t) {
        var r,
          u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { editable: n = !1 } = u,
          a = eh.toDOMNode(e, e);
        try {
          r = z(t) ? t : t.parentElement;
        } catch (e) {
          if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
        }
        return (
          !!r &&
          r.closest("[data-slate-editor]") === a &&
          (!n ||
            !!r.isContentEditable ||
            ("boolean" == typeof r.isContentEditable &&
              r.closest('[contenteditable="false"]') === a) ||
            !!r.getAttribute("data-slate-zero-width"))
        );
      },
      insertData(e, t) {
        e.insertData(t);
      },
      insertFragmentData: (e, t) => e.insertFragmentData(t),
      insertTextData: (e, t) => e.insertTextData(t),
      setFragmentData(e, t, r) {
        e.setFragmentData(t, r);
      },
      toDOMNode(e, t) {
        var r = x.get(e),
          u = D.KE.isEditor(t) ? F.get(e) : null == r ? void 0 : r.get(eh.findKey(e, t));
        if (!u)
          throw Error("Cannot resolve a DOM node from Slate node: ".concat(D.h6.stringify(t)));
        return u;
      },
      toDOMPoint(e, t) {
        var [r] = D.KE.node(e, t.path),
          u = eh.toDOMNode(e, r);
        D.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
        for (
          var n = Array.from(u.querySelectorAll("[data-slate-string], [data-slate-zero-width]")),
            a = 0,
            o = 0;
          o < n.length;
          o++
        ) {
          var i = n[o],
            s = i.childNodes[0];
          if (null != s && null != s.textContent) {
            var { length: l } = s.textContent,
              c = i.getAttribute("data-slate-length"),
              d = a + (null == c ? l : parseInt(c, 10)),
              f = n[o + 1];
            if (t.offset === d && null != f && f.hasAttribute("data-slate-mark-placeholder")) {
              var C,
                h,
                B = f.childNodes[0];
              C = [
                B instanceof I ? B : f,
                null != (h = f.textContent) && h.startsWith("\uFEFF") ? 1 : 0,
              ];
              break;
            }
            if (t.offset <= d) {
              C = [s, Math.min(l, Math.max(0, t.offset - a))];
              break;
            }
            a = d;
          }
        }
        if (!C)
          throw Error("Cannot resolve a DOM point from Slate point: ".concat(D.h6.stringify(t)));
        return C;
      },
      toDOMRange(e, t) {
        var { anchor: r, focus: u } = t,
          n = D.Q6.isBackward(t),
          a = eh.toDOMPoint(e, r),
          o = D.Q6.isCollapsed(t) ? a : eh.toDOMPoint(e, u),
          i = eh.getWindow(e).document.createRange(),
          [s, l] = n ? o : a,
          [c, d] = n ? a : o,
          f = !!(z(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"),
          C = !!(z(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
        return (i.setStart(s, f ? 1 : l), i.setEnd(c, C ? 1 : d), i);
      },
      toSlateNode(e, t) {
        var r = z(t) ? t : t.parentElement;
        r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
        var u = r ? w.get(r) : null;
        if (!u) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
        return u;
      },
      findEventRange(e, t) {
        "nativeEvent" in t && (t = t.nativeEvent);
        var r,
          { clientX: u, clientY: n, target: a } = t;
        if (null == u || null == n)
          throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
        var o = eh.toSlateNode(e, t.target),
          i = eh.findPath(e, o);
        if (D.Hg.isElement(o) && D.KE.isVoid(e, o)) {
          var s = a.getBoundingClientRect(),
            l = e.isInline(o)
              ? u - s.left < s.left + s.width - u
              : n - s.top < s.top + s.height - n,
            c = D.KE.point(e, i, { edge: l ? "start" : "end" }),
            d = l ? D.KE.before(e, c) : D.KE.after(e, c);
          if (d) return D.KE.range(e, d);
        }
        var { document: f } = eh.getWindow(e);
        if (f.caretRangeFromPoint) r = f.caretRangeFromPoint(u, n);
        else {
          var C = f.caretPositionFromPoint(u, n);
          C &&
            ((r = f.createRange()).setStart(C.offsetNode, C.offset),
            r.setEnd(C.offsetNode, C.offset));
        }
        if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
        return eh.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !1 });
      },
      toSlatePoint(e, t, r) {
        var { exactMatch: u, suppressThrow: n } = r,
          [a, o] = u
            ? t
            : ((e) => {
                var [t, r] = e;
                if (z(t) && t.childNodes.length) {
                  var u = r === t.childNodes.length,
                    n = u ? r - 1 : r;
                  for (
                    [t, n] = Y(t, n, u ? "backward" : "forward"), u = n < r;
                    z(t) && t.childNodes.length;
                  ) {
                    var a = u ? t.childNodes.length - 1 : 0;
                    t = J(t, a, u ? "backward" : "forward");
                  }
                  r = u && null != t.textContent ? t.textContent.length : 0;
                }
                return [t, r];
              })(t),
          i = a.parentNode,
          s = null,
          l = 0;
        if (i) {
          var c,
            d,
            f = eh.toDOMNode(e, e),
            C = i.closest('[data-slate-void="true"]'),
            h = C && f.contains(C) ? C : null,
            B = i.closest("[data-slate-leaf]"),
            v = null;
          if (B) {
            if ((s = B.closest('[data-slate-node="text"]'))) {
              var p = eh.getWindow(e).document.createRange();
              (p.setStart(s, 0), p.setEnd(a, o));
              var g = p.cloneContents();
              ([
                ...Array.prototype.slice.call(g.querySelectorAll("[data-slate-zero-width]")),
                ...Array.prototype.slice.call(g.querySelectorAll("[contenteditable=false]")),
              ].forEach((e) => {
                if (
                  eu &&
                  !u &&
                  e.hasAttribute("data-slate-zero-width") &&
                  e.textContent.length > 0 &&
                  "\uFEFF" !== e.textContext
                ) {
                  e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                  return;
                }
                e.parentNode.removeChild(e);
              }),
                (l = g.textContent.length),
                (v = s));
            }
          } else if (h) {
            for (var E = h.querySelectorAll("[data-slate-leaf]"), A = 0; A < E.length; A++) {
              var F = E[A];
              if (eh.hasDOMNode(e, F)) {
                B = F;
                break;
              }
            }
            B
              ? ((s = B.closest('[data-slate-node="text"]')),
                (l = (v = B).textContent.length),
                v.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                  l -= e.textContent.length;
                }))
              : (l = 1);
          }
          v &&
            l === v.textContent.length &&
            eu &&
            "z" === v.getAttribute("data-slate-zero-width") &&
            null != (c = v.textContent) &&
            c.startsWith("\uFEFF") &&
            (i.hasAttribute("data-slate-zero-width") ||
              (en && null != (d = v.textContent) && d.endsWith("\n\n"))) &&
            l--;
        }
        if (eu && !s && !u) {
          var m = i.hasAttribute("data-slate-node") ? i : i.closest("[data-slate-node]");
          if (m && eh.hasDOMNode(e, m, { editable: !0 })) {
            var w = eh.toSlateNode(e, m),
              { path: b, offset: y } = D.KE.start(e, eh.findPath(e, w));
            return (m.querySelector("[data-slate-leaf]") || (y = o), { path: b, offset: y });
          }
        }
        if (!s) {
          if (n) return null;
          throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
        }
        var x = eh.toSlateNode(e, s);
        return { path: eh.findPath(e, x), offset: l };
      },
      toSlateRange(e, t, r) {
        var u,
          n,
          a,
          o,
          i,
          s,
          { exactMatch: l, suppressThrow: c } = r;
        if (
          ((U(t) ? t.anchorNode : t.startContainer) &&
            (U(t)
              ? ((u = t.anchorNode),
                (n = t.anchorOffset),
                (a = t.focusNode),
                (o = t.focusOffset),
                (i =
                  ei &&
                  ((e) => {
                    for (var t = e && e.parentNode; t;) {
                      if ("[object ShadowRoot]" === t.toString()) return !0;
                      t = t.parentNode;
                    }
                    return !1;
                  })(u)
                    ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                    : t.isCollapsed))
              : ((u = t.startContainer),
                (n = t.startOffset),
                (a = t.endContainer),
                (o = t.endOffset),
                (i = t.collapsed))),
          null == u || null == a || null == n || null == o)
        )
          throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
        "getAttribute" in a &&
          "false" === a.getAttribute("contenteditable") &&
          ((a = u), (o = (null == (s = u.textContent) ? void 0 : s.length) || 0));
        var d = eh.toSlatePoint(e, [u, n], { exactMatch: l, suppressThrow: c });
        if (!d) return null;
        var f = i ? d : eh.toSlatePoint(e, [a, o], { exactMatch: l, suppressThrow: c });
        if (!f) return null;
        if (en && !i && u !== a) {
          var C = D.KE.isEnd(e, d, d.path),
            h = D.KE.isStart(e, f, f.path);
          (C && (d = D.KE.after(e, d) || d), h && (f = D.KE.before(e, f) || f));
        }
        var B = { anchor: d, focus: f };
        return (
          D.Q6.isExpanded(B) &&
            D.Q6.isForward(B) &&
            z(a) &&
            D.KE.void(e, { at: B.focus, mode: "highest" }) &&
            (B = D.KE.unhangRange(e, B, { voids: !0 })),
          B
        );
      },
      hasRange(e, t) {
        var { anchor: r, focus: u } = t;
        return D.KE.hasPath(e, r.path) && D.KE.hasPath(e, u.path);
      },
      hasTarget: (e, t) => H(t) && eh.hasDOMNode(e, t),
      hasEditableTarget: (e, t) => H(t) && eh.hasDOMNode(e, t, { editable: !0 }),
      hasSelectableTarget: (e, t) =>
        eh.hasEditableTarget(e, t) || eh.isTargetInsideNonReadonlyVoid(e, t),
      isTargetInsideNonReadonlyVoid(e, t) {
        if (O.get(e)) return !1;
        var r = eh.hasTarget(e, t) && eh.toSlateNode(e, t);
        return D.Hg.isElement(r) && D.KE.isVoid(e, r);
      },
      androidScheduleFlush(e) {
        var t;
        null == (t = j.get(e)) || t();
      },
      androidPendingDiffs: (e) => M.get(e),
    },
    eB = ["anchor", "focus"],
    ev = ["anchor", "focus"],
    ep = (e, t) => {
      var r = B(e, eB),
        u = B(t, ev);
      return (
        e[W] === t[W] &&
        Object.keys(r).length === Object.keys(u).length &&
        Object.keys(r).every((e) => u.hasOwnProperty(e) && r[e] === u[e])
      );
    },
    eg = ef ? l.useLayoutEffect : l.useEffect,
    eE = (e) => {
      var { isLast: t, leaf: r, parent: u, text: n } = e,
        a = eb(),
        o = eh.findPath(a, n),
        i = D.wA.parent(o),
        s = !0 === r[q];
      return a.isVoid(u)
        ? l.createElement(em, { length: D.bP.string(u).length })
        : "" !== r.text ||
            u.children[u.children.length - 1] !== n ||
            a.isInline(u) ||
            "" !== D.KE.string(a, i)
          ? "" === r.text
            ? l.createElement(em, { isMarkPlaceholder: s })
            : t && "\n" === r.text.slice(-1)
              ? l.createElement(eA, { isTrailing: !0, text: r.text })
              : l.createElement(eA, { text: r.text })
          : l.createElement(em, { isLineBreak: !0, isMarkPlaceholder: s });
    },
    eA = (e) => {
      var { text: t, isTrailing: r = !1 } = e,
        u = (0, l.useRef)(null),
        n = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""),
        [a] = (0, l.useState)(n);
      return (
        eg(() => {
          var e = n();
          if (u.current && u.current.textContent !== e) {
            var t = u.current.firstChild;
            if (
              t &&
              t === u.current.lastChild &&
              3 === t.nodeType &&
              (t.data.startsWith(e) || e.startsWith(t.data))
            ) {
              var r = Math.min(t.length, e.length);
              t.replaceData(r, t.length - r, e.slice(r));
            } else u.current.textContent = e;
          }
        }),
        l.createElement(eF, { ref: u }, a)
      );
    },
    eF = (0, l.memo)(
      (0, l.forwardRef)((e, t) =>
        l.createElement("span", { "data-slate-string": !0, ref: t }, e.children),
      ),
    ),
    em = (e) => {
      var { length: t = 0, isLineBreak: r = !1, isMarkPlaceholder: u = !1 } = e,
        n = { "data-slate-zero-width": r ? "n" : "z", "data-slate-length": t };
      return (
        u && (n["data-slate-mark-placeholder"] = !0),
        l.createElement(
          "span",
          Object.assign({}, n),
          eu && r ? null : "\uFEFF",
          r ? l.createElement("br", null) : null,
        )
      );
    },
    ew = (0, l.createContext)(null),
    eb = () => {
      var e = (0, l.useContext)(ew);
      if (!e)
        throw Error(
          "The `useSlateStatic` hook must be used inside the <Slate> component's context.",
        );
      return e;
    },
    ey = l.memo(
      (e) => {
        var {
            leaf: t,
            isLast: r,
            text: u,
            parent: n,
            renderPlaceholder: a,
            renderLeaf: o = (e) => l.createElement(ex, Object.assign({}, e)),
          } = e,
          i = (0, l.useRef)(null),
          s = (0, l.useRef)(null),
          c = eb(),
          D = (0, l.useRef)(null);
        ((0, l.useEffect)(
          () => () => {
            D.current && D.current.disconnect();
          },
          [],
        ),
          (0, l.useEffect)(() => {
            var e = null == s ? void 0 : s.current;
            if (
              (e ? m.set(c, e) : m.delete(c),
              D.current
                ? (D.current.disconnect(), e && D.current.observe(e))
                : e &&
                  ((D.current = new (window.ResizeObserver || d.tb)(() => {
                    var e = _.get(c);
                    null == e || e();
                  })),
                  D.current.observe(e)),
              !e && i.current)
            ) {
              var t = _.get(c);
              null == t || t();
            }
            return (
              (i.current = s.current),
              () => {
                m.delete(c);
              }
            );
          }, [s, t]));
        var f = l.createElement(eE, { isLast: r, leaf: t, parent: n, text: u });
        if (t[W]) {
          var C = {
            children: t.placeholder,
            attributes: {
              "data-slate-placeholder": !0,
              style: {
                position: "absolute",
                pointerEvents: "none",
                width: "100%",
                maxWidth: "100%",
                display: "block",
                opacity: "0.333",
                userSelect: "none",
                textDecoration: "none",
              },
              contentEditable: !1,
              ref: s,
            },
          };
          f = l.createElement(l.Fragment, null, a(C), f);
        }
        return o({ attributes: { "data-slate-leaf": !0 }, children: f, leaf: t, text: u });
      },
      (e, t) =>
        t.parent === e.parent &&
        t.isLast === e.isLast &&
        t.renderLeaf === e.renderLeaf &&
        t.renderPlaceholder === e.renderPlaceholder &&
        t.text === e.text &&
        D.EY.equals(t.leaf, e.leaf) &&
        t.leaf[W] === e.leaf[W],
    ),
    ex = (e) => {
      var { attributes: t, children: r } = e;
      return l.createElement("span", Object.assign({}, t), r);
    },
    eO = l.memo(
      (e) => {
        for (
          var {
              decorations: t,
              isLast: r,
              parent: u,
              renderPlaceholder: n,
              renderLeaf: a,
              text: o,
            } = e,
            i = eb(),
            s = (0, l.useRef)(null),
            c = D.EY.decorations(o, t),
            d = eh.findKey(i, o),
            f = [],
            C = 0;
          C < c.length;
          C++
        ) {
          var h = c[C];
          f.push(
            l.createElement(ey, {
              isLast: r && C === c.length - 1,
              key: "".concat(d.id, "-").concat(C),
              renderPlaceholder: n,
              leaf: h,
              text: o,
              parent: u,
              renderLeaf: a,
            }),
          );
        }
        var B = (0, l.useCallback)(
          (e) => {
            var t = x.get(i);
            (e
              ? (null == t || t.set(d, e), b.set(o, e), w.set(e, o))
              : (null == t || t.delete(d), b.delete(o), s.current && w.delete(s.current)),
              (s.current = e));
          },
          [s, i, d, o],
        );
        return l.createElement("span", { "data-slate-node": "text", ref: B }, f);
      },
      (e, t) =>
        t.parent === e.parent &&
        t.isLast === e.isLast &&
        t.renderLeaf === e.renderLeaf &&
        t.renderPlaceholder === e.renderPlaceholder &&
        t.text === e.text &&
        ((e, t) => {
          if (e.length !== t.length) return !1;
          for (var r = 0; r < e.length; r++) {
            var u = e[r],
              n = t[r];
            if (
              u.anchor.offset !== n.anchor.offset ||
              u.focus.offset !== n.focus.offset ||
              !ep(u, n)
            )
              return !1;
          }
          return !0;
        })(t.decorations, e.decorations),
    ),
    ek = l.memo(
      (e) => {
        var {
            decorations: t,
            element: r,
            renderElement: u = (e) => l.createElement(eP, Object.assign({}, e)),
            renderPlaceholder: a,
            renderLeaf: o,
            selection: i,
          } = e,
          s = eb(),
          c = eM(),
          d = s.isInline(r),
          f = eh.findKey(s, r),
          C = (0, l.useCallback)(
            (e) => {
              var t = x.get(s);
              e
                ? (null == t || t.set(f, e), b.set(r, e), w.set(e, r))
                : (null == t || t.delete(f), b.delete(r));
            },
            [s, f, r],
          ),
          h = eN({
            decorations: t,
            node: r,
            renderElement: u,
            renderPlaceholder: a,
            renderLeaf: o,
            selection: i,
          }),
          B = { "data-slate-node": "element", ref: C };
        if ((d && (B["data-slate-inline"] = !0), !d && D.KE.hasInlines(s, r))) {
          var v = D.bP.string(r),
            p = n()(v);
          "rtl" === p && (B.dir = p);
        }
        if (D.KE.isVoid(s, r)) {
          ((B["data-slate-void"] = !0), !c && d && (B.contentEditable = !1));
          var [[A]] = D.bP.texts(r);
          ((h = l.createElement(
            d ? "span" : "div",
            {
              "data-slate-spacer": !0,
              style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
            },
            l.createElement(eO, {
              renderPlaceholder: a,
              decorations: [],
              isLast: !1,
              parent: r,
              text: A,
            }),
          )),
            g.set(A, 0),
            E.set(A, r));
        }
        return u({ attributes: B, children: h, element: r, decorations: t });
      },
      (e, t) =>
        e.element === t.element &&
        e.renderElement === t.renderElement &&
        e.renderLeaf === t.renderLeaf &&
        e.renderPlaceholder === t.renderPlaceholder &&
        ((e, t) => {
          if (e.length !== t.length) return !1;
          for (var r = 0; r < e.length; r++) {
            var u = e[r],
              n = t[r];
            if (!D.Q6.equals(u, n) || !ep(u, n)) return !1;
          }
          return !0;
        })(e.decorations, t.decorations) &&
        (e.selection === t.selection ||
          (!!e.selection && !!t.selection && D.Q6.equals(e.selection, t.selection))),
    ),
    eP = (e) => {
      var { attributes: t, children: r, element: u } = e,
        n = eb().isInline(u) ? "span" : "div";
      return l.createElement(n, Object.assign({}, t, { style: { position: "relative" } }), r);
    },
    eS = (0, l.createContext)(() => []),
    eT = (0, l.createContext)(!1),
    ej = () => (0, l.useContext)(eT),
    eN = (e) => {
      for (
        var {
            decorations: t,
            node: r,
            renderElement: u,
            renderPlaceholder: n,
            renderLeaf: a,
            selection: o,
          } = e,
          i = (0, l.useContext)(eS),
          s = eb(),
          c = eh.findPath(s, r),
          d = [],
          f = D.Hg.isElement(r) && !s.isInline(r) && D.KE.hasInlines(s, r),
          C = D.Hg.isElement(r) && null != s.rendersTrailingNewline && s.rendersTrailingNewline(r),
          h = 0;
        h < r.children.length;
        h++
      ) {
        var B = c.concat(h),
          v = r.children[h],
          p = eh.findKey(s, v),
          A = D.KE.range(s, B),
          F = o && D.Q6.intersection(A, o),
          m = i([v, B]);
        for (var w of t) {
          var b = D.Q6.intersection(w, A);
          b && m.push(b);
        }
        (D.Hg.isElement(v)
          ? d.push(
              l.createElement(
                eT.Provider,
                { key: "provider-".concat(p.id), value: !!F },
                l.createElement(ek, {
                  decorations: m,
                  element: v,
                  key: p.id,
                  renderElement: u,
                  renderPlaceholder: n,
                  renderLeaf: a,
                  selection: F,
                }),
              ),
            )
          : d.push(
              l.createElement(eO, {
                decorations: m,
                key: p.id,
                isLast: (f || C) && h === r.children.length - 1,
                parent: r,
                renderPlaceholder: n,
                renderLeaf: a,
                text: v,
              }),
            ),
          g.set(v, h),
          E.set(v, r));
      }
      return d;
    },
    eR = (0, l.createContext)(!1),
    eM = () => (0, l.useContext)(eR),
    eK = (0, l.createContext)(null),
    eL = {
      bold: "mod+b",
      compose: ["down", "left", "right", "up", "backspace", "enter"],
      moveBackward: "left",
      moveForward: "right",
      moveWordBackward: "ctrl+left",
      moveWordForward: "ctrl+right",
      deleteBackward: "shift?+backspace",
      deleteForward: "shift?+delete",
      extendBackward: "shift+left",
      extendForward: "shift+right",
      italic: "mod+i",
      insertSoftBreak: "shift+enter",
      splitBlock: "enter",
      undo: "mod+z",
    },
    e_ = {
      moveLineBackward: "opt+up",
      moveLineForward: "opt+down",
      moveWordBackward: "opt+left",
      moveWordForward: "opt+right",
      deleteBackward: ["ctrl+backspace", "ctrl+h"],
      deleteForward: ["ctrl+delete", "ctrl+d"],
      deleteLineBackward: "cmd+shift?+backspace",
      deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
      deleteWordBackward: "opt+shift?+backspace",
      deleteWordForward: "opt+shift?+delete",
      extendLineBackward: "opt+shift+up",
      extendLineForward: "opt+shift+down",
      redo: "cmd+shift+z",
      transposeCharacter: "ctrl+t",
    },
    eW = {
      deleteWordBackward: "ctrl+shift?+backspace",
      deleteWordForward: "ctrl+shift?+delete",
      redo: ["ctrl+y", "ctrl+shift+z"],
    },
    eq = (e) => {
      var t = eL[e],
        r = e_[e],
        u = eW[e],
        n = t && (0, f.isKeyHotkey)(t),
        a = r && (0, f.isKeyHotkey)(r),
        o = u && (0, f.isKeyHotkey)(u);
      return (e) => !!((n && n(e)) || (er && a && a(e)) || (!er && o && o(e)));
    },
    eI = {
      isBold: eq("bold"),
      isCompose: eq("compose"),
      isMoveBackward: eq("moveBackward"),
      isMoveForward: eq("moveForward"),
      isDeleteBackward: eq("deleteBackward"),
      isDeleteForward: eq("deleteForward"),
      isDeleteLineBackward: eq("deleteLineBackward"),
      isDeleteLineForward: eq("deleteLineForward"),
      isDeleteWordBackward: eq("deleteWordBackward"),
      isDeleteWordForward: eq("deleteWordForward"),
      isExtendBackward: eq("extendBackward"),
      isExtendForward: eq("extendForward"),
      isExtendLineBackward: eq("extendLineBackward"),
      isExtendLineForward: eq("extendLineForward"),
      isItalic: eq("italic"),
      isMoveLineBackward: eq("moveLineBackward"),
      isMoveLineForward: eq("moveLineForward"),
      isMoveWordBackward: eq("moveWordBackward"),
      isMoveWordForward: eq("moveWordForward"),
      isRedo: eq("redo"),
      isSoftBreak: eq("insertSoftBreak"),
      isSplitBlock: eq("splitBlock"),
      isTransposeCharacter: eq("transposeCharacter"),
      isUndo: eq("undo"),
    },
    eQ = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
  class eV extends l.Component {
    constructor() {
      (super(...arguments),
        (this.context = null),
        (this.manager = null),
        (this.mutationObserver = null));
    }
    observe() {
      var e,
        { node: t } = this.props;
      if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
      null == (e = this.mutationObserver) || e.observe(t.current, eQ);
    }
    componentDidMount() {
      var e,
        t,
        { receivedUserInput: r } = this.props,
        u = this.context;
      ((this.manager =
        ((e = []),
        {
          registerMutations: (t) => {
            if (r.current) {
              var n = t.filter((e) => G(u, e, t));
              e.push(...n);
            }
          },
          restoreDOM: function () {
            e.length > 0 &&
              (e.reverse().forEach((e) => {
                "characterData" !== e.type &&
                  (e.removedNodes.forEach((t) => {
                    e.target.insertBefore(t, e.nextSibling);
                  }),
                  e.addedNodes.forEach((t) => {
                    e.target.removeChild(t);
                  }));
              }),
              t());
          },
          clear: (t = () => {
            e = [];
          }),
        })),
        (this.mutationObserver = new MutationObserver(this.manager.registerMutations)),
        this.observe());
    }
    getSnapshotBeforeUpdate() {
      var e,
        t,
        r,
        u,
        n = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
      return (
        null != n && n.length && (null == (u = this.manager) || u.registerMutations(n)),
        null == (t = this.mutationObserver) || t.disconnect(),
        null == (r = this.manager) || r.restoreDOM(),
        null
      );
    }
    componentDidUpdate() {
      var e;
      (null == (e = this.manager) || e.clear(), this.observe());
    }
    componentWillUnmount() {
      var e;
      null == (e = this.mutationObserver) || e.disconnect();
    }
    render() {
      return this.props.children;
    }
  }
  eV.contextType = ew;
  var ez = eu
    ? eV
    : (e) => {
        var { children: t } = e;
        return l.createElement(l.Fragment, null, t);
      };
  function eH(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
      r[u - 1] = arguments[u];
    return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
  }
  function eU(e, t) {
    var { start: r, end: u, text: n } = t,
      a = e.slice(r, u),
      o = (function (e, t) {
        for (var r = Math.min(e.length, t.length), u = 0; u < r; u++)
          if (e.charAt(u) !== t.charAt(u)) return u;
        return r;
      })(a, n),
      i = Math.min(a.length - o, n.length - o),
      s = (function (e, t, r) {
        for (var u = Math.min(e.length, t.length, r), n = 0; n < u; n++)
          if (e.charAt(e.length - n - 1) !== t.charAt(t.length - n - 1)) return n;
        return u;
      })(a, n, i),
      l = { start: r + o, end: u - s, text: n.slice(o, n.length - s) };
    return l.start === l.end && 0 === l.text.length ? null : l;
  }
  function e$(e, t) {
    var { path: r, offset: u } = t;
    if (!D.KE.hasPath(e, r)) return null;
    var n = D.bP.get(e, r);
    if (!D.EY.isText(n)) return null;
    var a = D.KE.above(e, { match: (t) => D.Hg.isElement(t) && D.KE.isBlock(e, t), at: r });
    if (!a) return null;
    for (; u > n.text.length;) {
      var o = D.KE.next(e, { at: r, match: D.EY.isText });
      if (!o || !D.wA.isDescendant(o[1], a[1])) return null;
      ((u -= n.text.length), (n = o[0]), (r = o[1]));
    }
    return { path: r, offset: u };
  }
  function eY(e, t) {
    var r = e$(e, t.anchor);
    if (!r) return null;
    if (D.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var u = e$(e, t.focus);
    return u ? { anchor: r, focus: u } : null;
  }
  function eJ(e, t, r) {
    var u = M.get(e),
      n =
        null == u
          ? void 0
          : u.find((e) => {
              var { path: r } = e;
              return D.wA.equals(r, t.path);
            });
    if (!n || t.offset <= n.diff.start) return D.bR.transform(t, r, { affinity: "backward" });
    var { diff: a } = n;
    if (t.offset <= a.start + a.text.length) {
      var o = { path: t.path, offset: a.start },
        i = D.bR.transform(o, r, { affinity: "backward" });
      return i ? { path: i.path, offset: i.offset + t.offset - a.start } : null;
    }
    var s = { path: t.path, offset: t.offset - a.text.length + a.end - a.start },
      l = D.bR.transform(s, r, { affinity: "backward" });
    return l
      ? "split_node" === r.type &&
        D.wA.equals(r.path, t.path) &&
        s.offset < r.position &&
        a.start < r.position
        ? l
        : { path: l.path, offset: l.offset + a.text.length - a.end + a.start }
      : null;
  }
  function eZ(e, t, r) {
    var u = eJ(e, t.anchor, r);
    if (!u) return null;
    if (D.Q6.isCollapsed(t)) return { anchor: u, focus: u };
    var n = eJ(e, t.focus, r);
    return n ? { anchor: u, focus: n } : null;
  }
  function eX(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);
      (t &&
        (u = u.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, u));
    }
    return r;
  }
  function eG(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? eX(Object(r), !0).forEach(function (t) {
            h(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : eX(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
    }
    return e;
  }
  var e0 = function () {},
    e1 = ["node"];
  function e3(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);
      (t &&
        (u = u.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, u));
    }
    return r;
  }
  var e2 = { subtree: !0, childList: !0, characterData: !0 },
    e7 = [
      "autoFocus",
      "decorate",
      "onDOMBeforeInput",
      "placeholder",
      "readOnly",
      "renderElement",
      "renderLeaf",
      "renderPlaceholder",
      "scrollSelectionIntoView",
      "style",
      "as",
      "disableDefaultStyles",
    ],
    e8 = ["text"];
  function e4(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);
      (t &&
        (u = u.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, u));
    }
    return r;
  }
  function e9(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? e4(Object(r), !0).forEach(function (t) {
            h(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : e4(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
    }
    return e;
  }
  var e5 = (e) => l.createElement(l.Fragment, null, eN(e)),
    e6 = (e) => {
      var t,
        r,
        u,
        a,
        i,
        c,
        d = (0, l.useCallback)((e) => l.createElement(te, Object.assign({}, e)), []),
        {
          autoFocus: f,
          decorate: C = tt,
          onDOMBeforeInput: v,
          placeholder: p,
          readOnly: g = !1,
          renderElement: E,
          renderLeaf: y,
          renderPlaceholder: x = d,
          scrollSelectionIntoView: T = tr,
          style: I = {},
          as: V = "div",
          disableDefaultStyles: $ = !1,
        } = e,
        Y = B(e, e7),
        J = (() => {
          var e = (0, l.useContext)(eK);
          if (!e)
            throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
          var { editor: t } = e;
          return t;
        })(),
        [Z, X] = (0, l.useState)(!1),
        ee = (0, l.useRef)(null),
        er = (0, l.useRef)([]),
        { onUserInput: eo, receivedUserInput: es } =
          ((t = eb()),
          (r = (0, l.useRef)(!1)),
          (u = (0, l.useRef)(0)),
          (a = (0, l.useCallback)(() => {
            if (!r.current) {
              r.current = !0;
              var e = eh.getWindow(t);
              (e.cancelAnimationFrame(u.current),
                (u.current = e.requestAnimationFrame(() => {
                  r.current = !1;
                })));
            }
          }, [])),
          (0, l.useEffect)(() => () => cancelAnimationFrame(u.current), []),
          { receivedUserInput: r, onUserInput: a }),
        [, el] = (0, l.useReducer)((e) => e + 1, 0);
      (_.set(J, el), O.set(J, g));
      var eB = (0, l.useMemo)(
        () => ({
          isDraggingInternally: !1,
          isUpdatingSelection: !1,
          latestElement: null,
          hasMarkPlaceholder: !1,
        }),
        [],
      );
      ((0, l.useLayoutEffect)(
        () => () => {
          null == eB ||
            (null != eB.latestElement && (eB.latestElement.remove(), (eB.latestElement = null)));
        },
        [],
      ),
        (0, l.useEffect)(() => {
          ee.current && f && ee.current.focus();
        }, [f]));
      var ev = (0, l.useCallback)(
          s()(() => {
            if (
              (eu || !eh.isComposing(J)) &&
              (!eB.isUpdatingSelection || (null != eE && eE.isFlushing())) &&
              !eB.isDraggingInternally
            ) {
              var e = eh.findDocumentOrShadowRoot(J),
                { activeElement: t } = e,
                r = eh.toDOMNode(J, J),
                u = e.getSelection();
              if ((t === r ? ((eB.latestElement = t), k.set(J, !0)) : k.delete(J), !u))
                return D.gB.deselect(J);
              var { anchorNode: n, focusNode: a } = u,
                o = eh.hasEditableTarget(J, n) || eh.isTargetInsideNonReadonlyVoid(J, n),
                i = eh.hasEditableTarget(J, a) || eh.isTargetInsideNonReadonlyVoid(J, a);
              if (o && i) {
                var s = eh.toSlateRange(J, u, { exactMatch: !1, suppressThrow: !0 });
                s &&
                  (eh.isComposing(J) ||
                  (null != eE && eE.hasPendingChanges()) ||
                  (null != eE && eE.isFlushing())
                    ? null == eE || eE.handleUserSelect(s)
                    : D.gB.select(J, s));
              }
              !g || (o && i) || D.gB.deselect(J);
            }
          }, 100),
          [g],
        ),
        ep = (0, l.useMemo)(() => o()(ev, 0), [ev]),
        eE = (function (e) {
          var t,
            { node: r } = e,
            u = B(e, e1);
          if (!eu) return null;
          var n = eb(),
            a =
              ((t = (0, l.useRef)(!1)),
              (0, l.useEffect)(
                () => (
                  (t.current = !0),
                  () => {
                    t.current = !1;
                  }
                ),
                [],
              ),
              t.current),
            [o] = (0, l.useState)(() =>
              (function (e) {
                var { editor: t, scheduleOnDOMSelectionChange: r, onDOMSelectionChange: u } = e,
                  n = !1,
                  a = null,
                  o = null,
                  i = null,
                  s = 0,
                  l = !1,
                  c = () => {
                    var e = L.get(t);
                    if ((L.delete(t), e)) {
                      var { selection: r } = t,
                        u = eY(t, e);
                      !u || (r && D.Q6.equals(u, r)) || D.gB.select(t, u);
                    }
                  },
                  d = () => {
                    if (
                      (o && (clearTimeout(o), (o = null)),
                      i && (clearTimeout(i), (i = null)),
                      !v() && !B())
                    )
                      return void c();
                    (n || ((n = !0), setTimeout(() => (n = !1))), B() && (n = "action"));
                    var e = t.selection && D.KE.rangeRef(t, t.selection, { affinity: "forward" });
                    (R.set(t, t.marks), e0("flush", K.get(t), M.get(t)));
                    for (var a = v(); (s = null == (d = M.get(t)) ? void 0 : d[0]);) {
                      var s,
                        d,
                        f,
                        C = N.get(t);
                      (void 0 !== C && (N.delete(t), (t.marks = C)), C && !1 === l && (l = null));
                      var h = (function (e) {
                        var { path: t, diff: r } = e;
                        return {
                          anchor: { path: t, offset: r.start },
                          focus: { path: t, offset: r.end },
                        };
                      })(s);
                      ((t.selection && D.Q6.equals(t.selection, h)) || D.gB.select(t, h),
                        s.diff.text ? D.KE.insertText(t, s.diff.text) : D.KE.deleteFragment(t),
                        M.set(
                          t,
                          null == (f = M.get(t))
                            ? void 0
                            : f.filter((e) => {
                                var { id: t } = e;
                                return t !== s.id;
                              }),
                        ),
                        !(function (e, t) {
                          var { path: r, diff: u } = t;
                          if (!D.KE.hasPath(e, r)) return !1;
                          var n = D.bP.get(e, r);
                          if (!D.EY.isText(n)) return !1;
                          if (u.start !== n.text.length || 0 === u.text.length)
                            return n.text.slice(u.start, u.start + u.text.length) === u.text;
                          var a = D.wA.next(r);
                          if (!D.KE.hasPath(e, a)) return !1;
                          var o = D.bP.get(e, a);
                          return D.EY.isText(o) && o.text.startsWith(u.text);
                        })(t, s) &&
                          ((a = !1),
                          K.delete(t),
                          R.delete(t),
                          (n = "action"),
                          L.delete(t),
                          r.cancel(),
                          u.cancel(),
                          null == e || e.unref()));
                    }
                    var p = null == e ? void 0 : e.unref();
                    if (
                      (!p ||
                        L.get(t) ||
                        (t.selection && D.Q6.equals(p, t.selection)) ||
                        D.gB.select(t, p),
                      B())
                    )
                      return void (() => {
                        var e = K.get(t);
                        if ((K.delete(t), e)) {
                          if (e.at) {
                            var r = D.bR.isPoint(e.at) ? e$(t, e.at) : eY(t, e.at);
                            if (!r) return;
                            var u = D.KE.range(t, r);
                            (t.selection && D.Q6.equals(t.selection, u)) || D.gB.select(t, r);
                          }
                          e.run();
                        }
                      })();
                    (a && r(), r.flush(), u.flush(), c());
                    var g = R.get(t);
                    (R.delete(t), void 0 !== g && ((t.marks = g), t.onChange()));
                  },
                  f = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                      r = m.get(t);
                    if (r) {
                      if (v() || e) {
                        r.style.display = "none";
                        return;
                      }
                      r.style.removeProperty("display");
                    }
                  },
                  C = (e, r) => {
                    var u,
                      n,
                      a,
                      o,
                      i,
                      l,
                      c,
                      d,
                      C = null != (d = M.get(t)) ? d : [];
                    M.set(t, C);
                    var h = D.bP.leaf(t, e),
                      B = C.findIndex((t) => D.wA.equals(t.path, e));
                    if (B < 0) {
                      (eU(h.text, r) && C.push({ path: e, diff: r, id: s++ }), f());
                      return;
                    }
                    var v =
                      ((u = h.text),
                      (n = C[B].diff),
                      (a = Math.min(n.start, r.start)),
                      (o = Math.max(0, Math.min(n.start + n.text.length, r.end) - r.start)),
                      (i = eH(u, n, r)),
                      (l = Math.max(
                        r.start + r.text.length,
                        n.start +
                          n.text.length +
                          (n.start + n.text.length > r.start ? r.text.length : 0) -
                          o,
                      )),
                      (c = i.slice(a, l)),
                      eU(u, {
                        start: a,
                        end: Math.max(n.end, r.end - n.text.length + (n.end - n.start)),
                        text: c,
                      }));
                    if (!v) {
                      (C.splice(B, 1), f());
                      return;
                    }
                    C[B] = eG(eG({}, C[B]), {}, { diff: v });
                  },
                  h = function (e) {
                    var { at: n } =
                      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    ((l = !1),
                      L.delete(t),
                      r.cancel(),
                      u.cancel(),
                      B() && d(),
                      K.set(t, { at: n, run: e }),
                      (i = setTimeout(d)));
                  },
                  B = () => !!K.get(t),
                  v = () => {
                    var e;
                    return !!(null != (e = M.get(t)) && e.length);
                  },
                  p = (e) => {
                    (L.set(t, e), o && (clearTimeout(o), (o = null)));
                    var { selection: r } = t;
                    if (e) {
                      var u = !r || !D.wA.equals(r.anchor.path, e.anchor.path),
                        n =
                          !r ||
                          !D.wA.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                      (((u && l) || n) && (l = !1), (u || v()) && (o = setTimeout(d, 200)));
                    }
                  },
                  g = () => {
                    B() || (i = setTimeout(d));
                  };
                return {
                  flush: d,
                  scheduleFlush: g,
                  hasPendingDiffs: v,
                  hasPendingAction: B,
                  hasPendingChanges: () => B() || v(),
                  isFlushing: () => n,
                  handleUserSelect: p,
                  handleCompositionEnd: (e) => {
                    (a && clearTimeout(a),
                      (a = setTimeout(() => {
                        (P.set(t, !1), d());
                      }, 25)));
                  },
                  handleCompositionStart: (e) => {
                    (P.set(t, !0), a && (clearTimeout(a), (a = null)));
                  },
                  handleDOMBeforeInput: (e) => {
                    o && (clearTimeout(o), (o = null));
                    var { inputType: r } = e,
                      u = null,
                      n = e.dataTransfer || e.data || void 0;
                    !1 !== l && "insertText" !== r && "insertCompositionText" !== r && (l = !1);
                    var [a] = e.getTargetRanges();
                    a && (u = eh.toSlateRange(t, a, { exactMatch: !1, suppressThrow: !0 }));
                    var i = eh.getWindow(t).getSelection();
                    if (
                      (!u &&
                        i &&
                        ((a = i),
                        (u = eh.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 }))),
                      (u = null != (P = u) ? P : t.selection))
                    ) {
                      var s = !0;
                      if (r.startsWith("delete")) {
                        if (D.Q6.isExpanded(u)) {
                          var [c, d] = D.Q6.edges(u);
                          if (D.bP.leaf(t, c.path).text.length === c.offset && 0 === d.offset) {
                            var f = D.KE.next(t, { at: c.path, match: D.EY.isText });
                            f && D.wA.equals(f[1], d.path) && (u = { anchor: d, focus: d });
                          }
                        }
                        var B = r.endsWith("Backward") ? "backward" : "forward",
                          [v, E] = D.Q6.edges(u),
                          [A, F] = D.KE.leaf(t, v.path),
                          m = { text: "", start: v.offset, end: E.offset },
                          w = M.get(t),
                          b = null == w ? void 0 : w.find((e) => D.wA.equals(e.path, F)),
                          y = b ? [b.diff, m] : [m];
                        if ((0 === eH(A.text, ...y).length && (s = !1), D.Q6.isExpanded(u))) {
                          if (s && D.wA.equals(u.anchor.path, u.focus.path)) {
                            var x = { path: u.anchor.path, offset: v.offset };
                            return (
                              p(D.KE.range(t, x, x)),
                              C(u.anchor.path, { text: "", end: E.offset, start: v.offset })
                            );
                          }
                          return h(() => D.KE.deleteFragment(t, { direction: B }), { at: u });
                        }
                      }
                      switch (r) {
                        case "deleteByComposition":
                        case "deleteByCut":
                        case "deleteByDrag":
                          return h(() => D.KE.deleteFragment(t), { at: u });
                        case "deleteContent":
                        case "deleteContentForward":
                          var { anchor: O } = u;
                          if (s && D.Q6.isCollapsed(u)) {
                            var k = D.bP.leaf(t, O.path);
                            if (O.offset < k.text.length)
                              return C(O.path, { text: "", start: O.offset, end: O.offset + 1 });
                          }
                          return h(() => D.KE.deleteForward(t), { at: u });
                        case "deleteContentBackward":
                          var P,
                            S,
                            { anchor: T } = u,
                            j = U(a) ? a.isCollapsed : !!(null != (S = a) && S.collapsed);
                          if (s && j && D.Q6.isCollapsed(u) && T.offset > 0)
                            return C(T.path, { text: "", start: T.offset - 1, end: T.offset });
                          return h(() => D.KE.deleteBackward(t), { at: u });
                        case "deleteEntireSoftLine":
                          return h(
                            () => {
                              (D.KE.deleteBackward(t, { unit: "line" }),
                                D.KE.deleteForward(t, { unit: "line" }));
                            },
                            { at: u },
                          );
                        case "deleteHardLineBackward":
                          return h(() => D.KE.deleteBackward(t, { unit: "block" }), { at: u });
                        case "deleteSoftLineBackward":
                          return h(() => D.KE.deleteBackward(t, { unit: "line" }), { at: u });
                        case "deleteHardLineForward":
                          return h(() => D.KE.deleteForward(t, { unit: "block" }), { at: u });
                        case "deleteSoftLineForward":
                          return h(() => D.KE.deleteForward(t, { unit: "line" }), { at: u });
                        case "deleteWordBackward":
                          return h(() => D.KE.deleteBackward(t, { unit: "word" }), { at: u });
                        case "deleteWordForward":
                          return h(() => D.KE.deleteForward(t, { unit: "word" }), { at: u });
                        case "insertLineBreak":
                          return h(() => D.KE.insertSoftBreak(t), { at: u });
                        case "insertParagraph":
                          return h(() => D.KE.insertBreak(t), { at: u });
                        case "insertCompositionText":
                        case "deleteCompositionText":
                        case "insertFromComposition":
                        case "insertFromDrop":
                        case "insertFromPaste":
                        case "insertFromYank":
                        case "insertReplacementText":
                        case "insertText":
                          if ((null == n ? void 0 : n.constructor.name) === "DataTransfer")
                            return h(() => eh.insertData(t, n), { at: u });
                          var R = null != n ? n : "";
                          if (
                            (N.get(t) && (R = R.replace("\uFEFF", "")),
                            "insertText" === r && /.*\n.*\n$/.test(R) && (R = R.slice(0, -1)),
                            R.includes("\n"))
                          )
                            return h(
                              () => {
                                var e = R.split("\n");
                                e.forEach((r, u) => {
                                  (r && D.KE.insertText(t, r),
                                    u !== e.length - 1 && D.KE.insertSoftBreak(t));
                                });
                              },
                              { at: u },
                            );
                          if (D.wA.equals(u.anchor.path, u.focus.path)) {
                            var [K, L] = D.Q6.edges(u),
                              _ = { start: K.offset, end: L.offset, text: R };
                            if (R && l && "insertCompositionText" === r) {
                              var W = l.start + l.text.search(/\S|$/);
                              _.start + _.text.search(/\S|$/) === W + 1 &&
                              _.end === l.start + l.text.length
                                ? ((_.start -= 1), (l = null), g())
                                : (l = !1);
                            } else
                              l =
                                "insertText" === r &&
                                (null === l
                                  ? _
                                  : !!(l && D.Q6.isCollapsed(u)) &&
                                    l.end + l.text.length === K.offset &&
                                    eG(eG({}, l), {}, { text: l.text + R }));
                            if (s) return void C(K.path, _);
                          }
                          return h(() => D.KE.insertText(t, R), { at: u });
                      }
                    }
                  },
                  handleKeyDown: (e) => {
                    v() || (f(!0), setTimeout(f));
                  },
                  handleDomMutations: (e) => {
                    if (!(v() || B()) && e.some((r) => G(t, r, e))) {
                      var r;
                      null == (r = _.get(t)) || r();
                    }
                  },
                  handleInput: () => {
                    (B() || !v()) && d();
                  },
                };
              })(
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? e3(Object(r), !0).forEach(function (t) {
                          h(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : e3(Object(r)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                          });
                  }
                  return e;
                })({ editor: n }, u),
              ),
            );
          return (
            !(function (e, t, r) {
              var [u] = (0, l.useState)(() => new MutationObserver(t));
              (eg(() => {
                u.takeRecords();
              }),
                (0, l.useEffect)(() => {
                  if (!e.current)
                    throw Error("Failed to attach MutationObserver, `node` is undefined");
                  return (u.observe(e.current, r), () => u.disconnect());
                }, []));
            })(r, o.handleDomMutations, e2),
            j.set(n, o.scheduleFlush),
            a && o.flush(),
            o
          );
        })({ node: ee, onDOMSelectionChange: ev, scheduleOnDOMSelectionChange: ep });
      eg(() => {
        ee.current && (e = Q(ee.current))
          ? (A.set(J, e), F.set(J, ee.current), b.set(J, ee.current), w.set(ee.current, J))
          : b.delete(J);
        var e,
          { selection: t } = J,
          r = eh.findDocumentOrShadowRoot(J).getSelection();
        if (!(!r || !eh.isFocused(J) || (null != eE && eE.hasPendingAction()))) {
          var u = (e) => {
              var u = "None" !== r.type;
              if (t || u) {
                var n = F.get(J),
                  a = !1;
                if (
                  (n.contains(r.anchorNode) && n.contains(r.focusNode) && (a = !0),
                  u && a && t && !e)
                ) {
                  var o = eh.toSlateRange(J, r, { exactMatch: !0, suppressThrow: !0 }),
                    i =
                      (null == r.anchorNode ||
                        3 !== r.anchorNode.nodeType ||
                        null == r.focusNode ||
                        3 !== r.focusNode.nodeType) &&
                      !eh.isComposing(J);
                  if (o && D.Q6.equals(o, t) && !i) {
                    if (!eB.hasMarkPlaceholder) return;
                    var s,
                      { anchorNode: l } = r;
                    if (
                      null != l &&
                      null != (s = l.parentElement) &&
                      s.hasAttribute("data-slate-mark-placeholder")
                    )
                      return;
                  }
                }
                if (t && !eh.hasRange(J, t)) {
                  J.selection = eh.toSlateRange(J, r, { exactMatch: !1, suppressThrow: !0 });
                  return;
                }
                eB.isUpdatingSelection = !0;
                var c = t && eh.toDOMRange(J, t);
                return (
                  c
                    ? (D.Q6.isBackward(t)
                        ? r.setBaseAndExtent(
                            c.endContainer,
                            c.endOffset,
                            c.startContainer,
                            c.startOffset,
                          )
                        : r.setBaseAndExtent(
                            c.startContainer,
                            c.startOffset,
                            c.endContainer,
                            c.endOffset,
                          ),
                      T(J, c))
                    : r.removeAllRanges(),
                  c
                );
              }
            },
            n = u(),
            a = (null == eE ? void 0 : eE.isFlushing()) === "action";
          if (!eu || !a)
            return void setTimeout(() => {
              (n && en && eh.toDOMNode(J, J).focus(), (eB.isUpdatingSelection = !1));
            });
          var o = null,
            i = requestAnimationFrame(() => {
              if (a) {
                var e = (e) => {
                  try {
                    (eh.toDOMNode(J, J).focus(), u(e));
                  } catch (e) {}
                };
                (e(),
                  (o = setTimeout(() => {
                    (e(!0), (eB.isUpdatingSelection = !1));
                  })));
              }
            });
          return () => {
            (cancelAnimationFrame(i), o && clearTimeout(o));
          };
        }
      });
      var eA = (0, l.useCallback)(
          (e) => {
            if ((eo(), !g && eh.hasEditableTarget(J, e.target) && !tn(e, v))) {
              if (eE) return eE.handleDOMBeforeInput(e);
              (ep.flush(), ev.flush());
              var { selection: t } = J,
                { inputType: r } = e,
                u = e.dataTransfer || e.data || void 0,
                n = "insertCompositionText" === r || "deleteCompositionText" === r;
              if (!(n && eh.isComposing(J))) {
                var a = !1;
                if (
                  "insertText" === r &&
                  t &&
                  D.Q6.isCollapsed(t) &&
                  e.data &&
                  1 === e.data.length &&
                  /[a-z ]/i.test(e.data) &&
                  0 !== t.anchor.offset
                ) {
                  ((a = !0), J.marks && (a = !1));
                  var { anchor: o } = t,
                    [i, s] = eh.toDOMPoint(J, o),
                    l = null == (f = i.parentElement) ? void 0 : f.closest("a"),
                    c = eh.getWindow(J);
                  if (a && l && eh.hasDOMNode(J, l)) {
                    var d,
                      f,
                      C,
                      h,
                      B =
                        null == c
                          ? void 0
                          : c.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                    B === i && (null == (h = B.textContent) ? void 0 : h.length) === s && (a = !1);
                  }
                  if (
                    a &&
                    i.parentElement &&
                    (null == c || null == (C = c.getComputedStyle(i.parentElement))
                      ? void 0
                      : C.whiteSpace) === "pre"
                  ) {
                    var p = D.KE.above(J, {
                      at: o.path,
                      match: (e) => D.Hg.isElement(e) && D.KE.isBlock(J, e),
                    });
                    p && D.bP.string(p[0]).includes("	") && (a = !1);
                  }
                }
                if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                  var [E] = e.getTargetRanges();
                  if (E) {
                    var A = eh.toSlateRange(J, E, { exactMatch: !1, suppressThrow: !1 });
                    if (!t || !D.Q6.equals(t, A)) {
                      a = !1;
                      var F = !n && J.selection && D.KE.rangeRef(J, J.selection);
                      (D.gB.select(J, A), F && S.set(J, F));
                    }
                  }
                }
                if (!n) {
                  if (
                    (a || e.preventDefault(), t && D.Q6.isExpanded(t) && r.startsWith("delete"))
                  ) {
                    var m = r.endsWith("Backward") ? "backward" : "forward";
                    D.KE.deleteFragment(J, { direction: m });
                    return;
                  }
                  switch (r) {
                    case "deleteByComposition":
                    case "deleteByCut":
                    case "deleteByDrag":
                      D.KE.deleteFragment(J);
                      break;
                    case "deleteContent":
                    case "deleteContentForward":
                      D.KE.deleteForward(J);
                      break;
                    case "deleteContentBackward":
                      D.KE.deleteBackward(J);
                      break;
                    case "deleteEntireSoftLine":
                      (D.KE.deleteBackward(J, { unit: "line" }),
                        D.KE.deleteForward(J, { unit: "line" }));
                      break;
                    case "deleteHardLineBackward":
                      D.KE.deleteBackward(J, { unit: "block" });
                      break;
                    case "deleteSoftLineBackward":
                      D.KE.deleteBackward(J, { unit: "line" });
                      break;
                    case "deleteHardLineForward":
                      D.KE.deleteForward(J, { unit: "block" });
                      break;
                    case "deleteSoftLineForward":
                      D.KE.deleteForward(J, { unit: "line" });
                      break;
                    case "deleteWordBackward":
                      D.KE.deleteBackward(J, { unit: "word" });
                      break;
                    case "deleteWordForward":
                      D.KE.deleteForward(J, { unit: "word" });
                      break;
                    case "insertLineBreak":
                      D.KE.insertSoftBreak(J);
                      break;
                    case "insertParagraph":
                      D.KE.insertBreak(J);
                      break;
                    case "insertFromComposition":
                    case "insertFromDrop":
                    case "insertFromPaste":
                    case "insertFromYank":
                    case "insertReplacementText":
                    case "insertText":
                      ("insertFromComposition" === r && eh.isComposing(J) && (X(!1), P.set(J, !1)),
                        (null == u ? void 0 : u.constructor.name) === "DataTransfer"
                          ? eh.insertData(J, u)
                          : "string" == typeof u &&
                            (a
                              ? er.current.push(() => D.KE.insertText(J, u))
                              : D.KE.insertText(J, u)));
                  }
                  var w = null == (d = S.get(J)) ? void 0 : d.unref();
                  (S.delete(J),
                    !w || (J.selection && D.Q6.equals(J.selection, w)) || D.gB.select(J, w));
                }
              }
            }
          },
          [g, v],
        ),
        eF = (0, l.useCallback)(
          (e) => {
            (null == e
              ? (ev.cancel(),
                ep.cancel(),
                F.delete(J),
                b.delete(J),
                ee.current && eC && ee.current.removeEventListener("beforeinput", eA))
              : eC && e.addEventListener("beforeinput", eA),
              (ee.current = e));
          },
          [ee, eA, ev, ep],
        );
      eg(() => {
        var e = eh.getWindow(J);
        return (
          e.document.addEventListener("selectionchange", ep),
          () => {
            e.document.removeEventListener("selectionchange", ep);
          }
        );
      }, [ep]);
      var em = C([J, []]);
      if (
        p &&
        1 === J.children.length &&
        1 === Array.from(D.bP.texts(J)).length &&
        "" === D.bP.string(J) &&
        !Z
      ) {
        var ew = D.KE.start(J, []);
        em.push({ [W]: !0, placeholder: p, anchor: ew, focus: ew });
      }
      var { marks: ey } = J;
      if (((eB.hasMarkPlaceholder = !1), J.selection && D.Q6.isCollapsed(J.selection) && ey)) {
        var { anchor: ex } = J.selection,
          eO = D.bP.leaf(J, ex.path),
          ek = B(eO, e8);
        if (!D.EY.equals(eO, ey, { loose: !0 })) {
          eB.hasMarkPlaceholder = !0;
          var eP = Object.fromEntries(Object.keys(ek).map((e) => [e, null]));
          em.push(e9(e9(e9({ [q]: !0 }, eP), ey), {}, { anchor: ex, focus: ex }));
        }
      }
      (0, l.useEffect)(() => {
        setTimeout(() => {
          var { selection: e } = J;
          if (e) {
            var { anchor: t } = e,
              r = D.bP.leaf(J, t.path);
            if (ey && !D.EY.equals(r, ey, { loose: !0 })) return void N.set(J, ey);
          }
          N.delete(J);
        });
      });
      var eT =
        null == (i = m.get(J)) || null == (c = i.getBoundingClientRect()) ? void 0 : c.height;
      return l.createElement(
        eR.Provider,
        { value: g },
        l.createElement(
          eS.Provider,
          { value: C },
          l.createElement(
            ez,
            { node: ee, receivedUserInput: es },
            l.createElement(
              V,
              Object.assign({ role: g ? void 0 : "textbox", "aria-multiline": !g || void 0 }, Y, {
                spellCheck: (!!eC || !ef) && Y.spellCheck,
                autoCorrect: eC || !ef ? Y.autoCorrect : "false",
                autoCapitalize: eC || !ef ? Y.autoCapitalize : "false",
                "data-slate-editor": !0,
                "data-slate-node": "value",
                contentEditable: !g,
                zindex: -1,
                suppressContentEditableWarning: !0,
                ref: eF,
                style: e9(
                  e9(
                    {},
                    $
                      ? {}
                      : e9(
                          {
                            position: "relative",
                            outline: "none",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                          },
                          eT ? { minHeight: eT } : {},
                        ),
                  ),
                  I,
                ),
                onBeforeInput: (0, l.useCallback)(
                  (e) => {
                    if (
                      !eC &&
                      !g &&
                      !tu(e, Y.onBeforeInput) &&
                      eh.hasSelectableTarget(J, e.target) &&
                      (e.preventDefault(), !eh.isComposing(J))
                    ) {
                      var t = e.data;
                      D.KE.insertText(J, t);
                    }
                  },
                  [g],
                ),
                onInput: (0, l.useCallback)((e) => {
                  if (!tu(e, Y.onInput)) {
                    if (eE) return void eE.handleInput();
                    for (var t of er.current) t();
                    er.current = [];
                  }
                }, []),
                onBlur: (0, l.useCallback)(
                  (e) => {
                    if (
                      g ||
                      eB.isUpdatingSelection ||
                      !eh.hasSelectableTarget(J, e.target) ||
                      tu(e, Y.onBlur)
                    )
                      return;
                    var t = eh.findDocumentOrShadowRoot(J);
                    if (eB.latestElement !== t.activeElement) {
                      var { relatedTarget: r } = e;
                      if (
                        r !== eh.toDOMNode(J, J) &&
                        !(z(r) && r.hasAttribute("data-slate-spacer"))
                      ) {
                        if (null != r && H(r) && eh.hasDOMNode(J, r)) {
                          var u = eh.toSlateNode(J, r);
                          if (D.Hg.isElement(u) && !J.isVoid(u)) return;
                        }
                        if (ea) {
                          var n = t.getSelection();
                          null == n || n.removeAllRanges();
                        }
                        k.delete(J);
                      }
                    }
                  },
                  [g, Y.onBlur],
                ),
                onClick: (0, l.useCallback)(
                  (e) => {
                    if (eh.hasTarget(J, e.target) && !tu(e, Y.onClick) && H(e.target)) {
                      var t = eh.toSlateNode(J, e.target),
                        r = eh.findPath(J, t);
                      if (D.KE.hasPath(J, r) && D.bP.get(J, r) === t) {
                        if (3 === e.detail && r.length >= 1) {
                          var u = r;
                          if (!(D.Hg.isElement(t) && D.KE.isBlock(J, t))) {
                            var n,
                              a = D.KE.above(J, {
                                match: (e) => D.Hg.isElement(e) && D.KE.isBlock(J, e),
                                at: r,
                              });
                            u = null != (n = null == a ? void 0 : a[1]) ? n : r.slice(0, 1);
                          }
                          var o = D.KE.range(J, u);
                          D.gB.select(J, o);
                          return;
                        }
                        if (!g) {
                          var i = D.KE.start(J, r),
                            s = D.KE.end(J, r),
                            l = D.KE.void(J, { at: i }),
                            c = D.KE.void(J, { at: s });
                          if (l && c && D.wA.equals(l[1], c[1])) {
                            var d = D.KE.range(J, i);
                            D.gB.select(J, d);
                          }
                        }
                      }
                    }
                  },
                  [g, Y.onClick],
                ),
                onCompositionEnd: (0, l.useCallback)(
                  (e) => {
                    if (
                      eh.hasSelectableTarget(J, e.target) &&
                      (eh.isComposing(J) && (X(!1), P.set(J, !1)),
                      null == eE || eE.handleCompositionEnd(e),
                      !tu(e, Y.onCompositionEnd) && !eu && !ea && !ec && !et && !ed && !eD) &&
                      e.data
                    ) {
                      var t = N.get(J);
                      (N.delete(J),
                        void 0 !== t && (R.set(J, J.marks), (J.marks = t)),
                        D.KE.insertText(J, e.data));
                      var r = R.get(J);
                      (R.delete(J), void 0 !== r && (J.marks = r));
                    }
                  },
                  [Y.onCompositionEnd],
                ),
                onCompositionUpdate: (0, l.useCallback)(
                  (e) => {
                    !eh.hasSelectableTarget(J, e.target) ||
                      tu(e, Y.onCompositionUpdate) ||
                      eh.isComposing(J) ||
                      (X(!0), P.set(J, !0));
                  },
                  [Y.onCompositionUpdate],
                ),
                onCompositionStart: (0, l.useCallback)(
                  (e) => {
                    if (
                      eh.hasSelectableTarget(J, e.target) &&
                      (null == eE || eE.handleCompositionStart(e),
                      !tu(e, Y.onCompositionStart) && !eu)
                    ) {
                      X(!0);
                      var { selection: t } = J;
                      if (t) {
                        if (D.Q6.isExpanded(t)) return void D.KE.deleteFragment(J);
                        var r = D.KE.above(J, {
                          match: (e) => D.Hg.isElement(e) && D.KE.isInline(J, e),
                          mode: "highest",
                        });
                        if (r) {
                          var [, u] = r;
                          if (D.KE.isEnd(J, t.anchor, u)) {
                            var n = D.KE.after(J, u);
                            D.gB.setSelection(J, { anchor: n, focus: n });
                          }
                        }
                      }
                    }
                  },
                  [Y.onCompositionStart],
                ),
                onCopy: (0, l.useCallback)(
                  (e) => {
                    eh.hasSelectableTarget(J, e.target) &&
                      !tu(e, Y.onCopy) &&
                      (e.preventDefault(), eh.setFragmentData(J, e.clipboardData, "copy"));
                  },
                  [Y.onCopy],
                ),
                onCut: (0, l.useCallback)(
                  (e) => {
                    if (!g && eh.hasSelectableTarget(J, e.target) && !tu(e, Y.onCut)) {
                      (e.preventDefault(), eh.setFragmentData(J, e.clipboardData, "cut"));
                      var { selection: t } = J;
                      if (t)
                        if (D.Q6.isExpanded(t)) D.KE.deleteFragment(J);
                        else {
                          var r = D.bP.parent(J, t.anchor.path);
                          D.KE.isVoid(J, r) && D.gB.delete(J);
                        }
                    }
                  },
                  [g, Y.onCut],
                ),
                onDragOver: (0, l.useCallback)(
                  (e) => {
                    if (eh.hasTarget(J, e.target) && !tu(e, Y.onDragOver)) {
                      var t = eh.toSlateNode(J, e.target);
                      D.Hg.isElement(t) && D.KE.isVoid(J, t) && e.preventDefault();
                    }
                  },
                  [Y.onDragOver],
                ),
                onDragStart: (0, l.useCallback)(
                  (e) => {
                    if (!g && eh.hasTarget(J, e.target) && !tu(e, Y.onDragStart)) {
                      var t = eh.toSlateNode(J, e.target),
                        r = eh.findPath(J, t);
                      if (
                        (D.Hg.isElement(t) && D.KE.isVoid(J, t)) ||
                        D.KE.void(J, { at: r, voids: !0 })
                      ) {
                        var u = D.KE.range(J, r);
                        D.gB.select(J, u);
                      }
                      ((eB.isDraggingInternally = !0),
                        eh.setFragmentData(J, e.dataTransfer, "drag"));
                    }
                  },
                  [g, Y.onDragStart],
                ),
                onDrop: (0, l.useCallback)(
                  (e) => {
                    if (!g && eh.hasTarget(J, e.target) && !tu(e, Y.onDrop)) {
                      e.preventDefault();
                      var t = J.selection,
                        r = eh.findEventRange(J, e),
                        u = e.dataTransfer;
                      (D.gB.select(J, r),
                        eB.isDraggingInternally &&
                          t &&
                          !D.Q6.equals(t, r) &&
                          !D.KE.void(J, { at: r, voids: !0 }) &&
                          D.gB.delete(J, { at: t }),
                        eh.insertData(J, u),
                        eh.isFocused(J) || eh.focus(J));
                    }
                    eB.isDraggingInternally = !1;
                  },
                  [g, Y.onDrop],
                ),
                onDragEnd: (0, l.useCallback)(
                  (e) => {
                    (!g &&
                      eB.isDraggingInternally &&
                      Y.onDragEnd &&
                      eh.hasTarget(J, e.target) &&
                      Y.onDragEnd(e),
                      (eB.isDraggingInternally = !1));
                  },
                  [g, Y.onDragEnd],
                ),
                onFocus: (0, l.useCallback)(
                  (e) => {
                    if (
                      !g &&
                      !eB.isUpdatingSelection &&
                      eh.hasEditableTarget(J, e.target) &&
                      !tu(e, Y.onFocus)
                    ) {
                      var t = eh.toDOMNode(J, J);
                      if (
                        ((eB.latestElement = eh.findDocumentOrShadowRoot(J).activeElement),
                        en && e.target !== t)
                      )
                        return void t.focus();
                      k.set(J, !0);
                    }
                  },
                  [g, Y.onFocus],
                ),
                onKeyDown: (0, l.useCallback)(
                  (e) => {
                    if (!g && eh.hasEditableTarget(J, e.target)) {
                      null == eE || eE.handleKeyDown(e);
                      var { nativeEvent: t } = e;
                      if (
                        (eh.isComposing(J) && !1 === t.isComposing && (P.set(J, !1), X(!1)),
                        !(tu(e, Y.onKeyDown) || eh.isComposing(J)))
                      ) {
                        var { selection: r } = J,
                          u = J.children[null !== r ? r.focus.path[0] : 0],
                          a = "rtl" === n()(D.bP.string(u));
                        if (eI.isRedo(t)) {
                          (e.preventDefault(), "function" == typeof J.redo && J.redo());
                          return;
                        }
                        if (eI.isUndo(t)) {
                          (e.preventDefault(), "function" == typeof J.undo && J.undo());
                          return;
                        }
                        if (eI.isMoveLineBackward(t)) {
                          (e.preventDefault(), D.gB.move(J, { unit: "line", reverse: !0 }));
                          return;
                        }
                        if (eI.isMoveLineForward(t)) {
                          (e.preventDefault(), D.gB.move(J, { unit: "line" }));
                          return;
                        }
                        if (eI.isExtendLineBackward(t)) {
                          (e.preventDefault(),
                            D.gB.move(J, { unit: "line", edge: "focus", reverse: !0 }));
                          return;
                        }
                        if (eI.isExtendLineForward(t)) {
                          (e.preventDefault(), D.gB.move(J, { unit: "line", edge: "focus" }));
                          return;
                        }
                        if (eI.isMoveBackward(t)) {
                          (e.preventDefault(),
                            r && D.Q6.isCollapsed(r)
                              ? D.gB.move(J, { reverse: !a })
                              : D.gB.collapse(J, { edge: "start" }));
                          return;
                        }
                        if (eI.isMoveForward(t)) {
                          (e.preventDefault(),
                            r && D.Q6.isCollapsed(r)
                              ? D.gB.move(J, { reverse: a })
                              : D.gB.collapse(J, { edge: "end" }));
                          return;
                        }
                        if (eI.isMoveWordBackward(t)) {
                          (e.preventDefault(),
                            r && D.Q6.isExpanded(r) && D.gB.collapse(J, { edge: "focus" }),
                            D.gB.move(J, { unit: "word", reverse: !a }));
                          return;
                        }
                        if (eI.isMoveWordForward(t)) {
                          (e.preventDefault(),
                            r && D.Q6.isExpanded(r) && D.gB.collapse(J, { edge: "focus" }),
                            D.gB.move(J, { unit: "word", reverse: a }));
                          return;
                        }
                        if (eC) {
                          if (
                            (ei || ea) &&
                            r &&
                            (eI.isDeleteBackward(t) || eI.isDeleteForward(t)) &&
                            D.Q6.isCollapsed(r)
                          ) {
                            var o = D.bP.parent(J, r.anchor.path);
                            if (
                              D.Hg.isElement(o) &&
                              D.KE.isVoid(J, o) &&
                              (D.KE.isInline(J, o) || D.KE.isBlock(J, o))
                            ) {
                              (e.preventDefault(), D.KE.deleteBackward(J, { unit: "block" }));
                              return;
                            }
                          }
                        } else {
                          if (eI.isBold(t) || eI.isItalic(t) || eI.isTransposeCharacter(t))
                            return void e.preventDefault();
                          if (eI.isSoftBreak(t)) {
                            (e.preventDefault(), D.KE.insertSoftBreak(J));
                            return;
                          }
                          if (eI.isSplitBlock(t)) {
                            (e.preventDefault(), D.KE.insertBreak(J));
                            return;
                          }
                          if (eI.isDeleteBackward(t)) {
                            (e.preventDefault(),
                              r && D.Q6.isExpanded(r)
                                ? D.KE.deleteFragment(J, { direction: "backward" })
                                : D.KE.deleteBackward(J));
                            return;
                          }
                          if (eI.isDeleteForward(t)) {
                            (e.preventDefault(),
                              r && D.Q6.isExpanded(r)
                                ? D.KE.deleteFragment(J, { direction: "forward" })
                                : D.KE.deleteForward(J));
                            return;
                          }
                          if (eI.isDeleteLineBackward(t)) {
                            (e.preventDefault(),
                              r && D.Q6.isExpanded(r)
                                ? D.KE.deleteFragment(J, { direction: "backward" })
                                : D.KE.deleteBackward(J, { unit: "line" }));
                            return;
                          }
                          if (eI.isDeleteLineForward(t)) {
                            (e.preventDefault(),
                              r && D.Q6.isExpanded(r)
                                ? D.KE.deleteFragment(J, { direction: "forward" })
                                : D.KE.deleteForward(J, { unit: "line" }));
                            return;
                          }
                          if (eI.isDeleteWordBackward(t)) {
                            (e.preventDefault(),
                              r && D.Q6.isExpanded(r)
                                ? D.KE.deleteFragment(J, { direction: "backward" })
                                : D.KE.deleteBackward(J, { unit: "word" }));
                            return;
                          }
                          if (eI.isDeleteWordForward(t)) {
                            (e.preventDefault(),
                              r && D.Q6.isExpanded(r)
                                ? D.KE.deleteFragment(J, { direction: "forward" })
                                : D.KE.deleteForward(J, { unit: "word" }));
                            return;
                          }
                        }
                      }
                    }
                  },
                  [g, Y.onKeyDown],
                ),
                onPaste: (0, l.useCallback)(
                  (e) => {
                    let t;
                    !g &&
                      eh.hasEditableTarget(J, e.target) &&
                      !tu(e, Y.onPaste) &&
                      (!eC ||
                        ((t = e.nativeEvent).clipboardData &&
                          "" !== t.clipboardData.getData("text/plain") &&
                          1 === t.clipboardData.types.length) ||
                        ea) &&
                      (e.preventDefault(), eh.insertData(J, e.clipboardData));
                  },
                  [g, Y.onPaste],
                ),
              }),
              l.createElement(e5, {
                decorations: em,
                node: J,
                renderElement: E,
                renderPlaceholder: x,
                renderLeaf: y,
                selection: J.selection,
              }),
            ),
          ),
        ),
      );
    },
    te = (e) => {
      var { attributes: t, children: r } = e;
      return l.createElement("span", Object.assign({}, t), r, eu && l.createElement("br", null));
    },
    tt = () => [],
    tr = (e, t) => {
      if (
        t.getBoundingClientRect &&
        (!e.selection || (e.selection && D.Q6.isCollapsed(e.selection)))
      ) {
        var r = t.startContainer.parentElement,
          u = function (e) {
            var r = t.startContainer,
              u = t.startOffset + e;
            if (3 !== r.nodeType || u < 0 || u + 1 > r.length) return null;
            var n = r.ownerDocument.createRange();
            return (n.setStart(r, u), n.setEnd(r, u + 1), n.getClientRects().length > 0 ? n : null);
          },
          n = t;
        if (0 === t.getClientRects().length) {
          var a = u(0) || u(-1);
          if (null === a) return;
          n = a;
        }
        ((r.getBoundingClientRect = n.getBoundingClientRect.bind(n)),
          (0, c.A)(r, { scrollMode: "if-needed" }),
          delete r.getBoundingClientRect);
      }
    },
    tu = (e, t) => {
      if (!t) return !1;
      var r = t(e);
      return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tn = (e, t) => {
      if (!t) return !1;
      var r = t(e);
      return null != r ? r : e.defaultPrevented;
    },
    ta = (0, l.createContext)(!1),
    to = () => (0, l.useContext)(ta),
    ti = (0, l.createContext)({}),
    ts = ["editor", "children", "onChange", "value"],
    tl = (e) => {
      var t,
        r,
        u,
        { editor: n, children: a, onChange: o, value: i } = e,
        s = B(e, ts),
        c = (0, l.useRef)(!1),
        [d, f] = l.useState(() => {
          if (!D.bP.isNodeList(i))
            throw Error(
              "[Slate] value is invalid! Expected a list of elements but got: ".concat(
                D.h6.stringify(i),
              ),
            );
          if (!D.KE.isEditor(n))
            throw Error("[Slate] editor is invalid! You passed: ".concat(D.h6.stringify(n)));
          return ((n.children = i), Object.assign(n, s), { v: 0, editor: n });
        }),
        { selectorContext: C, onChange: h } =
          ((t = (0, l.useRef)([]).current),
          (r = (0, l.useRef)({ editor: n }).current),
          (u = (0, l.useCallback)((e) => {
            ((r.editor = e), t.forEach((t) => t(e)));
          }, [])),
          {
            selectorContext: (0, l.useMemo)(
              () => ({
                getSlate: () => r.editor,
                addEventListener: (e) => (
                  t.push(e),
                  () => {
                    t.splice(t.indexOf(e), 1);
                  }
                ),
              }),
              [t, r],
            ),
            onChange: u,
          }),
        v = (0, l.useCallback)(() => {
          (o && o(n.children), f((e) => ({ v: e.v + 1, editor: n })), h(n));
        }, [o]);
      (0, l.useEffect)(
        () => (
          T.set(n, v),
          () => {
            (T.set(n, () => {}), (c.current = !0));
          }
        ),
        [v],
      );
      var [p, g] = (0, l.useState)(eh.isFocused(n));
      return (
        (0, l.useEffect)(() => {
          g(eh.isFocused(n));
        }),
        eg(() => {
          var e = () => g(eh.isFocused(n));
          return ee
            ? (document.addEventListener("focusin", e),
              document.addEventListener("focusout", e),
              () => {
                (document.removeEventListener("focusin", e),
                  document.removeEventListener("focusout", e));
              })
            : (document.addEventListener("focus", e, !0),
              document.addEventListener("blur", e, !0),
              () => {
                (document.removeEventListener("focus", e, !0),
                  document.removeEventListener("blur", e, !0));
              });
        }, []),
        l.createElement(
          ti.Provider,
          { value: C },
          l.createElement(
            eK.Provider,
            { value: d },
            l.createElement(
              ew.Provider,
              { value: d.editor },
              l.createElement(ta.Provider, { value: p }, a),
            ),
          ),
        )
      );
    },
    tc = (e, t) => {
      var r = (t.top + t.bottom) / 2;
      return e.top <= r && e.bottom >= r;
    },
    tD = (e, t, r) => {
      var u = eh.toDOMRange(e, t).getBoundingClientRect(),
        n = eh.toDOMRange(e, r).getBoundingClientRect();
      return tc(u, n) && tc(n, u);
    };
  function td(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e);
      (t &&
        (u = u.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, u));
    }
    return r;
  }
  function tf(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? td(Object(r), !0).forEach(function (t) {
            h(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : td(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
    }
    return e;
  }
  var tC = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
        { apply: r, onChange: u, deleteBackward: n, addMark: a, removeMark: o } = e;
      return (
        x.set(e, new WeakMap()),
        (e.addMark = (t, r) => {
          var u, n;
          (null == (u = j.get(e)) || u(),
            !N.get(e) && null != (n = M.get(e)) && n.length && N.set(e, null),
            R.delete(e),
            a(t, r));
        }),
        (e.removeMark = (t) => {
          var r;
          (!N.get(e) && null != (r = M.get(e)) && r.length && N.set(e, null), R.delete(e), o(t));
        }),
        (e.deleteBackward = (t) => {
          if ("line" !== t) return n(t);
          if (e.selection && D.Q6.isCollapsed(e.selection)) {
            var r = D.KE.above(e, {
              match: (t) => D.Hg.isElement(t) && D.KE.isBlock(e, t),
              at: e.selection,
            });
            if (r) {
              var [, u] = r,
                a = D.KE.range(e, u, e.selection.anchor),
                o = ((e, t) => {
                  var r = D.KE.range(e, D.Q6.end(t)),
                    u = Array.from(D.KE.positions(e, { at: t })),
                    n = 0,
                    a = u.length,
                    o = Math.floor(a / 2);
                  if (tD(e, D.KE.range(e, u[n]), r)) return D.KE.range(e, u[n], r);
                  if (u.length < 2) return D.KE.range(e, u[u.length - 1], r);
                  for (; o !== u.length && o !== n;)
                    (tD(e, D.KE.range(e, u[o]), r) ? (a = o) : (n = o),
                      (o = Math.floor((n + a) / 2)));
                  return D.KE.range(e, u[a], r);
                })(e, a);
              D.Q6.isCollapsed(o) || D.gB.delete(e, { at: o });
            }
          }
        }),
        (e.apply = (t) => {
          var u,
            n = [],
            a = M.get(e);
          if (null != a && a.length) {
            var o = a
              .map((e) =>
                (function (e, t) {
                  var { path: r, diff: u, id: n } = e;
                  switch (t.type) {
                    case "insert_text":
                      if (!D.wA.equals(t.path, r) || t.offset >= u.end) return e;
                      if (t.offset <= u.start)
                        return {
                          diff: {
                            start: t.text.length + u.start,
                            end: t.text.length + u.end,
                            text: u.text,
                          },
                          id: n,
                          path: r,
                        };
                      return {
                        diff: { start: u.start, end: u.end + t.text.length, text: u.text },
                        id: n,
                        path: r,
                      };
                    case "remove_text":
                      if (!D.wA.equals(t.path, r) || t.offset >= u.end) return e;
                      if (t.offset + t.text.length <= u.start)
                        return {
                          diff: {
                            start: u.start - t.text.length,
                            end: u.end - t.text.length,
                            text: u.text,
                          },
                          id: n,
                          path: r,
                        };
                      return {
                        diff: { start: u.start, end: u.end - t.text.length, text: u.text },
                        id: n,
                        path: r,
                      };
                    case "split_node":
                      if (!D.wA.equals(t.path, r) || t.position >= u.end)
                        return {
                          diff: u,
                          id: n,
                          path: D.wA.transform(r, t, { affinity: "backward" }),
                        };
                      if (t.position > u.start)
                        return {
                          diff: { start: u.start, end: Math.min(t.position, u.end), text: u.text },
                          id: n,
                          path: r,
                        };
                      return {
                        diff: {
                          start: u.start - t.position,
                          end: u.end - t.position,
                          text: u.text,
                        },
                        id: n,
                        path: D.wA.transform(r, t, { affinity: "forward" }),
                      };
                    case "merge_node":
                      if (!D.wA.equals(t.path, r))
                        return { diff: u, id: n, path: D.wA.transform(r, t) };
                      return {
                        diff: {
                          start: u.start + t.position,
                          end: u.end + t.position,
                          text: u.text,
                        },
                        id: n,
                        path: D.wA.transform(r, t),
                      };
                  }
                  var a = D.wA.transform(r, t);
                  return a ? { diff: u, path: a, id: n } : null;
                })(e, t),
              )
              .filter(Boolean);
            M.set(e, o);
          }
          var i = L.get(e);
          i && L.set(e, eZ(e, i, t));
          var s = K.get(e);
          if (null != s && s.at) {
            var l = D.bR.isPoint(null == s ? void 0 : s.at) ? eJ(e, s.at, t) : eZ(e, s.at, t);
            K.set(e, l ? tf(tf({}, s), {}, { at: l }) : null);
          }
          switch (t.type) {
            case "insert_text":
            case "remove_text":
            case "set_node":
            case "split_node":
              n.push(...th(e, t.path));
              break;
            case "set_selection":
              (null == (u = S.get(e)) || u.unref(), S.delete(e));
              break;
            case "insert_node":
            case "remove_node":
              n.push(...th(e, D.wA.parent(t.path)));
              break;
            case "merge_node":
              n.push(...th(e, D.wA.previous(t.path)));
              break;
            case "move_node":
              n.push(...th(e, D.wA.common(D.wA.parent(t.path), D.wA.parent(t.newPath))));
          }
          for (var [c, d] of (r(t), n)) {
            var [f] = D.KE.node(e, c);
            y.set(f, d);
          }
        }),
        (e.setFragmentData = (r) => {
          var { selection: u } = e;
          if (u) {
            var [n, a] = D.Q6.edges(u),
              o = D.KE.void(e, { at: n.path }),
              i = D.KE.void(e, { at: a.path });
            if (!D.Q6.isCollapsed(u) || o) {
              var s = eh.toDOMRange(e, u),
                l = s.cloneContents(),
                c = l.childNodes[0];
              if (
                (l.childNodes.forEach((e) => {
                  e.textContent && "" !== e.textContent.trim() && (c = e);
                }),
                i)
              ) {
                var [d] = i,
                  f = s.cloneRange(),
                  C = eh.toDOMNode(e, d);
                (f.setEndAfter(C), (l = f.cloneContents()));
              }
              if (
                (o && (c = l.querySelector("[data-slate-spacer]")),
                Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                  var t = "n" === e.getAttribute("data-slate-zero-width");
                  e.textContent = t ? "\n" : "";
                }),
                $(c))
              ) {
                var h = c.ownerDocument.createElement("span");
                ((h.style.whiteSpace = "pre"), h.appendChild(c), l.appendChild(h), (c = h));
              }
              var B = JSON.stringify(e.getFragment()),
                v = window.btoa(encodeURIComponent(B));
              (c.setAttribute("data-slate-fragment", v), r.setData("application/".concat(t), v));
              var p = l.ownerDocument.createElement("div");
              return (
                p.appendChild(l),
                p.setAttribute("hidden", "true"),
                l.ownerDocument.body.appendChild(p),
                r.setData("text/html", p.innerHTML),
                r.setData("text/plain", Z(p)),
                l.ownerDocument.body.removeChild(p),
                r
              );
            }
          }
        }),
        (e.insertData = (t) => {
          e.insertFragmentData(t) || e.insertTextData(t);
        }),
        (e.insertFragmentData = (r) => {
          var u =
            r.getData("application/".concat(t)) ||
            ((e) => {
              var [, t] = e.getData("text/html").match(X) || [];
              return t;
            })(r);
          if (u) {
            var n = JSON.parse(decodeURIComponent(window.atob(u)));
            return (e.insertFragment(n), !0);
          }
          return !1;
        }),
        (e.insertTextData = (t) => {
          var r = t.getData("text/plain");
          if (r) {
            var u = r.split(/\r\n|\r|\n/),
              n = !1;
            for (var a of u) (n && D.gB.splitNodes(e, { always: !0 }), e.insertText(a), (n = !0));
            return !0;
          }
          return !1;
        }),
        (e.onChange = (t) => {
          C.unstable_batchedUpdates(() => {
            var r = T.get(e);
            (r && r(), u(t));
          });
        }),
        e
      );
    },
    th = (e, t) => {
      var r = [];
      for (var [u, n] of D.KE.levels(e, { at: t })) {
        var a = eh.findKey(e, u);
        r.push([n, a]);
      }
      return r;
    };
}
