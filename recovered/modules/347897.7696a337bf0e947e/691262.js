/* Recovered shipped factory. Module 691262.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 542885..543115
 * Raw property SHA-256: 611ef34e3843d7a2c8a98846b5920482766ac2faef9c9cbbe41f84c8a1c88d12
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  t.extend = function (e) {
    var t,
      n,
      i,
      o,
      a = Array.prototype.slice.call(arguments, 1);
    for (t = 0, n = a.length; t < n; t += 1)
      if ((i = a[t])) for (o in i) r.call(i, o) && (e[o] = i[o]);
    return e;
  };
  var r = Object.prototype.hasOwnProperty;
  t.hop = r;
}
