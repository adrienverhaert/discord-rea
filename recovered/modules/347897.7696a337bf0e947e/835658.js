/* Recovered shipped factory. Module 835658.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 474053..474296
 * Raw property SHA-256: c9456f1baa9516fc2307cb25401e05ee21b13250bc82c0b12e7614aaeddcbe6c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = function (e) {
    var t = !0,
      r = !0,
      n = !1;
    if ("function" == typeof e) {
      try {
        (e.call("f", function (e, r, n) {
          "object" != typeof n && (t = !1);
        }),
          e.call(
            [null],
            function () {
              "use strict";
              r = "string" == typeof this;
            },
            "x",
          ));
      } catch (e) {
        n = !0;
      }
      return !n && t && r;
    }
    return !1;
  };
}
