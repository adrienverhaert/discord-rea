/* Recovered shipped factory. Module 270003.
 * Source: recovered/web/assets/dfaad01dff1bbcd9.js
 * UTF-16 property offsets: 95..793
 * Raw property SHA-256: f30f125ac83404d9d4a836f3c356e1b8e2892151f4d989ad1017c9453ba6d99b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { n: () => x });
  var l = a(477900),
    s = a(582128),
    n = a(503698),
    c = a.n(n),
    i = a(508770),
    r = a(331322),
    d = a(834730),
    u = a(64584),
    o = a(735693);
  function x(e) {
    let { children: t, label: a, description: n, badge: x, ...h } = e,
      { spacing: p } = s.useContext(u.c),
      m = s.useId(),
      g = null != n && "" !== n;
    return (0, l.jsxs)("fieldset", {
      ...h,
      className: c()(o.lI, h.className),
      "aria-describedby": g ? m : void 0,
      children: [
        null != a
          ? (0, l.jsxs)(d.E, {
              tag: "legend",
              variant: "text-lg/medium",
              color: "text-strong",
              className: o.o1,
              children: [a, null != x && (0, l.jsx)(i.E, { type: x, variant: "brand" })],
            })
          : null,
        g
          ? (0, l.jsx)(d.E, {
              variant: "text-sm/normal",
              color: "text-default",
              className: o.h_,
              id: m,
              children: n,
            })
          : null,
        (0, l.jsx)(r.B, { direction: "vertical", gap: p, children: t }),
      ],
    });
  }
}
