/* Recovered shipped factory. Module 548671.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 170435..170709
 * Raw property SHA-256: 6546d36c7a703273048eeba02a521c2558369981ce5641982448003667ea87f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(377482),
    o = n(574151),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    i = /^\w*$/;
  e.exports = function (e, t) {
    if (r(e)) return !1;
    var n = typeof e;
    return (
      !!("number" == n || "symbol" == n || "boolean" == n || null == e || o(e)) ||
      i.test(e) ||
      !a.test(e) ||
      (null != t && e in Object(t))
    );
  };
}
