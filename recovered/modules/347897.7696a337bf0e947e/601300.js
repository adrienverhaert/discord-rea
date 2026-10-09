/* Recovered shipped factory. Module 601300.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1001010..1001411
 * Raw property SHA-256: dfb83843ff7f5024b5732dc71de3bcd50cb4505d4af4016074bb560b0e2c454e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  var n = r(949499).default;
  ((e.exports = function (e) {
    if (null != e) {
      var t = e[("function" == typeof Symbol && Symbol.iterator) || "@@iterator"],
        r = 0;
      if (t) return t.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length))
        return {
          next: function () {
            return (e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e });
          },
        };
    }
    throw TypeError(n(e) + " is not iterable");
  }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports));
}
