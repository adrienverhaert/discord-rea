/* Recovered shipped factory. Module 364522.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10400818..10401606
 * Raw property SHA-256: 0f7fb141aa2e1541c4b66aeadd209e73cf549c70038cf8874bc442e9300d94e3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { d_: () => A, Ip: () => _, Ar: () => E });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(330573),
    o = n(518898),
    d = n(751591),
    c = n(6095);
  function u(e, t) {
    return function (n) {
      let {
          children: a,
          className: u,
          dir: _ = "ltr",
          orientation: E = "vertical",
          scrollbarGutter: A = "stable",
          fade: h = !1,
          disableFocusRingScope: f = !1,
          onScroll: I,
          style: p,
          ref: T,
          ...m
        } = n,
        g = r.useRef(null),
        S = (0, o.A)({ scrollbarGutter: A, orientation: E, className: u, scrollerRef: g }),
        N = !1 === A || "vertical" !== E ? void 0 : "stable" === A ? c.x2 : c.GV;
      return (0, i.jsx)("div", {
        ref: (e) => {
          ("function" == typeof T ? T(e) : null != T && (T.current = e), (g.current = e));
        },
        className: s()(u, N, { [e]: !0, [t]: h }),
        style: (0, d.Ay)(p, E),
        dir: _,
        ...m,
        children: (0, i.jsxs)(l.t, { disableFocusRingScope: f, containerRef: g, children: [a, S] }),
      });
    };
  }
  let _ = u(c.yL, c.Rv),
    E = u(c.qZ, c.Rv),
    A = u(c.dv, c.Rv);
}
