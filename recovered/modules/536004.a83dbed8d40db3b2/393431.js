/* Recovered shipped factory. Module 393431.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 6098..6286
 * Raw property SHA-256: 77fd8a147f43367735bd59a704d37141a3f151a4737dc2920465f2b14532826a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(739305),
    o = e(503199),
    a = e(120394),
    i = n.aTypedArray;
  (0, n.exportTypedArrayMethod)("at", function (r) {
    var t = i(this),
      e = o(t),
      n = a(r),
      p = n >= 0 ? n : e + n;
    return p < 0 || p >= e ? void 0 : t[p];
  });
}
