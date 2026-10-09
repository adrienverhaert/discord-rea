/* Recovered shipped factory. Module 710778.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10479690..10480962
 * Raw property SHA-256: 7ec49381c1fbaa198d2e4104515f70b6cf1ad674869bcb7195d85e6f47c737af
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { EE: () => o, Xj: () => d, cZ: () => r, cy: () => s, iO: () => a, l8: () => l }),
    n(321073));
  var i = n(582128);
  function r(e, t) {
    if (null != e) {
      if ("function" == typeof e) return void e(t);
      "object" == typeof e && "current" in e && (e.current = t);
    }
  }
  function a(e, t) {
    let n = (e ?? "").trim(),
      i = (t ?? "").trim();
    if ("" === n) return i;
    if ("" === i) return n;
    let r = ` ${n} `,
      a = i.split(/\s+/).filter(Boolean),
      s = [];
    for (let e of a) {
      let t = ` ${e} `;
      r.includes(t) || s.push(e);
    }
    return 0 === s.length ? n : `${n} ${s.join(" ")}`.trim();
  }
  function s(e, t) {
    if (null != e || null != t)
      return function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        ("function" == typeof e && e(...i), "function" == typeof t && t(...i));
      };
  }
  function l(e) {
    switch (e) {
      case "top":
      default:
        return "bottom";
      case "bottom":
        return "top";
      case "left":
        return "right";
      case "right":
        return "left";
    }
  }
  function o(e) {
    let {
      tag: t,
      className: n,
      tabIndex: r,
      children: a,
      triggerHandlers: s,
      describedById: l,
      triggerRef: o,
    } = e;
    return i.createElement(
      t,
      {
        ref: o,
        className: n,
        tabIndex: r,
        onMouseEnter: s.onMouseEnter,
        onMouseLeave: s.onMouseLeave,
        onFocus: s.onFocus,
        onBlur: s.onBlur,
        onContextMenu: s.onContextMenu,
        onClick: s.onClick,
        ...(null != l && "" !== l ? { "aria-describedby": l } : {}),
      },
      a,
    );
  }
  function d(e) {
    if (null == e) return "";
    if ("string" == typeof e) return e;
    try {
      return JSON.stringify(e);
    } catch {
      return String(e);
    }
  }
}
