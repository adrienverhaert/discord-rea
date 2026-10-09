/* Recovered shipped factory. Module 973280.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 994345..994713
 * Raw property SHA-256: 6c6cc2a2dae6b2a84c8469f03768129c4d6cbda583cc1d51f04b6435b833e3c4
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  var n = r(306095);
  function i(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      ((i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, n(i.key), i));
    }
  }
  ((e.exports = function (e, t, r) {
    return (
      t && i(e.prototype, t),
      r && i(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports));
}
