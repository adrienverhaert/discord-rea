/* Recovered shipped factory. Module 907459.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7908393..7908717
 * Raw property SHA-256: 2997d969fb40fa530c72dd8b3ea039ea649e9fbcfcc2dbd306ed79c16b3e5fbc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { L: () => r });
  var i = n(57985);
  function r(e, t, n) {
    let r = (0, i.Y1)(n);
    return null == r
      ? e
      : "vc_probability" === r
        ? [...e].sort(
            (e, n) => (t.get(n.id)?.vcProbability ?? 0) - (t.get(e.id)?.vcProbability ?? 0),
          )
        : [...e].sort(
            (e, n) =>
              (t.get(n.id)?.communicationProbability ?? 0) -
              (t.get(e.id)?.communicationProbability ?? 0),
          );
  }
}
