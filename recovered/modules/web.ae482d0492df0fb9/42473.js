/* Recovered shipped factory. Module 42473.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6369214..6371226
 * Raw property SHA-256: 07212d27ee1ded3813b67a328dfdddec6cdc7206ff0fec8ccaa2becfe4d386a9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => E });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(84571),
    l = n(862482),
    o = n(866665),
    d = n(900002),
    c = n(573435),
    u = n(484555);
  function _(e) {
    let {
        children: t,
        onContextMenu: n,
        onClick: r,
        onMouseDown: s,
        disabled: o,
        icon: d,
        iconForeground: _,
        innerClassName: E,
        className: A,
        redGlow: h,
        onMouseEnter: f,
        onMouseLeave: I,
        "aria-label": p,
        "aria-checked": T,
        role: m,
        plated: g,
        ref: S,
      } = e,
      N =
        "function" == typeof d
          ? (0, i.jsx)(d, {
              width: 20,
              height: 20,
              size: "custom",
              colorClass: _ ?? "",
              color: "currentColor",
            })
          : d;
    return (0, i.jsxs)(l.$n, {
      "data-migration-pending": !0,
      "aria-label": p,
      buttonRef: S,
      look: l.$n.Looks.BLANK,
      size: l.$n.Sizes.NONE,
      disabled: o,
      innerClassName: E,
      wrapperClassName: a()(u.x6, A),
      className: a()(u.x6, A, { [u.Xr]: h, [u.r9]: o, [u.Sn]: !o, [u.ZQ]: g, [u.OH]: h && g }),
      onClick: (e) => {
        null != r && r(e);
      },
      onMouseDown: s,
      onMouseEnter: f,
      onMouseLeave: I,
      onContextMenu: n,
      role: m,
      "aria-checked": T,
      focusProps: { offset: { left: -1, top: -1, right: 1, bottom: 1 } },
      children: [
        null != t
          ? (0, i.jsx)(c.Ay, { width: 20, height: 20, mask: c.Ay.Masks.PANEL_BUTTON, children: N })
          : N,
        t,
      ],
    });
  }
  let E = function (e) {
    if (null == e.tooltipType) {
      let {
          tooltipText: t,
          tooltipForceOpen: n,
          tooltipShouldShow: r,
          tooltipPositionKey: a,
          "aria-label": l,
          ...d
        } = e,
        c = (0, s.O)(t),
        u = l ?? c;
      return (0, i.jsx)(o.m, {
        text: t,
        forceOpen: n,
        shouldShow: r,
        positionKey: a,
        ariaHidden: u === c,
        children: (0, i.jsx)(_, { ...d, "aria-label": u }),
      });
    }
    {
      let {
        tooltipText: t,
        tooltipForceOpen: n,
        tooltipShouldShow: r,
        tooltipPositionKey: a,
        onClick: s,
        onMouseEnter: l,
        onMouseLeave: o,
        onContextMenu: c,
        onFocus: E,
        onBlur: A,
        "aria-label": h,
        ...f
      } = e;
      return (0, i.jsx)(d.ST, {
        "data-migration-pending": !0,
        tooltipClassName: u.RF,
        tooltipContentClassName: u.In,
        "aria-label": h,
        forceOpen: n,
        shouldShow: r,
        color: d.oM.GREEN,
        positionKeyStemOverride: a,
        text: t,
        children: (e) => {
          let {
            onClick: t,
            onMouseEnter: n,
            onMouseLeave: r,
            onContextMenu: a,
            onFocus: d,
            onBlur: u,
            "aria-label": h,
          } = e;
          return (0, i.jsx)(_, {
            onClick: (e) => {
              (t?.(), s?.(e));
            },
            onMouseEnter: () => {
              (n?.(), l?.());
            },
            onMouseLeave: () => {
              (r?.(), o?.());
            },
            onContextMenu: (e) => {
              (a?.(), c?.(e));
            },
            onFocus: () => {
              (d?.(), E?.());
            },
            onBlur: () => {
              (u?.(), A?.());
            },
            "aria-label": h,
            ...f,
          });
        },
      });
    }
  };
}
