/* Recovered shipped factory. Module 368617.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 22510..23550
 * Raw property SHA-256: 4399b7854a92e5bb8fd46c93c29777a3a962175e6ef11dbf0b5c5f28186a8dad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ef: () => a, lJ: () => u, xM: () => i });
  var r = ["D", "DD"],
    o = ["YY", "YYYY"];
  function a(e) {
    return -1 !== r.indexOf(e);
  }
  function i(e) {
    return -1 !== o.indexOf(e);
  }
  function u(e, t, n) {
    if ("YYYY" === e)
      throw RangeError(
        "Use `yyyy` instead of `YYYY` (in `"
          .concat(t, "`) for formatting years to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
          ),
      );
    if ("YY" === e)
      throw RangeError(
        "Use `yy` instead of `YY` (in `"
          .concat(t, "`) for formatting years to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
          ),
      );
    if ("D" === e)
      throw RangeError(
        "Use `d` instead of `D` (in `"
          .concat(t, "`) for formatting days of the month to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
          ),
      );
    if ("DD" === e)
      throw RangeError(
        "Use `dd` instead of `DD` (in `"
          .concat(t, "`) for formatting days of the month to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
          ),
      );
  }
}
