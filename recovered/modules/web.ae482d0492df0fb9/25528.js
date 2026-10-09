/* Recovered shipped factory. Module 25528.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7226475..7226987
 * Raw property SHA-256: 41217779a74b032fc6bba5a96034e47e6263bca51a4316b506a4e93c63a6d55a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Ay: () => E, F9: () => u, nn: () => _ });
  var i = n(582128),
    r = n(17928),
    a = n(778383),
    s = n(280450),
    l = n(290863),
    o = n(461213),
    d = n(652215);
  let c = new Set([d.yTV.XBOX, d.yTV.PS4, d.yTV.PS5]);
  function u(e) {
    return (0, a.A)(e) && !c.has(e?.platform ?? "");
  }
  function _(e, t) {
    return (s.default.getId() === e ? o.A.getActivities() : l.A.getActivities(e, t)).filter(u);
  }
  function E(e, t) {
    let n = (0, r.bG)([o.A, l.A, s.default], () =>
      s.default.getId() === e ? o.A.getActivities() : l.A.getActivities(e, t),
    );
    return i.useMemo(() => n.filter(u), [n]);
  }
}
