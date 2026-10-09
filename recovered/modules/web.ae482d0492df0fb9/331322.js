/* Recovered shipped factory. Module 331322.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10445902..10446570
 * Raw property SHA-256: ba29630d36e1a8ef79e17ab5579c02f5a9826432d89220f0a9bb64b4ec91ea28
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { B: () => d });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(359689),
    l = n.n(s),
    o = n(32690);
  function d(e) {
    var t;
    let {
      as: n = "div",
      gap: r = 8,
      direction: s = "vertical",
      align: d = "stretch",
      justify: u = "start",
      wrap: _ = !1,
      padding: E = 0,
      fullWidth: A = !0,
      style: h,
      className: f,
      children: I,
      ref: p,
      ...T
    } = e;
    return (0, i.jsx)(n, {
      ref: p,
      "data-align": d,
      "data-justify": u,
      "data-direction": s,
      "data-wrap": _,
      "data-full-width": A,
      className: a()(o.t, f),
      style: {
        ...h,
        gap: c(r),
        ...("number" == typeof (t = E) || "string" == typeof t
          ? { padding: c(t) }
          : Object.entries(t).reduce((e, t) => {
              let [n, i] = t;
              return ((e[`padding${l()(n)}`] = c(i)), e);
            }, {})),
      },
      ...T,
      children: I,
    });
  }
  function c(e) {
    return `var(--space-${e})`;
  }
}
