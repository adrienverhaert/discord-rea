/* Recovered shipped factory. Module 74114.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7437038..7437401
 * Raw property SHA-256: d846fe1184828cfce702fc3069429f5b857a1acf29e29c553fef511d1782bc54
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { l: () => u });
  var i = n(17928),
    r = n(321404),
    a = n(195443),
    s = n(287809),
    l = n(349435),
    o = n(963555),
    d = n(840387),
    c = n(168447);
  function u(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
      n = (0, a.z)(e),
      u = (0, r.O)(e),
      _ = (0, o.F)(e, l._j.STRANGER_DANGER),
      E = (0, d.Z)(),
      A = t?.isStaff() !== !0,
      h = (0, c.Y)(e).length > 0;
    if (!(!E && A) && !n && !u && !h) return _;
  }
}
