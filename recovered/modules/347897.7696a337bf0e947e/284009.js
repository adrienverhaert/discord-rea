/* Recovered shipped factory. Module 284009.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 573045..573404
 * Raw property SHA-256: 99de0d30c2cbefd827e5d8d2d89631535fece0ec2a2b0edbef0248679bd1c92e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e, t, r, n, i, o, a, s) {
    if (!e) {
      var l;
      if (void 0 === t)
        l = Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
        );
      else {
        var u = [r, n, i, o, a, s],
          c = 0;
        (l = Error(
          t.replace(/%s/g, function () {
            return u[c++];
          }),
        )).name = "Invariant Violation";
      }
      throw ((l.framesToPop = 1), l);
    }
  };
}
