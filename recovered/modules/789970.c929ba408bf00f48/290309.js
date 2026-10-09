/* Recovered shipped factory. Module 290309.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 163606..163870
 * Raw property SHA-256: ade4c9e47224b07352cce45cf115d0d0068cb241ae420c90d67e6cbfd0356981
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function i(e, t, r) {
    var i = r.getRegistry(),
      n = i.addTarget(e, t);
    return [
      n,
      function () {
        return i.removeTarget(n);
      },
    ];
  }
  function n(e, t, r) {
    var i = r.getRegistry(),
      n = i.addSource(e, t);
    return [
      n,
      function () {
        return i.removeSource(n);
      },
    ];
  }
  r.d(t, { V: () => n, l: () => i });
}
