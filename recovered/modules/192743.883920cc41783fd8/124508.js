/* Recovered shipped factory. Module 124508.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 53964..54561
 * Raw property SHA-256: 25d2119bab558cf9e704171831ac5c0a51c19286e085eab5ec5c28f8f4ab00ce
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
        (void 0 === n || n < t || isNaN(Number(t))) && (n = t);
      }),
      n || new Date(NaN)
    );
  }
}
