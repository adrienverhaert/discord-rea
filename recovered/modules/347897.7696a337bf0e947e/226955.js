/* Recovered shipped factory. Module 226955.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 458048..458476
 * Raw property SHA-256: 20434e3469f74df696161fe09ed7ba0658b46e260b34c5a7c246a50fa39c942d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  e.exports = function (e, t, n, i) {
    var o = this;
    function a(t) {
      (o.fireCallback(n, t, e),
        "keyup" !== i && (o.ignoreNextKeyup = r(780594)(t)),
        setTimeout(function () {
          o.resetSequences();
        }, 10));
    }
    o.sequenceLevels[e] = 0;
    for (var s = 0; s < t.length; ++s) {
      var l =
        s + 1 === t.length
          ? a
          : (function (t) {
              return function () {
                ((o.nextExpectedAction = t), ++o.sequenceLevels[e], o.resetSequenceTimer());
              };
            })(i || o.getKeyInfo(t[s + 1]).action);
      o.bindSingle(t[s], l, i, e, s);
    }
  };
}
