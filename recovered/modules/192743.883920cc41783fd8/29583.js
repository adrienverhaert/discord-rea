/* Recovered shipped factory. Module 29583.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 143602..144456
 * Raw property SHA-256: f97541012af634519eabb04109be488f5d7c74dbd478ef972b42ad0a0dbeae0c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => a }));
  var r = n(618027);
  function o(e) {
    return (o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function a(e) {
    (0, r.A)(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || ("object" === o(e) && "[object Date]" === t)
      ? new Date(e.getTime())
      : "number" == typeof e || "[object Number]" === t
        ? new Date(e)
        : (("string" == typeof e || "[object String]" === t) &&
            "u" > typeof console &&
            (console.warn(
              "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
            ),
            console.warn(Error().stack)),
          new Date(NaN));
  }
}
