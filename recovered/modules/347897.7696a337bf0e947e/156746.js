/* Recovered shipped factory. Module 156746.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1001670..1002017
 * Raw property SHA-256: 89f0fd54f653a1894fc0eb24d204e40c2a6077dc6299e115ff447b517a239258
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  var n = r(949499).default;
  ((e.exports = function (e, t) {
    if ("object" != n(e) || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var i = r.call(e, t || "default");
      if ("object" != n(i)) return i;
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  }),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports));
}
