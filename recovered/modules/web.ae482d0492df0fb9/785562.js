/* Recovered shipped factory. Module 785562.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5789019..5789881
 * Raw property SHA-256: dd4fa2e36e798b19d079cae962d2af1368995e6dfe44dbd301f7b7a6daedbcb7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => f });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(866665),
    o = n(536637),
    d = n.n(o),
    c = n(265431),
    u = n(927813),
    _ = n(379418);
  let E = [
      [2 * u.A.Seconds.MINUTE, u.A.Seconds.SECOND],
      [5 * u.A.Seconds.MINUTE, u.A.Seconds.MINUTE],
      [45 * u.A.Seconds.MINUTE, 2 * u.A.Seconds.MINUTE],
      [21 * u.A.Seconds.HOUR, 5 * u.A.Seconds.MINUTE],
    ],
    A = 2 * u.A.Seconds.HOUR;
  var h = n(165648);
  function f(e) {
    let t,
      { node: n, showTooltip: a = !0, className: o } = e,
      u =
        ((t = (0, c.A)()),
        (r.useEffect(() => {
          if ("R" !== n.format) return;
          let e = 1e3 * A,
            i = Math.abs(n.parsed.diff(d()()));
          for (let [t, n] of E)
            if (i < 1e3 * t) {
              e = 1e3 * n;
              break;
            }
          let r = setInterval(() => {
            t();
          }, e);
          return () => clearInterval(r);
        }, [t, n.format, n.parsed]),
        "R" === n.format)
          ? _.kx.R(n.parsed)
          : n.formatted),
      f = (0, i.jsx)("span", { className: s()(h.vE, o), children: u });
    return !0 !== a
      ? f
      : (0, i.jsx)(l.m, { __unsupportedReactNodeAsText: n.full, ariaHidden: !0, children: f });
  }
}
