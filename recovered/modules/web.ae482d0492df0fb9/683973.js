/* Recovered shipped factory. Module 683973.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8173004..8173288
 * Raw property SHA-256: 152ea2849fe356ed8c6c7348250b413e4b443ff1ddf990fc008aa47ede16940a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { k: () => l });
  var i = n(582128),
    r = n(17928),
    a = n(594061),
    s = n(617617);
  function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return (
      i.useEffect(() => {
        e && a.bW.loadIfNecessary();
      }, [e]),
      (0, r.bG)([s.A], () => s.A.frecencyWithoutFetchingLatest)
    );
  }
}
