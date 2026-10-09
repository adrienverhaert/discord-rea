/* Recovered shipped factory. Module 949186.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 635196..635435
 * Raw property SHA-256: 1487f6f74ccea4a163407ada6aee25aacd201bd595add6bbaa4d5ef22ead0cf7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(410323),
    o = Error,
    a = r("".replace),
    i = String(new o("zxcasd").stack),
    u = /\n\s*at [^:]*:[^\n]*/,
    l = u.test(i);
  e.exports = function (e, t) {
    if (l && "string" == typeof e && !o.prepareStackTrace) for (; t--;) e = a(e, u, "");
    return e;
  };
}
