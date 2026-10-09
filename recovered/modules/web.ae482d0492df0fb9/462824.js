/* Recovered shipped factory. Module 462824.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10374099..10374698
 * Raw property SHA-256: cfed4a5ca65a0d24970cf7d7072eb37c4b90a0ef2a13539b51500e71a64bb2f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => c });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(202091),
    l = n(866323),
    o = n(150591),
    d = n(943320);
  function c(e) {
    let {
      variant: t = "default",
      animationVariant: n = "default",
      onClick: r,
      isVisible: c,
      disabled: u = !1,
      disablePointerEvents: _ = !1,
    } = e;
    return (0, l.p)(
      c,
      {
        keys: (e) => (e ? "scrim" : "empty"),
        config: o.hP,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      },
      "instant" === n ? "animate-never" : "animate-always",
    )((e, n) =>
      n
        ? (0, i.jsx)(s.animated.div, {
            role: "none",
            className: a()(d.f5, {
              [d.Et]: "lightbox" === t,
              [d.Ge]: "experimental_blur" === t,
              [d.RS]: _,
            }),
            style: e,
            onClick: u ? void 0 : r,
          })
        : null,
    );
  }
}
