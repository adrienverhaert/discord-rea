/* Recovered shipped factory. Module 374316.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 11101..11444
 * Raw property SHA-256: 2f153f86de9ca89e7078637ca075ed4b9c9510f306c90a5943bd65c9615dbf79
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(446474),
    o = e(598349),
    i = e(837082),
    u = e(95959),
    a = e(863781),
    c = e(380744),
    f = TypeError,
    s = c("toPrimitive");
  r.exports = function (r, t) {
    if (!o(r) || i(r)) return r;
    var e,
      c = u(r, s);
    if (c) {
      if ((void 0 === t && (t = "default"), !o((e = n(c, r, t))) || i(e))) return e;
      throw new f("Can't convert object to primitive value");
    }
    return (void 0 === t && (t = "number"), a(r, t));
  };
}
