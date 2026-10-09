/* Recovered shipped factory. Module 448360.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 173742..173928
 * Raw property SHA-256: c024ccf6787b77adb062af0e856d4d6f727e5c1afe7b8411c8f89bf604cbcef0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  var t = Date.now;
  e.exports = function (e) {
    var n = 0,
      r = 0;
    return function () {
      var o = t(),
        a = 16 - (o - r);
      if (((r = o), a > 0)) {
        if (++n >= 800) return arguments[0];
      } else n = 0;
      return e.apply(void 0, arguments);
    };
  };
}
