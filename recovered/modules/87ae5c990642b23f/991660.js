/* Recovered shipped factory. Module 991660.
 * Source: recovered/web/assets/87ae5c990642b23f.js
 * UTF-16 property offsets: 844..1363
 * Raw property SHA-256: b2a2f62dedc476568c129f3006ff01473f470ed0f89b0e16000d4af473684cc6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (l, e, n) {
  n.d(e, { A: () => i });
  var s = n(477900),
    r = n(582128),
    a = n(503698),
    t = n.n(a),
    u = n(689175),
    d = n(741508);
  function i(l) {
    let { children: e, gradientClassName: n, onScroll: a, ...i } = l,
      c = r.useRef(null),
      [o, h] = r.useState(!0),
      _ = r.useCallback(() => {
        c.current?.isScrolledToBottom() === !0 ? h(!1) : h(!0);
      }, [c]),
      p = r.useCallback(
        (l) => {
          (_(), null != a && a(l));
        },
        [_, a],
      );
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(u.Ch, {
          fade: !0,
          ...i,
          ref: (l) => {
            null != l && ((c.current = l), _());
          },
          onScroll: p,
          children: e,
        }),
        (0, s.jsx)("div", { className: t()(d.D, n), "data-shown": o }),
      ],
    });
  }
}
