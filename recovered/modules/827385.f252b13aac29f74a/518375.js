/* Recovered shipped factory. Module 518375.
 * Source: recovered/web/assets/827385.f252b13aac29f74a.js
 * UTF-16 property offsets: 18056..18449
 * Raw property SHA-256: 2b0cb773b7e6ed1665b5a0bea82ca6605afa4e1fd94c84d008e8682bcaf6c493
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, n, t) {
  t.d(n, { W: () => r });
  var a = t(120330);
  function r(e, n, t, r, u) {
    if ("object" != typeof e) throw TypeError("Options must be an object");
    let s = e[n];
    if (void 0 !== s) {
      if ("boolean" !== t && "string" !== t) throw TypeError("invalid type");
      if (
        ("boolean" === t && (s = !!s),
        "string" === t && (s = (0, a.bf)(s)),
        void 0 !== r && !r.filter((e) => e == s).length)
      )
        throw RangeError(`${s} is not within ${r.join(", ")}`);
      return s;
    }
    return u;
  }
}
