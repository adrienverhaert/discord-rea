/* Recovered shipped factory. Module 33969.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8023390..8024260
 * Raw property SHA-256: 7cdc2cc251ee3844bcb536c6ac006bf106af438f1407aaaa42e53310e6738794
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _, Y: () => u });
  var i = n(477900),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(866665),
    o = n(775602),
    d = n(101555),
    c = n(969603);
  function u(e) {
    let {
        className: t,
        ref: n,
        tooltipText: r,
        onClick: u,
        shouldDelayTooltip: _,
        disabled: E,
        "aria-label": A,
        "aria-haspopup": h,
        "aria-expanded": f,
        "aria-controls": I,
        icon: p,
        variant: T,
        onMouseDown: m,
        onMouseEnter: g,
        onKeyDown: S,
      } = e,
      N = (0, s.bG)([o.Ay], () =>
        !_ || o.Ay.useReducedMotion || o.Ay.keyboardModeEnabled ? 0 : 300,
      );
    return (0, i.jsx)(l.m, {
      asContainer: !0,
      text: r,
      delay: N,
      ariaHidden: !0,
      children: (0, i.jsx)(d.$n, {
        ref: n,
        className: a()(c.button, c[T], t),
        disabled: E,
        "aria-label": A ?? r,
        "aria-haspopup": h,
        "aria-expanded": f,
        "aria-controls": I,
        onClick: u,
        onMouseDown: m,
        onMouseEnter: g,
        onKeyDown: S,
        children: (0, i.jsx)(p, { size: "xs", colorClass: c.icon }),
      }),
    });
  }
  function _(e) {
    let { className: t, children: n } = e;
    return (0, i.jsx)(d.Ay, { className: a()(c.bar, t), children: n });
  }
}
