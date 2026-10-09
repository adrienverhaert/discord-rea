/* Recovered shipped factory. Module 217594.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 54562..55161
 * Raw property SHA-256: c8f0b16ecefe9d152e86669edaf1d1c7e7b6e1c4dc566fd0c032854c739058fa
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.r(t), n.d(t, { default: () => i }));
  var r = n(29583),
    o = n(618027);
  function a(e) {
    return (a =
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
  function i(e) {
    var t, n;
    if (((0, o.A)(1, arguments), e && "function" == typeof e.forEach)) t = e;
    else {
      if ("object" !== a(e) || null === e) return new Date(NaN);
      t = Array.prototype.slice.call(e);
    }
    return (
      t.forEach(function (e) {
        var t = (0, r.default)(e);
        (void 0 === n || n > t || isNaN(t.getDate())) && (n = t);
      }),
      n || new Date(NaN)
    );
  }
}
