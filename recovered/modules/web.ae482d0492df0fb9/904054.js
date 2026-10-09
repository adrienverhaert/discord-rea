/* Recovered shipped factory. Module 904054.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7530618..7530886
 * Raw property SHA-256: b57d113cab39877a768d68b29d7b5ce224e63575989207be86726150b72e2b84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => s });
  var i = n(885386),
    r = n(192820),
    a = n(824744);
  function s(e) {
    let t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : (i.dG.getSetting()?.volume ?? 100);
    return Math.min(e * ((0, a.M)(t) / 100) * Math.min(r.Ay.getOutputVolume() / 100, 1), 1);
  }
}
