/* Recovered shipped factory. Module 928568.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5463127..5463421
 * Raw property SHA-256: 230771249a2d38df6f3230250e526168d2ce691eaa132ac510a773625de045bd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(17928),
    r = n(212455),
    a = n(71393);
  function s() {
    return (0, i.yK)([r.A, a.A], () =>
      (function () {
        let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.A, a.A],
          n = e.computeGuildIds(),
          i = t.getGuilds();
        return n.filter((e) => null == i[e]);
      })([r.A, a.A]),
    );
  }
}
