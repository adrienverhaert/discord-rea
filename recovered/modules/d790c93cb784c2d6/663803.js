/* Recovered shipped factory. Module 663803.
 * Source: recovered/web/assets/d790c93cb784c2d6.js
 * UTF-16 property offsets: 95..1033
 * Raw property SHA-256: 56ab2e58e2d02066dde2bc4b3b83486092ca41b4232f8570895952dcf9e9fe52
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { l: () => f });
  var a = n(477900),
    i = n(582128),
    c = n(503698),
    r = n.n(c),
    s = n(408278),
    l = n(834040),
    o = n(95477),
    d = n(307301),
    u = n(660183),
    b = n(241321);
  function p(e) {
    return "" === e || "-" === e;
  }
  function f(e) {
    let { value: t, onChange: n, className: c, minValue: f, maxValue: m } = e,
      [y, E] = i.useState(t),
      h = p(y) || (null != f && y <= f),
      v = p(y) || (null != m && y >= m);
    function x(e) {
      (n(p(e) ? (f ?? 0) : e), E(e));
    }
    return (0, a.jsxs)("div", {
      className: r()(b.o, c),
      children: [
        (0, a.jsx)(s.K, {
          variant: "icon-only",
          size: "sm",
          icon: l.MinusIcon,
          onClick: function (e) {
            (e.stopPropagation(), h || x(y - 1));
          },
          "aria-label": u.intl.string(u.t["k+ohJm"]),
          disabled: h,
        }),
        (0, a.jsx)("div", {
          className: b.U,
          children: (0, a.jsx)(o.k, {
            value: `${y}`,
            onChange: function (e) {
              if (p(e)) return x(e);
              let t = parseInt(e);
              if (!isNaN(t)) return null != m && t >= m ? x(m) : null != f && t <= f ? x(f) : x(t);
            },
          }),
        }),
        (0, a.jsx)(s.K, {
          size: "sm",
          variant: "icon-only",
          icon: d.j,
          onClick: function (e) {
            (e.stopPropagation(), v || x(y + 1));
          },
          "aria-label": u.intl.string(u.t.w8Sc4B),
          disabled: v,
        }),
      ],
    });
  }
}
