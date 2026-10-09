/* Recovered shipped factory. Module 867167.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 253151..253537
 * Raw property SHA-256: 3559fd6eabfae1245d9e64453e55c46766575da0f202020361e8435a6bf57f7e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(577687),
    o = n(980320),
    a = n(574151),
    i = 0 / 0,
    u = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    s = /^0o[0-7]+$/i,
    c = parseInt;
  e.exports = function (e) {
    if ("number" == typeof e) return e;
    if (a(e)) return i;
    if (o(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = o(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = r(e);
    var n = l.test(e);
    return n || s.test(e) ? c(e.slice(2), n ? 2 : 8) : u.test(e) ? i : +e;
  };
}
