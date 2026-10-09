/* Recovered shipped factory. Module 890856.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9902427..9903260
 * Raw property SHA-256: 9a1cb7b56b841a4261e323fa4e1e4a76f8635a1df58bd32e0347daca2e594877
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { s: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(939249),
    s = n(133480);
  let l = (e) => {
    let {
        tag: t = "div",
        children: n,
        className: l,
        style: o,
        focusProps: d,
        onClick: c,
        onMouseEnter: u,
        onDoubleClick: _,
        onContextMenu: E,
        onKeyDown: A,
        onFocus: h,
        onBlur: f,
        onMouseOver: I,
        onMouseDown: p,
        onMouseLeave: T,
        buttonProps: m,
        "aria-label": g,
        "aria-describedby": S,
        "aria-expanded": N,
        "data-list-item-id": C,
        ref: O,
        buttonRef: R,
      } = e,
      L = r.useRef(null),
      y = O ?? L;
    return (0, i.jsxs)(t, {
      ref: y,
      className: l,
      style: o,
      onClick: c,
      onMouseEnter: u,
      onMouseOver: I,
      onMouseLeave: T,
      onDoubleClick: _,
      onMouseDown: p,
      onContextMenu: E,
      children: [
        (0, i.jsx)(a.D, {
          ...m,
          innerRef: R,
          focusProps: { ringTarget: y, ...d },
          className: s.K,
          "aria-label": g,
          "aria-describedby": S,
          "aria-expanded": N,
          "data-list-item-id": C,
          onClick: (e) => {
            (e.stopPropagation(), c?.(e));
          },
          onKeyDown: A,
          onFocus: h,
          onBlur: f,
          onMouseDown: p,
        }),
        n,
      ],
    });
  };
}
