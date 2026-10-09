/* Recovered shipped factory. Module 200041.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2716735..2717720
 * Raw property SHA-256: 49048fdd76c6840f2db39273c087e7844b3f64cf536b384cdbc58a9ee9508d4d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(683063);
  n(851883);
  var d = n(607013);
  function c(e) {
    let {
        text: t,
        tooltipText: n,
        textVariant: a = "text-xs/medium",
        textClassName: c,
        "aria-label": u,
        icon: _,
        canTruncate: E = !0,
        hideTooltip: A = !1,
        hideText: h = !1,
      } = e,
      f = r.useRef(null),
      [I, p] = r.useState(!1),
      T = { variant: a, color: "none", className: s()(E && d.ps, c) },
      m = null != t && null == n && E,
      g = !A && (null != n || m || h),
      S = n ?? t ?? "",
      N = a?.startsWith("text-sm") ? d.WV : d.Dk,
      C = r.useCallback(() => {
        if (m) {
          let { current: e } = f;
          p((null != e && e.offsetWidth < e.scrollWidth) || h);
        } else p(!0);
      }, [m, h]),
      O = r.useCallback(() => {
        p(!1);
      }, []);
    return null == _ && h
      ? null
      : g
        ? (0, i.jsx)(o.u, {
            body: S,
            asset: _,
            assetSize: 16,
            delay: 150,
            shouldShow: I,
            asContainer: !0,
            children: (0, i.jsxs)("div", {
              className: s()(d.kL, d.O1, N),
              "aria-label": u,
              onMouseEnter: C,
              onMouseLeave: O,
              children: [_, !h && (0, i.jsx)(l.E, { ref: f, ...T, children: t })],
            }),
          })
        : (0, i.jsxs)("div", {
            className: s()(d.kL, d.O1, N),
            children: [_, !h && (0, i.jsx)(l.E, { ...T, children: t })],
          });
  }
}
