/* Recovered shipped factory. Module 458265.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 660430..663285
 * Raw property SHA-256: ff2f9203e7146fff3e7aa5057b0739e4e6f3c6a605f6c10f208863c1bba3da65
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    BN: () => h,
    ER: () => p,
    Ej: () => m,
    RK: () => v,
    UU: () => y,
    cY: () => d,
    jD: () => g,
    we: () => f,
  });
  var r = n(38339),
    o = n(582128),
    a = n(333007),
    i = "u" > typeof document ? o.useLayoutEffect : function () {};
  function u(e, t) {
    let n, r, o;
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    if (e && t && "object" == typeof e) {
      if (Array.isArray(e)) {
        if ((n = e.length) !== t.length) return !1;
        for (r = n; 0 != r--;) if (!u(e[r], t[r])) return !1;
        return !0;
      }
      if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
      for (r = n; 0 != r--;) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
      for (r = n; 0 != r--;) {
        let n = o[r];
        if (("_owner" !== n || !e.$$typeof) && !u(e[n], t[n])) return !1;
      }
      return !0;
    }
    return e != e && t != t;
  }
  function l(e) {
    return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
  }
  function s(e, t) {
    let n = l(e);
    return Math.round(t * n) / n;
  }
  function c(e) {
    let t = o.useRef(e);
    return (
      i(() => {
        t.current = e;
      }),
      t
    );
  }
  function f(e) {
    void 0 === e && (e = {});
    let {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: f = [],
        platform: d,
        elements: { reference: h, floating: p } = {},
        transform: y = !0,
        whileElementsMounted: m,
        open: v,
      } = e,
      [g, b] = o.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1,
      }),
      [w, _] = o.useState(f);
    u(w, f) || _(f);
    let [k, x] = o.useState(null),
      [S, E] = o.useState(null),
      O = o.useCallback((e) => {
        e !== C.current && ((C.current = e), x(e));
      }, []),
      T = o.useCallback((e) => {
        e !== M.current && ((M.current = e), E(e));
      }, []),
      R = h || k,
      A = p || S,
      C = o.useRef(null),
      M = o.useRef(null),
      D = o.useRef(g),
      P = null != m,
      N = c(m),
      j = c(d),
      L = c(v),
      z = o.useCallback(() => {
        if (!C.current || !M.current) return;
        let e = { placement: t, strategy: n, middleware: w };
        (j.current && (e.platform = j.current),
          (0, r.rD)(C.current, M.current, e).then((e) => {
            let t = { ...e, isPositioned: !1 !== L.current };
            U.current &&
              !u(D.current, t) &&
              ((D.current = t),
              a.flushSync(() => {
                b(t);
              }));
          }));
      }, [w, t, n, j, L]);
    i(() => {
      !1 === v &&
        D.current.isPositioned &&
        ((D.current.isPositioned = !1), b((e) => ({ ...e, isPositioned: !1 })));
    }, [v]);
    let U = o.useRef(!1);
    (i(
      () => (
        (U.current = !0),
        () => {
          U.current = !1;
        }
      ),
      [],
    ),
      i(() => {
        if ((R && (C.current = R), A && (M.current = A), R && A)) {
          if (N.current) return N.current(R, A, z);
          z();
        }
      }, [R, A, z, N, P]));
    let Y = o.useMemo(
        () => ({ reference: C, floating: M, setReference: O, setFloating: T }),
        [O, T],
      ),
      I = o.useMemo(() => ({ reference: R, floating: A }), [R, A]),
      F = o.useMemo(() => {
        let e = { position: n, left: 0, top: 0 };
        if (!I.floating) return e;
        let t = s(I.floating, g.x),
          r = s(I.floating, g.y);
        return y
          ? {
              ...e,
              transform: "translate(" + t + "px, " + r + "px)",
              ...(l(I.floating) >= 1.5 && { willChange: "transform" }),
            }
          : { position: n, left: t, top: r };
      }, [n, y, I.floating, g.x, g.y]);
    return o.useMemo(
      () => ({ ...g, update: z, refs: Y, elements: I, floatingStyles: F }),
      [g, z, Y, I, F],
    );
  }
  let d = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
    h = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
    p = (e, t) => ({ ...(0, r.ER)(e), options: [e, t] }),
    y = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
    m = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] }),
    v = (e, t) => ({ ...(0, r.RK)(e), options: [e, t] }),
    g = (e, t) => ({ ...(0, r.jD)(e), options: [e, t] });
}
