/* Recovered shipped factory. Module 450460.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1007948..1008299
 * Raw property SHA-256: 7674a5200dc8f5f0f0a782e51c38588e0a8da4a622afc10d0286dd1895a90ef0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(839036)("%Reflect.construct%", !0),
    i = r(173081);
  try {
    i({}, "", { "[[Get]]": function () {} });
  } catch (e) {
    i = null;
  }
  if (i && n) {
    var o = {},
      a = {};
    (i(a, "length", {
      "[[Get]]": function () {
        throw o;
      },
      "[[Enumerable]]": !0,
    }),
      (e.exports = function (e) {
        try {
          n(e, a);
        } catch (e) {
          return e === o;
        }
      }));
  } else
    e.exports = function (e) {
      return "function" == typeof e && !!e.prototype;
    };
}
