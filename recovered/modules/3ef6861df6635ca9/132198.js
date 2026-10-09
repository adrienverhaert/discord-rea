/* Recovered shipped factory. Module 132198.
 * Source: recovered/web/assets/3ef6861df6635ca9.js
 * UTF-16 property offsets: 21365..22371
 * Raw property SHA-256: 2c72803a41384aaecea3877d88252444bed02d0fd44a0c315f6284859be609c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { _: () => p, m: () => h });
  var l = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(149282),
    o = n(305003),
    c = n(752079),
    d = n(521e3),
    u = n(758836),
    m = n(121615),
    x = n(455156);
  function f(e) {
    let { alt: t, className: n, artboard: r } = e,
      o = a.useContext(d.vf);
    return (0, l.jsx)("div", {
      role: "img",
      "aria-label": t,
      className: s()(m.eV, n),
      children:
        "STACKED COINS" === r
          ? (0, l.jsx)(i.s, { artboard: "STACKED COINS", eventTargetRef: o ?? void 0 })
          : (0, l.jsx)(i.s, { artboard: "SINGLE COIN", eventTargetRef: o ?? void 0 }),
    });
  }
  let h = {
    [u.Dp.FRACTIONAL_PREMIUM]: {
      render: (e) => {
        let { alt: t, className: n } = e;
        return (0, l.jsx)(f, { alt: t, className: n, artboard: "STACKED COINS" });
      },
    },
    [u.Dp.FRACTIONAL_PREMIUM_1_DAY]: {
      render: (e) => {
        let { alt: t, className: n } = e;
        return (0, l.jsx)(f, { alt: t, className: n, artboard: "SINGLE COIN" });
      },
    },
    [u.Dp.ORB_PROFILE_BADGE]: {
      render: (e) => {
        let { animationState: t = "on", className: n } = e;
        return (0, l.jsx)(c.A, { animationState: t, className: s()(m.oy, n) });
      },
    },
  };
  function p() {
    return {
      id: o.A.ORB_PROFILE_BADGE,
      icon: o.A.ORB_PROFILE_BADGE,
      iconSrc: x.A,
      description: "",
      isPreviewMode: !0,
    };
  }
}
