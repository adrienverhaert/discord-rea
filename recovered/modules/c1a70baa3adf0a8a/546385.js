/* Recovered shipped factory. Module 546385.
 * Source: recovered/web/assets/c1a70baa3adf0a8a.js
 * UTF-16 property offsets: 95..625
 * Raw property SHA-256: bffe7744d14caa18816cb410c608da0011401154d126746d98c8a0a594d64d65
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (n, r, i) {
  i.d(r, { A: () => h, k: () => u });
  var a,
    e = i(477900);
  i(582128);
  var s = i(503698),
    c = i.n(s),
    o = i(885574),
    t = i(695366),
    l = i(834730),
    d = i(17227),
    u = (((a = {}).INFO = "info"), (a.WARNING = "warning"), a);
  let p = { info: d.pq, warning: d.$e },
    f = { info: o.CircleInformationIcon, warning: t.E };
  function h(n) {
    let { children: r, className: i, look: a = "info" } = n,
      s = f[a];
    return (0, e.jsxs)("div", {
      className: c()(d.zr, i, p[a]),
      children: [
        (0, e.jsx)(s, { className: d.Kk, color: "currentColor" }),
        (0, e.jsx)(l.E, {
          className: d.Qq,
          variant: "text-sm/medium",
          color: "text-default",
          children: r,
        }),
      ],
    });
  }
}
