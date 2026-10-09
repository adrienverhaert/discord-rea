/* Recovered shipped factory. Module 611924.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4440803..4441035
 * Raw property SHA-256: c75ed4c79e4466727b44dcc7338432f3eb51cd13ef7c3472203a3b52aaff2e02
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => s });
  var i = n(582128),
    r = n(17928),
    a = n(736056);
  function s(e) {
    let [t, n] = (0, r.yK)([a.A], () => [
      a.A.getAllUserExperimentDescriptors(),
      a.A.getGuildExperiments(),
    ]);
    i.useEffect(() => {
      e.trigger();
    }, [e, t, n]);
  }
}
