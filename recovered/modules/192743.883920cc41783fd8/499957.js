/* Recovered shipped factory. Module 499957.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 663286..695607
 * Raw property SHA-256: ad673a259ce00559317e1ef88b1875f861728fecccc20f82e80437e310a7b55e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Mk: () => ee,
    bv: () => eN,
    s3: () => ex,
    we: () => eD,
    fI: () => V,
    zR: () => eT,
    DL: () => ez,
    iB: () => eY,
    s9: () => eM,
    $c: () => $,
    XF: () => ey,
    P6: () => G,
    R1: () => q,
  });
  var r = n(582128),
    o = n.t(r, 2),
    a = n(84157),
    i = n(111975);
  function u() {
    let e = navigator.userAgentData;
    return null != e && e.platform ? e.platform : navigator.platform;
  }
  function l() {
    let e = navigator.userAgentData;
    return e && Array.isArray(e.brands)
      ? e.brands
          .map((e) => {
            let { brand: t, version: n } = e;
            return t + "/" + n;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function s() {
    let e = /android/i;
    return e.test(u()) || e.test(l());
  }
  let c = "data-floating-ui-focusable";
  function f(e) {
    let t = e.activeElement;
    for (; (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null;) {
      var n;
      t = t.shadowRoot.activeElement;
    }
    return t;
  }
  function d(e, t) {
    if (!e || !t) return !1;
    let n = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, a.Ng)(n)) {
      let n = t;
      for (; n;) {
        if (e === n) return !0;
        n = n.parentNode || n.host;
      }
    }
    return !1;
  }
  function h(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
  }
  function p(e, t) {
    return (
      null != t &&
      ("composedPath" in e
        ? e.composedPath().includes(t)
        : null != e.target && t.contains(e.target))
    );
  }
  function y(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
  }
  function m(e) {
    return (
      !!e &&
      "combobox" === e.getAttribute("role") &&
      (0, a.sb)(e) &&
      e.matches(
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
      )
    );
  }
  function v(e) {
    return e ? (e.hasAttribute(c) ? e : e.querySelector("[" + c + "]") || e) : null;
  }
  function g(e, t, n) {
    return (
      void 0 === n && (n = !0),
      e
        .filter((e) => {
          var r;
          return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
        })
        .flatMap((t) => [t, ...g(e, t.id, n)])
    );
  }
  function b(e, t) {
    var n;
    let r = [],
      o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
    for (; o;) {
      let t = e.find((e) => e.id === o);
      ((o = null == t ? void 0 : t.parentId), t && (r = r.concat(t)));
    }
    return r;
  }
  function w(e) {
    (e.preventDefault(), e.stopPropagation());
  }
  function _(e, t) {
    let n = ["mouse", "pen"];
    return (t || n.push("", void 0), n.includes(e));
  }
  var k = "u" > typeof document ? r.useLayoutEffect : function () {};
  function x(e) {
    let t = r.useRef(e);
    return (
      k(() => {
        t.current = e;
      }),
      t
    );
  }
  let S = { ...o }.useInsertionEffect || ((e) => e());
  function E(e) {
    let t = r.useRef(() => {});
    return (
      S(() => {
        t.current = e;
      }),
      r.useCallback(function () {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        return null == t.current ? void 0 : t.current(...n);
      }, [])
    );
  }
  let O = () => ({
    getShadowRoot: !0,
    displayCheck:
      "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]")
        ? "full"
        : "none",
  });
  function T(e, t) {
    let n = (0, i.Kr)(e, O()),
      r = n.length;
    if (0 === r) return;
    let o = f(y(e)),
      a = n.indexOf(o);
    return n[-1 === a ? (1 === t ? 0 : r - 1) : a + t];
  }
  function R(e) {
    return T(y(e).body, 1) || e;
  }
  function A(e) {
    return T(y(e).body, -1) || e;
  }
  function C(e, t) {
    let n = t || e.currentTarget,
      r = e.relatedTarget;
    return !r || !d(n, r);
  }
  function M(e) {
    e.querySelectorAll("[data-tabindex]").forEach((e) => {
      let t = e.dataset.tabindex;
      (delete e.dataset.tabindex,
        t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex"));
    });
  }
  var D = n(477900),
    P = n(333007),
    N = n(458265);
  let j = "active",
    L = "selected",
    z = { ...o },
    U = !1,
    Y = 0,
    I = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Y++,
    F =
      z.useId ||
      function () {
        let [e, t] = r.useState(() => (U ? I() : void 0));
        return (
          k(() => {
            null == e && t(I());
          }, []),
          r.useEffect(() => {
            U = !0;
          }, []),
          e
        );
      };
  function W() {
    let e = new Map();
    return {
      emit(t, n) {
        var r;
        null == (r = e.get(t)) || r.forEach((e) => e(n));
      },
      on(t, n) {
        (e.has(t) || e.set(t, new Set()), e.get(t).add(n));
      },
      off(t, n) {
        var r;
        null == (r = e.get(t)) || r.delete(n);
      },
    };
  }
  let H = r.createContext(null),
    B = r.createContext(null),
    q = () => {
      var e;
      return (null == (e = r.useContext(H)) ? void 0 : e.id) || null;
    };
  function V(e) {
    let t = F(),
      n = r.useContext(B),
      o = q(),
      a = e || o;
    return (
      k(() => {
        if (!t) return;
        let e = { id: t, parentId: a };
        return (
          null == n || n.addNode(e),
          () => {
            null == n || n.removeNode(e);
          }
        );
      }, [n, t, a]),
      t
    );
  }
  function $(e) {
    let { children: t, id: n } = e,
      o = q();
    return (0, D.jsx)(H.Provider, {
      value: r.useMemo(() => ({ id: n, parentId: o }), [n, o]),
      children: t,
    });
  }
  function G(e) {
    let { children: t } = e,
      n = r.useRef([]),
      o = r.useCallback((e) => {
        n.current = [...n.current, e];
      }, []),
      a = r.useCallback((e) => {
        n.current = n.current.filter((t) => t !== e);
      }, []),
      [i] = r.useState(() => W());
    return (0, D.jsx)(B.Provider, {
      value: r.useMemo(() => ({ nodesRef: n, addNode: o, removeNode: a, events: i }), [o, a, i]),
      children: t,
    });
  }
  function X(e) {
    return "data-floating-ui-" + e;
  }
  function Q(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
  }
  let Z = X("safe-polygon");
  function K(e, t, n) {
    if (n && !_(n)) return 0;
    if ("number" == typeof e) return e;
    if ("function" == typeof e) {
      let n = e();
      return "number" == typeof n ? n : null == n ? void 0 : n[t];
    }
    return null == e ? void 0 : e[t];
  }
  function J(e) {
    return "function" == typeof e ? e() : e;
  }
  function ee(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: o, dataRef: i, events: u, elements: l } = e,
      {
        enabled: s = !0,
        delay: c = 0,
        handleClose: f = null,
        mouseOnly: h = !1,
        restMs: p = 0,
        move: m = !0,
      } = t,
      v = r.useContext(B),
      g = q(),
      b = x(f),
      w = x(c),
      S = x(n),
      O = x(p),
      T = r.useRef(),
      R = r.useRef(-1),
      A = r.useRef(),
      C = r.useRef(-1),
      M = r.useRef(!0),
      D = r.useRef(!1),
      P = r.useRef(() => {}),
      N = r.useRef(!1),
      j = E(() => {
        var e;
        let t = null == (e = i.current.openEvent) ? void 0 : e.type;
        return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t;
      });
    (r.useEffect(() => {
      if (s)
        return (
          u.on("openchange", e),
          () => {
            u.off("openchange", e);
          }
        );
      function e(e) {
        let { open: t } = e;
        t || (Q(R), Q(C), (M.current = !0), (N.current = !1));
      }
    }, [s, u]),
      r.useEffect(() => {
        if (!s || !b.current || !n) return;
        function e(e) {
          j() && o(!1, e, "hover");
        }
        let t = y(l.floating).documentElement;
        return (
          t.addEventListener("mouseleave", e),
          () => {
            t.removeEventListener("mouseleave", e);
          }
        );
      }, [l.floating, n, o, s, b, j]));
    let L = r.useCallback(
        function (e, t, n) {
          (void 0 === t && (t = !0), void 0 === n && (n = "hover"));
          let r = K(w.current, "close", T.current);
          r && !A.current
            ? (Q(R), (R.current = window.setTimeout(() => o(!1, e, n), r)))
            : t && (Q(R), o(!1, e, n));
        },
        [w, o],
      ),
      z = E(() => {
        (P.current(), (A.current = void 0));
      }),
      U = E(() => {
        if (D.current) {
          let e = y(l.floating).body;
          ((e.style.pointerEvents = ""), e.removeAttribute(Z), (D.current = !1));
        }
      }),
      Y = E(
        () => !!i.current.openEvent && ["click", "mousedown"].includes(i.current.openEvent.type),
      );
    (r.useEffect(() => {
      if (s && (0, a.vq)(l.domReference)) {
        let o = l.domReference,
          a = l.floating;
        return (
          n && o.addEventListener("mouseleave", r),
          m && o.addEventListener("mousemove", e, { once: !0 }),
          o.addEventListener("mouseenter", e),
          o.addEventListener("mouseleave", t),
          a &&
            (a.addEventListener("mouseleave", r),
            a.addEventListener("mouseenter", u),
            a.addEventListener("mouseleave", c)),
          () => {
            (n && o.removeEventListener("mouseleave", r),
              m && o.removeEventListener("mousemove", e),
              o.removeEventListener("mouseenter", e),
              o.removeEventListener("mouseleave", t),
              a &&
                (a.removeEventListener("mouseleave", r),
                a.removeEventListener("mouseenter", u),
                a.removeEventListener("mouseleave", c)));
          }
        );
      }
      function e(e) {
        if (
          (Q(R),
          (M.current = !1),
          (h && !_(T.current)) || (J(O.current) > 0 && !K(w.current, "open")))
        )
          return;
        let t = K(w.current, "open", T.current);
        t
          ? (R.current = window.setTimeout(() => {
              S.current || o(!0, e, "hover");
            }, t))
          : n || o(!0, e, "hover");
      }
      function t(e) {
        if (Y()) return void U();
        P.current();
        let t = y(l.floating);
        if ((Q(C), (N.current = !1), b.current && i.current.floatingContext)) {
          (n || Q(R),
            (A.current = b.current({
              ...i.current.floatingContext,
              tree: v,
              x: e.clientX,
              y: e.clientY,
              onClose() {
                (U(), z(), Y() || L(e, !0, "safe-polygon"));
              },
            })));
          let r = A.current;
          (t.addEventListener("mousemove", r),
            (P.current = () => {
              t.removeEventListener("mousemove", r);
            }));
          return;
        }
        ("touch" === T.current && d(l.floating, e.relatedTarget)) || L(e);
      }
      function r(e) {
        Y() ||
          (i.current.floatingContext &&
            (null == b.current ||
              b.current({
                ...i.current.floatingContext,
                tree: v,
                x: e.clientX,
                y: e.clientY,
                onClose() {
                  (U(), z(), Y() || L(e));
                },
              })(e)));
      }
      function u() {
        Q(R);
      }
      function c(e) {
        Y() || L(e, !1);
      }
    }, [l, s, e, h, m, L, z, U, o, n, S, v, w, b, i, Y, O]),
      k(() => {
        var e, t;
        if (
          s &&
          n &&
          null != (e = b.current) &&
          null != (e = e.__options) &&
          e.blockPointerEvents &&
          j()
        ) {
          D.current = !0;
          let e = l.floating;
          if ((0, a.vq)(l.domReference) && e) {
            let n = y(l.floating).body;
            n.setAttribute(Z, "");
            let r = l.domReference,
              o =
                null == v ||
                null == (t = v.nodesRef.current.find((e) => e.id === g)) ||
                null == (t = t.context)
                  ? void 0
                  : t.elements.floating;
            return (
              o && (o.style.pointerEvents = ""),
              (n.style.pointerEvents = "none"),
              (r.style.pointerEvents = "auto"),
              (e.style.pointerEvents = "auto"),
              () => {
                ((n.style.pointerEvents = ""),
                  (r.style.pointerEvents = ""),
                  (e.style.pointerEvents = ""));
              }
            );
          }
        }
      }, [s, n, g, l, v, b, j]),
      k(() => {
        n || ((T.current = void 0), (N.current = !1), z(), U());
      }, [n, z, U]),
      r.useEffect(
        () => () => {
          (z(), Q(R), Q(C), U());
        },
        [s, l.domReference, z, U],
      ));
    let I = r.useMemo(() => {
      function e(e) {
        T.current = e.pointerType;
      }
      return {
        onPointerDown: e,
        onPointerEnter: e,
        onMouseMove(e) {
          let { nativeEvent: t } = e;
          function r() {
            M.current || S.current || o(!0, t, "hover");
          }
          (h && !_(T.current)) ||
            n ||
            0 === J(O.current) ||
            (N.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
            (Q(C),
            "touch" === T.current
              ? r()
              : ((N.current = !0), (C.current = window.setTimeout(r, J(O.current)))));
        },
      };
    }, [h, o, n, S, O]);
    return r.useMemo(() => (s ? { reference: I } : {}), [s, I]);
  }
  let et = 0;
  function en(e, t) {
    void 0 === t && (t = {});
    let { preventScroll: n = !1, cancelPrevious: r = !0, sync: o = !1 } = t;
    r && cancelAnimationFrame(et);
    let a = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
    o ? a() : (et = requestAnimationFrame(a));
  }
  function er(e, t) {
    if (!e || !t) return !1;
    let n = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, a.Ng)(n)) {
      let n = t;
      for (; n;) {
        if (e === n) return !0;
        n = n.parentNode || n.host;
      }
    }
    return !1;
  }
  let eo = { inert: new WeakMap(), "aria-hidden": new WeakMap(), none: new WeakMap() };
  function ea(e) {
    return "inert" === e ? eo.inert : "aria-hidden" === e ? eo["aria-hidden"] : eo.none;
  }
  let ei = new WeakSet(),
    eu = {},
    el = 0,
    es = (e) => e && (e.host || es(e.parentNode));
  function ec(e, t, n) {
    var r, o, i;
    let u, l, s, c, f, d, h;
    (void 0 === t && (t = !1), void 0 === n && (n = !1));
    let p = ((null == (r = e[0]) ? void 0 : r.ownerDocument) || document).body;
    return (
      (o = e.concat(Array.from(p.querySelectorAll('[aria-live],[role="status"],output')))),
      (i = t),
      (u = "data-floating-ui-inert"),
      (l = n ? "inert" : i ? "aria-hidden" : null),
      (s = o
        .map((e) => {
          if (p.contains(e)) return e;
          let t = es(e);
          return p.contains(t) ? t : null;
        })
        .filter((e) => null != e)),
      (c = new Set()),
      (f = new Set(s)),
      (d = []),
      eu[u] || (eu[u] = new WeakMap()),
      (h = eu[u]),
      s.forEach(function e(t) {
        !(!t || c.has(t)) && (c.add(t), t.parentNode && e(t.parentNode));
      }),
      (function e(t) {
        !t ||
          f.has(t) ||
          [].forEach.call(t.children, (t) => {
            if ("script" !== (0, a.mq)(t))
              if (c.has(t)) e(t);
              else {
                let e = l ? t.getAttribute(l) : null,
                  n = null !== e && "false" !== e,
                  r = ea(l),
                  o = (r.get(t) || 0) + 1,
                  a = (h.get(t) || 0) + 1;
                (r.set(t, o),
                  h.set(t, a),
                  d.push(t),
                  1 === o && n && ei.add(t),
                  1 === a && t.setAttribute(u, ""),
                  !n && l && t.setAttribute(l, "inert" === l ? "" : "true"));
              }
          });
      })(p),
      c.clear(),
      el++,
      () => {
        (d.forEach((e) => {
          let t = ea(l),
            n = (t.get(e) || 0) - 1,
            r = (h.get(e) || 0) - 1;
          (t.set(e, n),
            h.set(e, r),
            n || (!ei.has(e) && l && e.removeAttribute(l), ei.delete(e)),
            r || e.removeAttribute(u));
        }),
          --el ||
            ((eo.inert = new WeakMap()),
            (eo["aria-hidden"] = new WeakMap()),
            (eo.none = new WeakMap()),
            (ei = new WeakSet()),
            (eu = {})));
      }
    );
  }
  let ef = {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "fixed",
      whiteSpace: "nowrap",
      width: "1px",
      top: 0,
      left: 0,
    },
    ed = r.forwardRef(function (e, t) {
      let [n, o] = r.useState();
      k(() => {
        /apple/i.test(navigator.vendor) && o("button");
      }, []);
      let a = {
        ref: t,
        tabIndex: 0,
        role: n,
        "aria-hidden": !n || void 0,
        [X("focus-guard")]: "",
        style: ef,
      };
      return (0, D.jsx)("span", { ...e, ...a });
    }),
    eh = r.createContext(null),
    ep = X("portal");
  function ey(e) {
    let { children: t, id: n, root: o, preserveTabOrder: u = !0 } = e,
      l = (function (e) {
        void 0 === e && (e = {});
        let { id: t, root: n } = e,
          o = F(),
          i = em(),
          [u, l] = r.useState(null),
          s = r.useRef(null);
        return (
          k(
            () => () => {
              (null == u || u.remove(),
                queueMicrotask(() => {
                  s.current = null;
                }));
            },
            [u],
          ),
          k(() => {
            if (!o || s.current) return;
            let e = t ? document.getElementById(t) : null;
            if (!e) return;
            let n = document.createElement("div");
            ((n.id = o), n.setAttribute(ep, ""), e.appendChild(n), (s.current = n), l(n));
          }, [t, o]),
          k(() => {
            if (null === n || !o || s.current) return;
            let e = n || (null == i ? void 0 : i.portalNode);
            (e && !(0, a.Ll)(e) && (e = e.current), (e = e || document.body));
            let r = null;
            t && (((r = document.createElement("div")).id = t), e.appendChild(r));
            let u = document.createElement("div");
            ((u.id = o),
              u.setAttribute(ep, ""),
              (e = r || e).appendChild(u),
              (s.current = u),
              l(u));
          }, [t, n, o, i]),
          u
        );
      })({ id: n, root: o }),
      [s, c] = r.useState(null),
      f = r.useRef(null),
      d = r.useRef(null),
      h = r.useRef(null),
      p = r.useRef(null),
      y = null == s ? void 0 : s.modal,
      m = null == s ? void 0 : s.open,
      v = !!s && !s.modal && s.open && u && !!(o || l);
    return (
      r.useEffect(() => {
        if (l && u && !y)
          return (
            l.addEventListener("focusin", e, !0),
            l.addEventListener("focusout", e, !0),
            () => {
              (l.removeEventListener("focusin", e, !0), l.removeEventListener("focusout", e, !0));
            }
          );
        function e(e) {
          l &&
            C(e) &&
            ("focusin" === e.type
              ? M
              : function (e) {
                  (0, i.Kr)(e, O()).forEach((e) => {
                    ((e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                      e.setAttribute("tabindex", "-1"));
                  });
                })(l);
        }
      }, [l, u, y]),
      r.useEffect(() => {
        !l || m || M(l);
      }, [m, l]),
      (0, D.jsxs)(eh.Provider, {
        value: r.useMemo(
          () => ({
            preserveTabOrder: u,
            beforeOutsideRef: f,
            afterOutsideRef: d,
            beforeInsideRef: h,
            afterInsideRef: p,
            portalNode: l,
            setFocusManagerState: c,
          }),
          [u, l],
        ),
        children: [
          v &&
            l &&
            (0, D.jsx)(ed, {
              "data-type": "outside",
              ref: f,
              onFocus: (e) => {
                if (C(e, l)) {
                  var t;
                  null == (t = h.current) || t.focus();
                } else {
                  let e = A(s ? s.domReference : null);
                  null == e || e.focus();
                }
              },
            }),
          v && l && (0, D.jsx)("span", { "aria-owns": l.id, style: ef }),
          l && P.createPortal(t, l),
          v &&
            l &&
            (0, D.jsx)(ed, {
              "data-type": "outside",
              ref: d,
              onFocus: (e) => {
                if (C(e, l)) {
                  var t;
                  null == (t = p.current) || t.focus();
                } else {
                  let t = R(s ? s.domReference : null);
                  (null == t || t.focus(),
                    (null == s ? void 0 : s.closeOnFocusOut) &&
                      (null == s || s.onOpenChange(!1, e.nativeEvent, "focus-out")));
                }
              },
            }),
        ],
      })
    );
  }
  let em = () => r.useContext(eh);
  function ev(e) {
    return r.useMemo(
      () => (t) => {
        e.forEach((e) => {
          e && (e.current = t);
        });
      },
      e,
    );
  }
  let eg = [];
  function eb() {
    eg = eg.filter((e) => e.isConnected);
  }
  function ew() {
    return (eb(), eg[eg.length - 1]);
  }
  function e_(e, t) {
    var n;
    if (
      !t.current.includes("floating") &&
      !(null != (n = e.getAttribute("role")) && n.includes("dialog"))
    )
      return;
    let r = O(),
      o = (0, i.nq)(e, r).filter((e) => {
        let t = e.getAttribute("data-tabindex") || "";
        return (0, i.AO)(e, r) || (e.hasAttribute("data-tabindex") && !t.startsWith("-"));
      }),
      a = e.getAttribute("tabindex");
    t.current.includes("floating") || 0 === o.length
      ? "0" !== a && e.setAttribute("tabindex", "0")
      : ("-1" !== a ||
          (e.hasAttribute("data-tabindex") && "-1" !== e.getAttribute("data-tabindex"))) &&
        (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
  }
  let ek = r.forwardRef(function (e, t) {
    return (0, D.jsx)("button", { ...e, type: "button", ref: t, tabIndex: -1, style: ef });
  });
  function ex(e) {
    let {
        context: t,
        children: n,
        disabled: o = !1,
        order: u = ["content"],
        guards: c = !0,
        initialFocus: p = 0,
        returnFocus: _ = !0,
        restoreFocus: S = !1,
        modal: T = !0,
        visuallyHiddenDismiss: M = !1,
        closeOnFocusOut: P = !0,
        outsideElementsInert: N = !1,
        getInsideElements: j = () => [],
      } = e,
      {
        open: L,
        onOpenChange: z,
        events: U,
        dataRef: Y,
        elements: { domReference: I, floating: F },
      } = t,
      W = E(() => {
        var e;
        return null == (e = Y.current.floatingContext) ? void 0 : e.nodeId;
      }),
      H = E(j),
      q = "number" == typeof p && p < 0,
      V = m(I) && q,
      $ = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype,
      G = !$ || c,
      Z = !G || ($ && N),
      K = x(u),
      J = x(p),
      ee = x(_),
      et = r.useContext(B),
      er = em(),
      eo = r.useRef(null),
      ea = r.useRef(null),
      ei = r.useRef(!1),
      eu = r.useRef(!1),
      el = r.useRef(-1),
      es = r.useRef(-1),
      eh = null != er,
      ep = v(F),
      ey = E(function (e) {
        return (void 0 === e && (e = ep), e ? (0, i.Kr)(e, O()) : []);
      }),
      ex = E((e) => {
        let t = ey(e);
        return K.current
          .map((e) => (I && "reference" === e ? I : ep && "floating" === e ? ep : t))
          .filter(Boolean)
          .flat();
      });
    (r.useEffect(() => {
      if (o || !T) return;
      function e(e) {
        if ("Tab" === e.key) {
          d(ep, f(y(ep))) && 0 === ey().length && !V && w(e);
          let t = ex(),
            n = h(e);
          ("reference" === K.current[0] &&
            n === I &&
            (w(e), e.shiftKey ? en(t[t.length - 1]) : en(t[1])),
            "floating" === K.current[1] && n === ep && e.shiftKey && (w(e), en(t[0])));
        }
      }
      let t = y(ep);
      return (
        t.addEventListener("keydown", e),
        () => {
          t.removeEventListener("keydown", e);
        }
      );
    }, [o, I, ep, T, K, V, ey, ex]),
      r.useEffect(() => {
        if (!o && F)
          return (
            F.addEventListener("focusin", e),
            () => {
              F.removeEventListener("focusin", e);
            }
          );
        function e(e) {
          let t = h(e),
            n = ey().indexOf(t);
          -1 !== n && (el.current = n);
        }
      }, [o, F, ey]),
      r.useEffect(() => {
        if (o || !P) return;
        function e() {
          ((eu.current = !0),
            setTimeout(() => {
              eu.current = !1;
            }));
        }
        function t(e) {
          let t = e.relatedTarget,
            n = e.currentTarget,
            r = h(e);
          queueMicrotask(() => {
            let o = W(),
              i = !(
                d(I, t) ||
                d(F, t) ||
                d(t, F) ||
                d(null == er ? void 0 : er.portalNode, t) ||
                (null != t && t.hasAttribute(X("focus-guard"))) ||
                (et &&
                  (g(et.nodesRef.current, o).find((e) => {
                    var n, r;
                    return (
                      d(null == (n = e.context) ? void 0 : n.elements.floating, t) ||
                      d(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                    );
                  }) ||
                    b(et.nodesRef.current, o).find((e) => {
                      var n, r, o;
                      return (
                        [
                          null == (n = e.context) ? void 0 : n.elements.floating,
                          v(null == (r = e.context) ? void 0 : r.elements.floating),
                        ].includes(t) ||
                        (null == (o = e.context) ? void 0 : o.elements.domReference) === t
                      );
                    })))
              );
            if (
              (n === I && ep && e_(ep, K),
              S && n !== I && !(null != r && r.isConnected) && f(y(ep)) === y(ep).body)
            ) {
              (0, a.sb)(ep) && ep.focus();
              let e = el.current,
                t = ey(),
                n = t[e] || t[t.length - 1] || ep;
              (0, a.sb)(n) && n.focus();
            }
            if (Y.current.insideReactTree) {
              Y.current.insideReactTree = !1;
              return;
            }
            (V || !T) &&
              t &&
              i &&
              !eu.current &&
              t !== ew() &&
              ((ei.current = !0), z(!1, e, "focus-out"));
          });
        }
        let n = !!(!et && er);
        function r() {
          (Q(es),
            (Y.current.insideReactTree = !0),
            (es.current = window.setTimeout(() => {
              Y.current.insideReactTree = !1;
            })));
        }
        if (F && (0, a.sb)(I))
          return (
            I.addEventListener("focusout", t),
            I.addEventListener("pointerdown", e),
            F.addEventListener("focusout", t),
            n && F.addEventListener("focusout", r, !0),
            () => {
              (I.removeEventListener("focusout", t),
                I.removeEventListener("pointerdown", e),
                F.removeEventListener("focusout", t),
                n && F.removeEventListener("focusout", r, !0));
            }
          );
      }, [o, I, F, ep, T, et, er, z, P, S, ey, V, W, K, Y]));
    let eS = r.useRef(null),
      eE = r.useRef(null),
      eO = ev([eS, null == er ? void 0 : er.beforeInsideRef]),
      eT = ev([eE, null == er ? void 0 : er.afterInsideRef]);
    function eR(e) {
      return !o && M && T
        ? (0, D.jsx)(ek, {
            ref: "start" === e ? eo : ea,
            onClick: (e) => z(!1, e.nativeEvent),
            children: "string" == typeof M ? M : "Dismiss",
          })
        : null;
    }
    (r.useEffect(() => {
      var e, t;
      if (o || !F) return;
      let n = Array.from(
          (null == er || null == (e = er.portalNode)
            ? void 0
            : e.querySelectorAll("[" + X("portal") + "]")) || [],
        ),
        r = [
          F,
          null ==
            (t = (et ? b(et.nodesRef.current, W()) : []).find((e) => {
              var t;
              return m((null == (t = e.context) ? void 0 : t.elements.domReference) || null);
            })) || null == (t = t.context)
            ? void 0
            : t.elements.domReference,
          ...n,
          ...H(),
          eo.current,
          ea.current,
          eS.current,
          eE.current,
          null == er ? void 0 : er.beforeOutsideRef.current,
          null == er ? void 0 : er.afterOutsideRef.current,
          K.current.includes("reference") || V ? I : null,
        ].filter((e) => null != e),
        a = T || V ? ec(r, !Z, Z) : ec(r);
      return () => {
        a();
      };
    }, [o, I, F, T, K, er, V, G, Z, et, W, H]),
      k(() => {
        if (o || !(0, a.sb)(ep)) return;
        let e = f(y(ep));
        queueMicrotask(() => {
          let t = ex(ep),
            n = J.current,
            r = ("number" == typeof n ? t[n] : n.current) || ep,
            o = d(ep, e);
          q || o || !L || en(r, { preventScroll: r === ep });
        });
      }, [o, L, ep, q, ex, J]),
      k(() => {
        var e;
        if (o || !ep) return;
        let t = y(ep);
        function n(e) {
          let { reason: t, event: n, nested: r } = e;
          if (
            (["hover", "safe-polygon"].includes(t) && "mouseleave" === n.type && (ei.current = !0),
            "outside-press" === t)
          )
            if (r) ei.current = !1;
            else if (
              (0 === n.mozInputSource && n.isTrusted) ||
              (s() && n.pointerType
                ? "click" === n.type && 1 === n.buttons
                : 0 === n.detail && !n.pointerType) ||
              (!l().includes("jsdom/") &&
                ((!s() && 0 === n.width && 0 === n.height) ||
                  (s() &&
                    1 === n.width &&
                    1 === n.height &&
                    0 === n.pressure &&
                    0 === n.detail &&
                    "mouse" === n.pointerType) ||
                  (n.width < 1 &&
                    n.height < 1 &&
                    0 === n.pressure &&
                    0 === n.detail &&
                    "touch" === n.pointerType)))
            )
              ei.current = !1;
            else {
              let e = !1;
              (document.createElement("div").focus({
                get preventScroll() {
                  return ((e = !0), !1);
                },
              }),
                e ? (ei.current = !1) : (ei.current = !0));
            }
        }
        ((e = f(t)),
          eb(),
          e && "body" !== (0, a.mq)(e) && (eg.push(e), eg.length > 20 && (eg = eg.slice(-20))),
          U.on("openchange", n));
        let r = t.createElement("span");
        return (
          r.setAttribute("tabindex", "-1"),
          r.setAttribute("aria-hidden", "true"),
          Object.assign(r.style, ef),
          eh && I && I.insertAdjacentElement("afterend", r),
          () => {
            U.off("openchange", n);
            let e = f(t),
              o =
                d(F, e) ||
                (et &&
                  g(et.nodesRef.current, W(), !1).some((t) => {
                    var n;
                    return d(null == (n = t.context) ? void 0 : n.elements.floating, e);
                  })),
              u = (function () {
                if ("boolean" == typeof ee.current) {
                  let e = I || ew();
                  return e && e.isConnected ? e : r;
                }
                return ee.current.current || r;
              })();
            queueMicrotask(() => {
              let n,
                l = ((n = O()), (0, i.AO)(u, n) ? u : (0, i.Kr)(u, n)[0] || u);
              (ee.current &&
                !ei.current &&
                (0, a.sb)(l) &&
                (l === e || e === t.body || o) &&
                l.focus({ preventScroll: !0 }),
                r.remove());
            });
          }
        );
      }, [o, F, ep, ee, Y, U, et, eh, I, W]),
      r.useEffect(
        () => (
          queueMicrotask(() => {
            ei.current = !1;
          }),
          () => {
            queueMicrotask(eb);
          }
        ),
        [o],
      ),
      k(() => {
        if (!o && er)
          return (
            er.setFocusManagerState({
              modal: T,
              closeOnFocusOut: P,
              open: L,
              onOpenChange: z,
              domReference: I,
            }),
            () => {
              er.setFocusManagerState(null);
            }
          );
      }, [o, er, T, L, z, P, I]),
      k(() => {
        o || (ep && e_(ep, K));
      }, [o, ep, K]));
    let eA = !o && G && (!T || !V) && (eh || T);
    return (0, D.jsxs)(D.Fragment, {
      children: [
        eA &&
          (0, D.jsx)(ed, {
            "data-type": "inside",
            ref: eO,
            onFocus: (e) => {
              if (T) {
                let e = ex();
                en("reference" === u[0] ? e[0] : e[e.length - 1]);
              } else if (null != er && er.preserveTabOrder && er.portalNode)
                if (((ei.current = !1), C(e, er.portalNode))) {
                  let e = R(I);
                  null == e || e.focus();
                } else {
                  var t;
                  null == (t = er.beforeOutsideRef.current) || t.focus();
                }
            },
          }),
        !V && eR("start"),
        n,
        eR("end"),
        eA &&
          (0, D.jsx)(ed, {
            "data-type": "inside",
            ref: eT,
            onFocus: (e) => {
              if (T) en(ex()[0]);
              else if (null != er && er.preserveTabOrder && er.portalNode)
                if ((P && (ei.current = !0), C(e, er.portalNode))) {
                  let e = A(I);
                  null == e || e.focus();
                } else {
                  var t;
                  null == (t = er.afterOutsideRef.current) || t.focus();
                }
            },
          }),
      ],
    });
  }
  let eS = 0,
    eE = "--floating-ui-scrollbar-width",
    eO = () => {},
    eT = r.forwardRef(function (e, t) {
      let { lockScroll: n = !1, ...r } = e;
      return (
        k(() => {
          if (n)
            return (
              1 == ++eS &&
                (eO = (function () {
                  let e = u(),
                    t =
                      /iP(hone|ad|od)|iOS/.test(e) ||
                      ("MacIntel" === e && navigator.maxTouchPoints > 1),
                    n = document.body.style,
                    r =
                      Math.round(document.documentElement.getBoundingClientRect().left) +
                      document.documentElement.scrollLeft
                        ? "paddingLeft"
                        : "paddingRight",
                    o = window.innerWidth - document.documentElement.clientWidth,
                    a = n.left ? parseFloat(n.left) : window.scrollX,
                    i = n.top ? parseFloat(n.top) : window.scrollY;
                  if (
                    ((n.overflow = "hidden"),
                    n.setProperty(eE, o + "px"),
                    o && (n[r] = o + "px"),
                    t)
                  ) {
                    var l, s;
                    let e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0;
                    Object.assign(n, {
                      position: "fixed",
                      top:
                        -(
                          i -
                          Math.floor(
                            (null == (s = window.visualViewport) ? void 0 : s.offsetTop) || 0,
                          )
                        ) + "px",
                      left: -(a - Math.floor(e)) + "px",
                      right: "0",
                    });
                  }
                  return () => {
                    (Object.assign(n, { overflow: "", [r]: "" }),
                      n.removeProperty(eE),
                      t &&
                        (Object.assign(n, { position: "", top: "", left: "", right: "" }),
                        window.scrollTo(a, i)));
                  };
                })()),
              () => {
                0 == --eS && eO();
              }
            );
        }, [n]),
        (0, D.jsx)("div", {
          ref: t,
          ...r,
          style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...r.style,
          },
        })
      );
    }),
    eR = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
    eA = {
      pointerdown: "onPointerDownCapture",
      mousedown: "onMouseDownCapture",
      click: "onClickCapture",
    },
    eC = (e) => {
      var t, n;
      return {
        escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
        outsidePress:
          "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
      };
    };
  function eM(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: o, elements: i, dataRef: u } = e,
      {
        enabled: l = !0,
        escapeKey: s = !0,
        outsidePress: c = !0,
        outsidePressEvent: f = "pointerdown",
        referencePress: m = !1,
        referencePressEvent: v = "pointerdown",
        ancestorScroll: b = !1,
        bubbles: w,
        capture: _,
      } = t,
      k = r.useContext(B),
      x = E("function" == typeof c ? c : () => !1),
      S = "function" == typeof c ? x : c,
      O = r.useRef(!1),
      { escapeKey: T, outsidePress: R } = eC(w),
      { escapeKey: A, outsidePress: C } = eC(_),
      M = r.useRef(!1),
      D = E((e) => {
        var t;
        if (!n || !l || !s || "Escape" !== e.key || M.current) return;
        let r = null == (t = u.current.floatingContext) ? void 0 : t.nodeId,
          a = k ? g(k.nodesRef.current, r) : [];
        if (!T && (e.stopPropagation(), a.length > 0)) {
          let e = !0;
          if (
            (a.forEach((t) => {
              var n;
              if (
                null != (n = t.context) &&
                n.open &&
                !t.context.dataRef.current.__escapeKeyBubbles
              ) {
                e = !1;
                return;
              }
            }),
            !e)
          )
            return;
        }
        o(!1, "nativeEvent" in e ? e.nativeEvent : e, "escape-key");
      }),
      P = E((e) => {
        var t;
        let n = () => {
          var t;
          (D(e), null == (t = h(e)) || t.removeEventListener("keydown", n));
        };
        null == (t = h(e)) || t.addEventListener("keydown", n);
      }),
      N = E((e) => {
        var t;
        let n = u.current.insideReactTree;
        u.current.insideReactTree = !1;
        let r = O.current;
        if (((O.current = !1), ("click" === f && r) || n || ("function" == typeof S && !S(e))))
          return;
        let l = h(e),
          s = "[" + X("inert") + "]",
          c = y(i.floating).querySelectorAll(s),
          m = (0, a.vq)(l) ? l : null;
        for (; m && !(0, a.eu)(m);) {
          let e = (0, a.$4)(m);
          if ((0, a.eu)(e) || !(0, a.vq)(e)) break;
          m = e;
        }
        if (
          c.length &&
          (0, a.vq)(l) &&
          !l.matches("html,body") &&
          !d(l, i.floating) &&
          Array.from(c).every((e) => !d(m, e))
        )
          return;
        if ((0, a.sb)(l) && z) {
          let t = (0, a.eu)(l),
            n = (0, a.L9)(l),
            r = /auto|scroll/,
            o = t || r.test(n.overflowX),
            i = t || r.test(n.overflowY),
            u = o && l.clientWidth > 0 && l.scrollWidth > l.clientWidth,
            s = i && l.clientHeight > 0 && l.scrollHeight > l.clientHeight,
            c = "rtl" === n.direction,
            f = s && (c ? e.offsetX <= l.offsetWidth - l.clientWidth : e.offsetX > l.clientWidth),
            d = u && e.offsetY > l.clientHeight;
          if (f || d) return;
        }
        let v = null == (t = u.current.floatingContext) ? void 0 : t.nodeId,
          b =
            k &&
            g(k.nodesRef.current, v).some((t) => {
              var n;
              return p(e, null == (n = t.context) ? void 0 : n.elements.floating);
            });
        if (p(e, i.floating) || p(e, i.domReference) || b) return;
        let w = k ? g(k.nodesRef.current, v) : [];
        if (w.length > 0) {
          let e = !0;
          if (
            (w.forEach((t) => {
              var n;
              if (
                null != (n = t.context) &&
                n.open &&
                !t.context.dataRef.current.__outsidePressBubbles
              ) {
                e = !1;
                return;
              }
            }),
            !e)
          )
            return;
        }
        o(!1, e, "outside-press");
      }),
      j = E((e) => {
        var t;
        let n = () => {
          var t;
          (N(e), null == (t = h(e)) || t.removeEventListener(f, n));
        };
        null == (t = h(e)) || t.addEventListener(f, n);
      });
    (r.useEffect(() => {
      if (!n || !l) return;
      ((u.current.__escapeKeyBubbles = T), (u.current.__outsidePressBubbles = R));
      let e = -1;
      function t(e) {
        o(!1, e, "ancestor-scroll");
      }
      function r() {
        (window.clearTimeout(e), (M.current = !0));
      }
      function c() {
        e = window.setTimeout(
          () => {
            M.current = !1;
          },
          5 * !!(0, a.Tc)(),
        );
      }
      let d = y(i.floating);
      (s &&
        (d.addEventListener("keydown", A ? P : D, A),
        d.addEventListener("compositionstart", r),
        d.addEventListener("compositionend", c)),
        S && d.addEventListener(f, C ? j : N, C));
      let h = [];
      return (
        b &&
          ((0, a.vq)(i.domReference) && (h = (0, a.v9)(i.domReference)),
          (0, a.vq)(i.floating) && (h = h.concat((0, a.v9)(i.floating))),
          !(0, a.vq)(i.reference) &&
            i.reference &&
            i.reference.contextElement &&
            (h = h.concat((0, a.v9)(i.reference.contextElement)))),
        (h = h.filter((e) => {
          var t;
          return e !== (null == (t = d.defaultView) ? void 0 : t.visualViewport);
        })).forEach((e) => {
          e.addEventListener("scroll", t, { passive: !0 });
        }),
        () => {
          (s &&
            (d.removeEventListener("keydown", A ? P : D, A),
            d.removeEventListener("compositionstart", r),
            d.removeEventListener("compositionend", c)),
            S && d.removeEventListener(f, C ? j : N, C),
            h.forEach((e) => {
              e.removeEventListener("scroll", t);
            }),
            window.clearTimeout(e));
        }
      );
    }, [u, i, s, S, f, n, o, b, l, T, R, D, A, P, N, C, j]),
      r.useEffect(() => {
        u.current.insideReactTree = !1;
      }, [u, S, f]));
    let L = r.useMemo(
        () => ({
          onKeyDown: D,
          ...(m && {
            [eR[v]]: (e) => {
              o(!1, e.nativeEvent, "reference-press");
            },
            ...("click" !== v && {
              onClick(e) {
                o(!1, e.nativeEvent, "reference-press");
              },
            }),
          }),
        }),
        [D, o, m, v],
      ),
      z = r.useMemo(
        () => ({
          onKeyDown: D,
          onMouseDown() {
            O.current = !0;
          },
          onMouseUp() {
            O.current = !0;
          },
          [eA[f]]: () => {
            u.current.insideReactTree = !0;
          },
        }),
        [D, f, u],
      );
    return r.useMemo(() => (l ? { reference: L, floating: z } : {}), [l, L, z]);
  }
  function eD(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
      n = (function (e) {
        let { open: t = !1, onOpenChange: n, elements: o } = e,
          a = F(),
          i = r.useRef({}),
          [u] = r.useState(() => W()),
          l = null != q(),
          [s, c] = r.useState(o.reference),
          f = E((e, t, r) => {
            ((i.current.openEvent = e ? t : void 0),
              u.emit("openchange", { open: e, event: t, reason: r, nested: l }),
              null == n || n(e, t, r));
          }),
          d = r.useMemo(() => ({ setPositionReference: c }), []),
          h = r.useMemo(
            () => ({
              reference: s || o.reference || null,
              floating: o.floating || null,
              domReference: o.reference,
            }),
            [s, o.reference, o.floating],
          );
        return r.useMemo(
          () => ({
            dataRef: i,
            open: t,
            onOpenChange: f,
            elements: h,
            events: u,
            floatingId: a,
            refs: d,
          }),
          [t, f, h, u, a, d],
        );
      })({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
      o = e.rootContext || n,
      i = o.elements,
      [u, l] = r.useState(null),
      [s, c] = r.useState(null),
      f = (null == i ? void 0 : i.domReference) || u,
      d = r.useRef(null),
      h = r.useContext(B);
    k(() => {
      f && (d.current = f);
    }, [f]);
    let p = (0, N.we)({ ...e, elements: { ...i, ...(s && { reference: s }) } }),
      y = r.useCallback(
        (e) => {
          let t = (0, a.vq)(e)
            ? {
                getBoundingClientRect: () => e.getBoundingClientRect(),
                getClientRects: () => e.getClientRects(),
                contextElement: e,
              }
            : e;
          (c(t), p.refs.setReference(t));
        },
        [p.refs],
      ),
      m = r.useCallback(
        (e) => {
          (((0, a.vq)(e) || null === e) && ((d.current = e), l(e)),
            ((0, a.vq)(p.refs.reference.current) ||
              null === p.refs.reference.current ||
              (null !== e && !(0, a.vq)(e))) &&
              p.refs.setReference(e));
        },
        [p.refs],
      ),
      v = r.useMemo(
        () => ({ ...p.refs, setReference: m, setPositionReference: y, domReference: d }),
        [p.refs, m, y],
      ),
      g = r.useMemo(() => ({ ...p.elements, domReference: f }), [p.elements, f]),
      b = r.useMemo(() => ({ ...p, ...o, refs: v, elements: g, nodeId: t }), [p, v, g, t, o]);
    return (
      k(() => {
        o.dataRef.current.floatingContext = b;
        let e = null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
        e && (e.context = b);
      }),
      r.useMemo(() => ({ ...p, context: b, refs: v, elements: g }), [p, v, g, b])
    );
  }
  function eP(e, t, n) {
    let r = new Map(),
      o = "item" === n,
      a = e;
    if (o && e) {
      let { [j]: t, [L]: n, ...r } = e;
      a = r;
    }
    return {
      ...("floating" === n && { tabIndex: -1, "data-floating-ui-focusable": "" }),
      ...a,
      ...t
        .map((t) => {
          let r = t ? t[n] : null;
          return "function" == typeof r ? (e ? r(e) : null) : r;
        })
        .concat(e)
        .reduce(
          (e, t) => (
            t &&
              Object.entries(t).forEach((t) => {
                let [n, a] = t;
                if (!(o && [j, L].includes(n)))
                  if (0 === n.indexOf("on")) {
                    if ((r.has(n) || r.set(n, []), "function" == typeof a)) {
                      var i;
                      (null == (i = r.get(n)) || i.push(a),
                        (e[n] = function () {
                          for (var e, t = arguments.length, o = Array(t), a = 0; a < t; a++)
                            o[a] = arguments[a];
                          return null == (e = r.get(n))
                            ? void 0
                            : e.map((e) => e(...o)).find((e) => void 0 !== e);
                        }));
                    }
                  } else e[n] = a;
              }),
            e
          ),
          {},
        ),
    };
  }
  function eN(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
      n = e.map((e) => (null == e ? void 0 : e.floating)),
      o = e.map((e) => (null == e ? void 0 : e.item)),
      a = r.useCallback((t) => eP(t, e, "reference"), t),
      i = r.useCallback((t) => eP(t, e, "floating"), n),
      u = r.useCallback((t) => eP(t, e, "item"), o);
    return r.useMemo(
      () => ({ getReferenceProps: a, getFloatingProps: i, getItemProps: u }),
      [a, i, u],
    );
  }
  let ej = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
  function eL(e, t) {
    return "function" == typeof e ? e(t) : e;
  }
  function ez(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: o, close: a, common: i, duration: u = 250 } = t,
      l = e.placement,
      s = l.split("-")[0],
      c = r.useMemo(() => ({ side: s, placement: l }), [s, l]),
      f = "number" == typeof u,
      d = (f ? u : u.open) || 0,
      h = (f ? u : u.close) || 0,
      [p, y] = r.useState(() => ({ ...eL(i, c), ...eL(n, c) })),
      { isMounted: m, status: v } = (function (e, t) {
        void 0 === t && (t = {});
        let {
            open: n,
            elements: { floating: o },
          } = e,
          { duration: a = 250 } = t,
          i = ("number" == typeof a ? a : a.close) || 0,
          [u, l] = r.useState("unmounted"),
          s = (function (e, t) {
            let [n, o] = r.useState(e);
            return (
              e && !n && o(!0),
              r.useEffect(() => {
                if (!e && n) {
                  let e = setTimeout(() => o(!1), t);
                  return () => clearTimeout(e);
                }
              }, [e, n, t]),
              n
            );
          })(n, i);
        return (
          s || "close" !== u || l("unmounted"),
          k(() => {
            if (o) {
              if (n) {
                l("initial");
                let e = requestAnimationFrame(() => {
                  P.flushSync(() => {
                    l("open");
                  });
                });
                return () => {
                  cancelAnimationFrame(e);
                };
              }
              l("close");
            }
          }, [n, o]),
          { isMounted: s, status: u }
        );
      })(e, { duration: u }),
      g = x(n),
      b = x(o),
      w = x(a),
      _ = x(i);
    return (
      k(() => {
        let e = eL(g.current, c),
          t = eL(w.current, c),
          n = eL(_.current, c),
          r = eL(b.current, c) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
        if (
          ("initial" === v && y((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
          "open" === v &&
            y({
              transitionProperty: Object.keys(r).map(ej).join(","),
              transitionDuration: d + "ms",
              ...n,
              ...r,
            }),
          "close" === v)
        ) {
          let r = t || e;
          y({
            transitionProperty: Object.keys(r).map(ej).join(","),
            transitionDuration: h + "ms",
            ...n,
            ...r,
          });
        }
      }, [h, w, g, b, _, d, v, c]),
      { isMounted: m, styles: p }
    );
  }
  function eU(e, t) {
    let [n, r] = e,
      o = !1,
      a = t.length;
    for (let e = 0, i = a - 1; e < a; i = e++) {
      let [a, u] = t[e] || [0, 0],
        [l, s] = t[i] || [0, 0];
      u >= r != s >= r && n <= ((l - a) * (r - u)) / (s - u) + a && (o = !o);
    }
    return o;
  }
  function eY(e) {
    void 0 === e && (e = {});
    let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
      o = { current: -1 },
      i = !1,
      u = null,
      l = null,
      s = "u" > typeof performance ? performance.now() : 0,
      c = (e) => {
        let { x: n, y: c, placement: f, elements: d, onClose: h, nodeId: p, tree: y } = e;
        return function (e) {
          function m() {
            (Q(o), h());
          }
          if ((Q(o), !d.domReference || !d.floating || null == f || null == n || null == c)) return;
          let { clientX: v, clientY: g } = e,
            b = [v, g],
            w = "composedPath" in e ? e.composedPath()[0] : e.target,
            _ = "mouseleave" === e.type,
            k = er(d.floating, w),
            x = er(d.domReference, w),
            S = d.domReference.getBoundingClientRect(),
            E = d.floating.getBoundingClientRect(),
            O = f.split("-")[0],
            T = n > E.right - E.width / 2,
            R = c > E.bottom - E.height / 2,
            A = b[0] >= S.x && b[0] <= S.x + S.width && b[1] >= S.y && b[1] <= S.y + S.height,
            C = E.width > S.width,
            M = E.height > S.height,
            D = (C ? S : E).left,
            P = (C ? S : E).right,
            N = (M ? S : E).top,
            j = (M ? S : E).bottom;
          if (k && ((i = !0), !_)) return;
          if ((x && (i = !1), x && !_)) {
            i = !0;
            return;
          }
          if (
            (_ && (0, a.vq)(e.relatedTarget) && er(d.floating, e.relatedTarget)) ||
            (y &&
              (function e(t, n, r) {
                return (
                  void 0 === r && (r = !0),
                  t
                    .filter((e) => {
                      var t;
                      return (
                        e.parentId === n && (!r || (null == (t = e.context) ? void 0 : t.open))
                      );
                    })
                    .flatMap((n) => [n, ...e(t, n.id, r)])
                );
              })(y.nodesRef.current, p).length)
          )
            return;
          if (
            ("top" === O && c >= S.bottom - 1) ||
            ("bottom" === O && c <= S.top + 1) ||
            ("left" === O && n >= S.right - 1) ||
            ("right" === O && n <= S.left + 1)
          )
            return m();
          let L = [];
          switch (O) {
            case "top":
              L = [
                [D, S.top + 1],
                [D, E.bottom - 1],
                [P, E.bottom - 1],
                [P, S.top + 1],
              ];
              break;
            case "bottom":
              L = [
                [D, E.top + 1],
                [D, S.bottom - 1],
                [P, S.bottom - 1],
                [P, E.top + 1],
              ];
              break;
            case "left":
              L = [
                [E.right - 1, j],
                [E.right - 1, N],
                [S.left + 1, N],
                [S.left + 1, j],
              ];
              break;
            case "right":
              L = [
                [S.right - 1, j],
                [S.right - 1, N],
                [E.left + 1, N],
                [E.left + 1, j],
              ];
          }
          if (!eU([v, g], L)) {
            if (i && !A) return m();
            if (!_ && r) {
              let t = (function (e, t) {
                let n = performance.now(),
                  r = n - s;
                if (null === u || null === l || 0 === r) return ((u = e), (l = t), (s = n), null);
                let o = e - u,
                  a = t - l,
                  i = Math.sqrt(o * o + a * a);
                return ((u = e), (l = t), (s = n), i / r);
              })(e.clientX, e.clientY);
              if (null !== t && t < 0.1) return m();
            }
            eU(
              [v, g],
              (function (e) {
                let [n, r] = e;
                switch (O) {
                  case "top": {
                    let e = [
                      [E.left, T || C ? E.bottom - t : E.top],
                      [E.right, T ? (C ? E.bottom - t : E.top) : E.bottom - t],
                    ];
                    return [
                      [C ? n + t / 2 : T ? n + 4 * t : n - 4 * t, r + t + 1],
                      [C ? n - t / 2 : T ? n + 4 * t : n - 4 * t, r + t + 1],
                      ...e,
                    ];
                  }
                  case "bottom": {
                    let e = [
                      [E.left, T || C ? E.top + t : E.bottom],
                      [E.right, T ? (C ? E.top + t : E.bottom) : E.top + t],
                    ];
                    return [
                      [C ? n + t / 2 : T ? n + 4 * t : n - 4 * t, r - t],
                      [C ? n - t / 2 : T ? n + 4 * t : n - 4 * t, r - t],
                      ...e,
                    ];
                  }
                  case "left":
                    return [
                      [R || M ? E.right - t : E.left, E.top],
                      [R ? (M ? E.right - t : E.left) : E.right - t, E.bottom],
                      [n + t + 1, M ? r + t / 2 : R ? r + 4 * t : r - 4 * t],
                      [n + t + 1, M ? r - t / 2 : R ? r + 4 * t : r - 4 * t],
                    ];
                  case "right": {
                    let e = [
                      [R || M ? E.left + t : E.right, E.top],
                      [R ? (M ? E.left + t : E.right) : E.left + t, E.bottom],
                    ];
                    return [
                      [n - t, M ? r + t / 2 : R ? r + 4 * t : r - 4 * t],
                      [n - t, M ? r - t / 2 : R ? r + 4 * t : r - 4 * t],
                      ...e,
                    ];
                  }
                }
              })([n, c]),
            )
              ? !i && r && (o.current = window.setTimeout(m, 40))
              : m();
          }
        };
      };
    return ((c.__options = { blockPointerEvents: n }), c);
  }
}
