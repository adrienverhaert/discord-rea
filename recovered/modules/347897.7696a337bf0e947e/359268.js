/* Recovered shipped factory. Module 359268.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 579693..580061
 * Raw property SHA-256: a3c9979e8f77f4bcb4ced533c42032ecccd5497f4c7c3a069646fa2134182be0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = TypeError;
  e.exports = function (e) {
    if (!e || "function" != typeof e.next)
      throw new t("iterator must be an object with a `next` method");
    if (arguments.length > 1) {
      var r,
        n = arguments[1];
      if ("function" != typeof n) throw new t("`callback`, if provided, must be a function");
    }
    for (var i = n || []; (r = e.next()) && !r.done;) n ? n(r.value) : i.push(r.value);
    if (!n) return i;
  };
}
