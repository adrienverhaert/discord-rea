/* Recovered shipped factory. Module 321733.
 * Source: recovered/web/assets/933399.5793fe5eebec71ea.js
 * UTF-16 property offsets: 2719..3136
 * Raw property SHA-256: 4f8aeaae41617bec6f172a126ee0fb8ce84c46bca0675061c38eaa26d07dd2f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function n(e, t) {
    for (var r, n = arguments.length, i = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      i[o - 2] = arguments[o];
    if (!e) {
      if (void 0 === t)
        r = Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
        );
      else {
        var a = 0;
        (r = Error(
          t.replace(/%s/g, function () {
            return i[a++];
          }),
        )).name = "Invariant Violation";
      }
      throw ((r.framesToPop = 1), r);
    }
  }
  r.d(t, { V: () => n });
}
