/* Recovered shipped factory. Module 262427.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 19469..20320
 * Raw property SHA-256: 0b3ce5b966e1d3d1c249da813c4919e097195478931696efd8b13297b75e9e46
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => u, J: () => c });
  var l = n(477900);
  n(582128);
  var i = n(503698),
    r = n.n(i),
    a = n(278416),
    s = n(834730),
    o = n(925665);
  function u(e) {
    let {
      className: t,
      gradientColor: n = "default",
      children: i,
      Icon: s = a.TagIcon,
      iconSize: u = "xs",
      customGraphic: c,
    } = e;
    return (0, l.jsxs)("div", {
      className: r()(
        o.jt,
        o.qw,
        {
          [o.p3]: "nitro-pink" === n,
          [o.U1]: "green" === n,
          [o.Uq]: "collectibles" === n,
          [o.y7]: "promotion" === n,
        },
        t,
      ),
      children: [
        null != c
          ? (0, l.jsx)("div", { className: o.B4, children: c })
          : null != s
            ? (0, l.jsx)(s, { size: u, color: "currentColor" })
            : null,
        i,
      ],
    });
  }
  function c(e) {
    let {
      text: t,
      gradientColor: n,
      Icon: i = a.TagIcon,
      iconSize: c,
      customGraphic: d,
      className: p,
      textVariant: m = "text-sm/medium",
      textColor: h = "currentColor",
    } = e;
    return (0, l.jsx)(u, {
      className: r()(o.Cu, p),
      gradientColor: n,
      ...(null != d ? { customGraphic: d } : { Icon: i, iconSize: c }),
      children: (0, l.jsx)(s.E, { variant: m, color: h, className: o.Ct, children: t }),
    });
  }
}
