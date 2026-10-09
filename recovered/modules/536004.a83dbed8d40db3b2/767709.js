/* Recovered shipped factory. Module 767709.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 7443..7693
 * Raw property SHA-256: 57648697d47e585d5f8fe4b38b4affd818f696ff689e6f1a9cc2e4808d7a1454
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(739305),
    o = e(410323),
    a = e(514575),
    i = e(412405),
    p = n.aTypedArray,
    f = n.getTypedArrayConstructor,
    u = n.exportTypedArrayMethod,
    y = o(n.TypedArrayPrototype.sort);
  u("toSorted", function (r) {
    void 0 !== r && a(r);
    var t = p(this);
    return y(i(f(t), t), r);
  });
}
