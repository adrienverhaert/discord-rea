/* Recovered shipped factory. Module 22869.
 * Source: recovered/web/assets/8e4cec6f22556754.js
 * UTF-16 property offsets: 874..1479
 * Raw property SHA-256: 1a9445e3ee691c30f9daf424b962f596b51757dac80097487bcd684b8005d0b1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => d });
  var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(834730),
    o = n(73392),
    u = n(291594),
    c = n(959);
  function d(e) {
    let {
        user: t,
        text: n,
        channel: a,
        textClassName: d,
        onPopoutClosed: m,
        enableDisplayNameStyles: h = !1,
      } = e,
      p = r.useMemo(() => [t], [t]),
      x = r.useRef(null),
      f = (0, o.a)({ displayNameStyles: t?.displayNameStyles });
    return (0, l.jsx)(c.A, {
      targetElementRef: x,
      participants: p,
      channel: a,
      onPopoutClosed: m,
      children: (e) =>
        (0, l.jsx)(u.A, {
          ...e,
          tag: "span",
          children: (0, l.jsx)(s.E, {
            ref: x,
            className: h ? i()(d, f) : d,
            variant: "text-sm/semibold",
            color: "text-strong",
            lineClamp: 1,
            scaleFontToUserSetting: !0,
            children: n,
          }),
        }),
    });
  }
}
