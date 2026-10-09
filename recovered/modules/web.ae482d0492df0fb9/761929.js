/* Recovered shipped factory. Module 761929.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2251067..2252608
 * Raw property SHA-256: fa1e49a8663438beb748dc6292888acc088837fcec95beb0531673876c0eccec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o, R: () => s });
  var i,
    r = n(582128),
    a = n(435558),
    s =
      (((i = {})[(i.VERTICAL_TOP = 0)] = "VERTICAL_TOP"),
      (i[(i.VERTICAL_BOTTOM = 1)] = "VERTICAL_BOTTOM"),
      (i[(i.HORIZONTAL_LEFT = 2)] = "HORIZONTAL_LEFT"),
      (i[(i.HORIZONTAL_RIGHT = 3)] = "HORIZONTAL_RIGHT"),
      i);
  function l(e) {
    return +(2 === e || 3 === e);
  }
  let o = function (e) {
    let {
        initialElementDimension: t,
        resizableDomNodeRef: n,
        maxDimension: i,
        minDimension: s,
        onElementResize: o,
        onElementResizeStart: d,
        onElementResizeEnd: c,
        throttleDuration: u = 300,
        orientation: _,
        usePointerEvents: E = !1,
        getClampedValue: A = a.clamp,
        onApplyDimension: h,
      } = e,
      [f, I] = r.useState(!1),
      p = r.useRef(0),
      T = r.useRef(!1),
      m = r.useRef(null == t ? 0 : t);
    return (
      r.useLayoutEffect(() => {
        if (!f || null == n.current) return;
        function e(e) {
          let t = 1 === l(_) ? e.screenX : e.screenY,
            n = 0 === _ || 2 === _,
            i = (t - p.current) * (n ? -1 : 1);
          return m.current + i;
        }
        function t(e) {
          return A(e, s ?? 0, i ?? e);
        }
        let r = null != o ? (0, a.throttle)(o, u) : null,
          g = 1 === l(_) ? "width" : "height",
          S =
            h ??
            ((e) => {
              null != n.current && (n.current.style[g] = `${e}px`);
            });
        function N(i) {
          if (null == n.current) return null;
          let a = e(i),
            s = t(a);
          (S(s), T.current || ((T.current = !0), d?.(s)), r?.(s, a));
        }
        function C(n) {
          I(!1);
          let i = e(n),
            r = t(i);
          (S(r), o?.(r, i), c?.(r), (T.current = !1));
        }
        let O = E ? "pointerup" : "mouseup",
          R = E ? "pointermove" : "mousemove",
          L = n.current.ownerDocument;
        return (
          L.addEventListener(O, C),
          L.addEventListener(R, N),
          () => {
            (L.removeEventListener(O, C), L.removeEventListener(R, N), r?.cancel());
          }
        );
      }, [f, o, s, i, _, n, u, c, E, A, d, h]),
      r.useCallback(
        (e) => {
          let t = 1 === l(_);
          (null != n.current && (m.current = t ? n.current.offsetWidth : n.current.offsetHeight),
            (p.current = t ? e.screenX : e.screenY),
            I(!0));
        },
        [_, n],
      )
    );
  };
}
