/* Recovered shipped factory. Module 914410.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7226988..7228261
 * Raw property SHA-256: 902b4bd6406721eb63023d9cdf6aa04f3437b6c21c2da1266b670b4a89c5af65
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => A, fh: () => E, qP: () => _ });
  var i,
    r,
    a = n(477900),
    s = n(582128),
    l = n(503698),
    o = n.n(l);
  n(284009);
  var d = n(736653),
    c = n(652215),
    u = n(894726),
    _ = (((i = {}).UNSET = "unset"), (i.BLUE = "blue"), (i.ORANGE = "orange"), i),
    E = (((r = {}).LIGHT = "light"), (r.MEDIUM = "medium"), r);
  let A = function (e) {
    let {
        progress: t,
        minimum: n = 0,
        maximum: i = 100,
        weight: r = "light",
        variant: l,
        override: _,
        glowing: E = !0,
        labelledBy: A,
      } = e,
      h = null != _ && "unset" === l,
      f = (0, d.Ay)(),
      I =
        _?.[
          (function (e) {
            switch (e) {
              case c.NJ8.LIGHT:
                return "light";
              case c.NJ8.ASH:
                return "dark";
              case c.NJ8.DARK:
                return "darker";
              case c.NJ8.ONYX:
                return "midnight";
              default:
                return "dark";
            }
          })(f)
        ] ?? _?.default,
      p = s.useMemo(() => ((t - n) / (i - n)) * 100, [t, n, i]),
      T = t === n,
      m = {
        ...(h
          ? {
              "--custom-background": I?.background,
              "--custom-gradient-start": I?.gradientStart,
              "--custom-gradient-end": I?.gradientEnd,
              "--custom-gradient-glow": I?.gradientEnd,
            }
          : {}),
        ...(!E && { "--custom-gradient-glow": "transparent" }),
      };
    return (0, a.jsx)("div", {
      className: o()(u.progressContainer, u[r], u[l]),
      style: m,
      children: (0, a.jsxs)("div", {
        className: o()(u.progress, { [u.empty]: T }),
        style: { width: `${p}%` },
        role: "meter",
        "aria-valuenow": t,
        "aria-valuemin": n,
        "aria-valuemax": i,
        "aria-labelledby": A,
        children: [
          (0, a.jsx)("div", { className: o()(u.glow, { [u.empty]: T }) }),
          (0, a.jsx)("div", { className: o()(u.bar, u[l], { [u.empty]: T }) }),
        ],
      }),
    });
  };
}
