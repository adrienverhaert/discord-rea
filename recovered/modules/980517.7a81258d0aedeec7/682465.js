/* Recovered shipped factory. Module 682465.
 * Source: recovered/web/assets/980517.7a81258d0aedeec7.js
 * UTF-16 property offsets: 44260..44646
 * Raw property SHA-256: bf85c1fdb9833b650aa550a4d833b95587e1c2fc9e76d06ca3ac258c5103b78b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { A: () => a });
  var n = r(491301);
  function a(e) {
    var t = (function (e, t) {
      if ("object" != (0, n.A)(e) || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var a = r.call(e, t || "default");
        if ("object" != (0, n.A)(a)) return a;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" == (0, n.A)(t) ? t : t + "";
  }
}
